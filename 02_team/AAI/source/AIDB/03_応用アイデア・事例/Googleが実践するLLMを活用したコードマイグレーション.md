---
title: "Googleが実践するLLMを活用したコードマイグレーション"
source: "https://ai-data-base.com/archives/82274"
author:
  - "[[AIDB Research]]"
published: 2025-01-17
created: 2025-06-13
description: "本記事では、Googleが取り組む”LLMを活用したコードマイグレーション”の実践事例を紹介します。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、Googleが取り組む”LLMを活用したコードマイグレーション”の実践事例を紹介します。

コードマイグレーションとは、ソフトウェアやアプリケーションのコードを、ある環境やプラットフォームから別の環境やプラットフォームへ移行するプロセスです。

成熟した企業のコードベースを最新の状態に保つことは重要な課題であり、従来の自動化ツールでは対応が難しい複雑な移行作業が数多く存在します。

LLMと従来のアプローチを組み合わせることで、Googleはこの課題にどのように取り組んでいるのか、具体的な事例とともに見ていきましょう。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274-1024x576.jpg)

**発表者情報**

- 研究者：Stoyan Nikolov et al.
- 研究機関：Google Core, Google Ads

## 背景

ソフトウェア開発の現場において、コードマイグレーションは重要な課題とされています。成熟した企業のコードベースは20年以上の歴史を持ち、数億行規模に及ぶことも珍しくありません。

ビジネスの競争力を維持するために、企業はコードベースを最新の状態に保ち、新しいフレームワークやライブラリを採用する必要に迫られています。しかし、大規模なコードベースの移行作業は、多大な時間と労力を要します。

従来のコードマイグレーションツールは、抽象構文木（AST）を利用した決まった手順による方法を採用してきました。AST（Abstract Syntax Tree）とは、プログラムの構造を木の形で表現したもので、コードの内容を整理して理解しやすくし、解析や変更を簡単にするための仕組みです。しかし、文脈に応じた複雑な変更や、複数のファイルにまたがる一貫性のある変更を行うことが難しいという問題があります。

一方、LLMは、コードの理解と生成に優れています。汎用的なコード補完やレビュー支援などの分野ですでに実用化されていますが、より複雑な用途への応用は発展途上です。

そのような状況において、研究者らはLLMを活用した新しいコードマイグレーション手法の開発に取り組みました。具体的には、Googleの複数の製品部門で実際に発生している移行作業を対象に、LLMとASTベースのアプローチを組み合わせた実践的な解決策を模索しました。

以下で詳しく紹介します。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_1-1024x374.png)

2024年の最初の3四半期におけるAIを活用したコード移行の実績（提出された変更リスト数）

## Googleの社内開発におけるLLMツール活用の概要

[Transformer](https://ai-data-base.com/archives/26535 "Transformer") ベースのモデルの登場以降、ソフトウェア開発におけるLLMの活用が進められています。中でもインラインコード補完は最も自然な応用例とされています。インラインコード補完とは、開発者がプログラムを書いている途中で、次に入力される可能性の高いコードや必要なコードの一部を自動的に予測して提案する機能のことです。開発者にとって単語レベルの自動補完は長年使い慣れた機能であり、LLMによる拡張は違和感なく受け入れられました。また、新規に書かれた文字数のうちどれだけがLLMによって生成されたかという明確な指標で効果を測定できる利点もあります。

### 実績と効果

実際の運用では、開発者の38%がLLMによる提案を採用し、 **新規コードの67%がLLMの支援によって生成されています。** 言い換えれば、開発者が手動で入力する文字数よりも、LLMが補完する文字数の方が多くなっています。開発者は提案内容のレビューに時間を費やす必要がありますが、その分コードの設計により多くの時間を割くことが可能になりました。

### 改善サイクルの確立

パフォーマンスの向上は、モデルの改善とユーザー体験の両面から取り組まれています。より大規模なモデルの採用、文脈提供のための工夫、実際の使用ログに基づく調整などが継続的に行われています。また、提案の採用、却下、修正といった開発者の行動から学習することで、実践的なニーズにより適した提案が可能になっています。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_2.png)

コード作成支援ツールの改善プロセスを示した図。高品質データとユーザー行動ログを活用して、AIベースのコードツールを向上させる方法を表現

### データの活用

長年かけて収集された高品質な開発ログが活用されています。具体的には、コードの編集履歴、ビルドの結果、コードレビューでの修正、コピー＆ペーストの履歴などが含まれます。学習用データは、入力と出力の両方にタスク固有の [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") が付与された形で整備されています。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_3.jpg)

IDEでのAI機能の例を3つ示した図（コード補完、コピー＆ペーストの調整、自然言語指示によるコード編集）

## LLMを活用したコード移行の取り組み

Googleの製品部門では、技術的負債の解消やコード移行に関する様々な課題に直面しています。従来のGoogle独自のインフラストラクチャでも、「大規模な変更を自動化する機能」は提供されていましたが、文脈を理解した複雑な変更には対応が難しい状況でした。

文脈を理解した複雑な変更とは、次のようなものだと推測されます。例えば、新しいAPIの機能を適切に利用するために、単純な置き換えだけでなくデータ構造や呼び出し方を調整する必要がある場合や、設計意図にそぐわない関数やクラスを正しい形に再編成するリファクタリングが挙げられます。単なる文字列や構文の置き換えだけでは不十分で、文脈や設計全体の意図を深く理解した上での対応が求められます。

LLMを活用することで、より柔軟な対応が可能になると期待されています。

### 成功の定義

移行プロジェクトの成功基準として、 **タスク完了までの時間が50%以上短縮されること** が設定されています。重要なのは、コードの変更生成だけでなく、変更が必要な箇所の特定やレビュー、本番環境への展開までを含めた全体のプロセスです。一般的なコード補完ツールのような文字数ベースの指標ではなく、プロジェクト全体の効率化を重視しています。

### 実装アプローチ

プロジェクトごとにカスタマイズされたプロンプトを使用し、LLMに変更内容を指示します。例えば、

```js
あなたはソフトウェアエンジニアとして{タスク}に取り組んでいます。
以下のルールに従って作業を進めてください：
1. 最初のルール
2. 二番目のルール
...
```

といった内容です。

### 検証と展開プロセス

**変更箇所の特定にはASTベースの技術が活用され** 、変更の生成にLLMが使用されています。生成された変更は自動的にテストされ、必要に応じてLLMによる修正が行われます。最終的な確認とレビューは人間が行い、慎重に本番環境への展開が進められます。

### 実践上の課題

LLMだけでは完璧な変更を生成することは難しく、多くの場合ASTベースの技術や人間による確認が必要とされています。また、変更の一貫性を保つため、関連するファイルをまとめて処理する必要があります。本番環境への展開時には、システムの安定性を確保するための慎重なアプローチが求められます。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_4-1024x134.png)

モノレポでAI作成変更を適用するプロセスを示した高レベルなフロー図。LLMがコード変更の作成、発見、検証で活用される様子を表現。

## INT32からINT64へのID移行プロジェクト事例

GoogleのAds部門では、ユーザーや商品、キャンペーンなどを識別するために多数の数値型IDが使用されています。従来は32ビット整数として実装されていましたが、IDの増加に伴い、予想よりも早く上限に達する可能性が出てきました。

32ビット整数とは、データを保存するための形式で、約21億（正確には2,147,483,647）までの正の整数を表現できます。しかし、この上限を超えるIDが必要になると、これ以上の数を表現できなくなります。このため、GoogleのAds部門では、より多くのIDを扱える64ビット整数（最大で約9京）への移行が必要になりました。

移行作業は一部手作業で進められていましたが、作業を加速するためLLMを活用したアプローチが採用されました。

### 技術的な課題

この移行作業には、技術的な知識が必要な複雑な要件が含まれています。以下に分かりやすく説明します。

まず、IDが単なる「数値型」としてプログラム内で使われている場合、それがどの部分で使われているかを自動的に特定するのは難しいことがあります。プログラムには数値を扱う箇所が多いため、32ビット整数を探し出すのは簡単ではありません。

次に、この変更は数千ものプログラムファイルにまたがり、変更しなければならない箇所が数万に及ぶこともあります。そのため、手作業では時間がかかりすぎて非効率です。

さらに、IDを扱う仕組みが「クラス」というプログラムの基本単位に影響を与える場合、そのクラスを使っている他のプログラム部分にも変更が波及します。たとえば、クラスのインターフェース（他のコードとやり取りする方法）を更新することで、関連する多くのファイルを一緒に修正しなければなりません。

加えて、64ビットIDに変更した後、その新しいIDが正しく機能するかを確かめるテストコードを修正・更新する必要があります。

最後に、IDがプログラム内で数値としてだけでなく、マクロ（再利用可能なコードのテンプレート）や文字列（テキストデータの形式）としても保存・利用されている場合、それらの箇所についても慎重に対応しなければなりません。

要するに、この作業は、プログラム内のさまざまな部分が密接に関連しているため、一つの変更が広範囲に影響を及ぼすという点で非常に複雑なのです。

### 実装されたワークフロー

以下のフローが実施されました。

1. 専門家エンジニアが移行対象のIDを特定し、CodeSearch、Kythe、カスタムスクリプトを使用して変更が必要なファイルと場所を特定
2. LLMベースの移行ツールが自動で実行され、単体テストに合格した変更のみが生成
3. エンジニアが変更内容を確認し、必要に応じて修正を加えた後、変更箇所の所有者に確認を依頼

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_5.png)

複数段階でのコード移行プロセスの実行例を示した図。

### 成果と評価

ランディングされた変更の **80%がLLMによって完全に生成され** 、残りは人間による修正や編集が加えられました。変更の正確性を確保するため、LLMによる検証機能の強化が進められています。 **移行プロジェクト全体の所要時間は、従来の手法と比較して50%削減されました** 。また、 **単一のエンジニアが必要な変更を一括で生成できる** ようになり、コミュニケーションのオーバーヘッドも大幅に削減されています。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_fig6-1024x200.png)

32ビットから64ビットへのID移行の際に使用したプロンプト例。

### 変更箇所の特定プロセス

変更箇所の特定においては、変更が必要な箇所を効率的に見つけるための技術が使われています。具体的には、Googleの「Protocol Buffer」というデータ構造で定義されたID（識別子）を出発点として、関連するコードを探し出します。

次に、Kytheというツールを使って、コード内でそのIDがどこで参照されているかを追跡します。これは、プログラム全体を調べて、IDが使われている箇所を「ネットワークのように」関連付けて見つける作業です。この追跡は、直接参照している場所から始まり、そこからさらに影響を受ける場所を幅広く3段階にわたって調査します。

さらに、プログラム内でIDに関連する箇所を絞り込むために、正規表現（特定の文字列パターンを探すためのツール）やASTパーサー（プログラムの構造を解析するツール）を使用します。

このように、自動化されたプロセスを使うことで、膨大な変更作業を効率的に進めることが可能になり、数百人年かかると見積もられた作業が、少人数のエンジニアでも実現可能になりました。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_6.png)

クラス内の型を変更するプロンプトに基づいたモデル出力の例。モデルがプライベートフィールドと使用箇所を正しく修正。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_7.png)

テストファイルに32ビットを超える整数が追加された例。

## JUnit3からJUnit4への移行事例

Googleの一部のチームでは、古い仕組みであるJUnit3というテスト用のプログラムがいまだに使われていました。この古い仕組みを新しいものに更新するには、多くの時間と労力がかかるため、そのまま放置されていたのです。しかし、この古いコードは新しい開発の妨げになり、開発者が誤って古い方法を参考にしてしまうことで、さらに問題が広がるリスクもありました。そのため、新しい仕組みであるJUnit4へ、すべてを切り替える必要がありました。

### 移行手法の実装

LLM移行スタックを使用して自動移行を実施しました。

「LLM移行スタック」というのは、LLMを活用してコードの移行を支援するためのツールや技術の集合体です。この場合、JUnit3からJUnit4へのコードの移行を、手作業ではなくLLMを使って自動化するツールや技術のことです。

すべてのJUnit3テストのリストは既に用意されていたため、ファイルの特定は容易でした。変更されたテストファイルは、Google内部の大規模変更システム（LSC）によって小さな単位に分割され、テストの所有者にレビューが依頼されました。

### プロンプトの設計

**内部のGoogleコードベースで学習を行ったGeminiモデルが使用されました** 。プロンプトは人間が手動で移行する際のルールを基に設計されています。例えば、

- junit.frameworkからのインポートの削除
- org.junit.Assert.\*のインポート追加
- TestCaseの継承関係の削除
- @RunWith(JUnit4.class) [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") の追加
- テストメソッドへの@Test [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") の追加

などが含まれます。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_8.png)

JUnit3からJUnit4への移行で使用されたプロンプトの一部。

### 結果と成果

3ヶ月間で5,359ファイル、149,000行以上のコードが移行されました。 **プロジェクトのボトルネックはエンジニアのレビュー速度でした。レビュアーに過度な負担をかけないよう、毎週の変更生成数を意図的に制限しました。** 最終的に、LLMが生成したコードの約87%が修正なしでそのままコミットされました。

移行プロセスは以下の手順で実施されました。

1. テストファイルの識別と収集
2. LLMによる変更の生成
3. ビルドとテストの実行
4. 失敗したケースのLLMによる修正
5. レビューとコミット

結果として、従来は困難とされていた大規模なライブラリ移行が、効率的に実施できることが実証されました。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_9.png)

JUnit3からJUnit4への移行時の具体的なコード変更例。

## JodaTimeからJavaTimeへの移行

Googleでは、すべてのコードを一つの巨大なリポジトリ（モノレポジトリ）にまとめて管理しています。

モノレポジトリは、通常のプロジェクトごとに別々に管理されるコードを一つの場所に集約しているシステムです。全てのプロジェクトが同じ環境で動作し、コードの共有や変更の追跡がしやすくなるという利点があります。

このモノレポジトリ内で、JodaTimeという日時を扱うためのライブラリが広く使われていましたが、Javaの標準機能であるjava.timeパッケージが登場したため、JodaTimeを廃止してjava.timeに移行する必要が出てきました。ただし、JodaTimeを使っているコードが数千箇所にも及ぶため、この移行作業は非常に複雑で手間のかかるものとなっていました。

### 技術的な課題

移行作業の主な難しさは以下の点にありました。

- 変更が単一のメソッドに限定されず、クラスの公開インターフェースやフィールドにも影響
- 一度に全ての箇所を変更することは不可能で、分割して進める必要性
- レビュアーの確保が常時は困難
- 移行対象外のコンポーネントとの相互依存関係への対応

### 移行パターンの分析

一部の移行は比較的単純でした。例えば、

- joda.time.Durationからjava.time.Durationへの置き換え
- 生成メソッドのmillis()からofMillis()への変更

など。

一方で、より複雑なケースも存在しました。

- joda.time.Intervalに直接対応する型が存在せず、common.collect.Rangeへの変換が必要
- メソッドのロジックやクラスインターフェースの大幅な変更が必要

などでした。

### 段階的な移行アプローチ

Kythe上に構築されたパイプラインを使用して、以下の分析を実施しています。

1. 同時に移行すべきファイルの特定
2. 呼び出しグラフのファンイン/ファンアウトの分析
3. コンポーネントの境界を越える呼び出しの検出

### 実装の成果

小規模および中規模のファイルクラスターで成功的な移行が達成されました。専門家の評価によると、小規模クラスターでの移行時間は従来手法と比較して約89%削減されました。また、移行が必要な箇所と依存関係の特定が容易になったことも、大きな利点として挙げられています。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_10.png)

Joda TimeからJava Timeへの移行に用いたプロンプトの例。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_11.png)

Joda TimeからJava Timeへの移行中に生成された正しいコード変更例。

### 今後の課題

移行プロジェクトは現在も進行中で、以下のような課題に取り組んでいます。

- 大規模クラスターの処理順序の最適化
- レビュアーとの同期
- Guice依存関係による接続の見落とし対策
- 動的型付けを使用するswitch文への対応

## 実験的フラグのクリーンアップ

Googleでは、新しいアイデアや機能の効果を試すため、実験が行われています。実験は、プログラムの中に「フラグ」と呼ばれる仕組みを作り、外部からそのフラグの値を変更することで、プログラムの挙動を変えるように設計されています。

このフラグがONのときは新しい機能を試し、OFFのときは従来の機能を使う、といったコードの分岐を作る仕組みです。この仕組みを利用して、どちらの機能がユーザーにとって良いかを比較することができます。

しかし、実験が終了した後、使われなくなったフラグや分岐のコードが残っていると、プログラムが複雑になり、管理が難しくなります。そのため、終了した実験に関連するコードを整理する必要があります。この整理作業では、実験の結果に基づいて、新しい機能を「デフォルト」として統合するか、関連するコードを完全に削除することで、プログラムをシンプルに保つようにします。

要するに、実験の「後始末」として、使わなくなったコードをきれいに片付ける作業が必要なのです。

不要なコードは技術的負債です。実験エンジンは古くなったフラグを追跡できますが、関連コードの清掃は手動で行う必要がありました。

### LLMを活用した解決方法

クリーンアップ作業には以下のステップが必要です。

1. フラグが参照されているコード位置の特定
2. 実験フラグへの参照の削除
3. フラグに依存する条件式の簡略化
4. 不要となったコードの削除
5. テストの更新と不要なテストの削除

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_12.png)

使用されていない実験フラグを特定・削除するプロンプトの例。

### フラグの発見とターゲティング

フラグ（実験用のスイッチ）は、まず設定ファイルで宣言され、コード内では決まった形式の名前として使われます。これらのフラグがどこで使われているかを調べるために、Googleの **CodeSearch** というツールが利用されます。

しかし、問題が発生するのはテストコードの場合です。実際の実験用フラグはテストコードでは直接使われず、開発者がテストのために作成した「モック」と呼ばれる仮のフラグが使われることがあります。この場合、フラグの名前が完全には一致しないため、自動で見つけ出すのが難しくなることがあります。

簡単に言うと、フラグがどこで使われているかを探し出す作業は簡単ではなく、特にテストコードでは手間がかかる場合がある、ということです。

### 実装の詳細

LLMには関連するファイルと削除対象のフラグ名、フラグの値が提供されます。Geminiの大きなコンテキストウィンドウを活用することで、1回のクエリで多くのフラグ使用箇所を処理できます。実装ファイルとテストファイルを同時に参照することで、一貫性のある変更が可能になります。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_13.png)

実装ファイルと関連するテストフラグをモデルが「タグ付け」した例。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_82274_14.jpg)

削除されるフラグ依存コードの例（赤色でハイライトされた部分を含む）。

### 課題と展望

実装ファイルの更新は高品質で、不要となった関数の削除も成功しています。一方、テストのクリーンアップは複雑な課題となっています。中でも、複数のフラグを組み合わせたテストや、フラグ間の相互作用をテストするケースの処理は困難です。このような場合は、テストの失敗をトリガーにLLMによる修正を試みるか、人間のレビュアーによる最終的な修正に委ねています。

まだ解決は完了しておらず、Google社内でも取り組みが続いているということです。

## 全体を振り返っての考察

大企業のコードベースを最新に保つ作業で、LLMは強力な助っ人になることがわかってきました。エンジニアの作業が速くなるだけでなく、「あまりにも大変すぎてできなかった」プロジェクトも実現できるようになっています。古いコードを放置すると、チーム全体の開発速度が落ちたり、新しいメンバーが混乱したりする問題があります。移行作業を素早く終わらせることで、こうした問題も解決できます。

### LLMとASTの相乗効果

コード移行の作業は、小さな作業に分けることができます。それぞれの作業で、LLMを使ったり、ASTベースの手法を使ったり、単純な検索を使ったりと、最適な方法を選べます。 **LLMに作業全体の計画を立てさせる必要はなく、むしろシンプルに保つ方がうまくいきます。**

ASTベースのツールは「間違えない」という強みがあり、モデルのバージョンが変わっても影響を受けません。また、 **LLMを使わない作業は計算コストが低い** というメリットもあります。

### 小分けにして取り組む効果

作業を小さく分けることで、開発者は素早く改善を繰り返せます。今回紹介されたツールでは、エンジニアがそれぞれ得意な作業を担当し、その成果を他のプロジェクトでも使い回しています。

LLMの出力が完璧でなくても、何段階かのチェックを通すことで、最終的には使えるコードにできることがわかりました。

### 人の役割はまだまだ重要

LLMでコード変更自体は速くなりましたが、人の作業を減らすにはまだ工夫が必要です。コードレビューと本番環境への適用は、やはり人が行う必要があります。チームに負担をかけすぎないよう、作業ペースを調整することもありました。

### 成果の測り方

研究では「Pythonコードを作る」といった単純なタスクで性能を測ることが多いです。しかし実際に大切なのは、ビジネスにどれだけ役立つかです。モデルの性能が低いと使い物にならないのは当然かもしれませんが、性能が高くても必ずしもビジネスの成果につながるとは限りません。

### これからの課題

こういったツールを使いこなすには、エンジニアの教育が必要です。AIの使用を完全に隠してツールを作るのはコストがかかり、一部のエンジニアしか使わないツールのメンテナンスも大変です。

また、カスタムモデルは便利ですが、開発にはコストがかかります。既存のモデルを使うか、カスタムモデルを作るか、バランスを考える必要があります。

## まとめ

本記事では、GoogleにおけるLLMを活用したコード移行の実践研究を紹介しました。

複数の製品部門での実証を通じ、LLMとASTベースの技術を組み合わせることで、大規模なコード移行作業を効率化できることが示されています。

今後は移行プロジェクトの拡大とともに、エンジニアの教育やツールの使いやすさの向上が課題となっていくようです。

**参照文献情報**

- タイトル：How is Google using AI for internal code migrations?
- URL： [https://arxiv.org/abs/2501.06972](https://arxiv.org/abs/2501.06972)
- 著者：Stoyan Nikolov, Daniele Codecasa, Anna Sjovall, Maxim Tabachnyk, Satish Chandra, Siddharth Taneja, Celal Ziftci
- 所属：Google Core, Google Ads

## 理解度クイズ（β版）

1\. LLMとASTベースのアプローチを組み合わせる利点は何ですか？

ASTは正確な構文解析が得意で、LLMはコンテキストを理解した複雑な変更が得意です。両者を組み合わせることで、大規模なコード移行を効率的に進められます。

解説を見る

2\. Googleの実験フラグクリーンアップで特に課題となったのは？

テストコードではモックフラグが使用され、名前が完全に一致しないため自動検出が困難でした。通常のコードと比べて手間のかかる作業となりました。

解説を見る

3\. JUnit3からJUnit4への移行プロジェクトの主要な成果は？

LLMが生成したコードの約87%が人間による修正なしでそのままコミットできました。高い精度でコード変換が自動化できたことを示しています。

解説を見る

4\. Googleのコードマイグレーションプロジェクトにおける成功の定義は？

プロジェクトの成功基準として、タスク完了までの時間が50%以上短縮されることが設定されました。単なるコード生成ではなく、プロジェクト全体の効率化が重視されました。

解説を見る

5\. LLMを活用したコード移行の実践から得られた重要な教訓は？

大規模な移行作業は小さな作業に分割し、段階的に進めることが効果的でした。各段階で適切なツールを選択し、継続的な改善が可能になりました。

解説を見る

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[生成AIシステムのセキュリティ評価 マイクロソフトが100事例から得た教訓](https://ai-data-base.com/archives/82195)

[Web3向けLLMエージェントOS登場 オープンソースの新フレームワーク](https://ai-data-base.com/archives/82344)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)