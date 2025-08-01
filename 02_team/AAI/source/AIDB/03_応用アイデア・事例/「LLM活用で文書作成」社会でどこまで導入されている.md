---
title: "「LLM活用で文書作成」社会でどこまで導入されている"
source: "https://ai-data-base.com/archives/84626"
author:
  - "[[AIDB Research]]"
published: 2025-02-19
created: 2025-06-13
description: "本記事では、LLMが社会のさまざまな分野でどのように普及しているかを網羅的に検証した研究報告を紹介します。最近では企業の広報資料や一般消費者が提出する文書にも広く取り入れられるようになってきました。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、LLMが社会のさまざまな分野でどのように普及しているかを網羅的に検証した研究報告を紹介します。

最近では企業の広報資料や一般消費者が提出する文書にも広く取り入れられるようになってきました。このような状況を踏まえ、LLMの利用実態を定量的に把握することの重要性が指摘されてきています。

今回スタンフォード大学などの研究者らは、LLMが社会インフラとしての役割を担いつつある現代において、その実態を客観的に把握し、適切な活用指針を検討するための基礎的なデータをまとめました。

本研究の特徴は、多岐にわたる分野の実際の文書を詳細に分析することによって、LLM導入の広がりを実証的に示すとともに、信頼性や公平性といった観点からも包括的な考察を行っている点にあります。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84626-1-1024x576.png)

参照論文情報は記事の下部に記載されています。

## 背景

LLMを活用した文章作成が社会のあらゆる領域に浸透し始めています。かつて [自然言語処理](https://ai-data-base.com/archives/26319 "自然言語処理（NLP）") は専門家のみが扱う技術でしたが、膨大なデータセットの構築とモデルの驚異的な性能向上に伴い、政治活動から企業運営まで幅広い場面で日常的に利用されるようになりました。

例えば顧客が企業に苦情を伝える文書や、組織の公式見解を示すプレスリリースなど、あらゆるシーンでの導入が着実に広がっています。多くの人々がLLMによる文章作成に効率化や表現力の向上を期待しています。

そんなLLM活用の文書生成が具体的に”どの程度社会に浸透しているか”が気になるところですが、定量的なデータが十分に揃っていません。膨大な文書の海の中から、自動生成されたものを識別する手法には限界があるため、実態把握が難しい状況が続いています。

加えて、LLMが生成する内容の信頼性や公平性に対する懸念から、公的機関や企業が慎重になるケースも見受けられます。

将来的な社会インフラへの影響を予測する上では、社会のさまざまな領域でLLMの利用率が高まっていると言われる現状を精査することは不可欠です。これまでも部分的な調査は行われてきたものの、広範かつ大規模な実証研究は十分に実施されていません。

そうした背景を踏まえ、今回スタンフォード大学などの研究者たちは膨大な量の文書を対象として、LLMの実際の利用状況を明らかにすべく調査を行いました。

以下で詳しく紹介します。

| **「背景」のサマリー   **   1\. LLMを活用した文章作成が政治や企業運営を含む多様な領域に浸透している   2\. 生成文章の普及度を定量的に測定する手法が限られ、実態把握が困難である   3\. 信頼性や公平性の懸念もあり、公的機関や企業は慎重に導入を進めている |
| --- |

## 調査手法

### 調査期間と収集対象

2022年から2024年を主な対象期間として、様々な分野から膨大な量の文書データが収集されました。

消費者金融保護局に寄せられた苦情データ、主要プレスリリース配信サービスから取得した企業広報文書、オンライン求人サイトの投稿情報、さらには国際連合の公式発表文書など、数十万件から数億件に及ぶ多様な文章が研究対象となりました。

収集された資料はアメリカ国内に限らず、世界各地で公開されるプレスリリースや国際機関の文書も含まれており、LLMの導入状況を時期・地域・分野ごとに把握するための包括的な基礎データが確保されました。

### 目的

研究チームは、オンライン上で流通している文書を可能な限り広範囲に収集し、LLMによる文章生成や修正がどのように進展しているかを時系列で分析することに焦点を当てました。

取り組みの狙いは、導入タイミングの特定や業種ごとの採用傾向を明らかにすることで、LLM活用が拡大している背景要因や実務への定着度合いを解明することでした。

### LLM由来の文章検出手法

調査において最も重要な工程は、LLMが生成または大幅に修正した可能性のある文章を識別する方法でした。

研究チームは2021年以前に作成された文章を「人間のみが執筆したサンプル」と位置づけ、これを比較対象として設定しました。単語の出現頻度や文章構造の特徴を抽出し、機械学習アルゴリズムで学習させることにより「LLMらしさ」を検出するシステムが構築されました。

以下のような段階的なプロセスが採用されています。

**ステップ１：参照データの確保**

過去の文書 [コーパス](https://ai-data-base.com/archives/26324 "コーパス") やLLMが生成した例文を収集し、専門家の監修により正確な正解ラベルを付与しました。誤判定のリスクを低減するため、複数の領域から多様なサンプルが集められました。

**ステップ２：判定モデルの学習と調整**

語彙パターン、文の配列構造、特定の言い回しの反復などから、LLMによる生成確率を算出するアルゴリズムが開発されました。検証用サンプルを用いて性能評価が行われ、検出率と誤検出率のバランスを考慮しながら最適な閾値が設定されました。

****ステップ３：** 大規模データへの適用**

確立されたアルゴリズムを膨大な文書群に適用し、月次・四半期ごとにLLM支援と判定される文書の割合が測定されました。精度を担保するため、疑わしいと判定された文書からランダム [サンプリング](https://ai-data-base.com/archives/26518 "サンプリング") して人間の目による再確認が行われ、最終的な推定値が補正されました。

こうした段階的なアプローチにより、長期的なトレンド分析が可能となり、LLM活用が急速に普及している分野と比較的緩やかに普及している分野の違いが明らかになりました。

調査結果を詳しく見ていきましょう。

## LLMによる文章作成の普及状況

調査の結果、文章作成がLLMによって著しく効率化されている傾向が、広範な分野で実証されました。

消費者が提出する苦情文書や企業の広報資料はもちろん、多数の求人情報、国際機関が発表する公式文書に至るまで、LLMの影響が拡大しています。導入が加速した時期は分野ごとに比較的明確な区切りが見られ、初期の急激な普及期を経て、その後はある程度の水準で利用率が安定する傾向が確認されています。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84626_1-1024x473.png)

複数ドメインでのLLM利用率推定の時系列変化を示す折れ線グラフ

消費者が企業に対して提出する苦情文書では、約18%がLLMを用いて作成されていると分析されました。効率的に要点を伝えたいと考える消費者が積極的に導入している様子がうかがえます。

利用率は短期間で急増した後、他の分野と比較してやや早い段階で増加ペースが緩やかになっています。

### 企業広報におけるLLM活用

企業のプレスリリースなど広報目的の文書においては、20%を超える高い導入率が確認されました。

運用コストの削減や文章構成の効率化を図る動機が背景にあると考えられ、急激な増加期の後は一定の割合を維持し続けています。公式な発表文書であっても、作成効率を重視する傾向が見られます。

### 求人情報作成へのLLM導入

求人情報では少なくとも10%程度のLLM利用が推測されています。職務内容の説明や企業紹介文を迅速に整備し、人的リソースを節約する手段として活用されているようです。注目すべき点として、企業規模や設立年による差異が比較的顕著であり、若い企業ほど積極的に導入している傾向が観察されました。

### 国際組織の公式発表におけるLLM活用

国際連合をはじめとする国際機関が公表する文書においても、約14%がLLMによって生成されていると推定されています。各国・地域ごとの事情が異なるにもかかわらず、類似した時期に導入が進んだことが示唆されています。信頼性が特に重視される場面であっても、いったん活用が始まると、しばらくの期間は利用率が増加し続けていたことが明らかになりました。

| **「LLMによる文章作成の普及状況」のサマリー   **   1\. LLMは苦情文書、プレスリリース、求人情報、国際機関の公式文書など多岐にわたる分野で活用されている   2\. 導入初期に急速に普及し、その後成長ペースは緩やかになったが、現在も高い採用率を維持している   3\. 分野ごとに普及率は異なり、プレスリリースが約24%と最も高く、苦情文書18%、求人情報10%、国際機関の文書14%と推定される |
| --- |

## LLM活用の地理的・人口統計的な格差

LLMが消費者金融関連の苦情文書作成に利用されている状況を詳しく調査したところ、地域間で顕著な差が見られました。

同じ時期のデータを分析した結果、州によって文書の約30%がLLMによって生成されていると推定される地域がある一方で、わずか数パーセントしか確認できない州も存在していました。また、都市部と地方を比較すると、都市部のほうが明らかに高い採用率を示しています。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84626_2-1024x510.png)

消費者金融保護局の苦情における地域差・人口統計差とLLM導入率の関連を示す地図・グラフ

さらに教育水準との関連性も注目すべき点で、大学卒業者が少ない地域においてやや積極的にLLMが活用される傾向が確認されました。

アーカンソー州やミズーリ州では、LLM活用率が約30%に達する結果が見られました。これらの地域では、地方自治体による効果的な広報活動やコミュニティのつながり方など、複数の要因が影響している可能性があります。対照的に、ウェストバージニア州やアイダホ州では利用率が数パーセントにとどまっていました。

各地域の人口規模や産業構造の違いが、LLM活用の程度を左右している要素として考えられます。

### 都市部と非都市部の比較

大都市圏とそれ以外の地域を比較分析したところ、都市部における採用率が非都市部を大幅に上回っていることが判明しました。都市部住民のITリテラシーが相対的に高いことや、LLMを利用するための環境整備が進んでいることなどが要因として挙げられます。

非都市部では新技術導入に対して慎重な姿勢が見られる中、一部の住民はすでにLLMを活用し始めているものの、その割合は限定的であると考えられます。

### 教育水準の影響

教育に関する指標を分析したところ、四年制大学卒業者の割合が少ない地域ほど、わずかながらLLM導入率が高まる傾向が見られました。こうした違いが生じる背景には、文書作成に充てられる時間やリソースの違いが関係していると推測されます。

効率性を重視する利用者が多い地域では、苦情文書の質を維持しながら迅速に作成できる手段としてLLMが好まれているようです。

### 考えられる解釈

調査結果から、消費者の苦情提出プロセスにおいてLLMを活用する動きが拡大しつつあるものの、その採用状況は均一ではないことが明らかになりました。都市部ではより速いペースで受け入れられている一方、農村部や教育環境に課題を抱える地域においても、少なくとも一部の住民がLLMの有効な活用法を見出していることがうかがえます。

利用によるメリットが広く認識されるようになれば、表現力向上を求める消費者がLLMを積極的に取り入れる場面はさらに増加すると予想されます。ただし、地域や属性による偏りが確認された現状においては、消費者苦情対応の場面でLLMがもたらす便益と課題については、多角的な視点から検討していく必要があるでしょう。

| **「LLM活用の地理的・人口統計的な格差」のサマリー   **   1\. LLMの活用率には地域差があり、アーカンソー州やミズーリ州では約30%に達する一方、ウェストバージニア州やアイダホ州では数パーセントにとどまる   2\. 都市部のほうが非都市部よりも採用率が高く、ITリテラシーや環境整備の進展が影響している   3\. 大学卒業者が少ない地域ほどLLM活用率がやや高い傾向があり、文書作成の効率化を求める層が積極的に導入している可能性がある |
| --- |

## 企業プレスリリースにおけるLLM使用状況

企業が公表するプレスリリースは、投資家やメディアに向けた重要な情報発信手段として位置づけられており、一般的に公式性が重視される傾向にあります。その一方で、文章校正にかかる労力を軽減しようとする動きも近年顕著になっています。

調査によれば、LLMが社会に広く普及し始めた時期と一致して、各種配信プラットフォーム上の公開文書において自動生成と思われる文章の割合が上昇していることが確認されました。導入から約3〜4ヶ月が経過した頃から急激に利用率が増加し、中には20%を超える水準に達したケースも観測されています。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84626_3-1024x276.png)

企業プレスリリースを分野別に集計した際のLLM導入率の比較を示す棒グラフ

情報の即時性や運用コストなどの観点からLLMの優位性を認識した企業が積極的に導入を進めていると考えられます。

### プレスリリースプラットフォーム間の差異

ニュース配信サービスの中でも、大手企業の告知を主に扱うプラットフォームでは、文書の20%以上がLLMによって生成されたと推定される割合に達しました。

広報部門の業務負担軽減を重視する企業が集中的に利用している可能性が示唆されます。一方、オンラインメディアを主な配信先とするサービスにおいては、確かに利用率は上昇傾向にあるものの、やや低めの水準で安定している傾向が見られます。

配信対象の特性や利用料金体系の違いなどが、企業によるLLM採用方針の相違につながっていると推察されます。

### 業種別の傾向

ビジネス関連の発表や科学技術分野のプレスリリースにおいて、LLMの利用率が特に高まる現象が確認されています。

専門性の高い文書を短時間で作成する必要がある場合や、業務効率化を優先する部署において導入が進展した可能性があります。企業が内容の正確性やブランドイメージをどの程度重視するかによって、LLMの活用方法も大きく変化することが予想されます。

情報の信頼性に関するリスクを認識しながらも、作業効率の向上との兼ね合いでLLM導入を決断する企業が増加しているようです。

| **「企業プレスリリースにおけるLLM使用状況」のサマリー   **   1\. LLMの普及とともにプレスリリースでの利用率が増加し、導入後3〜4ヶ月で急激に上昇し、20%以上に達するケースもある   2\. 大手企業向けの配信プラットフォームではLLM活用率が高く、オンラインメディア向けサービスではやや低めに安定している   3\. ビジネスや科学技術分野のプレスリリースで特にLLMの利用が進み、正確性と効率のバランスを考慮しながら導入が進んでいる |
| --- |

## LinkedInの求人情報におけるLLM採用の実態

求人情報作成の場面において、LLMが活用される傾向が着実に広がりを見せています。

投稿数が比較的少ない小規模企業を対象に調査したところ、約10%の求人情報がLLMによる文章生成と推定されることが判明しました。大量の採用情報を一度に作成する必要がなくとも業務効率化を目指す動機から、比較的短期間で急速に利用率が上昇した可能性があります。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84626_4-1024x507.png)

小規模企業の求人情報において、創業年や従業員数など組織特性に着目したLLM利用率の時系列推移を示す図

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84626_6.png)

LinkedIn求人全体における職種別LLM利用率の時系列分析を示す図

大企業では採用専門の人材や部署が整備されていることが多いのに対し、小規模企業はリソースが限られているからこそ、LLMを活用して迅速に求人文面を作成する利点を認識しているようです。運用の負担を軽減しながらも、基本的な応募条件や企業の理念を一定の品質で表現できる点に注目が集まっていると考えられます。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84626_7.png)

従業員数が小さい組織の求人情報における職種別LLM導入率の推移を示す折れ線グラフ

### 企業の設立年による違い

企業の創設年を基準に分析すると、比較的新しい企業ほど積極的にLLMを導入している傾向が明らかになりました。

特に2015年以降に設立された企業群においては、10%を超える割合でLLMが利用されていると推測されます。設立間もない組織が新しい技術を積極的に取り入れる現象は、意思決定の迅速さや実験的な取り組みを行いやすいという組織構造上の特性と関連している可能性があります。

文章表現の一貫性や質を一定水準以上に維持しつつ、担当者の負担を軽減して効率性を向上させられる点が評価されているようです。また、導入初期の急増後に横ばい傾向へと移行する現象も観察されており、新技術の導入には波が生じやすく、ある程度の期間を経て利用状況が安定していく様子がうかがえます。

| **「LinkedInの求人情報におけるLLM採用の実態」のサマリー   **   1\. 小規模企業では約10%の求人情報がLLMによって生成されており、業務効率化のため急速に利用が拡大した   2\. 2015年以降に設立された企業ほどLLMを積極的に活用しており、新技術の導入スピードや柔軟な組織運営が影響している   3\. 導入初期に急増した後、利用率は横ばいへと移行する傾向が見られ、一定の期間を経て安定する流れが確認された |
| --- |

## 国連プレスリリースにおけるLLM採用の状況

国際連合をはじめとする国際機関が公表する公式文書においても、LLMの活用が一定の広がりを見せていることが明らかになりました。公共性の高い重要情報を扱う場面であるため細心の注意が求められる一方で、文書作成担当者の業務負担軽減という実務的なメリットが評価されていると考えられます。

分析結果によれば、約14%の文書がLLMによって生成されたと推定され、調査期間を通して段階的に採用率が向上した後、一定水準で安定する傾向が確認されました。

![](https://ai-data-base.com/wp-content/uploads/2025/02/AIDB_84626_5-1024x471.png)

国連プレスリリースにおける地域別LLM利用率の変化を示す折れ線グラフ

多言語対応や迅速な情報発信が求められる国際機関の環境において、要点を効率的に整理できるLLMの特性が重宝されたのではないかと推察されます。内部での承認プロセスにかかる時間を短縮しながらも、表現の一貫性を保った文書を作成しやすいという利点が認識されているようです。

国際社会に向けた公式発表においても相当数の文書がLLMによって作成されている現状を踏まえると、効果的な活用と慎重な内容検証の両面が今後ますます意識されていくことになるでしょう。

| **「国連プレスリリースにおけるLLM採用の状況」のサマリー   **   1\. 国際機関の公式文書におけるLLM活用が進み、約14%の文書がLLMによって生成されたと推定される   2\. 多言語対応や迅速な情報発信が求められる環境で、要点整理の効率化や表現の一貫性維持といった利点が評価されている   3\. 採用率は段階的に向上し、現在は一定水準で安定しており、今後は効果的な活用と慎重な内容検証の両面が重視されると考えられる |
| --- |

## 考察

LLMの導入が様々な分野で確認されたことにより、文章生成技術がいかに社会に浸透してきたかが浮き彫りになりました。消費者の苦情文書から企業広報、求人情報、さらには国際連合といった国際機関の公式文書に至るまで、幅広い領域でLLMによる文章が検出されています。

導入パターンを見ると、最初は急激な増加を示し、その後一定水準で安定する傾向が共通して観察されました。このような急増から緩やかな成長への移行は、初期に積極的に取り入れた層が一巡した後、追加的な導入ペースが穏やかになっていった可能性を示唆しています。

### 導入パターンの解釈

各分野で示された導入率は、それぞれの実務環境における活用方法を反映していると考えられます。

消費者向け文書においては、表現の多様化や迅速な作成能力が重視されたようです。

企業の広報資料では、短時間で質の高い文章を調整できる効率性が評価されていると推測されます。

求人情報の場合は、人的リソースや専門部署に余裕がない企業が素早く導入に踏み切り、新技術を積極的に試す姿勢と結びついていることがうかがえます。

国際機関においては、文書の信頼性が重視される一方で、多言語対応や緊急時の作業負担軽減といった実務的な動機から導入が進んだと考えられます。

### 分析の限界

調査における検出手法には一定の限界があることを認識しておく必要があります。

LLMの技術が高度化するほど、人間が編集した文章との区別が困難になる可能性が高まります。また、過去の文章と比較して利用率を算出するアプローチでは、執筆者の文体が変化した場合に誤差が生じる恐れもあります。

さらに、今回の集計対象が主に英語圏の文書であったことから、他言語における活用状況を評価する上では不十分な側面があることも否めません。

### 今後の予想

活用が本格化した場合、文章表現の均質化や情報の信頼性評価における課題が一層顕在化する懸念があります。文章生成の効率性と創造性のバランスを取る議論が進められることで、多様な執筆手法が確保される可能性も出てくるでしょう。

研究や実務においては、質の保証と併せて、公平性や透明性への配慮がますます重要になっていくと考えられます。

| 「考察」のサマリー      1\. LLMの導入は消費者文書、企業広報、求人情報、国際機関の公式文書など幅広い分野で確認され、導入初期の急増後に安定する傾向が共通して見られた   2\. 各分野の導入率は実務環境に応じた活用方法を反映しており、効率性向上や人的リソースの最適化が主な動機となっている   3\. LLMの識別困難化や文章の均質化、情報の信頼性評価といった課題が今後顕在化する可能性があり、公平性や透明性への配慮が重要になると考えられる |
| --- |

## まとめ

本記事では、LLMの社会における普及状況を実証的に検証した研究成果を紹介しました。消費者が企業に提出する苦情文書、企業が発表する広報資料、オンライン上の求人情報、さらには国際機関が公表する公式文書に至るまで、幅広い分野でLLMが急速に導入されている実態が、実際の文書分析に基づいて明らかにされました。

調査結果からは、どの分野においても導入初期には利用率が急激に上昇し、その後一定の水準で安定する傾向が共通して観察されました。この現象は、新技術を積極的に取り入れる層がある程度出揃った後、さらなる普及が緩やかになったことを示唆しています。

LLM活用の主なメリットとしては、文章作成の効率化が筆頭に挙げられます。限られた時間やリソースの中で質の高い文書を生成できる点が、様々な組織や個人に評価されている様子がうかがえました。その一方で、LLMによって生成された文章の検出が次第に困難になっていることや、情報の信頼性をどう担保するかといった課題も浮き彫りになっています。

今後は、LLMの利用実態をより公平な視点から継続的に評価し、社会全体として適切な活用指針を確立していくことが重要な段階に入ったと考えられます。技術の発展とともに、その恩恵を最大化しつつ潜在的な問題にも対処できるようなバランスの取れた取り組みが求められるでしょう。

**参照文献情報**

- タイトル：The Widespread Adoption of Large Language Model-Assisted Writing Across Society
- URL： [https://doi.org/10.48550/arXiv.2502.09747](https://doi.org/10.48550/arXiv.2502.09747)
- 著者：Weixin Liang, Yaohui Zhang, Mihai Codreanu, Jiayu Wang, Hancheng Cao, James Zou
- 所属：Stanford University, University of Washington, Emory University

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[LLMを擬人化することは開発や評価にどんな影響を及ぼすか](https://ai-data-base.com/archives/84526)

[100万ドル分のソフトウェアエンジニアリングタスクで最先端のLLMを検証　40%まで達成](https://ai-data-base.com/archives/84747)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)