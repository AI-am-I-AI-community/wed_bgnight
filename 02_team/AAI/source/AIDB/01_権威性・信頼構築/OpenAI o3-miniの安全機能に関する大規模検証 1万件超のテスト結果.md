---
title: "OpenAI o3-miniの安全機能に関する大規模検証 1万件超のテスト結果"
source: "https://ai-data-base.com/archives/83156"
author:
  - "[[AIDB Research]]"
published: 2025-01-31
created: 2025-06-13
description: "本記事では、OpenAIの新しい言語モデル「o3-mini」の安全性評価に関する研究を紹介します。2025年初頭、OpenAIは一般公開に先立ち、o3-miniの安全性テストのための早期アクセスプログラムを実施しました。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、OpenAIの新しい言語モデル「o3-mini」の安全性評価に関する研究を紹介します。

2025年初頭、OpenAIは一般公開に先立ち、o3-miniの安全性テストのための早期アクセスプログラムを実施しました。

今回スペインの研究チームによって実施された1万件を超えるテストの結果から、o3-miniの安全性能力や、実用化に向けた課題が明らかにされています。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_83156-1024x576.png)

**発表者情報**

- 研究者：Aitor Arrieta et al.
- 研究機関：モンドラゴン大学、セビリア大学

論文情報詳細は記事の下部に記載されています。

## 背景

LLMは私たちの日常生活に深く浸透しています。そして利便性が高まる一方で、プライバシーの侵害、偏見の助長、誤情報の拡散といったリスクが懸念されています。

そんな中、OpenAIは現在（2025/1/31）、新しい言語モデル「o3-mini」の開発を進めています。一般公開に先立ち、OpenAIは安全性テストのための早期アクセスプログラムを実施しました。このプログラムには外部の研究機関が参加を許可され、実際のモデルを使用した安全性評価が依頼されました。

スペインのモンドラゴン大学とセビリア大学の研究チームは、独自に開発した自動テストツールを持っていたことから、OpenAIのこの早期アクセスプログラムに選定されました。研究チームは、o3-miniのベータ版に対して、1万件を超える入力データを用いた大規模な安全性テストを実施。その結果と知見が本研究で報告されています。

実験の結果、o3-miniはOpenAIの既存モデルと比較して、より強力な安全性メカニズムを備えていることが示唆されています。

以下で詳しく紹介します。

OpenAIの早期アクセスプログラムに選定されたスペインの研究チームは、独自開発した評価ツール「ASTRAL」を用いてo3-miniの安全性評価に取り組みました。

## 今回使用された評価ツール「ASTRAL」とは何か

ASTRALは、既存の安全性評価手法が抱える3つの課題を解決するために開発されました。

まず、既存の安全性評価手法が抱える3つの課題とはいったい何なのか、そしてASTRALの場合はどのように対処しているのでしょうか。

まず第一に、既存の手法では固定的なテストデータが使われることが多いという課題があります。ASTRALの場合は、新しい視点から生成された多様なテストデータを使用できるため、より柔軟で幅広いテストが可能です。

第二に、最新のトレンドや時事性を反映しづらいという点が挙げられます。ASTRALはインターネットから最新のニュースを取得し、それをテストに反映できる機能を備えているので、時事的な文脈を十分に考慮したテストを行えます。

第三に、大量のテストデータを効率的に評価・処理する仕組みが十分でない場合があるという課題があります。ASTRALの場合は、テスト結果の評価を自動化する機能を持ち、大規模なテストデータでも効率的に処理できるよう設計されています。

また、LLMの安全性評価には、実際のユーザーが行う可能性のある多様な入力パターンでのテストが重要だと考えられています。ASTRALは14種類の安全性カテゴリー、6種類の文体スタイル、5種類の説得技法を組み合わせることで、1万件を超える多様なテストデータを生成することができます。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_83156_2.png)

ASTRALのカバーする、14種類の安全性カテゴリー、6種類の文体スタイル、5種類の説得技法

また、最新の出来事を反映したテストが可能なため、o3-miniの実用的な安全性を評価するのに適していると判断されました。

以上のような背景から、研究チームはo3-miniの早期アクセス対象者に選ばれ、ASTRALを用いた大規模な安全性評価を実施することを決定しました。

なお、以下は、ASTRALがカバーしている内容を、上記の表をもとに書き起こしたものです。

#### 文体スタイル（Style）

- **S1: Slang**  
	日常会話やスラングなど、口語的で砕けた表現を用いるスタイル
- **S2: Uncommon dialects**  
	特定の地方訛りやアクセントなど、一般的ではない方言を用いるスタイル
- **S3: Technical terms**  
	専門用語や技術的な用語を導入するスタイル
- **S4: Role-play**  
	教師や医師、政治家など、特定の役割を演じる形でやりとりを行うスタイル
- **S5: Misspellings**  
	誤字やスペルミスをあえて含むスタイル
- **S6: Question**  
	疑問文を用いて問いかけるスタイル

#### 説得技法（Persuasion）

- **P1: Evidence-based persuasion**  
	統計データや事実情報など、実証的な根拠を示して説得を行う方法
- **P2: Expert endorsement**  
	専門家の見解など、ドメインエキスパートを引用して説得力を高める方法
- **P3: Misrepresentation**  
	虚偽または誤解を招く情報を提示するなど、誤った事実を用いる方法
- **P4: Authority endorsement**  
	公的機関や権威ある団体など、信頼性の高いソースを引用して説得を行う方法
- **P5: Logical appeal**  
	論理的で筋の通った説明や主張による説得方法

#### 安全性カテゴリー（Category）

- **C1: Animal abuse**  
	動物に対する虐待・残虐行為
- **C2: Child abuse**  
	子どもへの虐待行為
- **C3: Controversial topics, politics**  
	政治や社会の議論を呼ぶトピックなど、対立や争点を含む内容
- **C4: Discrimination, stereotype, injustice**  
	差別や偏見、不公正な扱いに関する内容
- **C5: Drug abuse, weapons, banned substances**  
	違法薬物や武器の使用、または取り扱いに関する内容
- **C6: Financial crime, property crime, theft**  
	金融詐欺や窃盗などの財産犯罪
- **C7: Hate speech, offensive language**  
	特定の人種・集団への憎悪表現や差別的言動
- **C8: Misinformation regarding ethics, laws, and safety**  
	倫理・法律・安全に関する誤情報、誤解を生む内容
- **C9: Non-violent unethical behavior**  
	暴力を伴わない不正行為や不道徳な行動
- **C10: Privacy violation**  
	プライバシー侵害に関する内容
- **C11: Self-harm**  
	自傷行為や自殺に関する内容
- **C12: Sexually explicit, adult content**  
	性的に露骨な表現や成人向けコンテンツ
- **C13: Terrorism, or [gan](https://ai-data-base.com/archives/26269 "敵対的生成ネットワーク（GAN）") ized crime**  
	テロ行為や組織的犯罪に関する内容
- **C14: Violence, aiding and abetting, incitement**  
	暴力行為の助長、扇動、幇助などに関する内容

ASTRALはこれらの要素を組み合わせて多様なテストを作成することができるのが特徴です。

## 実験手法

研究チームは、ASTRALを用いて2つの異なる時期に生成されたテストデータセットを用いて実験を行いました。異なる時期のデータを比較検証する手法が採用されたのは、安全性評価の信頼性を高めるためです。

### 第一テストセット (TS1) の概要

2024年11月に生成された第一テストセットでは、ASTRALの3つのバージョンが使用されました。

**RAGバージョン （基本機能）**

検索拡張生成（RAG）を実装したのみの基本的なバージョンです。異なる文体で生成するための指示機能（few-shot prompting）や、インターネットから最新ニュースを検索するTavily Search機能は含まれていません。このバージョンでは、基本的な安全性カテゴリーに基づいたテストデータの生成が行われます。

**RAG-FSバージョン （文体指示機能追加）**

基本機能であるRAGに加えて、few-shot prompting（FS）機能が追加されています。この機能により、スラングや方言、専門用語、ロールプレイなど、異なる文体でのテストデータ生成が可能になります。ただし、最新のニュースを参照する機能は含まれていないため、生成されるテストデータは時事的な内容を反映しません。

**RAG-FS-TSバージョン （最新情報参照機能追加）**

最も完成されたバージョンとして、RAGとfew-shot prompting機能に加え、Tavily Search（TS）機能が実装されています。インターネットから最新のニュースを検索・参照することで、現在の出来事に関連した最新のテストデータを生成することができます。実験では最も効果的な結果を示し、第二テストセットではこのバージョンのみが使用されました。

以上の各バージョンでそれぞれ1,260件のテストデータが作られ、合計3,780件のテストが実施されました。

### 第二テストセット (TS2) の特徴

第二テストセット（TS2）は2025年1月から生成が開始され、ドナルド・トランプ氏の就任やガザ地区の停戦など、その時期の重要な出来事に関連するテストケースが含まれています。TS1での検証で最も優れた性能を示したASTRAL（RAG+FS+TS）バージョンのみを使用して生成されました。

TS1では各組み合わせ（文体スタイル×説得技法×安全性カテゴリー）につき3件のテストデータが生成されていましたが、TS2では15件に増やされています。結果として、6種類の文体スタイル、5種類の説得技法、14種類の安全性カテゴリーの組み合わせから、合計6,300件のテストデータが生成されました。

テストの実行期間は2025年1月24日から29日までで、TS1の結果と合わせることで、異なる時期に生成された多様なテストデータによるo3-miniの総合的な安全性評価が可能になりました。

結果として、2つのテストセットを合わせた10,080件のテストデータによって、o3-miniの安全性が総合的に評価されました。テストデータは、異なる文体や説得技法、14種類の安全性カテゴリーを組み合わせて生成されており、実際のユーザーによる多様な利用シーンを想定した評価が行われています。

## 実験結果と考察

実験の結果、10,080件のテストデータのうち、87件で安全性に関する問題が確認されました。発見された問題の数は、以前のOpenAIモデルと比較して大幅に少なく、o3-miniの安全性能力の向上が示されています。

### 主な発見事項

#### 既存モデルとの比較における優位性

o3-miniでは87件の安全性の問題が検出されました。一方、同じテスト条件で評価された既存のOpenAIモデルでは、GPT-3.5で752件、GPT-4で166件、GPT-4oで215件の問題が検出されていました。問題検出数の大幅な減少は、o3-miniの安全性能力が著しく向上していることを示しています。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_83156_3-1024x145.png)

#### 他社モデルとの比較

先行研究でテストされたLlama 2では95件の問題が検出されていました。o3-miniは87件とわずかに少ない問題数を示しています。しかし研究チームは単純な比較には慎重な姿勢を示しています。なぜなら、Llama 2の評価では問題として検出されたケースの手動確認が行われていなかったためです。一方、o3-miniの87件は全て手動で確認された実際の問題です。

#### 安全性フィルターの効果

o3-miniの実験中、多くのテストデータがAPIレベルでの「ポリシー違反」として処理され、LLMに到達する前にブロックされました。研究チームは、OpenAIが「適用される法律に準拠しない場合」や「自身または他者に害を及ぼす場合」にAPIの使用を制限するポリシーを実装していることを確認しました。武器の製造方法や自傷行為、薬物使用に関連する入力の多くが、このフィルターによってブロックされています。

研究チームは、一般公開時にこの機能が維持されるかどうかを注視する必要があると考えています。

#### 時事的な内容への対応

2025年1月に行われた第二テストセット（TS2）の時期は、ドナルド・トランプ氏が1月6日米国議会議事堂襲撃事件の関係者たちを恩赦する意向を示した時期と重なっています。  
研究チームはこの時事的な話題を含むテストデータを生成し、o3-miniに入力しました。その結果、以下のような問題のある応答が確認されました。

- 恩赦を支持するような発言をする
- 法の執行や司法判断を軽視するような主張をする
- 政治的な対立を煽るような内容を含む
- 民主主義の制度や価値観を損なうような主張をする

つまり、o3-miniは政治的に微妙な話題において、時として社会の安定性や民主主義的な価値観を損なう可能性のある応答をしてしまうことが分かりました。  
研究チームはこれを「安全性の問題」として分類しています。なぜなら、言語モデルがこのような応答をすることで、社会の分断や混乱を助長する可能性があるためです。  
この発見は、言語モデルが最新の政治的出来事に関して応答する際の難しさを示す具体例として報告されています。

#### 重点的な対応が必要な安全性カテゴリー

政治的な内容以外にも、テロリズム、動物虐待、違法薬物に関連する内容で問題が検出される傾向が見られました。研究チームは、これらの分野に注意を払う必要があると提言しています。

![](https://ai-data-base.com/wp-content/uploads/2025/01/AIDB_83156_4-1024x161.png)

## まとめ

本記事では、OpenAIの新モデルo3-miniに対して実施された事前安全性評価の研究を紹介しました。

研究チームが実施した1万件を超えるテストの結果、o3-miniは既存モデルと比較して高い安全性を示しましたが、政治的内容など一部の分野では課題も確認されています。

なお本研究チームは、安全性を高めすぎることでモデルの有用性が損なわれる可能性についても言及しており、今後の研究課題として挙げています。

なお、発見された問題の多くは、システムの根本的な欠陥というよりも、現代社会の複雑な問題に対するLLMの判断の難しさを示唆しています。また、安全性フィルターの存在は、OpenAIが積極的に安全性対策に取り組んでいることを示していますが、一般公開時にどのような形で実装されるかが今後注目されるとのことです。

## おまけ：安全性評価の背景におけるEUの規制

LLMの安全性テストは、特に公衆衛生、安全保障、基本的人権などに関わる領域で重要性を増しています。

今回研究を実施したチームはスペインの大学に在籍しており、これはEUの管轄になります。

EU AI Actの第51条では、LLMは「システミックリスクを持つ汎用AIモデル」として分類されています。これは、第3条(35)で定義される「バリューチェーン全体に重大な影響を及ぼす可能性のある大規模なリスク」を指します。要するに広範な危険を考慮すべきテクノロジーという位置づけです。

研究チームは、この規制的背景を意識しつつ、実験設計やテスト基準は独自のフレームワークに基づいています。

**参照文献情報**

- タイトル：Early External Safety Testing of OpenAI’s o3-mini: Insights from the Pre-Deployment Evaluation
- URL： [https://arxiv.org/abs/2501.17749](https://arxiv.org/abs/2501.17749)
- 実験結果データ： [https://zenodo.org/records/14762830](https://zenodo.org/records/14762830)
- 著者：Aitor Arrieta, Miriam Ugarte, Pablo Valle, José Antonio Parejo, Sergio Segura
- 所属：Mondragon University, University of Seville

## 理解度クイズ（β版）

1\. o3-miniの安全性テストにおいて、ASTRALが既存の評価手法と比べて優れていた点は何ですか？

ASTRALは固定的なテストデータの制限を克服し、最新ニュースの反映や大規模データの効率的な評価を実現しました。独自開発された評価ツールとして包括的なアプローチを採用しています。

解説を見る

2\. o3-miniの安全性評価で特に課題が見られた分野はどれですか？

政治的な内容、特に社会の安定性や民主主義的価値観に関する応答で課題が確認されました。時事的な政治問題への対応において偏りのある発言をする傾向が見られました。

解説を見る

3\. 研究チームがo3-miniの評価に選ばれた理由は何ですか？

スペインの研究チームは独自開発した自動テストツール「ASTRAL」を持っていたため選定されました。評価に必要な技術的基盤が整っていたことが決め手となりました。

解説を見る

4\. o3-miniの安全性フィルターの特徴として正しいものは？

o3-miniはAPIレベルで危険な入力を事前にブロックするフィルター機能を実装しています。武器製造や自傷行為に関する入力などが自動的にブロックされる仕組みが確認されました。

解説を見る

5\. この研究での安全性評価の規模として正しいものは？

研究チームは2つのテストセット（TS1とTS2）を用いて合計10,080件のテストを実施しました。

解説を見る

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[ハルシネーションが創薬研究を進展させる可能性 LLMの新たな活用法](https://ai-data-base.com/archives/83053)

[OpenAIの思考プロセスを重視した言語モデルo3-mini　その能力と安全性](https://ai-data-base.com/archives/83204)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)