import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="section">
        <div className="container-narrow">
          <div className="text-center mb-16 animate-fade-in">
            <div className="mb-8">
              <img 
                src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg" 
                alt="Masayaのプロフィール写真" 
                className="w-40 h-40 rounded-full shadow-xl ring-4 ring-white/80 mx-auto hover-lift"
              />
            </div>
            <h1 className="text-hero mb-6">
              Masaya <span className="text-slate-600 text-2xl font-normal">について</span>
            </h1>
            <p className="text-lead mb-8">
              「やらぬ善よりやる偽善」を信念に、AI×人間の可能性を探求するクリエイター
            </p>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="section-alt">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">基本情報</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span className="text-slate-600"><strong>名前:</strong> Masaya</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span className="text-slate-600"><strong>年齢:</strong> 35歳</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span className="text-slate-600"><strong>住所:</strong> 福岡市</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span className="text-slate-600"><strong>職業:</strong> AI活用サポーター・クリエイター</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span className="text-slate-600"><strong>現在:</strong> 職業訓練校通学中・生成AI活用学習中</span>
                </div>
              </div>
            </div>
            
            <div className="card-elevated">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">核となる価値観</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start space-x-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>自由:</strong> 束縛されない生き方と表現の追求</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>共感:</strong> 人との深いつながりと相互理解</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>未知探求:</strong> 新しい可能性への挑戦</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>実験精神:</strong> 失敗を恐れない試行錯誤</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 経歴・ストーリー */}
      <section className="section bg-white/50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
            これまでの歩み
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="card hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-700 font-bold">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">職業訓練校通学・生成AI学習（現在）</h3>
                    <p className="text-slate-600 leading-relaxed">
                      2DCAD・3DCADの技術習得と並行して、生成AI活用の独学を継続。
                      ChatGPTを「第二の自分」として育てる独自手法を開発し、AI×自己理解のメソッド化に取り組んでいる。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-stone-700 font-bold">💼</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">会社員＋個人事業主（IT活用サポート）</h3>
                    <p className="text-slate-600 leading-relaxed mb-2">
                      <span className="text-sm text-slate-500">2019年〜2024年末（5年間）</span>
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      会社員として安定収入を確保しながら、個人事業主としてIT活用サポート業務を展開。
                      両立を通じてビジネススキルと技術力を向上させ、幅広いクライアントの課題解決に従事。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-zinc-700 font-bold">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">個人事業主（専業）</h3>
                    <p className="text-slate-600 leading-relaxed mb-2">
                      <span className="text-sm text-slate-500">2014年〜2019年（5年間）</span>
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      独立してフリーランスとして活動開始。IT分野での専門性を活かし、
                      様々なプロジェクトに参画。この期間に培った自立性と実行力が現在の活動の基盤となっている。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-neutral-700 font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">コミュニティ活動・創作活動の展開</h3>
                    <p className="text-slate-600 leading-relaxed">
                      毎週水曜日「ボードゲーム制作会」主催、福岡での国際交流イベント企画、
                      3Dモデリング（Blender）、Vtuber活動（ティキちゃん）など、
                      多岐にわたるクリエイティブ活動を通じて人と人をつなぐ場づくりに注力。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* スキル・専門分野 */}
      <section className="section-alt">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
            スキル・専門分野
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center group">
              <div className="icon-wrapper-lg bg-slate-100 text-slate-700 mx-auto mb-4 group-hover:bg-slate-200 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">AI活用・コーチング</h3>
              <p className="text-slate-600 text-sm">ChatGPT、音声思考整理、自己理解促進</p>
            </div>
            
            <div className="card text-center group">
              <div className="icon-wrapper-lg bg-stone-100 text-stone-700 mx-auto mb-4 group-hover:bg-stone-200 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">CAD・3Dモデリング</h3>
              <p className="text-slate-600 text-sm">2DCAD、3DCAD、Blender、3Dプリンター</p>
            </div>
            
            <div className="card text-center group">
              <div className="icon-wrapper-lg bg-zinc-100 text-zinc-700 mx-auto mb-4 group-hover:bg-zinc-200 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">イベント企画・運営</h3>
              <p className="text-slate-600 text-sm">国際交流、ボードゲーム制作会、勉強会</p>
            </div>
            
            <div className="card text-center group">
              <div className="icon-wrapper-lg bg-neutral-100 text-neutral-700 mx-auto mb-4 group-hover:bg-neutral-200 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">IT活用サポート</h3>
              <p className="text-slate-600 text-sm">業務効率化、システム導入支援、コンサルティング</p>
            </div>
            
            <div className="card text-center group">
              <div className="icon-wrapper-lg bg-gray-100 text-gray-700 mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">コンテンツ制作</h3>
              <p className="text-slate-600 text-sm">Vtuber、動画編集、音楽制作</p>
            </div>
            
            <div className="card text-center group">
              <div className="icon-wrapper-lg bg-slate-200 text-slate-800 mx-auto mb-4 group-hover:bg-slate-300 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">ゲーム・表現活動</h3>
              <p className="text-slate-600 text-sm">ボードゲーム制作、ギター演奏、ヨーヨー</p>
            </div>
          </div>
        </div>
      </section>

      {/* 信念・理念 */}
      <section className="section bg-gradient-primary text-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            信念・理念
          </h2>
          <div className="text-xl opacity-90 leading-relaxed mb-8">
            <p className="mb-6">
              「<strong>やらぬ善よりやる偽善</strong>」
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              完璧を求めて動かないより、不完全でも行動することを選ぶ。<br />
              失敗を恐れず、実験を重ね、人との関わりの中で学び続ける。<br />
              AI×人間の可能性を信じ、一人ひとりの自己理解と成長を支援したい。
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-slate-800 hover:bg-slate-50 font-medium py-3 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl">
              ホームに戻る
            </Link>
            <a 
              href="https://x.com/MasayaToAi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 font-medium py-3 px-8 rounded-xl transition-colors"
            >
              Xで繋がる
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 