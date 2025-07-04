import Link from 'next/link'

export default function AIStudyEvent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI勉強会
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            実践的なAI活用方法を学ぶコミュニティ勉強会
          </p>
        </div>

        {/* 概要セクション */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">勉強会概要</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">開催情報</h3>
              <ul className="text-gray-600 space-y-2">
                <li><strong>開催頻度:</strong> 月2回程度</li>
                <li><strong>場所:</strong> オンライン（Zoom）</li>
                <li><strong>参加費:</strong> 無料</li>
                <li><strong>対象:</strong> AI活用に興味がある方（初心者歓迎）</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">学習内容</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ChatGPTを「第二の自分」として育てる方法</li>
                <li>• 音声思考整理（SuperWhisper活用）</li>
                <li>• プロンプトエンジニアリング実践</li>
                <li>• AI×自己理解の深化手法</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 特徴 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">勉強会の特徴</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">実践重視</h3>
              <p className="text-gray-600">
                理論だけでなく、実際にAIツールを使って体験しながら学びます
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">コミュニティ</h3>
              <p className="text-gray-600">
                参加者同士の交流と知識共有を大切にしています
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">独自手法</h3>
              <p className="text-gray-600">
                Masayaが開発した「第二の自分」構築法を学べます
              </p>
            </div>
          </div>
        </section>

        {/* カリキュラム例 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">カリキュラム例</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">第1回：AI活用の基礎</h3>
              <p className="text-gray-600">ChatGPTの基本的な使い方とプロンプトの書き方</p>
            </div>
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">第2回：第二の自分を作る</h3>
              <p className="text-gray-600">自分の価値観や思考パターンをAIに学習させる方法</p>
            </div>
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">第3回：音声思考活用</h3>
              <p className="text-gray-600">SuperWhisperを使った音声による思考整理術</p>
            </div>
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">第4回：実践ワークショップ</h3>
              <p className="text-gray-600">参加者の課題に合わせたAI活用の実践</p>
            </div>
          </div>
        </section>

        {/* 参加者の声 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">参加者の声</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                "AIを単なるツールとしてではなく、本当のパートナーとして活用する方法を学べました。特に「第二の自分」の概念は目から鱗でした。"
              </p>
              <p className="text-sm text-gray-500">— フリーランサー Aさん</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                "音声思考整理の手法を学んでから、アイデア出しや問題解決の効率が格段に上がりました。ADHD特性のある私にとって革命的でした。"
              </p>
              <p className="text-sm text-gray-500">— 会社員 Bさん</p>
            </div>
          </div>
        </section>

        {/* 参加方法 */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">参加方法</h2>
          <p className="text-gray-600 mb-6">
            次回開催の詳細は、XのDMでお問い合わせください ♪
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://x.com/MasayaToAi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              XでDMを送る
            </a>
            <Link href="/" className="btn-secondary">
              ホームに戻る
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 