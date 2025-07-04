import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - テキスト中心デザイン */}
      <section className="min-h-screen relative bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1751644296/AI-Powered_Journey_Image_k7nfzy.png')"
      }}>
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-16">
            {/* Main Catchphrase */}
            <div className="space-y-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
                <span className="block">旅のおともにAIを！</span>
                <span className="hidden md:block mt-6">"やさしく迎える"お手伝い。</span>
                <span className="block md:hidden mt-4">"やさしく迎える"</span>
                <span className="block md:hidden mt-2 ml-8">お手伝い。</span>
              </h1>
              <div className="w-32 h-1 bg-black mx-auto drop-shadow-sm"></div>
            </div>
            
            {/* Subtext */}
            <div className="max-w-2xl animate-fade-in">
              <p className="text-2xl md:text-3xl text-balance leading-relaxed text-black drop-shadow-md">
                あなたとAIの関係性を作り、深めます。独自のアプローチで元コーチとして深く、元日本語教師としてわかりやすく。
              </p>
            </div>
            
            {/* Profile Image */}
            <div className="animate-fade-in">
              <img 
                src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg" 
                alt="Masayaのプロフィール写真" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto shadow-lg"
              />
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in">
              <Link href="/about" className="btn btn-primary text-lg px-8 py-4">
                About Me
              </Link>
              <Link href="/blog" className="btn btn-secondary text-lg px-8 py-4">
                Read Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Partnership Section */}
      <section className="section-alt">
        <div className="container-custom text-center space-y-16">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="hidden md:block">AIとの関係性を育み、活かす。</span>
              <span className="block md:hidden">AIとの関係性を育み<br />あなた"らしさ"も活かす。</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-large text-gray-800 leading-relaxed">
              <p className="mb-6">
                あなたを"知り尽くした"AI<br />
                一度育てば、あらゆる場面でずっと活躍！
              </p>
              <p className="mb-6">
                小さな会話からあなたがまだ知らない"あなた"を教え、<br />
                ときには意外な提案を、ときにはそっと背中を押してくれる。
              </p>
              <p className="text-large font-semibold text-blue-600 leading-loose tracking-wide">
                そんなAIとの成長の旅<br />
                はじめてみませんか？
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strength Section */}
      <section className="section-dark">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-display text-white">STRENGTH</h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>
            
            <div className="grid-3col">
              <div className="space-y-6 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors duration-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide">新しいモノ好き</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  最新AIツール情報を追い続け、積極的に課金して人柱になっています。常に自分 or誰かにぴったりのAI・ITツールを探求！
                </p>
                <Link href="/tools" className="btn btn-secondary text-sm">
                  活用中ツール&試したもの
                </Link>
              </div>
              
              <div className="space-y-6 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors duration-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide">わかりやすい！と評判</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  日本語教師、企業のIT担当、プロのコーチなど社員・個人で”聴くこと””教えること”を生業としてきました。
                </p>
                <Link href="/about" className="btn btn-secondary text-sm">
                  Masayaの経歴
                </Link>
              </div>
              
              <div className="space-y-6 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors duration-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide">"楽しさ"分かち合いたい</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  何かを好きになると人を集めコミュニティーを作る習性があります。人と人のハブ役。今はボドゲとAI活用の会してます。
                </p>
                <Link href="/community" className="btn btn-secondary text-sm">
                  Masayaとコミュニティー
                </Link>
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