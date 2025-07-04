import Link from 'next/link'

export default function BoardgameEvent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ボードゲーム制作会
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            毎週水曜日開催のボードゲーム制作コミュニティイベント
          </p>
        </div>

        {/* 概要セクション */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">イベント概要</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">開催情報</h3>
              <ul className="text-gray-600 space-y-2">
                <li><strong>開催日時:</strong> 毎週水曜日 19:00-21:00</li>
                <li><strong>場所:</strong> 福岡市内（詳細はDMで）</li>
                <li><strong>参加費:</strong> 無料</li>
                <li><strong>対象:</strong> ボードゲーム制作に興味がある方</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">活動内容</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• オリジナルボードゲームの企画・制作</li>
                <li>• プロトタイプのテストプレイ</li>
                <li>• ルール調整・バランス検討</li>
                <li>• 国際交流要素を取り入れたゲーム開発</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 現在のプロジェクト */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">現在のプロジェクト</h2>
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">「盤上テト」</h3>
            <p className="text-gray-600 mb-4">
              多文化交流をテーマにしたボードゲーム。プレイヤーが異なる文化背景を持つキャラクターとなり、
              協力しながら共通の目標を達成するゲームです。
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600">
                <strong>進捗:</strong> プロトタイプv3完成、次回テスト会予定
              </p>
            </div>
          </div>
        </section>

        {/* 参加方法 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">参加方法</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              初心者大歓迎！ボードゲーム制作経験がなくても、アイデアや熱意があれば十分です。
            </p>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">参加までの流れ</h3>
              <ol className="list-decimal list-inside text-primary-800 space-y-2">
                <li>TwitterのDMでお気軽にご連絡ください</li>
                <li>簡単な自己紹介と参加動機をお聞かせください</li>
                <li>開催場所の詳細をお伝えします</li>
                <li>当日、みんなでゲーム制作を楽しみましょう！</li>
              </ol>
            </div>
          </div>
        </section>

        {/* コンタクト */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
          <p className="text-gray-600 mb-6">
            ご質問や参加希望は、お気軽にXのDMでご連絡ください ♪
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