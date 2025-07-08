import os
import re

# Define the path to the posts directory
website_posts_path = "/Users/masaya/Library/Mobile Documents/iCloud~md~obsidian/Documents/Obsidian_iCloud/Public/WEB/Masaya/src/posts"

# Dictionary to store file content hashes and their paths
content_hashes = {}
duplicates_found = []

# Get list of all markdown files in the directory
md_files = [f for f in os.listdir(website_posts_path) if f.endswith('.md')]

print(f"Found {len(md_files)} markdown files in {website_posts_path}")

for filename in md_files:
    filepath = os.path.join(website_posts_path, filename)
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            # Remove the title line for content comparison
            content_without_title = re.sub(r'^# .*\n', '', content, 1)
            
            # Use the content itself as a key for simplicity, or a hash for very large files
            if content_without_title in content_hashes:
                duplicates_found.append(filepath)
                print(f"Duplicate found: {filename} (original: {os.path.basename(content_hashes[content_without_title])})")
            else:
                content_hashes[content_without_title] = filepath
    except Exception as e:
        print(f"Error reading file {filename}: {e}")

print(f"Found {len(duplicates_found)} duplicate files.")

# Delete duplicate files
for duplicate_filepath in duplicates_found:
    try:
        os.remove(duplicate_filepath)
        print(f"Deleted duplicate file: {os.path.basename(duplicate_filepath)}")
    except Exception as e:
        print(f"Error deleting file {os.path.basename(duplicate_filepath)}: {e}")

print("\n--- Remaining files in website/src/posts ---")
remaining_files = [f for f in os.listdir(website_posts_path) if f.endswith('.md')]
for filename in remaining_files:
    print(filename)
