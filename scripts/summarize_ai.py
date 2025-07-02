#!/usr/bin/env python3
"""
Summarize RAW markdown files via OpenAI and save to 1.analize.
Fill OPENAI_API_KEY env var before running.
"""
import os, pathlib, openai, datetime

openai.api_key = os.getenv('OPENAI_API_KEY')
VAULT = pathlib.Path(__file__).resolve().parents[1]
RAW_BASE = VAULT / '02_data' / '0.RAW' / 'voice'
AI_BASE = VAULT / '02_data' / '1.analize' / 'voice'
month = datetime.date.today().strftime('%Y%m')
AI_DIR = AI_BASE / month
AI_DIR.mkdir(parents=True, exist_ok=True)

for md in (RAW_BASE/month).glob('*.md'):
    ai_file = AI_DIR / f"{md.stem}_ai.md"
    if ai_file.exists():
        continue
    text = md.read_text()
    # Minimal prompt
    prompt = f"次のメモを200文字で要約し、TODOがあれば列挙:\n{text}"
    resp = openai.ChatCompletion.create(model="gpt-4o", messages=[{"role":"user","content":prompt}])
    summary = resp.choices[0].message.content.strip()
    ai_file.write_text(f"---\nsource: {md.relative_to(VAULT)}\ndomain: private\nsummary_level: first_pass\nimpact: medium\n---\n\n{summary}")
print('AI summarization done') 