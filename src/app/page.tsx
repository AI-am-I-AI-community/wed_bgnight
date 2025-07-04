import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section - Masayaの紹介 */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
              <img 
                src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg" 
                alt="Masayaのプロフィール写真" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            こんにちは、<span className="text-primary-600">Masaya</span>です
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            福岡在住35歳のAI活用サポーター・クリエイター。「やらぬ善よりやる偽善」を信念に、
            ChatGPTを「第二の自分」として育てる独自手法を開発。3Dモデリング、国際交流、
            ボードゲーム制作を通じて、人々の可能性を広げています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="btn-primary">
              ブログを読む
            </Link>
            <Link href="/about" className="btn-secondary">
              詳しく知る
            </Link>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              スキル・専門分野
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              様々な分野でのスキルと経験を活かして、プロジェクトを成功に導きます
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3Dモデリング・制作</h3>
              <p className="text-gray-600">
                Blenderを使ったキャラクターモデリング、3Dプリンター活用、デジタルコンテンツ制作
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI活用支援</h3>
              <p className="text-gray-600">
                ChatGPTを「第二の自分」として育てる独自手法。音声思考整理、自己理解促進コーチング
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">国際交流・コミュニティ</h3>
              <p className="text-gray-600">
                福岡での国際交流イベント主催、ボードゲーム制作会（毎週水曜）、AI勉強会の企画・運営
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              プロジェクト・活動
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              継続的に取り組んでいるプロジェクトやサービス
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">第二の自分プロジェクト</h3>
              <p className="text-gray-600 mb-4">
                ChatGPTを活用した「第二の自分」作成メソッドの研究・普及
              </p>
              <Link href="/projects/second-self" className="text-primary-600 hover:text-primary-700 font-medium">
                詳細を見る →
              </Link>
            </div>
            
            <div className="card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ボードゲーム制作会</h3>
              <p className="text-gray-600 mb-4">
                毎週水曜日開催のボードゲーム制作コミュニティイベント
              </p>
              <Link href="/events/boardgame" className="text-primary-600 hover:text-primary-700 font-medium">
                詳細を見る →
              </Link>
            </div>
            
            <div className="card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI勉強会</h3>
              <p className="text-gray-600 mb-4">
                実践的なAI活用方法を学ぶコミュニティ勉強会
              </p>
              <Link href="/events/ai-study" className="text-primary-600 hover:text-primary-700 font-medium">
                詳細を見る →
              </Link>
            </div>
            
            <div className="card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">フリーランス支援</h3>
              <p className="text-gray-600 mb-4">
                フリーランサー向けのコーチング・メンタリングサービス
              </p>
              <Link href="/services/freelance" className="text-primary-600 hover:text-primary-700 font-medium">
                詳細を見る →
              </Link>
            </div>
            
            <div className="card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vtuber活動</h3>
              <p className="text-gray-600 mb-4">
                ティキちゃん（猫妖精キャラクター）としての配信・コンテンツ制作
              </p>
              <Link href="/vtuber" className="text-primary-600 hover:text-primary-700 font-medium">
                詳細を見る →
              </Link>
            </div>
            
            <div className="card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">その他プロジェクト</h3>
              <p className="text-gray-600 mb-4">
                ヨーヨー、ギター演奏、ドローン撮影、ペット撮影など多彩な趣味活動
              </p>
              <Link href="/portfolio" className="text-primary-600 hover:text-primary-700 font-medium">
                ポートフォリオを見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Blog Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            一緒に何か面白いことしませんか？
          </h2>
          <p className="text-xl text-primary-100 mb-6">
            AI×自己理解のご相談、ボードゲーム制作会参加、3Dモデリングコラボ、
            国際交流イベント企画など、お気軽にお声がけください
          </p>
          <p className="text-lg text-primary-100 mb-8">
            XへDMください ♪
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://x.com/MasayaToAi" target="_blank" rel="noopener noreferrer" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              お問い合わせ
            </a>
            <Link href="/blog" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors">
              ブログを読む
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 