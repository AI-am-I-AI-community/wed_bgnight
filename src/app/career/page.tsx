"use client"

import Link from 'next/link'

export default function Career() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 統一感のあるデザイン（高さ半分） */}
      <section className="min-h-[50vh] relative bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1751644296/AI-Powered_Journey_Image_k7nfzy.png')"
      }}>
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-12">
            {/* Main Title */}
            <div className="space-y-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
                <span className="block">経歴</span>
              </h1>
              <div className="w-32 h-1 bg-black mx-auto drop-shadow-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline Section - 統一感のあるデザイン */}
      <section className="section-alt">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">キャリアの歩み</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                
                <div className="space-y-12">
                  {/* Current */}
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                      2024
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-blue-400 group-hover:shadow-2xl group-hover:shadow-blue-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">AI活用コーチ・職業訓練校生</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
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
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                      2020
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-green-400 group-hover:shadow-2xl group-hover:shadow-green-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">プロコーチ・ライフコーチ</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
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
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                      2018
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-purple-400 group-hover:shadow-2xl group-hover:shadow-purple-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">企業IT担当・ブログ運営</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
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
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
                      2015
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-orange-400 group-hover:shadow-2xl group-hover:shadow-orange-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">日本語教師・国際交流</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
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
                  <div className="group cursor-pointer relative flex items-start space-x-8 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-gray-600 group-hover:scale-110 transition-all duration-300">
                      2010
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-gray-400 group-hover:shadow-2xl group-hover:shadow-gray-200/30 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors duration-300">社会人スタート・模索期</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
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
        </div>
      </section>

      {/* Core Skills Section - 統一感のあるデザイン */}
      <section className="section-dark">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">培ってきたコアスキル</h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="grid-3col">
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-blue-400/40 rounded-xl flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">👂</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-blue-300 transition-colors duration-300">傾聴力</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  相手の話を深く聞き、本当に言いたいことを引き出すスキル。コーチング・日本語教育で磨かれました。
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-green-400/40 rounded-xl flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-green-300 transition-colors duration-300">わかりやすい説明力</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  複雑なことを簡単に、相手のレベルに合わせて伝える技術。IT業務・日本語教育で実践してきました。
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-purple-400/40 rounded-xl flex items-center justify-center group-hover:border-purple-400 group-hover:bg-purple-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300">コミュニティ形成力</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  人と人をつなぎ、自然な交流が生まれる場作り。多くのコミュニティ立ち上げ経験があります。
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-orange-400/40 rounded-xl flex items-center justify-center group-hover:border-orange-400 group-hover:bg-orange-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-orange-300 transition-colors duration-300">IT・デジタル活用力</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  新しいツールを積極的に試し、業務効率化・問題解決に活かすスキル。AI活用の基盤となっています。
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-yellow-400/40 rounded-xl flex items-center justify-center group-hover:border-yellow-400 group-hover:bg-yellow-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-yellow-300 transition-colors duration-300">文章・コンテンツ制作力</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  5年間のブログ運営で290記事執筆。読みやすく価値ある情報を継続的に発信する力があります。
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-red-400/40 rounded-xl flex items-center justify-center group-hover:border-red-400 group-hover:bg-red-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-red-300 transition-colors duration-300">学習・適応力</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  様々な分野・業界を経験し、常に新しいことを学び続ける姿勢。変化を楽しむマインドです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - 統一感のあるデザイン */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Masayaの仕事観</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="group cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-2">
              <div className="grid-2col items-center gap-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider group-hover:bg-blue-600 transition-colors duration-300">
                      💡 仕事の哲学
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      「やらぬ善よりやる偽善」
                    </h3>
                  </div>
                  <p className="text-lead leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    完璧を求めて何もしないより、不完全でも行動することを大切にしています。
                    小さな一歩から始まる変化を信じ、人と人のつながりの中で
                    お互いが成長できる関係性を築いていきたいと考えています。
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="w-80 h-80 border-2 border-blue-300 overflow-hidden rounded-2xl group-hover:border-blue-500 transition-all duration-500 group-hover:rotate-2 group-hover:scale-105">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
                      <span className="text-8xl">💡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid-2col gap-8">
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-2">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">教えることで学ぶ</h4>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  誰かに何かを教える時、自分も最も多くを学びます。
                  一方的な指導ではなく、相互成長の関係性を大切にしています。
                </p>
              </div>
              
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200/30 transition-all duration-500 hover:-translate-y-2">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">技術は人のために</h4>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  AIやITツールは手段であり、最終的には人がより豊かに、
                  楽しく生きるためのものだと考えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section - 統一感のあるデザイン */}
      <section className="section-dark">
        <div className="container-narrow text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-display text-white">これも何かのご縁！</h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              <p className="text-lead max-w-2xl mx-auto text-white">
                Masayaと興味が似てる！Masayaが詳しいコレが気になる！<br />
                なんでもお気軽に☺️
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/" className="group btn btn-primary text-lg px-8 py-4 relative overflow-hidden">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    ホームに戻る
                    <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </Link>
                <Link href="/tools" className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 hover:-rotate-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">🔧</span>
                    活用ツールを見る
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/community" className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-green-300/50 transition-all duration-300 hover:-rotate-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">🤝</span>
                    コミュニティについて
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 