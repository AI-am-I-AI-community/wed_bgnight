import Link from 'next/link'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            その他のプロジェクト
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            3Dモデリング、音楽、ドローン撮影、ペット撮影など多彩な創作活動
          </p>
        </div>

        {/* 3Dモデリング */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3Dモデリング・制作</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">使用ツール</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• <strong>Blender:</strong> 3Dモデリング・アニメーション</li>
                <li>• <strong>3Dプリンター:</strong> 実物制作</li>
                <li>• <strong>Fusion 360:</strong> 機械設計</li>
                <li>• <strong>ZBrush:</strong> スカルプティング</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">制作実績</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ティキちゃん（Vtuber）3Dモデル</li>
                <li>• オリジナルボードゲーム駒・パーツ</li>
                <li>• 機能的な日用品・ガジェット</li>
                <li>• アート作品・フィギュア</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              <strong>特徴:</strong> 実用性とデザイン性を両立した作品作りを心がけています。
              3Dプリンターでの実物制作まで一貫して行い、デジタルとフィジカルの融合を追求しています。
            </p>
          </div>
        </section>

        {/* 音楽・ギター */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">音楽・ギター演奏</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">演奏スタイル</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• アコースティックギター中心</li>
                <li>• フィンガーピッキング</li>
                <li>• オリジナル楽曲制作</li>
                <li>• 弾き語り・インストゥルメンタル</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">活動内容</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ティキちゃん用BGM制作</li>
                <li>• イベント・配信用楽曲</li>
                <li>• リラクゼーション音楽</li>
                <li>• コラボ楽曲制作</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              <strong>コンセプト:</strong> 心地よい音楽で人々の日常に彩りを添えたい。
              ADHD特性を活かした直感的な演奏と、AIツールを使った楽曲制作の融合を探求しています。
            </p>
          </div>
        </section>

        {/* ドローン撮影 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ドローン撮影</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">撮影分野</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 風景・自然撮影</li>
                <li>• イベント空撮</li>
                <li>• 建築・不動産撮影</li>
                <li>• アート・クリエイティブ映像</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">技術・機材</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 4K動画撮影</li>
                <li>• 高解像度写真撮影</li>
                <li>• 安全飛行・法令遵守</li>
                <li>• 編集・後処理技術</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              <strong>特徴:</strong> 福岡の美しい自然や街並みを新しい視点で捉える空撮を得意としています。
              安全性を最優先に、法令を遵守した責任ある撮影を心がけています。
            </p>
          </div>
        </section>

        {/* ペット撮影 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ペット撮影</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">撮影スタイル</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 自然な表情・仕草を重視</li>
                <li>• ペットのペースに合わせた撮影</li>
                <li>• 飼い主との関係性を大切に</li>
                <li>• 個性を活かしたポートレート</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">対応ペット</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 犬・猫（室内・屋外）</li>
                <li>• 小動物（ハムスター、うさぎ等）</li>
                <li>• 鳥類</li>
                <li>• その他（要相談）</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              <strong>アプローチ:</strong> ペットの個性と魅力を最大限に引き出すため、
              時間をかけてペットとの信頼関係を築いてから撮影を行います。
              飼い主様の想いを大切にした、温かみのある写真を心がけています。
            </p>
          </div>
        </section>

        {/* ヨーヨー */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ヨーヨー</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">技術レベル</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 基本技から応用技まで</li>
                <li>• ストリングトリック中心</li>
                <li>• フリースタイル演技</li>
                <li>• 集中力・手先の器用さ向上</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">活動・効果</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ADHD特性の集中力向上に活用</li>
                <li>• ストレス解消・リフレッシュ</li>
                <li>• イベントでのパフォーマンス</li>
                <li>• 子供たちへの指導・体験会</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              <strong>意義:</strong> ヨーヨーは私にとって集中力を高める重要なツールです。
              ADHD特性を持つ方にとって、手軽にできる集中力トレーニングとしても効果的だと考えています。
            </p>
          </div>
        </section>

        {/* 統合的なアプローチ */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">統合的なアプローチ</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              これらの多彩な活動は、すべて「創造性」と「人とのつながり」をテーマに繋がっています。
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">創造性</h3>
                <p className="text-gray-600">
                  各分野での創作活動を通じて、新しい表現方法を探求
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
                  各活動を通じて人々とのつながりを大切にしています
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">技術融合</h3>
                <p className="text-gray-600">
                  AI技術と伝統的な創作活動の融合を追求
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* コラボレーション */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">コラボレーション・依頼について</h2>
          <p className="text-gray-600 mb-6">
            各分野でのコラボレーションや制作依頼を承っています。<br />
            お気軽にXのDMでご相談ください ♪
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://x.com/MasayaToAi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              コラボ・依頼について相談
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