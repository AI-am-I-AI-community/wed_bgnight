---
title: "LLMの論理的推論能力をステップバイステップ以上に向上させる手法『Logic-of-Thought』プロンプティング（テンプレートつき）"
source: "https://ai-data-base.com/archives/76306"
author:
  - "[[AIDB Research]]"
published: 2024-09-30
created: 2025-06-13
description: "本記事では、LLMがより上手く論理的な考え方ができるようにする新しい方法「Logic-of-Thought（LoT）」を紹介します。LoTは、今までの方法で起こっていた「大切な情報が抜け落ちてしまう」という問題を解決しようとしています。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、LLMがより上手く論理的な考え方ができるようにする新しい方法「Logic-of-Thought（LoT）」を紹介します。LoTは、今までの方法で起こっていた「大切な情報が抜け落ちてしまう」という問題を解決しようとしています。

LoTの優れているポイントは、今まで使われてきたChain-of-Thought（CoT）やSelf-Consistency（SC）、Tree-of-Thoughts（ToT）といった方法と一緒に使えることです。実験では、LoTを使うと確かにLLMの能力が上がることが分かりました。

この研究の主な成果は3つあります。1つ目は新しいLoTという方法を考え出したこと、2つ目は他の方法とLoTを組み合わせたこと、3つ目は様々な課題でLoTが役立つことを確かめたことです。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_76306-1024x576.jpg)

**参照論文情報**

- タイトル：Logic-of-Thought: Injecting Logic into Contexts for Full Reasoning in Large Language Models
- 著者：Tongxuan Liu, Wenjiang Xu, Weizhe Huang, Xingyu Wang, Jiaxing Wang, Hailong Yang, Jing Li
- 研究機関：University of Science and Technology of China, Institute of Automation, Chinese Academy of Sciences, Beihang University, JD.com

## 背景

多くのLLMは、数学や複雑な論理的な考え方が必要な問題になると、まだ人間には及びません。

よく使われるのが「Chain-of-Thought（思考の連鎖）」というプロンプティング手法で、難しい問題を小さな段階に分けて考えていくアプローチです。人間が頭の中で「ここからこう考えて、次にこうなって…」と段階を踏んで考えるのと似ています。

Chain-of-Thoughtが考案された後、Tree-of-ThoughtsやGraph-of-Thoughtsといった、より複雑な考え方の流れを真似る方法も生まれました。人間の頭の中でいろいろな考えが枝分かれしたり、つながったりする様子を模倣しようとする手法です。

ところが、これまでに考案されたどの方法を使っても「途中の考え方は正しいのに、最後の答えがそれと合わない」といった現象が起きます。これを「不忠実な推論」と呼びます。

この問題を解決しようと、今度は論理学の考え方を取り入れる試みも始まりました。例えば、文章から論理式という特別な形の式を取り出して、それを使って考えを進める方法などです。しかし、この方法にも弱点がありました。文章から論理式を作る時に、大切な情報が抜け落ちてしまうことがあるのです。そうすると、正しい答えにたどり着けません。

こういった事情から、研究者たちは今回、論理的な考え方の精度を上げながら、かつ大切な情報を落とさない新しい方法を考案しました。

以下で詳しく紹介します。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_76306_1-1024x494.png)

## 前提となる知識

論理推論タスクについて説明するために必要な基本的な概念と記号を紹介します。この後全体的に必要になる知識です。

### 命題

命題とは、「真」か「偽」のどちらかを明確に判断できる文のことです。例えば、「空は青い」という文は命題です。この論文では、命題を論理表現の基本的な構成要素として扱います。

具体的な命題を表すときは、A、B、Cなどの大文字を使います。例えば、「あなたはキーボード入力が得意だ」といった文をAで表すことができます。一般的な命題を指すときは、p、q、rなどの小文字を使います。

### 接続詞

接続詞は、命題と命題をつなげたり、命題の意味を変えたりする記号です。今回の研究では、主に3つの接続詞を使います。

（１）否定 (¬)

命題の意味を逆にします。例えば、¬pは「pではない」という意味になります。

（２）含意 (→)

「もし〜ならば」という関係を表します。p → qは「もしpならば、qである」という意味です。

（３）連言 (∧)

「かつ」という意味を表します。p ∧ qは「pであり、かつqである」という意味です。

### 論理推論法則

ある論理表現から別の論理表現を導き出すためのルールを論理推論法則と言います。今回の研究では、主に3つの法則を使います。

（１）二重否定法則

¬¬p ⇔ p （「〜ではない」を2回重ねると、元の意味に戻るという法則）

（２）対偶法則

(p → q) ⇔ (¬q → ¬p) （「もしpならばq」は「qでないならばpでない」と同じ意味だという法則）

（３）推移法則

(p → q) ∧ (q → r) ⇒ (p → r) （「もしpならばq」と「もしqならばr」が成り立つとき、「もしpならばr」も成り立つという法則）

上記は論理学でよく使われ、私たちの日常的な考え方とも一致しています。比較的シンプルなものですが、新しいプロンプティング手法を考案するために重要な役割を果たしています。後述の実験結果を見ると、大きな効果が見られています。

## 手法

今回研究者らが提案するLogic-of-Thought（LoT）は、3つの段階から成る方法です。下の図に全体の流れが示されています。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_76306_2-1024x439.jpg)

●ステップ1. 論理抽出（Logic Extraction）段階  
文章から論理的な関係を見つけ出し、記号で表します。この作業にはLLMを使います。

●ステップ2. 論理拡張（Logic Extension）段階  
見つけ出した論理関係を、Pythonで作ったプログラムを使ってさらに広げます。

●ステップ3. 論理翻訳（Logic Translation）段階  
広げた論理関係を、LLMを使って普通の言葉に直します。そして、この情報を元の文章に追加します。

以下で各段階について詳しく見ていきましょう。

### ステップ1. 論理抽出

このステップでは、LLMを使って文章から論理的な関係を見つけ出します。作業は2つの手順に分かれます。

1. まず、LLMに「もし〜ならば〜」のような条件文を文章から探してもらう
2. 次に、見つけた条件文から、AやBなどの記号（これを命題記号と呼びます）と、それらの関係を表す表現を取り出す

この過程で、LLMは似たような意味の文を同じ記号で表します。また、文章の中の論理的なつながりを分析します。

注意点は、

- 反対の意味を持つ文には、¬（否定）をつける
- 「もし〜ならば〜」のような関係がある場合、→（含意）で結びつける

ことです。

例えば、先ほどの図では、LLMが「コンピューターを使用できる」という意味の文を2つの違う文から見つけ、Bという記号で表しています。そして、他の文との関係を分析し、BともうひとつのAに¬をつけ、→で結んで、新しい表現¬A → ¬Bを作り出しています。

**論理抽出ステップを実行するためのプロンプトテンプレート**

論理推論や批判的思考タスク（ReClorとLogiQAデータセット）で使用された例

```js
Please use uppercase English letters such as A, B, C, etc. to identify all possible propositions. Do not include negative tones such as "not" in the propositions. For example, if the sentence is "It is not bored," you should use "A: bored" to represent it.

Next, for each proposition, use the symbol to represent its negative form. For example, the negative form of proposition A can be expressed as A.

Now, please carefully analyze the context and find causal relationships between propositions seriously. A causal expression is only established when the context directly supports this relationship. Use arrows (→) to indicate causal relationships, for example, "If A, then B", "B if A" and "A causes B" etc. can be represented as A→B.

Finally, output propositions and causal expressions.
```

和訳

```js
すべての可能な命題を識別するために、A、B、C などの大文字の英字を使用してください。命題には「〜でない」などの否定的な表現を含めないでください。例えば、「It is not bored（退屈ではない）」という文があれば、「A: bored（退屈している）」のように表現します。

次に、各命題の否定形を表すためにシンボルを使用してください。例えば、命題 A の否定形は A として表現できます。

次に、文脈を慎重に分析し、命題間の因果関係を真剣に見つけてください。因果表現は、文脈が直接その関係を支持する場合にのみ成立します。因果関係を示すために矢印（→）を使用します。例えば、「If A, then B（もし A なら B）」、「B if A（A であれば B）」および「A causes B（A は B を引き起こす）」などは A→B と表現できます。

最後に、命題と因果表現を出力してください。
```

知識ベースや [ルールベース](https://ai-data-base.com/archives/26614 "ルールベース") の推論タスク（RuleTaker、ProofWriter、FOLIOデータセット）で使用された例

```js
Please use uppercase English letters such as A, B, C, etc. to identify all possible propositions. Do not include negative tones such as "not" in the propositions. For example, if the sentence is "It is not bored," you should use "A: bored" to represent it.

Next, for each proposition, use the symbol to represent its negative form. For example, the negative form of proposition A can be expressed as ¬A.

Now, please carefully analyze the context and find causal relationships between propositions. A causal expression is only established when the context directly supports this relationship. Use arrows (→) to indicate causal relationships, for example, "If A, then B", "B if A" and "A causes B" etc. can be represented as A→B.

Finally, output propositions and causal expressions.
```

和訳

```js
すべての可能な命題を識別するために、A、B、C などの大文字の英字を使用してください。命題には「〜でない」などの否定的な表現を含めないでください。例えば、「It is not bored（退屈ではない）」という文があれば、「A: bored（退屈している）」のように表現します。

次に、各命題の否定形を表すためにシンボルを使用してください。例えば、命題 A の否定形は ¬A として表現できます。

次に、文脈を慎重に分析し、命題間の因果関係を見つけてください。因果表現は、文脈が直接その関係を支持する場合にのみ成立します。因果関係を示すために矢印（→）を使用します。例えば、「If A, then B（もし A なら B）」、「B if A（A であれば B）」および「A causes B（A は B を引き起こす）」などは A→B と表現できます。

最後に、命題と因果関係の表現を出力してください。
```

### ステップ2. 論理拡張

次のステップでは、見つけ出した論理関係をさらに広げます。論理学の規則を使います。

Pythonで作ったプログラムがこの作業を行います。さきほどの図の例では、¬A → ¬BとB → ¬Cという2つの関係から、新しい関係C → Aを導き出しています。これは、「もしAならばB」と「もしBならばC」から「もしAならばC」が言えるという規則（推移法則）を使っています。

※研究報告では、具体的なPythonプログラムのコードは示されていません。

### ステップ3. 論理翻訳

論理翻訳段階では、記号で表された論理関係を普通の言葉に直します。この作業にもLLMを使います。

そして、この普通の言葉で表された論理関係を、元の文章に追加します。そうすることで、元の文章から導き出せる論理的な情報を、明確な形で文章に加えることができます。

さきほどの図の例では、Cを「ワードプロセッシングプログラムを使ってエッセイを書くことができる」、Aを「キーボードスキルを持っている」という意味に戻し、→を「もし〜ならば〜」という言葉に置き換えています。こうして、C → Aという記号表現を「もしワードプロセッシングプログラムを使ってエッセイを書くことができるなら、キーボードスキルを持っている」という普通の文に直し、元の文章に加えています。

**論理翻訳ステップを実行するためのプロンプトテンプレート**

```js
Please use the provided propositions to translate each expression into a complete sentence.

¬A represents the negation of proposition A, the arrow (→) represents the causal relationship, and A→B represents if A, then B.

Only output the sentences in a paragraph!
```

和訳

```js
与えられた命題を使用して、それぞれの表現を完全な文に翻訳してください。

¬A は命題 A の否定を表し、矢印 (→) は因果関係を示し、A→B は「もし A ならば B」を表します。

段落形式で文のみを出力してください！
```

## 実験

### タスクとデータセット

この実験では、5つの論理推論データセットが使用されました。（さきほどのプロンプトテンプレートは、これらのデータセットに対応するものとしての例です）

（１） **ReClor**  
法科大学院入学試験（LSAT）や経営学大学院入学試験（GMAT）から集めた標準テストの論理推論問題です。各問題は文脈、質問、4つの選択肢から構成され、正解は1つです。

（２） **LogiQA**  
専門家が作成した、人間の論理的推論能力を測るための問題です。特に読解力を評価するセクションに焦点を当てています。

（３） **RuleTaker**  
プログラミングによって自動生成されたデータセットです。接続詞として∧（かつ）、¬（否定）、→（含意）を使用しています。各問題は文脈と結論から成ります。

（４） **ProofWriter**  
事実と規則で構成された多数の小さな規則ベースを含んでいます。自然言語の規則ベースに対する50万の質問、回答、証明を含むRuleTaker形式のデータセットです。

（５） **FOLIO**  
自然言語での推論のために設計された包括的で多様なデータセットです。人間による注釈付け、オープンドメインの性質、論理的複雑さが特徴です。一階論理（FOL）の注釈を持ち、1,435の独自の結論例を含んでいます。

### ベースライン

※ベースラインとは、提案手法の性能を評価するための基準となる従来手法を指すことが多いです。

5つのプロンプティング手法と1つのニューロ記号的手法が比較対象とされました。

（１） **直接プロンプティング**  
推論過程なしで単に質問に答えます。

（２） **Self-Consistency (SC)**  
複数の直接プロンプティングの結果を多数決で集計します。5つの推論経路を使用する場合はSC(5)と表記します。

（３） **Chain-of-Thought (CoT)**  
段階的な思考アプローチで推論を行います。

（４） **Chain-of-Thought with Self-Consistency (CoT-SC)**  
複数のCoTの結果を多数決で集計します。5つの推論経路を使用する場合はCoT-SC(5)と表記します。

（５） **Tree of Thoughts (ToT)**  
推論過程を思考の探索木としてモデル化します。

（６） **SatLM**  
自動定理証明器を活用してLLMの推論を支援します。

研究者らは今回の提案手法LoTと上記すべてのベースラインを評価し、さらにCoT、SC、CoT-SC、ToTの4つのプロンプティング手法とLoTの合わせ技も評価しました。

### 実験設定

3つの事前学習モデル（GPT-3.5-turbo-instruct、GPT-3.5-turbo、GPT-4）を使用し、3種類の実験が行われました。

（１） **主要実験**  
GPT-3.5-turboとGPT-4を使用し、5つのデータセットで4つのプロンプティング手法（直接、CoT、SC、CoT-SC）とこれらとLoTの組み合わせを評価しました。

（２） **LoTとSatLMの比較**  
ReCorデータセットを使用して、SatLMの性能をLoT、LoT+CoT、LoT+CoT-SCと比較しました。

（３） **LoTとToTの比較**  
ProofWriterデータセットを使用して、ToTの指導下でのLoTの性能向上を評価しました。

### 主な結果

主な実験結果は次の表に示されています。

![](https://ai-data-base.com/wp-content/uploads/2024/09/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2024-09-28-15.33.40-1024x290.png)

観察結果を以下に説明します。

まず、LoTと既存のプロンプティング手法を組み合わせることで、一貫して最高の性能を達成しました。そして、LoTプロンプティングはほとんどの実験において、4つのベースラインプロンプティング手法の性能を向上させました。

しかし、CoTやCoT-SCとLoTを統合した場合、わずかな改善しか見られないケースがありました。これは、CoTが隠れた情報を徐々に推論する能力を持ち、LoTの能力と重複する部分があるためと考えられます。

さらに、GPT-4をRuleTakerおよびProofWriterデータセットで使用した際、LoT+SCがSCをわずかに下回りました。これは、Logic Extraction過程での論理情報抽出の偏りが主な要因と考えられます。

LoTは単独でもすべてのデータセットでDirectプロンプティングの精度を大幅に向上させ、10組の比較データのうち8組でCoTを上回る結果を示しました。

要するにLoTは既存のプロンプティング手法と問題なく組み合わせることができ、LLMの論理推論能力をさらに向上させることが示されています。

### LoTとSatLMの比較研究

次に、LoTとニューロ記号的アプローチであるSatLMを詳しく比較分析します。

結果を見る前に、SatLMとはどんな手法なのか簡潔に説明します。

[SatLM（Satisfiability-aided Language Models）](https://arxiv.org/abs/2305.09656) とは、LLMと”自動定理証明器”を組み合わせた手法です。 LLMを使って、タスクを命令的なプログラムではなく、宣言的な仕様として記述します。そして、生成された宣言的仕様を自動定理証明器（SATソルバー）に入力し、論理的な推論を行います。 SATソルバーを使用することで、LLMの推論結果の正確性を形式的に検証できます。そのため、複雑な論理パズルや推論問題に対して効果的と考えられています。ただし、論理表現の抽出過程で情報損失が起こる可能性があるという課題もあります。

#### 性能比較

下の図は、ReCorデータセットにおけるSatLMとLoTの性能比較を示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_76306_3.png)

LoTはSatLMを大きく上回る精度を達成しました。なお、LoTは様々なプロンプティング手法（Direct、CoT、SC）と組み合わせた場合も顕著な改善を示しました。

今回の実験設定では、SatLMが文章から論理的な記号を取り出すとき、情報を失いやすいからだと考えられます。 一方、LoTは元の文章をそのまま使うので、少し情報を失っても最終的な結果にあまり影響しません。

#### ケーススタディ

下の図は、SatLMとLoTを具体的な例で比べた結果です。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_76306_4-1024x532.jpg)

SatLMは情報を間違えたり、失ったりしています。例えば、「できる」を「能力」と間違えたり、「自分のことが分かる」と「他人の気持ちが分かる」を混ぜ合わせたりしています。反対に、LoTは文章から論理的な内容を正しく取り出して、記号に変えることができました。

面白いことに、LoTは最初に少し間違いがあっても、後で文章に戻すときにLLMが「類人猿」と「動物」の関係を理解して、間違いを直しています。  
これは、LoTがLLMの言葉を理解する能力をうまく使って、途中の間違いを直せることを示しています。

### LoTとToTの分析

ここでは、ToTという複雑な方法にLoTを加えるとどうなるかを調べています。

結果を見る前に、ToTとはどんな手法なのか簡単に説明します。Tree of Thoughts（ToT）は、問題解決プロセスを木構造として捉え、複数の思考の道筋を同時に探索するアプローチです。  
「問題を解決するために、まず3つの異なるアプローチを考えてください。」  
「それぞれのアプローチについて、その長所と短所を分析してください。」  
「次に、最も有望なアプローチを選び、そのアプローチをさらに3つの方向に発展させてください。」  
というようなプロンプトで実行可能です。

下の図は、ProofWriterデータセットにおけるToTとLoT+ToTの比較を示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_76306_5.png)

推論の深さが5の複雑な推論シナリオでは、直接プロンプティングは51%の精度（ほぼランダムな推測と同等）しか達成できませんでした。

また、ToTは直接プロンプティングより19%高い70%の精度を達成し、LLMがより良く多段階推論を解決できることを示しました。

そしてLoT+ToTは78%の精度を達成し、ToTと比べて8%の精度向上を示しました。LoTが複雑な論理推論においてToTの能力を効果的に強化できることを示しています。

次の表は、ToTとLoT+ToTの「推論状態」の比較を示しています。

![](https://ai-data-base.com/wp-content/uploads/2024/09/AIDB_76306_6-1024x203.png)

LoT+ToTはToTと比べて、全体の「状態の数」が2.14%増加しました。LoTがToTの探索範囲を拡大させることを示唆しています。

そして、完全推論（4つの成功状態探索が達成される）の割合が2%増加しました。より包括的に探索空間が探索されたことを示しています。

さらに、成功状態の平均数が2.59%増加しました。LoTがToTの探索状態の効果を大幅に向上させたことを示しています。

ひとつひとつの改善数値は小さいですが、一貫して改善されている点は注目に値します。

全体として、「Logic-of-Thought（LoT）」は単独でも他の手法との組み合わせでも効果を発揮するという結果が得られました。

## まとめ

本記事では、LLMがより論理的に考えられるようにする「Logic-of-Thought（LoT）」という新しい方法を紹介しました。LoTは、文章から論理的な情報を見つけ出し、それを膨らませて、LLMへの指示に加えます。そうすることで、LLMはより上手に論理的な考え方ができるようになります。

実験では、LoTを今までの方法と組み合わせると、LLMsの能力がさらに上がることが分かりました。

ただし、まだ改善の余地もあります。例えば、LoTが扱える論理的な表現や規則が限られていることや、LLMが時々間違った情報を作り出してしまう問題などがあります。このような課題を解決することで、将来的にはもっと優れた方法になると期待されています。

- 参照論文URL： [https://arxiv.org/abs/2305.09656](https://arxiv.org/abs/2305.09656)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[RAG-LLMシステムへのユーザークエリは4つのレベルに分類できる　最も複雑なのは「隠れた根拠からの推論が必要なクエリ」Microsoftによる研究](https://ai-data-base.com/archives/76241)

[米国3人に1人が生成AIを使用　ブルーカラー労働者も生産性向上　大規模調査より](https://ai-data-base.com/archives/76405)　

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)