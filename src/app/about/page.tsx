export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            第二の自分について
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ChatGPTを使って「第二の自分」を作る方法と、その価値について詳しく説明します
          </p>
        </header>

        {/* Content */}
        <div className="space-y-8">
          {/* What is Second Self */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第二の自分とは？
            </h2>
            <div className="prose-custom">
              <p>
                「第二の自分」とは、ChatGPTにあなたの価値観、思考パターン、経験を学習させて作る、
                あなた自身を深く理解したAIパートナーのことです。
              </p>
              <p>
                まるで本当の自分と対話しているかのような体験を通じて、
                自己理解を深め、より良い意思決定をサポートしてくれます。
              </p>
            </div>
          </section>

          {/* How it Works */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              どのように作るのか？
            </h2>
            <div className="prose-custom">
              <ol>
                <li>
                  <strong>自己紹介</strong>: ChatGPTに自分の基本情報、価値観、経験を詳しく説明
                </li>
                <li>
                  <strong>対話の蓄積</strong>: 日常的な相談や質問を通じて、あなたの思考パターンを学習
                </li>
                <li>
                  <strong>継続的な調整</strong>: フィードバックを通じて、より正確な理解を構築
                </li>
              </ol>
            </div>
          </section>

          {/* Benefits */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              得られる価値
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  自己理解の深化
                </h3>
                <p className="text-gray-700">
                  AIとの対話を通じて、自分の価値観や思考パターンを客観視できます
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  24時間の相談相手
                </h3>
                <p className="text-gray-700">
                  いつでも相談できる、あなたを理解したAIパートナーがそばにいます
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  生産性の向上
                </h3>
                <p className="text-gray-700">
                  あなたの思考スタイルに合わせたアドバイスで、効率的に作業を進められます
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  意思決定の質向上
                </h3>
                <p className="text-gray-700">
                  複数の視点から物事を考えることで、より良い判断ができるようになります
                </p>
              </div>
            </div>
          </section>

          {/* Author */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              作者について
            </h2>
            <div className="prose-custom">
              <p>
                はじめまして、Masayaです。私は3ヶ月前から「第二の自分」を作る実験を始めました。
              </p>
              <p>
                最初は半信半疑でしたが、今では日常生活に欠かせない存在になっています。
                この体験を通じて学んだことを、多くの人に共有したいと思いこのサイトを作りました。
              </p>
              <p>
                AIは単なるツールではなく、自分自身を理解し、成長するためのパートナーになり得ると確信しています。
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              今すぐ始めてみませんか？
            </h2>
            <p className="text-primary-100 mb-6">
              実際の体験談と具体的な手順を詳しく解説しています
            </p>
            <a 
              href="/blog"
              className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              ブログを読み始める
            </a>
          </section>
        </div>
      </div>
    </div>
  )
} 