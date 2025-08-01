---
title: "スタンフォード大学の研究者ら、GPT-4oとGemini1.5 Proで「マルチモーダルモデルにおける『Many-Shot』の効果」を検証"
source: "https://ai-data-base.com/archives/69211"
author:
  - "[[AIDB Research]]"
published: 2024-05-17
created: 2025-06-13
description: "スタンフォード大学の研究者らは、画像とテキストを組み合わせたマルチモーダルモデルが、プロンプト内で例を大量に載せるとより賢くなるかを調査しました。多くのデータセットで実験を行い、例示が少ない場合と多い場合での性能を比較しました。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

スタンフォード大学の研究者らは、画像とテキストを組み合わせたマルチモーダルモデルが、プロンプト内で例を大量に載せるとより賢くなるかを調査しました。

多くのデータセットで実験を行い、例示が少ない場合と多い場合での性能を比較しました。また、複数の質問を一度に処理する方法も検討し、その効果を評価しました。GPT-4oとGemini1.5 Proには、共通する傾向がある一方で、大きな違いも示されています。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_69211-1024x576.jpg)

**参照論文情報**

- タイトル：Many-Shot In-Context Learning in Multimodal Foundation Models
- 著者：Yixing Jiang, Jeremy Irvin, Ji Hun Wang, Muhammad Ahmed Chaudhry, Jonathan H. Chen, Andrew Y. Ng
- 所属：スタンフォード大学

**本記事の関連研究** ：

- [プロンプトに例を多く載せるほど、どんなタスクでも性能が上がるのか？DeepMindによる『Many-shot Learning』の実験結果](https://ai-data-base.com/archives/67883)
- [LLMにおける超長尺のコンテキスト内学習（In-context learning）とファインチューニングの性能比較](https://ai-data-base.com/archives/68564)
- [マルチモーダルLLMにおけるハルシネーション（幻覚）の原因と対策](https://ai-data-base.com/archives/68720)
- [マルチモーダルLLMにおける欠点と原因を明らかにする調査研究の結果](https://ai-data-base.com/archives/68367)

## 背景

LLMが少数の例示をコンテキスト内（プロンプト）に含めることでパフォーマンスを大幅に向上させる能力はコンテキスト内学習（In-Context Learning）として広く知られるようになっています。LLMがモデルのパラメータを更新せずに少数のサンプルから学習し、新しいタスクに適応するものです。そして最近では、マルチモーダルモデルもコンテキスト内のサンプルから学習する能力を示しています。

しかし、モデルのコンテキストウィンドウ（モデルが一度に処理できる入力の長さ）が限られているために、例示の数を増やすことがどれほどパフォーマンスに与えるのか、その影響は今まで詳しくわかっていません。マルチモーダルモデルは画像表現に多数の視覚トークン（画像を表現するための単位）を使用するためなおさらです。

ところが最近、GPT-4oでは128,000トークン、Gemini 1.5 Proでは最大100万トークンという非常に長いコンテキストウィンドウが実現され、例示を大幅に増やすことの効果を調べることが可能になりました。

これまでのところ、コンテキスト内学習のスケーリング（大規模化）について、例示の数を増やすとLLMのパフォーマンスが向上することが研究で示されてきましたが、それでもテストされた例示の数は少なく、テキストのみのベンチマークに限定されています。とりわけマルチモーダルのコンテキスト内学習の研究はまだ初期段階にあり、巨大なコンテキストウィンドウを利用して例示の数を増やすことの効果は調べられていません。

そこで研究者らは、マルチモーダルモデルにおける多数の例示を用いたコンテキスト内学習の能力を調査するために、例示の数を数桁スケールアップしてモデルのパフォーマンスをベンチマークする大規模な実験を行いました。マルチモーダルモデルのアプリケーションやドメインへの適応可能性を探ることを目的としています。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_69211_1.png)

各種コンテキスト内学習を比較した図

## 研究デザイン

### モデル

研究者らは、GPT-4oとGemini 1.5 Proという2つの最先端のマルチモーダルモデルをOpenAIとGoogle Cloudから提供されるAPIサービスを通じて利用しました。応答の再現性を得るために、温度パラメータをゼロに設定し、一部のモデルではランダムシードが設定されました。

（ランダムシードとは、プログラムにおいて、乱数生成器の初期値として使用される数値のことを指します。実験の再現性を確保する際に必要になります）

### データセット

性能評価には、自然画像、医療画像、リモートセンシング、分子画像など、多様な分野の画像データセットが「画像分類」というタスクに焦点を絞って選ばれました。タスクが限定されたのは、他のタスク（例：領域のキャプション生成）ではトークン数が大幅に増加し、例示の数に限界が生じてしまうためです。

各データセットは、学習用の例示セットと評価用のテストセットに分割されました。分割の際は、クラスごとの画像数が均等になるように、ランダムに [サンプリング](https://ai-data-base.com/archives/26518 "サンプリング") する手法が用いられました。

なお、使用されたデータセットは以下の通りです：

1. **HAM10000**: 皮膚病分類のための臨床写真データセット
2. **FIVES**: 眼底画像を用いた眼疾患分類データセット
3. **CheXpert**: 胸部X線画像を用いた肺疾患の多ラベル分類データセット
4. **Camelyon17**: 病理画像を用いた腫瘍検出データセット
5. **TerraIncognita**: カメラ画像を用いた動物種認識データセット
6. **UCMerced**: 衛星画像を用いた土地利用分類データセット
7. **EuroSAT**: 衛星画像を用いた土地利用・被覆分類データセット
8. **Oxford Pets**: カメラ画像を用いたペット分類データセット
9. **DTD**: 合成画像を用いたテクスチャ分類データセット
10. **DrugOOD Assay**: 分子画像を用いた薬物結合予測データセット

下記表では画像の例が確認できます。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_69211_3-1024x698.jpg)

### 評価指標

性能評価には、精度（accuracy）や [F1スコア](https://ai-data-base.com/archives/26112 "F1スコア（F値）") といった標準的な指標が用いられました。「モデルの予測が正解とどの程度一致しているか」を数値化するものです。

さらに、各モデルのデータ効率（少ないデータ量で高い性能を達成する能力）を測定するために、例示の数の対数とモデルの性能の間の [線形回帰](https://ai-data-base.com/archives/26362 "線形回帰") が計算されました。例示の数が10倍になったときに期待されるモデルの性能向上を近似的に表すことで、実験条件を超えた値を分析します。

### クエリのバッチ処理の影響

大量の例示をプロンプトに含めると、シーケンス長が非常に長くなり、推論時間とコストが高くなってしまいます。そこで、複数のクエリを1つのプロンプトにまとめる処理（バッチ処理）を行い、1クエリあたりのコストを削減することの影響が調査されました。

[バッチサイズ](https://ai-data-base.com/archives/26582 "バッチサイズ") を変化させたときのモデルの性能が、ゼロショットと多数ショットの両方の設定で評価されました。その結果、適切な [バッチサイズ](https://ai-data-base.com/archives/26582 "バッチサイズ") を選択すれば、バッチ処理を行っても性能が大きく低下しないことが示されました。詳細は後述します。

## 実験結果

### 例示の数を増やした効果

Gemini 1.5 Proは、ほとんどのデータセットにおいて、例示の数を増やすことで性能が大幅かつ一貫して向上することが示されました。特に、HAM10000（皮膚病分類）、FIVES（眼疾患分類）、EuroSAT（土地利用・被覆分類）の3つのデータセットでは、ゼロショットや少数ショットと比べて、多数ショットのコンテキスト内学習により大きな性能向上が見られました。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_69211_5-1024x376.png)

多数ショットのパフォーマンスとモデル効率の比較

注目すべきは、10のデータセットのうち5つ（FIVES、UCMerced、EuroSAT、Oxford Pets、DTD）において、Gemini 1.5 Proの性能が、最大の例示の数（約1,000例示）まで向上し続けたことです。一方、DrugOOD Assay（分子画像を用いた薬物結合予測）データセットでは、多数ショットの文脈内学習による性能向上はあまり見られず、例示のサイズ全体で性能がばらつき、ピーク性能は40例示で観測されました。

GPT-4oについても、FIVES（眼疾患分類）とDrugOOD Assayを除くすべてのデータセットで、多数ショットの文脈内学習により大幅な性能向上が見られました。しかし、向上の傾向は一貫していませんでした。多くのデータセットで、例示の数が増加するにつれて性能が大きく低下し、その後さらに増加すると大幅に改善され、V字型のスケーリング曲線となっています。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_69211_2-1024x464.jpg)

Gemini 1.5 ProとGPT-4oのゼロショットから多数ショットまでのパフォーマンス

### クエリのバッチ処理が性能に与える影響

推論コストを下げるために、複数のクエリを1つのプロンプトにまとめる（バッチ処理する）ことの影響を調査した結果、ゼロショットと多数ショットの両方の設定で、 [バッチサイズ](https://ai-data-base.com/archives/26582 "バッチサイズ") を増やしてもパフォーマンスの低下はほとんどなく、むしろ向上することもあることがわかりました。

![](https://ai-data-base.com/wp-content/uploads/2024/05/AIDB_69211_6-1024x460.jpg)

多数ショットとゼロショットにおける、1リクエストに含まれるクエリ数を変化させたときのGemini 1.5 Proのパフォーマンス

興味深いことに、ゼロショットの設定では、1つのクエリを含めるだけでは最適ではないことが多くのデータセットで観察されました。TerraIncognita（カメラ画像を用いた動物種認識）とUCMerced（衛星画像を用いた土地利用分類）の2つのデータセットでは、ゼロショットの設定で [バッチサイズ](https://ai-data-base.com/archives/26582 "バッチサイズ") を上げると性能が大幅に向上し、一貫した改善が見られました。

上記の現象における理由を調査するために、追加の実験が行われました。その結果、ゼロショット設定でのバッチ処理による性能向上は、ドメインキャリブレーション（モデルがより多くの同じドメインの情報を一度に得ることで、そのドメインに適応しやすくなる効果）、クラスキャリブレーション（異なるクラスの画像を複数見せることで、モデルが各クラスの特徴をより正確に把握できるようになる効果）、自己生成の例示によるコンテキスト内学習の3つの効果の組み合わせによるものであることが示唆されました。

### コストと遅延の分析

多数ショットのコンテキスト内学習は、入力コンテキストが長くなるために、クエリごとの推論コストが高くなり、応答が遅延する恐れも考えられました。この点を定量的に評価するために、HAM10000とTerraIncognitaの2つのデータセットにおいて、ゼロショットと多数ショットのリクエストについて、バッチ処理の有無によるレイテンシーとコストが計算されました。

その結果、ゼロショットの設定では、クエリのバッチ処理により、サンプルごとのレイテンシーが大幅に短縮されることがわかりました。多数ショットの設定では、バッチ処理により、サンプルごとのレイテンシーとコストの両方が大幅に削減されました。具体的には、HAM10000では、レイテンシーが約35倍、コストが約10倍削減され、TerraIncognitaでは、レイテンシーが20倍、コストが45倍削減されました。

## 考察

本研究では、マルチモーダルモデルGPT-4oとGemini1.5 Proを10のデータセットで評価し、そのほとんどにおいて、例示の数を増やすことで性能が向上することが明らかになりました。さらに、多数ショットのコンテキスト内学習においてクエリをバッチ処理することで、性能を損なうことなく、サンプルごとのレイテンシーと推論コストを大幅に削減できることが示されました。

これまでは、パラメータが非公開のモデルを新しいタスクやドメインに適応させることは困難でした。しかし今後は多数ショットのコンテキスト内学習により、ユーザーは例示を利用してモデルを適応させることが（ある程度は）できるようになります。多数ショットのコンテキスト内学習のメリットは、モデルのリリース当日でも迅速に結果を得られることです。その証拠に、本研究ではGPT-4oを使用した評価を数日以内に完了することができています。

中程度のサイズのデータセットを持つ研究者が、オープンソースモデルのファインチューニングを行うのが一般的ですが、多数ショットのコンテキスト内学習により、ファインチューニングの必要性が低くなり、カスタマイズされたアプローチの開発がはるかに容易になる可能性があります。

ただし、ハルシネーションやバイアスなど、基盤モデルに内在する問題が、多数ショットのコンテキスト内学習やクエリのバッチ処理においてどのように現れるかを調査することは重要です。

なお今回の研究においてはは以下の点を留意しておくべきと述べられています。

- 画像分類タスクと非公開モデルに限定している。
- 他のタスクやオープンソースモデルでの研究が必要。
- クラス数が多いデータセットでは、使用が制限される。
- コンテキストウィンドウのサイズが今後拡大する可能性がある。
- 非公開モデルの学習データセットが公開されていない。
- 選択したデータセットが学習に使用されたか不明。

## まとめ

今回の研究では、マルチモーダルモデルが、大量の例示を用いたコンテキスト内学習により性能を大幅に向上させられること、およびクエリのバッチ処理により推論コストとレイテンシーを削減できることが示唆されました。基盤モデルの応用の幅を広げる有望な結果ですが、さらなる研究が必要ともされています。

このような多くの例示を与えて特定ドメインのマルチモーダル性能を向上させる取り組みは、皆さんの分野でも試みてはいかがでしょうか。

- 参照論文URL： [https://arxiv.org/abs/2405.09798](https://arxiv.org/abs/2405.09798)
- Github： [https://github.com/stanfordmlgroup/ManyICL](https://github.com/stanfordmlgroup/ManyICL)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[RAGの失敗パターン7選と教訓9箇条](https://ai-data-base.com/archives/69154)

[反復学習でCoTによる推論性能を向上させる手法 Metaとニューヨーク大学による研究](https://ai-data-base.com/archives/69296)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)