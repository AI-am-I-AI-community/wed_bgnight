---
title: "o1-previewが人間のように6つの思考パターンを使い分けているとの実験結果"
source: "https://ai-data-base.com/archives/77445"
author:
  - "[[AIDB Research]]"
published: 2024-10-24
created: 2025-06-13
description: "本記事では、AIの性能向上における「推論時の工夫」の効果について紹介します。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、AIの性能向上における「推論時の工夫」の効果について紹介します。

これまでAIの性能向上といえば「モデルを大きくする」「データを増やす」が定石でしたが、OpenAIが開発したo1モデルは「じっくり考える時間を確保する」という、人間に近い方法でブレークスルーを実現しました。今回研究者らは、o1モデルの詳細な分析を通じて、AIにおける「考える時間」の重要性と活用方法を明らかにしています。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445-1024x576.jpg)

**参照論文情報**

- タイトル：A Comparative Study on Reasoning Patterns of OpenAI’s o1 Model
- 著者：Siwei Wu, Zhongyuan Peng, Xinrun Du, Tuney Zheng, Minghao Liu, Jialong Wu, Jiachen Ma, Yizhi Li, Jian Yang, Wangchunshu Zhou, Qunshu Lin, Junbo Zhao, Zhaoxiang Zhang, Wenhao Huang, Ge Zhang, Chenghua Lin, J.H. Liu
- 所属：M-A-P, University of Manchester, OpenO1 Team, 2077AI, Abaka AI, Zhejiang University, University of Chinese Academy of Sciences

## 背景

最近のLLMは、推論やコーディング、数学など、様々な分野で素晴らしい成果を上げています。モデルの性能を向上させるためにされてきたこととしては、モデルのパラメータ（学習可能な重みの数）を増やしたり、学習データを増やしたりする方法が取られてきました。

しかし、このアプローチには限界が見えてきました。モデルを大きくすればするほど性能向上の効率が下がり、さらに計算コストが膨大になってしまうという問題に直面しています。

そこで注目されているのは推論時の工夫です。OpenAIが開発したo1モデルは、回答を出す前により時間をかけて考えることで、モデルサイズを増やさなくても性能を向上させることができました。この手法は、従来の方法と比べてより効率的だということが分かってきています。

しかし、推論時の工夫がどのように機能しているのか、その仕組みについてはまだよく分かっていません。その解明のため、今回研究者らははo1モデルの性能を詳しく調査し、既存の手法と比較することにしました。数学、コーディング、常識的推論という3つの重要な分野で評価を行い、活用法も明らかにしようとしています。

## 実験セットアップ

o1モデルの性能を総合的に評価するため、3つの分野から4つのテストデータが選ばれ、詳しい分析が行われました。

### ベンチマーク（評価用データセット）の選定について

#### 常識的推論能力の評価

HotpotQAとCollieという2つのデータセットが採用されました。HotpotQAは、複数の文書を参照しながら質問に答える必要があります。一方Collieは、特定の制約条件に従ってテキストを生成することが求められます。なお、どちらも単純すぎる問題を除外し、本当にモデルの性能差が分かる問題だけが選別されています。

#### プログラミング能力の評価

USACOという競技プログラミングのコンテストの問題が使用されました。評価の信頼性を高めるため、複数のAIモデルで解くのが難しい問題が厳選されています。

#### 数学的能力の評価

AIMEという数学オリンピックの問題から90題が選ばれました。高度な数学的思考力を必要とする問題です。

### 比較対象となる手法

以下のモデルと手法で比較実験が行われました。

- o1モデル
- GPT-4o
- Best-of-N (BoN)
- Step-wise BoN
- Self-Refine
- Agent Workflow

o1モデルはOpenAI社が開発した最新の言語モデルです。GPT-4oは同社の代表的な言語モデルとして知られています。

Best-of-Nは複数の回答を生成し、その中から最も適切なものを選び出す手法です。また、Step-wise BoNは複雑な問題を小さな段階に分けて順番に解いていく手法として採用されました。さらにSelf-Refineは一度生成した回答を繰り返し改善していく手法です。

そしてAgent Workflowは、与えられた問題を小さなタスクに分解し、体系的に解決していく手法として実験に取り入れられました。

上2つは単なるモデルの違いですが、3つ目以降はエージェント手法になっています。実験では、Best-of-N、Step-wise BoN、Self-Refine、Agent Workflowの4つのエージェント手法すべてにおいて、GPT-4oをバックボーンモデル（基盤となるモデル）として使用したことが明記されています。

### 評価方法

評価方法はデータセットごとに適切な方法が選ばれました。

HotpotQAとAIMEについては、生成された回答の正誤で評価が行われました。Collieについては、生成されたテキストが制約条件を満たしているかどうかが評価されました。USACOについては、生成されたプログラムが正しく動作するかどうかをテストケースを用いて検証しました。

## 実験結果

### 全体的な分析

実験の結果から、以下のような重要な発見が得られました。

o1モデルは、ほとんどの課題において他の手法より優れた結果を示しました。特に数学とプログラミングの課題で顕著な成果が見られました。o1-miniは一部の課題でo1-previewを上回る結果を出しましたが、これは推論プロセスが必ずしも良い結果につながるとは限らないことを示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445_1-1024x373.png)

OpenAIのo1モデル、GPT4o、その他のテスト時計算手法の4つのベンチマーク（HotpotQA、Collie、USACO、AIME）での結果比較

Self-Refine（一度生成した回答を繰り返し改善していく手法）は、期待されたほどの改善が見られませんでした。ほとんどの課題でGPT-4と比べてわずかな改善に留まり、Collieという課題では逆に性能が低下しました。

Best-of-N（複数の回答を生成し、その中から最も適切なものを選び出す手法）は、HotpotQAで比較的良い結果を出しました。推論段階で複数の可能な回答を探索することの重要性を示しています。  
しかし、Collieでは性能が低下し、また回答候補の数を増やすと若干の性能低下が見られました。Collieが求める厳密な形式要件が、多様な出力を生成する際の制約となったためと考えられます。

Step-wise BoN（複雑な問題を小さな段階に分けて順番に解いていく手法）は、複雑な課題では制限があることが分かりました。HotpotQAでは優れた結果を示しましたが、他の複雑な課題では性能が大きく低下しました。多くの中間ステップを生成する必要があり、元の質問の意図を維持できなくなるためと考えられます。

Agent Workflow（与えられた問題を小さなタスクに分解し、体系的に解決していく手法）は、全ての課題で顕著な性能向上を達成しました。この手法はStep-wise BoNと同様に複雑な課題を小さな部分に分解しますが、分野ごとに特化したシステムプロンプトを使用することで、不必要な推論プロセスを減らすことができました。ただし、o1モデルとの差は依然として存在しており、これは応答の多様性の探索が限定的であることが原因かもしれません。

### o1の推論パターンの分析

o1の様々な課題での推論パターンを分析した結果、以下の6つのパターンが特定されました。

パターン１：体系的分析  
問題の全体構造から入力、出力、制約を分析し、適切なアルゴリズムと構造を選択します。

パターン２：手法の再利用  
既存の古典的な解法に変換できる問題に対して、既知の方法を素早く適用します。

パターン３：分割統治  
複雑な問題を小さな部分問題に分解し、それらを解いて全体の解を構築します。

パターン４：自己改良  
推論過程で問題がないかを評価し、必要に応じて修正します。

パターン５：文脈の特定  
追加情報が必要な課題では、質問に関連する文脈の異なる側面をまとめます。

パターン６：制約の強調  
生成されるテキストに制約がある課題では、推論過程でそれらの制約を繰り返し強調します。

これらの推論パターンの中でも、「分割統治」、「自己改良」、「体系的分析」が最も頻繁に使用されていたため、o1の高い性能に特に貢献していると考えられます。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445_2.png)

異なるベンチマークにおける推論パターンの統計

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445_3.png)

推論パターンの全体的な統計情報

上記の棒グラフは6つの推論パターンの出現頻度を示しています。各略称の意味は以下の通りです。

- SA (Systematic Analysis): 体系的分析
- MR (Method Reuse): 手法の再利用
- DC (Divide and Conquer): 分割統治
- SF (Self-Refinement): 自己改良
- CI (Context Identification): 文脈の特定
- EC (Emphasizing Constraints): 制約の強調

### ロングコンテキスト推論によるStep-wise BoNの限界

テストで使用した異なる課題に対して、Step-wise BoN（複雑な問題を小さな段階に分けて順番に解いていく手法）が中間ステップで生成する単語（トークン）の数が調べられました。ほぼすべての課題で、中間ステップのトークン数が200を超えていることが分かりました。この結果は、Step-wise BoNがモデルに対して長い文脈を扱う高い能力を要求していることを裏付けています。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445_5.png)

Step-wise BoN（N=4）の推論トークンの平均長

Step-wise BoNは、CollieやAIMEのような（出力形式や推論過程が複雑な）課題では比較的低い性能を示しました。例えば、Collieでの [正解率](https://ai-data-base.com/archives/25930 "正解率") は12%未満で、AIMEでの性能は他の手法の半分程度でした。一方で、HotpotQAのように厳密な出力形式や複雑な推論を必要としない課題では、Best-of-NとStep-wise BoNの両方がモデルの性能を大きく向上させました。具体的には、4つの候補を生成した場合、Step-wise BoNはGPT-4oより2.55%、Best-of-Nは0.36%性能が向上しました。

### o1の異なる課題における推論トークン数

o1の能力が推論に使用するトークン数と関係があるかを調べるため、異なる課題での推論トークン数が計算されました。また、正解した場合と不正解だった場合それぞれの平均トークン数も計算されました。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445_4.png)

異なるタスクにおけるo1の推論トークン数の統計

分析の結果、次のことが明らかになりました。

まず、同じ課題内では、正解の場合と不正解の場合でトークン数に大きな違いは見られませんでした。しかし、異なる課題間では推論トークン数に大きな違いがありました。中でも常識的推論を必要とする課題（HotpotQAとCollie）では、比較的短い推論トークン数で済んでいました。

一方、プログラミング（USACO）や数学（AIME）のような難しい課題では、正しい答えを得るためにより長い推論プロセスが必要とされました。

### 報酬モデルがLLMの検索手法の性能を制限する

Best-of-Nのような（複数の回答を生成し、その中から最も適切なものを選び出す）検索手法では、最適を考えるための報酬モデルが必要です。中でもStep-wiseの手法では、中間段階での誤りが積み重なってしまう可能性があるため、報酬モデルの性能が非常に重要になります。

そこで研究チームは、以下様々な報酬モデルを使ってBest-of-Nの性能を検証しました。

- Skywork-Reward-Gemma-2-27B
- URM-LLaMa-3.1-8B
- GPT-4o
- 人間による評価

HotpotQAでの実験結果では、最初の3つの報酬モデルは15%未満の精度に留まりましたが、人間が評価した場合は33%まで性能が向上しました。一方、Collieでは人間による評価と他の報酬モデルの結果に大きな差は見られませんでした。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445_6.png)

異なる報酬モデルを使用した場合のデータセットスコア比較

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445_7.png)

異なる検索空間でのBoNの結果比較

この結果は報酬モデルの能力が検索手法の性能の上限を決定づける重要な要因となっていることを示しています。HotpotQAにおいて、BoNはo1と同等の結果を出せましたが、より強力な報酬モデルを使用することでさらなる改善が可能であることも分かりました。

### 検索空間も言語モデルの性能の上限を決定する

Best-of-NはAgent Workflowと並んで様々なデータセットで比較的良い性能を示しましたが、その性能はパラメータNによって制限されています。能力の上限を詳しく調べるため、研究チームはHotpotQAでのNの値を増やして実験を行いました。

また、異なる性能レベルのモデルで効果を総合的に評価するため、GPT-4oに加えてQwen2.5-72BとLlama3-70Bでも実験が行われました。N=1,4,8,16と変化させた結果、以下のことが分かりました。

- Nを増やすと、BonCの性能は最初は向上しますが、やがて頭打ちになる
- Qwen2.5とLlama3もHotpotQAで優れた性能を示す
- しかしN>8の場合、モデルの性能は安定するか、むしろ低下する傾向が見られる

研究チームはこの結果を受け、検索手法の性能が報酬モデルと検索空間の両方に関連していると結論付けました。つまり、単にNを増やせば性能が向上するわけではなく、適切な検索空間の設定が重要であることが示唆されています。

### データフィルターの分析

現在の評価用データセットには、異なる言語モデル間の性能差を明確に示せない単純な問題が多く含まれています。そこで研究チームは、HotpotQAとCollieのデータに対してフィルタリングを行いました。

フィルタリング後のデータセットの規模は以下のようになりました。

- HotpotQA：274問
- Collie：226問
- USACO：139問
- AIME：90問

フィルタリングの効果を確認するため、フィルタリング前後でモデルの性能を比較しました。その結果、フィルタリング後のデータセットでは、次のような結果が得られました。

- 全体的にモデルのスコアが低下した
- モデル間の性能差がより明確になった
- 中でもHotpotQAでは、Qwen2.5とGPT-4oの性能差が顕著になった

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445_9.png)

フィルタリング後のベンチマークの統計情報

よってデータフィルタリングの戦略が効果的に機能したことが確認されました。

### o1の数学的能力

o1の数学的能力を総合的に評価するため、o1-preview、o1-web、o1-miniの3つのバージョンを使って、AIME22、AIME23、AIME24の3つのテストで実験が行われました。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445_8.png)

o1モデルのAIME24、AIME23、AIME22での結果

実験結果から以下のことが分かりました。

まずo1-miniが3つのテストすべてで最も優れた性能を示し、約60%の正解率を達成しました。

一方、o1-previewの性能には大きなばらつきが見られました、AIME24では57%の高い正解率でしたが、AIME22とAIME23では約40%の正解率でした。

このように、同じo1でもバージョンによって数学的問題解決能力に顕著な違いがあることが明らかになりました。

## ケーススタディ

研究者らは、o1モデルが実際にどのように問題を解いているのか、具体的な例を通じて詳しく分析しました。

### HotpotQAの事例

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445_10-940x1024.png)

HotpotQAのケーススタディ

HotpotQAは複数の文書を参照して質問に答える課題です。o1は以下のような段階を踏んで解答を導き出していました。

1. まず質問に関連する文書の内容を整理
2. 次に情報を以下3つの観点から分析
	- アトラクションの全体像の把握
	- 別の視点からの情報整理
	- アトラクションの変遷の追跡

なお「変遷の追跡」の部分では、複数の情報をつなぎ合わせた推論が行われていました。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445_13-1024x360.jpg)

生データとフィルタリング後のデータでのLLMの結果比較

### AIMEの事例

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445_14-938x1024.png)

AIMEのケーススタディ

AIME（数学オリンピック）の問題では、単純に小さな問題に分割するだけでなく、以下のように数学的な原理を深く組み合わせて解答を導き出していました。

1. 重要な概念を特定する
2. 制約条件を分析する
3. 数学的公式を適用する
4. 論理的な推論を構築する

### Collieの事例

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445_11.png)

Collieのケーススタディ

Collieは特定の制約条件に従ってテキストを生成するタスクです。o1は推論の各段階で制約条件を意識的に確認しながら、適切なテキスト生成を行っていました。

### USACOの事例

USACOはプログラミングコンテストの問題を解くタスクです。o1は以下のような特徴的なアプローチを行っていました。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77445_12.png)

USACOのケーススタディ

1. まず基本的な枠組みを作り、重要な変数やデータ構造を定義する
2. アルゴリズムによる状態遷移を適用して、最適な解を段階的に導出する
3. 考えられるすべての可能性やシナリオを検討する
4. ループや再帰などの手法を使って、各ステップを厳密に検証する

このように、問題の多面的な側面を包括的にカバーし、効率的に正しい解を生成できていることが確認されました。

## まとめ

本記事では、OpenAIのo1モデルの推論能力を詳細に分析した研究を紹介しました。

研究チームは、o1モデルと既存の推論時計算手法を比較し、o1がほとんどのタスクで優れた性能を示すことを明らかにしました。

特筆すべきは、o1が「自己改善」と「分割統治」を含む6つの推論パターンを使い分けており、これらが性能向上の鍵となっていることです。

- 参照論文URL： [https://arxiv.org/abs/2410.13639](https://arxiv.org/abs/2410.13639)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[IBMから日本語対応の商用可能オープンソースLLM「GRANITE 3.0」公開　8Bから](https://ai-data-base.com/archives/77349)

[LLMには正解例だけでなく、「よくある間違い例」と理由も一緒に教えるのが有効](https://ai-data-base.com/archives/77507)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)