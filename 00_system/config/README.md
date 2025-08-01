# 設定ファイル

このディレクトリには、ObsidianとClaudeの設定ファイルが保存されています。

## 移動されたファイル

### .obsidian/
- Obsidianの設定ファイル
- ワークスペース設定、プラグイン設定、外観設定など
- バックアップとしてGitで管理

### .claude/
- Claudeの設定ファイル
- 個人の設定情報
- バックアップとしてGitで管理

## 注意事項

- これらの設定ファイルは個人の環境に依存する場合があります
- 他の環境で使用する際は、必要に応じて設定を調整してください
- 設定ファイルの変更は慎重に行い、必要に応じてバックアップを取ってください

## 復元方法

設定ファイルを元の場所に戻す場合：

```bash
# TOP階層に戻す場合
mv 00_system/config/.obsidian ./
mv 00_system/config/.claude ./
```

## 最終更新

- 移動日: 2024年12月
- 目的: TOP階層の整理とGitバックアップ 