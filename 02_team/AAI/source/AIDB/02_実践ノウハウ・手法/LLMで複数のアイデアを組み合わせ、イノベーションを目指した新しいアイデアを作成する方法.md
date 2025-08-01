---
title: "LLMで複数のアイデアを組み合わせ、イノベーションを目指した新しいアイデアを作成する方法"
source: "https://ai-data-base.com/archives/87358"
author:
  - "[[AIDB Research]]"
published: 2025-04-02
created: 2025-06-13
description: "LLMで「組み合わされることのなかったアイデア同士」を非凡な発想で繋げてイノベーションを目指すのは、とても有効だとされています。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

LLMで「組み合わされることのなかったアイデア同士」を非凡な発想で繋げてイノベーションを目指すのは、とても有効だとされています。  
”ある問題”と、そこから遠い場所にあるはずの”解決方法”をめぐり合わせることで、根本的に見落とされていたアプローチや新発見が生じることが明らかになりました。

![](https://ai-data-base.com/wp-content/uploads/2025/04/AIDB_87358_top2-1024x576.png)

**本記事の関連研究**

- [LLM科学者と人間の協力で実験の効率化　Googleなど](https://ai-data-base.com/archives/84823)
- [Sakana AIが科学研究自動化フレームワーク『The AI Scientist』開発](https://ai-data-base.com/archives/74257)

## 背景

歴史的に見ると、イノベーションと言えるような研究成果の多くは、もともとあった知識や技術を、これまでになかった「意外な形」で組み合わせたものだということが知られています。ただし、どんな組み合わせが特に効果的なのかはわからない場合が多いという悩みがあります。

一方で、研究や開発のための新しいアイデアを手軽に作り出す目的でLLMを使用することが注目されています。しかし、具体的な研究課題にぴったり合った方法や技術を選び出し、的確に組み合わせるには、単純な対話だけでは不十分だったりします。

さらに、LLMがときどき根拠のない内容を出力してしまう問題があるため対策が必要です。また、新しいアイデアが本当に価値あるものなのかを客観的に判断する仕組みも、現状では整っていません。

そこで研究者らは「すでにあるテーマと手法をLLMによって組み合わせて、より革新的なアイデアを生み出す」仕組み作りに取り組みました。過去の文献から課題と手法の組み合わせを抽出して評価し、高い新規性を持つと予測される組み合わせを提示することを目指しています。その際に、破壊的イノベーション指数という新しい指標も導入しました。

以下で詳しく紹介します。

## 研究開発における「画期的な成果」と評価の難しさ

科学技術の世界では、研究の重要性や影響力を評価するために、一般的に「論文がどれだけ引用されたか」という指標（引用数）が使われています。引用数が多ければ多いほど、その研究が広く認められ、影響力があると考えられます。ただし、引用数だけでは、研究の「新しさ」や「革新性」を十分に評価できない場合があります。

例えば、既存の研究を補強するような研究は多く引用されやすい一方で、本当に新しく画期的な研究は、初めは引用されにくいことも多いです。また、引用数が多い研究が必ずしも新しい視点や重要な転換点を提供しているわけではありません。そのため、研究が本当に科学的に重要かどうかを客観的に判断するためには、別の評価方法が必要です。

そこで最近注目されているのが、「Disruptive Index（革新指数）」という指標です。この指標は、その研究がどれほど従来の考え方や研究を大きく変えたか、新たな研究の方向性を示したかを客観的に測るためのものです。

Disruptive Indexを使うと、単に引用数が多い研究ではなく、本当に科学の常識を変える可能性がある研究を見つけやすくなります。「その研究だけが単独で引用されている割合」と「従来の研究と一緒に引用されている割合」などを分析し、その研究が既存の枠組みをどれほど覆したのかを数値化します。

この指標を実際に活用するのが本研究のポイントの一つです。

## 提案手法

「自分の課題に最も合った方法や技術は何だろう？」という悩みに直面することがあります。普通は、この問題を解決するために多数の論文を読んで、自分の課題に近い内容や使用されている方法を探し出す必要があります。しかし、こうした作業は時間と手間が非常にかかる上に、良い方法を見落とすリスクもあります。

今回の仕組みは、この作業を効率化することを目指しています。具体的なイメージとしては、まず論文や研究の情報をあらかじめ整理し、それぞれの研究課題や使われている方法をデータベース化します。自分が新しい研究課題に取り組む際、このデータベースを使って、「同じような課題に他の研究者はどんな方法を使っているのか？」を簡単に探し出せるようにします。

例えば、自分が「画像認識技術を医療分野に応用する」という課題を持っているとします。その際、「画像認識」「医療分野」といったキーワードでデータベースを検索し、過去に類似の課題を扱った研究がどのような方法を使ったのかを見つけます。

さらに、見つかった方法や技術が自分の課題にどのくらい新しく重要な影響を与えるかを数値で評価し、より良い方法を探すための基準として活用します。そして、この評価を繰り返し行うことで、最も効果的な方法や技術の組み合わせをさらに洗練させていきます。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87358_1-1024x503.png)

提案する仕組みの全体像（3つの主要なモジュールから構成される）

以下、それぞれの手順をもう少し詳しく紹介します。

### 研究課題を軸にした探索

最初に以下のようなステップでデータを準備します。

まず、論文や資料から次のような情報を収集します。

- 論文タイトル
- 要約（アブストラクト）
- キーワード

次に、それらをデータベースに整理します。各論文が扱う「研究課題」と「それを解決するために使われた方法や技術」を対応付けて分類します。

たとえば論文の要約に「機械翻訳の精度向上のために [Transformer](https://ai-data-base.com/archives/26535 "Transformer") モデルを採用した」という文章があった場合、「機械翻訳の精度向上」が課題、「 [Transformer](https://ai-data-base.com/archives/26535 "Transformer") モデル」が方法として登録されます。これをLLMを使って半自動的に実施します。

新しい課題が設定された場合には、次のように処理を行います。

1. 新しい研究課題を短い文章で入力します。
2. 入力した課題を言語モデルでベクトル（数値の羅列）に変換します。
3. データベースにある既存の課題についても、同様にベクトル化します。
4. 新しい課題と既存の課題のベクトルの間で「類似度」を計算します（例えばコサイン類似度などを使います）。
5. 類似度が高い課題を選び出し、それらの課題に関連付けられた方法をリストアップします。

要するにRAGの応用です。

こうすることで、自分の課題に近い研究を素早く特定し、使われている方法や技術を簡単に確認できます。実際に再現する際には、まず論文データを整理・ベクトル化し、その後、新規課題を入力して近い課題を探索する、という流れを構築します。

### Disruptive Index（革新指数）を予測する

「ある研究課題と方法の組み合わせが、どの程度これまでの常識を覆すような新しい発見につながりそうか」を数値で評価するための仕組みを説明します。

まず、準備段階として次のような作業を行います。

①データベースに登録された論文から「課題と方法の組み合わせ」を表現する短い要約を自動で作ります。  
要約は [自然言語処理](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") モデル（例えばBERTなど）を使い、論文のタイトルや要約から自動生成します。この要約は、課題とその課題に使われた方法の特徴を簡潔にまとめたものです。

次に、評価段階に進みます。

②生成された「課題と方法の要約」をもとに、データベースにある他の論文の要約と比較し、どのくらい内容が似ているかを数値（類似度）で測ります。  
似ている論文は、今回評価したい組み合わせが過去にどの程度あったかを示しています。この作業もベクトル化と類似度計算（例えばコサイン類似度）で実現できます。

その上で、過去の論文と比較して新しく提案した組み合わせがどのくらい独自性や新規性があるのかを評価します。この評価が「Disruptive Index（革新指数）」と呼ばれる数値です。これが冒頭で述べた”破壊的イノベーション指数”です。

Disruptive Indexは次のように定義されます。  
新しい研究論文が引用されたとき、「その論文だけが単独で引用された割合」と「既存の論文と一緒に引用された割合」の差から算出されます。数値が高いほど、その研究は過去の研究を置き換えるような革新的な内容だと評価されます。

Disruptive Indexを予測するモデルを構築する手順は以下の通りです。

1. まず、過去の論文データからDisruptive Indexを算出し、データセットを作成します。各論文について、他の論文がどのように引用しているかを分析し、Disruptive Indexを数値化します。
2. 「課題と方法の要約」と、「他の論文との類似度」といった [特徴量](https://ai-data-base.com/archives/26406 "特徴量") をモデルの入力として設定します。
3. 機械学習モデルを使って、入力された [特徴量](https://ai-data-base.com/archives/26406 "特徴量") からDisruptive Indexを予測するモデルを訓練します。例えば、回帰モデル（Linear RegressionやRandom Forest、 [ニューラルネットワーク](https://ai-data-base.com/archives/26117 "ニューラルネットワーク") など）を使って学習できます。

こうした手順を踏むことで、自分の研究アイデアが従来の研究を超えて新しい道を開く可能性がどのくらいあるかを事前に評価できるようになります。

### 研究方法アイデアの組み合わせを最適化する

一度見つけた方法や技術の組み合わせを評価結果に応じて調整し、さらに良い組み合わせを探していく仕組みについて説明します。

具体的なイメージとしては次のようになります。まず、ある研究課題に対して一つの方法を選び、それがどのくらい革新的で効果があるかを、先ほど説明したDisruptive Indexで評価します。この評価を基にして、「より良い組み合わせ」に少しずつ近づけるよう調整を繰り返します。

実際の手順としては、

1. まず、初期の組み合わせを設定して評価を行います。
2. その後、その組み合わせを少しだけ変更（例えば、技術の一部を置き換えたり、追加したり）した複数の新しい組み合わせを用意します。
3. そして、それらも同様に評価します。
4. 次に、評価結果を比較し、最も良い結果を示した組み合わせを次のステップで採用します。

このような調整を繰り返していくことで、少しずつ組み合わせが改善され、最終的には自分の課題に最も合った効果的な方法の組み合わせに近づいていきます。

ただ、このようなやり方だと「局所最適解」と呼ばれる、ある程度良いが最高ではない解に留まってしまうことがあります。そのため、あえて評価の低い組み合わせも時々採用し、新たな可能性を探索するように工夫します。それは単純な「貪欲法」（毎回最も良いものだけを選ぶ方法）に、時折ランダムな要素を加えることで実装できます。ある程度の確率で評価が一番良くない組み合わせをあえて選択し、探索範囲を広げます。

こうすることで、自分の研究課題に最も適した組み合わせを効率よく探索し、実際の研究活動で有効な結果を得ることが可能になります。

## 実験による検証

ここからは、実際に上述の仕組みがどれくらい有効かを確かめるために行った実験について説明します。研究者らは、複数のデータセットを用意し、実際のデータを用いてテストしています。

### 使用したデータセット

実験で使ったのは、実際に公開されている研究論文や特許のデータベースです。今回は3種類の異なるデータベースを利用しました。

まず一つ目は「DBLP」というデータベースで、これは主にコンピューターサイエンス分野の論文情報を集めています。人工知能分野のトップレベルの学会（CCF-A）で発表された、2011年から2021年までの約14,500件の論文を使っています。

二つ目は「PubMed」という医学・生物学分野の論文データベースです。この中から特に「うつ病」に関連する論文を選び、2015年から2025年に公開された約96,600件のデータを抽出して利用しています。

三つ目は「PatSnap」という特許のデータベースです。このデータベースからは、「医療ロボット」に関連する特許情報を集めました。具体的には、2020年から2025年の間に登録された約6,600件の有効な特許データを使っています。

こうした多様なデータセットを使うことで、この仕組みがさまざまな分野や用途で本当に役に立つかどうかを客観的に検証できるようになっています。

なお、これらのデータセットを自分で再現して使いたい場合、DBLPやPubMedはウェブサイトから無料で論文情報をダウンロードできます。また、PatSnapは商用サービスですが、類似の特許データを別の公開データベース（例えばGoogle Patentsなど）から取得することも可能です。

### 比較のために用意したベースライン

提案した仕組みの性能を客観的に評価するには、「他の方法や既存のモデルと比べてどのくらい優れているのか」を示す必要があります。そのため、この研究では比較対象（ベースライン）として、すでに広く知られている複数のモデルを用意しました。

まずは一般的に使われている大規模言語モデル（LLM）として、「GPTシリーズ（GPT-4oなど）」や「Claudeシリーズ（Claude 3.5、Claude 3.7）」などを利用しています。これらは自然な文章生成が得意で、一般的なテキスト処理で広く使用されているモデルです。

さらに、科学論文や専門的な文章の処理に特化したモデルとして「SciBERT」や「RoBERTa」と呼ばれるモデルを使用しています。これらは専門分野の文章理解において特に優れた性能を示しています。

また最近のモデルとして、「LLaMA 3」や「Qwen-7B」という言語モデルもベースラインに含めました。これらのモデルは全て公開されているため、自分でも再現や比較が可能です。

### 実験環境

この実験は、プログラミング言語として主にPythonを使用し、環境としては [PyTorch](https://ai-data-base.com/archives/26256 "PyTorch") という機械学習用ライブラリを採用しています。また、計算にはNVIDIAのA800 [GPU](https://ai-data-base.com/archives/26570 "GPU") という計算能力の高いハードウェアを4台使っています。

実際にモデルを訓練する際には、「Adam」という一般的に使われている最適化アルゴリズムを利用し、学習率（モデルがどのくらい速く学ぶかを決めるパラメータ）を0.00001という値に設定しています。モデルの性能を安定させるため、勾配クリッピングという手法を使い、数値を0.2という一定範囲内に抑える工夫もしています。

また、論文や特許の情報をモデルが処理する際の「文章の長さ」は、それぞれ「要約を生成するモデル」では最大1000文字（トークン）、「革新指数を予測するモデル」では最大7000文字まで扱えるよう設定しています。

さらに、モデルの細かな調整にはPEFTというライブラリを利用し、ベースラインのモデルの最後の層にアダプター（小さな調整用のモデル部品）を追加しています。既存のモデルを効率的に再学習させ、研究目的に合った精度の高い結果を得ることを目指しています。

### 実験結果

実際に上記の設定でモデルを訓練し、どのくらい性能が出たかを確かめました。

以下の二つの視点で評価を行いました。

一つ目は「課題と方法の組み合わせを要約する精度」で、生成された要約が本来の論文の内容とどの程度近いかを計算しています。

二つ目は「Disruptive Index（革新指数）の予測精度」で、提案した組み合わせがどの程度新しいかを正確に予測できたかを測定しています。

その結果、今回提案した仕組みは、比較に使った既存のモデル（GPTシリーズやClaudeシリーズ、SciBERTなど）よりも高い性能を示しました。  
どちらの視点でも、今回の仕組みを適用したモデルは、既存のモデルよりも高い精度で要約と革新指数の予測を行うことができました。中でも専門分野向けに微調整したモデルは、一般的なモデル（GPTやClaude）よりも安定して良い結果を出しました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87358_2-1024x333.png)

複数のデータセットを用いて「研究課題アイデア」と「研究方法アイデア」の組み合わせ要約の精度を比較した結果

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87358_3-1024x416.png)

要約情報を活用して「Disruptive Index（革新指数）」を予測した際の精度を、 MSE や MAE などの指標で比較した結果

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87358_4-1024x251.png)

「研究課題アイデア」と「研究方法アイデア」の組み合わせから「Disruptive Index（革新指数）」を予測した際の精度評価結果

なお、ここで言う「訓練＝チューニング（微調整）」は、性能を引き出す上で推奨されてはいますが、必ずしも必須ではありません。

もう少し詳しく説明すると、この研究の中心はあくまで「既存の研究課題と手法を組み合わせる枠組みや評価方法の設計」です。モデルをチューニングするとより良い結果が得られることが示されていますが、仮にチューニングが難しい環境でも、基本的な仕組み（論文の整理、ベクトル化、類似度計算、革新指数による評価）を導入・再現すること自体は可能です。

実際、チューニングなし（事前学習済みモデルのみ）のベースラインを評価しており、チューニングしなくても一定の成果は得られることが示されています。ただし、チューニングを行えば精度が改善するため、推奨されることにはなります。そのあたりは次のセクションでも実験結果が出ています。

### 各要素の影響を調べる実験

提案した仕組みは複数のステップから構成されているため、「どの要素が特に性能向上に貢献しているか」を確かめる必要があります。これを確かめるため、一部の機能を意図的に除外し、それによって性能がどのように変化するかを観察する実験を行いました。

例えば、「課題と方法の要約作成モデルの微調整を行わない場合」、「過去の文献との類似度を計算しない場合」、「評価の高くなかったケースを再学習しない場合」など、それぞれの条件で再実験しました。

その結果、「課題と方法の要約作成の微調整」を行わないと要約精度が落ちること、「過去の文献との類似度」を計算しないとDisruptive Indexの予測精度が下がることなどが分かりました。このような実験を通じて、提案する仕組みの各ステップが実際に重要な役割を担っていることが明らかになりました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87358_5-1024x197.png)

提案する仕組みの各要素が性能に与える影響を調べるため、それぞれの要素を除いた実験結果

### 研究方法アイデアの組み合わせを最適化する手法の検証

最後に、方法の組み合わせを動的に調整する仕組みが、どのくらい効果的に最適な組み合わせを見つけられるかを検証しました。「評価結果に基づいて常に最良の方法を選ぶだけのシンプルなやり方（貪欲法）」と、「あえて時々ランダムに良くない方法を選ぶ方法（提案した手法）」の二つを比較しています。

実験の結果、提案した「ランダム要素を含む手法」を使うと、単純な貪欲法に比べてより高い革新指数（Disruptive Index）を持つ方法の組み合わせを見つけられる確率が高くなりました。

良くない選択を時折あえて取り入れることで、広範囲の可能性を探索でき、最終的により良い組み合わせを見つけ出せることを意味しています。

このように、「常に最良を選ぶ」だけではなく、あえて一時的に良くない結果を選ぶことが、実際の研究でもより効果的な結果につながることが実証されました。

![](https://ai-data-base.com/wp-content/uploads/2025/03/AIDB_87358_6-1024x419.png)

「Disruptive Index（革新指数）」が高いアイデアの組み合わせを見つけられた割合を複数の手法間で比較した結果

## まとめ

本記事では、LLMを活用して複数のアイデアを組み合わせ、新しい研究開発テーマを作る方法を提案した研究を紹介しました。

過去の論文データから研究課題と研究方法の組み合わせを抽出し、革新性（Disruptive Index）を定量的に評価する仕組みです。評価指標の活用によって、単に引用数が多いだけではない、本当に新しいアイデアを見つけやすくなると説明されています。

実際の検証では、提案された方法が既存の手法よりも効果的に有望なテーマを見つけられることが示されました。読者の方々も、自身の研究や開発活動において類似したアプローチを取り入れ、テーマ選びやアイデア創出に役立てることができるかもしれません。

**参照文献情報**

- タイトル：Structuring Scientific Innovation: A Framework for Modeling and Discovering Impactful Knowledge Combinations
- URL： [https://doi.org/10.48550/arXiv.2503.18865](https://doi.org/10.48550/arXiv.2503.18865)
- 著者：Junlan Chen, Kexin Zhang, Daifeng Li, Yangyang Feng, Yuxuan Zhang, Bowen Deng
- 所属：Sun Yat-sen University

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[LLMによるプロンプトの書き直しは本当に実用的　実際の会話データ数百万件をもとに得られた7つの知見](https://ai-data-base.com/archives/87309)

[LLMに対するプロンプトインジェクションを防ぐ4つの工夫](https://ai-data-base.com/archives/87403)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)