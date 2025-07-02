#!/usr/bin/env python3
"""
AIDB ナレッジベース管理スクリプト
発信活動での参照性向上を支援する自動化ツール
"""

import os
import re
import json
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Tuple

class AIDBManager:
    """AIDB ナレッジベースの管理・検索・更新を自動化"""
    
    def __init__(self, aidb_path: str = "04_data/Article/AIDB"):
        self.aidb_path = Path(aidb_path)
        self.categories = {
            "01_権威性・信頼構築": "authority",
            "02_実践ノウハウ・手法": "practical", 
            "03_応用アイデア・事例": "application"
        }
        
    def scan_articles(self) -> Dict[str, List[Dict]]:
        """全記事をスキャンして基本情報を抽出"""
        articles = {}
        
        for category_dir, category_key in self.categories.items():
            category_path = self.aidb_path / category_dir
            if category_path.exists():
                articles[category_key] = []
                for md_file in category_path.glob("*.md"):
                    if not md_file.name.startswith("00_"):
                        article_info = self._extract_article_info(md_file)
                        articles[category_key].append(article_info)
                        
        return articles
    
    def _extract_article_info(self, md_file: Path) -> Dict:
        """記事ファイルから基本情報を抽出"""
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # 基本情報の抽出
        title = md_file.stem
        file_size = md_file.stat().st_size
        word_count = len(content.split())
        
        # 権威性レベルの推定（組織名で判定）
        authority_level = self._estimate_authority_level(title, content)
        
        # キーワードの抽出
        keywords = self._extract_keywords(title, content)
        
        return {
            "title": title,
            "file_path": str(md_file),
            "file_size": file_size,
            "word_count": word_count,
            "authority_level": authority_level,
            "keywords": keywords,
            "last_modified": datetime.fromtimestamp(md_file.stat().st_mtime)
        }
    
    def _estimate_authority_level(self, title: str, content: str) -> int:
        """記事の権威性レベルを推定（1-3の段階）"""
        # 高権威機関のキーワード
        high_authority = [
            "OpenAI", "Google DeepMind", "Microsoft", "Meta", 
            "Stanford", "Harvard", "MIT", "論文", "研究"
        ]
        
        # 中権威機関のキーワード
        medium_authority = [
            "Amazon", "Apple", "NVIDIA", "IBM", "実証実験", "調査"
        ]
        
        text = title + " " + content[:1000]  # タイトル+冒頭1000文字で判定
        
        if any(keyword in text for keyword in high_authority):
            return 3
        elif any(keyword in text for keyword in medium_authority):
            return 2
        else:
            return 1
    
    def _extract_keywords(self, title: str, content: str) -> List[str]:
        """記事からキーワードを抽出"""
        # よく使われるAI関連キーワード
        ai_keywords = [
            "LLM", "GPT", "Claude", "ChatGPT", "プロンプト", "RAG",
            "エージェント", "マルチモーダル", "ベンチマーク", "評価",
            "精度", "性能", "効率", "自動化", "生産性", "コスト"
        ]
        
        text = title + " " + content
        found_keywords = []
        
        for keyword in ai_keywords:
            if keyword in text:
                found_keywords.append(keyword)
                
        return found_keywords
    
    def search_articles(self, query: str, category: str = None) -> List[Dict]:
        """記事を検索（タイトル、キーワードベース）"""
        articles = self.scan_articles()
        results = []
        
        # 検索対象カテゴリの決定
        search_categories = [category] if category else list(articles.keys())
        
        for cat in search_categories:
            if cat in articles:
                for article in articles[cat]:
                    # タイトルやキーワードに検索語が含まれるかチェック
                    if (query.lower() in article["title"].lower() or
                        any(query.lower() in keyword.lower() for keyword in article["keywords"])):
                        article["category"] = cat
                        results.append(article)
        
        # 権威性レベルでソート（高い順）
        return sorted(results, key=lambda x: x["authority_level"], reverse=True)
    
    def generate_quick_reference(self) -> str:
        """クイックリファレンス用の情報を生成"""
        articles = self.scan_articles()
        
        # 高権威記事の抽出
        high_authority_articles = []
        for category, article_list in articles.items():
            for article in article_list:
                if article["authority_level"] == 3:
                    high_authority_articles.append(article)
        
        # 数字を含む記事の抽出
        number_articles = []
        for category, article_list in articles.items():
            for article in article_list:
                if re.search(r'\d+%|\d+倍|\d+件', article["title"]):
                    number_articles.append(article)
        
        return {
            "high_authority_count": len(high_authority_articles),
            "number_articles": number_articles[:10],  # 上位10件
            "total_articles": sum(len(articles[cat]) for cat in articles),
            "categories_summary": {cat: len(articles[cat]) for cat in articles}
        }
    
    def update_indexes(self):
        """インデックスファイルを自動更新"""
        print("📋 インデックス自動更新機能")
        print("注意: この機能は将来的な実装予定です")
        
        # 将来的な実装アイデア:
        # 1. 各カテゴリの記事数をカウント
        # 2. 新着記事の自動分類
        # 3. 権威性レベルの自動判定
        # 4. インデックスファイルの自動生成
        
        articles = self.scan_articles()
        summary = self.generate_quick_reference()
        
        print(f"総記事数: {summary['total_articles']}件")
        for category, count in summary["categories_summary"].items():
            print(f"  {category}: {count}件")
        print(f"高権威記事: {summary['high_authority_count']}件")
        
    def export_reference_data(self, output_file: str = "aidb_reference.json"):
        """参照用データをJSONで出力"""
        articles = self.scan_articles()
        summary = self.generate_quick_reference()
        
        export_data = {
            "metadata": {
                "export_date": datetime.now().isoformat(),
                "total_articles": summary["total_articles"],
                "categories": summary["categories_summary"]
            },
            "articles": articles,
            "quick_reference": summary
        }
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(export_data, f, ensure_ascii=False, indent=2, default=str)
        
        print(f"✅ 参照データを {output_file} に出力しました")

def main():
    """メイン実行関数"""
    manager = AIDBManager()
    
    print("🚀 AIDB ナレッジベース管理ツール")
    print("=" * 50)
    
    while True:
        print("\n選択してください:")
        print("1. 記事検索")
        print("2. 統計情報表示")
        print("3. インデックス更新")
        print("4. 参照データ出力")
        print("5. 終了")
        
        choice = input("\n番号を入力: ").strip()
        
        if choice == "1":
            query = input("検索キーワードを入力: ").strip()
            results = manager.search_articles(query)
            
            print(f"\n🔍 検索結果: {len(results)}件")
            for i, article in enumerate(results[:5], 1):
                print(f"{i}. {article['title']}")
                print(f"   権威性: {'⭐' * article['authority_level']}")
                print(f"   キーワード: {', '.join(article['keywords'][:3])}")
                print()
                
        elif choice == "2":
            summary = manager.generate_quick_reference()
            print(f"\n📊 統計情報")
            print(f"総記事数: {summary['total_articles']}件")
            print(f"高権威記事: {summary['high_authority_count']}件")
            for category, count in summary["categories_summary"].items():
                print(f"  {category}: {count}件")
                
        elif choice == "3":
            manager.update_indexes()
            
        elif choice == "4":
            filename = input("出力ファイル名 (デフォルト: aidb_reference.json): ").strip()
            if not filename:
                filename = "aidb_reference.json"
            manager.export_reference_data(filename)
            
        elif choice == "5":
            print("👋 終了します")
            break
            
        else:
            print("❌ 無効な選択です")

if __name__ == "__main__":
    main() 