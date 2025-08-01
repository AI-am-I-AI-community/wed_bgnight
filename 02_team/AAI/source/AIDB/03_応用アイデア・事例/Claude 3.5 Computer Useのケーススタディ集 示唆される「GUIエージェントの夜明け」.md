---
title: "Claude 3.5 Computer Useのケーススタディ集 示唆される「GUIエージェントの夜明け」"
source: "https://ai-data-base.com/archives/78895"
author:
  - "[[AIDB Research]]"
published: 2024-11-21
created: 2025-06-13
description: "本記事では、PCの画面を見て操作できる「Claude 3.5 Computer Use」の可能性と課題についての調査報告を紹介します。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、PCの画面を見て操作できる「Claude 3.5 Computer Use」の可能性と課題についての調査報告を紹介します。

「Claude 3.5 Computer Use」は、ウェブ閲覧やオフィスソフト、ゲームまで、様々なアプリケーションをマウスやキーボードで自動操作できる画期的なシステムです。

しかし実用化に向けては改善の余地も残されており、その性能と限界を探る研究が進められています。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895-1024x576.jpg)

**参照論文情報**

- タイトル：The Dawn of GUI Agent: A Preliminary Case Study with Claude 3.5 Computer Use
- 著者：Siyuan Hu, Mingyu Ouyang, Difei Gao, Mike Zheng Shou
- 所属：Show Lab, National University of Singapore

## 背景

デスクトップ作業の自動化は、日常的な作業の効率を上げるために重要な研究分野として注目されています。例えば、ウェブサイトの閲覧やオフィスソフトの操作、ゲームのプレイなど、私たちが普段行っている単調な作業を自動化できれば、作業時間を大幅に削減できると考えられています。

このような自動化を実現するため、最近では画像と言葉の両方を理解できるLLMシステムの開発が進められています。例えばWebGPTやCogAgentなどのエージェントシステムは、ウェブサイトの操作から一般的なパソコン操作までを一定のレベルではこなすことができると確認されました。

なお、多くのソフトウェアは内部の仕組みが公開されていないため、直接制御することが難しいという問題があります。そのため、研究者たちは人間のようにマウスやキーボードを使って操作する方法の開発に注力するようになりました。

このような状況の中で、Anthropicという企業がClaude 3.5 Computer Useというシステムを公開しました。このシステムは、画面を見て理解し、人間のように操作できる最初の本格的なツールとして注目を集めています。特徴的なのは、ソフトウェアの内部構造を知らなくても、画面を見るだけで適切な操作ができる点です。

このような新しいタイプのシステムが実際の複雑な環境でどの程度うまく動作するのかは、まだ十分に調べられていません。そのため、様々な実践的な場面でテストを行い、現状の能力と限界を明らかにする必要があります。そこで今回研究者らはClaude 3.5 Computer Useを使用して多岐にわたるタスクを試しました。

以下ではClaude Computer Useについての概要から、各ケーススタディの結果まで紹介します。

## Claude Computer Useとはどんなものか

モデルの詳細な分析を行うため、研究者たちはまずモデル設計について調査し、モデル本体とそのツールの両面から多角的に検討を行いました。

### モデル設計

Claude Computer Useは、ユーザーから自然言語で指示が与えられると、エージェントがその指示を完了するためにデスクトップ上で一連の操作を実行します。最初から最後までの一連の操作は複数のステップに分かれています。

各段階で、エージェントは以下のような流れで動作します。

1. まず画面上のGUI(グラフィカルユーザーインターフェース)の状態を観察します。
2. 次にその状態に基づいて、次に取るべき行動を決定します。
3. そして実際にツールを使って操作を実行し、最後にその結果を確認して今後の計画に活かします。

以下では、Claude Computer Useの詳細な設計について説明していきます。

### システムプロンプト

Claude Computer Useのシステムプロンプトでは、安全な計算環境で使える機能群へのアクセスが提供されます。外部のリソースには、システムが用意した機能を通してのみアクセスできます。機能を呼び出す際は「function\_calls」というブロックを使用し、必要なデータはJSON形式で渡します。実行結果は「function\_results」というブロックで返されます。もしこのブロックが表示されない場合は、呼び出し方に問題がある可能性があります。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_2-edited.jpg)

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_3-edited.jpg)

### 「状態観察」

Claude Computer Useは、メタデータやHTMLに頼ることなく、リアルタイムで撮影されるスクリーンショットだけを通じて環境を観察します。スクリーンショットはタスク実行中に撮影され、人間のようにデスクトップを操作することを可能にします。

”視覚のみ”のアプローチを採用することで、ソフトウェアのAPIに依存することなく、一般的なコンピュータ操作が実現できています。ソースコードが非公開のソフトウェアを扱う場合に大きな利点となります。

### 推論の仕組み

Claude Computer Useは、動的なGUI環境でより確実なアクションを生成するため、「推論＆実行」というアプローチを採用しています。

従来のReAct（推論と行動を組み合わせた手法）と同様に、現在のGUI状態を観察してから行動を決定することで、その状況に適した操作を確実に行えます。また、ユーザーの要求が満たされたかどうかを効率的に判断できるため、不要な操作を避けることができます。

興味深いことに、従来のReActでは各ステップで環境を継続的に観察するのが一般的でしたが、Claude Computer Useはより選択的な観察戦略を採用しています。つまり、推論に基づいて必要な場合にのみGUI状態を監視します。

### ツールの使用

現在、Claude Computer Useには3つのAnthropicが定義したツールが提供されています。

1. **コンピューターツール  
	**マウスとキーボードの操作、スクリーンショットの撮影など
2. **テキストエディターツール  
	**ファイルの表示、作成、編集など
3. **Bashツール  
	**Bashシェルでのコマンド実行

各ツールについて、以下で説明していきます。3つのツールはそれぞれ特徴的な機能を持ち、相互に補完し合いながらコンピュータ操作を実現します。

#### コンピューターツール

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_4-edited.png)

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_5-edited.png)

マウスやキーボードを使ったコンピュータ操作とスクリーンショットの撮影を支援するためのものです。

デスクトップGUIとのみやり取りができ、ターミナルやアプリケーションメニューへの直接アクセスはできません。デスクトップのアイコンをクリックしてアプリケーションを起動する必要があります。

アプリケーションの起動や処理には時間がかかることがあるため、連続してスクリーンショットを撮影して操作の結果を確認する必要があります。たとえばFirefoxをクリックしてもウィンドウが開かない場合は、再度スクリーンショットを撮影して確認します。

画面の解像度は表示幅×表示高さのピクセル数で指定されます。アイコンなどの要素をクリックする際は、事前にスクリーンショットで座標を確認することが推奨されています。また、ボタンやリンクなどをクリックする際は、要素の中央でカーソルの先端が重なるようにする必要があります。

#### エディターツール

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_6-edited.png)

エディターツールは、ファイルの表示、作成、編集を行うためのカスタムツールです。

コマンドは異なる会話やユーザーとのやり取りでも状態が維持されます。viewコマンドでファイルを表示する場合は行番号付きで表示され、ディレクトリの場合は2階層までの隠しファイルを除くファイル一覧が表示されます。

既存のファイルパスに対してcreateコマンドは使用できません。出力が長い場合は切り詰められ、その旨が表示されます。undo\_editコマンドで最後の編集を取り消すことができます。

str\_replaceコマンドを使用する際の注意点として、old\_strパラメータは元のファイルの連続する行と完全に一致する必要があり、空白文字にも注意が必要です。old\_strがファイル内で一意でない場合、置換は実行されません。また、new\_strパラメータには置換する新しい行を含める必要があります。

要するにエディターツールは、一度実行したコマンドの状態を会話が変わっても記憶しています。ファイルを開くと行番号付きで表示され、フォルダを開くと2階層分の中身が見えます。すでにあるファイルは新規作成できず、表示内容が長すぎる場合は途中で省略されます。編集を間違えた場合は、直前の操作を取り消せます。文字列を置き換える時は、空白も含めて完全に同じ部分を指定する必要があり、同じ文字列が複数箇所にある場合は置き換えできません。

#### Bashツール

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_7.png)

Bashツールは、Bashシェルでコマンドを実行するためのツールです。

このツールを使用する際、commandパラメータ内の内容をXMLエスケープする必要はありません。aptとpipを通じて一般的なLinuxとPythonのパッケージにアクセスできます。コマンドの状態は異なる会話やユーザーとのやり取りでも維持されます。

ファイルの特定の行範囲を調べるには、sedコマンドを使用することができます。大量の出力が発生するコマンドは避けることが推奨されています。また、長時間実行されるコマンドはバックグラウンドで実行する必要があります。

要するに、Bashツールはコマンドライン操作のためのツールで、XMLのエスケープ処理は不要です。Linuxコマンドやpythonパッケージを使え、実行状態は会話をまたいで保持されます。sedコマンドでファイルの特定部分を見ることができますが、出力が多すぎたり時間がかかりすぎたりするコマンドは避け、必要な場合はバックグラウンドでの実行を推奨しています。

### GUIアクション空間

Claude Computer Useのアクション空間は、マウスとキーボードのすべての基本操作で構成されています。

マウス操作では、移動、左クリック、右クリック、中クリック、ダブルクリック、ドラッグなどがあります。キーボード操作では、文字入力やキーストローク、キーの組み合わせによるショートカットなどが可能です。また、座標に関連する操作では、観察されたスクリーンショットのピクセル空間における目標位置も含まれます。

例として、以下のような操作が想定されています。

- マウスカーソルを画面上の特定の位置に移動する
- 指定位置でマウスクリックを実行する
- テキストを入力したりキーを押したりする
- キーボードのショートカットを使用する
- ドラッグ＆ドロップを実行する
- 状態を観察するためのスクリーンショットを撮影する

### 履歴の視覚的コンテキストの維持

Claude Computer Useは、タスク実行中に蓄積された履歴スクリーンショットを維持します。

そして、次の行動を決める際に3つの情報を組み合わせて判断します。

1. ユーザーから受け取った指示内容
2. 現在の画面の状態
3. これまでの操作で見てきた画面の記録

つまり、過去に見た画面の情報も記憶に残しておき、それらも参考にしながら次にどう操作するかを決めているのです。人間が作業する時のように、「さっきこの画面でこうしたから、次はこうしよう」といった判断ができるようになっています。

### エージェントの実装

Anthropicが提供しているデモのコードベースは、DockerのLinux環境のみをサポートしています。

しかしこれだけでは実世界の環境でGUIオートメーションモデルをベンチマーク評価するには不十分です。そこで今回研究者らは、Computer Use Out-of-the-Boxと呼ぶクロスプラットフォームでDockerを必要としないGUIエージェントフレームワークを開発しました。

[https://github.com/showlab/computer\_use\_ootb](https://github.com/showlab/computer_use_ootb)

上記のフレームワークを使うと、WindowsとmacOSの両方でローカルにGUIエージェントを展開できます。PyAutoGUIを活用することで、両オペレーティングシステムで操作の互換性を確保し、APIベースのモデルが特定のアクションコマンドを通じてソフトウェアを遠隔操作できるようになっています。

## コンピュータ使用能力の評価

### セットアップの詳細

評価は今回開発されたComputer Use Out-of-the-Boxプラットフォームを使用し、WindowsとmacOSの両方で実施されました。AnthropicのComputer use APIドキュメントの推奨に従い、解像度はWindowsで1366×768、macOSで1344×756に設定されています。

コンピュータの使用は、標準的な会話APIやインターフェースとは大きく異なるリスクをもたらします。中でも、インターネットとのやり取りやユーザーの機密情報を操作する可能性がある場合は注意が必要です。そのため、研究者らは人による評価を行い、プロセスを継続的に監視・レビューしました。また、タスク完了時の最終状態を手動で観察し、「成功」または「失敗」として結果を判定しました。

なお、オペレーティングシステム間のデスクトップタスクを幅広く網羅するため、ウェブ検索、ワークフロー、オフィス生産性、ビデオゲームの3分野における12のソフトウェアまたはウェブサイトで20のタスクを実施しています。

### ケーススタディの範囲

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_1-1024x408.jpg)

Web検索、生産性、ワークフロー、エンターテインメントに分類された代表的な評価タスク（左）と、ユーザーのOSで実行するためのComputer Use Out-of-Boxフレームワーク（右）の概要

図（左）に示すように、研究者らは幅広いデスクトップタスクを対象とするため、各分野で代表的なタスクを集めました。

下の表は今回評価したケーススタディの概要を示しています。分野ごとに分類され、各タスクの成功/失敗も記載されています。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_8-1024x590.png)

### カテゴリ１：ウェブ検索に関するケーススタディ

ウェブページは動的に変化するため、モデルは決まった手順だけでなく、状況に応じて柔軟に計画を立てる必要があります。

また、ウェブページには数多くの操作要素があるため、正しい要素を特定して操作する高い認識能力が求められます。さらに、ページ間のリンク構造により、モデルは各ステップの実行状況に応じて前後のページを行き来する判断も必要です。

ケーススタディでは、実際のウェブサイトを使った複雑な検索タスクでモデルの性能を評価しています。動的なコンテンツの扱い、複数ステップの計画実行、予期せぬインターフェースの挙動への対応など、モデルの能力を実証的に示していきます。

#### アマゾンでの100ドル以下のノイズキャンセリングヘッドホンの検索

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_9-1024x360.jpg)

図の青色部分はモデルの計画プロセスを示しています。モデルはまずアマゾンのメインページ上にいることを認識し、そこからユーザーの指示内容から必要な検索キーワードを抽出し、検索ボックスを使って目的のヘッドホンを探す計画を立てます。その後、予算内の商品をフィルタリングする方針を示しています。

図の茶色部分は、モデルが生成した操作を示しています。検索ボックスの中央を正確に特定してクリックし、その後検索ロゴをクリックして検索を開始する様子が確認できます。

モデルは「カートに追加」ボタンをクリックした後、スクリーンショットを撮影して目的の商品がカートに追加されたことを確認しています。モデルが自身の操作結果を観察し、必要に応じて再試行するか、あるいはタスクを終了するかを動的に判断できることを示しています。

#### アップル公式サイトでのディスプレイとアクセサリーの閲覧

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_10_2-edited.jpg)

図の青色部分はモデルの計画プロセスを示しています。モデルはアップルの公式サイトのメインページにいることを認識します。メニューやサブメニューを辿って目的の商品を探すと時間がかかり、カーソルのホバリングやスクロールなどの難しい操作が必要になります。そこでモデルは検索機能を活用する計画を立て、効率的な方法を選択しています。

さらに、AppleCareのウィンドウがポップアップした際、モデルはその変化を捉え、ユーザーの指示とポップアップウィンドウのオプションに基づいて新たな計画を立てています。ユーザーがすべてのアクセサリーを希望しているため、より長期のカバレッジを提供する3年間のAppleCare+をカートに追加することを選択しました。

図に示されるように、モデルはテキスト、ボタン、画像付きのリンクなど、様々な種類の要素と対話しています。これは、HTMLなどのメタデータに頼ることなく、純粋に視覚情報のみを使用して操作できる、Claude Computer Useの高い認識能力を示しています。

緑色部分に示されるように、モデルは重要なステップの後に振り返りを行い、強力な評価能力を発揮しています。ナノテクスチャオプションの追加に成功したことを確認し、残りのタスクに進んでいます。さらに、すべてのアクセサリーがカートに追加された後、最終的なスクリーンショットを撮影して確認し、追加したアクセサリーの一覧を表示しています。

#### Fox Sportsサブスクリプション（失敗例）

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_11-1024x353.png)

図の青色部分は、モデルの計画プロセスを示しています。モデルはFox Sportsのウェブサイトを認識し、利用可能なスポーツカテゴリー内でフォーミュラ1を探すことを決定します。まずスポーツナビゲーションメニューの「MORE」ボタンを選択して、より多くのスポーツカテゴリーを探索することを計画します。初期のスポーツリストでフォーミュラ1が見つからなかった際、「ACCOUNT」メニューにアクセスする方針に切り替えています。

ステップ1では、スポーツナビゲーションパネルの「MORE」ボタンを正確に特定してクリックし、追加のスポーツを表示しようとします。ステップ2では、この最初の方法で失敗した後、戦略を変更して左側メニューの「ACCOUNT」タブをクリックしています。モデルがユーザーの意図を達成するために異なる方法を試みる柔軟性を示しています。

このケースは、インターフェースの複数のセクションを操作しながら目的のコンテンツを探そうとするモデルの能力を示しています。しかし、最終的には失敗に終わった重要な事例となっています。

緑色部分に示されるように、モデルは「MORE」タブにアクセスした後、関連サイトの1つを識別し、目的のスポーツを再確認しています。最終的な結果は不正確でしたが、この評価プロセスは直接的なナビゲーションと代替ルートの再計画を試みるモデルの努力を反映しています。また、認証が必要な障壁に直面した際の状況認識も示しています。

赤色のキャプションで強調されているエラーは、モデルの計画における重大な見落としを明らかにしています。モデルは「MORE」ボタンの下に展開されたスポーツカテゴリー内でフォーミュラ1を探そうとしましたが、成功しませんでした。ナビゲーションパネルをスクロールして探索を続ける代わりに、誤って「ACCOUNT」タブに戦略を切り替えてしまいました。アカウント設定で目的のスポーツが見つかると誤って判断したのです。

この方針転換により、ログインが必要になるという不要な複雑さが生じ、最終的にタスクの完了を妨げることになりました。

このエラーは、初期のインターフェース表示で項目が見つからない場合の、文脈を考慮したナビゲーションの重要性を浮き彫りにしています。しかも実世界でよく起こるシナリオです。計画を性急に変更するのではなく、ナビゲーションパネル内のスクロールを優先すべきでした。

このタスクは短いものでしたが、モデルのスクロールベースのナビゲーションにおける限界を示し、今後の改善が必要な領域を明らかにしています。

### カテゴリ２：ワークフローに関するケーススタディ

複数のアプリケーション間の連携や、複数の対象を扱うユーザーの要求に対応するタスクでは、モデルはソフトウェア間をスムーズに行き来しながらデータを管理することが求められます。現実の業務シーンでは、ウェブブラウザ、生産性ツール、専門的なアプリケーションなどを連携させて複雑な目標を達成することがよくあります。

まず、異なるインターフェース間で操作を調整するための強力な計画能力が必要です。また、アプリケーション間で大きく異なったり、逆によく似ていたりするユーザーインターフェース要素を解釈し、操作する強固な認識能力も求められます。さらに、コンテキストの切り替え時に発生する予期せぬ動作やエラーに対応して、計画を動的に調整できる能力も必要です。

#### Apple Musicでトレンド音楽を見つけてプレイリスト追加

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_12-edited.jpg)

図の青色部分は、Apple Musicで特定の曲を見つけてプレイリストに追加するというモデルの計画の流れを示しています。まず「New」タブで「Latest Songs」セクションの最初の曲を見つけ、既存の「Sonnet’s Selection」プレイリストに追加することを計画しました。その後、同じ「New」タブをスクロールして「Singapore Top 100」コレクションを探し、そのトップ曲も同プレイリストに追加するという手順を立てました。この計画フェーズは、タブ間の移動、セクションの特定、曲の選択とプレイリストへの追加という、ユーザーの指示に基づいた複数ステップの目標を理解していることを示しています。

モデルは「New」タブへの移動から始め、「Latest Songs」下の最初の曲を特定して3点メニューアイコンをクリックしました。その後「プレイリストに追加」を選択し、「Sonnet’s Selection」を指定。続いてPage Downキーを使用して「Singapore Top 100」まで移動し、スクリーンショットで位置を確認しながら目的の位置まで到達。最後にトップ曲に対して同様のプレイリスト追加操作を実行しました。

検証においては、「New」タブへの移動確認から始まり、曲のオプションメニューとプレイリストオプションの表示を確認。スクロール時には定期的にスクリーンショットを撮影して現在位置を確認し、最終的なプレイリストへの追加完了まで確実に検証しました。

以上から、マルチページのナビゲーションを含むタスクにおける、モデルの継続的な視覚的フィードバックの重要性が示されています。

#### Amazonで製品を検索してExcelに記録

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_13.jpg)

図の青色部分は、複数アプリケーションにまたがるタスクに対するモデルの計画を示しています。モデルはAmazonで特定のモニターを検索し、検索結果の上位2件の製品名と価格をExcelワークシートに記録するという計画を立てました。これは異なるソフトウェア間でのデータ移行を含む一貫したプランとなっています。

モデルの具体的な操作として、まずAmazonの検索バーで「27 inch 165hz gaming monitor」というキーワードで検索を実行。その後タスクバーからExcelを起動し、セルA1に「Product」、B1に「Price」というヘッダーを入力しました。続いて検索結果の製品情報をそれぞれ適切なセルに入力していきました。これらの操作は、セルや画面上のインターフェース要素に対して正確にターゲットされています。

検証プロセスでは、まずExcelが完全に起動するまで待機してからデータ入力を開始。データ入力後には最終的なスクリーンショットで記録内容を確認しました。この一連の検証メカニズムにより、アプリケーション間でのデータ転記の正確性が担保されています。このように、異なるアプリケーション間でのワークフローにおいても、モデルは高い精度で作業を完了させることができました。

#### Google SpreadsheetをExcelで開くためのエクスポートとダウンロード

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_14.png)

図の青色部分は、Google SpreadsheetをMicrosoft Excelで開くためのモデルの計画を示しています。モデルはまずGoogle Spreadsheet内のファイルメニューにアクセスし、ダウンロードオプションを見つけ、適切な「.xlsx」形式を選択してエクスポートするという手順を立てました。ファイルのダウンロード後は、Excelで自動的に開く（.xlsxファイルの標準アプリケーションとしてExcelが設定されているため）という流れを想定しています。この一連の計画は、ウェブベースの環境からローカルソフトウェアへの移行を確実に行うための理解を示しています。

モデルはまずGoogle Spreadsheetのファイルメニューをクリックし、エクスポートのためのオプションを表示させました。次にダウンロードオプションを見つけてクリックし、「Microsoft Excel (.xlsx)」形式を選択してダウンロードを開始。ダウンロードが完了すると、Firefoxのダウンロード通知を確認し、ダウンロードしたファイルをクリックしてExcelで開く操作を実行しました。この一連の操作は、ブラウザとデスクトップ環境の両方で正確に機能することを示しています。

各段階での検証も適切に行われました。ダウンロードオプション選択後にスクリーンショットを撮影して正しいメニューオプションが表示されていることを確認し、Firefoxのダウンロードバーにファイルが表示されたことも確認しています。Excelへの切り替え後は、ファイルが開かれていることを確認。さらにモデルは、Excelの保護ビューモードに対応するため、編集を有効にする必要があることも認識していました。最終的な検証ステップでは、ドキュメントが正常にエクスポートされ、Excelで開かれたことを確認しています。

以上から、クラウドとローカル環境間でのシームレスな移行におけるモデルの能力を示されています。

#### App Storeからアプリをインストールしてストレージ使用量を報告

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_15.jpg)

図の青色部分は、App Storeで「GoodNotes」を検索し、インストールし、そのストレージ使用量を報告するというモデルの計画を示しています。最初にApp Storeの検索機能を使用して「GoodNotes」を検索し、検索結果からアプリの詳細を確認してサイズを確認する計画を立てました。その後、「入手」と「インストール」ボタンをクリックしてインストールを進め、表示されているアプリのサイズを報告するという手順です。この包括的な計画は、ユーザーの要求に沿って検索から詳細確認、インストール手続きまでを網羅しています。

モデルはまずApp Store内の検索ボックスをクリックし、「GoodNotes」と入力してReturnキーを押して検索を実行。検索結果から「GoodNotes 6」を見つけ、アイコンの中心をクリックして詳細情報にアクセスしました。その後「入手」ボタンをクリックし、「インストール」ボタンが表示されるのを待って、インストールを開始しました。

検証では「GoodNotes」の検索後、正しいアプリが検索結果に表示されることを確認するため、スクリーンショットを撮影して確認。アプリのサイズが1.39 [GB](https://ai-data-base.com/archives/26343 "勾配ブースティング") であることを確認し、要求された情報として記録しました。最終的な確認では、インストールを開始するために必要なユーザー認証が必要であることを認識し、タスクの進捗状況をまとめました。モデルは適切なタイミングでタスクを停止し、ユーザーの介入が必要な状態であることを理解していました。この一連のフィードバックは、各段階が文書化され検証されていることを示しており、インストール手順が開始され、ユーザーの介入を待っている状態であることを確認しています。

### カテゴリ３：Officeソフトに関するケーススタディ

Officeソフトは現在、仕事や教育において不可欠な存在です。文書の作成、データ分析、プレゼンテーション資料の作成など、幅広いタスクの中心的な役割を担っています。

ウェブ環境ではAPIや構造化されたHTMLが自動化のために提供されることが多いのに対し、オフィスアプリケーションではそのようなプログラム的なインターフェースがファイル操作に使用できないことが一般的です。そのため、GUIの自動化モデルは人間のユーザーと同様に、アプリケーションの視覚的なインターフェースと直接やり取りする必要があります。メニュー、ボタン、テキストフィールド、表のセルなどのインターフェース要素との対話が含まれます。モデルは、ドキュメントやスプレッドシート内でコマンドを実行し、コンテンツを操作するために、これらのインターフェース要素を正確に認識し解釈する必要があります。

Officeのインターフェースは機能が豊富で”密集”しているため、モデルには正確な要素の特定と位置の把握のための強力な視覚的認識能力が必要です。また、正確な操作の実行が不可欠で、わずかな誤差でも誤った結果や意図しない変更につながる可能性があります。さらに、ソフトウェアのバージョンやユーザーのカスタマイズによってインターフェースのレイアウトやテーマが異なる場合があります。

#### Outlookでメール転送とCCの追加

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_16.png)

図の青色部分は、Outlookでの特定のメール転送に関するモデルの計画を示しています。タスクでは、受信箱からAnthropicからのメールを見つけ、右上にある転送オプションを使用することが求められました。メールは主要な受信者として「siyuanhu@nus.edu.sg」に転送され、「ouyangmingyu04@u.nus.sg」がCCに追加されます。この計画フェーズは、メール管理における選択、転送操作、アドレス入力を段階的に統合したモデルの理解を示しています。

モデルはまず受信箱からAnthropicのメールを開き、読み取りウィンドウにメッセージが表示されていることを確認しました。次に、右矢印で表される転送ボタンを特定してクリックし、宛先フィールドをクリックして「siyuanhu@nus.edu.sg」を主要な受信者として入力。その後CCフィールドに「ouyangmingyu04@u.nus.sg」を追加し、最後に送信ボタンをクリックして操作を完了しました。

各操作後、モデルは適切な検証を行いました。まず指定されたAnthropicのメールを受信箱から特定し、メールを開いた後はメッセージが正しく表示されていることを確認。受信者アドレスとCCアドレスの入力後は、スクリーンショットを撮影して入力が正しく反映されていることを確認しました。最終ステップでは、メールを開き、転送し、受信者とCCアドレスを追加し、送信するという全ての必要な操作が正常に完了したことを確認しています。

このケースは、専門的なコンテキストでのメール処理タスクにおけるモデルの習熟度を示す好例となっています。

#### Word文書のレイアウトをA3サイズ横向きに変更

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_17.png)

図の青色部分は、Microsoft Wordでのドキュメントレイアウト調整に関するモデルの計画フェーズを示しています。モデルは必要な操作を特定することから開始し、「レイアウト」タブを開き、「サイズ」で用紙寸法をA3に変更し、最後に「向き」を「横」に設定するという手順を立てました。この構造化された計画は、Wordのレイアウトコントロールに関するモデルの理解と、ユーザーの要求に応じた具体的なページレイアウト調整を行うための明確な順序立てたアプローチを示しています。

モデルは「レイアウト」タブをクリックし、「サイズ」を選択してドロップダウンオプションからA3を選んで新しい用紙サイズを適用しました。続いて「向き」のドロップダウンをクリックし、「横」を選択してドキュメントの向きを調整しました。

レイアウトの調整が完了した後、モデルはA3サイズと横向きの両方が正しく設定されたことを確認しました。要求された変更が適切に適用され、ドキュメントの書式設定がユーザーの要件に合致していることが保証されました。

#### Word文書を2段組みに変更

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_18.png)

図の青色部分は、Microsoft Wordで文書のレイアウトを1段組みから2段組みに変更するためのモデルの計画プロセスを示しています。モデルは「レイアウト」タブにアクセスし、「段組み」オプションを見つけ、このメニューから「2段」を選択することを計画しました。この構造化されたアプローチは、Wordのレイアウト機能へのアクセス方法と、文書構造を変更する方法に関するモデルの理解を示しています。

モデルは「レイアウト」タブをクリックしてレイアウトオプションを表示させ、「段組み」ボタンを見つけてクリックしました。これによりドロップダウンメニューが開き、そこから「2段」オプションを選択して文書を2段組みのレイアウトに再フォーマットしました。各操作は、Wordのインターフェースの特定の機能を正確に操作することを示しています。

モデルは2段組みレイアウトを選択した後、文書のテキストが正常に2段組みに再編成されたことを確認しました。この確認により、レイアウトの変更が意図通りに適用されたことを保証しています。最終的なフィードバックでは、文書が現在ユーザーの要求通りの形式になっていることを確認しました。

#### Word履歴書テンプレートの名前と電話番号を更新（失敗ケース）

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_19.png)

図の青色部分は、Microsoft Wordの履歴書テンプレートで名前と電話番号を更新するためのモデルの計画を示しています。当初、モデルは「Janna Gardner」を「Sonnet」に置き換え、既存の電話番号を「7355608」に更新するという計画を立てました。このケースは失敗に終わりましたが、モデルがドキュメント内の特定のテキストフィールドを見つけて編集しようとした試みを示しています。

モデルは名前「Janna Gardner」を選択してダブルクリックで「Sonnet」に置き換え、電話番号を選択して「7355608」を新しい値として入力しようとしました。しかし、実行段階でモデルの操作に誤りが生じました。

Step 1では、名前の置き換え時にエラーが発生しました。モデルは「Janna Gardner」全体を「Sonnet」に置き換えることを正しく計画していましたが、ダブルクリックの操作では姓の「Gardner」のみが選択され、名の「Janna」は変更されないままとなりました。Step 2では、電話番号の更新時にも同様の問題が発生し、番号全体ではなく一部分のみが選択されたため、更新が不完全なものとなりました。

さらに深刻な問題として、Step 3では、モデルがタスクの実行状態を誤って判断してしまいました。部分的な更新にもかかわらず、モデルは両方の変更が正常に完了したと誤って認識し、フィードバックを提供しました。

モデルのテキスト選択の精度における限界と、より正確な検証フィードバックの必要性を示しています。

#### PowerPointの背景をグラデーションで塗りつぶし

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_20.png)

図の青色部分は、PowerPointの新しい空白スライドに対してグラデーション背景を適用するというモデルの計画フェーズを示しています。モデルは最初に、背景の書式設定オプションにアクセスするために「デザイン」タブをクリックする計画を立てました。ステップ3で「書式設定」ペインが見つからなかった際、モデルはステップ4で「デザイン」タブへのアクセスという代替計画を立て直しました。これは、PowerPointの基本操作に関するモデルの理解と、目的の機能に様々な方法でアクセスできる柔軟性を示しています。

モデルはまずスライド上で右クリックし、背景の書式設定オプションへのアクセスを試みました。しかし、実際にはタイトルのテキストボックス上で右クリックしてしまったため、背景の書式設定オプションが表示されませんでした。この結果を受け、モデルはステップ4で計画を修正し、直接「デザイン」タブにアクセスすることを選択。ここから「背景の書式設定」ボタンを見つけ、「グラデーション塗りつぶし」オプションをクリックしてスライドに適用しました。

検証段階では、「書式設定」ペインでグラデーション塗りつぶしを選択した後、背景が正常に適用されたことを確認しました。特筆すべきは、ステップ3で目的の「書式設定」ペインが見つからなかった際、モデルは素早く「デザイン」タブへのアクセスという代替アプローチを採用したことです。

最初の方法が期待した結果を生まなかった場合でも、モデルが柔軟にアプローチを調整できる能力を示しています。

#### PowerPointのスライドタイトルと三角形の追加

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_21.png)

図の青色部分は、PowerPointのスライドにタイトル「Triangle」を追加し、その下に三角形の図形を挿入するというモデルの計画を示しています。モデルは、まずタイトルボックスに「Triangle」と入力し、次に図形メニューから三角形を選択してスライド上に配置するという手順を立てました。この構造化された計画は、PowerPointのインターフェース操作と、タスク完了に必要な順序についてのモデルの理解を示しています。

モデルはまず「タイトルを入力」ボックスをクリックして「Triangle」という新しいタイトルを入力。続いて「図形」ボタンにアクセスし、図形メニューを開いて基本図形セクションから三角形を選択し、タイトルの下にクリック＆ドラッグ操作で図形を描画しました。それぞれの操作は、スライド上で意図した通りの修正が行われるよう、正確に実行されています。

緑色の部分が示す検証では、要求された両要素が正常に追加されたことを確認しています。タイトルと三角形を追加した後、モデルはスライドに「Triangle」というタイトルが表示され、その下に青い三角形が適切に配置されていることを確認しました。この最終確認により、視覚的な変更が完了したことが保証されました。このケースは、単なるレイアウト調整以上の、スライドのより多様な機能に対するモデルの効果的な制御を示しています。

#### PowerPointに番号記号を挿入（失敗ケース）

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_22.png)

図の青色部分は、モデルの計画フェーズにおける、PowerPointの2枚目のスライドのテキストに番号記号を追加する試みを示しています。モデルは左パネルから2枚目のスライドを選択し、ツールバーの番号記号機能を使用してリスト形式を適用するという計画を立てました。この初期計画は、PowerPointのインターフェースを使用してテキスト書式を変更するための理解を示していましたが、実行段階で複数の問題に直面しました。

モデルはステップ2で箇条書き記号を適用してしまい、要求された番号記号とは異なる結果となりました。ステップ3でモデルはこの不一致を認識し、計画を修正しようとしましたが、’left\_click\_drag’を使用したテキスト選択が不完全であり、番号ボタンの位置特定にも苦戦しました。さらに、ステップ6では最終的な結果を正しく評価できず、適用された書式が番号形式であることを確認できませんでした。

上記のエラーケースは、モデルの正確な選択操作や小さな機能ボタンの位置特定における現在の限界を示しています。

#### Excelのワークシートで検索と置換

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_23.png)

図の青色部分は、開いているExcelワークシートで「$」記号を「SGD」に置換する操作に関するモデルの計画を示しています。モデルはまず「検索と置換」ダイアログを開き、「$」記号を検索して「SGD」に置換するという計画を立てました。さらに、キーボードショートカット「Ctrl+H」を使用してこの置換を実行することを計画に含めました。この計画は、Excelの機能に関するモデルの理解と、複数のステップを体系化する能力を反映しています。

モデルは「Ctrl+H」ショートカットを使用して「検索と置換」ダイアログを開き、「検索する文字列」フィールドに「$」を入力。その後、Tabキーで「置換後の文字列」フィールドに移動して「SGD」と入力しました。続いて「すべて置換」ボタンをクリックして、ワークシート全体での置換を実行しました。この一連の操作は、Excelのインターフェースとショートカットを効果的に活用できることを示しています。

緑色の部分が示す検証プロセスでは、置換の実行後、Excelから190件の置換が行われたという確認メッセージを観察しました。このフィードバックにより、要求された操作が確実にワークシート全体で実行されたことが裏付けられています。

#### Excelで合計式をセルに挿入（失敗ケース）

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_24.png)

図の青色部分は、「ACTUAL（実績）」列の合計を「総予算」の欄に挿入するというExcelでのモデルの計画を示しています。モデルは「ACTUAL」列の値を合計し、その結果を「総予算」行のセルに挿入するという計画を立てました。この計画では、指定された範囲のセルに対する合計計算が必要であることを理解していました。

しかしステップ3で、モデルはC6からC15までの範囲を誤って選択してしまい、正しい範囲であるD6からD16を選択できませんでした。また、「その他の経費」の行も計算から除外されてしまいました。このエラーにより、不完全な計算結果となりました。ステップ4では、モデルが各項目の詳細を確認のために抽出しましたが、ユーザーの要求に従って正しい列の合計を計算できているかどうかを検出できませんでした。

モデルの範囲選択と数学的推論プロセスがまだ完全ではないことを示す例です。

### カテゴリ４：ゲームに関するケーススタディ

ゲームは、GUIの自動化モデルにとって最も困難なタスクの1つを提示します。その理由として、まず強力な計画能力が必要とされます。ゲームプレイには、戦略の立案、リソースの管理、探索を通じた推論が求められるためです。標準的なソフトウェアとは異なり、ゲームでの探索はより複雑です。重要な情報や手がかりが必ずしも即座に見えたり、簡単に識別できたりするわけではないため、より高度な計画性と適応性が必要となります。

次に、ビデオゲームは高い認識能力を必要とします。視覚的なスタイルやインターフェース要素は、ゲームのテーマやジャンルによって大きく異なるためです。ゲーム内の多くのボタンやコントロールは、テキストラベルのないアイコンやシンボルで表現されることが多く、モデルは様々な視覚デザインに対する理解を一般化する必要があります。場合によっては、コンテキストと推論に基づいてボタンやコントロールの機能を推測する必要もあります。

#### Hearthstoneで新規デッキの作成と名前の変更

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_25.jpg)

図の青色部分は、Hearthstoneで新しいデッキを作成し、名前を変更するというモデルの計画を示しています。モデルはまずメイジクラスを使用して新しいデッキを作成し、「Core Mage（基本メイジ）」のプリセットデッキを選択。その後、デッキの名前を「Sonnet’s New Deck」に変更するという計画を立てました。この順序立てたアプローチは、Hearthstoneのデッキ作成プロセスについてのモデルのその場での学習能力を反映しています。これは、クラスの選択、プリセットの選択、デッキオプションの確認といった、モデルが事前に学習していることが想定されない操作を含んでいます。

具体的な操作として、モデルはまず「新規デッキ」ボタンをクリックしてデッキ作成プロセスを開始。次にメイジのポートレートを選択してクリックし、「選択」をクリックしてその選択を確定しました。続いて「Core Mage」のプリセットデッキオプションを特定して選択し、再度「選択」をクリックしてデッキの作成を進めました。デッキの作成後、画面上部のデッキタイトルをクリックして名前変更機能を開始。「Sonnet’s New Deck」という新しい名前を入力し、Enterキーを押して確定し、最後に「OK」をクリックして処理を完了しました。これら一連の操作は、Hearthstoneのユーザーインターフェースを正確にナビゲートし、デッキの作成と名前変更の両方を完了させる能力を示しています。

プロセスの各段階で適切な検証も行われました。デッキの名前変更後、モデルは名前が「Sonnet’s New Deck」に正しく変更されたことを確認。最終ステップでは、すべてのタスクが完了し、デッキが使用可能な状態になったことを確認しました。

これは詳細なユーザーの指示が提供されたゲームインターフェースでの複数ステップのタスクを正確に実行するモデルの能力を示しています。ユーザーの指示の重要性を強調すると同時に、それらとモデルの強力な適合性も示されています。

#### Hearthstoneでヒーローパワーの使用

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_26.jpg)

図の青色部分は、Hearthstoneでのゲーム状況におけるモデルの計画プロセスを示しています。モデルは最初にゲームの初期状態を正確に把握し、メイジとして3マナポイント（右側の青い結晶）が使用可能であることを認識しました。対戦相手のボードには、1/4（攻撃力1、体力4）と2/1（攻撃力2、体力1）の2体のミニオンが存在し、メイジのヒーローパワー（コスト2マナ、1ダメージを与える）が使用可能な状態であることも把握しました。熟練プレイヤーの確認によると、これはこのターンで取り得る最適な行動の1つとされています。この意思決定プロセスは、マナなどのゲーム固有のリソースと、現在のゲーム状況に基づく効果的なターゲット選択戦略を解釈するモデルの能力を示しています。

標準的なソフトがフラットで単純なインターフェースデザインを持つことが多いのに対し、Hearthstoneのインターフェースはチェス盤のようなファンタジーアートスタイルで豊かに描かれており、アイコンや要素の識別がより困難です。この複雑さにもかかわらず、モデルはヒーローパワーのアイコンを正確に特定し、対戦相手のボード上の関連するミニオンを識別することに成功しました。さらに、モデルはミニオンに表示される赤い数字で示される体力値など、視覚的な属性を解釈してそれぞれのターゲットの脆弱性を評価する能力も示しました。

検証において、モデルは2/1のミニオンにヒーローパワーを使用して排除した後、ゲームの状態を確認し、ボード上に敵ミニオンが1体のみ残る、より有利な状況になったことを観察しました。残り1マナを効率的に使用する方法がないため、モデルはターンを終了することを決定しました。このターンではより多くの行動の可能性があったかもしれませんが、ヒーローパワーを使用して2/1のミニオンを排除するという主要な行動は成功裏に達成されました。

以上はモデルが利用可能なリソースに基づいてゲームの状態を分析し、戦略的な決定を下す能力を反映しています。また、より視覚的に複雑で様式化されたゲームのコンテキストにおいても、モデルは最終的なボード状態を観察するなど、検証機能を一般化できることを示しています。

#### Honkai: Star Railでワープ（ガチャ）の自動化

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_27-edited.jpg)

図の青色部分は、Honkai: Star Railで10連ワープを自動実行するモデルの計画を示しています。このタスクについては、段階的な詳細な指示がモデルに提供されました。モデルは、ワープメニューにアクセスし、「Eyes of a Ninja」のワープオプションを選択して10連ワープを開始し、その後ワープアニメーションをスキップ、最後にサマリー画面を閉じるという計画を立てました。

モデルはまず「Escape」キーでゲームメニューにアクセスし、ワープアイコンに移動。ワープ画面で「Eyes of a Ninja」バナーを選択し、10連オプションを選びました。ワープシーケンスが始まると、モデルは画面上部の矢印を繰り返しクリックしてアニメーションをスキップし、最後にサマリー画面の「X」アイコンをクリックして完了しました。

検証段階では、ワープアニメーション中に右上のスキップ矢印を確認し、各クリックでカットシーンを効率的にスキップしました。サマリーページでは獲得したキャラクターを確認し、ワープ全体のプロセスが完了したことを検証してから終了をクリックしました。

こ十分に詳細なユーザー指示が提供された場合に、モデルが未知のゲーム環境でも複数のステップを正確に実行できることを示しています。また、反復的なゲーミングタスクを効果的に自動化し、プレイヤーの体験を補助するツールとしての可能性も示されました。

#### Honkai: Star Railでデイリーミッションの自動化

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78895_28-edited.jpg)

図の青色部分は、Honkai: Star Railでのデイリーミッションを自動化するモデルの計画を示しています。モデルは、インターアストラルガイドへのアクセス、特定のミッション（「経験値カリックス（黄金）」）の選択、挑戦回数の調整、チャレンジの開始、自動戦闘モードの有効化、そして戦闘終了後の退出という一連の手順を計画しました。

モデルは各ステップを正確に実行し、必要に応じて視覚的なフィードバックを確認しながら進めました。特に自動戦闘の有効化後は、定期的にスクリーンショットを撮影して戦闘の進行状況を監視し、完了を確認してから退出するなど、慎重な進行管理を行いました。

本ケースはモデルが複雑なゲームインターフェースを操作し、長期的なタスクを処理する能力を示しています。複数のステップにわたる相互作用を必要とするタスクを自動化するなど、戦略、自動化、リアルタイム評価を組み合わせた複雑なゲーミングタスクも可能かもしれません。

### エラーの分類

全体を通していくつかエラーがありました。原因は多様ですが、評価の観点に基づいて以下の3つのカテゴリーに分類できます。

#### 計画エラー

タスクを始める前の段階で発生するエラーです。ユーザーの指示を勘違いしたり、パソコンの現在の状態を誤解したりすることで、間違った作業手順を立ててしまいます。例えば、Fox Sportsでの作業では、最初から間違った手順を考えてしまい、失敗につながりました。

#### 実行エラー

作業手順は正しく理解できていても、実際の操作に失敗するエラーです。画面上のボタンやメニューの位置を正確に把握できなかったり、マウス操作が不正確だったりすることで起こります。Excelでの合計計算では、正しい場所をクリックできずに失敗しました。

#### 検証エラー

作業が正しく完了したかどうかの判断を誤るエラーです。実際にはうまくいっていないのに「完了しました」と報告してしまうケースです。履歴書の編集や PowerPointでの番号付けでは、失敗しているにもかかわらず成功したと誤って判断してしまいました。

### 将来のGUIエージェントに向けて

Claude 3.5のComputer Useのようなシステムを評価するためには、現実の使い方に近い環境が必要です。たとえば、ソフトウェアのバージョンが変わったり、画面の解像度が違ったりするような状況も考慮しなければなりません。画面解像度がモデルの動きに影響することもわかってきたので、それを評価に反映する必要があります。

さらに、モデルはタスクをやり終えたと勘違いすることがよくあるとわかりました。指示の出し方（プロンプト）を工夫すればある程度改善できますが、根本的には、モデルに「ちゃんとタスクが終わったかどうか」をチェックする仕組みを追加する必要があるかもしれません。

また、人間がパソコンを使うのと比べると、モデルはまだ細かい動きを再現できていません。たとえば、ページをスクロールする操作では、Page UpやPage Downを使うと、画面の情報が飛び飛びになり、全部をうまく把握できないという問題があります。こうしたギャップは、モデルを作るときに使ったデータが、人間の多様な操作や状況に応じた動きを十分に含んでいないからだと考えられます。

## まとめ

本記事では、GUI自動化モデル「Claude 3.5 Computer Use」の初期的なケーススタディを紹介しました。研究チームは、Webブラウジング、ワークフロー、オフィスソフトウェア、ビデオゲームなど、多様なデスクトップ環境におけるモデルの性能を網羅的に評価しました。

評価を通じて明らかになったのは、同モデルが持つ可能性と現時点での限界です。タスクの計画立案、アクション実行、自己評価フィードバックの3つの側面において、その特徴が浮き彫りになりました。

研究チームはまた、「Computer Use Out-of-the-Box」というフレームワークを公開しました。実世界のシナリオでGUI自動化モデルを容易に導入・評価できる環境です。

- 参照論文URL： [https://arxiv.org/abs/2411.10323](https://arxiv.org/abs/2411.10323)
- GitHub： [https://github.com/showlab/computer\_use\_ootb](https://github.com/showlab/computer_use_ootb)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[LLMが長々と説明するときは自信がない傾向にある　14個のモデルで検証](https://ai-data-base.com/archives/78828)

[LLMによる時系列データ分析に「ニュース情報」を混ぜるアプローチ　為替予測精度など大幅に向上](https://ai-data-base.com/archives/79028)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)