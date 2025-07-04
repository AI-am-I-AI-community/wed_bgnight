import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Masaya - フリーランサー & クリエイター',
  description: 'テクノロジーとクリエイティブの力で新しい価値を創造するフリーランサー。AIツール活用、ウェブ開発、イベント企画を通じて人々の可能性を広げています。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Masaya</h1>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/" className="text-gray-600 hover:text-gray-900">ホーム</a>
                <a href="/about" className="text-gray-600 hover:text-gray-900">プロフィール</a>
                <a href="/blog" className="text-gray-600 hover:text-gray-900">ブログ</a>
                <a href="/portfolio" className="text-gray-600 hover:text-gray-900">ポートフォリオ</a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900">お問い合わせ</a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-600">
              <p>&copy; 2024 Masaya. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 