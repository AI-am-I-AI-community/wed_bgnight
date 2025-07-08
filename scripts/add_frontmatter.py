

import os
import re
from datetime import datetime

posts_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../Public/WEB/Masaya/src/posts'))

for filename in os.listdir(posts_dir):
    if filename.endswith('.md'):
        filepath = os.path.join(posts_dir, filename)

        with open(filepath, 'r+', encoding='utf-8') as f:
            content = f.read()

            # Check if frontmatter already exists
            if content.startswith('---'):
                print(f'Skipping {filename}, frontmatter already exists.')
                continue

            # Extract title from the first heading
            title_match = re.search(r'^#\s+(.*)', content, re.MULTILINE)
            title = title_match.group(1) if title_match else os.path.splitext(filename)[0]
            
            # Use file modification time as date
            mod_time = os.path.getmtime(filepath)
            date = datetime.fromtimestamp(mod_time).strftime('%Y-%m-%d')

            frontmatter = f'---\ntitle: \'{title}\'\ndate: \'{date}\'\n---\n\n'

            f.seek(0, 0)
            f.write(frontmatter + content)
            print(f'Added frontmatter to {filename}')

