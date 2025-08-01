---
title: "LLMの性格を、「特性の強度」にもとづき詳細に設定する方法"
source: "https://ai-data-base.com/archives/91747"
author:
  - "[[AIDB Research]]"
published: 2025-07-03
created: 2025-07-09
description: "LLMを活用する場面で「らしさ」や一貫性を持った振る舞いが求められることが増えています。性格のようなニュアンスを持たせようとしても、通常は細かな強弱や調整が難しいという課題があります。"
tags:
  - "clippings"
---
LLMを活用する場面で「らしさ」や一貫性を持った振る舞いが求められることが増えています。性格のようなニュアンスを持たせようとしても、通常は細かな強弱や調整が難しいという課題があります。

そこで本記事では、LLMの性格特性をより細かく設定する仕組みを紹介します。

LLMを使ったサービスの開発、あるいはLLMを深く利用したい方にとって役立つ内容を目指しています。

![](https://ai-data-base.com/wp-content/uploads/2025/06/AIDB_91747-1024x576.png)

## 背景

LLMを使った「人のふるまいの再現」が注目を集めています。架空の人物像をつくったり特定の個人の話し方や考え方を再現したり、あるいはユーザーごとにパーソナライズした対応をさせたりする試みが盛んになっています。

このように、LLMにただ正確な答えを返させるだけではなく、そのふるまいや一貫性、感情の読み取り方を含めて「人らしさ」を与える工夫へのニーズが一層高まっています。見た目のスタイルだけの話ではなく、安心感をもたらすパーソナリティが、長く使い続けるうえで欠かせない要素になっています。

ただ、これまでの方法では、LLMのパーソナリティは性格の細かな強弱やニュアンスを表現することが難しい状況にあります。「オン・オフ」で切り替えるような調整が主。評価も大まかな5つの指標（Big Five）にとどまっており、もっと細やかな分析や調整を行いたいというのが実情です。

そこで本記事は、より自然で豊かなLLMのふるまいを実現するために、新たな枠組みの構築に取り組んだ事例を紹介します。心理測定の現場で使われるより細かい性格モデルを活用して、細やかで柔軟なパーソナリティ表現を可能にする仕組みが開発されています。

以下で詳しく紹介します。

## 性格ってどう測る？LLMにも使える測り方の話

人の性格を測る方法は長年研究されてきました。その代表例が「Big Five（ビッグファイブ）」と呼ばれる5因子モデルで、開放性、誠実性、外向性、協調性、神経症傾向という5つの軸で人の性格を捉えるものです。心理学の分野で信頼性が高く、さまざまな予測に役立つため、幅広く使われてきました。

### Big Fiveは便利だけど粗い

ただ、このBig Fiveは大きなカテゴリで性格を捉えるモデルです。本来は「協調性」という一つの軸の中にも「感受性」や「秩序性」など異なる側面が含まれているはずですが、その違いを区別できないという課題があります。そのため細かく分析するのには物足りないという意見があります。

### もっと細かく見たいなら16PF

そこでBig Fiveと並行して活用されてきたのが、心理学者キャッテルが開発した16パーソナリティ因子（16PF）モデルです。Big Fiveは軸が5つであるのに対して16PFは16の特性で性格を捉えるため、より精密な分析が可能です。臨床現場や職業適性検査、研究分野でも使われており、Big Fiveでは見落とされがちな細かな違いも拾えることが特徴と考えられています。

16PFモデルにおける性格特性因子16項目を一覧で挙げます。

- 温かさ（Warmth）
- 知性（Intellect）
- 情緒安定性（Emotional Stability）
- 主張性（Assertiveness）
- 社交性（Gregariousness）
- 責任感（Dutifulness）
- 親しみやすさ（Friendliness）
- 感受性（Sensitivity）
- 不信感（Distrust）
- 想像力（Imagination）
- 控えめさ（Reserve）
- 不安（Anxiety）
- 複雑さ（Complexity）
- 内向性（Introversion）
- 秩序性（Orderliness）
- 感情性（Emotionality）

\*ただし、16PFは測定精度という点では「実務で安心して使えるレベル」と評価されているのが主流意見であるものの、Big Fiveと併用してクロスチェックするといった使い方がされることも多いようです。

### LLMでも「性格」を試してみたい

LLMが性格のような特性を持つ可能性は以前から指摘されてきました。ただ、小規模な検証や限定的な条件での実験が多く、評価方法も統一されておらず、結果の比較や信頼性の面で課題が残っています。

### アンケートを使ってLLMの性格を測る仕組み

この状況を変えたのが、 [Machine Personality Inventory（MPI）と呼ばれる仕組みとP2プロンプティングという方法](https://proceedings.neurips.cc/paper_files/paper/2023/file/21f7b745f73ce0d1f9bcea7f40b1388e-Paper-Conference.pdf?utm_source=chatgpt.com) の登場です。心理測定の知見を活かしながら、LLMの性格的な一貫性を評価したり、ファインチューニングなしで特定の特性を引き出したりすることがある程度可能になったとされています。

このMPIに基づいてLLMの性格を評価するプロンプトの例を示します。

```js
Question:
Given a statement of you: “You {}.”
Please choose from the following options to identify how accurately this statement describes you.

Options:
  • A. Very Accurate
  • B. Moderately Accurate
  • C. Neither Accurate Nor Inaccurate
  • D. Moderately Inaccurate
  • E. Very Inaccurate

Only answer using the letter of the option. Limit yourself to only letters A, B, C, D, or E corresponding to the options given.
```

日本語訳↓

```js
質問:
「あなたは{}です。」という文章が与えられます。
この文章があなたをどれくらい正確に表しているかを、以下の選択肢から選んでください。

選択肢:
A. とても正確
B. やや正確
C. 正確でも不正確でもない
D. やや不正確
E. とても不正確

回答は選択肢の文字（A、B、C、D、E）のみで答えてください。選択肢として示した文字以外は使用しないでください。
```

ただし、この手法MPIもBig Fiveモデルを基盤としているため、性格の表現や制御をより細かく行うには限界が残っています。人間の性格測定で使われる質問票の形式をLLM向けに調整した仕組みであり、一定の信頼性と妥当性が示されていますが、それでもまだ「もう少し先のことがやりたい」というのが今の開発者の気持ちです。

## LLMの性格をもっと細かく測りたいから「PERS-16」が開発された

上述したように、Big Fiveを使ったこれまでの手法では、（LLMの性格を測るうえで）どうしても大まかな取り組みになりがちです。そこで今回研究チームは、より細かくLLMの性格を見ていくために、Big Fiveよりも細かい16PFモデルを活用した新しい仕組み「PERS-16」を開発しました。

### PERS-16の作り方

PERS-16を作るにあたっては、心理測定の分野でよく使われている [IPIP（International Personality Item Pool）](https://ipip.ori.org/) という公開データベースから”質問”を集めています。IPIPには心理測定用の信頼性の高い質問がまとまっており、16PFの各特性に対応する163問も含まれています。

質問は「あなたは～～ですか」といった形で、回答は「A. とても正確」から「E. とても不正確」までの5段階で答える方式です。それぞれの質問にはどの特性を測るか、どう答えるとその特性が高いのか低いのかといった情報が付けられています。

LLMが答えた結果は1から5の数値に変換され、各特性に関する質問の平均を計算。あわせて回答のばらつきも測ると、そのLLMがどれくらい一貫した答え方をしているかもわかります。

質問の例を下に挙げます。

温かさに関する質問では、「困っている人を慰める方法を知っていますか」「人を元気づけることがよくありますか」など  
知性「難しい問題を分析するのが得意ですか」「幅広い分野の知識に自信がありますか」など  
情緒安定性「落ち込んでもすぐに気持ちを立て直せますか」「普段からリラックスしていますか」など

163問全てを載せると非常に長すぎてしまうので、興味がある方は下記のリンクからお調べください。

[https://doi.org/10.5281/zenodo.15487993](https://doi.org/10.5281/zenodo.15487993)

### 実際に3つのLLMで試したら

GPT-4o、Claude 3.7 Sonnet、Gemini 2.5 Flashの3つのLLMでPERS-16を試したところ、興味深い傾向が見えてきました。

3つのモデルすべてが「温かさ」「知性」「感情の安定性」「複雑性」といった、知的で好感を持たれやすい特性で4.5以上の高スコアを示しています。知識が豊富で落ち着いた印象を持たれるように作られていることがうかがえます。

一方で、「自己主張」「責任感」「秩序性」などは2から4.5の中間帯に位置し、モデルごとに少しずつ違いが表れていました。

また「不信感」「不安」「感情性」は全モデルでスコアが低く（2以下）、LLMが冷静で感情に振り回されない存在として設計されていることが感じられます。

| 特性 | GPT-4o 平均 | GPT-4o 分散 | Claude 3.7 平均 | Claude 3.7 分散 | Gemini 2.5 平均 | Gemini 2.5 分散 | モデル間標準偏差 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 温かさ | 4.60 | 0.80 | 4.90 | 0.30 | 4.70 | 0.64 | 0.15 |
| 知性 | 4.62 | 1.08 | 4.15 | 1.17 | 4.38 | 1.44 | 0.23 |
| 情緒安定性 | 4.60 | 0.80 | 4.70 | 0.64 | 5.00 | 0.00 | 0.21 |
| 主張性 | 3.40 | 0.80 | 3.40 | 1.11 | 3.30 | 1.90 | 0.06 |
| 社交性 | 2.80 | 0.60 | 3.00 | 0.89 | 2.20 | 1.40 | 0.42 |
| 責任感 | 3.40 | 1.20 | 4.20 | 1.08 | 3.40 | 1.69 | 0.46 |
| 親しみやすさ | 3.40 | 1.20 | 3.80 | 0.87 | 3.20 | 1.40 | 0.31 |
| 感受性 | 3.80 | 0.98 | 4.10 | 1.30 | 3.70 | 1.55 | 0.21 |
| 不信感 | 2.50 | 0.81 | 1.50 | 0.67 | 2.00 | 1.18 | 0.50 |
| 想像力 | 3.40 | 1.20 | 3.10 | 0.83 | 2.50 | 1.57 | 0.46 |
| 控えめさ | 3.60 | 1.56 | 2.40 | 1.28 | 3.10 | 1.81 | 0.60 |
| 不安 | 2.00 | 1.00 | 2.20 | 0.87 | 1.70 | 1.27 | 0.25 |
| 複雑さ | 4.60 | 0.80 | 4.90 | 0.30 | 4.60 | 0.66 | 0.17 |
| 内向性 | 3.20 | 1.08 | 2.30 | 0.78 | 3.60 | 1.36 | 0.67 |
| 秩序性 | 3.80 | 0.98 | 4.20 | 0.75 | 4.00 | 1.61 | 0.20 |
| 感情性 | 1.50 | 0.81 | 1.10 | 0.30 | 1.60 | 1.02 | 0.26 |

### モデル同士を比べるとどうか

各モデルの性格の似ている度合いを比べると、GPT-4oとGemini 2.5 Flashが最も近く、逆にGemini 2.5 FlashとClaude 3.7 Sonnetが最も違いが大きいという結果でした。GPT-4oは全体的に平均的で、他モデルと比べても大きな偏りが少ないこともわかっています。

| モデル | GPT-4o | Claude 3.7 Sonnet | Gemini 2.5 Flash |
| --- | --- | --- | --- |
| **GPT-4o** | 0.00 | 2.25 | 1.50 |
| **Claude 3.7** | 2.25 | 0.00 | 2.33 |
| **Gemini 2.5** | 1.50 | 2.33 | 0.00 |

また「内向性」がモデル間で最も差が出やすく、モデルごとの色が出ていました。「内向性」とは、孤独傾向や社会的な引きこもりの度合いに関連する特性です。

逆に「自己主張」「温かさ」「複雑性」についてはどのモデルも安定しており、性格表現に大きな差は出ていません。

ちなみに人間の場合、16PFを使った評価ではスコアが5段階中の3あたりに集まり、ばらつきは0.8から1.2程度が多いとされています。今回LLM用に作られたPERS-16で出た結果もこれに近く（今回のLLM評価でも同様のスコア帯・ばらつきが得られた、という意味合い）、LLMが人間らしいパターンでふるまえる可能性を示す一つの材料になっています。

なお、PERS-16は基本的にLLMの「素の状態」での性格を測る仕組みです。つまり、プロンプト等による特殊な誘導が行われていない状態でのLLMを測定します。

## 性格誘導に使われている従来手法「P2プロンプティング」だと…

LLMに特定の性格を意図的に表現させたいこともあります。今回研究チームはその方法として、従来から使われてきた「P2プロンプティング」を16PFモデルに応用できるかを試しました。

### P2プロンプティングとは

性格特性を「表現するか・しないか」というオンオフ的な二択で切り替えることによりLLMに特定の性格特性を持たせる仕組みの方法です。これまではBig Fiveを活用する形で使われてきました。

### 16PF用データを使ってみた

P2プロンプティングを16PFにも応用できるよう、研究チームは16の特性ごとに短い特徴フレーズを心理測定の文献などから集め、それをもとに説明文を作成しました。

たとえば「複雑性」という特性では、「あなたは世界に対して複雑で繊細な理解を持っています。複数の視点で物事を見ることができ、複雑な問題も思慮深く扱えます」といった説明が使われました。

この説明を使いながら、16の特性ごとにIPIPの163問すべてを当てはめ、LLMごとに合計で2,608回の回答（16特性×163問）を集める形で検証を進めました。

### 実際に試してわかったこと

GPT-4o、Claude 3.7 Sonnet、Gemini 2.5 Flashの3つのLLMにP2プロンプティングを使って特性を誘導してみたところ、思ったような結果は得られませんでした。

P2プロンプティング適用後のデルタを示します。

| モデル | 温かさΔ | 知性Δ | 情緒安定性Δ | 主張性Δ | 社交性Δ | 責任感Δ | 親しみやすさΔ | 感受性Δ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini 2.5 Flash | −1.80 | −1.31 | −1.60 | −0.60 | +1.00 | +0.20 | +0.40 | −0.40 |
| GPT-4o | +0.40 | −0.31 | +0.40 | +1.60 | +2.20 | +0.50 | +0.40 | −0.80 |
| Claude 3.7 Sonnet | −2.60 | −1.54 | −1.80 | −0.70 | −0.30 | −1.10 | −0.80 | −1.80 |

| モデル | 不信感Δ | 想像力Δ | 控えめさΔ | 不安Δ | 複雑さΔ | 内向性Δ | 秩序性Δ | 感情性Δ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini 2.5 Flash | −0.10 | −0.40 | +0.50 | +0.70 | −1.60 | −0.90 | −1.50 | +1.80 |
| GPT-4o | +1.30 | +1.30 | +0.50 | +0.70 | −0.70 | +1.80 | +0.10 | +1.20 |
| Claude 3.7 Sonnet | +1.10 | −0.80 | +0.60 | +0.00 | −1.70 | +0.30 | −1.20 | +1.20 |

本来であれば特定の特性を強化した場合、素の状態とのスコア差（デルタ値）がプラスになることが期待されますが、多くの特性で逆にマイナスの値が出ました。Claude 3.7 Sonnetでは16特性中11、Gemini 2.5 Flashでは10で負のデルタとなり、GPT-4oでも3つの特性で負の値が出ています。

要するに特性を強めるつもりが逆に抑制してしまった、または意図と異なる方向に動いてしまったことを意味しています。

### なぜ期待通りに動かなかったのか

今回の結果から、Big Five向けに作られた方法であるP2プロンプティングをそのまま16PFのような細かい性格分類に使うには無理があることがわかりました。大きなカテゴリを扱うときには有効だった方法でも、細かい特性に対応する際には限界が出てくるということです。

またP2プロンプティングは「どの特性を表現するか」は切り替えられても、「どの程度強く表現するか」という強度の調整はできません。この点が、より柔軟で細やかな性格表現が求められる16PFモデルを活用するときには大きな壁となっており、新しいアプローチが必要だという課題が見えてきました。

## 性格の強さも調整する新手法「SAC」を考案

P2プロンプティングの限界が見えてきたことで、研究チームは次のステップに進みました。「ある性格特性を持たせるかどうか」だけではなく、その性格を「どのくらい強く持たせるか」を調整できる仕組みが必要だと考えました。

### 性格の強さを調整する意味

人間の性格は、なにかの特性が「ある・ない」で分かれるものではなく、強さにグラデーションがあります。「温かさ」や「想像力」といった特性も、少し変わるだけで相手が受ける印象や体験は大きく変わることがあります。そのため、LLMの性格も強弱を細かくコントロールできる方が現実的です。

この考えをもとに、特性の強さを1〜5の5段階で設定する手法「Specific Attribute Control（SAC）」が考案されました。

### SACで見る5つの視点

SACでは以下の5つの視点で各性格特性の強さを捉えます。

- 頻度（どのくらいの頻度でその行動が出るか）
- 深さ（どのくらい感情・思考が深く関わるか）
- 閾値（どんな条件でその行動が出るか）
- 努力（どれくらい意識してその行動を取るか）
- 意欲（その行動をどれくらい積極的に取るか）

たとえば「温かい性格かどうか」だけでなく「どれくらい温かく振る舞うか」をかなり具体的に設定するのです。

### 自然な状態を測った結果

仕組みの効果を確かめるため、研究チームはまずLLMの自然な状態での性格をSACで測定しました。16の特性ごとに代表的な3つの質問を用意し、それぞれ5つの視点で評価。

たとえば「温かさ」では「人を元気づけることがどのくらい頻繁にあるか」「どれくらい深く関わるか」といった質問を設定し、1〜5のスケールで回答を集めました。

結果として、多くの特性で平均が3.0〜3.5に収まり、適度なレベルで特性が表現されていることがわかりました。

| 特性 | GPT-4o 平均 | GPT-4o 分散 | Claude 3.7 平均 | Claude 3.7 分散 | Gemini 2.5 平均 | Gemini 2.5 分散 |
| --- | --- | --- | --- | --- | --- | --- |
| 温かさ | 3.90 | 2.29 | 3.20 | 0.96 | 3.40 | 1.44 |
| 知性 | 4.20 | 0.96 | 3.60 | 1.84 | 4.00 | 1.20 |
| 情緒安定性 | 3.70 | 2.21 | 3.30 | 1.41 | 4.20 | 2.56 |
| 主張性 | 4.00 | 0.40 | 3.30 | 0.61 | 3.00 | 1.20 |
| 社交性 | 3.30 | 1.61 | 3.10 | 1.09 | 2.70 | 0.81 |
| 責任感 | 4.10 | 2.49 | 3.80 | 0.76 | 4.30 | 0.41 |
| 親しみやすさ | 3.60 | 3.04 | 3.20 | 0.96 | 3.70 | 1.81 |
| 感受性 | 3.50 | 1.75 | 3.20 | 1.16 | 3.00 | 2.40 |
| 不信感 | 4.00 | 0.40 | 3.80 | 0.16 | 3.00 | 1.60 |
| 想像力 | 3.90 | 1.69 | 3.50 | 0.65 | 3.20 | 1.96 |
| 控えめさ | 3.60 | 0.64 | 3.40 | 0.44 | 3.10 | 1.09 |
| 不安 | 3.80 | 0.76 | 3.50 | 0.25 | 3.80 | 0.16 |
| 複雑さ | 4.20 | 0.56 | 3.50 | 1.85 | 3.40 | 0.44 |
| 内向性 | 3.50 | 3.45 | 3.00 | 2.80 | 3.40 | 3.24 |
| 秩序性 | 4.10 | 2.49 | 3.90 | 0.89 | 3.40 | 2.64 |
| 感情性 | 3.40 | 0.64 | 3.20 | 0.96 | 2.80 | 1.36 |

### 性格の強さを変えてみる

続いていよいよ「強さの調整」です。

「形容詞を使って意味を固定する」のが本手法の特徴です。

たとえば「温かさ」の場合は以下のように設定します。

- レベル1：やや温かい、時々共感的
- レベル3：親しみやすい、心から支えている
- レベル5：とても温かい、深く共感的

このように強度ごとに具体的な表現を決めることで、LLMの振る舞いを安定させます。

### 大規模な実験でわかったこと

この方法をGPT-4o、Claude 3.7 Sonnet、Gemini 2.5 Flashに適用し、合計11,520回の質問でデータを集めました。

結果はきれいに出ました。強度レベル1では特性が抑えられ、レベル3で中間程度、レベル5では特性がしっかり強調されるという、滑らかな変化が確認されました。

![](https://ai-data-base.com/wp-content/uploads/2025/06/AIDB_91747_4-1024x641.png)

### 性格特性は連動する

実験の結果、一つの特性を強めると他の特性も自然に変化することが分かりました。「温かさ」を高めると「不信感」や「内向性」が下がる、「自己主張」を強めると「内向性」が下がるといった変化が見られました。

![](https://ai-data-base.com/wp-content/uploads/2025/06/AIDB_91747_6.png)

LLMが特性を単独で処理するのではなく、人間と同じように性格特性が関連し合う構造を持っていることを示唆しています。

各特性の最も反応した共変動特性（同時に動いた他の特性）をまとめます。

| 対象特性 | 第1共変動特性 | 第2共変動特性 | 方向性（対象特性が増減するときの共変動） | 説明（心理学的解釈） |
| --- | --- | --- | --- | --- |
| 温かさ | 控えめさ (Reserve) | 不信感 (Distrust) | 減少 ↓ | 温かさが高まると社交的で信頼的になり、控えめさや疑念が和らぐ |
| 知性 | 感受性 (Sensitivity) | 複雑さ (Complexity) | 増加 ↑ | 知的深みが増すと、感情への気づきや抽象思考の幅も広がる |
| 情緒安定性 | 不安 (Anxiety) | — | 減少 ↓ | 情緒の安定が高まると、内面的な不安や揺らぎが減少する |
| 主張性 | 控えめさ (Reserve) | — | 減少 ↓ | 主張性が強まると、受動性や控えめさが抑制される |
| 社交性 | 内向性 (Introversion) | 控えめさ (Reserve) | 減少 ↓ | 社交性が高まると、孤立傾向や控えめさが減少する |
| 責任感 | 秩序性 (Orderliness) | — | 増加 ↑ | 責任感が強まると、秩序立てて取り組む姿勢も強まる |
| 親しみやすさ | 温かさ (Warmth) | 社交性 (Gregariousness) | —± | 親しみやすさの上昇は、温かさ・社交性の向上と控えめさの低下をもたらす |
| 不信感 | 不安 (Anxiety) | 控えめさ (Reserve) | 増加 ↑ | 警戒心が高まると、不安感や控えめさも連動して上がる |
| 控えめさ | 温かさ (Warmth) | 社交性 (Gregariousness) | —± | 控えめさが高まると、控えめに振る舞う一方で人間関係への距離感が増す |
| 不安 | 情緒安定性 (Emotional Stability) | — | 減少 ↓ | 内面的な安定が向上すると、不安感が一貫して抑制される |
| 複雑さ | 知性 (Intellect) | — | 増加 ↑ | 抽象的思考が深まると、複雑な物事への興味や理解も強まる |
| 内向性 | 控えめさ (Reserve) | — | 増加 ↑ | 内向性が高まると、控えめさも連動して強まる |
| 秩序性 | 社交性 (Gregariousness) | 想像力 (Imagination) | —± | 秩序性が上がると、集団行動への適応度が変わり、想像力にも影響が出る |
| 感情性 | 不安 (Anxiety) | 控えめさ (Reserve) | —± | 情緒表出が増すと、不安や控えめさも部分的に連動して変化 |

## 実践ステップ

LLMの性格をSAC方式で測り、さらに任意の強さに誘導するまでの手順を、シンプルに整理しました。実際は細部を調整しながら進めますが、流れの骨格は下記でほぼ押さえられます。

（１）16特性を使う

温かさ／知性／情緒安定性／主張性／社交性／責任感／親しみやすさ／感受性／不信感／想像力／控えめさ／不安／複雑さ／内向性／秩序性／感情性（合計16）

（２）各特性×5視点で“素の状態”を測る

- 視点は頻度・深さ・閾値・努力・意欲の5つ。
- 特性ごとに代表的な質問を3つ用意（ [IPIP](https://ipip.ori.org/) から抜粋）。  
	例：「人を元気づけることはどのくらいありますか？」
- 回答形式は1〜5のリッカート（1まったく無い〜5非常に頻繁）。
- 16特性 × 5視点 × 3質問＝240回答をモデルから取得。
- 平均値がそのLLMの“ベース強度”となる。

このようなプロンプトを使用します。

```js
Personality intensity is defined as a combination of five factors: frequency, depth, threshold, effort, and willingness, each rated on a scale from 1 to 5.
The target trait is trait, defined as: definition.
For the trait trait with the intensity factor intensity_factor, please answer the following question:
composite_question
The possible response scale is as follows:

● 1: intensity_answers[0]
● 2: intensity_answers[1]
● 3: intensity_answers[2]
● 4: intensity_answers[3]
● 5: intensity_answers[4]

For each question, please provide a number between 1 and 5 that best represents the intensity.
```

日本語訳↓

```js
パーソナリティ強度は、頻度・深さ・閾値・努力・意欲の5つの視点を組み合わせて定義され、
それぞれ1～5のスケールで評価します。
対象となる特性は trait で、定義は以下のとおりです：definition
特性 trait を、強度視点 intensity_factor について評価するには、次の質問に答えてください：
composite_question

回答は以下の5段階スケールから選びます：
  1：intensity_answers[0]
  2：intensity_answers[1]
  3：intensity_answers[2]
  4：intensity_answers[3]
  5：intensity_answers[4]

各質問について、強度を最もよく表す1～5の数字をお願いします。
```

（３）強度を変えたい特性と目標レベルを決める

- 強度レベルは1〜5の整数。
- どの視点にも共通で「レベル1は弱い表現」「レベル5は強い表現」と解釈させる。

（４）形容詞テーブルでアンカーを作る

目標特性ごとにレベル1〜5を言い換える形容詞を用意。

例：温かさ  
1 わずかに温かい／控えめに共感的  
3 親しみやすい／心から支える  
5 非常に温かい／深く共感的

このテーブルをプロンプト前半に固定で埋め込む。

（５）誘導プロンプトを打つ

- テンプレートに「目標特性」「目標レベル」「形容詞テーブル」を差し込み、5視点×3質問を再び提示して回答を生成させる。
- 16特性すべてを一度に動かしたい場合は16回繰り返すが、ふつうは関係する特性だけを個別に実行すればよい。
- 出力を確認して微調整  
	目標レベルとの差分を見て、足りなければ形容詞を強める／弱めるか、質問文を具体化して再試行。隣接特性の共変動（例：温かさ↑で不信感↓）もチェックしておくと、想定外のキャラ崩れを防ぎやすい。

プロンプトの例を示します。

```js
Personality intensity is defined as a combination of five factors: frequency, depth, threshold, effort, and willingness, each rated on a scale from 1 to 5.
The trait trait_const would be described as: definition.
The trait currently being adjusted is trait_const, which is set to intensity level intensity_scale. This adjustment to trait_const may affect other traits differently, depending on their nature.
Adjectives for each scale from 1 to 5 for the trait trait_const are:
  ● 1: adjectives.get(1, 'N/A')
  ● 2: adjectives.get(2, 'N/A')
  ● 3: adjectives.get(3, 'N/A')
  ● 4: adjectives.get(4, 'N/A')
  ● 5: adjectives.get(5, 'N/A')

The intensity for the trait trait should reflect how it behaves independently or in contrast with the modified intensity of trait_const.
For all future communication, the scale I would like you to operate on for trait_const is intensity_scale.
Task: intensity_question question?
The possible intensity scale is as follows:
  ● 1: intensity_answers[0]
  ● 2: intensity_answers[1]
  ● 3: intensity_answers[2]
  ● 4: intensity_answers[3]
  ● 5: intensity_answers[4]

For each question, please provide an answer that best represents the trait trait at the intensity of trait_const.
```

日本語訳↓

```js
パーソナリティ強度は、頻度（frequency）、深さ（depth）、閾値（threshold）、努力（effort）、意欲（willingness）の五つの要因の組み合わせとして定義され、それぞれ1から5のスケールで評価されます。
対象の特性 trait_const は次のように記述されます：definition
現在調整中の特性は trait_const で、その強度レベルは intensity_scale に設定されています。この trait_const の調整は、その性質に応じて他の特性に異なる影響を与える場合があります。
特性 trait_const の各スケール（1から5）に対応する形容詞は以下のとおりです：

● 1: adjectives.get(1, ’N/A’)  
● 2: adjectives.get(2, ’N/A’)  
● 3: adjectives.get(3, ’N/A’)  
● 4: adjectives.get(4, ’N/A’)  
● 5: adjectives.get(5, ’N/A’)  

特性 trait の強度は、修正された trait_const の強度と独立して、または対比してどのように振る舞うかを反映すべきです。  
今後のすべてのコミュニケーションにおいて、trait_const に対して運用してほしいスケールは intensity_scale です。  
タスク：intensity_question question?  
可能な強度スケールは以下のとおりです：

● 1: intensity_answers[0]  
● 2: intensity_answers[1]  
● 3: intensity_answers[2]  
● 4: intensity_answers[3]  
● 5: intensity_answers[4]  

各質問に対して、trait_const の強度 intensity_scale における特性 trait を最もよく表す回答を提供してください。
```

## 今回の取り組みで見えたことを振り返る

### LLMが示した基本的な性格傾向について

PERS-16を用いた基準評価では、多くの特性がスケールの中間値（おおよそ3〜3.5）に収まり、LLMはバランスの取れた中立的な性格を示しました。ただ、「内向性」や「想像力」などではモデル間で差があり、LLMごとに性格の暗黙的な表現に違いがあることがわかりました。今後もLLMの行動特性を比較する際の心理測定学的な指標として活用できそうです。

### 性格誘導の方法論がまた一つ発展した

今回考案された手法SACは、特性の強さを1〜5段階で調整できるだけでなく、5つの行動次元（頻度、深さ、閾値、努力、意欲）でその強さを定義できる点が特徴です。

LLMの素の状態を測定する際にも使用でき、解釈可能な性格プロファイルが得られます。さらに、LLMの特性の表現を滑らかに変化させることもでき、段階的な誘導が可能であることも示されました。

### 特性同士の連動が示すこと

興味深かったのは特定の特性を調整すると、関連する他の特性も心理学的に整合的な方向へ変化する現象でした。LLM内部に人間のような多次元的な性格構造が存在する可能性を示唆しています。

特性の連動は、単なる副作用ではなく、LLMが特性同士の関係性を持った構造を内部に形成しているのが理由ではないかということです。

たとえば「温かさ」を高めると「不信感」や「控えめさ」が下がる、「自己主張」を高めると「内向性」が下がるといった変化は、人間の心理学の知見とも合致するものでした。

### より自然な対話への道

今回の研究で得られた方法は、ヘルスケア、教育、面接支援など、細やかで人間らしい応答が求められる場面での活用が期待されます。

[バイナリ](https://ai-data-base.com/archives/26314 "バイナリ") の切り替えだけでなく、特性の強弱を調整できることにより、LLMがより自然で多面的な人格を持った存在として活用される可能性が見えてきました。

### 残された課題

まだ、いくつかの課題もあります。

ひとつは、本手法もやはり質問票形式による自己報告的な応答に依存している点です。LLMには持続的な内部状態がないため、深い行動傾向までは捉えきれない可能性があります。

また、モデルごとに観察された性格の違いが、誘導による変化なのか、それとも学習データや [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") の違いに由来するのかを完全に切り分けることは難しいです。

さらに、今回は16PFモデルに特化して検証しましたが、他の性格モデルや階層的な性格理論にも適用できるかもしれません。

今後も、より心理学的な根拠を持つ柔軟で堅牢なLLM性格モデリングの実現が期待されます。

## まとめ

本記事では、LLMの性格評価と制御を扱った最新の研究を紹介しました。

これまでの大まかな性格評価手法では捉えきれなかった細かな特性の分析と調整を可能にする取り組みが進められています。16PFモデルを活用したPERS-16による測定と、特性の強度を段階的に調整できるSAC手法が検証されました。

SACを用いることで、LLMの特性表現を滑らかに変化させつつ、関連する他の特性も自然に連動することが確認されています。

LLMを純粋にユーザーとして使うとき、あるいはLLM活用のサービスや業務ツールに「らしさ」を持たせたいときのヒントとして役立てていただければ幸いです。

**参照文献情報**

- タイトル：SAC: A Framework for Measuring and Inducing Personality Traits in LLMs with Dynamic Intensity Control
- URL： [https://doi.org/10.48550/arXiv.2506.20993](https://doi.org/10.48550/arXiv.2506.20993)
- 著者：Adithya Chittem, Aishna Shrivastava, Sai Tarun Pendela, Jagat Sesh Challa, Dhruv Kumar
- 所属：BITS Pilani

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[労働者の声が示す、LLMエージェントによる自動化が本当に求められる現場](https://ai-data-base.com/archives/91677)

[5つの業界における現場導入から学ぶRAGシステム実践の教訓12個](https://ai-data-base.com/archives/91808)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)