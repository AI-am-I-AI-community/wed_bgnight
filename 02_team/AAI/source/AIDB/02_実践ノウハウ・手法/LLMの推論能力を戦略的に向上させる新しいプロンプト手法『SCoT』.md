---
title: "LLMの推論能力を戦略的に向上させる新しいプロンプト手法『SCoT』"
source: "https://ai-data-base.com/archives/75505"
author:
  - "[[AIDB Research]]"
published: 2024-09-11
created: 2025-06-13
description: "この記事では、LLMの推論能力を向上させる新しいプロンプト手法、SCoT（戦略的な思考の連鎖）について説明します。SCoTは、まず問題を解く作戦を考え、作戦をベースとして考え方の道筋を作るといった2段階からなるアプローチです。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

この記事では、LLMの推論能力を向上させる新しいプロンプト手法、SCoT（戦略的な思考の連鎖）について説明します。SCoTは、まず問題を解く作戦を考え、作戦をベースとして考え方の道筋を作るといった2段階からなるアプローチです。

研究グループは、さまざまな課題でSCoTがうまくいくかを試し、通常のCoTと比べて多くの課題でより良い結果が出ることを明らかにしました。

この研究は、LLMの考える力をさらに高められる可能性を示しています。難しい課題にLLMを使う際の知見になるかもしれません。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_75505-1024x576.jpg)

**参照論文情報**

- タイトル：Strategic Chain-of-Thought: Guiding Accurate Reasoning in LLMs through Strategy Elicitation
- 著者：Yu Wang, Shiwan Zhao, Zhihu Wang, Heyuan Huang, Ming Fan, Yubo Zhang, Zhixing Wang, Haijun Wang, Ting Liu
- 所属：Huawei Technologies Ltd., Xi’an Jiaotong University, Nankai University, Shanghai Jiao Tong University

## 背景

LLMの考える力を高めるプロンプト手法としてCoT（思考の連鎖）が注目されています。CoTはLLMに考え方の手順を示すことで、難しい問題を解けるようにするアプローチです。しかし、CoTには問題点があります。同じ問題でも、解き方によって答えの正確さが変わってしまうことがあるのです。つまり中間ステップが間違っていたらその先の答えがやはり間違ってしまうという問題です。

CoTの弱点を補強するために、これまでさまざまな方法が試されてきました。例えば、複数の解き方を試して、一番信頼できる答えを選ぶ方法や、外部の知識を使って考え方を強くする方法などです。しかし、計算に時間がかかりすぎたり、専門家の知識が必要だったりするアプローチは、実際に使うのが難しいです。

そこで今回新しいプロンプト手法「SCoT（Strategic Chain-of-Thought）」が提案されました。SCoTは、「1回の指示で2つのことを行う」のがポイントのプロンプトフレームワークです。まず、問題を解くための最適な戦略を考え出し、次にその戦略を使って質の高い「考え方の道筋」を作り、最終的な答えを導き出します。

新手法SCoTの良いところは、質問を複数回行う必要はなく、外部の知識を必要とせず、1回の指示で効果的に考えられる点です。計算にかかる時間やコストを抑えつつ、LLMの推論能力を高められると期待されています。

さらに、SCoTを文脈内学習（プロンプト内に例を含んで学習させるプロンプト手法）に発展させ、最適な例を自動的に見つける方法も開発されました。実験によると、これでさらに性能が向上しています。

実験では、数学、常識、物理、空間、多段階の考え方など、さまざまな分野の8つのデータセットが使用されました。その結果、多くのモデルで大きな性能向上が確認されました。

以下でSCoTの方法論と実験結果について詳しく紹介します。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_75505_1.png)

人気のある手法とSCoTの比較。SCoTは単一クエリ方式で、外部知識源に依存せず、他のアプローチと区別される

## 方法

SCoT手法を使用するための「戦略的知識」、SCoT手法、そしてフューショットでの文脈内学習への応用について説明します。

### 戦略的知識とは

LLMは、同じ問題に対してさまざまな「考え方の道筋（CoT）」を作り出します。しかし、CoTの質には大きな差があることがあります。

例えば、「-26 < s < 24を満たすすべての整数sの合計を求めよ」という数学の問題を解く場合、2つの方法が考えられます。

1. 数字をペアにして合計を計算する方法
2. 等差数列の和の公式を使う方法

どちらも問題を解けますが、一つ目の方法は途中の計算が複雑で、結果が安定しないことがあります。一方、等差数列の公式を使う方法は、より安定した結果をもたらします。この場合、等差数列の公式が「戦略的知識」に該当します。

このように戦略的知識とは、正確で安定した解決策を導く、はっきりと定められた方法や原則のことを指します。戦略的知識を使用することでCoTの安定性が高まり、結果の全体的な質が向上します。

戦略的知識の特徴は以下のとおりです。

1. モデルが慎重に推論の手順を踏むことで、正確な答えを出せるような体系的な方法を提供する
2. 各手順は複雑すぎず、かつ正確さを保つために十分詳しくあるべき

### 戦略的な思考の連鎖（SCoT）

戦略的知識の考え方に基づいて、LLMの推論の質を高めるプロンプトを使う方法であるSCoTについてまとめます。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_75505_2-1024x436.jpg)

(a) ゼロショットとフューショットSCoTの枠組み。(b) デモンストレーション コーパス の構築方法。

SCoTにおいて、モデルはまず戦略的知識を引き出してから答えを出します。この流れは次の2ステップで説明できます。

1. 問題を解くための最も効果的で効率的な方法を見つけ出す
2. 見つけ出した方法を使って問題を解き、最終的な答えを導き出す

SCoTを実行するためのプロンプトには、下記5つの要素があります。

- 役割
- 作業の流れ
- ルール
- 初期設定
- 課題の入力

「作業の流れ（ワークフロー）」は以下の図で示すように3つの段階に区切ることができます。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_75505_4.png)

数学タスクのプロンプトにおけるワークフローの例

最初の2つは問題解決のための戦略的知識を見つけ出すためのもので、3つ目はその戦略を使って答えを出すことに焦点を当てています。

なお、戦略的知識を見つけ出すためのルールは、分野によって異なります。例えば、数学では効率的な解き方を好みます（等差数列の公式を使うなど）。また物理学では最も関連性が高く簡潔な公式を選びます（F = maを使うなど）。さらに多段階の推論では、問題を適切に分解し、関連する情報を思い出すことに重点を置きます。

### 少ない例から学ぶ戦略的な思考の連鎖

戦略を使って例を選ぶことで、SCoT手法をフューショット学習バージョンに改良します。

フューショット学習バージョン（フューショットSCoT）は、戦略に基づく例の集まりを作ることと、モデルが推論を行うという2つの段階に分かれています。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_75505_3.png)

ゼロショットとフューショットSCoTのプロンプトテンプレート

**段階1：戦略的知識に基づく例の集まりの作成**

この段階は、次の2ステップで行います。

1. 訓練データに対してSCoT手法を適用し、各質問に対応するSCoT回答を作る
2. 生成された回答を正解と比べます。正確な質問とSCoT回答のペアだけを残す

**段階2：モデルの推論**

こちらは以下の3ステップで行います。

1. LLMは問題に関連する戦略的知識を生成する
2. 生成された戦略的知識を使って、段階1で作った例の集まりを検索する
3. 選ばれた例を入力プロンプトに組み込むことで、モデルは提供された例に基づいて最終的な予測を生成するよう導かれる

## 実験設定

SCoTの性能を確かめるために実験が行われました。

### データセットとタスク

数学、物理、常識、多段階推論、空間的推論などの分野を含む、幅広い推論関係のデータセットを集めました。

**数学と物理**

- 数学：MathQA、AQuA、GSM8K、MMLU-high-school-mathなど
- 物理：ARC Challenge

**常識と多段階推論**

- 常識：CommonsenseQA（CSQA）
- 多段階：StrategyQA（SQA）

**空間的推論**

- Tracking Object（Object）（あまり一般的ではないが、面白い種類の考え方のタスクを代表するもの）

ただし、フューショットSCoTは、MathQA、AQuA、GSM8K、ARCの4つのデータセットだけで実験されました。例の集まりを作るのに十分な大きさの訓練データと正解データが必要だったからです。

### モデル

- Llama3シリーズ（Llama3-8B、Llama3-70B、Llama3.1-8B、Llama3.1-70B）
- Llama2シリーズ（Llama2-7B、Llama2-13B、Llama2-70B）
- Mistral-7B
- Qwen2シリーズ（Qwen2-7B、Qwen2-72B）
- ChatGLM4-9B

ChatGLM4-9Bはおしゃべり向けで、他のモデルは指示に従うように調整されています。

### 比較対象

比較対象として、ゼロショットプロンプト、Self-Consistency、Step Backという手法が使用されました。

（参考： [『プロンプトレポート』OpenAIなどが作成した調査報告書　〜その1　重要な用語と各種プロンプト手法〜](https://ai-data-base.com/archives/70953) ， [LLMにまず前提から尋ることで出力精度を向上させる『ステップバック・プロンプティング』と実行プロンプト](https://ai-data-base.com/archives/56671) ）

ただしStep Backは5つのデータセットでのみ実験されました。他のデータセットには適していなかったためです。

なお、性能を測る指標としては「正確さ」が採用され、各モデルで3回の独立した推論の平均結果として計算しました。

## 実験結果

### 全データセットでの結果

2つのモデル（Llama3-8BとMistral-7B）を使って、全てのデータセットで実験しました。主な結果は以下の通りです。

- SCoTは、ほとんどのタスクで普通のCoTより良い成績を示した
- 中でもGSM8Kデータセットでは、正確さが52.11%から73.16%に大きく向上した
- Tracking Objectというデータセットでは24.13%も成績が良くなっや
- ただし、Llama3-8BモデルはARCデータセットで2.6%成績が下がった

全体的に、Llama3-8Bモデルは平均6.92%、Mistral-7Bモデルは平均3.81%成績が良くなりました。

また、フューショットCoTではさらに良い成績が出ました。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_75505_6-1024x337.png)

Llama3-8BとMistral-7Bを使用した全データセットにおける精度(%)

### 全モデルでの結果

7つの異なるモデルを使って、3つのデータセットで実験しました。結果は以下の通りです。

- ほとんどのモデルで、SCoTを使うと成績が良くなった
- 成績の向上は1.11%から24.13%の範囲だった
- ただし、Llama3.1-8BモデルのMMTUタスクでは、SCoTを使うと少し成績が下がった

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_75505_7-1024x189.png)

MMLU、SQA、Tracking Objectデータセットにおける7つのモデルの精度(%)

### モデルの大きさの影響

モデルの大きさがSCoTの効果にどう影響するかを調べました。

- 全ての大きさのLlama2モデルで、SCoTを使うと成績が良くなった
- しかし、モデルが大きくなるほど、SCoTによる成績の向上が少し小さくなる傾向があった
- 大きなモデルは、SCoTを使わなくても戦略的な知識を含む答えを出す可能性が高いことがわかった

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_75505_5.png)

Llama2シリーズの異なるスケールのモデルを使用した3つのデータセットにおける精度(%)

### 要素ごとの効果

SCoTのさまざまな要素（役割、作業の流れ、構造など）がどのように効果を発揮するかを調べました。その結果、役割を追加したり、作業の流れを組み込んだり、プロンプトを整形したりすると、少しずつ成績が良くなりました。またフューショットCoTでは、例の数を増やすと成績が少し良くなるか、変わらないことがわかりました。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_75505_8.png)

SCoTプロンプトコンポーネントのアブレーション研究結果

### 具体例の分析

モデルが出した戦略的知識が適切かどうかを詳しく調べました。その結果、数学の問題では、SCoTは不等式を使って問題を解く傾向がありました。

また物理の問題では、SCoTは正しい公式を選ぶのに成功しました。

最後に多段階推論が必要な問題では、SCoTは全体的な文脈を考えて答えを出しました。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_75505_10-1-1024x575.png)

異なるドメインにおけるCoTとSCoTが生成した推論パスの比較

### 効率性の分析

SCoTの効率性も分析しました。その結果、SCoTは、問題を解く前に1回だけ戦略を考えるので、複数回質問する方法よりも効率的とわかりました。ただし1回だけ質問する方法と比べると、出力が少し長くなる可能性があります。また実験では、SCoTの出力の長さは普通のCoTの1.03倍から1.8倍の範囲で、平均して約1.5倍でした。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_75505_9.png)

SCoTとCoT 0-shot手法のトークン長比較

## 考察

SCoTの考え方が本当に効果的かを確かめるため、人間が作ったのではなく、コンピューター（Qwen2-72B）が自動で作ったSCoTのプロンプトでも実験してみました。AQuAというデータセットで試した結果は次のとおりです。

1. コンピューターが自動で作ったSCoTプロンプトは、人間が作ったものほど良い成績ではなかった
2. しかし、普通のCoT（思考の連鎖）よりは良い成績だった

具体的な数字を見ると、

- 普通のCoT：29.13%
- 人間が作ったSCoT：33.60%
- コンピューターが作ったSCoT：31.89%

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_75505_11.png)

自動生成されたプロンプトを使用した精度(%)

この結果から、SCoTの考え方自体が効果的で、人間が手を加えなくても、ある程度成績を良くできることがわかります。将来的にはSCoTのプロンプトを自動で作ることも可能性があります。

## まとめ

この記事では、LLMの考える力を高める新しい方法、SCoT（戦略的な思考の連鎖）について紹介しました。SCoTは、まず問題を解く戦略を考え、それから答えを出すという2段階で構成するアプローチです。

研究チームは8つの異なるデータセットでSCoTの効果を確かめました。その結果、普通のCoT（思考の連鎖）と比べて、多くの課題でより良い結果が出ることがわかりました。中でもGSM8KとTracking Objectsというデータセットで正確さが大きく向上しました。

さらにフューショットのSCoTも検証され、さまざまな大きさのモデルでも一貫して効果があることがわかりました。

この研究結果は、プロンプトの工夫次第でLLMの推論能力をさらに高められる可能性を示しています。

- 参照論文URL： [https://arxiv.org/abs/2409.03271](https://arxiv.org/abs/2409.03271)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[AIコーディング補助ツール（GitHub Copilot）で開発者の生産性が26%向上 Microsoft・アクセンチュアなど3社の大規模調査結果](https://ai-data-base.com/archives/75407)

[100人以上の研究者が実験参加　LLMは人間より優れた研究アイデアを思いつくのか？](https://ai-data-base.com/archives/75562)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)