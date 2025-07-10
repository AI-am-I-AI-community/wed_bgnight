#!/usr/bin/env python3
"""
Obsidian_iCloud フォルダ構造チェッカー
直下に不適切なファイルが配置されていないかチェックします
"""

import os
import sys
from pathlib import Path

# 直下に配置してOKなファイル・フォルダ
ALLOWED_FILES = {
    '.DS_Store',
    '.env.local',
    '.env.local.save',
    '.gitignore',
    'README.md',
    'TASKS.md'
}

ALLOWED_DIRS = {
    '.git',
    '.github',
    '.obsidian'
}

# 禁止されるファイル拡張子
FORBIDDEN_EXTENSIONS = {
    '.md', '.txt', '.docx', '.pdf', '.jpg', '.png', '.gif', '.mp4', '.mov',
    '.zip', '.rar', '.7z', '.xlsx', '.pptx', '.key'
}

def check_folder_structure():
    """フォルダ構造をチェック"""
    root_dir = Path('.')
    issues = []
    
    print("🔍 Obsidian_iCloud フォルダ構造チェック中...")
    
    # 直下のファイルをチェック
    for item in root_dir.iterdir():
        if item.is_file():
            if item.name not in ALLOWED_FILES:
                # 禁止される拡張子かチェック
                if item.suffix.lower() in FORBIDDEN_EXTENSIONS:
                    issues.append(f"❌ 禁止ファイル: {item.name} (拡張子: {item.suffix})")
                else:
                    issues.append(f"⚠️  不明なファイル: {item.name}")
        
        elif item.is_dir():
            if item.name not in ALLOWED_DIRS and not item.name.startswith(('00_', '01_', '02_', '03_')):
                if item.name not in ['Clippings', 'Material', 'Public', 'scripts']:
                    issues.append(f"❌ 禁止フォルダ: {item.name}/")
    
    # 結果を表示
    if issues:
        print("\n🚨 問題が見つかりました:")
        for issue in issues:
            print(f"  {issue}")
        
        print("\n📋 推奨される対応:")
        print("  1. 不適切なファイルを適切なフォルダに移動")
        print("  2. 詳細は FOLDER_STRUCTURE_GUIDE.md を参照")
        print("  3. 必要に応じて新しいフォルダを作成")
        
        return False
    else:
        print("✅ フォルダ構造は正常です！")
        return True

def suggest_location(filename):
    """ファイルの推奨配置先を提案"""
    suggestions = {
        '記事': '00_inbox/',
        'タスク': '00_system/',
        '個人': '01_secondme/',
        'チーム': '02_team/',
        'その他': '03_others/',
        '参考': 'Clippings/',
        '素材': 'Material/',
        '公開': 'Public/',
        'スクリプト': 'scripts/'
    }
    
    print(f"\n💡 {filename} の推奨配置先:")
    for category, location in suggestions.items():
        print(f"  {category}: {location}")

if __name__ == "__main__":
    success = check_folder_structure()
    
    if not success:
        print("\n🔧 自動修正オプション:")
        print("  python scripts/check_folder_structure.py --fix")
    
    sys.exit(0 if success else 1) 