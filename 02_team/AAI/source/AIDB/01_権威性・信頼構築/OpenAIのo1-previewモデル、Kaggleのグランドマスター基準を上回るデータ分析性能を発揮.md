---
title: "OpenAIのo1-previewモデル、Kaggleのグランドマスター基準を上回るデータ分析性能を発揮"
source: "https://ai-data-base.com/archives/77077"
author:
  - "[[AIDB Research]]"
published: 2024-10-16
created: 2025-06-13
description: "本記事では、OpenAIが開発した「機械学習タスクにおけるAIエージェントの能力を評価する新しいベンチマーク」MLE-benchを紹介します。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、OpenAIが開発した「機械学習タスクにおけるAIエージェントの能力を評価する新しいベンチマーク」MLE-benchを紹介します。実世界で必要とされる複雑で多岐にわたるスキルセットを総合的に評価することを目的としたデータセットです。

研究者らはこのベンチマークをどのように作成したのか、および現在の最先端モデルはどれほどの性能なのかをテストしました。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77077-1024x576.jpg)

**参照論文情報**

- タイトル：MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering
- 著者：Jun Shern Chan, Neil Chowdhury, Oliver Jaffe, James Aung, Dane Sherburn, Evan Mays, Giulio Starace, Kevin Liu, Leon Maksin, Tejal Patwardhan, Lilian Weng, Aleksander Mądry
- 研究機関：OpenAI

## 背景

最近ではLLMの能力において、プログラミングや機械学習の分野で目覚ましい進展が見られています。一部のモデルは、コード生成や機械学習タスクにおいて人間と同等か、それ以上の性能を示すようになってきました。

モデルの評価方法には、単純なコーディング能力や特定の機械学習タスクの性能を測るものが多くあります。例えば、自然言語の説明からコードを生成する能力を測定したり、個別の機械学習問題を解く能力を評価したりするものです。  
しかし、これまでの評価方法には、実際の機械学習エンジニアリングで求められる複雑で多様なスキルを十分に評価できないという課題があります。

実世界の機械学習エンジニアリングでは、データの前処理、モデルの設計と訓練、実験の実行、結果の分析など、様々なスキルが必要とされます。また、長期的なプロジェクト管理や複雑な問題に対する試行錯誤も重要です。そのため、モデルにおける上記の能力を総合的に評価できるベンチマークが求められています。

LLMがこのような複雑なタスクを自律的に実行できるようになれば、科学研究や技術開発がさらにスピードアップする可能性があります。（ただし一方でリスクも考えなければいけません）

このような背景から、OpenAIの研究者らは「MLE-bench」という新しいベンチマークを開発しました。Kaggleの機械学習コンペティションを基にした実践的な評価システムです。エージェントの能力を人間の専門家と直接比較し、より正確にAIの進歩を測定することができると考えられています。

以下で詳しく紹介します。

## MLE-BENCHのデータセット

MLE-benchは、機械学習エンジニアリングのスキルを評価するために”慎重に”選ばれた75のKaggleコンペティションから構成されています。75のKaggleコンペティションは次のプロセスで作成されました。

1. まず、 [Meta Kaggle](https://www.kaggle.com/datasets/kaggle/meta-kaggle) データセットに掲載されている5,673の完了したKaggleコンペティションが確認された
2. コミュニティコンペティションは品質管理が厳密でないため除外された
3. 残りの586のコンペティションについて、現代的な課題に関連性があるかどうかが手動でスクリーニングされた
4. 採点手順を再現できない競争や、適切なトレーニングとテストの分割を再作成できないコンペティションも除外された
5. そのあとの選定基準は以下の通り
	- コンペティションの説明が明確で、タスクが理解しやすいこと
	- 評価指標がローカルで計算可能であること
	- コンペティションが終了しており、変更される可能性が低いこと
	- データセットがKaggle以外で広く使用されていないこと
	- トレーニングセットとテストセットが同じ分布から来ていること
	- 最終提出物がCSVファイルであること
	- データセットのライセンスがベンチマークへの包含を制限しないこと

このプロセスを経て、75のコンペティションがMLE-benchに含まれることになりました。

複雑さのレベルも以下が各コンペティションに割り当てられました。

- 低: 経験豊富なMLエンジニアが2時間未満で妥当な解決策を生み出せる
- 中: 2〜10時間かかる
- 高: 10時間以上かかる

最終的な内訳は、低複雑度が22個(30%)、中複雑度が38個(50%)、高複雑度が15個(20%)となりました。

なお、7つの追加コンペティションが開発用セットとして使用され、エージェントの開発に使われました。テストセットへの過適合を避けるためです。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77077_1-1024x347.png)

MLE-benchはエージェントのためのオフラインKaggleコンペティション環境であり、各コンペティションには説明、データセット、採点コードが含まれる。提出物はローカルで採点され、実世界の人間の試行と比較される。

## 評価指標

### リーダーボード

MLE-benchの性能は、各Kaggleコンペティションのリーダーボードを用いて評価されます。Kaggleには通常、「Public」と「Private」の2つのリーダーボードがありますが、MLE-benchではより信頼性の高い「Private」リーダーボードが採用されています。

### メダル

Kaggleと同様に、MLE-benchでもエージェントの提出物に対してメダルが授与されます。メダルは、リーダーボード上の順位に基づいて銅、銀、金の3種類が与えられます。参加チーム数によってメダルの基準が変わりますが、これはどのコンペティションでも同じレベルの達成を反映するためです。

### 主要な評価指標

MLE-benchの総合的な評価指標は、「メダルを獲得した試行の割合」です。人間のKaggleの上位参加者の成績と比較できるために設定されました。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77077_3-1024x194.png)

Kaggleコンペティションでメダルを獲得するためのしきい値は、各コンペティションに参加しているチーム数によって異なる。MLE-benchでも同じしきい値を実装している。

### 生スコア

各競争の生のスコアも記録されます。これはコンペティションごとの進捗を追跡するのに役立ちますが、コンペティションによって評価指標が異なるため、全体での集計は難しいです。

## セットアップ

MLE-benchは、各コンペティション争に対してCSVファイルを提出するだけで評価できるよう設計されています。ただし、開発者には使用したモデルやスキャフォールディング、ハードウェア、実行時間などの詳細を報告することが推奨されています。

### 提出の検証

実際のKaggleコンペティションでは、参加者は1日に5回までPublicリーダーボードに提出できます。MLE-benchでは、エージェントが提出物の妥当性をチェックできるローカル検証サーバーを提供しています。ただし、このツールはスコアは提供せず、提出が有効かどうかのみを確認します。

### ルール

1. 提出物は、エージェントとは別のモデルによって生成される必要がある  
	（エージェントが自身の知識から直接予測を書き込むことを防ぐため）
2. エージェントは、オンラインで見つかる解決策を閲覧することは禁止

なお、GPT-4oを使用したツールがエージェントのログを検査し、ルール違反がないかチェックされます。またDolosという検出ツールを使用して、エージェントの提出コードとKaggleの上位50のノートブックが比較されます。

## 実験と結果

実験では、さまざまなモデルとスキャフォールディング（足場。要するにエージェントのフレームワーク）の組み合わせを評価しました。実験環境として、各エージェントには24時間の制限時間と、36個のvCPU、440 [GB](https://ai-data-base.com/archives/26343 "勾配ブースティング") のRAM、4095GiBのSSD、1台のNvidia A10 [GPU](https://ai-data-base.com/archives/26570 "GPU") が与えられました。

### スキャフォールディングの比較実験

まず、GPT-4oモデルを使用して、3つの異なるオープンソースのスキャフォールディングが評価されました。

1. [AIDE（Kaggleコンペティション用に特化）](https://github.com/WecoAI/aideml)
2. [MLAgentBench（MLAB）からのResearchAgent（汎用）](https://github.com/snap-stanford/MLAgentBench)
3. [OpenHandsプラットフォームからのCodeActAgent（汎用）](https://docs.all-hands.dev/modules/usage/agents)

その結果、AIDEが最も高い成績を収め、平均8.7%の競争でメダルを獲得しました。

またMLABとOpenHandsは、それぞれ0.8%と4.4%のメダル獲得率でした。興味深いことに、有効な提出回数はほぼ同じでした。

AIDEはKaggle競争に特化して設計されているため、より高い性能を示したと考えられます。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77077_figure2-1024x736.png)

3つの異なるエージェントフレームワークがMLE-benchのコンペティションに挑戦する実際の軌跡の抜粋。現実世界のR&Dと同様に、これらの問題を解くには試行錯誤の繰り返しが必要。

### モデルの比較実験

次に、最も成績の良かったAIDEを使用して、4つの異なるモデルを評価しました。

1. o1-preview（OpenAI）
2. GPT-4o（OpenAI）
3. Claude 3.5 Sonnet（Anthropic）
4. Llama 3.1 405B（Meta）

この結果、o1-previewが他のモデルを大きく上回り、競争の16.9%でメダルを獲得しました。次点モデルの約2倍の成績です。o1-previewは平均して7つの金メダルを獲得しました。これはKaggleのグランドマスター（5つの金メダルが必要）の基準を超えています。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77077_4-1024x370.png)

スカフォールディングとモデルの実験結果。各実験は3つのシードで繰り返され、o1-preview (AIDE)とGPT-4o (AIDE)はそれぞれ16と36のシードを使用。スコアは平均±標準誤差で表示。

ただし、この結果には次の注意点があります。まず、MLE-benchの全てのコンペティションがメダルを授与するわけではありません。データセットと採点方法が若干修正されています。さらにエージェントは多くの場合、元の参加者よりも新しい技術を使用できる利点があります。

### 試行回数の増加はどう影響するか

次に、エージェントが各コンペティションに対して複数回挑戦できるようにした場合の性能変化を調査しました。

pass@k指標（k回の試行のうち少なくとも1回メダルを獲得できる確率）が測定されます。また、GPT-4o（AIDE）とo1-preview（AIDE）の両方で実験を行いました。

結果、試行回数が増えるにつれて、メダル獲得率が一貫して向上しました。例えば、GPT-4o（AIDE）は6回の試行（pass@6）で、o1-preview（AIDE）の1回の試行（pass@1）と同等の成績（約17%）を達成しました。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77077_5-1024x333.png)

許可される試行回数が増えるにつれて、メダル獲得の割合が増加する。GPT-4o (AIDE)のpass@6は、o1-preview (AIDE)のpass@1と同等のスコア（17.0%）を達成。両エージェントのpass@6スコアは、pass@1スコアのほぼ2倍。

両方のエージェントとも、6回の試行で1回の試行時の約2倍のメダル獲得率を示しました。

つまりエージェントに複数の機会が与えられると、より良い解決策を見つけられる可能性が高まることを示しています。

### 計算リソースの変更は効果があるのか

さらに、ハードウェア構成の違いがエージェントの性能にどう影響するかが調査されました。

この実験ではGPT-4o（AIDE）が3つの異なるハードウェア設定で比較されました。

1. CPU のみ
2. 標準設定（1台のA10 [GPU](https://ai-data-base.com/archives/26570 "GPU") ）
3. 追加 [GPU](https://ai-data-base.com/archives/26570 "GPU") （2台のA10 [GPU](https://ai-data-base.com/archives/26570 "GPU") ）

驚くべきことに、結果はほぼ同じでした。

- CPUのみ：9.1%
- 標準設定：8.7%
- 追加 [GPU](https://ai-data-base.com/archives/26570 "GPU") ：10.2%

エージェントは追加の [GPU](https://ai-data-base.com/archives/26570 "GPU") を活用しようとする試みは見られませんでした。エージェントがハードウェアリソースを最適に利用するようには設計されていないことを示唆しています。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77077_6-1024x169.png)

GPT-4o (AIDE)の異なるハードウェア構成での性能比較（3つのシードで平均化、標準設定は36シードを使用）。

### 利用時間の増加

また、エージェントに与える時間制限を延長した場合の影響を調査しました。

実験設定としては、GPT-4o（AIDE）に100時間の制限時間を与えました（標準の24時間から増加）。また最大 [ノード](https://ai-data-base.com/archives/26470 "ノード") 数も10倍の5,000に増やしました。1時間ごとにエージェントの最良の試行をスナップショットとして記録し、評価しました。

結果、エージェントは最初の数時間で多くのメダルを獲得しました。その後、時間とともにゆっくりとメダル獲得数が増加しました。興味深いことに、時々メダル獲得数が減少することもありました。その理由は、おそらくAIDEが「最良」の試行を選択する方法が完璧ではないためです。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77077_7.png)

GPT-4o (AIDE)がT時間後にメダルを獲得するコンペティションの割合（高いほど良い）。平均して、エージェントは時間が経つにつれて解決策を改善できることを示している。

## GPT-4oがKaggleに特化されている可能性はあるか？

研究者らは、実験に使用したモデルが事前に学習したデータによって不当に有利になる「汚染」の問題と、他者の解答をそのまま使用する「不正コピー」の問題を起こしているのか調査しました。

要するにモデルがコンペティションの解答を事前に学習してしまい、実際の問題解決能力ではなく記憶に頼ってしまう可能性があるのかという懸念です。また、公開されている解答の戦略を学習しているだけで、新しいML工学タスクには一般化できないのではないかという観点もあります。

### 上位解答との類似性

GPT-4oのコンペティション内容や勝利戦略への馴染み度が測定されました。各文書に対するモデルの単語予測確率を使用してこれを行いました。結果として、GPT-4oのコンペティションへの馴染み度と性能の間に相関関係は見られませんでした。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77077_8.png)

GPT-4oのコンペティションとの親密度とその性能（各コンペティションのサンプル提出スコアと金メダルスコアの間で 正規化 されたスコア）の間に正の相関関係は観察されない。

### コンペティション説明の難読化

コンペティションの説明を書き換えて、その出所を分かりにくくしました。モデルが単に馴染みのある問題を記憶された解答と照合しているだけなら、性能が低下するはずだと考えたためです。しかし、コンペティション説明の難読化前後でGPT-4o（AIDE）の性能に有意な差は見られず、元の説明では8.5%、難読化後では8.4%のメダル獲得率でした。

![](https://ai-data-base.com/wp-content/uploads/2024/10/AIDB_77077_9.png)

GPT-4oが既知の問題の解決策を単純に再現することに依存していた場合、コンペティションの指示を難読化するとその性能は低下するはずだが、難読化前後でGPT-4oの性能に有意な差は見られなかった。

### 不正コピー検出

Dolosという専用ツールを使用し、メダルを獲得した全ての提出物をチェックしました。結果として、メダルを獲得した提出物に不正コピーの証拠は見つかりませんでした。

### ログ分析

GPT-4o miniを使用してエージェントのログを分析し、ルール違反がないかチェックしました。ログ分析でもルール違反の証拠は見つかりませんでした。いくつかの誤検出がありましたが、人間による確認で問題ないと判断されました。

以上から、GPT-4oの性能がKaggleコンペティションに対して不当に高められているという証拠は見つかりませんでした。また、コンペティションの説明形式に過度に依存している証拠も見られませんでした。

ただし、微妙な汚染の影響を完全に排除することはできないとしています。そのため、MLE-benchを定期的に更新し、新しいKaggleコンペティションを追加することで、汚染の問題に対処し続ける必要があると考えています。

## AGIへの影響

研究者らは最後に、「エージェントが自律的に機械学習（ML）の研究を行える能力」がもたらす影響について論じています。

まず、ポジティブな影響として、エージェントがML研究を自律的に行えるようになれば、医療、気候科学、その他の分野での科学的進歩を加速させる可能性があります。また、モデルの安全性や整列性の研究を促進し、新製品開発を通じて経済成長を促す可能性も指摘されています。

しかし一方で、懸念点もあります。エージェントが自身のトレーニングコードを改善するような高度なML研究タスクを実行できるようになると、人間の研究者よりも速いペースで最先端モデルの性能を大幅に向上させる可能性があります。すると、イノベーションが私たちの理解や制御能力を超えるスピードで生み出される危険性があります。その結果、壊滅的な被害や誤用の可能性を持つモデルが、適切な安全対策や管理方法が確立されないまま開発されてしまう恐れがあります。

研究チームは、MLE-benchをオープンソース化することで、研究機関におけるリスクの透明性を高めたいと考えています。MLE-benchの大部分を解決できるようなモデルは、多くのオープンエンドなMLタスクを実行する能力を持っている可能性が高いためです。

ただしMLE-benchも完璧ではありません。例えばLLMのトレーニングに関する研究者のワークフローにより特化した評価方法は別に必要です。

## まとめ

本記事では、LLMエージェントの MLエンジニアリングタスク遂行能力を評価する新しいベンチマーク、MLE-benchの研究を紹介しました。

実験結果では、最先端のモデルとエージェントを組み合わせた場合、最大（o1-previewとAIDEを組み合わせた場合）、コンペティションの16.9%でメダルを獲得できることが示されました。

研究チームは、MLE-benchを以下のアドレスにオープンソース化しています。

- 参照論文URL： [https://arxiv.org/abs/2410.07095](https://arxiv.org/abs/2410.07095)
- ベンチマークコード： [http://github.com/openai/mle-bench/](http://github.com/openai/mle-bench/)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[LLMの推論能力は単純に文脈を繰り返すだけでも大幅に向上　最大で30%改善](https://ai-data-base.com/archives/76967)

[ロングコンテキストLLMでも、情報の数は「多ければ多いほど良い」わけではない](https://ai-data-base.com/archives/77127)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)