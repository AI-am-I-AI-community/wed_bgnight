

import os
import csv
import re
import shutil

# --- Configuration ---
WORKSPACE_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
POSTS_DIR = os.path.join(WORKSPACE_ROOT, 'Public', 'WEB', 'Masaya', 'src', 'posts')
CSV_PATH = os.path.join(WORKSPACE_ROOT, 'scripts', 'slug_map.csv')
# --- End Configuration ---

def load_slug_map():
    """Loads the title-to-slug mapping from the CSV file."""
    if not os.path.exists(CSV_PATH):
        print(f"Error: slug_map.csv not found at {CSV_PATH}")
        return None
    
    title_to_slug = {}
    with open(CSV_PATH, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Use a cleaned-up title as the key
            clean_title = row['title'].strip()
            if clean_title:
                title_to_slug[clean_title] = row['slug']
    print(f"Loaded {len(title_to_slug)} slug mappings from CSV.")
    return title_to_slug

def update_and_rename_posts(title_to_slug):
    """Updates frontmatter and renames post files based on the slug map."""
    if not title_to_slug:
        print("Slug map is empty. Aborting.")
        return

    processed_count = 0
    not_found_count = 0
    already_processed_count = 0

    for filename in os.listdir(POSTS_DIR):
        if not filename.endswith('.md'):
            continue

        original_filepath = os.path.join(POSTS_DIR, filename)

        try:
            with open(original_filepath, 'r+', encoding='utf-8') as f:
                content = f.read()
                
                # Find frontmatter block
                fm_match = re.match(r'---\n(.*?)\n---\n', content, re.DOTALL)
                if not fm_match:
                    continue

                frontmatter_str = fm_match.group(1)
                
                # Check if slug already exists
                if 'slug:' in frontmatter_str:
                    already_processed_count += 1
                    continue

                # Extract title from frontmatter
                title_match = re.search(r"title:\s*['\"](.*?)['\"]", frontmatter_str)
                if not title_match:
                    continue
                
                current_title = title_match.group(1).strip()

                # Find the corresponding slug in the map
                slug = title_to_slug.get(current_title)

                if slug:
                    # Add slug to frontmatter
                    new_frontmatter_str = frontmatter_str.strip() + f"\nslug: '{slug}'\n"
                    new_content = content.replace(frontmatter_str, new_frontmatter_str)
                    
                    # Define new file path
                    new_filename = f"{slug}.md"
                    new_filepath = os.path.join(POSTS_DIR, new_filename)

                    # Check for potential filename collision
                    if os.path.exists(new_filepath) and original_filepath != new_filepath:
                        print(f"Warning: File '{new_filename}' already exists. Skipping rename for '{filename}'.")
                        continue

                    # Write updated content back to the original file first
                    f.seek(0)
                    f.write(new_content)
                    f.truncate()
                    
                    # Now, rename the file
                    shutil.move(original_filepath, new_filepath)
                    print(f"Processed and renamed '{filename}' to '{new_filename}'")
                    processed_count += 1
                else:
                    print(f"Notice: Title '{current_title}' from file '{filename}' not found in slug map.")
                    not_found_count += 1

        except Exception as e:
            print(f"Error processing file {filename}: {e}")

    print("\n--- Processing Summary ---")
    print(f"Successfully processed and renamed: {processed_count}")
    print(f"Already had a slug: {already_processed_count}")
    print(f"Titles not found in map: {not_found_count}")
    print("--------------------------")

if __name__ == "__main__":
    slug_map = load_slug_map()
    if slug_map:
        update_and_rename_posts(slug_map)

