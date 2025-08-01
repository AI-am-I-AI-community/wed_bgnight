---
title: "LLMの出力が信頼できるかを判定する手法 Google DeepMindが新しく考案"
source: "https://ai-data-base.com/archives/70453"
author:
  - "[[AIDB Research]]"
published: 2024-06-06
created: 2025-06-13
description: "Google DeepMindの研究者らは、LLMの「不確実性」について調べています。簡単に言うと、モデルが質問に対してどの程度自信を持って答えているかを見極める方法を探っています。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

Google DeepMindの研究者らは、LLMの「不確実性」について調べています。簡単に言うと、モデルが質問に対してどの程度自信を持って答えているかを見極める方法を探っています。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70453-1024x576.jpg)

**参照論文情報**

- タイトル：To Believe or Not to Believe Your LLM
- 著者：Yasin Abbasi Yadkori, Ilja Kuzborskij, András György, Csaba Szepesvári
- 所属：Google DeepMind

**本記事の関連研究** ：

- [ファインチューニングがLLMの幻覚（ハルシネーション）に与える影響　Googleなどによる検証結果](https://ai-data-base.com/archives/69421)
- [マルチモーダルLLMにおける幻覚（ハルシネーション）の原因と対策　クリエイティブでの活用も推奨　AWSなどが網羅的に調査](https://ai-data-base.com/archives/68720)
- [LLMの内部状態を観察することで「出力がハルシネーションか否かを判別する」手法『LLMファクトスコープ』](https://ai-data-base.com/archives/61651)
- [LLMの誤り（ハルシネーション）発生原因と、「創造性と事実性のバランス」などの対策ロードマップ](https://ai-data-base.com/archives/58767)

## 背景

LLMが出力する内容は常に正しいとは限らず、時には「幻覚（ハルシネーション）」と呼ばれる事実と異なる内容を生成してしまうことがあります。

LLMの予測における不確かさには2種類があります。1つは、言語や事実に関する知識の欠如による「認識論的不確かさ」で、もう1つは、同じ質問に対して複数の正解が存在する場合の避けられないランダム性による「偶発的不確かさ」です。LLMの予測の正確さを評価するためには、この2種類の不確かさを区別する必要があります。

しかし従来の不確かさの定量化手法には限界があり、不確かさの区別ができません。

今回研究者らは、認識論的不確かさと偶発的不確かさを切り分け、LLMが自身のパラメータに蓄えられた知識に自信があるのかどうかを判別する手法を考案しています。

## 繰り返しプロンプト

LLMは、与えられたプロンプトに対して、それに続く自然な文章を生成します。そしてLLMの出力は、プロンプトの中に含まれる情報に大きく影響を受けることが明らかになっています。

その中で、プロンプトに特定の情報を繰り返し含めることで、LLMの出力をある程度操作できることが示されています。例えば、「イギリスの首都は何ですか？」というプロンプトに、誤った情報である「パリ」を繰り返し含めていくと、LLMは「ロンドン」という正解の確率を徐々に下げ、「パリ」の確率を上げていきます。ただし、このような操作を行っても、正解の確率が完全にゼロになることは通常ありません。

プロンプト操作の効果は、LLMの確信度に依存することがわかっています。LLMが正解に自信を持っている場合、誤った情報を繰り返し与えても、正解の確率はある程度維持されます。一方、LLMが正解に自信を持っていない場合、誤った情報の繰り返しにより、正解の確率は大きく低下してしまいます。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70453_2-1024x252.png)

正解が1つしかない質問に対して、言語モデルが正解にあまり自信を持っていない場合、誤った回答を繰り返し与えると、正解の確率が大きく下がってしまう。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70453_1-1024x247.png)

正解が1つしかない質問に対して、言語モデルが正解に自信を持っている場合、誤った回答を何度も繰り返し与えても、正解の確率はあまり下がらない。

興味深いことに、複数の正解が存在する質問の場合、1つの正解をプロンプトに繰り返し含めても、他の正解の確率はあまり低下しないことがわかりました。つまり、LLMは複数の正解を同時に認識できているようです。

これらの現象は、LLMの注意機構(Attention Mechanism)によるものです。LLMが学習時に頻繁に目にした質問の場合、その質問に対する正解は、注意機構の重みに強く埋め込まれています。そのため、プロンプトに誤った情報が含まれていても、正解の確率が大きく低下することはありません。一方、学習時にあまり目にしなかった質問の場合、注意機構の重みに正解が強く埋め込まれていないため、プロンプトに含まれる情報に大きく影響を受けてしまうのです。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70453_3-1024x237.png)

複数の正解がある質問に対して、1つの正解を繰り返し与えても、他の正解の確率はあまり下がらない。

## 認識論的不確かさの定量化と推定

本論文で提案された手法は、LLMの認識論的不確かさを定量化するために、「擬似同時分布」という新しい概念を導入しています。

具体的には、以下のようなステップで認識論的不確かさを定量化します：

1. LLMに同じ質問を繰り返し与え、その都度得られる回答を集めます。
2. 集めた回答を組み合わせて、「擬似同時分布」を作ります。これは、あたかもLLMが同時に複数の回答を生成したかのような分布です。
3. この擬似同時分布と、言語の真の分布から作られる同時分布とのズレを、カルバック・ライブラー情報量（KL情報量）で測ります。KL情報量は、2つの確率分布の違いを測る指標です。

このズレが大きいほど、LLMの認識論的不確かさが高いことを示します。つまり、LLMが言語の真の分布をうまく捉えられていないことを意味します。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70453_4.png)

言語モデルが出力する回答の分布が、言語の真の分布とずれている状態を表した図。言語モデルがハルシネーションを起こしていると言える。

重要なのは、この指標が偶発的不確かさの影響を受けないという点です。偶発的不確かさとは、同じ質問に対して複数の正解が存在することで生じるランダム性のことです。提案手法では、複数の正解が存在する場合でも、認識論的不確かさを適切に定量化できます。

ただし、この指標を正確に計算するためには言語の真の分布を知る必要がありますが、それは現実的ではありません。そこで、指標の下限として「相互情報量」を用います。相互情報量は、LLMから得られる回答間の依存性の強さを表す指標で、擬似同時分布のみから計算できます。

しかし、相互情報量の正確な計算にはLLMのすべての回答の分布が必要で、これも現実的ではありません。そこで、限られた数の回答サンプルから相互情報量を推定する方法が提案されています。この推定方法の誤差も理論的に分析されており、特に自然言語の単語の出現頻度がジップ分布（単語の出現頻度が出現順位のべき乗に反比例する分布）に従う場合には、誤差が非常に小さくなることが示されています。

要するにLLMの擬似同時分布と言語の真の分布とのズレを測ることで、LLMの知識の欠如を定量的に評価しようとしています。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70453_5-1024x630.png)

上のアルゴリズムは、相互情報量を有限のサンプルから推定するための手法です。言語モデルの認識論的不確かさを定量化するための重要な要素となっています。

以下はアルゴリズムの詳細な説明です。専門的な内容のため、難解な場合は読み飛ばしいても構いません。

1. 言語モデルから得られた複数の回答サンプル (X1, …, Xk) を入力とします。これらのサンプルは、同じ質問に対して言語モデルが生成した回答です。
2. これらのサンプルの中から、ユニークな回答のみを選び出します（変数 S で表現）。これは、同じ回答が複数回現れた場合、1つだけを残すという処理です。
3. ユニークな回答それぞれについて、その出現確率を推定します（変数 μ^ で表現）。この推定値は、そのユニークな回答が選ばれた回数を、選ばれたユニークな回答の総数で割ったものです。
4. 各ユニークな回答について、周辺分布の積（各回答の要素が独立に選ばれたと仮定した場合の分布）も推定します（変数 μ^⊗ で表現）。
5. 最後に、推定された分布 μ^ と μ^⊗ を用いて、相互情報量の推定値を計算します。この推定値は、言語モデルが生成した回答間の依存性の強さを表します。

重要なのは、このアルゴリズムが有限のサンプルから相互情報量を推定しているという点です。理論的には、相互情報量を正確に計算するためには、言語モデルが生成しうるすべての回答の分布を知る必要がありますが、それは現実的ではありません。そこで、このアルゴリズムでは、実際に得られた限られた数のサンプルを使って、相互情報量を近似的に計算しています。

## スコアベースのハルシネーション検出手法

研究者らは今回、LLMが出力する内容が事実と異なるハルシネーションを検出するために、スコアベースの手法を提案しています。LLMの認識論的不確かさの推定値を用いて、ハルシネーションの可能性が高い回答を見つけ出します。

以下のようなステップでハルシネーション検出を行います。

1. LLMの認識論的不確かさの推定値を計算します。以下の4つのスコアが用いられます。
	- LLMが出力する回答の尤度（ある回答が得られる確率）
	- [セマンティック](https://ai-data-base.com/archives/26143 "セマンティック") ・エントロピー（回答の分布の不確かさを表す指標）
	- 本論文で提案された相互情報量に基づく指標
	- 自己検証と呼ばれる手法
2. 推定値がある閾値を超えているかどうかを判定します。
	- 閾値を超えている場合、その回答はハルシネーションであると判断され、LLMは回答を控えます。
	- 閾値を下回る場合、LLMは通常通り回答を出力します。
3. 閾値は、正解データ（Ground Truth）を使ったキャリブレーションと呼ばれる処理で決定します。推定値と実際のハルシネーションの関係を調べ、最適な閾値を決定するプロセスです。

上記のスコアは、1つの正解しかない質問と複数の正解がある質問の両方を含むベンチマークデータセットで評価されました。

以上がスコアベースのハルシネーション検出手法の概要です。

## 実験による評価結果

提案された手法の効果を確認するために、質問に対するLLMの回答をテストしました。使ったモデルは「Gemini 1.0 Pro」です。

使ったデータセットは、TriviaQA、AmbigQA、WordNetの3種類です。

- **TriviaQA：** ウェブ上の質問応答サイトから収集された、一般常識に関する質問と回答のペアからなるデータセット。主に1つの正解しかない質問が多い。
- **AmbigQA：** Wikipediaから収集された曖昧な質問とその回答のペアからなるデータセット。質問の曖昧さのレベルによって分類されている。主に1つの正解しかない質問が多い。
- **WordNet：** 英語の単語とその意味関係を体系化したデータベース。今回の実験では、ある単語（例: “dog”）に対してその下位概念（例: “poodle”, “bulldog”）を尋ねる質問を生成。複数の正解がある質問が多い。

研究者らはLLMに質問を出して複数の回答を生成させ、それらの回答の類似度を [F1スコア](https://ai-data-base.com/archives/26112 "F1スコア（F値）") という指標で測りました。F1スコアは、2つの文章の類似度を測る指標で、単語の一致率をもとに計算されます。F1スコアが一定以上のものは同じ意味とみなし、それらの確率を合計しました。

比較した手法は、回答の尤度、セマンティック・エントロピー、相互情報量、自己検証の4つです。

- 回答の尤度: LLMが出力する回答の確率。
- セマンティック・エントロピー: 回答の分布の不確かさを表す指標。回答の多様性が高いほど大きな値をとる。
- 相互情報量: 本論文で提案された指標。LLMから得られる回答間の依存性の強さを表す。
- 自己検証: LLMが自身の回答の正しさを評価する手法。

それぞれの手法でハルシネーションの可能性が高いと判断された場合、LLMは回答を控えるようにしました。

結果は、 [適合率](https://ai-data-base.com/archives/26103 "適合率") と [再現率](https://ai-data-base.com/archives/26095 "再現率") という2つの指標で評価しました。

- 適合率: ハルシネーションだと判断した回答のうち、実際にハルシネーションであった割合。
- 再現率: 実際のハルシネーションのうち、ハルシネーションだと判断された割合。

一般に、適合率と再現率はトレードオフの関係にあり、両者を高く保つことは難しいとされています。

結果として、1つの正解しかない質問に対しては、相互情報量とセマンティック・エントロピーが他の手法よりも良い結果を示しました。しかし、複数の正解がある質問では相互情報量が圧倒的に優れていました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70453_6-1024x224.png)

提案手法とベースライン手法の性能を比較した図。横軸が再現率（ハルシネーションを見逃さない率）、縦軸が適合率（ハルシネーションだと判断した回答が本当にハルシネーションである率）。提案手法は、正解が複数ある質問を含むデータセットでベースライン手法より優れた性能を示した。

特に、WordNetの質問を追加した場合、言語モデルは高いエントロピーを出力する傾向があり、この場合はセマンティック・エントロピーの性能が低下しましたが、相互情報量は引き続き高い適合率と再現率を示しました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70453_7-1024x230.png)

提案手法とベースライン手法の性能を、言語モデルの出力の多様性（エントロピー）ごとに比較した図。提案手法は、言語モデルの出力が多様な質問に対しても、高い再現率を維持しつつ、エラー率を低く抑えられた。

上記の結果から、相互情報量に基づく手法が複数の正解がある質問に対しても非常に効果的であることがわかりました。

## まとめ

この記事では、LLMの予測に関する不確かさを2つの種類に分け、それぞれの対処方法を提案した研究について紹介しました。研究者らはLLMが持つ知識の不足による「認識論的不確かさ」と、複数の正解が存在する場合の「偶発的不確かさ」に分けて考えています。

研究では、特に認識論的不確かさを定量化する新しい指標を提案しています。この指標は、複数の正解がある場合にも使えるもので、質問応答タスクを用いた実験で高い性能を示しました。

この成果は、LLMの信頼性を評価する新しい方法として、実社会でのLLMの活用に役立つと期待されています。

- 参照論文URL： [https://arxiv.org/abs/2406.02543](https://arxiv.org/abs/2406.02543)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[MMLUをアップデートしたベンチマーク『MMLU-Pro』Phi-3やLlama 3、Claude 3、GPT-4oなどの評価結果](https://ai-data-base.com/archives/70358)

[仮想の翻訳会社「TRANSAGENTS」に学ぶ　マルチLLMエージェントによる効果的な翻訳システム](https://ai-data-base.com/archives/70529)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)