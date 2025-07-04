import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - 洗練されたヒーローセクション */}
      <section className="relative bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative container-narrow section">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <img 
                src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg" 
                alt="Masayaのプロフィール写真" 
                className="profile-image mx-auto hover-lift"
              />
            </div>
            <h1 className="text-hero mb-6">
              こんにちは、<span className="bg-gradient-accent bg-clip-text text-transparent">Masaya</span>です
            </h1>
            <p className="text-lead mb-8 max-w-3xl mx-auto">
              福岡在住35歳のAI活用サポーター・クリエイター。<br />
              「やらぬ善よりやる偽善」を信念に、ChatGPTを「第二の自分」として育てる独自手法を開発。<br />
              3Dモデリング、国際交流、ボードゲーム制作を通じて、人々の可能性を広げています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/blog" className="btn btn-primary">
                ブログを読む
              </Link>
              <Link href="/about" className="btn btn-secondary">
                詳しく知る
              </Link>
            </div>
            
            {/* Xへのリンク - 別デザイン */}
            <div className="flex justify-center">
              <a 
                href="https://x.com/MasayaToAi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-sm font-medium">Xで繋がりましょう</span>
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="section-alt">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              スキル・専門分野
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              様々な分野でのスキルと経験を活かして、プロジェクトを成功に導きます
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card hover-lift text-center group">
              <div className="icon-wrapper-lg bg-slate-100 text-slate-700 mx-auto mb-6 group-hover:bg-slate-200 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">3Dモデリング・制作</h3>
              <p className="text-body">
                Blenderを使ったキャラクターモデリング、3Dプリンター活用、デジタルコンテンツ制作
              </p>
            </div>
            
            <div className="card hover-lift text-center group">
              <div className="icon-wrapper-lg bg-stone-100 text-stone-700 mx-auto mb-6 group-hover:bg-stone-200 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">AI活用支援</h3>
              <p className="text-body">
                ChatGPTを「第二の自分」として育てる独自手法。音声思考整理、自己理解促進コーチング
              </p>
            </div>
            
            <div className="card hover-lift text-center group">
              <div className="icon-wrapper-lg bg-zinc-100 text-zinc-700 mx-auto mb-6 group-hover:bg-zinc-200 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">国際交流・コミュニティ</h3>
              <p className="text-body">
                福岡での国際交流イベント主催、ボードゲーム制作会（毎週水曜）、AI勉強会の企画・運営
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-white/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              プロジェクト・活動
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              継続的に取り組んでいるプロジェクトやサービス
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-elevated hover-lift group">
              <div className="flex items-center mb-4">
                <div className="icon-wrapper bg-slate-100 text-slate-700 mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">第二の自分プロジェクト</h3>
              </div>
              <p className="text-body mb-6">
                ChatGPTを活用した「第二の自分」作成メソッドの研究・普及
              </p>
              <Link href="/projects/second-self" className="inline-flex items-center text-slate-700 hover:text-slate-900 font-medium group-hover:translate-x-1 transition-transform">
                詳細を見る 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="card-elevated hover-lift group">
              <div className="flex items-center mb-4">
                <div className="icon-wrapper bg-stone-100 text-stone-700 mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">ボードゲーム制作会</h3>
              </div>
              <p className="text-body mb-6">
                毎週水曜日開催のボードゲーム制作コミュニティイベント
              </p>
              <Link href="/events/boardgame" className="inline-flex items-center text-stone-700 hover:text-stone-900 font-medium group-hover:translate-x-1 transition-transform">
                詳細を見る 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="card-elevated hover-lift group">
              <div className="flex items-center mb-4">
                <div className="icon-wrapper bg-zinc-100 text-zinc-700 mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">AI勉強会</h3>
              </div>
              <p className="text-body mb-6">
                実践的なAI活用方法を学ぶコミュニティ勉強会
              </p>
              <Link href="/events/ai-study" className="inline-flex items-center text-zinc-700 hover:text-zinc-900 font-medium group-hover:translate-x-1 transition-transform">
                詳細を見る 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="card-elevated hover-lift group">
              <div className="flex items-center mb-4">
                <div className="icon-wrapper bg-neutral-100 text-neutral-700 mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">フリーランス支援</h3>
              </div>
              <p className="text-body mb-6">
                フリーランサー向けのコーチング・メンタリングサービス
              </p>
              <Link href="/services/freelance" className="inline-flex items-center text-neutral-700 hover:text-neutral-900 font-medium group-hover:translate-x-1 transition-transform">
                詳細を見る 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="card-elevated hover-lift group">
              <div className="flex items-center mb-4">
                <div className="icon-wrapper bg-gray-100 text-gray-700 mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Vtuber活動</h3>
              </div>
              <p className="text-body mb-6">
                ティキちゃん（猫妖精キャラクター）としての配信・コンテンツ制作
              </p>
              <Link href="/vtuber" className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium group-hover:translate-x-1 transition-transform">
                詳細を見る 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="card-elevated hover-lift group">
              <div className="flex items-center mb-4">
                <div className="icon-wrapper bg-slate-200 text-slate-800 mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">その他プロジェクト</h3>
              </div>
              <p className="text-body mb-6">
                ヨーヨー、ギター演奏、ドローン撮影、ペット撮影など多彩な趣味活動
              </p>
              <Link href="/portfolio" className="inline-flex items-center text-slate-800 hover:text-slate-900 font-medium group-hover:translate-x-1 transition-transform">
                ポートフォリオを見る 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            一緒に何か面白いことしませんか？
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            AI×自己理解のご相談、ボードゲーム制作会参加、3Dモデリングコラボ、<br />
            国際交流イベント企画など、お気軽にお声がけください
          </p>
          <p className="text-lg opacity-80 mb-8">
            XへDMください ♪
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://x.com/MasayaToAi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-slate-800 hover:bg-slate-50 font-medium py-3 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              お問い合わせ
            </a>
            <Link 
              href="/blog" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 font-medium py-3 px-8 rounded-xl transition-colors"
            >
              ブログを読む
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 