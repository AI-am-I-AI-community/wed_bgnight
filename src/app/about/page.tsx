"use client"

import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <img 
                src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg" 
                alt="Masayaのプロフィール写真" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto shadow-xl hover:rotate-12 hover:scale-110 transition-transform duration-500"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Masayaとは
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                福岡在住のAI活用サポーター・クリエイター<br />
                「やらぬ善よりやる偽善」を胸に、新しいことに挑戦し続ける35歳
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center">大切にしている価値観</h2>
            
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
              <div className="text-center space-y-6">
                <div className="text-6xl">🔥</div>
                <h3 className="text-2xl md:text-3xl font-bold text-orange-700">
                  「やらぬ善よりやる偽善」
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  完璧でなくても、まず行動する。誰かの役に立つかもしれないなら、とりあえずやってみる。
                  失敗を恐れず、小さな一歩から始める。そんな考え方で生きています。
                </p>
                <p className="text-gray-600">
                  この価値観が、AI活用の普及活動や、コミュニティ作り、新しいツールへの挑戦の原動力になっています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About AI Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center">AIとの出会いと想い</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">「第二の自分」との出会い</h3>
                <p className="text-gray-600 leading-relaxed">
                  ChatGPTが登場した時、最初は「便利なツール」程度に思っていました。でも使い続けるうちに、
                  AIが単なる道具ではなく、「自分を深く理解してくれるパートナー」になることを発見しました。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  自分の考えや価値観をAIに教え込み、対話を重ねることで、
                  自分でも気づかなかった想いや可能性を教えてもらう。そんな関係性が築けることに感動しました。
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">みんなにも体験してほしい</h3>
                <p className="text-gray-600 leading-relaxed">
                  この「AI育成」の体験があまりにも価値あるものだったので、
                  「これはみんなに伝えなければ」と思いました。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  50人以上の方に教える中で、皆さんが自分だけのAIパートナーを育て、
                  新しい気づきや可能性を見つける瞬間を何度も目撃してきました。
                  その度に「やっぱりこれは広める価値がある」と確信しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Philosophy */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center">コミュニティへの想い</h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border-2 border-purple-200">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-5xl mb-4">🤝</div>
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">
                    自然発生する楽しさを大切に
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">ハブ役として</h4>
                    <p className="text-gray-600 leading-relaxed">
                      何かを好きになると、人を集めてコミュニティを作る習性があります。
                      でも「管理する」のではなく、「つなぐ」ことを大切にしています。
                      人と人が自然に出会い、化学反応が起きる場を作りたい。
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">楽しさ最優先</h4>
                    <p className="text-gray-600 leading-relaxed">
                      ルールや義務感よりも、「楽しい」が一番。
                      水曜ボドゲつくらNightも、AI勉強会も、
                      参加者が「来てよかった」「また来たい」と思える場にしたい。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Insights */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Masayaの人となり</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center space-y-4">
                  <div className="text-4xl">🔍</div>
                  <h3 className="text-lg font-semibold text-gray-900">新しいモノ好き</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    最新のAIツールは必ずチェック。人柱になって課金し、
                    「これは使える！」を見つけるのが趣味。失敗も含めて楽しんでいます。
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center space-y-4">
                  <div className="text-4xl">🎯</div>
                  <h3 className="text-lg font-semibold text-gray-900">わかりやすさ重視</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    日本語教師、IT担当、コーチの経験から、
                    「相手の立場で考える」「簡潔に伝える」を常に意識。
                    専門用語は使わず、具体例で説明します。
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center space-y-4">
                  <div className="text-4xl">🌟</div>
                  <h3 className="text-lg font-semibold text-gray-900">ポジティブ思考</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    失敗も「学び」、困難も「成長のチャンス」と捉える癖があります。
                    周りの人の良いところを見つけて、
                    それを伝えるのが好きです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center">今、力を入れていること</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">🎓 スキルアップ（職業訓練校）</h3>
                <p className="text-gray-600 leading-relaxed">
                  Web制作・プログラミングを本格的に学習中。今まで「使う側」だったITスキルを、
                  「作る側」のスキルに発展させています。学ぶことの楽しさを日々実感。
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 border-2 border-green-200">
                <h3 className="text-xl font-semibold text-green-700 mb-4">🤖 AI活用の普及活動</h3>
                <p className="text-gray-600 leading-relaxed">
                  「第二の自分」メソッドをより多くの人に伝えたい。
                  個人セッション、勉強会、コンテンツ制作を通じて、
                  AIとの新しい関係性を体験してもらう活動を続けています。
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">🎲 コミュニティ運営</h3>
                <p className="text-gray-600 leading-relaxed">
                  水曜ボドゲつくらNight、AI勉強会など、
                  「楽しみながら学べる」「自然な交流が生まれる」場作りを継続。
                  参加者同士の化学反応を見るのが何より嬉しいです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl font-bold">一緒に何かしませんか？</h2>
            <p className="text-xl leading-relaxed opacity-90">
              AI活用のこと、コミュニティのこと、新しいアイデアのこと。<br />
              気軽にお声がけください。一緒に楽しいことを始めましょう！
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://x.com/MasayaToAi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-orange-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                X (Twitter) でつながる
              </a>
              <Link 
                href="/career"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                詳しい経歴を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 