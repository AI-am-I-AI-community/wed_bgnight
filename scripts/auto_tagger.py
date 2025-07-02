#!/usr/bin/env python3
"""
auto_tagger.py - RAWファイル自動タグ付けスクリプト

使用方法:
python auto_tagger.py --path "01_secondme/04_data/0.RAW" --mode analyze
python auto_tagger.py --path "01_secondme/04_data/0.RAW/specific_file.md" --mode single
python auto_tagger.py --path "01_secondme/04_data/0.RAW" --mode apply --dry-run
"""

import os
import argparse
import json
import yaml
from pathlib import Path
import re
from typing import Dict, List, Set
import logging

# LLM用（要インストール: pip install openai anthropic）
try:
    import openai
    HAS_OPENAI = True
except ImportError:
    HAS_OPENAI = False

try:
    import anthropic
    HAS_ANTHROPIC = True
except ImportError:
    HAS_ANTHROPIC = False

# 設定
CONFIG = {
    "supported_extensions": [".md", ".txt", ".json"],
    "max_file_size": 1024 * 1024,  # 1MB
    "llm_provider": "claude",  # "openai" or "claude"
    "dry_run": True,
    "backup": True
}

# タグ体系定義
TAG_SCHEMA = {
    "source": [
        "chatgpt", "claude", "plaud", "research", "social", 
        "company", "personal", "web", "gemini"
    ],
    "type": [
        "voice", "document", "media", "chat", "note", 
        "data", "image", "video", "audio"
    ],
    "topic": [
        "ai", "business", "personal", "learning", "health", 
        "hobby", "philosophy", "technology", "finance", "travel"
    ],
    "status": [
        "raw", "processed", "archive", "important", "draft", "review"
    ],
    "period": [
        "recent", "old", "2024", "2025", "current", "historical"
    ]
}

class AutoTagger:
    def __init__(self, config: Dict):
        self.config = config
        self.logger = self._setup_logging()
        
    def _setup_logging(self):
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s'
        )
        return logging.getLogger(__name__)
    
    def analyze_file_content(self, file_path: Path) -> Dict:
        """ファイル内容を分析してタグを提案"""
        try:
            # ファイル読み込み
            content = self._read_file(file_path)
            if not content:
                return {"error": "ファイルが読み込めません"}
            
            # LLMで分析
            analysis = self._analyze_with_llm(content, file_path)
            
            # 基本情報追加
            analysis.update({
                "file_name": file_path.name,
                "file_size": file_path.stat().st_size,
                "extension": file_path.suffix
            })
            
            return analysis
            
        except Exception as e:
            self.logger.error(f"分析エラー: {file_path} - {str(e)}")
            return {"error": str(e)}
    
    def _read_file(self, file_path: Path) -> str:
        """ファイル内容を読み込み"""
        if file_path.stat().st_size > self.config["max_file_size"]:
            # 大きなファイルは先頭部分のみ
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                return f.read(10000)  # 10KB
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                return f.read()
        except UnicodeDecodeError:
            # バイナリファイルの場合
            return f"[バイナリファイル: {file_path.suffix}]"
    
    def _analyze_with_llm(self, content: str, file_path: Path) -> Dict:
        """LLMで内容分析"""
        
        # プロンプト作成
        prompt = self._create_analysis_prompt(content, file_path)
        
        if self.config["llm_provider"] == "claude" and HAS_ANTHROPIC:
            return self._analyze_with_claude(prompt)
        elif self.config["llm_provider"] == "openai" and HAS_OPENAI:
            return self._analyze_with_openai(prompt)
        else:
            # フォールバック: ヒューリスティック分析
            return self._analyze_heuristic(content, file_path)
    
    def _create_analysis_prompt(self, content: str, file_path: Path) -> str:
        """分析用プロンプト作成"""
        return f"""
以下のファイル内容を分析して、適切なタグを提案してください。

ファイル名: {file_path.name}
拡張子: {file_path.suffix}

=== ファイル内容 ===
{content[:2000]}...
====================

利用可能なタグ体系:
{json.dumps(TAG_SCHEMA, ensure_ascii=False, indent=2)}

以下の形式でJSONを返してください:
{{
    "suggested_tags": [
        "#source/chatgpt",
        "#type/document", 
        "#topic/ai",
        "#status/raw"
    ],
    "confidence": 0.85,
    "reasoning": "ChatGPTとの対話記録で、AI技術について議論している未処理の文書",
    "summary": "ファイル内容の簡潔な要約"
}}

注意:
- タグは必ず # から始める
- 階層は / で区切る
- TAG_SCHEMAにある値のみ使用
- confidenceは0.0-1.0の範囲
"""
    
    def _analyze_with_claude(self, prompt: str) -> Dict:
        """Claude APIで分析（要API KEY設定）"""
        try:
            # API KEY は環境変数から取得
            client = anthropic.Anthropic()
            
            response = client.messages.create(
                model="claude-3-sonnet-20240229",
                max_tokens=1000,
                messages=[{"role": "user", "content": prompt}]
            )
            
            # JSONパース
            result = json.loads(response.content[0].text)
            return result
            
        except Exception as e:
            self.logger.warning(f"Claude API エラー: {str(e)}")
            return self._analyze_heuristic(prompt.split("===")[1], None)
    
    def _analyze_with_openai(self, prompt: str) -> Dict:
        """OpenAI APIで分析（要API KEY設定）"""
        try:
            response = openai.ChatCompletion.create(
                model="gpt-4",
                messages=[{"role": "user", "content": prompt}],
                max_tokens=1000
            )
            
            result = json.loads(response.choices[0].message.content)
            return result
            
        except Exception as e:
            self.logger.warning(f"OpenAI API エラー: {str(e)}")
            return self._analyze_heuristic(prompt.split("===")[1], None)
    
    def _analyze_heuristic(self, content: str, file_path: Path) -> Dict:
        """ヒューリスティック分析（LLM APIなしの場合）"""
        tags = []
        confidence = 0.6
        
        # ファイル名・拡張子ベース
        if file_path:
            name_lower = file_path.name.lower()
            
            # ソース推定
            if "chatgpt" in name_lower or "gpt" in name_lower:
                tags.append("#source/chatgpt")
            elif "claude" in name_lower:
                tags.append("#source/claude")
            elif "plaud" in name_lower:
                tags.append("#source/plaud")
            else:
                tags.append("#source/personal")
            
            # タイプ推定
            if file_path.suffix in [".mp3", ".m4a", ".wav"]:
                tags.append("#type/voice")
            elif file_path.suffix in [".md", ".txt"]:
                tags.append("#type/document")
            elif file_path.suffix == ".json":
                tags.append("#type/data")
            else:
                tags.append("#type/document")
        
        # 内容ベース（キーワード検索）
        content_lower = content.lower()
        
        # トピック推定
        if any(word in content_lower for word in ["ai", "gpt", "claude", "llm"]):
            tags.append("#topic/ai")
        elif any(word in content_lower for word in ["business", "仕事", "会社"]):
            tags.append("#topic/business")
        elif any(word in content_lower for word in ["学習", "learning", "勉強"]):
            tags.append("#topic/learning")
        else:
            tags.append("#topic/personal")
        
        # ステータス（デフォルト）
        tags.append("#status/raw")
        
        return {
            "suggested_tags": tags,
            "confidence": confidence,
            "reasoning": "ヒューリスティック分析による推定",
            "summary": content[:100] + "..." if len(content) > 100 else content
        }
    
    def apply_tags(self, file_path: Path, tags: List[str], dry_run: bool = True) -> bool:
        """ファイルにタグを適用"""
        try:
            if not file_path.suffix == ".md":
                self.logger.info(f"Markdownファイルではないためスキップ: {file_path}")
                return False
            
            # 現在の内容読み込み
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # フロントマターの処理
            new_content = self._update_frontmatter(content, tags)
            
            if dry_run:
                self.logger.info(f"[DRY RUN] {file_path} にタグ適用予定: {tags}")
                return True
            
            # バックアップ
            if self.config["backup"]:
                backup_path = file_path.with_suffix(f"{file_path.suffix}.backup")
                with open(backup_path, 'w', encoding='utf-8') as f:
                    f.write(content)
            
            # ファイル更新
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            self.logger.info(f"タグ適用完了: {file_path}")
            return True
            
        except Exception as e:
            self.logger.error(f"タグ適用エラー: {file_path} - {str(e)}")
            return False
    
    def _update_frontmatter(self, content: str, tags: List[str]) -> str:
        """YAMLフロントマターにタグを追加・更新"""
        
        # 既存のフロントマターをチェック
        frontmatter_match = re.match(r'^---\n(.*?)\n---\n(.*)', content, re.DOTALL)
        
        if frontmatter_match:
            # 既存のフロントマターを更新
            yaml_content = frontmatter_match.group(1)
            body_content = frontmatter_match.group(2)
            
            try:
                fm_data = yaml.safe_load(yaml_content)
                if fm_data is None:
                    fm_data = {}
            except:
                fm_data = {}
            
            # タグをクリーンな形式に変換（#を除去）
            clean_tags = [tag.replace('#', '') for tag in tags]
            fm_data['tags'] = clean_tags
            
            # 新しいフロントマター作成
            new_yaml = yaml.dump(fm_data, default_flow_style=False, allow_unicode=True)
            return f"---\n{new_yaml}---\n{body_content}"
        
        else:
            # 新しいフロントマターを追加
            clean_tags = [tag.replace('#', '') for tag in tags]
            fm_data = {
                'tags': clean_tags,
                'created': '2025-01-05',  # 現在日付
                'auto_tagged': True
            }
            
            new_yaml = yaml.dump(fm_data, default_flow_style=False, allow_unicode=True)
            return f"---\n{new_yaml}---\n\n{content}"

def main():
    parser = argparse.ArgumentParser(description='RAWファイル自動タグ付け')
    parser.add_argument('--path', required=True, help='対象パス')
    parser.add_argument('--mode', choices=['analyze', 'single', 'apply'], 
                       default='analyze', help='実行モード')
    parser.add_argument('--dry-run', action='store_true', 
                       help='実際には変更せず、予定を表示')
    parser.add_argument('--provider', choices=['claude', 'openai'], 
                       default='claude', help='LLMプロバイダー')
    
    args = parser.parse_args()
    
    # 設定更新
    CONFIG['llm_provider'] = args.provider
    CONFIG['dry_run'] = args.dry_run
    
    tagger = AutoTagger(CONFIG)
    target_path = Path(args.path)
    
    if args.mode == 'single':
        # 単一ファイル分析
        if target_path.is_file():
            result = tagger.analyze_file_content(target_path)
            print(json.dumps(result, ensure_ascii=False, indent=2))
        else:
            print("エラー: ファイルが見つかりません")
    
    elif args.mode == 'analyze':
        # フォルダ内全体分析
        if target_path.is_dir():
            results = {}
            for file_path in target_path.rglob('*'):
                if (file_path.is_file() and 
                    file_path.suffix in CONFIG['supported_extensions']):
                    result = tagger.analyze_file_content(file_path)
                    results[str(file_path)] = result
            
            print(json.dumps(results, ensure_ascii=False, indent=2))
        else:
            print("エラー: ディレクトリが見つかりません")
    
    elif args.mode == 'apply':
        # タグ適用
        if target_path.is_dir():
            applied_count = 0
            for file_path in target_path.rglob('*.md'):
                if file_path.is_file():
                    analysis = tagger.analyze_file_content(file_path)
                    if 'suggested_tags' in analysis:
                        success = tagger.apply_tags(
                            file_path, 
                            analysis['suggested_tags'], 
                            args.dry_run
                        )
                        if success:
                            applied_count += 1
            
            print(f"処理完了: {applied_count}ファイル")
        else:
            print("エラー: ディレクトリが見つかりません")

if __name__ == "__main__":
    main() 