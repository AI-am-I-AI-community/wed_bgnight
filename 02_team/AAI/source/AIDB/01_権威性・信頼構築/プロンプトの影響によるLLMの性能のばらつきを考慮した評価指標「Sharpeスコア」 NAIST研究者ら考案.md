---
title: "プロンプトの影響によるLLMの性能のばらつきを考慮した評価指標「Sharpeスコア」 NAIST研究者ら考案"
source: "https://ai-data-base.com/archives/74842"
author:
  - "[[AIDB Research]]"
published: 2024-08-27
created: 2025-06-13
description: "本記事では、LLMの理解力をより正確に評価するためのアプローチに関する研究を紹介します。研究者らは、プロンプトの小さな違いによるLLMの性能のばらつきを考慮した指標「Sharpe（シャープ）スコア」を考案しました。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、LLMの理解力をより正確に評価するためのアプローチに関する研究を紹介します。研究者らは、プロンプトの小さな違いによるLLMの性能のばらつきを考慮した指標「Sharpe（シャープ）スコア」を考案しました。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74842-1024x576.jpg)

**参照論文情報**

- タイトル：Toward the Evaluation of Large Language Models Considering Score Variance across Instruction Templates
- 著者：Yusuke Sakai, Adam Nohejl, Jiangnan Hang, Hidetaka Kamigaito, Taro Watanabe
- 所属：Nara Institute of Science and Technology

**本記事の関連研究**

- [「ポジティブ思考」プロンプトでLLMの性能向上　さらに自動最適化プロンプトが上をいくが、奇妙な現象も](https://ai-data-base.com/archives/65164)
- [LLMに無礼なプロンプトを使用すると性能が低下するリスクの報告　一部、直感に反する複雑な結果も](https://ai-data-base.com/archives/64959)
- [プロンプトの小さな違いがLLMにもたらすバタフライ効果を調査した結果](https://ai-data-base.com/archives/62566)
- [プロンプトの原則26ヶ条をまとめた報告](https://ai-data-base.com/archives/61417)

## 背景

LLMの”性能評価”には未解決の課題があります。現在使われている評価手法では、プロンプトの違いによるスコアのばらつきが考慮されていません。特定のプロンプトに最適化された評価や評価結果は、多様な指示に従う能力を測るべきLLM評価の本質とはずれています。

問題の原因になっているのは、LLMの評価におけるプロンプトや出力形式の標準化が不十分であることです。

そこで今回研究者らは、複数の指示テンプレートを活用したLLM評価手法を考案しました。テンプレート間のスコア分散を考慮したものであるため、LLMの能力をより公平に（あるいは正確に）測定することを可能にするものです。研究者らは本手法の考案と併せて、英語と日本語を両方含めたデータセットを構築しました。LLMの言語間転移能力（ある言語で学習したスキルや知識を別の言語に適用できる能力）の性能を調べるためです。

この取り組みは出力の安定性や一貫性の評価を高めるものであるため、実用的なLLMアプリケーションを作る上でとても意味のあるものだと考えられています。

アプローチや実験結果を以下で紹介します。

## 評価方法

従来の評価方法の課題を解決するため、研究者たちは指示テンプレートの多様性に着目しました。

そして、以下の特徴を持つデータセットを作成しました。

- 英語と日本語の両方で5種類の言語理解タスクを用意
- 単純な文法判断から複雑な推論まで、さまざまな能力を測定
- 各タスクに対して複数の指示テンプレートを用意し、LLMの柔軟性を評価

主なタスクは以下の通りです。

1. JCoLA/CoLA：文法的に正しい文かどうかを判断する能力を測定
2. JSTS/STS-B：2つの文がどれくらい意味的に似ているかを評価する能力を確認
3. JNLI/MNLI：与えられた前提から正しい結論を導き出せるかを検証
4. JSQuAD/SQuAD：文章を読んで質問に答える読解力を評価
5. JCommonsenseQA/CommonsenseQA：一般常識を用いて推論する能力を測定

データセット作成においては、いくつかの重要な工夫が施されています。

まず、FLANと呼ばれる既存のテンプレートを参考にして、新しい評価用テンプレートが作成されました。言語対応に関しては、最初に英語版のテンプレートを作成し、それを日本語に翻訳することで両言語版のデータセットが用意されました。

さらに、回答形式の統一を図るため、各テンプレートに正規表現が付加され、LLMの回答形式が標準化されています。

最後に、LLMに期待される形式での回答を強制的に生成させるため、Outlinesなどの技術が導入されました。

### 実験設定

実験は、LLMの性能を多角的に評価するためのさまざまな工夫が施されています。評価対象となるLLMは、言語特性に基づいて4つのグループに分類されました。

- 日本語に特化したLLM
- 英語に特化したLLM
- 英語と日本語の両方に対応したLLM
- 英語のモデルを基に日本語の能力を追加学習させたLLM

実験に使用されたモデルの詳しい一覧は以下の通りです。

1. 日本語LLM
	- OpenCALM-7B
	- StableLM-ja-7B
	- StableLM-ja-7B-inst
2. 英語・日本語LLM
	- PLaMO-13B
	- Weblab-10B
	- Weblab-10B-inst
	- LLM-jp-13B
	- LLM-jp-13B-inst
3. 継続学習された英語・日本語LLM
	- MPT-ja-7B
	- ELYZA-Llama-2-7B
	- ELYZA-Llama-2-7B-inst
4. 英語LLM
	- Llama-2-7B
	- Llama-2-7B-inst
	- Llama-2-13B
	- Llama-2-13B-inst

また、実験はゼロショット設定とファインチューニング設定の両方が比べられました。

ゼロショット設定は、モデルが特定のタスクについて事前の学習なしで性能を発揮できるかを評価します。

一方でファインチューニング設定は、タスクに特化した追加学習を行った後の性能を測定します。なおファインチューニングには、計算効率の高いQLoRA手法が採用されました。

また、LLMの出力生成は、異なる生成戦略がLLMの性能にどのような影響を与えるかを比較するために、単純に最も確率の高い単語を選択する貪欲法（グリーディデコーディング）と、特定の規則に従って出力を生成する制約付きデコーディングの両方が使用されました。

さらに、各言語理解タスクの特性に応じて、適切な評価指標が選択されています。LLMの判断と人間の判断がどの程度一致しているかを数値化することが主な目的です。  
例えば、文法性判断タスクであるJCoLAとCoLAでは、正確度に加えてマシューズ [相関係数](https://ai-data-base.com/archives/26481 "相関係数") が用いられました。マシューズ [相関係数](https://ai-data-base.com/archives/26481 "相関係数") は、単純な正答率だけでなく、モデルの判断がどの程度信頼できるかも考慮に入れる指標です。一方、文の類似性を評価するJSTSとSTS-Bタスクでは、ピアソン [相関係数](https://ai-data-base.com/archives/26481 "相関係数") とスピアマン [相関係数](https://ai-data-base.com/archives/26481 "相関係数") が採用されました。

### ”シャープスコア”の考案

研究チームは「シャープスコア」という新しい指標を考案しました。金融界で投資の効率性を測る「シャープレシオ」から着想を得ています。シャープスコアを用いることで、LLMの全体的な性能と、さまざまな指示に柔軟に対応できる能力をより適切に評価できると期待されています。

シャープスコアの特徴は、さまざまな指示テンプレートを使用した際の評価結果のばらつきを考慮している点です。テンプレート間でのスコアの平均値を標準偏差で割ることで算出することにより、LLMの平均的な性能だけでなく、異なる指示に対する応答の一貫性や安定性も評価できるようになりました。

さらに、αというパラメータを導入することで、テンプレート間の分散がどの程度最終的な評価に影響を与えるかを調整できるようになりました。αが0の場合は単純な平均スコアとなり、1以上に設定すると、ばらつきが大きい場合により厳しい評価となります。

シャープスコアはアプリケーションにおけるLLMの信頼性を予測する上で有用になるとされています。

## 実験結果と考察

### ゼロショット設定

#### 言語の適格性判断

JCoLAとCoLAという、LLMの文が文法的に正しいかどうかを判断するタスクでの結果は驚くべきことに、最も性能が高いとされるLLMでさえランダムに答えた場合と同程度の [正解率](https://ai-data-base.com/archives/25930 "正解率") しか達成できませんでした。

この結果は、特別な学習なしでLLMに言語の適格性を判断させるのが非常に難しいことを示しています。

研究者たちは、この予想外の低い成績の理由について考察しました。一つの可能性として、JCoLAとCoLAのデータセットが言語学の専門家によって作成されたことが挙げられています。専門家の判断基準は、一般的な言語使用とは異なる場合があります。つまり、LLMが学習してきた一般的な言語使用パターンと、このタスクで求められる判断基準との間にズレがある可能性があるのです。

この結果は、LLMの言語理解能力には依然として課題があることを示唆しています。

#### 意味的テキスト類似性

Llama-2-13B-instというLLMが、文の意味の類似性を判断するSTS-Bタスクで優れた性能を示しました。さらに驚くべきことに、このモデルは日本語版のJSTSタスクでも同様に高い性能を発揮しました。この結果は、LLMが”意味的類似性”を判断する能力を、ある言語から別の言語へ効果的に転移できることを示唆しています。

#### 読解力

JSQuADという読解力を測るタスクでは、指示調整（特定の指示に従う能力を向上させる学習方法）を行った後、いくつかのモデルで正確さが向上しました。しかし、StableLM-ja-7Bというモデルでは改善が見られませんでした。そのため、事前学習なしの状態では、指示調整に使用するデータの質が重要であることがわかりました。

#### 常識的推論

CommonsenseQAとJCommonsenseQAという常識的推論を測るタスクでは、Llama-2-7B-instとLlama-2-13B-instが言語間で知識を転移する能力をある程度示しました。一方、ELYZA-Llama-2-7B-instは予想外の結果を示しました。このモデルは、事前学習なしの状態では性能が低下しましたが、タスク特化の学習（ファインチューニング）を行うと性能が向上しました。

### ファインチューニング設定

英語のデータセットを使った評価では、Llama2-13Bというモデルが多くのタスクで最高、もしくは2番目に高い性能を示しました。興味深いことに、特別な指示対応学習（指示調整）を受けていないモデルの方が、指示調整を受けたLlama2-13B-instよりも良い結果を出しました。指示調整が必ずしもベンチマークテストの成績向上につながるわけではないことを示唆しています。

日本語のデータセットでは、JSTS（文の類似性判断）、JNLI（自然言語推論）、JSQuAD（読解力テスト）といったタスクで、Llama2-13Bが最高または非常に高い評価スコアを達成しました。英語で学習したモデルが日本語のタスクにも効果的に対応できることを示しており、言語間で能力を転移できる可能性があるということです。

しかし、すべてのタスクで同じ傾向が見られたわけではありません。例えば、JCoLA（文法性判断）タスクではWeblab-10Bが特に高いスコアを示し、JCommonsenseQA（常識的推論）タスクではStableLM-ja-7B-instが際立って高いスコアを達成しました。この結果は、タスクの性質によっては、その言語に特化して開発されたモデルが優位性を持つ可能性があることを示しています。

実験結果はLLMの性能が単純ではなく、モデルの種類、学習方法、そしてタスクの性質によって複雑に変化することを明らかにしています。

### デコーディング方法

LLMの出力生成方法の違いが、その性能にどのような影響を与えるかについても調査が行われました。

ゼロショット設定（事前学習のみ。特定のタスクに対する追加学習を行わない）では、正規表現を用いた制約付きデコーディングが、単純に最も確率の高い単語を選ぶ貪欲法（グリーディデコーディング）よりも高い性能を示しました。一方、タスク特化の学習（ファインチューニング）を行った設定では、貪欲法の方が制約付きデコーディングよりも良い結果を出す傾向が見られました。

何を意味するのか？ゼロショット設定でLLMを評価する際には、出力フォーマットの違いによるエラーを防ぐために制約付きデコーディングを使用することが望ましいと考えられます。

総合的に見ると、LLMの性能評価には多くの要因が影響していることが明らかになりました。タスクの種類、対象言語、出力生成方法（デコーディング）、そして指示対応の特別訓練（指示調整）の有無など、さまざまな要素がLLMの性能を左右します。また、ある言語で学んだ能力を別の言語に応用する言語間転移能力の効果も、タスクによって異なることが示されました。

## テンプレート間の分散を考慮した分析

### 複数テンプレートによる評価

研究チームは、単一のテンプレートでLLMをファインチューニングした場合の評価結果を図で示しました。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74842_8-1024x557.jpg)

まず、JNLI（自然言語推論）とJCommonsenseQA（常識的推論）のタスクでは、回答形式が文字か数字かによって精度に大きな差が出ました。

次に、JSTS（文の類似性判断）とJCoLA（文法性判断）のタスクでは、特定のテンプレートで低いスコアが出る傾向が見られました。さらに、出力を特定の形式に制限する制約付きデコーディングを使うと、一部のモデルとタスクでより安定した結果が得られました。

この結果は、LLMは「与えられた文に適切に応答できていても、期待される形式で正確に答えを出力することが難しい場合がある」ことを示しています。  
つまり、1つのテンプレートで学習させても、ある程度の汎用性は獲得しますが、学習時のテンプレートと評価時に求められる回答形式が異なると、性能にばらつきが生じるということです。

ということは、LLMの性能を正確に評価するためには、1つのテンプレートだけでなく、複数のテンプレートを用いて評価し、その結果のばらつきも考慮することが重要だと分かります。

### テンプレート間の性能分散を考慮した評価指標

#### ランキング

日本語データセットにおいて、シャープスコアのパラメータαを0から2まで0.1刻みで変化させた場合のモデルのランキング変化を下の図で示します。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_74842_9-1024x576.png)

JSQuAD（読解力テスト）とJCommonsenseQA（常識的推論）のタスクでは、αの値を変えてもモデルの順位にあまり変化が見られませんでした。これらのタスクでは異なる指示文（テンプレート）を使っても、モデルの性能が比較的安定していることを示しています。

一方、JNLI（自然言語推論）など他のタスクでは、αの値によってモデルの順位が頻繁に変化しました。これは、使用するテンプレートによって評価スコアに大きなばらつきがあることを意味します。つまり、これらのタスクではモデルの性能が指示文の形式に敏感であることがわかりました。

αの値を大きくすると、テンプレート間でスコアのばらつきが大きいモデルの評価が下がる傾向が見られました。αを大きくしたときにランキングが下がったモデルは、全体的なスコアは高いものの、テンプレートごとの性能にばらつきがある可能性があります。逆に、ランキングが上がったモデルは、より一貫性のある出力を生成できていると考えられます。

そのため、LLMの評価では平均的な性能だけでなく、さまざまな指示文に対する安定性も重要な要素であることが明らかになりました。

なお、英語データセットでも同様の傾向が観察されました。

これらの結果から、（テンプレート間のスコアの平均値だけを考慮した場合と比較して、）分散を考慮したシャープスコアを用いることで、LLMの性能をより適切に評価できることが示されました。また、性能の向上と分散の減少の傾向は必ずしも一致しないことも明らかになりました。

## まとめ

この記事では、LLMの新しい評価方法についての研究を紹介しました。研究者たちは、複数の指示文を使った多言語のデータセットを作り、指示文ごとの結果のばらつきを考慮した「シャープスコア」という新しい評価方法を考え出しました。

実験結果からは、LLMの評価には指示文による結果のばらつきを考えることが大切だとわかりました。また、LLMが別の言語にどれだけ対応できるか、指示に合わせた調整がどのような効果を持つかについても新しい発見がありました。

ただし、この研究にはまだ改善の余地があります。例えば、試されたLLMの種類や言語、タスクの数が限られているという問題も残されています。また、別の評価方法も考えていく必要があります。

- 参照論文URL： [https://arxiv.org/abs/2408.12263](https://arxiv.org/abs/2408.12263)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[モデルとデータの大規模化で変化するLLMのハルシネーション　Google DeepMindの研究](https://ai-data-base.com/archives/74778)

[人間を討論で言い負かすディベート上手なLLMの実装方法](https://ai-data-base.com/archives/74886)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)