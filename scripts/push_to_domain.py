#!/usr/bin/env python3
"""Scan 2.reflexion for #decision tags and append to Business/Private README."""
import pathlib, re, datetime

VAULT = pathlib.Path(__file__).resolve().parents[1]
REFL = VAULT/'02_data'/'2.reflexion'
BUS_README = VAULT/'04_business'/'README.md'
PRI_README = VAULT/'03_private'/'README.md'

def append_if_new(readme_path, entry):
    content = readme_path.read_text() if readme_path.exists() else ''
    if entry in content:
        return
    with readme_path.open('a') as f:
        f.write('\n'+entry+'\n')

for md in REFL.rglob('*.md'):
    text = md.read_text()
    if '#decision' in text:
        domain = 'business' if 'domain: business' in text else 'private'
        first_line = text.split('\n',3)[3][:120]
        entry = f"- {md.stem}: {first_line} ({datetime.date.today()})"
        if domain=='business':
            append_if_new(BUS_README, entry)
        else:
            append_if_new(PRI_README, entry)
print('push_to_domain complete') 