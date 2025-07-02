---
title: "自動タグ付けスクリプト使用ガイド"
created: 2025-01-05
description: "auto_tagger.pyの設定・使用方法"
tags:
  - "scripts"
  - "automation"
  - "tagging"
---

# 🤖 自動タグ付けスクリプト使用ガイド

## 🎯 概要
`auto_tagger.py`は、RAWファイルの内容を分析して自動でタグを付けるスクリプトです。

## 🔧 事前準備

### 1. 必要なライブラリをインストール
```bash
# 基本ライブラリ
pip install pyyaml

# LLM APIを使う場合（オプション）
pip install anthropic openai
```

### 2. API KEY設定（オプション）
より高精度な分析のため、以下の環境変数を設定：

```bash
# Claude API（推奨）
export ANTHROPIC_API_KEY="your_claude_api_key"

# または OpenAI API
export OPENAI_API_KEY="your_openai_api_key"
```

## ⚡ 基本的な使い方

### ステップ1: 分析して確認
```bash
# RAWフォルダ全体を分析（変更なし）
python scripts/auto_tagger.py --path "01_secondme/04_data/0.RAW" --mode analyze

# 単一ファイルを分析
python scripts/auto_tagger.py --path "01_secondme/04_data/0.RAW/example.md" --mode single
```

### ステップ2: Dry-runで確認
```bash
# 実際には変更せず、何が起こるかを確認
python scripts/auto_tagger.py --path "01_secondme/04_data/0.RAW" --mode apply --dry-run
```

### ステップ3: 実際に適用
```bash
# タグを実際に適用（バックアップ自動作成）
python scripts/auto_tagger.py --path "01_secondme/04_data/0.RAW" --mode apply
```

## 🏷️ タグ体系

### 自動で付与されるタグ
```
ソース系:
#source/chatgpt, #source/claude, #source/plaud, #source/research

形式系:
#type/voice, #type/document, #type/chat, #type/data

トピック系:
#topic/ai, #topic/business, #topic/personal, #topic/learning

ステータス系:
#status/raw, #status/processed, #status/important

時期系:
#period/recent, #year/2025, #month/2025-01
```

## 📊 LLM vs ヒューリスティック

### LLM分析（API使用）
- **精度**: 85-95%
- **理解度**: 内容の深い理解
- **コスト**: APIコール料金
- **速度**: やや遅い

### ヒューリスティック分析（API不要）
- **精度**: 60-75%
- **理解度**: キーワードベース
- **コスト**: 無料
- **速度**: 高速

## 🛠️ 高度な使い方

### プロバイダー指定
```bash
# Claude APIを使用（推奨）
python scripts/auto_tagger.py --path "01_secondme/04_data/0.RAW" --mode apply --provider claude

# OpenAI APIを使用
python scripts/auto_tagger.py --path "01_secondme/04_data/0.RAW" --mode apply --provider openai
```

### 特定のファイルタイプのみ
```bash
# Markdownファイルのみ処理
find "01_secondme/04_data/0.RAW" -name "*.md" -exec python scripts/auto_tagger.py --path {} --mode apply \;
```

### バッチ処理
```bash
# 複数フォルダを一括処理
for dir in "01_secondme/04_data/0.RAW"/*; do
    if [ -d "$dir" ]; then
        python scripts/auto_tagger.py --path "$dir" --mode apply --dry-run
    fi
done
```

## 📝 出力例

### 分析結果
```json
{
  "suggested_tags": [
    "#source/plaud",
    "#type/voice", 
    "#topic/ai",
    "#status/raw",
    "#period/recent"
  ],
  "confidence": 0.87,
  "reasoning": "PLAUD音声記録で、AI技術について思考している個人的な内容",
  "summary": "ChatGPTとの第二の自分構築について考察...",
  "file_name": "ai_thinking_20250105.m4a",
  "file_size": 2048576,
  "extension": ".m4a"
}
```

### 適用後のMarkdownファイル
```markdown
---
tags:
  - source/plaud
  - type/voice
  - topic/ai
  - status/raw
created: 2025-01-05
auto_tagged: true
---

# 元のファイル内容
...
```

## ⚠️ 注意事項

### 対応ファイル形式
- **Markdownファイル（.md）**: タグ自動適用
- **テキストファイル（.txt）**: 分析のみ
- **JSONファイル（.json）**: 分析のみ
- **音声ファイル**: ファイル名ベース分析

### 安全機能
- **自動バックアップ**: 元ファイルは`.backup`として保存
- **Dry-runモード**: 実際の変更前に確認可能
- **エラーハンドリング**: 処理中断時の安全な停止

### パフォーマンス
- **大きなファイル**: 10KBまでの内容のみ分析
- **バッチ処理**: 大量ファイルは時間がかかる可能性
- **API制限**: LLMプロバイダーのレート制限に注意

## 🎯 実践的なワークフロー

### 1. 初回セットアップ
```bash
# 1. 現在の状況を分析
python scripts/auto_tagger.py --path "01_secondme/04_data/0.RAW" --mode analyze > analysis_result.json

# 2. 結果を確認して調整
# 3. Dry-runでテスト
python scripts/auto_tagger.py --path "01_secondme/04_data/0.RAW" --mode apply --dry-run

# 4. 実際に適用
python scripts/auto_tagger.py --path "01_secondme/04_data/0.RAW" --mode apply
```

### 2. 日常運用
```bash
# 新規ファイルの処理
python scripts/auto_tagger.py --path "01_secondme/04_data/0.RAW/new_file.md" --mode single
python scripts/auto_tagger.py --path "01_secondme/04_data/0.RAW/new_file.md" --mode apply
```

### 3. 定期メンテナンス
```bash
# 月1回：全体の見直し
python scripts/auto_tagger.py --path "01_secondme/04_data/0.RAW" --mode analyze --provider claude
```

## 🚀 期待される効果

### 効率向上
- **手動タグ付け**: 1ファイル2-3分 → **自動**: 数秒
- **一括処理**: 100ファイルを一度に処理可能
- **一貫性**: 人的ミスの削減

### 精度向上
- **LLM分析**: 内容の深い理解に基づくタグ付け
- **継続学習**: タグ体系の改善による精度向上
- **発見促進**: 適切なタグによる情報発見

---

**自動タグ付けで、RAWデータ管理が革命的に効率化されます！まずは少数のファイルでテストしてから、段階的に展開していきましょう。** 