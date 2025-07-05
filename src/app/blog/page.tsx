"use client"

import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 統一感のあるデザイン */}
      <section className="min-h-screen relative bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1751644296/AI-Powered_Journey_Image_k7nfzy.png')"
      }}>
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-16">
            {/* Main Title */}
            <div className="space-y-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
                <span className="block">ブログ記事</span>
                <span className="hidden md:block mt-6">様々なテーマで発信</span>
                <span className="block md:hidden mt-4">様々なテーマで</span>
                <span className="block md:hidden mt-2 ml-8">発信</span>
              </h1>
              <div className="w-32 h-1 bg-black mx-auto drop-shadow-sm"></div>
            </div>
            
            {/* Subtext */}
            <div className="max-w-2xl animate-fade-in">
              <p className="text-2xl md:text-3xl text-balance leading-relaxed text-black drop-shadow-md">
                ライフハック、国際交流、カメラ、技術など、様々なテーマで書いた記事を公開しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section - 統一感のあるデザイン */}
      <section className="section-alt">
        <div className="container-custom">
          <div className="space-y-20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">記事一覧</h2>
              <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>
            
            {/* 記事一覧 */}
            <div className="grid-3col gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* カテゴリバッジ */}
                  <div className="p-6 pb-0">
                    <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-blue-600 transition-colors duration-300">
                      {post.category}
                    </span>
                  </div>

                  {/* 記事内容 */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                      {post.excerpt}
                    </p>

                    {/* タグ */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs group-hover:bg-gray-200 transition-colors duration-300"
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
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
                        <span>{post.readingTime}分で読める</span>
                      </div>
                      {post.featured && (
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-semibold group-hover:bg-yellow-600 transition-colors duration-300">
                          おすすめ
                        </span>
                      )}
                    </div>

                    {/* リンクボタン */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group/btn inline-block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <span className="flex items-center justify-center gap-2">
                        記事を読む
                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* 記事が見つからない場合 */}
            {posts.length === 0 && (
              <div className="text-center py-12">
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-4xl">📝</span>
                  </div>
                  <p className="text-gray-600 text-lg">
                    記事が見つかりませんでした。
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Back to Home Section - 統一感のあるデザイン */}
      <section className="section">
        <div className="container-narrow text-center">
          <div className="space-y-8">
            <Link href="/" className="group btn btn-primary text-lg px-8 py-4 relative overflow-hidden">
              <span className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                ホームに戻る
                <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
