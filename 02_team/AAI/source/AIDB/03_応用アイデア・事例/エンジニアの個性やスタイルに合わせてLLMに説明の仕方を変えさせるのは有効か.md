---
title: "エンジニアの個性やスタイルに合わせてLLMに説明の仕方を変えさせるのは有効か"
source: "https://ai-data-base.com/archives/86965"
author:
  - "[[AIDB Research]]"
published: 2025-03-20
created: 2025-06-13
description: "本記事では、ソフトウェアエンジニアのLLMの活用方法に関する研究を紹介します。エンジニアがコードを理解する方法は人それぞれ異なりますが、LLMはそれを考慮した説明をできるのでしょうか。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、ソフトウェアエンジニアのLLMの活用方法に関する研究を紹介します。

エンジニアがコードを理解する方法は人それぞれ異なりますが、LLMはそれを考慮した説明をできるのでしょうか。今回紹介する研究ではLLMが個人のスタイルに合わせてサポートできるかを調査しています。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965-1024x576.png)

参照論文情報は記事の下部に記載されています。

**本記事の関連研究**

- [100万ドル分のソフトウェアエンジニアリング業務に挑む](https://ai-data-base.com/archives/84747)
- [「自己修正機能を備えたプログラム合成」を実現するためのLLMエージェンティックワークフロー](https://ai-data-base.com/archives/83400)

## はじめに

ソフトウェアエンジニアは日々、多くのプログラムコードを扱いますが、その中には馴染みのないコードや言語もあります。今では、そんなとき手を伸ばす先にあるのがLLMです。

しかし、LLMを普通に使ってもエンジニア一人ひとりのスタイルの違いを考慮してはくれません。

ソフトウェアエンジニアは多様な背景を持ち、問題に対するアプローチも異なります。物事を体系的に学びたいエンジニアもいれば、試行錯誤を通じて直感的に学ぶエンジニアもいます。また、自分の技術的スキルに自信があるエンジニアと、自信があまりないエンジニアでは、コードを理解する際に求める説明も異なるでしょう。

実際、異なるタイプのユーザーがAIの支援を受ける際には、「万人向け」の説明では不十分であることがこれまでの研究で示されています。

そこで今回研究チームは、個々のエンジニアの問題解決スタイルに合わせて、LLMが提供するコード説明を調整する方法を考えました。異なるエンジニアの問題解決スタイルに対応したコード説明を生成するようLLMを調整し、そしてその効果を調査することに取り組みました。

以下で詳しく紹介します。LLMによるコードの説明がしっくりこないと感じたことがある方や、社内の複数名でLLMをコーディングに使っている方向けの内容です。

## 背景

本研究は、「多様なソフトウェアエンジニアが、LLMによるコード説明を受け取る際に、どのような支援が公平で包括的であるか」を調査しています。

研究の内容を確認する前に、まず「人は問題を解決するとき、どのような違いを持っているのか」「AIと人が関わるとき、公平性や包括性とは何を意味するのか」「LLMがユーザーごとの違いに対応するとはどういうことか」といった基本的な背景を見ていきましょう。

### 「問題解決の個人差」に注目した設計

ソフトウェアエンジニアといっても、みなが同じようにコードを理解したり、問題を解決したりするわけではありません。例えば、新しいコードに触れるとき、じっくりマニュアルを読んで理解を深める人もいれば、実際にコードを動かしながら直感的に学ぶ人もいます。

このような個人差を整理し、デザインに生かす方法として「GenderMag（ジェンダーマグ）」という手法があります。GenderMagは、特に性別と関連が深い5つの「問題解決スタイル」を使って、製品やサービスが偏りなく、多様な人に使いやすいかどうかを評価します。その5つとは、学び方（学習スタイル）、自信（自己効力感）、リスクを好むかどうか（リスク態度）、情報収集の仕方（情報処理スタイル）、技術を使う理由（技術への動機付け）です。

本研究はそのGenderMagに着目しています。その理由は、この手法は「性別」という直接的な属性だけでなく、「個人が問題を解決するときの考え方や行動」に注目することに応用できるためです。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_1.png)

GenderMagが定義する5つの問題解決スタイルと、その内容を整理した表

### AIと人のやりとりにおける「包括性・公平性」

AIが私たちの生活に広がる中で、重要な課題になっているのが、「公平性」と「包括性」です。これまでは「AIが出す結果（判断や予測）が公平かどうか」が主に議論されてきましたが、それだけでは十分ではありません。AIを利用する「ユーザー側の体験」にも公平さが必要です。つまり、誰かがAIの出力を理解できず取り残されるような状況がないようにすることが重要なのです。

最近の研究では、AIと関わるユーザーが持つ個人的な特性（たとえば自信の度合いやリスクへの感覚など）が、AIの使用感や満足度に大きく影響することが示されています。本研究もまさにこの点に注目しており、GenderMagの問題解決スタイルという視点から、AIの利用体験の包括性や公平性を評価しています。

### ユーザーの特性に応じてLLMの応答を調整する

最近のLLMは特に、多様なユーザーに対して適切な応答を生成するために調整されるようになりました。例えば、ユーザーの年齢や教育レベルに応じて説明の表現やレベルを変える研究もあります。

しかし、その多くは「年齢」や「教育水準」といった人口統計学的な属性に注目しています。それに対し、本研究では、人間の「問題解決スタイル」という、より認知的で個人的な特性に注目しています。問題解決スタイルをLLMの応答調整に用いることで、より細やかなユーザー対応が実現できる可能性があるからです。

### LLMが人にどのように受け入れられるのか

AIがどれほど高度な応答を生成できても、最終的には「それを人がどう受け止めるか」が重要です。そこで人々がLLMをどのように利用し、なぜLLMに質問するのかといった「動機付け」や「利用体験」の調査が進んでいます。

例えば、ある研究では、ユーザーの経験レベル（初心者か専門家か）によってLLMの説明の受け止め方が異なることが分かりました。また、別の研究ではユーザーの学習スタイルや情報処理スタイルが、LLMの回答に対する満足度に大きな影響を与えることも示されています。

本研究では、このような先行研究の成果を踏まえつつ、未だ明らかになっていない部分を直接的に調査しています。

## 研究の進め方

研究者らが検証したかったことは、「エンジニアがコードを理解するとき、LLMがエンジニア一人ひとりの問題解決スタイルに合わせて説明を調整すると、理解しやすさや公平さにどのような影響があるのか」を検証しています。この目的を達成するため、具体的に次の3つの問いを設定しました。

### 研究で明らかにしたいこと

まず、この研究が取り組んだ1つ目の問いは、

「エンジニアの問題解決スタイルをまったく考慮せずにLLMがコードの説明を提供した場合、それは多様なエンジニアに対して公平なものであるのか」

というものです。エンジニアと一口に言っても、問題の解き方や理解の仕方には個人差があります。この違いを考慮しない説明が、エンジニアによっては不利になってしまうことがあるのではないかという疑問を持ちました。

次に、2つ目の問いは、

「エンジニア個人の問題解決スタイルに合わせてLLMが説明を調整した場合、それぞれのエンジニアにとっての理解のしやすさ（包括性）は改善されるのか、また多様なエンジニア間での公平さは高まるのか」

ということです。つまり、各エンジニアの個性や考え方をLLMが理解し、それに合った説明を提供すれば、より多くの人が理解しやすく、公平に恩恵を受けられる可能性があります。この点についても検証しました。

さらに、3つ目の問いとして、

「LLMが、エンジニア自身とは逆の問題解決スタイルに合わせて説明を調整してしまった場合、エンジニアにとって理解は難しくなり（包括性が下がり）、結果として不公平になってしまうのではないか」

という懸念を持ちました。適切でない調整が逆にエンジニアの理解を妨げる可能性があるのかどうか、これを明らかにすることも重要だと考えました。

こうした問いに答えるために、実際にエンジニアを対象にした実験を行いました。

### 実験に参加したエンジニア

実験には、合計53名のソフトウェアエンジニアが参加しました。彼らは大手の国際的なテクノロジー企業に勤めているエンジニアであり（本研究の著者らがIBMに所属しているため、実験の参加者たちもIBMなのではないかと推測される）、共通する特徴として、「COBOL」という古いプログラミング言語については経験がありませんでした。

参加者の背景はさまざまで、例えば、年齢は25歳〜34歳の範囲にいる人が半数を占めていました。また、参加者のうち57.4％は男性、40.4％が女性、2.1％がノン [バイナリ](https://ai-data-base.com/archives/26314 "バイナリ") ー（男女どちらの性別にも属さない）と自己申告しています。職業経験の幅も広く、経験年数が5年以下の若手エンジニアから、10年以上の経験を持つベテランまで幅広く参加しました。

このように多様な背景を持つエンジニアを参加者として選んだ理由は、今回の研究テーマである「多様な問題解決スタイル」に対応できるかどうかを検証するためには、実際に多様なバックグラウンドを持つ人々に参加してもらう必要があったためです。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_2.png)

実験に参加したエンジニアの年齢・性別・開発経験の内訳を示した表

### 実験の準備

実験に使うプログラムとして、「COBOL（コボル）」という昔のプログラミング言語を採用しました。COBOLを選んだ理由は、参加したエンジニアが誰もこの言語を使った経験がなく、事前知識の差が実験に影響しないようにするためです。実験では、「フィボナッチ数列を表示するプログラム」、「無限ループが発生するプログラム」、「じゃんけんゲームのプログラム」という、シンプルかつ意図が異なる3種類を選びました。

さらに、コードをそのまま使うのではなく、変数名や関数名を抽象的な名前（例えば、F1、F2など）に変えて、参加者がコードを見ただけでは直感的に意味がわからないように工夫しました。エンジニアがLLMによる説明を頼りにするように促すためです。

次に、オープンソースのLLM「llama-3-70b-instruct」を使って説明を生成しました。通常の説明に加えて、エンジニアの問題解決スタイルに合わせて特別に調整された説明も作りました。例えば、「丁寧に手順を追う人」と「自由に触りながら理解する人」のような異なる問題解決スタイルをLLMに教え、それぞれのスタイルに適した説明を作成させました。このように調整したLLMと、調整していない通常のLLMの説明を準備しました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_3-1024x706.png)

実験で使用した3種類のCOBOLプログラムのコード例をまとめた表

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_4.png)

LLMに対して「リスクを積極的に取るタイプ（Tim）」を想定して与えた指示（プロンプト）の一例を示した図

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_6-1024x700.png)

実験でエンジニアが実際に見た、情報処理スタイル（網羅型/選択型）に対応して生成されたLLMの説明例

### 実験の実施

実験では、参加したエンジニアに実際に3種類のLLMの説明を見てもらいました。

1. 参加者自身の問題解決スタイルに合わせた説明
2. 自分とは逆のスタイルに合わせた説明
3. 問題解決スタイルを全く考慮しない説明

の3種類です。

まず、実験前にエンジニアにアンケートを実施し、それぞれが持つ問題解決スタイル（例えば慎重に情報を集めるタイプか、即座に行動するタイプか）を事前に把握しました。その上で各エンジニアに、先ほどの3種類の説明をランダムな順序で提示しました。

実験を始める前に、エンジニアが「自分が感じたことを口に出して話す」ことに慣れるため、ウォーミングアップとして簡単な練習を行いました。その後、本番では、各説明について「理解しやすさ」や「使いやすさ」、あるいは「説明に不足していると感じた点」を口頭で自由に語ってもらいました。

また、各説明を見終わるごとに、「説明を見て安心できたか」「信頼感が持てたか」「理解するのにどのくらいの負担があったか」「全体として説明が役に立ったか」など、複数の項目について点数をつけて評価してもらいました。これによって定性的なコメントと定量的な評価の両方を集め、後で比較できるようにしました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_7-1024x462.png)

実験でエンジニアに尋ねた質問項目を、評価対象ごとに整理した表

### 収集したデータの分析方法

集まったデータは、エンジニアがつけた評価点を用いて分析を行いました。この分析では、大きく分けて二つの観点から調べました。

一つは、LLMの説明がエンジニアにとって「公平であるかどうか」です。

たとえば、丁寧に手順を追うタイプの人と直感的に行動するタイプの人の間で評価点が極端に異なった場合、これは公平でないと考えられます。具体的には、二つのタイプの平均評価点が10%以上異なった場合を、明確な不公平とみなしました。

もう一つの観点は、各エンジニアにとって説明が「分かりやすく、有益だったかどうか（包括性）」を評価しました。

これは、エンジニアが「自分の問題解決スタイルに調整された説明」と「全く調整されていない説明」を比べたときに、調整された説明の評価点がどれくらい改善したか（あるいは低下したか）を確認することで判断しました。ここでも、評価の差が10%以上あった場合を「明確な変化」として捉えました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_5.png)

エンジニアの問題解決スタイルを判定するための分類基準を示した表

## 実験結果

### エンジニアの個性を考慮しない場合の結果

まず、この研究では、LLMがエンジニア個人の問題解決スタイルを全く考慮しないで提供したコード説明が、本当に多様なエンジニアにとって公平であったのかを検証しました。言い換えると、通常のLLMが生成する説明が、エンジニア一人ひとりの違いにかかわらず、平等に役立つものであるのかを確認しました。

分析の結果、LLMがエンジニアの個人差を考慮せずに提供した説明には、明確な問題が存在することが分かりました。エンジニアの問題解決スタイルごとに説明への評価が大きく異なり、「どのような説明が好ましいか」は、個人の特性により大きく左右されました。

たとえば、「体系的に物事を学ぶエンジニア」や「自己効力感が比較的低いエンジニア」、「目的が明確で、技術を純粋に楽しむよりも仕事を効率よくこなすために使うタイプのエンジニア」などは、LLMが特に調整せずに生成した説明に対して、評価が低くなりました。こうしたエンジニアは、説明が「抽象的すぎる」「十分な情報がない」「安心して読み進められない」と感じる傾向がありました。

一方で、「リスクを積極的に取るタイプのエンジニア」は、通常のLLMによる説明で特に不利になることはありませんでしたが、逆にリスクを避けたいと考えるエンジニアにとっては、説明が十分慎重でなかったり、安全性に関する配慮が欠けているように感じられたりする問題がありました。また、「情報を網羅的に収集して理解したいタイプ」と「最低限の情報で直感的に理解したいタイプ」のエンジニアの双方において、通常のLLMによる説明は、それぞれ異なる理由で評価が分かれ、不公平が生じました。

こうした結果は、「LLMがエンジニアの個性を全く考慮しない場合、結果的に特定のタイプのエンジニアが不利益を被ることになる」ことを示しています。つまり、多様なエンジニアが関わる環境では、個人の問題解決スタイルに応じてLLMの出力を調整しなければ、ある種のエンジニアにとって「使いづらい」「分かりにくい」といった不公平な状況が生じるリスクがあることが確認されました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_8.png)

LLMがエンジニアの個性を考慮しない場合、問題解決スタイルごとにどれほど評価の不公平が生じたかを示した図

### LLMがエンジニアのスタイルに合わせて説明した場合の結果

次に、LLMが各エンジニアの問題解決スタイルを理解し、それに応じて説明を調整した場合、それがエンジニアにとって理解しやすく（包括的で）、公平になるのかを調べました。つまり、エンジニア自身の問題解決スタイルに適合した説明が、それぞれのエンジニアの役に立ったのかどうか、そして異なるタイプのエンジニア間で評価の公平性が改善したのかどうかを検証しました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_9.png)

エンジニア個人の問題解決スタイルに合わせて調整したLLMの説明が、包括性や公平性をどのように変化させたかを整理した表

分析の結果、LLMがエンジニアのスタイルに合わせて説明を調整すると特徴的なパターンが出てくることが分かりました。

まず、最も望ましいパターンとして、エンジニアの問題解決スタイルに合わせた説明が、両方のタイプ（例えば、体系的に学ぶ人と試行錯誤で学ぶ人）のエンジニアにとって、同時に包括性を高めるケースがありました。この場合、エンジニアはそれぞれのスタイルに適した情報量や説明方法で、安心して説明を理解することができました。その結果、両グループ間の公平性も同時に向上しました。例えば手順を踏んで学ぶタイプと直感的に学ぶタイプに対する説明でこのパターンが見られました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_10-1024x275.png)

「手順を重視するタイプ」と「試行錯誤で学ぶタイプ」のエンジニアそれぞれに合わせてLLMを調整した際、説明の分かりやすさ（包括性）がどの程度改善したかを示した図

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_11-1024x215.png)

調整前のLLMと、「手順を重視するタイプ」向けに調整したLLMによる説明文の比較

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_12-1024x299.png)

学習スタイルが異なる2つのグループ（手順重視型・試行錯誤型）間で、調整前後のLLM説明にどれほど評価の不公平があったかを比較した図

次に、ある一方のタイプのエンジニアにとってだけ包括性が改善するパターンもありました。「自己効力感（自分の能力に自信があるかどうか）が低めのエンジニア」向けに調整した説明は、彼らが説明に感じる安心感や信頼感を高め、包括性を明らかに改善しました。一方、自信があるタイプのエンジニアにとっては、それほど大きな変化がありませんでした。ただし、この場合でも、これまで不利な状況にあった自己効力感が低めのエンジニアの包括性が向上したことで、エンジニア間の評価の格差（不公平）は縮まり、結果的に公平性が改善しました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_13-1024x273.png)

「自己効力感（自分の能力に対する自信）」が高いグループと低いグループそれぞれに向けてLLMを調整した際、説明の分かりやすさ（包括性）がどのように変わったかを示した図

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_14-1024x476.png)

調整前のLLM説明と、自己効力感の高低それぞれに調整したLLM説明の具体例を示した図

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_15-1024x291.png)

自己効力感の高いエンジニアと低いエンジニアの間で、調整前後のLLMの説明によって評価の不公平がどれほど改善されたかを示した図

しかし、一部には予想外の結果もありました。楽しむために技術を使う人と、目的達成のために技術を使う人に対して調整した場合、双方のエンジニアが調整された説明に不満を感じる結果となりました。例えば、「技術を楽しみたい」と考えるエンジニアに対してLLMが親しみを込めた説明を提供したところ、「余計な情報が多すぎる」「子ども扱いされているようで逆に不快」と感じるケースがありました。一方、「目的達成型」のエンジニアも、自分のスタイルに合わせたはずの説明が十分に役立たず、包括性が低下しました。つまり、LLMが特定のスタイルに調整しようとすることが逆効果になる場合があるのです。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_16-1024x286.png)

技術を楽しむことを重視するグループと、目的達成を重視するグループそれぞれに調整したLLM説明が、分かりやすさ（包括性）をどの程度変化させたかを示した図

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_17.png)

技術を楽しむタイプ向けに調整したLLMが、3種類のCOBOLプログラム（じゃんけん・フィボナッチ数列・無限ループ）について生成した説明文の例を示した表

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_18-1024x281.png)

「技術を楽しむタイプ」と「目的達成型」のエンジニアの間で、調整前後のLLM説明がどのように評価の不公平を生んだかを示した図

### 「逆のスタイル」で説明した場合の結果

実際には、LLMが誤ってエンジニア自身とは「逆の問題解決スタイル」で説明を行ってしまう場合もあります。このような場合にエンジニアが受ける影響を調べました。つまり、「自分のスタイルとは異なるタイプ向けの説明を受けた場合、それが理解しにくくなったり、不公平さを感じたりするか」を検証しました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_19.png)

エンジニア自身の問題解決スタイルとは逆方向に調整されたLLM説明が、包括性や公平性をどのように変化させたかを整理した表

まず、手順に沿って学ぶ人と試行錯誤で学ぶ人について、逆のタイプに合わせて説明した場合の影響を分析しました。その結果、意外にも「試行錯誤で直感的に学ぶタイプ」のエンジニアは、自分とは逆の「体系的で手順重視の説明」を受けてもそれほど困らず、むしろ理解のしやすさや安心感が改善するケースもありました。これは、手順を詳細に示した説明が、実は自由に学びたいタイプにとっても新しい視点を提供し、役立った可能性があることを示しています。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_20-1024x269.png)

エンジニア自身の学習スタイルとは逆のタイプ向けにLLMが調整した説明を受けた場合、説明の分かりやすさ（包括性）がどの程度変化したかを示した図

一方、「体系的に学びたいタイプ」のエンジニアが、逆の「試行錯誤型の説明」を受けた場合は、あまりよい結果になりませんでした。これらのエンジニアは「情報がまとまっていない」「説明が曖昧で不確かだ」と感じ、包括性（理解しやすさ）が低下しました。このように、一方のスタイルでは逆の説明でも役立つ可能性がありますが、もう一方のスタイルでは明らかにマイナスになるという非対称的な結果が現れました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_21-1024x270.png)

学習スタイルが対立する2つのグループ間で、調整前のLLM説明と逆方向に調整した説明を比較し、それが評価の不公平をどの程度もたらしたかを示した図

また、自己効力感が低めのエンジニアが「自己効力感が高い人向け（つまり、自信がある前提）の説明」を受けた際、安心感が著しく下がりました。「説明が冷たく感じられ、不安が増した」「自分には難しすぎると感じた」といった反応が多く見られ、明らかな包括性の低下につながりました。一方、自己効力感が高いエンジニアも、「自己効力感が低い人向け（丁寧で基本的すぎる）の説明」を受けることで、逆に説明が冗長でイライラすると感じ、包括性が下がるケースがありました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_22-1024x273.png)

自己効力感に対して逆方向に調整されたLLM説明が、自己効力感（高い・低い）のエンジニアそれぞれにどのような影響を与えたかを示した図

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_86965_23-1024x276.png)

自己効力感が異なる2つのグループ間で、調整前のLLM説明と逆方向に調整した説明が評価の不公平をどのように変化させたかを示した図

また、技術を楽しむタイプのエンジニアは、「目的志向型の淡々とした説明」に対して「面白みがなく魅力がない」と感じました。一方、目的志向型のエンジニアが「楽しさや遊び心を重視した説明」を受けると、「余計な装飾が邪魔」と感じました。これらの逆向きの説明は、双方にとって包括性の低下をもたらし、その結果、全体として公平性を損なうことになりました。

## 複数の問題解決スタイルを同時に配慮する難しさについて

これまでの実験結果から、LLMがエンジニア一人ひとりの問題解決スタイルに応じて説明を調整すると、多くのエンジニアにとって分かりやすくなり、公平性も改善することが分かりました。

しかし実際には、一人のエンジニアが持つ問題解決スタイルは1つだけとは限りません。例えば、「丁寧に手順を踏んで学びたい」というスタイルを持ちながら、「リスクを取ることには積極的」というスタイルを同時に持つ人もいます。

今回の研究では、こうした複数のスタイルを同時に考慮することができませんでした。そのため実験中には、あるエンジニアが「この説明は自分の学習スタイルには合っているけれど、自分のリスクへの考え方とは合わない」と感じることがありました。このように、複数のスタイルが絡み合うことで、LLMが提供する説明が必ずしもすべての面で最適にならないという問題が浮かび上がりました。

さらに難しいのは、複数の問題解決スタイルを同時に考えると、説明の調整が複雑になり、場合によっては調整した説明が矛盾してしまう可能性もあることです。例えば、「詳細に説明されすぎると混乱するが、同時に全く説明がないと不安になる」というタイプのエンジニアに対して、どの程度の情報量を提示すればベストなのかを判断することは簡単ではありません。

つまり、複数の問題解決スタイルを一緒に考えながらLLMの説明を調整するという作業は、単純な足し算のようにはいきません。各エンジニアの複数の特徴をバランスよく考慮し、どのように説明を調整すれば一番分かりやすく安心して利用できるかを慎重に検討する必要があります。これは非常に重要ですが、同時に難しい課題であり、今後さらなる研究や工夫が求められるポイントであるといえます。

## まとめ

本記事では、ソフトウェアエンジニアの多様な問題解決スタイルに合わせてLLMのコード説明を調整するとどのような影響が生じるかという研究を紹介しました。

研究では、エンジニアの学び方やリスクへの態度、情報処理方法などによって、通常のLLMの説明が不公平になることが示されました。そこで、LLMをエンジニア個々の特性に応じて調整することで、理解のしやすさや公平性が改善することが確認されました。

一方で、間違った調整はかえって説明を理解しにくくさせる可能性があることも明らかになりました。

こうした研究の結果を参考に、自分のチームやプロジェクトにとって適切な形でLLMを活用する道筋を検討してみてはいかがでしょうか。

**参照文献情報**

- タイトル：An LLM’s Attempts to Adapt to Diverse Software Engineers’ Problem-Solving Styles: More Inclusive & Equitable?
- URL： [https://doi.org/10.48550/arXiv.2503.11018](https://doi.org/10.48550/arXiv.2503.11018)
- 著者：Andrew Anderson, David Piorkowski, Margaret Burnett, Justin Weisz
- 所属：IBM Research

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[プロンプトの「内容」だけでなく「書式」も同時に最適化する手法　Microsoftなどが開発](https://ai-data-base.com/archives/86402)

[オンラインアンケートをLLMチャットボットで行う利点と実践時のポイント](https://ai-data-base.com/archives/86808)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)