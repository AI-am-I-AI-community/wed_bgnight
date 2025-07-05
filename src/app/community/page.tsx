"use client"

import Link from 'next/link'

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 統一感のあるデザイン（高さ半分） */}
      <section className="min-h-[50vh] relative bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1751450179/aibg01_lbdyxt.jpg')"
      }}>
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-12">
            {/* Main Title */}
            <div className="space-y-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
                <span className="block">コミュニティー</span>
              </h1>
              <div className="w-32 h-1 bg-black mx-auto drop-shadow-sm"></div>
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
            
            <div className="grid-3col gap-6">
              {/* ボドゲつくらNight */}
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-200/30 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    <span className="text-2xl">🎲</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">ボドゲつくらNight</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">毎週水曜開催。ボードゲーム制作を通じてクリエイティブな仲間が集まるコミュニティ。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-purple-600 transition-colors duration-300">
                      参加者募集中
                    </span>
                  </div>
                </div>
              </div>
              
              {/* 生成AI活用シェア会 */}
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-200/30 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">生成AI活用シェア会</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">仕事・遊び・生活での実践的なAI活用事例をシェアし合う情報交換会。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-blue-600 transition-colors duration-300">
                      定期開催中
                    </span>
                  </div>
                </div>
              </div>
              
              {/* 福沼会 */}
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">福沼会</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">福岡でAI活用を学び合い、「第二の自分」を育てる仲間が集まるコミュニティ。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-green-600 transition-colors duration-300">
                      次回開催準備中
                    </span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white">コミュニティ作りで大事にしたいこと</h2>
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
            
            <div className="grid-4col gap-6">
              {/* ピクニックサークル */}
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-200/30 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                    <span className="text-2xl">🧺</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">ピクニックサークル</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">大学出て１、２年間。自然の中で楽しむ仲間たちとピクニックを企画・開催していました。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-orange-600 transition-colors duration-300">
                      大学卒業後1-2年
                    </span>
                  </div>
                </div>
              </div>
              
              {/* シェアハウスのらまめ */}
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-xl hover:shadow-green-200/30 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">シェアハウスのらまめ</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">友人4人と共同生活。シェアハウスでの暮らしを通じて、新しい生活スタイルを体験しました。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-green-600 transition-colors duration-300">
                      友人4人と共同生活
                    </span>
                  </div>
                </div>
              </div>
              
              {/* シェアハウス&ホームステイ */}
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-200/30 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">シェアハウス&ホームステイ</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">僕ら夫婦＋友人１人＋外国人留学生。国際的な環境での共同生活を体験しました。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-purple-600 transition-colors duration-300">
                      夫婦＋友人＋留学生
                    </span>
                  </div>
                </div>
              </div>
              
              {/* 留学・国際交流サークルUniPass */}
              <div className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-200/30 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <span className="text-2xl">✈️</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">留学・国際交流サークルUniPass</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">大学3年ー4年生。留学や国際交流に興味のある学生たちと活動していました。</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-blue-600 transition-colors duration-300">
                      大学3年ー4年生
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