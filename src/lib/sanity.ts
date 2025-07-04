import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2023-12-01',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// Blog post queries
export async function getAllBlogPosts() {
  return sanityClient.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      readingTime,
      featured,
      tags
    }
  `)
}

export async function getBlogPost(slug: string) {
  return sanityClient.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      content,
      excerpt,
      publishedAt,
      category,
      readingTime,
      featured,
      tags,
      obsidianPath
    }
  `, { slug })
}

export async function getFeaturedBlogPosts() {
  return sanityClient.fetch(`
    *[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      readingTime,
      featured,
      tags
    }
  `)
}

export async function getBlogPostsByCategory(category: string) {
  return sanityClient.fetch(`
    *[_type == "blogPost" && category == $category] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      readingTime,
      featured,
      tags
    }
  `, { category })
}

export async function getAllCategories() {
  return sanityClient.fetch(`
    *[_type == "blogPost"] {
      category
    } | order(category asc)
  `)
}

// Types
export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  content?: string
  excerpt: string
  publishedAt: string
  category: string
  readingTime: number
  featured: boolean
  tags: string[]
  obsidianPath?: string
} 