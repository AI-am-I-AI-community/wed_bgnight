"use client"

import Link from 'next/link'

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 統一感のあるデザイン */}
      <section className="min-h-screen relative bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1751644296/AI-Powered_Journey_Image_k7nfzy.png')"
      }}>
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-16">
            {/* Main Title */}
            <div className="space-y-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
                <span className="block">Masayaとコミュニティー</span>
                <span className="hidden md:block mt-6">人と人のハブ役として</span>
                <span className="block md:hidden mt-4">人と人のハブ役</span>
                <span className="block md:hidden mt-2 ml-8">として</span>
              </h1>
              <div className="w-32 h-1 bg-black mx-auto drop-shadow-sm"></div>
            </div>
            
            {/* Subtext */}
            <div className="max-w-2xl animate-fade-in">
              <p className="text-2xl md:text-3xl text-balance leading-relaxed text-black drop-shadow-md">
                何かを好きになると人を集めコミュニティーを作る習性があります。<br />
                人と人のハブ役。今はボドゲとAI活用の会してます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Communities Section - 統一感のあるデザイン */}
      <section className="section-alt">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">現在活動中のコミュニティー</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="space-y-12">
              {/* Featured Community */}
              <div className="group cursor-pointer bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 md:p-12 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="grid-2col items-center gap-12">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider group-hover:bg-purple-600 transition-colors duration-300">
                        🎲 毎週水曜開催
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                        水曜ボドゲつくらNight
                      </h3>
                    </div>
                    <p className="text-lead leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      ボードゲーム制作を通じてクリエイティブな仲間が集まるコミュニティ。
                      プロトタイプ作成からテストプレイまで、ゲーム作りの全工程を楽しく学べます。
                    </p>
                    <div className="bg-white/50 rounded-xl p-6 backdrop-blur-sm">
                      <h4 className="font-semibold text-gray-900 mb-3">活動内容</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• ゲームアイデア発想・ブラッシュアップ</li>
                        <li>• プロトタイプ制作ワークショップ</li>
                        <li>• 作品のテストプレイ・フィードバック</li>
                        <li>• ゲーム制作に関する情報共有</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-purple-600 transition-colors duration-300">
                        参加者募集中
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-80 h-80 border-2 border-purple-300 overflow-hidden rounded-2xl group-hover:border-purple-500 transition-all duration-500 group-hover:rotate-2 group-hover:scale-105">
                      <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                        <span className="text-8xl">🎲</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Other Communities Grid */}
              <div className="grid-2col gap-8">
                <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="space-y-6">
                    <div className="w-full h-48 bg-blue-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
                        <span className="text-6xl">🤖</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">AI am I オフライン会</h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">AI活用を学び合い、「第二の自分」を育てる仲間が集まるコミュニティ。実践的なAI活用法から哲学的な話題まで幅広く議論しています。</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">活動内容</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 「第二の自分」育成ワークショップ</li>
                        <li>• 最新AIツール体験・レビュー</li>
                        <li>• AI活用事例シェア・ディスカッション</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-blue-600 transition-colors duration-300">
                        次回開催準備中
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="space-y-6">
                    <div className="w-full h-48 bg-green-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
                        <span className="text-6xl">🌟</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">みんなの生成AI活用発表会</h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">仕事・遊び・生活での実践的なAI活用事例をシェアし合う情報交換会。初心者歓迎、聞くだけ参加もOKのカジュアルな学びの場。</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">活動内容</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• AI活用事例発表・シェア</li>
                        <li>• 最新AIツール情報交換</li>
                        <li>• 初心者向けワークショップ</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-green-600 transition-colors duration-300">
                        定期開催中
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Philosophy Section - 統一感のあるデザイン */}
      <section className="section-dark">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">コミュニティ作りの哲学</h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="grid-3col">
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-yellow-400/40 rounded-xl flex items-center justify-center group-hover:border-yellow-400 group-hover:bg-yellow-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-yellow-300 transition-colors duration-300">自然発生を大切に</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  強制せず、本当に好きな人が自然と集まる環境を作ることを心がけています。
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-green-400/40 rounded-xl flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-green-300 transition-colors duration-300">ハブとしての役割</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  人と人をつなぎ、新しい化学反応が生まれる場作りを目指しています。
                </p>
              </div>
              
              <div className="space-y-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 border-2 border-blue-400/40 rounded-xl flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-400/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-blue-300 transition-colors duration-300">楽しさを最優先</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  何よりも楽しく続けられることを重視。義務感ではなく、ワクワクを共有します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Communities Section - 統一感のあるデザイン */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">過去に立ち上げたコミュニティー</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="grid-3col gap-8">
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-orange-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center">
                      <span className="text-6xl">📝</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">福岡ブロガー会</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">福岡でブログを書く人たちが集まり、情報交換や相互支援を行うコミュニティでした。月1回の定期会合で多くのブロガーとの出会いがありました。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-orange-600 transition-colors duration-300">
                      2018-2020年活動
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-green-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
                      <span className="text-6xl">🌍</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">国際交流イベント</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">福岡に住む外国人と日本人の交流を促進するイベントを定期開催。言語交換から文化体験まで様々な企画を実施しました。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-green-600 transition-colors duration-300">
                      2017-2019年活動
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200/30 transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-full h-48 bg-purple-100 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                      <span className="text-6xl">🏠</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">ゲストハウス研究会</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">ゲストハウス経営に興味がある人たちと情報交換・視察ツアーを企画。実際に開業した人も出てきて嬉しい思い出です。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-purple-600 transition-colors duration-300">
                      2019-2020年活動
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section - 統一感のあるデザイン */}
      <section className="section-dark">
        <div className="container-narrow text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-display text-white">LET'S CONNECT</h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              <p className="text-lead max-w-2xl mx-auto text-white">
                一緒に楽しみませんか？<br />
                新しいコミュニティへの参加や、一緒に何か始めたいアイデアがあれば<br />
                お気軽にお声がけください！
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
                <Link href="/about" className="group btn btn-secondary text-lg px-8 py-4 relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 hover:-rotate-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">👤</span>
                    Masayaについて詳しく
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