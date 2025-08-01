---
title: "Claude 3などのLLMはコンテキスト内学習によって線形回帰・非線形回帰問題タスクもこなす"
source: "https://ai-data-base.com/archives/67496"
author:
  - "[[AIDB Research]]"
published: 2024-04-12
created: 2025-06-13
description: "GPT-4やClaude 3といった最先端の性能を持つLLMが、回帰問題をどれほど解けるのかが調査されました。実験の結果、LLMは、回帰問題タスクに特化した機械学習モデルに匹敵する性能を発揮しました。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

GPT-4やClaude 3といった最先端の性能を持つLLMが、回帰問題をどれほど解けるのかが調査されました。

実験の結果、LLMは、回帰問題タスクに特化した機械学習モデルに匹敵する性能を発揮しました。  
LLMに対しては回帰問題の解き方を細かく教えたのではなく、問題と答えの例をいくつか見せただけ（Few-Shotのコンテキスト内学習）でした。

なお回帰問題とは、一連の入力に対して傾向を予測する統計的手法です。直線で表せるものを [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") 、曲線で表すものを非 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") と言います。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_67496_thum-1024x576.jpg)

**参照論文情報**

- タイトル：From Words to Numbers: Your Large Language Model Is Secretly A Capable Regressor When Given In-Context Examples
- 著者：Robert Vacareanu, Vlad-Andrei Negru, Vasile Suciu, Mihai Surdeanu
- 所属：University of Arizona, Technical University of Cluj-Napoca

## 背景

LLMの「コンテキスト内学習」と呼ばれる能力に注目が集まっています。少ない例（コンテキスト）から新しいタスクを学習する能力のことを指します。

多くの研究者が、このコンテキスト内学習の仕組みを解明しようと研究を進めています。その中で、コンテキスト内学習と機械学習の基本アルゴリズムとの関係を探る研究も盛んです。理論的には、LLMがコンテキスト内学習で、例えば勾配降下法（機械学習の基本アルゴリズムの一種）を近似的に実装できることは示されているのですが、実際のLLMがそのような振る舞いをしているかどうかは議論の余地があり明らかにはされていません。

また、コンテキスト内学習の性能を評価する研究も行われています。例えば、例が増えるにつれてLLMの予測がどう改善されるか、どのようなタイプの関数をLLMが学習できるかなどが調べられています。

これまでの研究の多くは、シンプルなモデルや、タスク専用に学習されたモデルを使ったものでした。事前学習済みのLLMを使って、実践的なタスクにおけるコンテキスト内学習の性能を評価した研究はあまりありません。

そこで今回、研究者らは事前学習済みのLLM（GPT-4やClaude 3など）を使って、回帰問題におけるコンテキスト内学習の性能を評価することにしました。

### 回帰問題とは

回帰問題とは、データから数値を予測するタスクのことです。例えば、過去のデータから将来の売上を予測するのは回帰問題の一例です。

回帰問題には、大きく分けて [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") と非 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") の2種類があります。 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") は、データの間に直線的な関係があると仮定するシンプルなモデルです。一方、非 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") は、データの間により複雑な関係（曲線的な関係など）を仮定するモデルです。

LLMは本来、文章の生成や理解を得意とするAIなので、このような数値予測のタスクにどの程度対応できるのかは自明ではありません。LLMがコンテキスト内学習のみで回帰問題を解けるのかどうかは、実証的に確かめる必要があります。

今回は [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") と非 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") の両方におけるコンテキスト内学習の性能が評価され、伝統的な機械学習モデルとの詳細な比較も行われました。

以下で詳しく紹介します。

## 実験設定について

### データセット

研究チームは、LLMの回帰問題に対する能力を評価するために、3種類のデータセットを用意しました。

#### 線形回帰データセット

1つ目は、 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") のデータセットです。 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") は、前述の通り、入力変数と出力変数の関係が直線で表せるモデルです。例えば、「広告費を増やすと売上が比例して増加する」というような関係を表現できます。

研究者らは、入力変数の次元（変数の数）を1〜20の間で変化させ、そのうち実際に予測に関与する変数（情報量のある変数）の数も調整しました。問題の難易度を細かく制御するためです。

#### 非線形回帰データセット

2つ目は、非 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") のデータセットです。こちらも前述の通り、変数間の関係が曲線的になるより複雑なモデルを指し、例えば「気温が上がると、ある程度まではアイスクリームの売上が伸びるが、あまりに暑すぎると売上が下がる」などは非 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") に該当します。

研究者らは、Friedmanが提案した3つのベンチマーク問題を使用しました。機械学習アルゴリズムの性能比較によく用いられる、代表的な非線形関数です。

また、 [ニューラルネットワーク](https://ai-data-base.com/archives/26117 "ニューラルネットワーク") を使って新たな非線形データセットを生成しLLMが学習時に見たことのないデータでも評価するようにしました。

#### 数値以外の入力を含む回帰データセット

3つ目は、数値以外の入力を含む回帰データセットです。LLMが抽象的なタスクにも対応できるかを確認するために用意されました。

記号（アルファベット）と数値を対応づけたうえで、記号の組み合わせから数値を予測するようなデータセットを作成しました。

### 評価に使用されたモデル

評価には、GPT-4やClaude 3など最新のLLMに加えて、 [ランダムフォレスト](https://ai-data-base.com/archives/26130 "ランダムフォレスト") や [サポートベクターマシン](https://ai-data-base.com/archives/26152 "サポートベクターマシン（SVM）") などの伝統的な機械学習モデル、およびランダム予測などのシンプルなベースラインモデルが用いられました。

#### 実験に使用されたLLM

1. Claude 3
2. GPT-4
3. DBRX
4. Llama2
5. Yi 34B
6. Mistral 7B
7. Mixtral8x7B
8. CodeLlama70B

#### 教師ありモデル

1. [ランダムフォレスト](https://ai-data-base.com/archives/26130 "ランダムフォレスト")
2. [勾配ブースティング](https://ai-data-base.com/archives/26343 "勾配ブースティング")
3. [AdaBoost](https://ai-data-base.com/archives/26552 "AdaBoost")
4. SVM（ [サポートベクターマシン](https://ai-data-base.com/archives/26152 "サポートベクターマシン（SVM）") ）
5. [KNN](https://ai-data-base.com/archives/26147 "k近傍法（KNN）") （k-最近傍法）
6. マルチレイヤーパーセプトロン
7. [リッジ回帰](https://ai-data-base.com/archives/26421 "リッジ回帰")
8. [ラッソ回帰](https://ai-data-base.com/archives/26416 "ラッソ回帰")
9. カーネルリッジ
10. スプライン

なお、教師あり学習とは、入力と出力のペアからモデルを学習する機械学習の手法です。 [ランダムフォレスト](https://ai-data-base.com/archives/26130 "ランダムフォレスト") は多数の [決定木](https://ai-data-base.com/archives/26121 "決定木") を組み合わせたモデル、 [サポートベクターマシン](https://ai-data-base.com/archives/26152 "サポートベクターマシン（SVM）") はデータを高次元空間で分類するモデルです。

#### 教師なしのベースライン（単純なヒューリスティックモデル）

1. 平均
2. 最後の値を使用
3. ランダム選択

なおヒューリスティックとは、経験則に基づく簡易な手法。必ずしも最適解を保証しませんが、実用上は十分な解が得られることが多いです。

全てのモデルに同じ学習データが与えられ、同じテストデータで評価が行われました。LLMにはデータを例示として与え、他のモデルにはデータで学習を行わせています。

## 線形回帰タスクの実験結果

研究者らは、4種類の [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") 問題を用意しました。問題ごとに、全体の変数の数と、実際に予測に関与する変数（情報量のある変数）の数が異なります。

LLMには、50組の入力と出力のペアを例示データとして与えました。そして、51番目のデータの出力を予測するように求めたのです。この実験を100回繰り返し、平均値と信頼区間を算出しました。

なお信頼区間とは、統計学で用いられる概念で、真の値が含まれる可能性が高い範囲を示します。例えば、「95%信頼区間が2〜4」という場合、真の値が2〜4の間に入る確率が95%であることを意味します。

実験の結果、LLMは、例示データのみで優れた [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") の性能を示すことが明らかになりました。特に注目すべきは、以下の2点でした。

1. LLMは、シンプルなヒューリスティックモデルよりも常に優れた性能を示した。
2. LLMは、 [ランダムフォレスト](https://ai-data-base.com/archives/26130 "ランダムフォレスト") やニューラルネットワークなどの教師あり学習モデルをしばしば上回った。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67496_1.png)

3つの大規模言語モデルと4つの従来の教師あり学習法による 線形回帰 の比較

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67496_2-1024x254.png)

LLM（大規模言語モデル）、従来の教師ありモデル、および教師なしモデルの性能を、異なるランダム回帰タスクで比較した結果

情報量のある変数が1つだけの回帰問題では、Claude 3が教師あり学習モデルを含めても3番目に良い性能を示しました。 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") モデルにわずかに及ばないものの、 [ランダムフォレスト](https://ai-data-base.com/archives/26130 "ランダムフォレスト") やニューラルネットワークを大きく上回る結果だったのです。Claude 3は回帰のために特別に設計されたわけではなく、単にテキストデータで学習されただけなので驚きです。

さらに、最先端性能のLLMだけでなく、Mixtral 8x7Bのようなオープンソースモデル（学習済みのパラメータが公開されているLLM）でも優れた性能が確認されました。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67496_3-1024x377.png)

4つの異なる 線形回帰 データセットにおける各方法のランキング （色の濃淡で性能の良さが示されており、緑色が良い性能を、赤色が悪い性能を表しています）

## 非線形回帰タスクの実験結果

Friedmanが提案した3つの非 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") のベンチマーク問題（Friedman #1, #2, #3）を用いてLLMを評価した結果、LLMは非 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") でも優れた性能を示すことが明らかになりました。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67496_4-1024x365.png)

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67496_5-1024x352.png)

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67496_6-1024x362.png)

特筆すべきこととして、Claude 3は、Friedman #2において、 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") 以外の全ての教師あり学習モデルを上回っていました。Friedmanのベンチマーク問題は難易度が高いと言われているため、研究者らは驚きに値する結果だとしています。

しかし、ここで疑問が生じます。LLMは学習時にFriedmanのベンチマーク問題を見ていたのではないでしょうか？もしそうなら、LLMの高い性能は単に記憶によるものかもしれません。

そこで研究チームは、LLMが学習時に見たことのない新たな非 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") データセットで、汎化性能を評価しました。

実際に用意されたのは、直線的な関係に周期的な揺らぎを加えたデータセット（Original #1）や、Friedmanのベンチマーク問題をもとに新たな非線形関数を定義したデータセット（Original #2）などです。

その結果、LLMは新しいデータセットでも優れた性能を示し、中でもOriginal #1では、上位10モデルのうち8つがLLMでした。LLMの高い性能が単なる記憶力によるものではないことを示唆しています。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67496_7.png)

新しい非 線形回帰 関数の一例（線形の傾向に振動を加えたもの）

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67496_8-1024x511.jpg)

非 線形回帰 データセットにおける各モデルのランク

**注意点**

ただし、ランダムに初期化されたニューラルネットワークから生成されたデータセットでは、LLMの性能が相対的に低下することも確認されました。LLMにとって苦手なタイプのデータが存在することを示唆する結果です。

とはいえ、全体的にはLLMが非 [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") 問題でも高い性能を発揮するという傾向が示されました。

## LLMはどのようにして回帰タスクに適応しているのか

研究者たちは、LLMがいかにFew-Shot学習（少ない例から学ぶ）しているかを分析することにしました。

### 適応速度の評価

LLMは例示データを与えるだけで回帰問題を解けることがわかりました。では、例示データの数を増やすとLLMの予測性能はどのように変化するのでしょうか？

この問いに答えるために、研究チームは機械学習の分野で使われる「累積損失（cumulative regret）」という概念を用いました。  
累積損失とは、モデルが最適な予測からどの程度ずれているかを表す指標です。損失が小さいほど、モデルの予測が最適に近いことを意味します。

理想的には、モデルは例示データが増えるにつれて、最適な予測に近づいていくはずです。つまり、累積損失の増加率が徐々に小さくなっていくのです。

研究者らは、累積損失の増加率を評価するために、3つの曲線を当てはめました。

1. 線形（ax+b）
2. 平方根（a√x+b）
3. 対数（alogx+b）

分析の結果、高性能なLLM（Claude 3やGPT-4など）は、多くのデータセットで対数的な累積損失の増加率を示すことがわかりました。

![](https://ai-data-base.com/wp-content/uploads/2024/04/AIDB_67496_9-1024x304.png)

異なる非 線形回帰 データセットにおけるLLMの累積損失の変化

対数的な増加率とはすなわち、数が増えるにつれて、増加の割合が徐々に小さくなっていくことです。

つまり、LLMは例示データから効率的に学習し、最適な予測に近づくことができる現象が確認されました。LLMは少ない例示データで迅速に適応しますが、より多くのデータが与えられればさらに性能を向上させられるということです。

この結果は、LLMがオンライン学習に類似した振る舞いをすることを示唆しているといいます。オンライン学習とはデータが順次与えられる状況で、逐次的にモデルを更新していく学習方法です。新しいデータに素早く適応できるのが特徴です。

ただし、今回の分析はあくまで経験的なものであり、理論的な保証はありません。また、分析に使ったデータセットの数は限られていることに注意です。

## まとめ

本記事では、LLMの回帰問題に対する能力を評価した研究を紹介しました。

研究チームは、LLMが例示データのみから線形および非線形の回帰問題を解けることを明らかにしました。高性能なLLM（Claude 3）は、 [ランダムフォレスト](https://ai-data-base.com/archives/26130 "ランダムフォレスト") やニューラルネットワークなどの機械学習モデルに匹敵する、あるいはそれ以上の性能を示しました。

さらに、データが増えるにつれて最適な予測に近づいていくこともわかりました。

今回の結果から研究チームは、LLMが [自然言語処理](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") だけでなく他のタスクにも応用できる可能性があることを述べています。

- URL： [https://arxiv.org/abs/2404.07544](https://arxiv.org/abs/2404.07544)
- GitHub： [https://github.com/robertvacareanu/llm4regression](https://github.com/robertvacareanu/llm4regression)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[時系列分析におけるLLMの可能性](https://ai-data-base.com/archives/67378)

[どのLLMが最も長文要約性能が高いのか評価した実験結果　データセットと要約ノウハウも公開](https://ai-data-base.com/archives/58765)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)