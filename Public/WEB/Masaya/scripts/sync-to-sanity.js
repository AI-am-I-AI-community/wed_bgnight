const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { createClient } = require('@sanity/client');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

// Sanity client setup
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2023-12-01'
});

// Helper function to generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[【】]/g, '') // Remove Japanese brackets
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single
    .trim();
}

// Helper function to extract category from title
function extractCategory(title) {
  if (title.includes('【はじめに】')) return 'introduction';
  if (title.includes('【ストーリー】')) return 'story';
  if (title.includes('【メリット】')) return 'benefits';
  if (title.includes('【テクニック】')) return 'technique';
  if (title.includes('【ケーススタディ】')) return 'case-study';
  if (title.includes('【アドバンス】')) return 'advanced';
  return 'introduction'; // default
}

// Helper function to estimate reading time
function estimateReadingTime(content) {
  const wordsPerMinute = 200; // Japanese reading speed
  const wordCount = content.length / 2; // Rough estimate for Japanese
  return Math.ceil(wordCount / wordsPerMinute);
}

// Helper function to extract excerpt from content
function extractExcerpt(content, maxLength = 150) {
  const cleanContent = content
    .replace(/#{1,6}\s/g, '') // Remove headers
    .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
    .replace(/\*([^*]+)\*/g, '$1') // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
    .trim();
  
  return cleanContent.length > maxLength 
    ? cleanContent.substring(0, maxLength) + '...'
    : cleanContent;
}

async function syncBlogPosts() {
  try {
    console.log('Starting blog post sync...');
    
    // Path to blog posts directory
    const blogPostsDir = path.join(process.cwd(), '..', '02_team', 'AAI', '03_content', 'blog_posts');
    
    if (!fs.existsSync(blogPostsDir)) {
      console.log('Blog posts directory not found:', blogPostsDir);
      return;
    }
    
    // Get all markdown files
    const files = fs.readdirSync(blogPostsDir)
      .filter(file => file.endsWith('.md'))
      .sort();
    
    console.log(`Found ${files.length} blog posts to sync`);
    
    for (const file of files) {
      const filePath = path.join(blogPostsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Parse front matter and content
      const { data: frontMatter, content } = matter(fileContent);
      
      // Extract title from filename or front matter
      const title = frontMatter.title || file.replace(/^\d+_/, '').replace('.md', '');
      
      // Generate slug
      const slug = generateSlug(title);
      
      // Prepare document for Sanity
      const document = {
        _type: 'blogPost',
        title: title,
        slug: {
          _type: 'slug',
          current: slug
        },
        content: content,
        excerpt: extractExcerpt(content),
        category: extractCategory(title),
        readingTime: estimateReadingTime(content),
        publishedAt: frontMatter.date || new Date().toISOString(),
        featured: frontMatter.featured || false,
        tags: frontMatter.tags || [],
        obsidianPath: `02_team/AAI/03_content/blog_posts/${file}`
      };
      
      // Check if document already exists
      const existingDoc = await client.fetch(
        `*[_type == "blogPost" && slug.current == $slug][0]`,
        { slug }
      );
      
      if (existingDoc) {
        // Update existing document
        await client.patch(existingDoc._id).set(document).commit();
        console.log(`Updated: ${title}`);
      } else {
        // Create new document
        await client.create(document);
        console.log(`Created: ${title}`);
      }
    }
    
    console.log('Blog post sync completed successfully!');
    
  } catch (error) {
    console.error('Error syncing blog posts:', error);
    process.exit(1);
  }
}

// Run the sync
syncBlogPosts(); 