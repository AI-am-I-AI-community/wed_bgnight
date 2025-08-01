---
title: "LLMはRAGコンテキストと事前知識のどちらに依存する？"
source: "https://ai-data-base.com/archives/71857"
author:
  - "[[AIDB Research]]"
published: 2024-06-28
created: 2025-06-13
description: "RAGによって情報が取得された時、モデルは内部の知識とどう折り合いをつけているのでしょうか？研究者らは特殊な方法によって、モデルが外部コンテキストと内部知識のどちらに依存しているかを詳しく調べました。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

RAGによって情報が取得された時、モデルは内部の知識とどう折り合いをつけているのでしょうか？研究者らは特殊な方法によって、モデルが外部コンテキストと内部知識のどちらに依存しているかを詳しく調べました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71857-1024x576.jpg)

**参照論文情報**

- タイトル：From RAGs to rich parameters: Probing how language models utilize external knowledge over parametric information for factual queries
- 著者：Hitesh Wadhwa, Rahul Seetharaman, Somyaa Aggarwal, Reshmi Ghosh, Samyadeep Basu, Soundararajan Srinivasan, Wenlong Zhao, Shreyas Chaudhari, Ehsan Aghazadeh
- 所属：University of Massachusetts, Amherst, Microsoft, University of Maryland, College Park

**本記事の関連研究** ：

- [包括的なRAG評価ベンチマーク『CRAG』Metaなどが開発](https://ai-data-base.com/archives/70850)
- [RAGの失敗パターン7選と教訓9箇条](https://ai-data-base.com/archives/69154)
- [小さなRetrieverとLLMの組み合わせによる実用的なワークフロー生成システム　またはRAGで幻覚を減らす手法](https://ai-data-base.com/archives/68219)
- [RAGにおいてLLMが「役立たない情報を無視」できるようにする『RAFT』QAタスクで従来の手法を大幅に上回る結果を達成](https://ai-data-base.com/archives/66269)

## 背景

LLMの活用が広がる中で、外部知識を組み込んで推論能力を高める「検索拡張生成(RAG)」が注目を集めています。ユーザーの質問に対してより適切な回答を生成できるように、外部のデータソースから関連情報を検索し、その情報をモデルの入力に追加する手法です。

RAGは、LLMの幻覚（事実と異なる情報の生成）を軽減し、最新の情報や専門知識を取り入れる上で効果的だと考えられています。しかし、RAGが実際にどのようにLLMの推論プロセスに影響を与えているのかについては、まだ十分に理解されていません。

これまで、LLMの内部動作を解明しようとする研究は進められてきました。例えば、モデル内の特定の隠れ層が事実の予測にどのように寄与しているかを調べる「因果追跡」や、モデルのパラメータを直接編集して知識を更新する手法などが開発されてきました。

そんな中、今回研究者らは、LLMが事実に基づく質問に答える際に、モデルに組み込まれた知識とRAGによって提供される外部情報をどのように使い分けているのかを分析しました。

以下で詳しく紹介します。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71857_1-1024x575.jpg)

## LLMの内部動作を解析する手法

LLMが事実に基づく推論をする際の知識の利用方法を明らかにするために3つの手法が組み合わせて使用されました。

### 1\. 因果追跡（Causal Tracing）

LLMの中で「どの部分が重要な役割を果たしているか」を調べる手法です。

例えばあなたが複雑な機械の中身を調べているとします。そして、その機械のある部品が、出力結果にどれだけ影響を与えているかを知りたいとします。因果追跡は、そのような調査をLLMに対して行う方法です。

以下のような手順で行われます。

a) まず、LLMを普通に動かします。これを「クリーンな実行」と呼びます。  
b) 次に、調べたい部品（LLMの特定の部分）を取り外して動かします。これは「汚染された実行」と呼びます。  
c) 最後に、取り外した部品を一つずつ元に戻していきます。そして、各部品を戻すたびに機械の出力がどう変わるかを観察します。これは「復元された実行」と呼びます。

この過程で、各部品（LLMの各部分）がどれだけ重要かを数値化します。それが「間接効果（IE）」です。さらに、多くの例で同じ実験を繰り返し、平均を取ります。これが「平均間接効果（AIE）」で、より信頼性の高い重要度の指標となります。

手順をまとめると以下のようになります。

1. 分析対象のLLM（例：GPT-3のような事前学習済みモデル）を用意する
2. 「エッフェル塔はどこにありますか？」のような質問文を準備する
3. 質問をモデルに入力し、通常通り処理させる（クリーンな実行）
4. モデルの各層の隠れ状態（hidden states）の値を記録する
5. 同じ質問文の一部（例：「エッフェル塔」）をランダムな文字列に置き換える
6. 汚染された入力をモデルに与え、処理させる（汚染された実行）
7. 汚染された実行時の隠れ状態も記録する
8. 汚染された入力を使用し、クリーンな実行で記録した隠れ状態の値を、一つずつ、一層ずつ元に戻していく（復元された実行）
9. 各層について、クリーンな実行の出力確率と復元された実行の出力確率の差を計算する（間接効果：IE）
10. 多数の異なる入力に対して上記のプロセスを繰り返し、各層のIEの平均を取る（平均間接効果：AIE）
11. AIEの値が大きいほど、その層が重要であると判断する

### 2\. 注意貢献メカニズム（Attention Contribution Mechanism）

LLMは、入力された文章の各部分にどれだけ「注目」するかを決める仕組み（注意機構）を持っています。注意貢献メカニズムは、その「注目の仕方」を詳しく調べるものです。

例えば、「エッフェル塔はどこにありますか？」という質問に答える際、LLMがどの単語に最も注目しているかを調べます。特に、質問の主語（「エッフェル塔」）から、答えを生成する最後の部分へどれだけ注目しているかを数値化します。  
するとLLMが質問に答える際、どの情報を最も重要視しているかが分かります。

計算のステップは以下の通りです。

1. 分析対象のトランスフォーマーベースのLLMを用意する
2. 分析したい質問文を用意する
3. 質問文をモデルに入力し、通常通り処理させる
4. 各層の各注意ヘッドの注意重み（attention weights）を記録する
5. 主語トークン（例：「エッフェル」）から最後のトークンへの注意重みを抽出する
6. これらの重みに、対応する値ベクトル（value vectors）を掛け合わせる
7. 結果を全ての注意ヘッドと層にわたって合計する
8. 上記で得られた注意貢献ベクトルのL2ノルムを計算する
9. 得られたノルムの値が大きいほど、その主語トークンが最終出力に大きく貢献していることを示す

### 3\. 注意ノックアウト（Attention Knockout）

LLMの中の「情報の道筋」のうち、どれが最も重要かを調べる手法です。

例えばあなたが複雑な道路網を持つ都市の交通計画者だとします。どの道路が最も重要か知りたいと思ったら、どうするでしょうか？一つの方法は、特定の道路を一時的に封鎖して、交通がどれだけ混乱するかを見ることです。  
注意ノックアウトも同じ原理で、LLMの中の特定の「情報の道筋」を一時的に遮断（ノックアウト）します。そして、LLMの出力がどれだけ悪化するかを調べます。出力が大きく悪化した場合、その「道筋」が重要だと分かります。以下のような手順で進めます。

1. 分析対象のトランスフォーマーベースのLLMを用意する
2. 分析したい質問文を用意する
3. 通常通りモデルに質問を入力し、その出力と確率を記録する（これがベースライン性能となる）
4. モデルの特定の層、特定の注意ヘッドを選択する
5. 選択した注意ヘッドの重みを-∞（非常に大きな負の値）に設定する（その注意ヘッドが事実上無効化される）
6. ノックアウトしたモデルに同じ質問を入力し、出力と確率を記録する
7. ベースライン性能とノックアウト後の性能を比較します。正解の確率がどれだけ低下したかを計算する
8. 性能低下が大きいほど、ノックアウトした注意ヘッドが重要だったことを示す
9. 異なる層や注意ヘッドに対して同じプロセス（手順4から8）を繰り返し、モデル全体の重要な接続を特定する

※ただし上記の方法論はあくまで補足で、本研究のメイントピックは実験結果です。

## 実験で使用されたモデルとデータセット

まず、モデルに関しては、2つのLLMが使用されました。

**Phi-2 (2.7B)**

比較的小規模ながら高性能なLLMとして知られています。パラメータ数は27億で、Microsoft社によって開発されました。

**LLaMA-2 (7B)**

Meta社が開発したオープンソースのLLMで、70億のパラメータを持っています。

上記2つのモデルは、異なる [コーパス](https://ai-data-base.com/archives/26324 "コーパス") （テキストデータの集合）で訓練されており、必然的にパラメトリックな知識（モデルに組み込まれた知識）に違いがあります。この違いを利用することで、RAG（検索拡張生成）が事実に基づく質問に与える影響を幅広く調査できます。なお、オープンソースモデルを選択することで、因果媒介（モデルの内部動作を解析する手法）の測定が容易になります。

データセットに関しては、「Knowns Fact Dataset」が使用されました。1,209の事実に基づく質問が含まれており、各レコードは以下の形式になっています。

*主語(subject)、関係(relation)、目的語/属性(object/attribute)*

例えば、「エッフェル塔はどこにありますか？」という質問であれば、「エッフェル塔」、「位置」、「パリ」となります。

さらに、RAGのコンテキスト（外部から取り込む情報）を生成するために、GPT-4を用いて合成的にデータが作成されました。RAGコンテキスト内の各セグメントの長さや、属性（目的語）の出現をコントロールするためです。  
なお、以下の制約が設けられました。

1. 各セグメントは20語で構成される
2. 属性（答え）は5つのセグメントのうち1つにのみ出現する
3. 元の質問文はコンテキスト内に含まれない

上記の制約は、品質保証の手法を用いて厳密に守られるよう管理されました。

## 2つの発見

RAGがLLMの推論プロセスにどのような影響を与えるか、実験の結果、主に2つのことが明らかになりました。

### 発見1：RAGコンテキストがある場合、モデルの内部知識の使用が大幅に減少

LLaMa-2とPhi-2の両モデルを対象に分析を行ったところ、RAGコンテキスト（外部から提供される関連情報）が与えられた場合、モデルに内蔵された知識（パラメトリックメモリ）の使用が著しく減少することが明らかになりました。

具体的な分析結果は以下の通りです。

1. LLaMa-2モデルでは、モデル内部の処理を担う [MLP](https://ai-data-base.com/archives/26372 "多層パーセプトロン（MLP）") （ [多層パーセプトロン](https://ai-data-base.com/archives/26372 "多層パーセプトロン（MLP）") ）の重要度を示す指標（平均間接効果：AIE）が、RAGコンテキストがない場合と比較して約5分の1にまで低下しました。
2. Phi-2モデルでも同様の傾向が観察され、RAGコンテキストが提供された場合、モデルの内部知識の利用が最小限に抑えられました。

上記の結果から、LLMは、RAGコンテキストという外部情報が利用可能な場合、モデル自身が持つ知識よりも、その外部情報を優先的に活用する傾向があることが示唆されました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71857_2-1024x270.png)

検索されたコンテキストがある場合、言語モデルは MLP のパラメトリックメモリにほとんど依存しないことを示す図。RAGシナリオと通常のケースでの からの平均間接効果を比較。

### 発見2：RAGコンテキストによる情報源の変化

RAGコンテキストが存在する場合、LLMの最終出力に影響を与える情報の流れが変化することが明らかになりました。具体的には、モデルが質問文の主語よりも、RAGコンテキスト内の関連情報（属性）を重視するようになることが分かりました。

主な観察結果は以下の通りです。

**質問の主語への注目度の変化**

- LLaMa-2モデルでは、RAGコンテキストがある場合、質問の主語への注目度が約38%減少しました。
- Phi-2モデルでは、この減少がより顕著で、約85%も低下しました。

**RAGコンテキスト内の関連情報の重要性**

- LLaMa-2モデルでは、RAGコンテキスト内の関連情報への注目度が、質問の主語への注目度の約1.3倍になりました。
- Phi-2モデルでは、この差がさらに大きく、約2倍にまで達しました。

**情報源の重要性の検証**

- 質問の主語からの情報流を遮断しても、モデルの予測精度はほとんど低下しませんでした（5%未満の低下）。
- 一方、RAGコンテキスト内の関連情報からの情報流を遮断すると、LLaMa-2で20%、Phi-2で25%の精度低下が見られました。

これらの結果から、RAGコンテキストが提供された場合、LLMは質問文の主語からの情報をほぼ無視し、代わりにRAGコンテキスト内の関連情報に大きく依存することが明らかになりました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71857_3-1024x207.png)

検索されたコンテキストがある場合、最後のトークンの残差ストリームがクエリ内の主語トークンからより少ない情報を得ることを示す図。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_71857_4-1024x450.png)

検索されたコンテキストがある場合、クエリ内の主語から最後のトークンへの注意の重みをノックアウトしても最小限の影響しかないことを示す図。

総合的に見ると、RAGコンテキストが利用可能な場合、LLMは自身の内部知識をほとんど使用せず、主に外部から提供された情報に基づいて回答を生成することが分かりました。

この「近道」的な振る舞いは、LLaMa-2とPhi-2の両モデルで一貫して観察され、RAGがLLMの推論プロセスに与える影響の大きさを示しています。

## 結論

### 主な発見

1. RAGコンテキストが提供されると、LLMは自身の内部知識（パラメトリックメモリ）への依存度が大幅に低下する
2. LLMは質問文の主語よりも、RAGコンテキスト内の関連情報を優先的に活用する傾向がある
3. この「近道」的な振る舞いは、調査した両モデル（LLaMa-2とPhi-2）で一貫して観察された

### 今後の課題

1. より長いRAGコンテキストを使用した場合のLLMの振る舞いの調査
2. 質問の主語と関連情報の位置が推論に与える影響の分析
3. 指示調整されたモデルやRLHF（人間のフィードバックによる [強化学習](https://ai-data-base.com/archives/26125 "強化学習") ）で調整されたモデルへの分析の拡張
4. 実際の検索結果を用いた場合の、ノイズの多いコンテキストがLLMの推論に与える影響の調査

## まとめ

本記事では、RAGがLLMの事実推論に与える影響を調査した研究を紹介しました。LLaMa-2とPhi-2を用いた分析により、RAGコンテキストが利用可能な場合、LLMは内部知識よりも外部情報に依存することが明らかになりました。なお今回は短いコンテキストのみで分析され、また人工的なデータが使用されているため、今後はより実践的な条件での調査が課題とされています。

このような研究を積み重ね、LLMの挙動に関する知見がさらに深まっていくことが期待されます。

- 参照論文URL： [https://arxiv.org/abs/2406.12824](https://arxiv.org/abs/2406.12824)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[RAGにおいて長文を検索することで一気に効率を上げるアプローチ『LongRAG』](https://ai-data-base.com/archives/71774)

[LLMにおける通説への提言](https://ai-data-base.com/archives/71978)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)