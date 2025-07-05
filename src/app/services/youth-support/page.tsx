"use client"

import Link from 'next/link'

export default function YouthSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-alt">
        <div className="container-narrow">
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <Link href="/" className="inline-block text-gray-600 hover:text-black transition-colors duration-300">
                ← ホームに戻る
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold">社会的養護のユース支援</h1>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                社会的養護のもとで育った若者たちが、自分らしく社会で活躍できるよう、
                ボードゲームを通じた居場所づくりと支援活動を行っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Activities */}
      <section className="section">
        <div className="container-narrow">
          <div className="space-y-16">
            {/* 現在の活動 */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">現在の活動</h2>
              <div className="grid-2col gap-12">
                <div className="bg-purple-50 rounded-2xl p-8 space-y-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-purple-600">NPO団体での月一ボードゲーム会</h3>
                    <p className="text-gray-700 leading-relaxed">
                      社会的養護のユースたちが集まり、ボードゲームを通じて自然な交流を楽しむ場を提供しています。ゲームを通じて、コミュニケーション力や問題解決能力を育みながら、同じ境遇の仲間との絆を深めています。
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-8 space-y-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">社会的養護施設での週一勤務</h3>
                    <p className="text-gray-700 leading-relaxed">
                      社会的養護施設で週に一度勤務し、子どもたちや若者たちの日常をサポートしています。現場での経験を通じて、一人ひとりの個性や可能性を理解し、それぞれに合った支援方法を模索しています。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 支援の理念 */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900">支援の理念</h2>
                </div>
                
                <div className="grid-3col gap-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">自然な学び</h3>
                    <p className="text-gray-600 text-sm">ボードゲームを通じて、楽しみながら自然にスキルを身につける</p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">居場所づくり</h3>
                    <p className="text-gray-600 text-sm">安心して自分らしくいられる場所を提供</p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">可能性の発見</h3>
                    <p className="text-gray-600 text-sm">一人ひとりの個性と可能性を大切に</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 将来の目標 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">将来の目標</h2>
                  <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    人生の一つの目標として、社会的養護のユースたちの支援にも繋がるボードゲームカフェの開業を目指しています。
                  </p>
                </div>
                
                <div className="max-w-3xl mx-auto space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-purple-600 mb-4">支援型ボードゲームカフェのビジョン</h3>
                    <ul className="text-gray-700 leading-relaxed space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>社会的養護のユースが気軽に立ち寄れる居場所</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>就労体験や職業訓練の機会を提供</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>地域住民との自然な交流の場</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>ボードゲームを通じた社会性・コミュニケーション力の向上</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>持続可能な支援システムの構築</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Masayaからのメッセージ */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900">Masayaからのメッセージ</h2>
                </div>
                
                <div className="max-w-3xl mx-auto space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    社会的養護のユース支援は、私にとって特別な意味を持つ活動です。
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    施設で働き、NPOでの活動を通じて、多くの若者たちと出会ってきました。彼らは決して「支援が必要な存在」ではなく、それぞれが素晴らしい個性と可能性を持った一人の人間です。
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    ボードゲームには不思議な力があります。ゲームを通じて自然に笑顔が生まれ、コミュニケーションが生まれ、時には真剣に考える姿が見られます。そんな瞬間に、その人の本当の魅力が輝いて見えるのです。
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    将来のボードゲームカフェは、単なる事業ではなく、社会全体で若者たちを支える仕組みの一部になりたいと考えています。地域の人々と自然に交流できる場所、そして若者たちが自分の可能性を発見できる場所を作りたいのです。
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    一人ひとりが自分らしく輝ける社会を、みんなで作っていきましょう。
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold">お問い合わせ・協力のお申し出</h2>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                社会的養護のユース支援に関するお問い合わせや、協力のお申し出がございましたら、お気軽にご連絡ください。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://x.com/MasayaToAi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Xでお問い合わせ
                </a>
                <Link href="/" className="btn btn-secondary">
                  ホームに戻る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 