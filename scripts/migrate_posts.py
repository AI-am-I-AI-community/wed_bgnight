import os
import pandas as pd
import xml.etree.ElementTree as ET
import re
import shutil

# Define paths
obsidian_vault_path = "/Users/masaya/Library/Mobile Documents/iCloud~md~obsidian/Documents/Obsidian_iCloud"
log_inatabi_path = os.path.join(obsidian_vault_path, "01_secondme", "DATA", "log_inatabi")
website_posts_path = os.path.join(obsidian_vault_path, "Public", "WEB", "Masaya", "src", "posts")
seo_csv_path = os.path.join(log_inatabi_path, "inatabiSEO", "ページ.csv")
xml_export_path = os.path.join(log_inatabi_path, "イナタビ WordPress エクスポート 2025年7月4日.xml")
markdown_posts_path = os.path.join(log_inatabi_path, "markdown_posts")

# Create the target directory if it doesn't exist
os.makedirs(website_posts_path, exist_ok=True)

# --- 1. Read and filter popular posts from CSV ---
try:
    df = pd.read_csv(seo_csv_path)
    # Filter by clicks and exclude certain pages
    popular_posts = df[df['2024/03/04 - 2025/07/03 クリック数'] > 50]
    # Extract the slug from the URL
    popular_posts['slug'] = popular_posts['上位のページ'].apply(lambda x: x.split('/')[-2] if x.endswith('/') else x.split('/')[-1])
    print(f"Found {len(popular_posts)} popular posts with > 50 clicks.")
except FileNotFoundError:
    print(f"Error: SEO CSV file not found at {seo_csv_path}")
    exit()
except Exception as e:
    print(f"An error occurred while processing the CSV file: {e}")
    exit()

# --- 2. Parse the WordPress XML to map slugs to content ---
try:
    # Register the namespaces to handle them correctly
    namespaces = {
        'wp': 'http://wordpress.org/export/1.2/',
        'content': 'http://purl.org/rss/1.0/modules/content/',
        'dc': 'http://purl.org/dc/elements/1.1/'
    }
    with open(xml_export_path, 'r', encoding='utf-8') as f:
        xml_content = f.read()
    # Remove non-printable characters
    xml_content = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f]', '', xml_content)
    root = ET.fromstring(xml_content)
    
    slug_to_content = {}
    for item in root.findall('channel/item'):
        post_type_element = item.find('wp:post_type', namespaces)
        if post_type_element is not None and post_type_element.text == 'post':
            slug_element = item.find('wp:post_name', namespaces)
            title_element = item.find('title')
            content_element = item.find('content:encoded', namespaces)

            if slug_element is not None and title_element is not None and content_element is not None:
                slug = slug_element.text
                title = title_element.text
                content = content_element.text if content_element.text is not None else ''
            
                # Clean up content: remove HTML tags, extra newlines, etc.
                # This is a simple cleaning, more complex regex might be needed
                clean_content = re.sub(r'<[^>]+>', '', content) # Remove HTML tags
                clean_content = os.linesep.join([s for s in clean_content.splitlines() if s]) # Remove empty lines
                
                slug_to_content[slug] = {
                    "title": title,
                    "content": clean_content
                }
            
    print(f"Parsed {len(slug_to_content)} posts from the XML file.")

except ET.ParseError as e:
    print(f"Error parsing XML file: {e}")
    exit()
except FileNotFoundError:
    print(f"Error: WordPress export file not found at {xml_export_path}")
    exit()
except Exception as e:
    print(f"An error occurred while processing the XML file: {e}")
    exit()

# --- 3. Find matches and copy files ---
migrated_count = 0
for index, row in popular_posts.iterrows():
    slug = row['slug']
    if slug in slug_to_content:
        post_data = slug_to_content[slug]
        title = post_data['title']
        content = post_data['content']
        
        # Sanitize title to create a valid filename
        safe_filename = re.sub(r'[^a-zA-Z0-9\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF-]+', '_', title).strip('_') + '.md'
        new_filepath = os.path.join(website_posts_path, safe_filename)
        
        try:
            with open(new_filepath, 'w', encoding='utf-8') as f:
                f.write(f"# {title}\n\n")
                f.write(content)
            print(f"Successfully migrated: '{title}' to '{safe_filename}'")
            migrated_count += 1
        except IOError as e:
            print(f"Error writing file for '{title}': {e}")
        except Exception as e:
            print(f"An unexpected error occurred during file writing: {e}")


print(f"\n--- Migration Summary ---")
print(f"Total popular posts found: {len(popular_posts)}")
print(f"Total posts parsed from XML: {len(slug_to_content)}")
print(f"Successfully migrated {migrated_count} posts to {website_posts_path}")

# Optional: List the new files in the directory
print("\n--- Files in website/src/posts ---")
for filename in os.listdir(website_posts_path):
    print(filename)