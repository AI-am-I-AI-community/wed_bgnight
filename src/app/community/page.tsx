import Link from 'next/link'

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Masayaとコミュニティー
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              何かを好きになると人を集めコミュニティーを作る習性があります。<br />
              人と人のハブ役。今はボドゲとAI活用の会してます。
            </p>
          </div>
        </div>
      </section>

      {/* Current Communities */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">現在活動中のコミュニティー</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎲</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">水曜ボドゲつくらNight</h3>
                <p className="text-purple-600 font-medium">毎週水曜 19:00-21:00</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  ボードゲーム制作を通じてクリエイティブな仲間が集まるコミュニティ。
                  プロトタイプ作成からテストプレイまで、ゲーム作りの全工程を楽しく学べます。
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">活動内容</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• ゲームアイデア発想・ブラッシュアップ</li>
                    <li>• プロトタイプ制作ワークショップ</li>
                    <li>• 作品のテストプレイ・フィードバック</li>
                    <li>• ゲーム制作に関する情報共有</li>
                  </ul>
                </div>

                <div className="text-center">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    参加者募集中
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">AI am I オフライン会</h3>
                <p className="text-blue-600 font-medium">月1回 土曜日開催</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  AI活用を学び合い、「第二の自分」を育てる仲間が集まるコミュニティ。
                  実践的なAI活用法から哲学的な話題まで幅広く議論しています。
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">活動内容</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 「第二の自分」育成ワークショップ</li>
                    <li>• 最新AIツール体験・レビュー</li>
                    <li>• AI活用事例シェア・ディスカッション</li>
                    <li>• AIと人間の関係性について深掘り</li>
                  </ul>
                </div>

                <div className="text-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    次回開催準備中
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">コミュニティ作りの哲学</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">自然発生を大切に</h3>
                <p className="text-gray-600">
                  強制せず、本当に好きな人が自然と集まる環境を作ることを心がけています。
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">ハブとしての役割</h3>
                <p className="text-gray-600">
                  人と人をつなぎ、新しい化学反応が生まれる場作りを目指しています。
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">楽しさを最優先</h3>
                <p className="text-gray-600">
                  何よりも楽しく続けられることを重視。義務感ではなく、ワクワクを共有します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Communities */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">過去に立ち上げたコミュニティー</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">福岡ブロガー会</h3>
              <p className="text-gray-600 mb-3">
                福岡でブログを書く人たちが集まり、情報交換や相互支援を行うコミュニティでした。
                月1回の定期会合で多くのブロガーとの出会いがありました。
              </p>
              <span className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded">
                2018-2020年活動
              </span>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">国際交流イベント</h3>
              <p className="text-gray-600 mb-3">
                福岡に住む外国人と日本人の交流を促進するイベントを定期開催。
                言語交換から文化体験まで様々な企画を実施しました。
              </p>
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                2017-2019年活動
              </span>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ゲストハウス研究会</h3>
              <p className="text-gray-600 mb-3">
                ゲストハウス経営に興味がある人たちと情報交換・視察ツアーを企画。
                実際に開業した人も出てきて嬉しい思い出です。
              </p>
              <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded">
                2019-2020年活動
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">一緒に楽しみませんか？</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            新しいコミュニティへの参加や、一緒に何か始めたいアイデアがあれば<br />
            お気軽にお声がけください！
          </p>
          <Link href="/" className="btn btn-primary mr-4">
            ホームに戻る
          </Link>
          <Link href="/about" className="btn btn-secondary">
            Masayaについて詳しく
          </Link>
        </div>
      </section>
    </div>
  )
} 