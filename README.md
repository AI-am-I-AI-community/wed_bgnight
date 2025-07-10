# Obsidian_iCloud

## 📋 プロジェクト概要
Masayaの個人知識管理システム（Obsidian）とWebサイト（Next.js）の統合リポジトリ

## 📁 フォルダ構造

### 🔧 システム・設定ファイル
- `.env.local` - 環境変数
- `.gitignore` - Git除外設定
- `.github/` - GitHub Actions
- `.obsidian/` - Obsidian設定

### 📚 メインコンテンツ
- `00_inbox/` - 新規入力・記事ドラフト
- `00_system/` - システム管理・タスク管理
- `01_secondme/` - 個人プロジェクト・自己分析
- `02_team/` - チームプロジェクト（AAI、ABG、SMF等）
- `03_others/` - その他のプロジェクト

### 🛠️ ツール・リソース
- `Clippings/` - 外部記事・参考資料
- `Material/` - 素材・Web開発ファイル
- `Public/` - 公開用ファイル
- `scripts/` - 自動化スクリプト

## 📖 詳細ガイド
詳細なフォルダ構造と運用ルールは以下を参照：
**[FOLDER_STRUCTURE_GUIDE.md](00_system/FOLDER_STRUCTURE_GUIDE.md)**

## 🚨 重要ルール（厳守必須）
**❌ トップ階層には基本的にフォルダやファイルを追加しない**

### 🔴 禁止事項
- 新しいコンテンツファイル（.md, .txt, .docx, .pdf等）の直下配置
- 画像・動画ファイルの直下配置
- プロジェクトフォルダの直下作成
- 一時ファイル・バックアップファイルの直下配置

### ✅ 許可事項
- 設定ファイル（.env.local, .gitignore等）
- システムファイル（.DS_Store, .obsidian/等）
- Git関連ファイル（.git/, .github/等）
- このREADME.mdファイル

### ⚠️ 自動チェック機能
- **Gitコミット前**: 自動でフォルダ構造をチェック
- **問題発見時**: コミットが自動で中止される
- **手動チェック**: `python3 scripts/check_folder_structure.py`

### 📋 新規ファイル作成時の判断フロー
1. **設定ファイル？** → 直下に配置OK
2. **コンテンツファイル？** → 適切なサブフォルダに配置
3. **不明な場合？** → 詳細ガイドを参照

## 🔗 関連リンク
- **Webサイト**: https://masayamuko.com
- **GitHub**: このリポジトリ
- **Obsidian**: ローカル知識管理

---
*最終更新: 2025年1月10日* 