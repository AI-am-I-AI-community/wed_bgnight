---
title: "LLMの「知っているのに嘘をつく」幻覚と「知らないから間違える」幻覚の違い"
source: "https://ai-data-base.com/archives/78047"
author:
  - "[[AIDB Research]]"
published: 2024-11-06
created: 2025-06-13
description: "本記事では、LLMが示す「幻覚（ハルシネーション）」という現象についての新しい研究を紹介します。幻覚とは、一般的に、LLMが事実とは異なる情報を出力してしまうこと全般を指します。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、LLMが示す「幻覚（ハルシネーション）」という現象についての新しい研究を紹介します。幻覚とは、一般的に、LLMが事実とは異なる情報を出力してしまうこと全般を指します。

LLMの幻覚はよく一括りにされますが、実際には「知識がないための幻覚」と「知識があるのに起こる幻覚」という2つの異なるタイプが存在します。今回、イスラエル工科大学とGoogleの研究者らはこれらの詳しい調査を行いました。

幻覚の対策方法を練る上でも、仕組みを理解することは重要な意味を持ちます。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78047-1024x576.jpg)

**参照論文情報**

- タイトル：Distinguishing Ignorance from Error in LLM Hallucinations
- 著者：Adi Simhi, Jonathan Herzig, Idan Szpektor, Yonatan Belinkov
- 所属：Technion – Israel Institute of Technology, Google Research

**本記事の関連研究**

- [モデルとデータの大規模化で変化するLLMのハルシネーション　Google DeepMindの研究](https://ai-data-base.com/archives/74778)
- [ファインチューニングがLLMの幻覚（ハルシネーション）に与える影響　Googleなどによる検証結果](https://ai-data-base.com/archives/69421)
- [マルチモーダルLLMにおける幻覚（ハルシネーション）の原因と対策　クリエイティブでの活用も推奨　AWSなどが網羅的に調査](https://ai-data-base.com/archives/68720)
- [手の込んだ手法よりシンプルな手法の方がLLMは幻覚を起こしにくい　問題に応じて戦略を変える必要性](https://ai-data-base.com/archives/77700)
- [GPT-4oに”嘘をつく理由”を与えると正直さが約32.5%減少　LLMは役割に応じて”正直さ”が変化する](https://ai-data-base.com/archives/75881)

## 背景

LLMは便利なツールとして注目されていますが、事実と異なる情報を生成してしまう「幻覚」という問題を抱えています。この幻覚には実は2種類あることが分かってきました。

1つ目は、モデルがそもそも正しい知識を持っていないために起こる幻覚です。

2つ目は、モデルは正しい知識を持っているのに、質問の仕方や文脈によって間違った回答をしてしまう幻覚です。

これまでの研究では、この2種類の幻覚は区別せずに扱われることがよくありました。しかし、両者は実は全く異なる原因から生じているため、それぞれに適した対処方法が必要です。  
もしLLMに正しい知識がない場合は、外部の情報源に頼るか回答を控える必要があります。一方、知識はあるのに間違った回答をする場合は、モデルの内部で適切な処理を行えば正しい回答を引き出せる可能性があります。

さらに、これまでは幻覚の検出や緩和を試みる際に汎用的なデータセットが使用されてきました。しかし、各言語モデルは独自の知識構造と幻覚パターンを持っているため、汎用的なアプローチでは限界があります。例えば、あるモデルでは正しく回答できる質問でも、別のモデルでは幻覚を起こしてしまうことがあります。そのため、各モデルの特性に合わせた「モデル固有のデータセット」を活用することが、より効果的な幻覚への対処につながる可能性があります。

このような課題認識から、研究者らは幻覚の2つの種類を適切に区別し、かつ各モデルの特性を考慮した分析手法の確立を目指して詳細な調査を行いました。

## WACK（Wrong Answers despite having Correct Knowledge）

幻覚の2種類の違いを理解した研究チームは、この問題に対処するため「WACK」という新しい手法を開発しました。WACKはWrong Answers despite having Correct Knowledgeの略で、”正しい知識があるのに間違った回答をする”という意味です。

この手法は、LLMの幻覚を以下のような流れで分析します。まず、モデルが質問に対する正しい知識を持っているかを確認します。例えば「タイはどんなニックネームで知られていますか？」という質問に対して、モデルが「微笑みの国」という正解を出せるかテストします。

次に、知識があることが確認できた質問に対して、あえて幻覚を引き起こすような状況を作ります。例えば、前の会話で間違った情報を含めたり、特殊な設定を加えたりします。すると、本来は正しい答えを知っているはずのモデルが、状況によって間違った回答をしてしまうかを確認できます。

そして最後に、モデルの回答を「正しい知識がないための幻覚」か「知識があるのに起こる幻覚」か「正しい回答」かに分類します。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78047_figure1-1024x301.png)

## モデル固有のデータセット作成について

研究者らは本研究のために、LLMが知識を活かしながらも誤った回答を生成してしまう事例をデータセットとして収集しました。

### モデルの知識状態の分類方法

まず、モデルが持つ知識のレベルについて。

モデルの知識は、「まったく知識がない状態」から「十分な知識がある状態」まで、連続的な尺度で捉えられます。

知識が少ない場合、モデルが正しい回答を生成できないのは当然とされます。一方で、十分な知識があるにもかかわらず誤った回答（ハルシネーション）が生成されることがあり、これが重要な研究対象として位置付けられます。

分析をシンプルにするため、モデルの知識状態は「高知識」と「低知識」の2つの極端なケースに分類されました。今回は、6回の質問（1回は確定的な生成、5回はランダム性を含む生成）が行われ、一度も正解を出せない場合を「低知識」、常に正解を出せる場合を「高知識」と判断しています。

### 知識があるのに起こるハルシネーション

高知識と判断されたケースにおいても、状況によってはモデルが誤った回答をしてしまいます。以下のようなケースがあります。

（１）ユーザーの入力ミス  
ユーザーが不完全な知識や文法ミスを含む質問をした場合でも、モデルは適切に対応することが期待されます。

（２）モデル自身の過去の誤り  
対話の過程で、モデルが一度誤った回答をすると、その誤りが後続の回答にも影響を及ぼす「雪だるま効果」が観察されることが指摘されています。

このような現象を研究するため、「bad-shots」と「Alice-Bob」という2つの実験的な設定が導入されました。

#### Bad-shots設定とは

モデルの回答に「雪だるま効果」（一度誤った回答をすると、その影響が後続の回答にも波及する現象）を意図的に引き起こすような設定です。そのために今回はChatGPT（GPT-3.5）を使って20組の「誤った質問と回答のペア」が作成されました。

例えば、正しいQAが「化学記号’H’は何の元素？」→「水素(Hydrogen)」である例の場合、誤りは「化学記号’H’は何の元素？」→「ヘリウム(Helium)」のようになります。

実際の実験では、評価したい質問の前に、このような誤った例を3つランダムに配置する形式が採用されました。つまり、おかしな知識をもとに文脈内学習をさせてしまうアプローチです。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78047_figure2-1024x338.png)

3つの誤った例を含むプロンプトの例

下の表では、この設定によって各モデルが誤った回答を生成してしまった具体例が示されています。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78047_table1-1024x387.png)

Gemmaモデルは「9月の第一月曜日にアメリカが祝うものは？」という質問に対して、正しくは「労働者の日」と答えるべきところ「独立記念日」と誤って回答し、Llamaモデルは「眠れる森の美女に登場する3人の妖精の名前は？」という質問に対して、正しくは「眠れる森の美女」と答えるべきところ「ライオンキング」と誤って回答しています。

#### Alice-Bob設定とは

こちらでは以下のような複雑な状況設定が質問の前に追加されます。

「アリスとボブは一般的な知識を問うテストの勉強をしています。アリスの方が賢く、全4問中3問正解（75点）が優秀な成績とされています。合格には2問正解（50点）で十分です。答えを書かないより推測して書いた方が部分点がもらえるため、ボブは最善を尽くして回答しようとしています。アリスが質問し、ボブが回答します。」

上記には次のような巧妙な誘導要素が含まれています。

1. ボブは賢くないことが示唆されている
2. テストが難しいとされている
3. 2問正解（50%）で合格できる
4. 最低限の合格点を超えても特に利点がないことが暗示されている

意図的にタイプミスなどの小さな誤りも含まれており、モデルの回答精度に影響を与えることが狙いです。

Bad-shots設定と比較すると、Alice-Bob設定の方がハルシネーションの発生頻度は低くなりますが、より自然な対話形式に近い設定となっています。

### データセット構築のプロセス

データセットの基盤としては、2つの有名な質問応答データセット「TriviaQA」と「NaturalQuestions」が活用されました。

下の表にはデータの分布が示されています。なお、手法の実現可能性や有効性を示す予備的な実験の結果もまとめられています。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78047_table2-1024x317.png)

上の表におけるHK+（Hallucination with Knowledge）は「知っているのに誤ったことを言っている」、HK-（Hallucination without Knowledge）は「知らないから間違える」です。

この結果からは、「bad-shots」設定で実験が行われた場合でも、モデルが高い知識を持つ事例の大部分では、正しい事実に基づいた回答が生成されることが分かります。また、「Alice-Bob」設定においても同様の傾向が観察されましたが、この設定ではハルシネーションの発生頻度がやや低くなることが分かりました。  

なお、各モデルごとの具体的なデータ数は以下のようになっています。

TriviaQAデータセットでは、正しい回答が13,000件から14,000件程度、知識があるのに起こるハルシネーション（HK+）が1,600件から2,800件程度、知識不足による誤り（HK-）が7,000件程度という分布が見られました。

またNatural Questionsデータセットでは、正しい回答が5,500件から6,000件程度、知識があるのに起こるハルシネーション（HK+）が1,100件から1,900件程度、知識不足による誤り（HK-）が13,000件から14,000件程度という分布になりました。

## 実験条件

この研究は、2種類のハルシネーションを区別することの重要性と、モデル固有のデータセットを活用することの有効性を検証するため、モデルの内部状態を分析する様々な実験が実施されました。以下は実験条件です。

### データの扱い方

各データセットから分類ごとにランダムに1,000個の事例が選ばれました。データは、学習用に70%、テスト用に30%の比率で分割されて活用されています。なお、ハルシネーションの事例が1,000個に満たない場合は、入手可能な全ての事例が使用されました。

### 分類器について

分析には、先行研究に倣って線形 [分類器](https://ai-data-base.com/archives/26489 "分類器") が採用されました。 [Transformer](https://ai-data-base.com/archives/26535 "Transformer") ブロックの後に位置する残差成分から得られる隠れ状態が分析対象とされています。

### 実験の再現性

実験の信頼性を高めるため、SVMの初期値を変えた3回の試行が行われ、学習用とテスト用のデータの分割も異なるパターンで実施されました。

### プロンプトの一貫性

分析の一貫性を保つため、「知識があるのに起こるハルシネーション」のデータセット作成時に使用されたプロンプトと同じ形式が維持されました。特に明記がない限り、bad-shots設定が標準として使用されています。

また、モデルが生成した回答（ハルシネーションの有無に関わらず）は、プロンプトの設定や質問と組み合わせて分析されています。

### 計算環境

すべての実験は、NVIDIA RTX 6000 Ada（49 [GB](https://ai-data-base.com/archives/26343 "勾配ブースティング") メモリ）の [GPU](https://ai-data-base.com/archives/26570 "GPU") と4つのCPUを使用して実行されました。データセットの生成から結果の算出まで、約2週間の計算時間が必要とされました。

## 異なる種類の幻覚の検出について

幻覚の検出に関する2つの重要な研究成果が報告されました。

### 幻覚の種類による違いの検出

まず、知識不足による幻覚と、知識があるのに起こる幻覚が、モデルの内部でどのように区別されているかが調査されました。幻覚の仕組みを解明するため、そして効果的な対策を開発するために重要なテーマです。

以下の3つのケースを区別する実験が行われました。

1. 知識があり正しく回答できる場合
2. 知識があるのに幻覚を起こす場合（HK+）
3. 知識がなく幻覚を起こす場合（HK-）

実験結果は下の図に示されています。上段のグラフはbad-shots設定での結果を、下段のグラフはAlice-Bob設定での結果を表しています。モデルの最終層では60%から70%の精度で3つのケースを区別できることが分かりました。（ランダムに分類した場合の33%という基準値を大きく上回る結果です）

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78047_figure3-1-1024x412.png)

さらに、中間層（16層目）での2クラス間の区別においては、70%以上の精度が達成されました。

以上から、モデルの内部状態に3つのケースを区別するための情報が含まれていることが示されました。

なお、Alice-Bob設定での結果は、その設定の繊細さを反映して、やや低い精度となっています。

### 異なる設定間での幻覚検出の一般化

次に、Bad-shots設定とAlice-Bob設定の2つの異なる手法で誘発された幻覚の関係性が調査されました。Bad-shots設定で学習した検出器がAlice-Bob設定での幻覚も検出できるかどうかの検証です。

この実験では、プロンプトの形式が大きく異なるため、より難しい課題となっています。ここでは、知識がある場合の「正しい回答」と「幻覚（HK+）」の2つを区別する二値分類が行われました。

下の図は結果です。設定が変わることで精度は最大10%程度低下するものの、依然としてランダムな分類を上回る性能が維持されることが分かります。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78047_figure4-1024x399.png)

異なる設定で誘発された幻覚の間に、ある程度の共通性が存在することを示唆しています。

## モデル固有のデータセットと汎用データセットの比較

### モデル間の知識と幻覚パターンの違い

異なるモデルのデータセット間の類似度が、ジャカード類似度（二つの集合の共通部分の要素数を和集合の要素数で割った値）を用いて測定されました。この分析結果を3つのグラフで示したものが下の図です。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78047_figure5-1024x311.png)

知識の類似度については、Natural Questions（図の対角線より下）では約0.6という値が示され、モデル間で知識の保持状態に大きな違いがあることが明らかにされました。一方、TriviaQA（図の対角線より上）では約0.8という高い類似度が観察され、このデータセットについてはモデル間で比較的似た知識が共有されていることが分かりました。

また、共通の知識を持つケースにおける幻覚パターンの類似度は0.8から0.95の範囲に収まりました。しかし、0.1から0.2ポイントの違いが見られることから、各モデルが独自の幻覚パターンを示すことも明らかになりました。さらにbad-shots設定ではAlice-Bob設定と比べて幻覚パターンの多様性が高いことが示されています。

### モデル固有データセットの有効性

下の図には、モデル固有のデータセットと汎用データセットを使用した幻覚検出の性能比較が示されています。汎用データセットを使用した検出器（点線）は性能にばらつきが見られ、常にモデル固有のデータセットを使用した場合（実線）よりも低い性能となることが明らかにされています。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78047_figure6-1024x407.png)

### 事前検出の可能性

最後に、幻覚が実際に生成される前の段階での検出可能性が検証された結果が下の図です。

モデル固有の事前検出（実線）では有望な結果が得られた一方、汎用データセットを用いた事後検出（点線）ではランダムな推測と同程度かそれ以下の性能しか得られないことが示されています。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78047_figure7-1024x405.jpg)

また、事後検出の性能はデータセットによって大きく異なり、TriviaQAでは60-70%の検出率が達成された一方、Natural Questionsではランダムな推測に近い低い検出率に留まりました。

以上から、同じ質問に対する知識の保有状況はモデル間で大きく異なり、Natural Questionsデータセットではモデル間の知識の類似度が約0.6と低いことが分かりました。さらに、同じ知識を持っているモデル同士でも、幻覚を起こすパターンには独自性があり、0.1〜0.2ポイントの違いが観察されています。

このように、各モデル固有の特性を考慮したデータセットを使用することで、汎用的なデータセットと比べて幻覚の検出精度が向上し、「知っているのに誤る（HK+）」タイプの幻覚に対しては特に効果的な対策が可能になります。さらに、幻覚が実際に発生する前の予測にも有効であることが示されています。

つまり、効果的な幻覚対策のためには、一つのデータセットですべてのモデルに対応しようとするのではなく、各モデルの特性に合わせた固有のデータセットを用意することが重要だと分かりました。

## まとめ

本記事では、LLMの幻覚に関する新しい研究を紹介しました。研究チームは幻覚を「知識がない場合」と「知識があるのに起こる場合」の2種類に分類し、WACKという手法を開発して分析を行いました。その結果、各モデルは独自の知識・幻覚パターンを持ち、モデル固有のデータセットを使用することで、より効果的に幻覚を検出できることが示されました。

- 参照論文URL： [https://arxiv.org/abs/2410.22071](https://arxiv.org/abs/2410.22071)
- コード： [https://github.com/technion-cs-nlp/hallucination-mitigation](https://github.com/technion-cs-nlp/hallucination-mitigation)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[OpenAIが新しくLLMの事実性評価ベンチマーク『SimpleQA』をリリース　実用に役立つ知見も得られる](https://ai-data-base.com/archives/77893)

[直感に頼るようなタスクだとLLMに「ステップバイステップで考えて」は逆効果](https://ai-data-base.com/archives/78145)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)