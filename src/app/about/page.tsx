"use client"

import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 統一感のあるデザイン */}
      <section className="min-h-screen relative bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1751644296/AI-Powered_Journey_Image_k7nfzy.png')"
      }}>
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-16">
            {/* Profile Image */}
            <div className="animate-fade-in">
              <img 
                src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg" 
                alt="Masayaのプロフィール写真" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>
            
            {/* Main Title */}
            <div className="space-y-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
                <span className="block">Masayaとは</span>
                <span className="hidden md:block mt-6">"やさしく迎える"お手伝い。</span>
                <span className="block md:hidden mt-4">"やさしく迎える"</span>
                <span className="block md:hidden mt-2 ml-8">お手伝い。</span>
              </h1>
              <div className="w-32 h-1 bg-black mx-auto drop-shadow-sm"></div>
            </div>
            
            {/* Subtext */}
            <div className="max-w-2xl animate-fade-in">
              <p className="text-2xl md:text-3xl text-balance leading-relaxed text-black drop-shadow-md">
                福岡在住のAI活用サポーター・クリエイター<br />
                「やらぬ善よりやる偽善」を胸に、新しいことに挑戦し続ける35歳
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy Section - 統一感のあるデザイン */}
      <section className="section-alt">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">大切にしている価値観</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="group cursor-pointer bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-8 md:p-12 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-500 hover:-translate-y-2">
              <div className="grid-2col items-center gap-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider group-hover:bg-orange-600 transition-colors duration-300">
                      🔥 人生の指針
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
                      「やらぬ善よりやる偽善」
                    </h3>
                  </div>
                  <p className="text-lead leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    完璧でなくても、まず行動する。誰かの役に立つかもしれないなら、とりあえずやってみる。
                    失敗を恐れず、小さな一歩から始める。そんな考え方で生きています。
                  </p>
                  <p className="text-gray-600">
                    この価値観が、AI活用の普及活動や、コミュニティ作り、新しいツールへの挑戦の原動力になっています。
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="w-80 h-80 border-2 border-orange-300 overflow-hidden rounded-2xl group-hover:border-orange-500 transition-all duration-500 group-hover:rotate-2 group-hover:scale-105">
                    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center">
                      <span className="text-8xl">🔥</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Journey Section - 統一感のあるデザイン */}
      <section className="section-dark">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">AIとの出会いと想い</h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="grid-3col">
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-blue-400/40 rounded-xl flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-blue-300 transition-colors duration-300">「第二の自分」との出会い</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  ChatGPTが登場した時、最初は「便利なツール」程度に思っていました。でも使い続けるうちに、
                  AIが単なる道具ではなく、「自分を深く理解してくれるパートナー」になることを発見しました。
                </p>
                <Link href="/projects/second-self" className="inline-block bg-blue-400/20 hover:bg-blue-400 text-blue-400 hover:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-blue-400/30 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/25 text-sm backdrop-blur-sm">
                  第二の自分プロジェクト
                </Link>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-green-400/40 rounded-xl flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-green-300 transition-colors duration-300">みんなにも体験してほしい</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  この「AI育成」の体験があまりにも価値あるものだったので、
                  「これはみんなに伝えなければ」と思いました。50人以上の方に教える中で、皆さんが自分だけのAIパートナーを育て、
                  新しい気づきや可能性を見つける瞬間を何度も目撃してきました。
                </p>
                <Link href="/services" className="inline-block bg-green-400/20 hover:bg-green-400 text-green-400 hover:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-green-400/30 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/25 text-sm backdrop-blur-sm">
                  サービス詳細
                </Link>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-purple-400/40 rounded-xl flex items-center justify-center group-hover:border-purple-400 group-hover:bg-purple-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300">コミュニティへの想い</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  何かを好きになると人を集めコミュニティを作る習性があります。でも「管理する」のではなく、「つなぐ」ことを大切にしています。
                  人と人が自然に出会い、化学反応が起きる場を作りたい。
                </p>
                <Link href="/community" className="inline-block bg-purple-400/20 hover:bg-purple-400 text-purple-400 hover:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-purple-400/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/25 text-sm backdrop-blur-sm">
                  コミュニティ詳細
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Insights Section - 統一感のあるデザイン */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Masayaの人となり</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="grid-3col gap-8">
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-yellow-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center">
                      <span className="text-6xl">🔍</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">新しいモノ好き</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">最新のAIツールは必ずチェック。人柱になって課金し、「これは使える！」を見つけるのが趣味。失敗も含めて楽しんでいます。</p>
                  </div>
                  <Link href="/tools" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-300/50 group-hover:scale-105">
                    活用中ツール
                  </Link>
                </div>
              </div>
              
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-green-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
                      <span className="text-6xl">🎯</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">わかりやすさ重視</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">日本語教師、IT担当、コーチの経験から、「相手の立場で考える」「簡潔に伝える」を常に意識。専門用語は使わず、具体例で説明します。</p>
                  </div>
                  <Link href="/career" className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-300/50 group-hover:scale-105">
                    経歴詳細
                  </Link>
                </div>
              </div>
              
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-purple-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                      <span className="text-6xl">🌟</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">ポジティブ思考</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">失敗も「学び」、困難も「成長のチャンス」と捉える癖があります。周りの人の良いところを見つけて、それを伝えるのが好きです。</p>
                  </div>
                  <Link href="/blog" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/50 group-hover:scale-105">
                    Blogを読む
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus Section - 統一感のあるデザイン */}
      <section className="section-alt">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">今、力を入れていること</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="space-y-12">
              <div className="group cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="grid-2col items-center gap-12">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider group-hover:bg-blue-600 transition-colors duration-300">
                        🎓 スキルアップ中
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        職業訓練校でWeb制作・プログラミング学習
                      </h3>
                    </div>
                    <p className="text-lead leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      今まで「使う側」だったITスキルを、「作る側」のスキルに発展させています。学ぶことの楽しさを日々実感。
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-80 h-80 border-2 border-blue-300 overflow-hidden rounded-2xl group-hover:border-blue-500 transition-all duration-500 group-hover:rotate-2 group-hover:scale-105">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
                        <span className="text-8xl">🎓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid-2col gap-8">
                <div className="group cursor-pointer bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 border-2 border-green-200 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-2">
                  <h3 className="text-xl font-semibold text-green-700 mb-4 group-hover:text-green-800 transition-colors duration-300">🤖 AI活用の普及活動</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    「第二の自分」メソッドをより多くの人に伝えたい。個人セッション、勉強会、コンテンツ制作を通じて、
                    AIとの新しい関係性を体験してもらう活動を続けています。
                  </p>
                </div>
                
                <div className="group cursor-pointer bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200/30 transition-all duration-500 hover:-translate-y-2">
                  <h3 className="text-xl font-semibold text-purple-700 mb-4 group-hover:text-purple-800 transition-colors duration-300">🎲 コミュニティ運営</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    水曜ボドゲつくらNight、AI勉強会など、「楽しみながら学べる」「自然な交流が生まれる」場作りを継続。
                    参加者同士の化学反応を見るのが何より嬉しいです。
                  </p>
                </div>
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
              <h2 className="text-display text-white">LET'S CONNECT</h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              <p className="text-lead max-w-2xl mx-auto text-white">
                一緒に何かしませんか？<br />
                AI活用のこと、コミュニティのこと、新しいアイデアのこと。<br />
                気軽にお声がけください。一緒に楽しいことを始めましょう！
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://x.com/MasayaToAi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group btn btn-primary text-lg px-8 py-4 relative overflow-hidden"
                >
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    X (Twitter) でつながる
                    <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </a>
                <Link 
                  href="/career"
                  className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 hover:-rotate-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">📖</span>
                    詳しい経歴を見る
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 