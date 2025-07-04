import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Masayaの経歴
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              日本語教師、企業のIT担当、プロのコーチなど<br />
              社員・個人いろんなスタイルで"聴くこと""教えること"を生業としてきました。
            </p>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">キャリアの歩み</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              <div className="space-y-12">
                {/* Current */}
                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    2024
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI活用コーチ・職業訓練校生</h3>
                    <p className="text-gray-600 mb-3">
                      「第二の自分」AI育成法を確立し、AI活用のサポート活動を開始。
                      同時に職業訓練校でWeb制作・プログラミングスキルを習得中。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">AI活用コーチング</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Web制作学習</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">コミュニティ運営</span>
                    </div>
                  </div>
                </div>

                {/* 2020-2023 */}
                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    2020
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">プロコーチ・ライフコーチ</h3>
                    <p className="text-gray-600 mb-3">
                      個人向けライフコーチング事業を本格化。傾聴スキルと質問技術を磨き、
                      クライアントの自己理解・目標達成をサポート。コーチング資格も取得。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">ライフコーチング</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">傾聴スキル</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">個人事業</span>
                    </div>
                  </div>
                </div>

                {/* 2018-2020 */}
                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    2018
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">企業IT担当・ブログ運営</h3>
                    <p className="text-gray-600 mb-3">
                      小さな組織でIT系業務全般を担当。システム導入・運用・社員教育を一手に引き受ける。
                      同時期に旅ブログ「イナタビ」を本格運営し、5年で290記事を執筆。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">IT業務全般</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">ブログ運営</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">システム導入</span>
                    </div>
                  </div>
                </div>

                {/* 2015-2018 */}
                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    2015
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">日本語教師・国際交流</h3>
                    <p className="text-gray-600 mb-3">
                      外国人への日本語教育に従事。わかりやすく教える技術の基礎を習得。
                      福岡での国際交流イベント企画・運営も始める。多様な文化背景の人とのコミュニケーション力を培う。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">日本語教育</span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">国際交流</span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">教育技術</span>
                    </div>
                  </div>
                </div>

                {/* Early Career */}
                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold">
                    2010
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">社会人スタート・模索期</h3>
                    <p className="text-gray-600 mb-3">
                      様々な業界・職種を経験。接客業、営業、事務職など幅広い仕事を通じて
                      「人とのコミュニケーション」の重要性と「教える・伝える」ことの楽しさを発見。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">多職種経験</span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">コミュニケーション</span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">基盤形成</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">培ってきたコアスキル</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👂</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">傾聴力</h3>
              <p className="text-gray-600">
                相手の話を深く聞き、本当に言いたいことを引き出すスキル。コーチング・日本語教育で磨かれました。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">わかりやすい説明力</h3>
              <p className="text-gray-600">
                複雑なことを簡単に、相手のレベルに合わせて伝える技術。IT業務・日本語教育で実践してきました。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">コミュニティ形成力</h3>
              <p className="text-gray-600">
                人と人をつなぎ、自然な交流が生まれる場作り。多くのコミュニティ立ち上げ経験があります。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">IT・デジタル活用力</h3>
              <p className="text-gray-600">
                新しいツールを積極的に試し、業務効率化・問題解決に活かすスキル。AI活用の基盤となっています。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">文章・コンテンツ制作力</h3>
              <p className="text-gray-600">
                5年間のブログ運営で290記事執筆。読みやすく価値ある情報を継続的に発信する力があります。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">学習・適応力</h3>
              <p className="text-gray-600">
                様々な分野・業界を経験し、常に新しいことを学び続ける姿勢。変化を楽しむマインドです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Masayaの仕事観</h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                「やらぬ善よりやる偽善」
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                完璧を求めて何もしないより、不完全でも行動することを大切にしています。<br />
                小さな一歩から始まる変化を信じ、人と人のつながりの中で<br />
                お互いが成長できる関係性を築いていきたいと考えています。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">教えることで学ぶ</h4>
                <p className="text-gray-600">
                  誰かに何かを教える時、自分も最も多くを学びます。
                  一方的な指導ではなく、相互成長の関係性を大切にしています。
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">技術は人のために</h4>
                <p className="text-gray-600">
                  AIやITツールは手段であり、最終的には人がより豊かに、
                  楽しく生きるためのものだと考えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">一緒に何か始めませんか？</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI活用、コミュニティ作り、学習サポートなど<br />
            様々な形でお手伝いできることがあるかもしれません
          </p>
          <div className="space-x-4">
            <Link href="/" className="btn btn-primary">
              ホームに戻る
            </Link>
            <Link href="/tools" className="btn btn-secondary">
              活用ツールを見る
            </Link>
            <Link href="/community" className="btn btn-secondary">
              コミュニティについて
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 