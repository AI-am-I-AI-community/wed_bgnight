import Link from 'next/link'

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              活用中ツール&試したもの
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              最新AIツール情報を追い続け、積極的に課金して人柱になっています。<br />
              常に自分 or誰かにぴったりのAI・ITツールを探求！
            </p>
          </div>
        </div>
      </section>

      {/* Active Tools Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">現在活用中のツール</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ChatGPT Plus</h3>
              <p className="text-gray-600 mb-4">
                「第二の自分」として育成。音声思考整理、コーチング、アイデア発想の相棒
              </p>
              <div className="flex items-center text-sm text-blue-600">
                <span className="bg-blue-100 px-2 py-1 rounded">メインツール</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Claude</h3>
              <p className="text-gray-600 mb-4">
                長文分析、構造化思考、プログラミング支援で活用
              </p>
              <div className="flex items-center text-sm text-green-600">
                <span className="bg-green-100 px-2 py-1 rounded">サブメイン</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">NotebookLM</h3>
              <p className="text-gray-600 mb-4">
                情報整理、研究ノート管理、アイデア体系化に使用
              </p>
              <div className="flex items-center text-sm text-purple-600">
                <span className="bg-purple-100 px-2 py-1 rounded">情報整理</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cursor</h3>
              <p className="text-gray-600 mb-4">
                AI支援プログラミング、コード生成、開発効率化
              </p>
              <div className="flex items-center text-sm text-orange-600">
                <span className="bg-orange-100 px-2 py-1 rounded">開発</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SuperWhisper</h3>
              <p className="text-gray-600 mb-4">
                音声入力、思考の言語化、アイデアキャプチャツール
              </p>
              <div className="flex items-center text-sm text-red-600">
                <span className="bg-red-100 px-2 py-1 rounded">音声入力</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Obsidian</h3>
              <p className="text-gray-600 mb-4">
                ナレッジベース構築、第二脳として情報ネットワーク管理
              </p>
              <div className="flex items-center text-sm text-indigo-600">
                <span className="bg-indigo-100 px-2 py-1 rounded">ナレッジ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tried Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">試したツール（人柱レポート）</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">❌ 断念したもの</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Notion AI:</strong> 日本語対応が微妙、UIが重い</li>
                <li>• <strong>Gamma:</strong> プレゼン生成は良いが用途限定的</li>
                <li>• <strong>Midjourney:</strong> 画像生成の必要性が低かった</li>
                <li>• <strong>GitHub Copilot:</strong> Cursorに移行</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🔄 検討中・様子見</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Perplexity Pro:</strong> 検索特化、ChatGPTと使い分け検討</li>
                <li>• <strong>Gemini Advanced:</strong> Googleエコシステム連携に期待</li>
                <li>• <strong>Anthropic API:</strong> 大量処理用途で検討中</li>
                <li>• <strong>Replit:</strong> Web開発環境として評価中</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">人柱哲学</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              「新しいツールは、自分が試さないと誰かの損失になるかもしれない」<br />
              そんな気持ちで、積極的に課金して試行錯誤しています。<br />
              失敗も含めて、リアルな体験をシェアするのが使命だと思っています。
            </p>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12">
        <div className="container-custom text-center">
          <Link href="/" className="btn btn-primary">
            ホームに戻る
          </Link>
        </div>
      </section>
    </div>
  )
} 