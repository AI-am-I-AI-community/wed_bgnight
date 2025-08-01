---
title: "動画を理解する軽量なLLM『Apollo』、オープンソースで登場（商用利用も可能）"
source: "https://ai-data-base.com/archives/80871"
author:
  - "[[AIDB Research]]"
published: 2024-12-19
created: 2025-06-13
description: "本記事では、動画を理解する大規模マルチモーダルモデル（動画LMM）を実際に設計し体系化を行ったMetaとStanford Universityの研究を紹介します。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、動画を理解する大規模マルチモーダルモデル（動画LMM）を実際に設計し体系化を行ったMetaとStanford Universityの研究を紹介します。

大規模言語モデルや画像処理モデルは急速な進歩を遂げている一方で、動画の理解に特化したモデルの開発は遅れをとっていました。研究チームは、動画フレームの取り込み方から学習の方法まで、動画LMMの設計に関わるあらゆる要素を検証し、その成果としてApolloという新しいモデルの開発を達成しました。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_80871-1024x576.jpg)

**発表者情報**

- 研究者：Orr Zohar et al.
- 研究機関：Meta、スタンフォード大学

**本記事の関連研究**

## 背景

動画を理解するLLMの開発は、大きな可能性を秘めていながらも難しい状況にありました。

最も大きな課題は、計算量の多さと設計の複雑さでした。動画をどのように区切って入力するか、どのような方式でデータを処理するか、どうすれば効率的にトークン化できるかなど、基本的な部分ですら明確な答えが見つかっていませんでした。

これまでは、画像処理モデルを拡張したり、ビデオ用に微調整したりする方法が試みられました。その後、長い映像も処理できる仕組みや、複数のデータタイプを組み合わせる手法など、様々なアプローチが提案されました。しかし、それぞれの方法がどの程度効果的なのか、体系的な検証は行われませんでした。  
動画処理の基本となる技術要素を一つ一つ丁寧に見直し、最適な組み合わせを探る必要があります。映像の切り取り方、データの符号化方法、情報の圧縮方法、学習データの構成など、あらゆる面での検証が求められているのです。

このような背景からMetaの研究者らは、動画を理解するマルチモーダルLLMの設計に関わるあらゆる要素を体系的に調査し、何が性能向上のカギとなるのか解明することを目指しました。そして、その知見を活かしてApolloという新しいモデルの開発へと結実させました。

以下では、ベンチマーク、モデル設計、モデル評価の順に説明していきます。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_80871_1-1024x310.png)

Apollo研究の全体像。動画の サンプリング 方法からモデルの アーキテクチャ 、トレーニングスケジュールまで、主要な設計要素を図示。

## 既存の動画QAベンチマークは有用なのか

これまでさまざまな研究者らが、多数の動画質問応答ベンチマークを作成してきました。しかし、包括的な評価が可能になった一方で、計算リソースの負荷や重複した評価内容が課題となっています。例えば、3Bパラメータのモデルを評価するには、184時間のA100 [GPU](https://ai-data-base.com/archives/26570 "GPU") 稼働が必要です。

### ベンチマークの品質

動画ベンチマークの性能を左右する要因も十分に解明されていません。先行研究によると、画像質問応答の分野では、画像認識能力よりもテキスト理解能力に依存するケースが多いことが判明しています。さらに、モデルの学習段階でのデータ漏洩が評価結果を歪めている可能性も指摘されています。

今回研究者らは10種類のオープンソース動画LMMに対して、動画・画像・テキストという3つの異なる入力形式で評価を行いました。評価結果から、既存のベンチマークは動画認識能力に頼らずとも解答できる問題が多く含まれていることが明らかになりました。また、動画が長くなるほど動画認識への依存度が低下する傾向も見られました。

### 既存ベンチマークの中身は重複している

研究者らは、ベンチマーク間の相関を分析した結果、多くの重複があることを発見しました。Video-MMEでは短い動画と長い動画の評価結果に高い相関（ [R2](https://ai-data-base.com/archives/26434 "決定決定係数（R2）") =0.94）が見られ、LongVideoBenchでも動画の長さによらず高い相関（ [R2](https://ai-data-base.com/archives/26434 "決定決定係数（R2）") >0.92）が確認されました。さらに、質問形式を変えても評価結果に大きな違いは見られませんでした。

### ApolloBenchの提案

研究者らは上記の分析結果に基づき、より効率的なベンチマークとしてApolloBenchを開発しました。ApolloBenchは、ChatGPTなどの外部ツールを必要としない多肢選択形式を採用し、テキストや画像のみで解答可能な問題を除外しています。

時間的 [OCR](https://ai-data-base.com/archives/26261 "光学文字認識（OCR）") 、自己中心的、空間的、知覚、推論という5つのカテゴリに分類された400問を厳選し、各問題の妥当性を手動で確認しています。既存のベンチマークと高い相関を保ちながら、評価時間を41分の1に短縮し、より正確な動画認識能力の評価を可能にしました。

ApolloBench： [https://huggingface.co/spaces/Apollo-LMMs/ApolloBench](https://huggingface.co/spaces/Apollo-LMMs/ApolloBench)

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_80871_2-1024x316.png)

ベンチマーク分析。左側は動画、静止画、テキストのみでの評価結果の比較、右側は異なるベンチマーク間の相関を示す。

## モデルをどこまで小規模化できるかの試み

研究者らは、モデルサイズと必要な計算リソースをどこまで削減できるか探求しました。

モデルの規模を小さくしても、より大規模なモデルの設計に有用な知見が得られるのか。研究者らはこの疑問に答えるため、21種類の異なる設計バリエーションを用意し、4つのサイズ（0.5B、1.5B、4B、7B）のモデルで検証を行いました。

合計84のモデルを評価した結果、2〜4Bパラメータ程度の中規模モデルで得られた設計上の知見は、より大規模なモデルにも適用できることが判明しました。研究者らはこの現象を「スケーリング整合性」と名付けました。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_80871_3-1024x237.png)

スケーリング整合性の検証結果。小規模モデルでの設計決定が大規模モデルにどの程度転移するかを示す。

たとえば、4Bモデルと7Bモデルの性能には0.938という高い相関が見られました。また、7Bモデルとの相関は、モデルサイズが大きくなるにつれて対数線形的に増加することもわかりました。一方、0.5Bのような小規模モデルでは、このような一貫した傾向は見られませんでした。

データセット規模の影響も調査されました。研究者らは75Kから1Mサンプルまでの異なるサイズのデータセットでモデルを訓練し、その効果を検証しました。4Bモデルの場合、約50万サンプルでより大規模なモデルとの相関がほぼ頭打ちになることが判明しました。つまり、それ以上データを増やしても設計の知見に大きな影響を与えないことがわかりました。

一方、0.5Bや1.5Bといった小規模モデルでは、データセットサイズによって結果が大きく変動しました。研究者らは、2〜4Bパラメータ程度のモデルと約50万サンプルのデータセットがあれば、大規模モデルの設計に十分な知見が得られると結論付けています。

従来のスケーリング則では、各設計判断のためにサイズの異なる複数のモデルを訓練する必要がありました。しかし、提案された「スケーリング整合性」の考え方により、中規模モデルでの実験結果を大規模モデルに活用できるようになり、開発の効率化が期待できます。

## モデルに影響を与える要因を特定

研究者らは、動画処理における大規模マルチモーダルモデル（動画LMM）の設計について、4つの重要な側面から分析を行いました。

### （１）動画のサンプリング方法

研究者らは、動画フレームの抽出方法として「均等 [サンプリング](https://ai-data-base.com/archives/26518 "サンプリング") 」と「FPS [サンプリング](https://ai-data-base.com/archives/26518 "サンプリング") 」を比較しました。均等 [サンプリング](https://ai-data-base.com/archives/26518 "サンプリング") は処理が簡単である一方、動画の長さによって実効的な再生速度が変化してしまう問題がありました。つまり、短い動画では遅い再生に、長い動画では速い再生になってしまい、モデルが動画内の物体の速度を正しく学習できない可能性が指摘されました。

実験の結果、FPS [サンプリング](https://ai-data-base.com/archives/26518 "サンプリング") の方が一貫して優れた性能を示しました。また、1秒あたりのトークン数とフレーム数の間にはトレードオフ関係があり、フレームあたり8〜32トークンが最適であることが判明しました。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_80871_4-1024x313.png)

動画 サンプリング の分析。異なる 戦略とその性能への影響を比較する。

### （２）動画の表現方法

効果的な動画エンコーダーの開発には、メモリ要件の高さと質の高い教師データの不足という課題がありました。研究者らは、SigLIP-SO400Mが単体のエンコーダーとして最高の性能を示すことを発見しました。さらに、SigLIP-SO400MとInternVideo2を組み合わせることで、より優れた性能が得られることも判明しました。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_80871_5-1024x349.png)

ビジョンエンコーダーの評価。単体および組み合わせでの各エンコーダーの性能を比較。

### （３）トークンのリサンプリング

動画LMMでは、処理可能なフレーム数に直接影響するトークンのリ [サンプリング](https://ai-data-base.com/archives/26518 "サンプリング") が特に重要です。研究者らは、Perceiverリサンプラーが最も優れた性能を示すことを発見しました。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_80871_6-1024x179.png)

ビデオトークンのリ サンプリング 手法の比較。異なるリ 手法の性能評価結果を示す。

### （４）トークンの統合方法

動画トークンとテキストトークンの統合方法も、モデルの性能に大きく影響します。研究者らは、異なるフレームやクリップから得られた動画トークンの間にテキストや学習済みトークンを追加することで、2〜3%の性能向上が得られることを発見しました。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_80871_7-1024x219.png)

ビデオトークンの統合手法の比較。異なるトークン統合戦略の性能評価結果を示している。

この研究では、Qwen2.5 3Bを使用し、750Kサンプルのデータセットで検証が行われました。これらの知見は、より大規模なモデルや異なるモデルファミリーにも適用できることが確認されています。

## 最先端の大規模マルチモーダルモデル『Apollo』の開発

研究者らは、これまでの研究から得られた知見を活かし、動画処理に特化した大規模マルチモーダルモデル（LMM）群Apolloを開発しました。

### モデルの構成

Apolloは、Qwen2.5シリーズを基盤とし、1.5B、3B、7Bという3つの異なるサイズのモデルが用意されています。画像認識にはSigLIP-SO400M、動画認識にはInternVideo2を組み合わせて使用し、Perciver Resamplerによって1フレームあたり32トークンに情報を圧縮しています。

### データの準備

研究者らは、テキスト、画像、動画など、様々な種類のデータを組み合わせてトレーニングを行いました。ただし、ライセンスの制約により、ChatGPTに依存するデータセットなどは除外されています。また、LLaMA 3.1 70Bを活用して、動画に関する会話データを新たに生成しました。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_80871_8-1024x349.png)

トレーニングスケジュールの評価。異なるトレーニング段階での設定と結果を示す。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_80871_9-1024x409.png)

トレーニングデータの混合比率の影響。テキスト、画像、動画などの異なるデータタイプの最適な組み合わせを示す。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_80871_10-1024x313.png)

トレーニングデータセットの統計。データの種類別の分布と動画の長さの分布を示す。

### 評価結果

研究チームは、Apolloモデルの性能を複数のベンチマークテストで検証しました。特に注目すべき結果を、モデルサイズごとにまとめます。

#### Apollo-1.5B（小規模モデル）

パラメータ数が4.2Bのモデル（Phi-3.5-Vision）や7Bのモデル（LongVA-7B）よりも優れた性能を示しました。この結果は、概念実証の段階では必ずしも大規模なモデルを必要としないことを示唆しています。

#### Apollo-3B（中規模モデル）

最近発表された7Bクラスの主要モデルを上回る性能を達成しています。MLVUベンチマークで68.7点を記録し、Oryx-7B（67.5点）を上回りました。Video-MMEでは58.4点（+12.8点）、ApolloBenchでは62.7点（+14.1点）を記録。

これは、効率的な設計によって少ないパラメータ数でも高い性能が得られることを実証しています。

#### Apollo-7B（大規模モデル）

7Bクラスのモデルとして最高性能を達成しています。さらに、パラメータ数が30Bを超える大規模モデルと互角以上の性能を示しました。MLVUベンチマークで70.9点を記録（Oryx-34Bの70.8点を上回る）し、Video-MMEで61.2点（+0.6点）を達成、さらに、ApolloBenchで66.3点（+2.4点）を記録しています。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_80871_11-1024x458.png)

総じて、Apolloの評価結果は、単にモデルを大規模化するのではなく、適切な [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") 設計とトレーニング方法の選択が重要であることを示しています。また、小規模から中規模のモデルでも、効率的な設計により優れた性能を実現できることが実証されました。

### 今後の課題

研究者らは、以下の課題に取り組む必要性があると述べています。

- 画像と動画の処理を統合する [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") の探求
- より広範なモデルサイズでのScaling Consistency（規模の一貫性）の検証
- 会話能力を適切に評価できる新しいベンチマークの開発

## まとめ

本記事では、動画を理解する大規模マルチモーダルモデル（動画LMM）の設計について包括的に分析した研究を紹介しました。

研究チームは中規模モデルで得られた設計上の知見が大規模モデルにも適用できる「スケーリング整合性」を発見し、この知見を活かして開発されたApolloは3Bという比較的小規模なモデルで7Bクラスの既存モデルを上回る性能を実現しました。

より効率的で効果的な動画理解モデルの開発に向けた重要な一歩となりそうです。

**参照文献情報**

- タイトル：Apollo: An Exploration of Video Understanding in Large Multimodal Models
- URL： [https://arxiv.org/abs/2412.10360](https://arxiv.org/abs/2412.10360)
- 著者：Orr Zohar, Xiaohan Wang, Yann Dubois, Nikhil Mehta, Tong Xiao, Philippe Hansen-Estruch, Licheng Yu, Xiaofang Wang, Felix Juefei-Xu, Ning Zhang, Serena Yeung-Levy, Xide Xia
- 所属：Meta、Stanford University

## 理解度クイズ（β版）

1\. Apolloモデルの基盤となっているモデルは何ですか？

Apolloは、Qwen2.5シリーズを基盤とし、1.5B、3B、7Bの3つのサイズのモデルが用意されています。

解説を見る

2\. 研究チームが発見した「スケーリング整合性」とは何を意味しますか？

2～4Bパラメータ程度の中規模モデルで得られた設計上の知見が、より大規模なモデルにも適用可能だと判明しました。

解説を見る

3\. Apollo-3BがMLVUベンチマークで達成したスコアは？

Apollo-3BはMLVUベンチマークで68.7点を記録し、Oryx-7B（67.5点）を上回る性能を示しました。

解説を見る

4\. 動画フレームの処理において、研究チームが最適だと判断したトークン数は？

フレームあたり8～32トークンが最適であることが実験により判明しました。

解説を見る

5\. ApolloBenchの開発により、既存の評価時間がどれだけ短縮されましたか？

ApolloBenchは既存のベンチマークと高い相関を保ちながら、評価時間を41分の1に短縮することに成功しました。

解説を見る

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[LLMエージェントに人間のような欲求を持たせてシミュレーションする手法](https://ai-data-base.com/archives/80804)

[生涯にわたりユーザーに寄り添いパーソナライズし続けるAIアシスタントの設計](https://ai-data-base.com/archives/80936)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)