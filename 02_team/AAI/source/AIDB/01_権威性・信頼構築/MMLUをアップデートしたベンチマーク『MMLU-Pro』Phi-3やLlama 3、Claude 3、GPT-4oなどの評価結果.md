---
title: "MMLUをアップデートしたベンチマーク『MMLU-Pro』Phi-3やLlama 3、Claude 3、GPT-4oなどの評価結果"
source: "https://ai-data-base.com/archives/70358"
author:
  - "[[AIDB Research]]"
published: 2024-06-05
created: 2025-06-13
description: "LLMの性能が、様々な分野でどれほど進歩したかを測るための基準が大事になっています。今まではMMLU（Massive Multitask Language Understanding）が重要な基準でした。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

LLMの性能が、様々な分野でどれほど進歩したかを測るための基準が大事になっています。今まではMMLU（Massive Multitask Language Understanding）が重要な基準でした。しかし、モデルが賢くなるにつれて、MMLUだけではモデルの性能の違いを見分けるのが難しくなってきました。

そこで、研究者らはMMLU-Proという新しいデータセットを開発しました。MMLUよりもさらに難しく、論理的な思考力を試す質問を多く含んでいます。また、簡単すぎる質問や間違った質問を取り除きました。研究者らは早速、本ベンチマークにおけるGPT-4oなどのLLMの成績をテストしました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70358-1024x576.jpg)

**参照論文情報**

- タイトル：MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark
- 著者：Yubo Wang, Xueguang Ma, Ge Zhang, Yuansheng Ni, Abhranil Chandra, Shiguang Guo, Weiming Ren, Aaran Arulraj, Xuan He, Ziyan Jiang, Tianle Li, Max Ku, Kai Wang, Alex Zhuang, Rongqi Fan, Xiang Yue, Wenhu Chen
- 所属：University of Waterloo, University of Toronto, Carnegie Mellon University

## 背景

GPT-4、Claude、GeminiといったLLMが大きな進歩を遂げています。さまざまなタスクにおいて高い汎用性と専門性を示しており、専門家レベルの知能の実現に向けて大きく前進しています。

LLMの能力を評価するために、いくつかの代表的なベンチマークが使用されてきました。中でもMMLUは、幅広い分野をカバーし、質の高い問題を含んでいることから、LLMの評価に広く用いられてきました。

しかし、最新のLLMの急速な進歩によって、MMLUでの性能が頭打ちになってきています。2023年3月にGPT-4が86.4%の [正解率](https://ai-data-base.com/archives/25930 "正解率") を達成して以降、大きな進歩は見られていません。MMLUには以下のような問題点があると考えられています。

1. 選択肢が4つしかないため、LLMが本当に理解していなくとも答えを導き出せてしまう可能性がある。
2. STEM（科学・技術・工学・数学）分野の問題は知識重視で、複雑な推論を必要としない。
3. 解答不可能な問題や誤って [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") された問題が含まれている。

こうした背景から、LLMの能力をより適切に評価するために、新たなベンチマークMMPU-Proが開発されました。以下のような特徴があります。

1. 選択肢を10個に増やすことで、偶然正解する確率を下げ、難易度と頑健性を高めた。
2. 大学レベルの難しい問題を増やし、複雑な推論を必要とする問題を多く含めた。
3. 専門家によるレビューを2回行い、データセットのノイズを減らした。

実験では、最も性能が高いと考えられているモデルでも程よく苦戦しており、レベル設定の高さが示唆されています。下記は本実験で使用されたモデル一覧です。

**クローズドソースモデル**

GPT-4o  
GPT-4-Turbo  
Claude-3-Opus  
Claude-3-Sonnet  
Gemini-1.5-Pro  
Gemini-1.5-Flash  
Yi-Large

**オープンソースモデル**

Llama-3-70B-Instruct  
Llama-3-70B  
Llama-2-70B  
Llama-3-8B-Instruct  
Llama-3-8B  
Phi-3-medium-4k-instruct  
Phi-3-mini-4k-instruct  
DeepSeek-V2-Chat  
Qwen1.5-110B  
Qwen1.5-72B-Chat  
MAmmoTH2-8x7B-Plus  
Mixtral-8x7B-Instruct-v0.1  
Mixtral-8x7B-v0.1  
Mistral-7B-v0.1  
Gemma-7B  
Gemma-2B  
Yi-1.5-34B-Chat  
Yi-34B  
InternMath-20B-Plus  
InternMath-7B-Plus  
Staring-7B  
c4ai-command-r-v01  
OpenChat-3.5-8B  
Zephyr-7B-Beta  
Neo-7B-Instruct  
Llemma-7B

今回、上記モデルの結果がMMLUとMMLU-Pro両方でまとめられています。  
また、GPT-4oにおいてはエラーパターンも分析されています。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70358_1-1024x300.png)

MMLUとMMLU-Proの比較 – 性能差、プロンプトによる正解率分布、CoTと直接回答の性能比較

## MMLU-Proデータセットの概要

MMLU-Proデータセットは、14の分野に分かれた合計12,032の問題で構成されています。以下のように収集されました。

1. 元のMMLUデータセットから選別された問題
2. STEMウェブサイトから選ばれた高品質なSTEM問題
3. 定理の応用を必要とする、人手で [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") された高品質な問題を含むTheoremQA
4. 大学の試験から派生した高度な科学問題を含むSciBench

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70358_3-1024x348.png)

(a) MMLU-Proにおける分野の分布 (b) MMLU-Proにおける問題の出所の分布

データセットの構築は、以下のようなプロセスを経て行われました。

**（１）初期フィルタリング**

まず、元のMMLUデータセットの包括的なレビューが行われました。57のカテゴリーを14の大きなカテゴリーに統合し、重要な知識分野に評価を集中させ、冗長性を減らすことが目指されました。また、モデルを効果的に評価できない簡単すぎる問題も排除されました。

**（２）問題の収集と統合**

次に、STEM Website、TheoremQA、SciBenchから問題を追加することで、データセットが拡張されました。STEM Websiteの問題は解答付きの問題文の形式であり、TheoremQAの問題は簡単な答えを伴う質問の形式でした。なおデータセットに適合させるためにGPT-4-Turboが使用され、解答から短い答えを抽出して正解の選択肢とし、さらに3つの誤答選択肢が生成されました。

**（３）選択肢の拡張**

GPT-4-Turboを使用して、問題の選択肢が4つから10個に増やされました。これで正解を偶然に当てる確率が大幅に低下し、ベンチマークの難易度と頑健性が向上しました。

**（４）専門家によるレビュー**

データセットの品質と信頼性を確保するために、2段階の専門家レビューが行われました。

第1段階では、各答えの正確性が検証され、多肢選択式に適さない問題や必要な情報が不足している問題が取り除かれました。  
第2段階では、Gemini-1.5-Proモデルを使用して、すべての選択肢が再評価され、偽陰性が特定されました。その後、専門家が精査し、実際の誤答が正解と明確に異なることを確認しました。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70358_2-1024x156.png)

MMLU-Proデータセット構築のパイプライン

専門家レビューの過程で特定された問題は、以下の3つのカテゴリーに分類されました。

1. 不正解：元のMMLUデータセットに既に存在していた誤りと、STEM Websiteでの解答抽出の失敗によって生じた誤り。
2. 偽陰性の選択肢：STEM WebsiteやTheoremQAから単一の答えを4つの選択肢に変換する段階と、4つの選択肢を10個に拡張する段階で主に発生。
3. 不適切な問題：画像やテーブルなどの非テキスト情報を必要とする問題、結論を導くための十分なテキスト情報が不足している問題、多肢選択式に適さない問題（証明問題、真偽問題、オープンエンドの問題など）が含まれる。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70358_4.png)

専門家レビューの過程で特定された問題の分布

以上のプロセスを経て、MMLU-Proデータセットが構築されました。

## モデルの実行条件

MMLU-Proが含む難易度の高いタスクでモデルの性能を測定するために、5-shot Chain-of-Thought（CoT）アプローチが採用されました。

MMLUからの改良点として、各分野の代表的なデモンストレーション例を5つ選択したことが挙げられます。言語的確率を主に重視する従来の性能指標（例えばPerplexity）とは異なり、MMPU-Proの複雑さに対処するために推論能力を向上させることを見据えた選択です。

なお、モデルの回答から答えを抽出するために、「答えはA〜Jのうち何？」といった質問が必ずされました。

### 計算リソース

実験はNVIDIA A100 [GPU](https://ai-data-base.com/archives/26570 "GPU") で行われました。またモデルの推論速度を向上させるために、vLLMアクセラレーション手法が採用されました。これで、たとえば70億のパラメータを持つ言語モデルをMMPU-Proデータセットで評価するのに約20〜30分かかりました。さらに、APIコールを必要とするクローズドモデルでは、カスタムデータセットでの評価に約2000万の入力トークンと500万の出力トークンの処理が必要でした。

### データセットのライセンス

MMLU-Proデータセットは4つの異なるソースからのデータで構成されており、それぞれが独自のライセンス条項に準拠しています。

- MMLUデータセット：MITライセンス
- STEM Website：オープンライセンス
- TheoremQA：MITライセンス
- SciBench：MITライセンス

さらに、MMLU-Proデータセット自体もMITライセンスの下でライセンスされており、同様の条件下で幅広い使用性と配布権が保証されています。

## MMLU-Proでの各モデルの性能結果

MMLU-Proベンチマークにおいて、GPT-4oが最も高い性能を示し、全体で72.6%の正解率を達成しました。また、Phi-3-medium-4k-instruct（14Bパラメータ）とPhi-3-mini-4k-instruct（3.8Bパラメータ）も非常に優れた性能を示しました。これは、高品質の教育データによる事前学習と、コードによる学習が貢献している可能性があります。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70358_5-1-1024x260.png)

### クローズドソースモデルvsオープンソースモデル

実験結果から、トップクラスのクローズドソースモデルがオープンソースモデルを上回っていることがわかります。オープンソースモデルの中では、Llama-3-70B-Instructが56.2%の正解率で最も高い性能を示し、Yi-LargeやClaude-3-Sonnetに迫る結果となりました。しかし、GPT-4oやClaude-3-Opusにはまだ大きく差をつけられています。

### 分野別の結果

数学と物理学のような計算と推論を重視する分野では、モデル間の性能差が顕著でした。GPT-4oが70%以上の正解率を達成する一方で、Mistral-7B-v0.1は20%程度にとどまるなど、モデルの能力差が如実に表れました。

歴史と心理学のような知識を重視する分野では、推論を重視する分野と比べてモデルの性能の下限が高くなる傾向がありました。興味深いことに、DeepSeek-V2-Chatモデルはこれらの分野で他のモデルに比べて低い性能を示しました。これはつまり知識検索能力よりも推論能力が相対的に高いことを示唆しています。

工学と法学は、14の分野の中で一貫して低い正解率を示しました。モデルの出力を検証したところ、工学の低いスコアは主にSTEM Websiteから追加された新しい問題によるものであることがわかりました。複雑な式の導出や多段階の計算を必要とするため、今後の課題です。法学のスコアが低いのは、問題がより複雑で詳細になり、選択肢が増えたことで、法的推論の深い理解が必要になったためと考えられます。

### GPT-4oのエラー分析

現在MMLU-Proベンチマークで最高の性能を示しているGPT-4oについて、そのパフォーマンスの長所と短所を調べるためにエラー分析を行いました。GPT-4oが犯した120のランダムに選ばれた誤った予測を詳細に調査しました。専門家の判断に基づいて、各誤予測の根本的な原因を特定するために分析されました。

**推論エラー（39%）**

モデルは、正しい情報と知識を思い出せても、論理的な推論で頻繁に困難に直面します。多くの場合、モデルの応答における論理的な矛盾から生じます。問題の真の理解ではなく、学習データのパターン認識に依存しているためと考えられます。

**特定の知識の欠如（35%）**

GPT-4oモデルにおけるドメイン固有のエラーの根本的な原因は、専門知識の欠如です。金融計算の誤りや光学原理の誤った適用などのエラーは、この問題を浮き彫りにしています。

**計算エラー（12%）**

正しい公式を知っていても、値の計算を誤っているケースが見られました。

**その他のエラー**

残りのエラーには、選択肢なし（5%）、質問の理解エラー（4%）、生成の問題（2%）、 [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") エラー（2%）、答えの抽出エラー（1%）が含まれます。最終的な応答選択の制限、複雑なテキスト解釈の課題、応答生成の制限、データ [アノテーション](https://ai-data-base.com/archives/26297 "アノテーション") の不正確さ、モデル出力からの正確な答えの抽出の問題など、様々な要因に起因しています。

## MMLUとの比較

MMLU-Proは、難易度・推論の強さ・頑健性の観点からMMLUベンチマークと比較されました。

### 難易度

下記はMMLUとMMPU-Proの両方のベンチマークにおける各モデルのスコアを示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70358_7.png)

MMLUとMMLU-Proの性能比較

MMLUの場合、言語モデルの能力が向上するにつれ、スコアは上昇するだけでなく、密集して近接しておりモデル間の区別が難しくなっています。例えば、Gemini-1.5-Flash、Llama-3-70B-Instruct、Phi-3-medium-4k-instruct、Qwen1.5-110Bは、全て78%から82%の4%の範囲内にスコアがあり、4つのモデルを含む狭い範囲となっています。

一方でMMLU-Proでは、GPT-4o、Claude-3-Opus、GPT-4-Turboのようなモデル間のスコア差は、約9%に拡大しています（MMLUでは約2%であった）。また全体的にスコアも低く、モデル改善の道筋を知る助けとなっています。現在、最高のモデルであるGPT-4oでもMMPU-Proで72.6%のスコアしか出せていません。

### 推論レベル

下記は、MMLUとMMLU-Proにおける様々なモデルのChain of Thought (CoT) 手法と直接回答（DA）の性能の違いを示しています。CoT手法はMMPU-Proにおいて直接回答と比べてより大きな性能向上をもたらすことがわかります。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70358_9.png)

CoTと直接回答を用いたモデルの正解率の差

MMLUにおいてはGPT-4oはCoTでも1.5%のみの改善だったのに対して、MMLU-Proでは19.1%もの改善が見られました。さらに、GPT-4-TurboはMMPU-ProにおいてCoTで15.3%の性能向上を示しましたが、MMLUではCoTを使用することで逆に0.2%の性能低下が見られてしまっています。  
Phi3-medium-4k-instruct、Llama-3-8B、Gemma-7Bなどの他のモデルも同様の傾向を示し、直接回答と比べてMMPU-ProでのCoTによる性能向上が大きいことが示されました。  
MMLU-Proベンチマークが専門的レベルの問題解決を評価するものであることを示唆しています。

### 頑健性の程度

モデルの出力はプロンプトのわずかな変化によって大きく影響を受けることが広く知られており、モデルを評価する際の障害になっています。

プロンプトによる性能の変化は言語モデルの根本的な原理に関連したものです。しかし、高品質なベンチマークは、プロンプトの影響を最小限に抑え、より一貫性があり信頼性の高い評価を目指すべきです。

そこで24種類の異なる（しかし妥当な）プロンプトを使用してモデルが評価されました。その結果が下記の図です。

![](https://ai-data-base.com/wp-content/uploads/2024/06/AIDB_70358_8.png)

MMLUとMMLU-Proにおける異なるプロンプト下でのモデルの性能変動

MMLUベンチマークではプロンプトの影響は平均4〜5%、最大で10.98%でした。一方、MMLU-Proベンチマークでは、プロンプトの変更による影響は2%程度で、最大でも3.74%でした。MMLUベンチマークと比べてMMLU-Proベンチマークの一貫性と信頼性を示しており、言語モデルの能力をより確実に評価できることの定量的な証拠となっています。

## まとめ

本記事では、LLMの能力をより適切に評価するために開発されたMMPU-Proベンチマークに関する研究を紹介しました。複雑で推論を重視したタスクを取り入れ、モデルの性能差を効果的に識別できるベンチマークだとされています。

評価実験では、最先端のモデルでさえ苦労するほどの難易度が実現できていることが明らかになりました。

多肢選択形式の限界やマルチモーダルに対応していないなどの課題もありますが、MMLU-Proは、LLMの能力を測定するための有用なツールとして活用可能だと期待されます。

- 参照論文URL： [https://arxiv.org/abs/2406.01574](https://arxiv.org/abs/2406.01574)
- [https://github.com/TIGER-AI-Lab/MMLU-Pro](https://github.com/TIGER-AI-Lab/MMLU-Pro)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[グラフニューラルネットワークを活用したRAG手法『GNN-RAG』　7BのLLMでも最先端性能](https://ai-data-base.com/archives/70237)

[LLMの出力が信頼できるかを判定する手法　Google DeepMindが新しく考案](https://ai-data-base.com/archives/70453)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)