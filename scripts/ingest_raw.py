#!/usr/bin/env python3
"""
Ingest RAW data from 00_inbox into 02_data/0.RAW.
For voice files (.wav, .m4a) it calls Whisper API and saves markdown transcript.
This is a skeleton; fill in API keys and details.
"""
import pathlib, shutil, subprocess, datetime, os, sys

VAULT = pathlib.Path(__file__).resolve().parents[1]
INBOX = VAULT / '00_inbox'
RAW_BASE = VAULT / '02_data' / '0.RAW'
VOICE_DIR = RAW_BASE / 'voice' / datetime.date.today().strftime('%Y%m')
VOICE_DIR.mkdir(parents=True, exist_ok=True)

for wav in INBOX.glob('*.wav'):
    target_md = VOICE_DIR / f"{wav.stem}.md"
    # TODO: call Whisper API here and save transcript
    target_md.write_text(f"# {wav.stem}\n\n(Whisper transcript placeholder)")
    shutil.move(wav, RAW_BASE / 'voice' / f"{wav.name}")
print('Ingest complete') 