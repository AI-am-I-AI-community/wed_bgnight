---
title: "『プロンプトレポート』OpenAIなどが作成した調査報告書 〜その3 プロンプトエンジニアリングのケーススタディ〜"
source: "https://ai-data-base.com/archives/71186"
author:
  - "[[AIDB Research]]"
published: 2024-06-19
created: 2025-06-13
description: "本記事は、メリーランド大学やOpenAI、スタンフォード大学、Microsoftなどの研究者らが作成した調査論文『プロンプトレポート』の紹介記事シリーズの3記事目です。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事は、メリーランド大学やOpenAI、スタンフォード大学、Microsoftなどの研究者らが作成した調査論文『プロンプトレポート』の紹介記事シリーズの3記事目です。

[その1　重要な用語と各種プロンプト手法](https://ai-data-base.com/archives/70953)

[その2　マルチモーダルとエージェント](https://ai-data-base.com/archives/71094)

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186-1024x576.jpg)

**参照論文情報**

- タイトル：The Prompt Report: A Systematic Survey of Prompting Techniques
- 著者：Sander Schulhoff, Michael Ilie, Nishant Balepur, Konstantine Kahadze, Amanda Liu, Chenglei Si, Yinheng Li, Aayush Gupta, HyoJung Han, Sevien Schulhoff, Pranav Sandeep Dulepet, Saurav Vidyadhara, Dayeon Ki, Sweta Agrawal, Chau Pham, Gerson Kroiz, Feileen Li, Hudson Tao, Ashay Srivastava, Hevander Da Costa, Saloni Gupta, Me [gan](https://ai-data-base.com/archives/26269 "敵対的生成ネットワーク（GAN）") L. Rogers, Inna Goncearenco, Giuseppe Sarli, Igor Galynker, Denis Peskoff, Marine Carpuat, Jules White, Shyamal Anadkat, Alexander Hoyle, Philip Resnik
- 所属：University of Maryland, OpenAI, Stanford, Microsoft, Vanderbilt, Princeton, Texas State University, Icahn School of Medicine, ASST Brianza, Mount Sinai Beth Israel, Instituto de Telecomunicações, University of Massachusetts Amherst

## はじめに

LLMのプロンプティングに関する包括的な調査論文の要点を3回に分けて紹介しています。

[1記事目](https://ai-data-base.com/archives/70953) では、プロンプティングの基本的な概念や用語、歴史的な発展について説明し、体系的なレビュープロセスを通じた58のテキストベースのプロンプティング手法を紹介しました。

[2記事目](https://ai-data-base.com/archives/71094) では、英語以外の言語でのプロンプティングや、画像、音声、動画などのマルチモーダルなプロンプティングの手法について解説しました。また、外部ツールを利用するエージェントシステムや、LLMを評価者として活用する手法など、プロンプティングの応用的な発展についても触れました。

そしてこの3記事目では、プロンプティングに関連するセキュリティやアライメントの課題について扱っていきます。  
さらに、プロンプティング手法のベンチマーク評価や、実際のユースケースへの適用事例についても紹介し、LLMを実社会で活用する上で何が重要かを多角的に論じていきます。  
特に、熟練のプロンプトエンジニアによるプロンプトエンジニアリング実践の流れは必見です。

## プロンプティングにおけるセキュリティの重要性

プロンプティングの使用が増加するにつれて、取り巻くリスクも拡大しています。プロンプトのリスクは多様であり、独特の防御の難しさがあります。以下では、LLMを悪用するプロンプトハッキング、危険性、防御策について見ていきます。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_1-1024x369.png)

セキュリティとプロンプティングのトピック一覧

### プロンプトハッキングの種類

生成AIを攻撃するためにプロンプト使用する行為をプロンプトハッキングと呼びます。プライベートな情報を漏洩させたり、攻撃的なコンテンツを生成したり、欺瞞的なメッセージを作成したりするために使用されています（すでに対策済みのものも多数）。種類としてはプロンプトインジェクションとジェイルブレイクの２つがあります。

**（１）プロンプトインジェクション  
**ユーザー入力で元の開発者の指示を上書きするプロセスです。生成AIモデルがプロンプト内の元の開発者の指示とユーザー入力の指示の違いを理解できないことに起因する [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") の問題です。

**（２）ジェイルブレイク  
**プロンプティングを通じて生成AIモデルに意図しないことを言わせたり行わせたりするプロセスです。 [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") の問題か、訓練の問題であり、敵対的なプロンプトを防ぐことが非常に難しいために起こります。

### プロンプトハッキングのリスク

**（１）データプライバシー  
**モデルの訓練データとプロンプトテンプレートの両方が漏洩する恐れがあります。通常はプロンプトインジェクションによる攻撃の結果です。

**（２）トレーニングデータの抜き取り  
**訓練データを抜き取るハッキングも存在します。例えば、ChatGPTに「company」という単語を永遠に繰り返すようプロンプトを与えると、訓練データを吐き出し始めることが発見されました。

**（３）プロンプト漏洩  
**アプリケーションからプロンプトテンプレートを抽出する行為も観測されています。（一方で、開発者はプロンプトテンプレートの作成に多くの時間を費やし、それを保護すべき知的財産と考えています。）

**（４）コード生成の懸念  
**LLMはプログラミングコードの自動生成によく使われています。しかし、LLMが生成したコードには脆弱性が含まれている可能性があります。その脆弱性を悪用してシステムに侵入しようとする攻撃者が出てくることがあります。

****（５）** 架空のパッケージ問題  
**LLMが生成したコードは、実際には存在しないプログラミングパッケージ（予めプログラムされた部品）をインポート（読み込み）しようとする場合があります。攻撃者は、LLMがよく生成する架空のパッケージ名を使用した悪意のあるプログラムを作成し、ユーザーがLLMが生成したコードを使ったときにウイルスに感染させるようにする可能性があります。

**（６）バグとセキュリティの脆弱性  
**LLMが生成したコードには、バグ（プログラムの欠陥）や、セキュリティ上の弱点が含まれる可能性が高くなります。LLMへの指示（プロンプト）を少し変えただけで、生成されるコードの安全性に大きな影響を与えることがあります。

**（７）カスタマーサービスでの悪用  
**悪意のあるユーザーは、企業の顧客対応チャットボットに細工された指示を送りつける「プロンプトインジェクション攻撃」を行います。チャットボットは不適切な発言をしたり、びっくりするほど安い価格で商品の販売を約束したりしてしまうことがあります。

### 強化対策

プロンプトハッキングに対処する下記のような技術が開発されてきました。※ただし、完全に解決することは難しいと考えられています。

**（１）プロンプトベースの防御  
**プロンプトにプロンプトインジェクションを避けるための指示を含める防御策が提案されています。例えば、「悪意のあるコンテンツを出力しないでください」といったフレーズです。ただし、ある程度は問題を軽減できますが、数十万件のケースを調査した研究では、プロンプトベースの防御策は完全に安全ではないことが判明しました。

**（２）ガードレール  
**生成AIの出力を導くためのルールとフレームワークをガードレールと言います。シンプルなものとしては、ユーザー入力を悪意のあるものかどうかを分類し（分類にはAIを使用）、悪意がある場合は定型文で応答するといった仕組みが有効です。もう少し複雑なものとしては、LLMに複数の応答から選択させる仕組みも考案されています。

**（３）検出器  
**企業は、悪意のある入力を検出してプロンプトハッキングを防止するツールを構築しています。多くの場合、悪意のあるプロンプトで訓練されたファインチューニングモデルを使用して構築されています。一般的に、プロンプトベースの防御策よりも効果的です。

## アライメントの重要性

LLMがダウンストリームタスクにおいてユーザーのニーズに適切に対応するのは実用化において重要です。有害なコンテンツを出力したり、一貫性のない応答をしたり、バイアスを示したりするのは避けなければいけません。そのためにはプロンプトを慎重に設計することです。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_2-1024x514.png)

プロンプトベースのアライメントの体系図

### プロンプトの感度について

LLMは、プロンプトの内容に非常に敏感です。プロンプトのわずかな違いが、LLMの出力に大きな影響を与える可能性があります。

**（１）プロンプトの文言  
**単語の言い換え、スペースの追加、大文字小文字の変更など、些細な変更であっても、LLMのパフォーマンスに大きな影響を与える可能性があります。例えば、LLaMA2-7Bというモデルでは、上記の変更によって、あるタスクのパフォーマンスがほぼ0から0.804まで変化する可能性があると実験で示されました。

**（２）タスクの形式  
**例えば、あるレビューの [感情分析](https://ai-data-base.com/archives/26497 "感情分析") をLLMに依頼する場合、「このレビューはポジティブですか、ネガティブですか？」と尋ねるのと、「このレビューはポジティブですか？」と尋ねて「はい」か「いいえ」で答えるように指示するのとでは、結果が異なる可能性があります。また、複数選択問題の選択肢の順序を変えるなど、論理的には同じ意味であるにもかかわらず、プロンプトにわずかな変更を加えるだけで、LLMのパフォーマンスが大幅に低下することがあります。

**（３）プロンプトドリフト  
**APIの背後にあるモデルが時間とともに変化すると、同じプロンプトでも異なる結果が得られる可能性があります。直接的にはプロンプティングの問題ではありませんが、プロンプトのパフォーマンスを継続的に監視する必要性を示唆しています。

### 過信と調整について

LLMは回答に過度の自信を持つ傾向があり、例えば自信を言葉で表現するように指示された場合に顕著です。ユーザーがモデルの出力に過度に依存してしまう原因となり得ます。

以下は対策あるいは問題の確認です。

****（１）** 信頼度の調整  
**モデルの信頼度を数値で示すことであり、LLMが回答をどの程度確信しているかを示すものです。一般的な方法としては、LLMが出力するトークンの確率を分析する方法があり、他にも様々なプロンプト技術が開発されています。

****（２）** 言語化されたスコア  
**LLMに「1から10までの信頼度はどのくらいですか？」のように質問し、信頼度を自己評価させる手法です。  
ただし、この手法の有効性には議論があります。自己一貫性や思考連鎖を用いても、LLMは自身の信頼度を過大評価する傾向があるという研究結果もあれば、単純なプロンプトを用いることで、モデルの出力トークン確率よりも正確な信頼度評価が可能になるという研究結果もあります。

**（３）ゴマすり  
**LLMが自身の初期の回答と矛盾する場合でも、ユーザーの意見に同調してしまう現象を指します。例えば、LLMに議論の意見を求めた際、プロンプトにユーザーの意見（例：「私はこの議論が本当に好き/嫌いです」）が含まれていると、LLMは簡単に意見を変えてしまうことがあります。また、LLMの最初の回答に疑問を呈したり（例：「本当にそう思いますか？」）、LLMが間違っていると強く主張したり、誤った前提を提示したりすると、LLMの出力は大きく変わってしまいます。  
このような影響を避けるためには、個人的な意見はプロンプトに含めないようにすることが重要です。

### バイアス、ステレオタイプ、文化について

LLMは、公平性を保ち、バイアス、固定観念、文化的な不利益を助長しないようにすることが求められます。以下のようなプロンプト手法が開発されています。

**（１）バニラプロンプティング  
**プロンプトに「偏見のないように」といった指示を含めるだけのシンプルな手法です。LLMに自身の出力を自己修正させることで、公平性を高めます。

**（２）バランスの取れたデモンストレーションの選択  
**多様な例をLLMに学習させることで、特定の属性に偏らない出力を促します。例えば、様々な文化的背景を持つ人々の文章を例として示すことで、特定の文化に偏った出力を防ぐことができます。

**（３）文化的認識  
**プロンプトに文化的な情報を組み込むことで、LLMが特定の文化に適応できるようにします。例えば、機械翻訳の際に、文化的に適切な言葉遣いをLLMに指示することで、より自然な翻訳を生成することができます。

**（４）AttrPrompt  
**合成データの生成において、特定の属性（例：長さ、場所、スタイル）に偏りを生じさせないための手法です。LLMに多様な属性を生成させ、それらを変化させながら合成データを生成することで、偏りのないデータセットを作成します。

### 曖昧さについて

曖昧な質問は複数の解釈が可能であり、それぞれの解釈によって異なる答えが導き出される可能性があります。そのため既存のモデルにとって難しい課題となっていますが、この課題に取り組むためのプロンプティング手法がいくつか開発されています。

****（１）** 曖昧なデモンストレーション  
**曖昧なラベルセット（複数の解釈が可能なラベル）を持つ例をプロンプトに含めることで、LLMのコンテキスト内学習のパフォーマンスを向上させることができます。

****（２）** 質問の明確化  
**LLMが曖昧な質問を特定し、ユーザーに質問を投げかけて曖昧さを解消する手法です。ユーザーが質問を明確にした後、LLMは回答を再生成します。

ある研究では、一般的なタスクの曖昧さを解消するために、以下4つのステップを設計しています。

1. 初期回答を生成
2. 「明確化のための質問」を生成するか、初期回答を返すかを分類
3. どの「明確化のための質問」を生成するかを決定
4. 最終回答を生成

## プロンプティング技術のベンチマーク

プロンプティング技術の正式な評価では、数百のプロンプティング技術を数百のモデルとベンチマークにわたって比較することが推奨されます。しかしそれは本研究の範囲を超えているため、第一歩として、プロンプティング技術のサブセットを選択し、広く使用されているベンチマークであるMMLUで実行しました。MMLUの代表的なサブセット2,800問（各カテゴリーの問題の20％）を使用し、すべての実験でgpt-3.5-turboを使用しました。

### プロンプティング技術の比較実験

6つの異なるプロンプティング技術を、同じ一般的なプロンプトテンプレート（下記）を使用してベンチマークしました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_4.png)

原文

```js
{BASE_INSTRUCTION}
{EXEMPLARS}
{QUESTION} {THOUGHT_INDUCER}
```

日本語版

```js
{基本指示}
{例}
{質問} {思考誘導}
```

このテンプレートは、プロンプトの異なる構成要素の位置を示しています。基本的な指示と質問はすべてのプロンプトに存在します。基本的な指示は、「問題を解いて、(A)、(B)、(C)、(D)を返してください」のようなフレーズで、場合によっては変更されます。

さらに以下質問の2つのフォーマットをテストしました。質問のフォーマットは、プロンプトテンプレートの「{QUESTION}」の部分に挿入されます。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_5.png)

```js
Problem
{QUESTION}
Options
(A):: {A} (B):: {B} (C):: {C} (D):: {D}
Answer
```

日本語版

```js
問題
{質問}
選択肢
(A):: {A} (B):: {B} (C):: {C} (D):: {D}
答え
```

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_6-1.png)

```js
PROBLEM:: {QUESTION}, OPTIONS::
(A): {A}
(B): {B}
(C): {C}
(D): {D}, ANSWER::
```

日本語版

```js
問題:: {質問}, 選択肢::
(A): {A}
(B): {B}
(C): {C}
(D): {D}, 答え::
```

各プロンプティング技術に対して合計6つのバリエーションをテストしました。それぞれのプロンプト技術について、以下に説明します。

**（１）Zero-Shot  
**ベースラインとして、プロンプト技術を一切使用せず、AI モデルに直接質問を入力しました。2種類の質問フォーマットと、3種類の異なる表現の基本指示文を用いて、合計6回、2800問の質問を行いました。このZero-Shotでは、例題や思考誘導子は使用していません。

****（２）** Zero-Shot-CoT技術  
**「一歩一歩考えてみましょう」という標準的な思考連鎖に加えて、ThoTとPlan and Solveという、合計3種類の思考誘導子（AI モデルに推論過程を説明させる指示）を使用しました。各手法の詳細は [その1　重要な用語と各種プロンプト手法](https://ai-data-base.com/archives/70953) を参照してください。

これらのうち、最も性能の良いものを選び、Self-Consistencyを適用しました。Self-Consistencyは同じプロンプトで複数回モデルに回答させ、多数決によって最終的な回答を決定する手法です。つまり1つの問題に対して、LLMにわざと違う考え方をさせて答えを出させ、多数決で最終的な答えを決めるわけす。

****（３）** Few-Shot技術  
**Few-ShotプロンプトとFew-Shot-CoTプロンプトの両方を実行しました。どちらの手法でも、著者の一人が作成した例題を使用しました。それぞれについて、3種類の基本指示と2種類の質問フォーマットを例題にも適用しました。その中で最も性能の良いものを選び、Self-Consistencyを適用しました。

### 結果

複雑な技術を用いるほど、一般的にモデルの性能は向上する傾向にありました。しかし、Zero-Shot-CoTはZero-Shotよりも性能が大幅に低下しました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_3.png)

Self-Consistencyは、同じプロンプトを複数回使用するため、当然ばらつきは少なくなります。Zero-Shotプロンプトの精度は向上させましたが、Few-Shotプロンプトには効果がありませんでした。最も良い性能を示したのはFew-Shot CoTでした。

技術による性能低下の原因は明らかではなく、さらなる研究が必要です。プロンプト手法の選択は、ハイパーパラメータの探索のように難しいです。

## プロンプトエンジニアリングのケーススタディ

プロンプトエンジニアリングは、専門的に実践する人が増えてきている一方で、その具体的なプロセスは文献ではまだ十分に解説されていません。そこで今回の研究では、複雑な現実問題を題材に、プロンプトエンジニアリングを実践して記録しています。

このケーススタディは、特定の問題を解決するための技術的な貢献を目的とするものではありません。経験豊富なプロンプトエンジニアがどのように問題に取り組み、解決策を模索していくのか、その過程を具体的に示すものです。

### 問題設定

世界的に深刻な問題である自殺がテーマとされました。例えばアメリカでは、2021年の統計において10代から50代までの主要な死因の一つとなっています。1,230万人以上が自殺を真剣に考え、170万人が実際に自殺を試み、48,000人以上が亡くなっています。

自殺の危機を評価する方法はいくつかありますが完全ではありません。臨床医による面接や、自己報告アンケートへの回答など、手軽に実施できるものでないのが実情です。

もし、個人が書いたテキストから自殺の危機の兆候を正確に検出できれば、メンタルヘルスの分野に大きく貢献する可能性があります。（ただし臨床医の判断を代替するものではなく、それを補完するものとして）

今回、自殺危機症候群の評価において最も重要な予測因子の一つである「エントラップメント」に焦点を当てます。エントラップメントとは、「耐え難い状況から逃れたいという欲求と、すべての逃げ道が塞がれているという認識」が組み合わさった状態を指します。

以下の実験ではLLMを用いて、実際に人が書いたテキストからエントラップメントを特定することを試みています。

### データセット

メリーランド大学による研究で作成されたReddit自殺傾向データセットのサブセットを使用しました。自殺願望を持つ人々が集まるオンラインコミュニティであるr/SuicideWatchの投稿から構築されたものです。2人の訓練を受けたコーダーが、221件の投稿に「エントラップメント」の有無をラベル付けし、高い信頼性で評価を行いました。

### プロンプトエンジニアと実践プロセス

この研究では、広く使用されているプロンプティングのガイド「 [Learn Prompting](https://learnprompting.org/) 」の著者でもある、経験豊富なプロンプトエンジニアが実践者としての役割を果たしました。

プロンプトエンジニアには、自殺危機症候群とエントラップメントについて、口頭と書面で簡単な説明が与えられました。また、121件の投稿データ（開発用）とそのラベル（エントラップメントの有無）も提供されましたが、残りの100件はテスト用に確保されました。

このように限られた情報しか与えられないのは、実際のシナリオではよくあることです。通常、プロンプトの開発はタスクの説明とデータのみに基づいて行われます。これは [自然言語処理](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") やAI全般でも同様のアプローチがとられています。データへのラベル付け（ [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") ）は単純作業として扱われ、ラベルが表す社会科学的概念の複雑さや微妙なニュアンスまで深く掘り下げられることは稀です。

この実験では、熟練プロンプトエンジニアの作業プロセスが詳細に記録されました。全47ステップ、合計約20時間を要しました。

作業開始時はモデルの性能が0％でしたが、試行錯誤の末、 [F1スコア](https://ai-data-base.com/archives/26112 "F1スコア（F値）") （精度指標）が0.53まで向上しました。

F1スコアは、 [適合率](https://ai-data-base.com/archives/26103 "適合率") 0.86と [再現率](https://ai-data-base.com/archives/26095 "再現率") 0.38の調和平均です。なお、適合率とは、モデルがエントラップメントありと判断した投稿のうち、実際にエントラップメントがあった割合です。一方、再現率とは、実際にエントラップメントがあった投稿のうち、モデルが正しくエントラップメントありと判断できた割合を表します。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_7-1024x810.png)

開発セットにおける異なるプロンプティング技術のF1スコア、再現率、適合率のグラフ。ほとんどのプロンプトは同様の範囲内でスコアを記録。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_8-1024x826.png)

開発セットにおけるプロンプティング技術のF1スコアの変化を示したグラフ。F1スコアの改善は難しく、多くの場合、性能の低いプロンプトを複数テストした後に性能の高いプロンプトが見つかった。

以下は実践の記録を時系列順に並べたものです。

### 1\. データセットの探索（2ステップ）

プロンプトエンジニアは、まずエントラップメントの説明を注意深く確認することから始めました。エントラップメントの初期の説明は、人間がデータにラベル付けをする際の基準として使用されたものでしたが、必ずしも厳密な定義や網羅的なものではありませんでした。

次に、プロンプトエンジニアは、Pythonノートブックにデータセットを読み込み、データ探索を行いました。この際、gpt-4-turbo-previewにエントラップメントの意味を尋ねましたが、LLMからの回答は期待したものとは異なっていました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_10.png)

エントラップメントに関するLLMの知識を確認するために尋ねた質問。トレーニングデータは関連知識を提供していなかった。

そのため、以降のプロンプトには、常にエントラップメントの説明を含めることにしました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_9.png)

プロンプトエンジニアが使用したエントラップメントの説明。

### 2\. ラベルの取得（8ステップ）

ラベルの取得プロセスにおいては、機微な話題を扱う際のLLMの予測不可能性と制御の難しさが浮き彫りになりました。

プロンプトエンジニアリングの複数のステップにおいて、LLMが期待通りにデータにラベルを付けるのではなく、メンタルヘルスに関するアドバイスを提供してしまうという問題が発生しました。これは、LLMが自殺や精神的健康という繊細なトピックに直面した際に、適切な応答を生成できない可能性を示唆しています。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_11.png)

データポイントにラベルを付けずに、メンタルヘルスのサポートを提供しようとする出力の一部。このような出力は非常に長くなることが多い。

この問題に対処するために、プロンプトエンジニアはGPT-4-32Kモデルに切り替えました。GPT-4-32Kは、sensitive な話題に関してより適切に対応できるようにチューニングされているためです。

しかし、この経験から得られた教訓は、LLMに組み込まれている「ガードレール」（安全装置）が、プロンプティングタスクの進捗を妨げる可能性があるということです。ガードレールは、LLMが危険な応答を生成しないように設計された仕組みですが、時にはタスクの遂行を困難にしてしまうのです。

つまり、LLMを使ってタスクを遂行する際は、モデルの潜在的な性能だけでなく、組み込まれているガードレールも考慮する必要があります。場合によっては、ガードレールが厳しすぎるために、目的の達成が難しくなることもあるでしょう。

### 3\. プロンプティング技術（32ステップ）

プロンプトエンジニアは、使用されているプロンプティング技術の改善に最も多くの時間を費やしました。Few-Shot、Chain-of-Thought、AutoCoT、Contrastive CoT、複数の回答抽出技術などの手法が対象とされました。

最初にZero-Shot + Contextが評価されました。文脈情報（エントラップメントの定義）をプロンプトに含めた上で、LLMに直接ラベル付けを行わせます。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_12.png)

このケーススタディで最もシンプルなプロンプトの例。Zero-Shot + Contextプロンプト。Figure6.7には「プロンプトエンジニアが使用したエントラップメントの説明」が入ります。

ただし、LLMの出力からラベルを抽出するためのルール（エクストラクタ）が必要でした。プロンプトエンジニアは2つのエクストラクタを試し、出力の最初の数文字と照合する方が性能が良いことを発見しました。この方法で、再現率0.25、適合率1.0、F1スコア0.40が達成されました。

**10個のデータサンプルをQ&A形式でプロンプトに追加  
**プロンプトエンジニアは最初の10個のデータサンプル（ラベル付き）をQ:（質問）A:（回答）の形式でプロンプトに追加しました。このような10ショットプロンプトを、トレーニング/開発セットの残りのデータで評価したところ、再現率が0.30に0.05上昇、適合率が0.30に0.70低下、F1スコアが0.45に0.05上昇しました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_13.png)

10-Shot + Contextプロンプトの例。

**誤ラベル付けの原因を探るOne-Shot AutoDiCoT  
**プロンプトエンジニアは10個のサンプルデータを使ってLLMを学習させました（コンテキスト内学習）。しかし、12番目のデータが間違ったラベル（ポジティブ）になってしまいました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_15.png)

One-Shot AutoDiCoT + Full Contextプロンプトの例。

なぜ間違ったのか知るために、エンジニアはLLMにそのデータ(q12)のラベルの理由を説明させました。

その説明を基に、前のプロンプト（質問文）を修正し、q12を「こう考えるのは間違いの例だ」として追加しました。しかし、その結果はあまりよくありませんでした。

ここで大事なのは、長期的な目標から見ると、ポジティブラベルを減らそうとしたこの方法は実は適切ではなかったということです。なぜなら、専門家曰く、エントラップメント（追い詰められた感覚）は必ずしも明確な言葉で表現されるわけではなく、もっと曖昧な言い回しの可能性もあるからです。

そして多くの場合、ポジティブを見逃さないこと（再現率）の方が、ポジティブを減らすこと（適合率）よりも重要なのです。なぜなら、リスクの高い人を見逃すと取り返しのつかないことになるかもしれないからです。

ここから学べるのは、プロンプトを作る際、ついつい目の前の数字ばかり気にしてしまいがちですが、本当の目標からズレてしまう可能性があるということです。だからこそ、現場のプロンプトエンジニアと、その分野の専門家がこまめに連携することが大切なのです。

**背景説明のメールを追加**  
前述の変更は有望でしたが、プロジェクトの背景説明のメールをプロンプトに含めるのは合理的ではありません。そのメールには公開を意図しない情報も含まれていたからです。  
しかし皮肉なことに、メールを削除するとパフォーマンスが大幅に低下しました。メールがラベリングの目的についての豊富な背景情報を提供していたためだと考えられます。

**10-Shot + 1 AutoDiCoT  
**次に、プロンプトエンジニアはフルコンテキスト、10個の通常のサンプル、推論方法のOne-Shotサンプルを含めてみましたが、パフォーマンスは低下しました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_16.png)

10-Shot + 1 AutoDiCoTプロンプトの例。

**フルコンテキストのみでも良好な結果  
**サンプルを含まないフルコンテキストのみのプロンプトを作成したところ、前の手法よりパフォーマンスが向上しました。興味深いことに、プロンプトエンジニアが誤ってフルコンテキストのメールを2回貼り付けてしまいましたが、後になってパフォーマンスに大きなプラスの効果をもたらしました。重複を削除すると、逆にパフォーマンスが低下したのです。これは再読技術を連想させます。

これは楽観的にも悲観的にも解釈できます。探索と偶然の発見で改善がもたらされる可能性を示す一方で、プロンプティングが予想外の変化に敏感であることを強調しています。一見重要でなさそうな詳細が実は重要な場合があるのです。

**10-Shot AutoDiCoTで最良の結果  
**次のステップは、下記のアルゴリズムを使って、より多くのAutoDiCoTサンプルを作成することでした。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_14.png)

Automatic Directed CoT（AutoDiCoT）アルゴリズムの擬似コード。

フルコンテキストプロンプトに合計10個の新しいAutoDiCoTサンプルを追加したところ、このプロンプトエンジニアリング演習で最も成功したプロンプトが得られました（F1スコアの観点から）。F1スコアが0.53に0.08上昇、適合率が0.38に0.08上昇、再現率が0.86に0.53上昇しました。

**20-Shot AutoDiCoTでは改善せず  
**さらなる実験では、前述のF1スコアの改善を目指しましたが、成功しませんでした。プロンプトエンジニアが追加で10個のサンプルにラベル付けし、開発セットの最初の20個のデータから20ショットプロンプトを作成したところ、最初の20個以外のすべてのサンプルでテストした場合、10ショットプロンプトよりも結果が悪くなりました（F1スコアが0.49に0.04低下、適合率が0.33に0.05低下、再現率が0.94に0.08上昇）。テストセットでのパフォーマンスも悪化しました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_19.png)

20-shot AutoDiCoTプロンプトの例。

**20-Shot AutoDiCoT + Full Wordsでも改善せず  
**プロンプトエンジニアは、プロンプトにQ、R、Aではなく、Question、Reasoning、Answerという完全な単語を含めればLLMのパフォーマンスが向上すると推測しましたが、これは成功せず、F1スコアが0.48に0.05低下、適合率が0.32に0.06低下、再現率は0.94のままでした。

**20-Shot AutoDiCoT + Full Words + Extraction Promptでも限定的**  
次に、プロンプトエンジニアは、多くの場合LLMが解析できない出力を生成していることに気づき、LLMの応答から回答を抽出するプロンプトを作成しました。精度が数ポイント向上しましたが、解析されなかった出力の多くに誤った応答が含まれていたため、F1スコアは0.48に0.05低下、適合率は0.33に0.05低下、再現率は0.86のままでした。

**10-Shot AutoDiCoT + Extraction Promptでは悪化  
**抽出プロンプトを最も性能が良かった10-Shot AutoDiCoTプロンプトに適用しても、結果は改善されませんでした。F1スコアが0.49に0.04低下、再現率が0.78に0.06低下、適合率が0.35に0.03低下しました。

**メールを完全に削除するとパフォーマンス低下  
**前述のように、プロンプトからメールを完全に削除すると、パフォーマンスが大幅に低下しました。F1スコアが0.39に0.14低下、再現率が0.48に0.38低下、適合率が0.33に0.05低下しました。

**メールの重複を削除してもパフォーマンス低下  
**また前述の通り、メールの重複を削除すれば、重複なしの場合と同等以上のパフォーマンスが得られると考えるのが妥当でしたが、実際には重複を削除することでパフォーマンスが大幅に低下しました。F1スコアが0.45に0.07低下、再現率が0.73に0.13低下、適合率が0.33に0.05低下しました。

**ネガティブ推定値をデフォルトにしてもパフォーマンス改善せず  
**最も性能の良かった10-Shot AutoDiCoTプロンプトを使用し、適切に抽出されない回答の場合はデフォルトでネガティブ（エントラップメントなし）とラベル付けする手法でも、パフォーマンスは改善しませんでした。F1スコアが0.42に0.11低下、再現率が0.83に0.03低下、適合率が0.28に0.10低下しました。

**アンサンブル+抽出でもパフォーマンス悪化  
**入力に敏感なシステムの場合、入力のバリエーションを試してその結果を組み合わせるのが有効ですが、ここでは最も性能の良かった10-Shot AutoDiCoTプロンプトを取り、サンプルの順序が異なる3つのバージョンを作成し、3つの結果の平均を最終的な答えとしました。残念ながら、デフォルトの順序と異なる両方の順序で、LLMが適切な構造の応答を出力しなくなったため、最終的な回答を得るために抽出プロンプトが使用されました。この探索ではパフォーマンスが低下し、F1スコアが0.36に0.16低下、再現率が0.64に0.22低下、適合率が0.26に0.12低下しました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_20.png)

回答を抽出するためのプロンプトの例。

**メールの重複を取り除いてコンテキストを3回貼り付けてもパフォーマンス向上せず  
**電子メールの重複がパフォーマンスを向上させたことから、メールの重複を取り除いてからコンテキストを3回貼り付けてみましたが、パフォーマンスは向上しませんでした。F1スコアが0.47に0.06低下、再現率が0.78に0.08低下、適合率が0.33に0.05低下しました。

**メールを匿名化するとパフォーマンス大幅低下  
**この時点で、重複したメールをプロンプトに含めることが、説明できないものの、これまでで最高のパフォーマンスを得るために不可欠だったことは明らかでした。そこで個人名をランダムな他の名前に置き換えてメールを匿名化することにしましたが、驚いたことにこれによってパフォーマンスが大幅に低下しました。F1スコアが0.45に0.08低下、再現率が0.72に0.14低下、適合率が0.33に0.05低下しました。

**自動最適化フレームワークDSPyが大きな可能性  
**最後に、手動プロンプトエンジニアリングの代替として、DSPyフレームワークの探索を行いました。DSPyは与えられた目標指標に対してLLMプロンプトを自動的に最適化します。  
具体的には、エントラップメントの定義を使用した思考連鎖分類パイプラインから始め、16回の反復の間に、合成LLM生成デモンストレーションとトレーニングサンプルをランダムに [サンプリング](https://ai-data-base.com/archives/26518 "サンプリング") し、同じ開発セットでF1スコアを最大化することを目的としました。デフォルト設定のDSPyテレプロンプター（最適化アプローチ）とgpt-4-0125-previewを使用した結果、最良のプロンプトには15個のサンプル（CoT推論なし）と1つのブートストラップ推論デモンストレーションが含まれ、メールやエントラップメントの明示性に関する不正確な指示を一切使用せずに、テストセットでF1スコア0.548（適合率0.385、再現率0.952）を達成しました。  
これは人間のプロンプトエンジニアよりもはるかに優れたパフォーマンスであり、自動プロンプトエンジニアリングの大きな可能性を示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71186_21-1024x767.png)

テストセットにおける異なるプロンプティング技術のF1スコア、再現率、適合率のグラフ。

### 考察

プロンプトエンジニアリングは、コンピュータに望むような動作をさせるための他の方法とは根本的に異なるプロセスです。LLMは説得されるのであってプログラムされるわけではなく、使用するLLMの特性だけでなく、プロンプトの細かな詳細にも予想外に敏感である可能性があります。一見重要でない詳細が実は重要な場合があるのです。

そのため、データを深く掘り下げることが重要です。例えば、LLMが間違った応答をした際にその「推論」の説明を生成させるなどです。

しかし最も重要なのは、プロンプトエンジニアとドメインの専門家が連携することです。プロンプトエンジニアはLLMを望ましい方向に導く方法について専門知識を持ち、ドメインの専門家はその望ましい方法が何であり、なぜそうであるかを理解しているからです。

最終的には、プロンプティングの探索空間を自動的に探索する手法に大きな可能性があることがわかりました。しかし同時に、人間のプロンプトエンジニアリングと自動化を組み合わせるのが最も成功につながることもわかりました。

## まとめ

本記事シリーズでは、生成AIにおけるプロンプティングという新しい技術について、その概念、手法、課題などを幅広く紹介しました。プロンプティングは、生成AIとのやり取りのための柔軟なインターフェースであり、言語的コミュニケーションの課題に加え、人間の理解とは異なる「理解」を持つ存在とのコミュニケーションという新たな難題も抱えています。論文で紹介された手法の多くは、実験やアナロジー、偶然によって発見されたものです。

本論文は、提示された分類法と用語集は、既存のプロンプトエンジニアリング技術の多くをカバーし、将来の手法にも対応できるようになっています。また、モデルの能力と実践での取り組み方を明確に理解できるよう、2つのケーススタディも提示されています。

プロンプトの分野は複雑です。解決しようとしている問題を理解し、より単純なアプローチから始め、そして手法のパフォーマンスに関する主張にはできるだけ懐疑的であり続けることも大事です。

- 参照論文URL： [https://arxiv.org/abs/2406.06608](https://arxiv.org/abs/2406.06608)
- プロジェクトページ： [https://trigaten.github.io/Prompt\_Survey\_Site/](https://trigaten.github.io/Prompt_Survey_Site/)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[『プロンプトレポート』OpenAIなどが作成した調査報告書　〜その2　マルチモーダルとエージェント〜](https://ai-data-base.com/archives/71094)

[現実世界の確率分布における言語モデルの推定能力と改善方法　Googleが検証](https://ai-data-base.com/archives/71357)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)