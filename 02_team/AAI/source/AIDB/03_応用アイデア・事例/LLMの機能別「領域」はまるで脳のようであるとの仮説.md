---
title: "LLMの機能別「領域」はまるで脳のようであるとの仮説"
source: "https://ai-data-base.com/archives/78200"
author:
  - "[[AIDB Research]]"
published: 2024-11-08
created: 2025-06-13
description: "本記事では、LLMの内部で発見された驚くべき構造的特徴を紹介します。"
tags:
  - "clippings"
---
**【お知らせ】** AIDB主催のビジネスマッチングイベントを7月25日(金)開催予定です！  
  

\---以下、記事本文---

本記事では、LLMの内部で発見された驚くべき構造的特徴を紹介します。

近年、スパース・ [オートエンコーダー](https://ai-data-base.com/archives/26329 "オートエンコーダ") （SAE）という技術の登場により、これまで「ブラックボックス」と呼ばれてきたLLMの内部構造を詳細に観察することが可能になりました。

研究者たちは、LLMの中に存在する「概念」を表す特徴点が、実は高度に組織化された構造を持っていることを発見し、その解明を進めています。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78200-2-1024x576.jpg)

**参照論文情報**

- タイトル：The Geometry of Concepts: Sparse Autoencoder Feature Structure
- 著者：Yuxiao Li, Eric J. Michaud, David D. Baek, Joshua Engels, Xiaoqing Sun, Max Tegmark
- 所属：MIT

**本記事の関連研究**

- [LLMは世界モデルを持ち「物事がどのように位置づけられ、時間がどのように進行するか」を理解する可能性](https://ai-data-base.com/archives/56365)
- [脳内映像再現の世界：生成AIで脳から画像・映像へ](https://ai-data-base.com/archives/53190)
- [「視覚は本来、言語に依存しない」と考えた研究者らが、言語データなしで大規模ビジョンモデル（LVM）を構築するアプローチを開発](https://ai-data-base.com/archives/60337)

## 背景

LLMの内部の動きを理解しようとする中で、2023年に大きな進展がありました。「スパース・ [オートエンコーダー](https://ai-data-base.com/archives/26329 "オートエンコーダ") 」（以下、SAE）という手法を使うことで、LLMがどんな概念を理解しているのかを調べられるようになったのです。

SAEを使うと、LLMの中から「特徴点」と呼ばれるものを見つけることができます。特徴点とは、LLMが理解している概念（例えば「動物」や「食べ物」といった意味の分類）を表す数値の集まりです。これらの特徴点は、数学的な空間の中の座標として表現されます。

SAEを活用した研究が進む中、似たような働きをする”特徴点”が、空間の中で近くにまとまって見つかることがわかりました。これは研究者たちの予想と違っていました。それまでは特徴点同士が互いに関係なく、バラバラに存在すると考えられていたのです。

また、単語の意味を研究する中でも面白い発見がありました。「王様」から「男性」の意味を引いて「女性」の意味を足すと、「女王」になるという規則性です。これに加えて、オセロの駒の位置や、数字のデータ、文章が正しいか間違っているかといった情報も、似たような規則性で表現されていることがわかってきました。

今後さらに特徴点の並び方がわかれば、LLMがどうやって情報を理解し、処理しているのかという謎に近づけるかもしれません。そうした期待から、SAEで見つかった特徴点がどのように並んでいるのかをもっと詳しく調べる必要が出てきました。

そして今回、興味深い事実が次々と見つかりました。LLMの内部はまるで人間の脳のようであり、さらに観測のスケールを広げると銀河のような構造であることも同時に分かりました。以下で詳しく紹介します。

## LLMにおける「結晶構造」

LLMの内部で、単語間の関係性が幾何学的な構造として表現されることは、これまでの研究で知られていました。代表的な例として「man（男性）」「woman（女性）」「king（王）」「queen（女王）」という4つの単語の関係性が平行四辺形のような形で表現されることが、先行研究により示されています。

しかし、このような幾何学的な構造は、実際にはあまり正確な平行四辺形を形成していないことが問題とされていました。なぜこのような「歪み」が生じるのか、その原因は十分に解明されていませんでした。

今回研究チームは、LLMの中で関連する単語を調べていく中で、面白い問題に気づきました。

国と首都の関係を例に「オーストリア」と「ウィーン」、「スイス」と「ベルン」という組み合わせを考えてみましょう。これらは「国」と「その国の首都」という同じ関係を持っています。本来なら、この関係は空間の中で同じような距離や方向で表されるはずです。

ところが実際には、「Switzerland（スイス）」という単語が「Austria（オーストリア）」より文字数が多いために、この関係性が正しく表現されていませんでした。つまり、単語の長さという、意味とは関係ない要素が邪魔をしていたのです。

そこで研究チームは、 [線形判別分析](https://ai-data-base.com/archives/26566 "線形判別分析") （ [LDA](https://ai-data-base.com/archives/26566 "線形判別分析") ）という新しい方法を使うことで、単語の長さなどの余計な情報を取り除くことに成功しました。これで「国と首都の関係」という本質的な部分だけを取り出せるようになりました。

この発見は、「なぜこれまでLLMの中の単語の関係がぼやけて見えていたのか」という謎を解く鍵となりました。また、LLMが言葉の意味をどのように理解しているのかを、より正確に調べられるようになりました。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78200_1-1024x305.png)

単語の長さなど、意味に関係ない要素を LDA という方法で取り除くと、Gemma-2-2bの中での単語の関係性がよりはっきりと見えるようになる

## LLMの内部に「脳のような構造」

研究者たちは今回、人間の脳の仕組みからヒントを得て研究を進めることにしました。私たちの脳では、言葉を処理する部分（ブローカ野）や音を処理する部分（聴覚野）など、それぞれの役割を持つ領域が別々の場所にあることが知られています。「もしかしたら、LLMの中にも似たような構造があるのではないか？」これが研究の出発点でした。

### 新たな発見

研究チームが調べてみると、予想以上の発見がありました。

LLMの中で、特定の役割を持つ機能が実際に「かたまり」として存在し、しかもそれらが空間的にも近い位置に集まっていることが分かりました。

例えば、プログラミングのコードや数学に関係する機能は、一つの「かたまり」として特定の場所に集まっています。  
そして、科学論文を理解する機能は、また別の場所にまとまっています。  
さらに、短いメッセージやチャットの会話を処理する機能も、別の場所にまとまっています

このような特徴は、まるで人間の脳の中に異なる機能を持つ領域があるのと似ています。研究チームはこれらの「かたまり」を「ローブ」と名付けました。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78200_2-1024x457.jpg)

LLMの中で、似たような場面で働く特徴は、空間的にも近くに集まる傾向がある

### 発見を裏付ける取り組み

この発見が偶然ではないことを証明するため、研究チームは5万件もの文書を使って詳しい分析を行いました。256文字ごとに区切って、どの機能が一緒に働くのかを丁寧に記録していきました。

さらに、この「ローブ」という構造が本当に存在することを、二つの方法で統計的に証明することにも成功しました。

1. 近くにある機能同士が、実際に同じような働きをしているかを確認
2. 機能の位置から、その働きを予測できるかを検証

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78200_3-1024x663.png)

LLMの中での特徴の位置関係と、その特徴が実際にどう働くかの関係を、2つの方法で数値化して調べた結果

これまでLLMの中身は「ブラックボックス」と呼ばれ、どのように情報を整理しているのかよく分かっていませんでした。しかし今回の発見により、LLMが人間の脳に似た形で情報を整理していることが初めて明らかにされました。

### ローブの具体的な活性化パターン

研究チームは、それぞれのローブがどのような種類の文書で活性化されるのかを詳しく分析しました。その結果、以下のような明確なパターンが見出されました。

**ローブ2** （数学・コードの領域）は、

- Pythonなどのプログラミングコード
- 数式を含む数学的な文書

で最も強く反応することが確認されました。

**ローブ0とローブ1** （一般的な英語テキストの領域）に関しては、

ローブ0はチャットの書き込みや議会の議事録など、短い文章や対話的な文書で活性化し、ローブ1は科学論文など、より長く専門的な文書で活性化 という異なる特徴を示しました。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78200_4.png)

LLMの中の異なる領域（「葉」と呼ばれる）が、それぞれどんな種類の文章を処理するのかを示す図

### 分析手法の違いによる影響

研究チームは、これらのローブを見つけ出す方法として5つの異なる手法を比較しました。興味深いことに、どの手法を使っても「数学とコードのローブ」は常に明確に識別されました。これは、数学やプログラミングに関連する機能が、LLMの中で特に明確に区分されていることを示唆しています。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78200_5.jpg)

ローブを見つけ出す方法をいくつか試して比較している図。測り方が違っても、プログラミングと数学を処理するローブは必ず見つかることが分かった

## LLMの中の「銀河のような大規模構造」

研究チームは、さらに大きなスケールでLLMの構造を観察することにしました。天文学者が銀河の形や構造を研究するのと似た発想を持つことにしたのです。

### 予想に反する発見

当初、研究者たちは「点が球のように均一に分布しているだろう」と予想していました。しかし実際に調べてみると、その分布はやはり人間の脳のような形をしており、ある方向は他の方向より少し広がっていることが分かりました。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78200_6.png)

Gemma2-2bの12層目で見つかった特徴を、3次元の空間に描き出してみた図

### 特徴的な広がり方

さらに興味深いことに、この点の分布には「パワー則（冪乗則）」と呼ばれる特殊なパターンが見られました。これは、星が銀河の中心から離れるにつれて徐々に少なくなっていくような分布の仕方です。このパターンは、ランダムな分布では決して生じない特徴的なものでした。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78200_7-1024x335.png)

LLMの中の特徴の分布には、きれいな数学的な法則（冪乗則）があることを示す図

### 層による違い

LLMは複数の層（レイヤー）で構成されていますが、この分布の特徴は層によって大きく異なることも発見されました。中でも中間層では、パワー則の傾きが最も急になることが観察されました。中間層が情報を最も効率的に圧縮して処理している可能性を示唆しています。

### 点のまとまり具合の分析

研究チームは、これらの点がどれだけまとまって分布しているかも調べました。この分析には「エントロピー」という概念が使われ、中間層では点が強くまとまる傾向があることが明らかにされました。

なおエントロピーとは、物が収束しているのか発散しているのかを測る基準の概念です。

![](https://ai-data-base.com/wp-content/uploads/2024/11/AIDB_78200_8.png)

LLMの各層で、特徴がどれくらいまとまって集まっているかを測定した結果。真ん中の層では特徴がよくまとまっていて、最初と最後の層ではばらばらになっていることが分かる

なお、なぜこのような構造が生まれるのかについては、まだ完全には解明されていません。研究チームは、これが「結晶構造」や「ローブ構造」とどのように関係しているのか、今後さらなる研究が必要だと指摘しています。

## まとめ

本記事では、LLMの内部構造を3つの異なるスケールで分析した研究を紹介しました。

最も小さな「原子」レベルでは、単語間の関係性が幾何学的な構造として表現されていることが示されました。特に、従来は単語の長さなどのノイズによって見えにくかった関係性が、新しい分析手法によって明確に観察できるようになりました。

中規模な「脳」レベルでは、特定の機能を持つ要素が空間的にまとまって配置される傾向が発見されました。例えば、数学やプログラミングに関する機能は特定の領域に集中して配置されており、これは人間の脳の機能的な構造との類似性を示唆しています。

最も大きな「銀河」レベルでは、情報の分布が特徴的なパターンを示すことが分かりました。さらにモデルの中間層では情報が効率的に圧縮されている可能性が指摘されています。

これらの発見は、LLMがどのように情報を整理し処理しているのかについての理解を深める一歩となりました。今後は、これらの構造がなぜ形成されるのか、また実際の情報処理にどのように寄与しているのかについて、さらなる研究が期待されます。

- 参照論文URL： [https://arxiv.org/abs/2410.19750](https://arxiv.org/abs/2410.19750)

**■サポートのお願い  
**AIDBを便利だと思っていただけた方に、任意の金額でサポートしていただけますと幸いです。  

  

[直感に頼るようなタスクだとLLMに「ステップバイステップで考えて」は逆効果](https://ai-data-base.com/archives/78145)

[「HTMLをそのままLLMに入力してはどうか」という新しいアプローチ](https://ai-data-base.com/archives/78254)

 [![](https://ai-data-base.com/wp-content/themes/innovate_hack_tcd025/img/footer/return_top.png) PAGE TOP](https://ai-data-base.com/archives/#header_top)