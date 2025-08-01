---
title: "LLMでASDを含む人間同士のコミュニケーションを支援するアプリケーション開発事例"
source: "https://ai-data-base.com/archives/73534"
author:
  - "[[AIDB Research]]"
published: 2024-07-30
created: 2025-06-13
description: "本記事では、自閉症スペクトラム障害（ASD）を持つ人々のテキストコミュニケーションを支援するアプリケーションを開発した研究を紹介します。LLMを活用し、メッセージの解釈や作成を支援するアプリケーションです。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、自閉症スペクトラム障害（ASD）を持つ人々のテキストコミュニケーションを支援するアプリケーションを開発した研究を紹介します。LLMを活用し、メッセージの解釈や作成を支援するアプリケーションです。実験では自閉症の方々が実際に評価に参加し、実用的なフィードバックが収集されました。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73534-1024x576.jpg)

**参照論文情報**

- タイトル：TwIPS: A Large Language Model Powered Texting Application to Simplify Conversational Nuances for Autistic Users
- 著者：Rukhshan Haroon, Fahad Dogar
- 所属：Tufts University

**本記事の関連研究**

- [ChatGPTを心理療法にもとづいて実行し、高い共感力と思いやりある会話をさせる手法『Chain of Empathy』と実行プロンプト](https://ai-data-base.com/archives/58847)
- [XなどのSNSポストから精神状態を高精度に解析するLLM『MentalLLaMA（メンタルラマ）』](https://aiboom.net/archives/56246)
- [GPT-4をセラピストとして実行し、「認知の歪み」を診断させるためのフレームワーク『Diagnosis of Thought (DoT)』と実行プロンプト](https://aiboom.net/archives/56696)
- [LLMの個別の性格（人格）特性を、プロンプトで「測定」「形成」する手法](https://aiboom.net/archives/55413)

## 背景

ASDとは、コミュニケーションに課題を持ち反復的行動などを特徴とする最も一般的な神経発達障害の1つです。多くのASDの方々にとって、対面でのコミュニケーションは困難を伴うことが少なくありません。非言語的な情報の処理や、声の抑揚の理解などに課題を感じる方が多いためです。そのため、ASDの方々の間では、Eメールやテキストメッセージなどの文字ベースのコミュニケーションが好まれる傾向が見られます。

しかしながら、テキストベースのコミュニケーションにおいても、ASDの方々は独特の課題に直面することが明らかになっています。感情的なトーンや言葉の裏にあるニュアンスの解釈に困難を覚える方が多く、例えば絵文字もさらなる混乱を招くケースもあるとのことです。

こうした背景から、ASDの方々のコミュニケーションを支援するテクノロジーの開発が進められてきました。そんな中、LLMの応用にも期待が寄せられています。LLMは、人間に匹敵するレベルで文章のニュアンスを解釈・生成する能力を示しており、これまでにない形での支援が可能になると期待されています。

今回研究者らは実際にコミュニケーション支援用のLLMアプリケーション「TwIPS」を開発し、実証実験を行いました。

## LLMアプリケーション「TwIPS」

TwIPSは、ASDの方々が「オンライン上のコミュニケーションで直面する課題」に基づいて設計されました。

以下が課題の例です。

- 他者の意図や感情を誤解してしまう
- ニュアンスのある言葉遣いを理解することが難しい
- 自分の意図を正確に伝えることが難しい
- 他者のコミュニケーションスタイルに合わせるために無理をしてしまう

なお、絵文字の過剰な使用が、事態をさらに複雑にしている点も指摘されています。

### ユーザーインターフェース

TwIPSのユーザーインターフェースは、一般的なチャットアプリケーションに類似する形でデザインされました。以下の要素が含まれています。

- 受信メッセージと送信メッセージを分けた表示
- テキスト入力ボックス
- 受信者の名前表示
- メッセージ送信ボタン
- 絵文字アクセスボタン

送信者のメッセージは画面右側の濃いグレーの吹き出しに、受信メッセージは左側の薄いグレーの吹き出しに表示されるよう設計されました。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73534_1-1024x536.png)

### 主な機能

TwIPSには主に3つの機能が組み込まれています。Interpret、Preview、Suggestです。

### 1\. Interpretー「解釈」機能

まずは受信メッセージの理解を支援するための機能です。主に以下の2つの役割を果たします。

1. メッセージ全体のトーンと意味の説明
2. あいまいな表現（皮肉、比喩、絵文字など）の個別識別と説明

あいまいな表現を含むメッセージには、吹き出しの左上にグレーの円形マークが付けられます。（下図左）

このマークにマウスを合わせると、あいまいな表現が下線付きで表示されます。下線部をクリックすると、その表現の意味が説明されます。（下図右）

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73534_2-1-1024x319.png)

また、吹き出しの他の部分をクリックすると、メッセージ全体のトーンと意味が表示されます。（下図左→右）

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73534_3-1-1024x322.png)

### 2\. Previewー「プレビュー」機能

次に、メッセージ作成を支援するための機能も設計されました。主に以下の2つの役割を果たします。

1. 送信前に受信者の予想される感情的反応を表示
2. メッセージが失礼に当たる可能性がある場合、警告を表示

絵文字ボタンの隣にある「Preview」ボタンで機能のON/OFFを切り替えることができます。ONにすると、メッセージ入力欄の下に新しいテキストボックスが表示され、ここにプレビュー内容が表示されます。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73534_4-1024x141.png)

### 3\. Suggestー「提案」機能

また、Previewと連動して動作するのがSuggestです。メッセージが失礼だと判断された場合、元のメッセージの意図を保ちつつ、より柔らかい表現の代替メッセージを生成します。提案された代替メッセージはPreviewのフィードバックに追加され、「コピーボタン」をクリックすることで、提案内容をメッセージ入力欄にコピーすることができます。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73534_5-1024x142.png)

### プロンプト戦略

TwIPSの各機能を実現するためには、適切なプロンプト（モデルへの指示）の設計が不可欠でした。開発過程では、信頼性の高い正確な応答を得るために、様々なプロンプトが試行錯誤されました。プロンプトの設計では以下のような工夫が施されました。

- GPT-4のコードAPIを使用
- Few-shot learning（少数の例示によるコンテキスト内学習）の適用
- 会話の全履歴をプロンプトに含める
- 機能ごとの細かな調整（例：Interpretでは絵文字や比喩表現のチェックを明示的に指示）

## 実験

### 参加者の特徴（条件）

1. 18歳以上であること
2. 英語の読み書きが流暢であること
3. 基本的なコンピュータ操作ができること
4. 自閉症の正式な診断を受けているか、自身を自閉症だと認識していること

最終的に8名が研究に参加し、実験を完了しました。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73534_6-1024x307.png)

参加者の情報（診断の有無、自己認識、年齢、性別、テキスティング使用頻度）

### 実験の概要

実験は2つのフェーズで構成されました。

### フェーズ1: 脚本化されたシナリオ

参加者は架空のキャラクター「ベン」との1対1の会話シミュレーションに参加しました。会話の内容は、共通の友人「ジャック」の誕生日サプライズを計画するというものでした。

なお、同じスクリプトが全参加者に使用されました。

参加者のメッセージには失礼なものとそうでないものが混在していました（この情報は参加者には伝えられませんでした）。参加者はモデルの応答をそのまま使用するか、修正するか、新しい応答を書くか、Suggestが提案する代替案を選ぶかを決定できました。

また、参加者には決定の理由や、モデルの応答、Preview、Suggestの提案に対する印象を詳しく説明することが求められました。

![](https://ai-data-base.com/wp-content/uploads/2024/07/AIDB_73534_7-1024x497.png)

フェーズ1で参加者に提供された2つのモニター画面。左側にTwIPSプロトタイプ、右側にモデルレスポンスが表示されている

### フェーズ2: 高度なシミュレーション

参加者は再びベンとの会話を開始し、マサチューセッツ州グロスターへの旅行計画を立てるというタスクに取り組みました。

参加者には自身の独自の文体でメッセージを作成することが奨励されました。

ベンの応答はGPT-4を使用してリアルタイムで生成されました。ベンの性格は、皮肉や比喩表現、絵文字、ジョークなどのあいまいな表現を含めるよう設定されました。

参加者はPreviewボタンを手動で切り替えることができ、全ての機能を自由に試すことが奨励されました。

### データ収集と分析

ユーザースタディの完了後、参加者は詳細な評価プロセスに参加しました。まず、半構造化インタビューが実施され、TwIPSの有用性に関する参加者の認識や改善のための提案、さらに従来のテキストアプリケーションの使用経験について深く掘り下げられました。続いて、19の質問からなる7段階リッカート尺度のアンケートが行われました。アンケートの質問内容は、TwIPSの各機能およびプロトタイプ全体に対する認識を調べるためのものです。

データ分析においては、Braun and Clarkeのテーマティック・コーディング・アプローチが採用されました。このアプローチでは、演繹的手法を用いて事前に開発されたコードセットが活用されました。研究チームのメンバーは、収集されたデータを丁寧に転記し、スクリーン録画と照らし合わせながら文脈化を行いました。その後、NVivoソフトウェアを使用してデータのコード化が実施され、重要なテーマが抽出されました。最後に、分析の信頼性を高めるため、2人目のチームメンバーがテーマと関連データの検証を行いました。この綿密な分析プロセスにより、TwIPSの効果と改善点に関する深い洞察が得られました。

## 実験結果

本研究の実験結果は、まず参加者たちの傾向の分析から始まります。この部分は、多くのLLM関連の結果のまとめ方とは大きく異なる点です。

### コミュニケーションスタイル、習慣、好み

まず、多くの参加者が「会話の重み」を意識的に維持しようとする傾向が見られました。彼らは単に質問に答えるだけでなく、自ら新しい話題を提供したり、会話の流れを変えたりする努力をしていました。例えば、ある参加者は「はい、知っています！」と答えるだけでなく、「何かしましょうか？」と付け加えることで、会話を続ける工夫をしていました。

次に、明確さと直接さを重視する傾向が強く見られました。参加者たちは誤解を避けるため、できるだけ明確で直接的な表現を使うよう心がけていました。

最後に、テキストコミュニケーションにおいても「マスキング」と呼ばれる行動が観察されました。マスキングとは、自分の自然な行動を抑え、社会的な期待に合わせて振る舞うことを指します。見知らぬ人とのやり取りの初期段階では、多くの参加者がマスキングの必要性を感じていました。

### 句読点とコミュニケーション補助

ASDの方々は、テキストメッセージでの感情や意図の伝達に独自の工夫を凝らしていることが分かりました。注目されたのは、句読点の使い方です。参加者たちは、句読点が単なる文法的な役割を超えて、メッセージのトーンや個性を表現する重要な要素だと認識していました。例えば、細心の注意を払って完璧に句読点を使用することで、真剣さや強い感情を表現できると考えていたのです。

さらに興味深いのは、一部の参加者が「トーン指示子」と呼ばれる特殊な表現を使用していたことです。「/sarcastic」（皮肉な）や「/excited」（興奮した）といった指示子をメッセージに添えることで、自分の意図したトーンを明確に伝えようとしていました。これは、テキストだけでは伝わりにくい微妙なニュアンスを補完する創造的な方法と言えるでしょう。

一方で、参加者たちは他人のメッセージのトーンや真意を理解することに困難を感じていることも明らかになりました。そこで彼らは様々な対処法を編み出していました。信頼できる友人にアドバイスを求めたり、メッセージを声に出して読むことで感情的な要素を捉えようとしたり、あるいは直接送信者に確認するなど、状況に応じて柔軟に対応していました。

### TwIPSプロトタイプへのフィードバック

#### Interpret機能への反応

「解釈」機能は、グループチャットやデートアプリなど相手の様子が確認しづらいシーンで特に有用だと評価されました。また、絵文字の説明機能も高く評価されましたが、一部の参加者は個別の言語要素の説明が冗長だと感じました。

#### Preview機能への反応

「プレビュー」機能は、ライティングのテクニックにおいて役立つと評価されました。多くの参加者が自分のメッセージの改善点を特定し、どのように改善すべきかの指針を得られたと報告しました。

自動的にPreviewが作動するか、手動で切り替えるかについては意見が分かれました。自動作動は過度の思考を防ぐ一方で、常に監視されているような不安を感じさせる可能性も指摘されました。

#### Suggest機能への反応

代替メッセージを示す「提案」機能は、より柔らかく思慮深い言葉を与えるものとして高く評価されました。しかし、時にはオリジナルメッセージの感情的な強さが必要以上に弱められてしまうという指摘もありました。

多くの参加者が、提案されたメッセージは人間らしい文体ではなく、自分の文体とも一致していないと感じました。そのため、提案された代替案をそのまま使用するのではなく、一部のフレーズを自分のメッセージに組み込むなどの工夫が見られました。

### 改善のための提案

参加者から、以下のような改善提案が出されました。

1. Interpret機能において、信頼性を示す視覚的な指標の導入
2. Previewでメッセージのトーンや意味のプレビュー機能の追加
3. 年齢層に応じたPreviewフィードバックの調整
4. Suggest機能のパーソナライゼーション強化

TwIPSがまだ伸び代を持つことを示すと同時に、パーソナライズすることの意義を示す結果でもあります。

## ASDの方々を支援するLLMアプリの課題

研究結果は、ASDを持つ人々のコミュニケーション支援に大きな可能性を示す一方で、いくつかの重要な課題も浮き彫りにしました。

まず、パーソナライゼーションとプライバシーのバランスが重要な課題として挙げられました。ユーザーのニーズに合わせたカスタマイズが求められていますが、実際には個人情報の収集が難しい点となります。完全な代替メッセージの提供ではなく、ガイダンスや助言を提供するアプローチや、ユーザーフィードバックを繰り返し取得して提案を改善していく方法が解決策になるかもしれません。

次に、AIシステムへの信頼構築も課題となっています。ユーザーがシステムに過度に依存せず、限界を理解できるよう、AIの確信度を視覚的に表示したり、断定的な表現を避けるなどの工夫が必要です。

## まとめ

本記事では、ASDの方々のテキストコミュニケーションを支援するLLM活用アプリケーション「TwIPS」の研究を紹介しました。実際にASDの参加者を対象に実験室評価が行われ、メッセージの解釈や改善を支援する機能の有効性が示唆されました。

人間水準の言語理解能力を持つシステムを応用するにあたって、このように人間同士のコミュニケーションを支援するツールとするのは大きな可能性のある事例と言えそうです。

- 参照論文URL： [https://arxiv.org/abs/2407.17760](https://arxiv.org/abs/2407.17760)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[RAGとLong-Contextの比較、そしてハイブリッドで活用する新しい方法](https://ai-data-base.com/archives/73468)

[LLMに専門的なドメイン知識を学ばせるのに有効な「読解タスクテキストに変換する」テクニック](https://ai-data-base.com/archives/73575)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)