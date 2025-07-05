import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ブログ記事
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ライフハック、国際交流、カメラ、技術など、様々なテーマで書いた記事を公開しています。
          </p>
        </div>

        {/* 記事一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* カテゴリバッジ */}
              <div className="p-6 pb-0">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {post.category}
                </span>
              </div>

              {/* 記事内容 */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="text-gray-500 text-xs">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* メタ情報 */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
                    <span>{post.readingTime}分で読める</span>
                  </div>
                  {post.featured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                      おすすめ
                    </span>
                  )}
                </div>
              </div>

              {/* リンクボタン */}
              <div className="px-6 pb-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  記事を読む
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* 記事が見つからない場合 */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              記事が見つかりませんでした。
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
