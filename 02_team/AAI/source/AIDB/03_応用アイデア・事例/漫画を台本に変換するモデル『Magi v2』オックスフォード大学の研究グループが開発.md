---
title: "漫画を台本に変換するモデル『Magi v2』オックスフォード大学の研究グループが開発"
source: "https://ai-data-base.com/archives/73876"
author:
  - "[[AIDB Research]]"
published: 2024-08-07
created: 2025-06-13
description: "本記事では、マンガから台本を生成する技術を紹介します。オックスフォード大学の研究者らは、マンガ内の要素を高精度で検出し、キャラクターを一貫して識別するモデルを開発しました。また、開発の過程で独自のデータセットも作成しました。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、マンガから台本を生成する技術を紹介します。

オックスフォード大学の研究者らは、マンガ内の要素を高精度で検出し、キャラクターを一貫して識別するモデルを開発しました。また、開発の過程で独自のデータセットも作成しました。

視覚障害者のマンガ体験向上などにつながるものとして注目されます。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_73876-1024x576.jpg)

**参照論文情報**

- タイトル：Tails Tell Tales: Chapter-Wide Manga Transcriptions with Character Names
- 著者：Ragav Sachdeva, Gyungin Shin, Andrew Zisserman
- 所属：University of Oxford

## 背景

マンガは世界的に人気のあるコンテンツですが、マンガを楽しむためには視覚に大きく依存するという特徴があります。そのため、例えば視覚障害者の方々にとっては楽しむ手段が限られています。

マンガのアクセシビリティを向上させる取り組みとしては、過去にオックスフォード大学の研究者らが開発した「Magiモデル」が挙げられます。マンガのページから文字、キャラクター、コマなどを検出し、セリフとキャラクターを関連付ける機能を持つモデルでした。

しかし、Magiモデルは実用性に課題がありました。キャラの名称を一貫して識別することができない、セリフとキャラの関連付けの精度が低い、セリフと効果音の区別が不十分といった特徴がありました。

そこで今回研究者らはMagiv2モデルを開発しました。上記の課題を解決する性能を持つモデルです。このモデルを利用すると、もとのマンガに対して精度が高い台本をテキストベースで生成することができます。

下の図はMagiとMagiv2の出力の比較です。Magiv2はページをまたいで一貫したキャラクター名を使用し、より高精度な話者の特定を行っています。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_73876_1-1024x392.jpg)

## チャプター（一話）全体を把握する流れ

Magiv2モデルは以下のような段階的なアプローチが採用されています。なお、以下でも「チャプター」という単語が登場しますが、それはマンガにおける「一話」の範囲を指しています。

### 1\. 検出と関連付け

最初のステップでは、各ページが個別に処理されます。

なお、このステップは「グラフ生成問題」として処理されます。  
グラフの「 [ノード](https://ai-data-base.com/archives/26470 "ノード") 」は、検出されたキャラクター、テキスト、コマ、そして新たに加えられた吹き出しの尻尾の境界ボックスを表します。「エッジ」は、キャラクター同士、テキストとキャラクター、テキストと尻尾の間の関係を表現します。

### 2\. チャプター全体のキャラクター命名

次に、チャプター内の全ページから検出されたキャラクターの画像が処理されます。検出されたキャラ画像は、主要キャラクターの画像と名前を含む「キャラクターバンク」と照合されます。

このステップの目標は、各キャラクター画像を正しい主要キャラクターに割り当てるか、該当するキャラクターがない場合は「その他」のクラスに分類することです。

この割り当て処理は、制約付き最適化アプローチを用いて行われます。詳細については後述します。

### 3\. 台本生成

最後に、収集された情報を元にチャプター全体の台本が生成されます。

以下の4つのステップで行われます。

1. 検出されたテキストボックスがフィルタリングされ、非本質的（効果本など）と分類されたテキストが除去される
2. 残ったテキストボックスが読む順序に並べ替えられる
	- まずページが並べ替えられる
	- 次に各ページ内のコマが並べ替えられる
	- 最後に各コマ内のテキストが並べ替えられる
3. [光学文字認識](https://ai-data-base.com/archives/26261 "光学文字認識（OCR）") （ [OCR](https://ai-data-base.com/archives/26261 "光学文字認識（OCR）") ）技術を用いて、マンガページからテキストが抽出される
4. 最終的な台本が生成される
	- この際、前もって予測されたテキストとキャラクターの関連付け、およびキャラクター名の予測結果が活用される

推論パイプラインの概要が下の図で示されています。検出と関連付け、チャプター全体のキャラクター命名、転写（台本）生成の3ステップを示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_73876_2-1024x246.jpg)

## 検出と関連付け

ページ内の様々な要素を検出し、関連性を特定するプロセスを以下に示します。

### グラフ生成モデル

マンガページの入力に対し、パネル、キャラクター、テキストブロック、吹き出しの尻尾（話者に向かって伸びる部分）の検出が行われます。

さらに、要素間の関連付けも実施されます。キャラクター同士の関連付け（キャラクターのクラスタリング）、テキストとキャラクターの関連付け（話者の特定）、テキストと尻尾の関連付けが行われます。

このタスクはグラフ生成問題として処理します。モデルの [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") は以下のように構成されています。

1. 高解像度のマンガページが入力される
2. CNNバックボーンで処理された後、トランスフォーマーエンコーダー・デコーダーを通過し、N個のオブジェクト特徴ベクトルが生成される
3. 検出ヘッドがこれらの特徴ベクトルを処理し、境界ボックスの回帰とクラス分類（キャラクター、テキスト、パネル、尻尾、背景）を行う
4. テキストとキャラクターの関連付け、テキストと尻尾の関連付け、キャラクター同士の関連付けのために、それぞれ専用のヘッドが用意される
5. 最後に、テキストの特徴ベクトルが線形層で処理され、本質的なテキストと非本質的なテキストに分類される

### 半教師あり学習

これまでの研究では、モデルの学習に使用されるデータセットの品質と完全性が課題となっています。そこで、2つのデータセットが活用されました。

1. Mangadex-1.5M：ラベルなしのデータセット
2. PopManga (Dev)：部分的にラベル付けされたデータセット

これらデータセットの特性を考慮し、 [半教師あり学習](https://ai-data-base.com/archives/26543 "半教師あり学習") アプローチが採用されました。学習戦略は以下の通りです。

1. PopManga (Dev)の小さなサブセットに、尻尾関連の [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") とテキスト分類ラベルが追加される
2. Mangadex-1.5Mデータセットには、Magiモデルを使用して部分的な擬似ラベルが付与される
3. 大規模な部分ラベル付きデータセットでモデルの初期学習が行われる
4. その後、小規模な完全ラベル付きデータセットでファインチューニングが実施される
5. このモデルを使用して、大規模データセットの完全な（ただし、ノイズを含む可能性のある） [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") が生成される
6. 新しく [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") された大規模データセットでモデルが再学習され、その後、小規模の完全ラベル付きデータセットで再度ファインチューニングが行われる

上記のサイクルが複数回繰り返され、モデルの性能が段階的に向上していきました。

このような検出と関連付けの [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") の簡略図が下の図です。入力画像からノードとエッジの予測を行うプロセスを示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_73876_3-1024x277.png)

### 実装の詳細

モデルの [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") や学習については以下の補足もあります。

- バックボーンにはResNet50が使用された
- エンコーダー・デコーダートランスフォーマーは6層ずつで構成されている
- クロップ埋め込みモジュールは12層のエンコーダーのみのトランスフォーマー
- エッジ予測ヘッドは3層の [MLP](https://ai-data-base.com/archives/26372 "多層パーセプトロン（MLP）") で、テキスト分類ヘッドは単純な線形層
- 学習には2台のA40 [GPU](https://ai-data-base.com/archives/26570 "GPU") が使用され、AdamW最適化アルゴリズムが採用された

## チャプター全体のキャラクター命名

マンガのチャプター全体を通じてキャラクターに一貫した名前を付ける手法は以下の通りです。

### 目的と課題

まず、タスクの目標は、チャプター内で検出された各キャラクター画像を、キャラクターバンク内の正しいキャラクターに割り当てることです。該当するキャラクターがない場合は、「その他」のクラスに分類されます。

単純な方法としては、各キャラクター画像とキャラクターバンク内の各キャラクターとの類似度を計算し、最も類似度の高いものを選ぶという手法も考えられます。しかし、それでは不十分だとされ、より高度なアプローチが採用されました。

### 制約付き最適化アプローチ

ページごとの関連付け情報を活用した追加のルールが導入されました。以下の2種類のルールが設定されています。

1. must-linkルール  
	同じキャラクターとして識別された画像は、同じ名前が割り当てられる
2. cannot-linkルール  
	異なるキャラクターとして識別された画像には、異なる名前が割り当てられる

このアプローチをとることで、単純な画像類似度よりも強力な手がかりを得ることができます。例えば、同じパネル内の2つのキャラクターは、見かけ上は類似していても、異なるキャラクターである可能性が高いと判断することが可能です。

### 最適化問題の定式化

上記の割り当て問題は、混合整数線形計画問題として定式化されました。この問題の目的関数（解の質を評価するために使用される関数）は、キャラクター画像とキャラクターバンク内のキャラクターとの距離（類似度の逆数）の総和を最小化することです。つまり、「検出したキャラクターが、本当に特定のキャラクターである可能性が高い状態を目指す」ということです。

制約条件には以下が含まれます。

1. 各キャラクター画像は必ず1つのキャラクターに割り当てられる
2. must-linkルールを満たすように割り当てが行われる
3. cannot-linkルールを満たすように割り当てが行われる

（※ただし、「その他」カテゴリーに関しては特別な扱いがされています。2つの異なるキャラクターが両方とも「その他」に分類される可能性があるため、cannot-link制約は「その他」カテゴリーには適用されません）

### 評価と比較

今回考案されたアプローチを、従来のクラスタリングベースの手法と比較した結果、提案手法が大幅に優れていることが示されました。

クラスタリングベースの手法には以下の2つの主な欠点が指摘されています。

1. 見た目が似ているが異なるキャラクターが同じクラスタに分類されやすい
2. キャラクターの空間的な配置などの文脈情報を活用できない

提案手法は上記においてより堅牢でした。中でも、各ページの正確なmust-linkとcannot-linkルールを使用した場合、結果が大幅に改善されることが確認されました。

このことから、将来的にはページごとのモデルの性能を向上させることで、チャプター全体の結果も改善できる可能性が示唆されています。

ただし、この手法は主要でないキャラクターを全て「その他」カテゴリーにまとめてしまうという問題があり、今後の課題として残されています。

## PopCharactersとPopManga-Xデータセット

今回の研究では、2つの新しいデータセットが開発されました。PopCharactersとPopManga-Xです。Magiv2モデルの学習と評価に重要な役割を果たしています。

### PopCharactersデータセット

PopCharactersは、PopMangaデータセットに登場する主要キャラクターを集めたキャラクターバンクデータセットです。各キャラクターに関して以下の情報が提供されています。

1. キャラクターの名前
2. ウェブからスクレイピングされたキャラクターのサムネイル画像セット
3. キャラクターが属するマンガシリーズと登場するチャプターのリスト

さらに、頻繁に登場するキャラクターの一部については、マンガのチャプター内から抽出された例示画像セットも（人間の手で）用意されています。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_73876_4-1024x727.jpg)

PopCharactersサムネイルの分布。マンガ、アニメ、実写版の3種類のサムネイルの例を示しています。

PopCharactersデータセットの目的は2つあります。

1. Magiv2モデルが商業的に入手可能な数十万ページのマンガを、主要キャラクターの名前付きで転写できるようにすること
2. キャラクター認識やキャラクタークラスタリングなどのタスクのモデル学習に役立つリソースを提供すること

### PopManga-Xデータセット

PopManga-Xは、既存のPopMangaデータセットのテストセットに以下の新しい [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") を追加して拡張したものです。

1. 吹き出しの尻尾の境界ボックス
2. テキストボックスと尻尾ボックスの関連付け
3. テキストのカテゴリー（本質的と非本質的）
4. キャラクターボックスの名前（PopCharactersと一致）

このデータセットがあることで、吹き出しの尻尾関連の予測やテキスト分類、そしてチャプター全体でのキャラクタークラスタ予測の評価が可能になりました。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_73876_5-1024x850.jpg)

PopMangaとPopManga-Xにおける アノテーション の比較

### データセットの重要性

PopCharactersデータセットにより、モデルはキャラクターを一貫して識別し、適切な名前を付けることが可能になりました。一方、PopManga-Xの拡張された [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") は、尻尾の検出やテキスト分類など、モデルの新機能の性能評価を可能にしました。

これら2つのデータセットは公開されているため、他の研究者も利用でき、研究結果の再現や比較が容易になります。さらに、実用的な面でも大きな前進があり、Magiv2モデルはPopCharactersデータセットを活用して1万以上の公開されているマンガチャプターを直接転写することができます。キャラクターバンクデータセットの拡大に伴い、将来的にはさらに多くのマンガに対応できる可能性も示唆されています。

## 結果

Magiv2モデルにおける（1）ページごとの検出と関連付け、（2）チャプター全体のキャラクター命名の性能評価結果を以下に示します。

### 検出と関連付け/グラフ生成

単一のマンガページを入力として、グラフ生成モデルの性能が以下の観点から評価されました。

#### ノード（要素）の検出

キャラクター、テキスト、コマ、吹き出しの尻尾の検出精度が評価されました。標準的なオブジェクト検出評価指標である平均精度（Average Precision）が用いられ、PopManga-XとManga109データセットで測定されました。結果は下の表にまとめられています。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_73876_9-1024x180.png)

Magiv2は既存のモデルと比較して同等以上の性能を示しました。

#### エッジ（関連性）の予測

3種類のエッジ予測が評価されました。

（１）キャラクター間の関連付け

ページごとのクラスタリング問題として扱われ、AMI、NMI、P@1、R-P、MRR、MAP@Rなどの指標で評価されました（下記表）。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_73876_10-1024x510.png)

（２）テキストとキャラクターの関連付け

二値分類問題として扱われ、平均精度で評価されました（下記表）。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_73876_11-1024x87.png)

（３）テキストと尻尾の関連付け

同じく二値分類問題として扱われ、平均精度で評価されました。こちらも上記の表に記載されています。

#### テキスト分類

検出されたテキストを「本質的（セリフ）」と「非本質的（効果音など）」に分類する性能も評価されました。Magiv2は高い精度を達成しました。

下3つの図は、本研究で開発されたMagiv2モデルの実行結果例を示します。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_73876_6-2-1024x461.jpg)

この図は、グラフ生成モデルによる予測が視覚化されています。マンガページ上で、コマ（緑）、キャラクター（青）、本質的と分類されたテキスト（赤）、吹き出しの尻尾（紫）が検出されています。さらに、テキストとキャラクターの関連付け（赤の点線）、テキストと尻尾の関連付け（紫の点線）、キャラクター同士の関連付け（各グループに固有の色）も表示されており、モデルがページ内の要素間の関係をどのように理解しているかが分かります。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_73876_7-2-1024x460.jpg)

こちらの図は、2つの異なるマンガシリーズの複数ページにわたるキャラクター名の予測結果が示されています。チャプター全体を通してキャラクター名が一貫して使用されていることが確認できます。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_73876_8-2-1024x460.jpg)

そして、この図は、本手法によって生成された最終的な複数ページにわたる台本が示されています。モデルが検出と関連付け、キャラクター命名の結果を統合して、読みやすい形式の台本を生成できることを示しています。

### 考察

先行研究と比較して、Magiv2は以下の点で優れた性能を示しました。

1. ページごとのキャラクタークラスタリングの改善
2. 話者の特定（テキストとキャラクターの関連付け）の大幅な向上
3. 境界ボックス検出での同等の性能

さらに、Magiv2は先行研究にはなかった新機能を実現しました。

- 吹き出しの尻尾の検出とテキストとの関連付け
- テキストの本質的/非本質的分類

### チャプター全体のキャラクター命名/キャラクター識別

PopManga-Xのテストセットを使用して、チャプター全体でのキャラクタークラスタ形成と一貫した命名の効果が評価されました。各チャプターに対して、PopCharactersデータセットから作成されたチャプター固有のキャラクターバンクが使用されました。

ベースラインとしては単純な [K-means法](https://ai-data-base.com/archives/26192 "k平均法（k-means法）") クラスタリングや、異常検出とK-meansを組み合わせた手法などが実装され、比較されました。

#### 結果と考察

提案されたアプローチは、従来のクラスタリングベースの解決策と比較して大幅に優れた性能を示しました。下の表にまとめられています。

![](https://ai-data-base.com/wp-content/uploads/2024/08/AIDB_73876_12-1-1024x194.png)

以下が強調されています。

1. 類似した外見の異なるキャラクターを区別する能力の向上
2. 空間的な手がかりの活用（例：同じパネル内の異なるキャラクター）

評価結果をまとめると、Magiv2がチャプター全体の台本生成において大きな進歩を遂げています。

## まとめ

本記事では、マンガのストーリーを捉えて台本を生成する技術を紹介しました。

研究チームは、Magiv2という新しいモデルを開発し、チャプター全体のキャラクター命名のために「制約付き最適化アプローチ」を導入しました。また、PopCharactersとPopManga-Xという2つの新しいデータセットが作成されました。

本手法は、現在入手可能な1万冊以上のマンガチャプターをキャラクター名付きで転写することが可能にするとのことです。

そして、視覚障害者のマンガ読書体験を助けるものとして期待されています。

- 参照論文URL： [https://arxiv.org/abs/2408.00298](https://arxiv.org/abs/2408.00298)
- モデルとデータセット： [https://github.com/ragavsachdeva/magi](https://github.com/ragavsachdeva/magi)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[LLMベースの万能エンジニアを構築する『OpenHands（旧OpenDevin）』プラットフォーム](https://ai-data-base.com/archives/73891)

[「LLMはプロンプトから新しいタスクを学べるのか？」 という根本的な問いに対する3つの仮説を検証](https://ai-data-base.com/archives/74020)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)