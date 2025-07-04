import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Masaya - AI活用サポーター・クリエイター',
  description: '福岡在住のAI活用サポーター・クリエイター。ChatGPTを「第二の自分」として育てる独自手法を開発。3Dモデリング、国際交流、ボードゲーム制作を通じて、人々の可能性を広げています。',
  keywords: 'AI活用, ChatGPT, 第二の自分, 3Dモデリング, 福岡, フリーランス, ADHD, ボードゲーム制作, 国際交流',
  authors: [{ name: 'Masaya' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Masaya - AI活用サポーター・クリエイター',
    description: 'ChatGPTを「第二の自分」として育てる独自手法を開発。福岡でAI活用支援とクリエイティブ活動を展開。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {/* ナビゲーションバー */}
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
          <div className="container-custom">
            <div className="flex items-center justify-between h-16">
              {/* ロゴ */}
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="font-semibold text-gray-900 hidden sm:block">Masaya</span>
              </Link>
              
              {/* デスクトップナビゲーション */}
              <div className="hidden md:flex items-center space-x-1">
                <Link href="/" className="nav-link">ホーム</Link>
                <Link href="/about" className="nav-link">プロフィール</Link>
                <Link href="/blog" className="nav-link">ブログ</Link>
                <Link href="/portfolio" className="nav-link">ポートフォリオ</Link>
                <a 
                  href="https://x.com/MasayaToAi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary ml-4"
                >
                  お問い合わせ
                </a>
              </div>
              
              {/* モバイルメニューボタン */}
              <div className="md:hidden">
                <a 
                  href="https://x.com/MasayaToAi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm px-4 py-2"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* メインコンテンツ */}
        <main className="pt-16">
          {children}
        </main>

        {/* フッター */}
        <footer className="bg-gray-900 text-white">
          <div className="container-custom section">
            <div className="grid md:grid-cols-4 gap-8">
              {/* ブランド */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <span className="font-semibold text-xl">Masaya</span>
                </div>
                <p className="text-gray-400 max-w-md leading-relaxed">
                  福岡在住のAI活用サポーター・クリエイター。<br />
                  「やらぬ善よりやる偽善」を信念に、人々の可能性を広げています。
                </p>
              </div>
              
              {/* リンク */}
              <div>
                <h3 className="font-semibold mb-4">プロジェクト</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/projects/second-self" className="hover:text-white transition-colors">第二の自分</Link></li>
                  <li><Link href="/events/boardgame" className="hover:text-white transition-colors">ボードゲーム制作会</Link></li>
                  <li><Link href="/events/ai-study" className="hover:text-white transition-colors">AI勉強会</Link></li>
                  <li><Link href="/vtuber" className="hover:text-white transition-colors">Vtuber活動</Link></li>
                </ul>
              </div>
              
              {/* コンタクト */}
              <div>
                <h3 className="font-semibold mb-4">コンタクト</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a 
                      href="https://x.com/MasayaToAi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      <span>@MasayaToAi</span>
                    </a>
                  </li>
                  <li className="text-gray-500">福岡市在住</li>
                </ul>
              </div>
            </div>
            
            <div className="divider opacity-20"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>&copy; 2024 Masaya. All rights reserved.</p>
              <p className="mt-2 md:mt-0">Made with ♪ in Fukuoka</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 