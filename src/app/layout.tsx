import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '博客系统',
  description: '一个现代化的博客系统',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600">
          {children}
        </main>
      </body>
    </html>
  )
}
