
import re
import csv
import os

# --- Configuration ---
WORKSPACE_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
CANDIDATES_PATH = os.path.join(WORKSPACE_ROOT, 'scripts', 'slug_candidates.txt')
OUTPUT_CSV_PATH = os.path.join(WORKSPACE_ROOT, 'scripts', 'slug_map.csv')
# --- End Configuration ---

def create_slug_map():
    """Parses the text file to create a title-slug map."""
    print(f"Reading candidates from {CANDIDATES_PATH}...")
    
    try:
        with open(CANDIDATES_PATH, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except FileNotFoundError:
        print(f"Error: Candidates file not found at {CANDIDATES_PATH}")
        return None

    slug_map = []
    i = 0
    while i < len(lines) - 1:
        title_line = lines[i].strip()
        slug_line = lines[i+1].strip()

        # Extract content from <title> and <wp:post_name> tags
        title_match = re.search(r'>([^<]+)<|CDATA\[(.*?)\]\]', title_line)
        slug_match = re.search(r'>([^<]+)<|CDATA\[(.*?)\]\]', slug_line)

        if title_match and slug_match and 'wp:post_name' in slug_line:
            # The regex returns two groups, one for CDATA and one for non-CDATA. Get the one that matched.
            title = next((g for g in title_match.groups() if g is not None), None)
            slug = next((g for g in slug_match.groups() if g is not None), None)

            if title and slug:
                slug_map.append({'title': title.strip(), 'slug': slug.strip()})
                i += 2  # Move to the next pair
            else:
                i += 1 # Move to the next line
        else:
            i += 1 # Move to the next line
            
    print(f"Successfully created map for {len(slug_map)} posts.")
    return slug_map

def save_to_csv(slug_map):
    """Saves the extracted title-slug map to a CSV file."""
    if not slug_map:
        print("No data to save.")
        return

    print(f"Saving data to {OUTPUT_CSV_PATH}...")
    try:
        with open(OUTPUT_CSV_PATH, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = ['title', 'slug']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            
            writer.writeheader()
            writer.writerows(slug_map)
        print("Successfully saved slug map to CSV.")
    except IOError as e:
        print(f"Error writing to CSV file: {e}")

if __name__ == "__main__":
    extracted_data = create_slug_map()
    if extracted_data:
        save_to_csv(extracted_data)
