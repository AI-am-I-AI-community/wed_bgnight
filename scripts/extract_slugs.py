import re
import csv
import os

# --- Configuration ---
WORKSPACE_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
XML_FILE_PATH = os.path.join(WORKSPACE_ROOT, '01_secondme', 'DATA', 'log_inatabi', 'イナタビ WordPress エクスポート 2025年7月4日.xml')
OUTPUT_CSV_PATH = os.path.join(WORKSPACE_ROOT, 'scripts', 'slug_map.csv')
# --- End Configuration ---

def robust_parse_wordpress_export():
    """Parses the WordPress export XML using regex to be robust against malformed XML."""
    print(f"Starting robust parsing of {XML_FILE_PATH}...")
    
    try:
        with open(XML_FILE_PATH, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: XML file not found at {XML_FILE_PATH}")
        return None

    slug_map = []
    # Regex to find <item> blocks for posts
    item_regex = re.compile(r'<item>.*?<wp:post_type>post</wp:post_type>.*?</item>', re.DOTALL)
    # Regex to find title and slug within an item block
    title_regex = re.compile(r'<title><![CDATA[(.*?)]]></title>')
    slug_regex = re.compile(r'<wp:post_name><![CDATA[(.*?)]]></wp:post_name>')

    for item_match in item_regex.finditer(content):
        item_content = item_match.group(0)
        title_match = title_regex.search(item_content)
        slug_match = slug_regex.search(item_content)

        if title_match and slug_match:
            title = title_match.group(1)
            slug = slug_match.group(1)
            if title and slug:
                slug_map.append({'title': title, 'slug': slug})

    print(f"Found {len(slug_map)} posts.")
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
    extracted_data = robust_parse_wordpress_export()
    if extracted_data:
        save_to_csv(extracted_data)