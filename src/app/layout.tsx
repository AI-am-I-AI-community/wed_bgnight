"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Metadata } from 'next'
import Navigation from './components/Navigation'
import StructuredData from './components/StructuredData'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Masaya - AI活用サポーター・クリエイター',
    template: '%s | Masaya'
  },
  description: '福岡在住のAI活用サポーター・クリエイター。ChatGPTを「第二の自分」として育てる独自手法を開発。3Dモデリング、国際交流、ボードゲーム制作を通じて、人々の可能性を広げています。',
  keywords: ['AI活用', 'ChatGPT', '第二の自分', '3Dモデリング', '福岡', 'フリーランス', 'ADHD', 'ボードゲーム制作', '国際交流'],
  authors: [{ name: 'Masaya', url: 'https://masayamuko.com' }],
  creator: 'Masaya',
  publisher: 'Masaya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://masayamuko.com'),
  alternates: {
    canonical: 'https://masayamuko.com',
  },
  openGraph: {
    title: 'Masaya - AI活用サポーター・クリエイター',
    description: 'ChatGPTを「第二の自分」として育てる独自手法を開発。福岡でAI活用支援とクリエイティブ活動を展開。',
    url: 'https://masayamuko.com',
    siteName: 'Masaya',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg',
        width: 1200,
        height: 630,
        alt: 'Masaya - AI活用サポーター・クリエイター',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masaya - AI活用サポーター・クリエイター',
    description: 'ChatGPTを「第二の自分」として育てる独自手法を開発。福岡でAI活用支援とクリエイティブ活動を展開。',
    creator: '@MasayaToAi',
    images: ['https://res.cloudinary.com/dg3mdcuju/image/upload/v1751444000/masayatoai.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Console verification (後で設定)
    // google: 'your-google-verification-code',
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
        <StructuredData />
        <GoogleAnalytics />
        <Navigation />
        
        {/* メインコンテンツ */}
        <main className="pt-20">
          {children}
        </main>

        {/* ミニマルフッター */}
        <footer className="section bg-black text-white">
          <div className="container-wide">
            <div className="space-y-16">
              {/* メインフッターコンテンツ */}
              <div className="grid-2col">
                {/* 左: ブランドとメッセージ */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                      Let's create<br />
                      something amazing<br />
                      together.
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                      AI技術とクリエイティビティで、<br />
                      新しい可能性を探求しています。
                    </p>
                  </div>
                  
                  <a 
                    href="https://x.com/MasayaToAi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Get in Touch
                  </a>
                </div>
                
                {/* 右: ナビゲーションリンク */}
                <div className="grid-2col gap-12">
                  <div className="space-y-6">
                    <h4 className="text-sm tracking-wider text-gray-500 uppercase">Navigation</h4>
                    <ul className="space-y-4">
                      <li><Link href="/" className="text-white hover:text-gray-300 transition-colors duration-300">Home</Link></li>
                      <li><Link href="/about" className="text-white hover:text-gray-300 transition-colors duration-300">About</Link></li>
                      <li><Link href="/blog" className="text-white hover:text-gray-300 transition-colors duration-300">Blog</Link></li>
                      <li><Link href="/#works" className="text-white hover:text-gray-300 transition-colors duration-300">WORKS</Link></li>
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-sm tracking-wider text-gray-500 uppercase">Projects</h4>
                    <ul className="space-y-4">
                      <li><Link href="/projects/second-self" className="text-white hover:text-gray-300 transition-colors duration-300">第二の自分</Link></li>
                      <li><Link href="/events/boardgame" className="text-white hover:text-gray-300 transition-colors duration-300">ボードゲーム制作会</Link></li>
                      <li><Link href="/events/ai-study" className="text-white hover:text-gray-300 transition-colors duration-300">AI勉強会</Link></li>
                      <li><Link href="/services/freelance" className="text-white hover:text-gray-300 transition-colors duration-300">フリーランス支援</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* ボトムライン */}
              <div className="border-t border-gray-800 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-6 text-gray-400 text-sm">
                    <span>&copy; 2024 Masaya</span>
                    <span>•</span>
                    <span>Based in Fukuoka, Japan</span>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <a 
                      href="https://x.com/MasayaToAi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 