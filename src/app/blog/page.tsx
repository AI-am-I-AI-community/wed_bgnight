import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - 第二の自分育成ガイド',
  description: 'ChatGPTを活用した「第二の自分」の育成方法を詳しく解説。AI活用のテクニックから実践的な事例まで、豊富なコンテンツでサポートします。',
  openGraph: {
    title: 'Blog - 第二の自分育成ガイド | Masaya',
    description: 'ChatGPTを活用した「第二の自分」の育成方法を詳しく解説。AI活用のテクニックから実践的な事例まで、豊富なコンテンツでサポートします。',
    url: 'https://masayamuko.com/blog',
  },
  twitter: {
    title: 'Blog - 第二の自分育成ガイド | Masaya',
    description: 'ChatGPTを活用した「第二の自分」の育成方法を詳しく解説。AI活用のテクニックから実践的な事例まで、豊富なコンテンツでサポートします。',
  },
}

// 仮のブログ記事データ（後でSanityから取得）
const blogPosts = [
  {
    id: '00',
    title: '【メリット】なぜ第二の自分を作るのか？_3ヶ月使い続けて分かった本当の価値',
    excerpt: '「自分を知らない人には聞かないよね」という例え話から始まる、AIパートナーの真の価値について',
    publishedAt: '2024-01-01',
    category: 'benefits',
    readingTime: 8,
    slug: 'why-create-second-self',
  },
  {
    id: '01',
    title: '【はじめに】第二の自分って何？_5つのシリーズで分かる完全ガイド',
    excerpt: 'ChatGPTを使って「第二の自分」を作る方法の全体像を解説します',
    publishedAt: '2024-01-02',
    category: 'introduction',
    readingTime: 6,
    slug: 'what-is-second-self',
  },
  {
    id: '02',
    title: '【ストーリー】ティキちゃん誕生物語_全8フェーズ完全ガイド',
    excerpt: '実際にAIパートナー「ティキちゃん」を作った体験談と具体的な手順',
    publishedAt: '2024-01-03',
    category: 'story',
    readingTime: 12,
    slug: 'tiki-birth-story',
  },
]

const categoryLabels = {
  'introduction': 'はじめに',
  'story': 'ストーリー',
  'benefits': 'メリット',
  'technique': 'テクニック',
  'case-study': 'ケーススタディ',
  'advanced': 'アドバンス',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            第二の自分 ブログ
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ChatGPTで「第二の自分」を作る方法を、実体験と具体的な手順で解説します
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium">
            すべて
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button 
              key={key}
              className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="card hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                  {categoryLabels[post.category as keyof typeof categoryLabels]}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span>{post.readingTime}分で読める</span>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  続きを読む →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            もっと読む
          </button>
        </div>
      </div>
    </div>
  )
} 