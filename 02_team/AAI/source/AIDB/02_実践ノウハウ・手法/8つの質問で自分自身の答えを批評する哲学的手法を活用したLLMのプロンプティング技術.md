---
title: "8つの質問で自分自身の答えを批評する哲学的手法を活用したLLMのプロンプティング技術"
source: "https://ai-data-base.com/archives/81166"
author:
  - "[[AIDB Research]]"
published: 2024-12-25
created: 2025-06-13
description: "本記事では、大規模言語モデル（LLM）の推論能力を向上させる新たな手法を紹介します。LLMは目覚ましい発展を遂げている一方で、思考や推論において依然として課題を抱えています。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、大規模言語モデル（LLM）の推論能力を向上させる新たな手法を紹介します。

LLMは目覚ましい発展を遂げている一方で、思考や推論において依然として課題を抱えています。

そこで今回研究者らは、哲学者のフレームワークをLLMに応用することでモデルの推論能力を向上させる研究を行いました。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_81166-1-1024x576.jpg)

**発表者情報**

- 研究者：Federico Castagna et al.
- 研究機関：ブルネル大学ロンドン校、リンカーン大学

**プロンプティング技術の関連研究**

- [LLMには正解例だけでなく、「よくある間違い例」と理由も一緒に教えるのが有効](https://ai-data-base.com/archives/77507)
- [LLMの推論能力は単純に文脈を繰り返すだけでも大幅に向上　最大で30%改善](https://ai-data-base.com/archives/76967)
- [LLMの推論能力を戦略的に向上させる新しいプロンプト手法『SCoT』](https://ai-data-base.com/archives/75505)

## 背景

2022年11月のChatGPTリリース以降、様々な企業や組織から新たなLLMが次々と発表され、性能の向上が進められてきました。

しかし現状のLLMには、重要な課題が残されています。複雑な推論能力を必要とするタスクにおいて、モデルは依然として誤りを起こしやすい傾向にあります。研究者たちの分析によれば、LLMは学習データの記憶と再現には長けているものの、未知の問題や学習時に見たことのない推論課題への対応には苦心していることが指摘されています。実際、トレーニングデータに含まれていないパターンの推論問題に直面した際、パフォーマンスが著しく低下することが確認されています。

LLMの性能を向上させるための手法として、「思考の連鎖（Chain of Thought）」と呼ばれるアプローチが開発されてきました。推論の過程を段階的に示すことで、モデルの論理的思考を強化しようという試みです。

一方で人間の思考プロセスに関する研究分野では、Toulminという哲学者によって提唱された「議論モデル」という理論が支持されています。人間の推論において重要なのは最終的な結論だけでなく、その結論に至るまでの根拠や思考過程であるという考えが体系化されたものです。さらに、議論の妥当性を検証するための「批判的質問」という手法も確立されています。

そのような背景のもと、研究者らはToulminの議論モデルと批判的質問の概念をLLMに応用し、モデルの推論能力を向上させる新たな手法の開発に取り組みました。従来の手法では十分に解決できなかった論理的推論の課題に対し、人間の思考プロセスの研究から得られた知見を活用するアプローチです。

## Toulminの議論モデルとは

Toulminの議論モデルは、結論(クレーム)を導く際の論理的プロセスを構造化したフレームワークとして知られています。結論に至るまでの道筋を、データ（事実や根拠）、ワラント（データと結論を結ぶ推論規則）、バッキング（ワラントを支える背景知識）、リバタル（反論の可能性）、クオリファイア（結論の確実性の度合い）といった要素で分解して表現します。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_81166_1-1024x364.png)

Toulminの議論モデル図。

議論の妥当性は、設定された前提から結論が論理的に導かれているかによって判断されます。単純に結論を述べるのではなく、なぜその結論に至ったのかという過程を明示的に示すことが重要とされています。

そこで重要になってくるのが批判的質問で、議論の各要素に対して投げかけられる検証のための問いかけです。前提は明確か、証拠は十分か、推論は論理的か、結論は妥当かなどを確認することで、議論の質を高めることを目指します。

本研究では、LLMが生成した推論過程に対して批判的質問を投げかけ、その回答に基づいて推論を修正するという手法が採られています。

## 方法論

研究者らは今回提唱するアプローチをCQoT（Critical-Questions-of-Thought）と呼んでいます。

CQoTには4つの段階が設定されています。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_81166_2-1024x412.png)

CQoTパイプラインの4つのステップを示すフローチャート。（Step1:論理的推論、Step2:CQによる評価、Step3:結果の判定、Step4:回答生成）

### パイプラインの4つのステップ

研究者らによって開発されたパイプラインは、4つのステップで構成されています。人間が慎重に推論を組み立てていくのと同じように、段階的に検証を重ねながら回答を生成する仕組みが構築されています。

**ステップ1（推論計画の作成）  
**まずLLMは、与えられた質問に対して論理的な推論計画を作ります。ここでは最終的な回答は出さず、「どのような前提から、どのような結論を導くか」という思考の道筋だけを明確にします。

**ステップ2（批判的質問による評価）  
**作られた推論計画の質を、8つの批判的質問を使って評価します。例えば「前提は明確か」「論理的なつながりは適切か」といった質問に対して、モデルが「はい」か「いいえ」で答えていきます。

**ステップ3（評価結果の判定）  
**8つの質問のうち、どれだけ「はい」の回答が得られたかを確認します。最初の5回の試行では、8問中7問以上の「はい」が必要です。それを達成できない場合は、ステップ1に戻ってやり直します。6回目以降は基準が緩和され、8問中5問以上の「はい」で合格となります。

**ステップ4（最終回答の生成）  
**評価基準を満たした推論計画に厳密に従って、最終的な回答を生成します。つまり、検証済みの論理的な道筋に沿って結論を導き出します。

なお、上記のパイプラインはPythonで自動化されます。スクリプトはGitHubで公開されています。モデルへのアクセスが必要となりますが、ユーザー自身が検証することができます。

### “批判的質問”

議論の質を高めるため設計された8つの批判的質問は以下の通りです。

1. 推論は、はっきりとした前提に基づいて始まっているか
2. その前提は、証拠や一般的に受け入れられている事実に裏付けられているか
3. 推論の中で、前提と結論がちゃんとつながっているか
4. そのつながり方は正しいものか
5. 推論の中に間違いや論理的なズレがないか
6. 結論は、前提からきちんと導き出されているか
7. 推論は、一般的な知識やルールと矛盾していないか
8. その結論は、無理がなく納得できるものになっているか

質問への回答が一定基準を満たさない場合、結論は採用されません。

### モデル選定のアプローチ

オープンサイエンスの原則に則り、研究者らは無料で利用可能なモデルのみを使用しました。

高性能な商用モデル

- Gemini 1.5-pro-001
- GPT-4o
- Claude Sonnet 3.5

オープンソースモデル

- Llama 3.1-70b-Instruct
- Nemotron-51b-Instruct

幅広い評価を行うため、異なる企業が開発したモデルが意図的に選ばれています。

## 評価

研究者らは、提案したCQoTパイプラインの効果を検証するため、標準的なLLMおよび思考の連鎖（Chain of Thought：CoT）を実装したモデルとの比較評価を実施しました。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_81166_3.png)

モデルの回答比較。Llama 3.1 70b-Instructの標準出力（誤答）とCQoT使用時の出力（正答）の対照。

さらに、批判的質問の効果を明確にするため、パイプラインの一部のステップを省略したアブレーション実験も行われました。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_81166_4-1024x628.png)

アブレーション実験用の簡略化された2ステップパイプライン図。（Step1とStep4のみを使用）

### 実験設定

評価には、MT-Benchの数学と推論に関する問題が選択されました。研究者らは、ベンチマーク問題がモデルの学習データに含まれている可能性を考慮しつつも、同じモデルに対してCoTとCQoTの両方を適用することで、公平な比較が可能になると判断しました。各モデルには40問の課題が与えられ、数学と推論の問題が均等に配分されました。

### モデルのパラメータ設定

Llama 3.1-70b-InstructとNemotron-51b-Instructでは、創造性と計算効率のバランスを考慮したパラメータ調整が行われました。Gemini 1.5-pro-001では、プラットフォームの制約内で最適な設定が選択されました。

### 評価方法

モデルの回答評価には、GPT-4oが判定者として採用されました。数学問題の評価に優れた性能を示したことが選定理由とされています。評価の信頼性を高めるため、同じスコアが3回連続で出現するまで判定が繰り返されました。また、回答の長さによる不当な評価を防ぐため、補正用のプロンプトも用意されました。

### 実験結果と分析

実験結果から、CQoT手法の有効性が明確に示されました。標準的なLLMやCoTと比較して、推論能力と数学的思考の両面で優れた性能が確認されています。

数値で見ると、推論タスクでは平均約4.6%、数学タスクでは平均約5.4%の性能向上が達成されました。GPT-4o、Gemini 1.5-pro-001、Llama 3.1-70b-Instructといったモデルで顕著な改善が見られました。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_81166_5-1024x275.png)

評価スコア（1-10の範囲）の平均値を示す比較表。各行で最高結果を強調表示。

興味深い発見として、オープンソースのLlama 3.1-70b-InstructがCQoT手法を用いることで、商用モデルのGPT-4oの基本性能を上回る場合も確認されました。同様に、より小規模なNemotron-51b-InstructモデルでもGemini 1.5-pro-001を数学タスクで凌ぐ結果が得られています。

ただし、Claude Sonnet 3.5では数学タスクにおいてCoTとCQoTが同等の性能を示し、Nemotron-51b-Instructでは推論タスクでCoTの方が優れた結果となりました。実験結果から、モデルの規模が70B程度を下回ると、CQoT手法の効果が限定的になる可能性が示唆されています。

また追加実験として、CQoTパイプラインから批判的質問のステップを除外した簡略版でも検証が行われました。結果として、批判的質問が性能向上に重要な役割を果たしていることが確認されましたが、簡略版でも標準的なLLMよりは良い性能を示しました。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_81166_6-1024x155.png)

アブレーション実験の結果を示す評価スコア表。標準、Step1-4のみ、CQoTの比較。

MT-BenchのReasoningとMathタスクにおいて、標準的なLLMやChain-of-Thoughtと比較して有意な性能向上が達成されました。性能改善は、GPT-4o、Gemini 1.5-pro-001、Llama 3.1-70b-Instructで顕著に表れています。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_81166_7-1024x582.png)

ベースラインモデルとCQoT使用時の性能比較を示す棒グラフ。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_81166_8.png)

各モデルの平均スコアと標準誤差を示す詳細な性能比較グラフ。

実験結果から見えてきた重要な点は、推論プロトコルの設計とその検証プロセスの関係性です。Step 1で生成される推論プロトコルが、最終的な回答の質を大きく左右することが明らかになりました。批判的質問による検証プロセスは、誤った推論プロトコルをほとんど排除できますが、完璧ではありません。規模の小さなモデルでは、誤った推論が検証をすり抜けてしまうケースも観察されています。

実用面での成果として注目されるのは、オープンソースモデルの性能向上です。Llama 3.1-70b-InstructがCQoT適用後に、商用モデルのGPT-4oの基本性能を上回る場面が見られました。また、より小規模なNemotron-51b-Instructでも、Gemini 1.5-pro-001を数学タスクで上回る結果が得られています。

![](https://ai-data-base.com/wp-content/uploads/2024/12/AIDB_81166_10.png)

CQoT使用時の性能向上率を示すパーセンテージ表。ベースラインとCoTとの比較結果。

しかし、CQoT手法には制限も存在します。モデルが潜在的に正しい回答を出力できる可能性がある場合に限り、その確率を高める効果があると分析されています。全く新しい推論能力を生み出すわけではなく、むしろ既存の能力を最適化する働きをすると理解されています。

研究チームは、予備実験の結果から、モデルサイズが70B以上である場合にCQoT手法が最も効果的に機能すると推測しています。より小規模なモデルでは、指示に忠実に従う能力が限られているため、CQoTの効果が制限される可能性が指摘されています。

なお実装面での課題として、推論時間の増加が挙げられています。ハードウェアの性能に応じて数秒から数分の追加時間が必要となることが報告されています。

## 考察

人間が複雑な問題を解くとき、十分な時間をかけて考えることで良い結果が得られます。同様に、LLMも推論に時間をかけることで、より良い答えを導き出せることが分かりました。また、人間の思考過程では、主張の根拠を確かめたり、反論を検討したりすることが重要な役割を果たしています。

### パイプラインの仕組みについて

CQoTパイプラインは、最初に問題解決の道筋を立てる段階が最も重要です。この道筋に沿って最終的な答えが導かれるため、最初の計画が適切でないと良い結果は得られません。批判的質問によって間違った道筋は見つけ出されますが、小さなモデルでは見落としが起きることもあります。

### アプローチの利点

無料で利用できる比較的小さなモデルでも、高価な大規模モデルに匹敵する結果が得られました。また、モデルの種類を問わず効果が確認され、既存の性能向上技術と組み合わせることで、さらに良い結果が期待できます。

### 現状の研究条件における限界

しかし、評価を行うモデルが時々誤った判断をし、修正が必要になることがありました。また、テストされたモデルの数が限られており、特に小規模なモデルでの効果ははっきりしていません。パラメータ数が70億未満のモデルでは効果が限定的で、処理に時間がかかる課題も残されています。

### 今後の展望

新しい学習方法との組み合わせや、モデル同士が協力して問題を解く方法が提案されています。また、モデルの大きさと性能向上技術の関係について、さらなる研究が必要とされています。CQoTは期待できる手法として注目されていますが、実用化には更なる改良が求められています。

また研究者らは、CQoTアプローチの発展可能性として、テスト時トレーニングとの統合や批評モデルとの協調的手法の開発を想定しています。モデルの規模に応じた性能のスケーリングや、様々なプロンプト技術との相互作用についても、さらなる研究が必要とされています。既存のアプローチと比較して、CQoTは少ないサンプル数で効果を発揮できる利点を持っていますが、より広範な検証と改善の余地が残されています。

## まとめ

本記事では、LLMの推論能力を向上させるCritical-Questions-of-Thoughtアプローチの研究を紹介しました。

研究者らは人間の思考フレームワークとして影響力のあるToulminの議論モデルを応用し、批判的質問による推論の検証プロセスを実装することで、モデルの推論性能を向上させることに成功しています。人間の思考プロセスの知見をLLMに活用する新たなアプローチとして注目されます。

**参照文献情報**

- タイトル：Critical-Questions-of-Thought: Steering LLM reasoning with Argumentative Querying
- URL： [https://arxiv.org/abs/2412.15177](https://arxiv.org/abs/2412.15177)
- 著者：Federico Castagna, Isabel Sassoon, Simon Parsons
- 所属：Brunel University London, University of Lincoln

## 理解度クイズ（β版）

1\. Critical-Questions-of-Thought (CQoT)アプローチの主な目的は何ですか？

CQoTは人間の思考プロセスと批判的質問の概念をLLMに応用し、モデルの論理的推論能力を向上させる手法です。Toulminの議論モデルを基礎として、結論の妥当性を検証するプロセスを実装しています。

解説を見る

2\. CQoTパイプラインの重要なステップはどれですか？

CQoTパイプラインでは、批判的質問による評価と検証が中心的な役割を果たします。この過程で推論の質が評価され、基準を満たさない場合はプロセスが最初からやり直されます。

解説を見る

3\. 研究で明らかになったCQoTの主要な利点は？

オープンソースの比較的小規模なモデルが商用の大規模モデルと同等以上の性能を発揮できることが実証されました。モデルの [アーキテクチャ](https://ai-data-base.com/archives/26562 "アーキテクチャ") に依存しない汎用性の高さも確認されています。

解説を見る

4\. CQoTの現状における主な課題は？

処理時間の長さが実用上の課題となっており、特に小規模モデルでの効果は不確実です。パラメータ数70億を境に性能差が見られることから、モデルの規模による制約も示唆されています。

解説を見る

5\. 研究における評価方法の特徴は？

モデルの回答評価にはGPT-4oが判定者として採用され、同じスコアが3回連続で出現するまで判定が繰り返されました。回答の長さによる不当な評価を防ぐため、補正用のプロンプトも用意されました。

解説を見る

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[18兆トークンで学習されたオープンソースLLM『Qwen2.5』シリーズの性能](https://ai-data-base.com/archives/81076)

[LLMと人間の協働に必要となる「ユーザーの適切な依存」](https://ai-data-base.com/archives/81239)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)