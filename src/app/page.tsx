import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 大胆なミニマルヒーロー */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid-2col items-center min-h-[80vh]">
            {/* Left: Typography */}
            <div className="space-y-12 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-hero text-balance">
                  AI×<br />
                  CREATIVITY<br />
                  <span className="text-gray-400">MASAYA</span>
                </h1>
                <div className="w-24 h-0.5 bg-black"></div>
              </div>
              
              <div className="space-y-8 max-w-lg">
                <p className="text-large text-balance">
                  福岡在住35歳のAI活用サポーター・クリエイター。
                  「第二の自分」を育てる独自手法で、人々の可能性を広げています。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about" className="btn btn-primary">
                    About Me
                  </Link>
                  <Link href="/blog" className="btn btn-secondary">
                    Read Blog
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="flex justify-center animate-fade-in">
              <img 
                src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg" 
                alt="Masayaのプロフィール写真" 
                className="profile-image-large object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-alt">
        <div className="container-custom text-center space-y-16">
          <div className="space-y-8">
            <h2 className="text-display">PHILOSOPHY</h2>
            <div className="w-16 h-0.5 bg-black mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-large text-gray-800 leading-relaxed">
              「やらぬ善よりやる偽善」<br />
              完璧を求めず、まず行動する。<br />
              AI技術を通じて、一人ひとりの創造性を解放したい。
            </blockquote>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-dark">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-display text-white">EXPERTISE</h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="grid-3col">
              <div className="space-y-6 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors duration-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide">3D MODELING</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Blenderを使ったキャラクターモデリング、3Dプリンター活用、デジタルコンテンツ制作
                </p>
              </div>
              
              <div className="space-y-6 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors duration-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide">AI COACHING</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  ChatGPTを「第二の自分」として育てる独自手法。音声思考整理、自己理解促進コーチング
                </p>
              </div>
              
              <div className="space-y-6 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors duration-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide">COMMUNITY</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  福岡での国際交流イベント主催、ボードゲーム制作会、AI勉強会の企画・運営
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-display">PROJECTS</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="space-y-16">
              {/* Featured Project */}
              <div className="grid-2col items-center border-b border-gray-200 pb-16">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="text-sm tracking-wider text-gray-500 uppercase">Featured Project</div>
                    <h3 className="text-3xl md:text-4xl font-bold">第二の自分<br />プロジェクト</h3>
                  </div>
                  <p className="text-lead">
                    ChatGPTを活用した「第二の自分」作成メソッドの研究・普及。独自の音声思考整理手法で自己理解を深める。
                  </p>
                  <Link href="/projects/second-self" className="btn-underline">
                    View Project
                  </Link>
                </div>
                <div className="flex justify-end">
                  <div className="w-80 h-80 bg-gray-100 border border-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm tracking-wider">PROJECT IMAGE</span>
                  </div>
                </div>
              </div>
              
              {/* Other Projects Grid */}
              <div className="grid-3col">
                <div className="space-y-6 border border-gray-200 p-8 hover:border-black transition-colors duration-500">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">ボードゲーム制作会</h4>
                    <p className="text-gray-600">毎週水曜日開催のコミュニティイベント</p>
                  </div>
                  <Link href="/events/boardgame" className="btn-underline">
                    View Event
                  </Link>
                </div>
                
                <div className="space-y-6 border border-gray-200 p-8 hover:border-black transition-colors duration-500">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">AI勉強会</h4>
                    <p className="text-gray-600">実践的なAI活用方法を学ぶ勉強会</p>
                  </div>
                  <Link href="/events/ai-study" className="btn-underline">
                    View Event
                  </Link>
                </div>
                
                <div className="space-y-6 border border-gray-200 p-8 hover:border-black transition-colors duration-500">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">フリーランス支援</h4>
                    <p className="text-gray-600">コーチング・メンタリングサービス</p>
                  </div>
                  <Link href="/services/freelance" className="btn-underline">
                    View Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-alt">
        <div className="container-narrow text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-display">LET'S CONNECT</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              <p className="text-lead max-w-2xl mx-auto">
                プロジェクトのご相談、AI活用についてのお話、<br />
                お気軽にお声がけください。
              </p>
              
              <a 
                href="https://x.com/MasayaToAi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Contact on X
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 