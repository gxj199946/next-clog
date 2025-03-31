'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/hooks/useAuth'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Navbar() {
  const { isAuthenticated, getUser, logout } = useAuth()
  const user = getUser()
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: '首页' },
    { href: '/articles', label: '文章' },
    { href: '/tutorials', label: '教程' },
    { href: '/jobs', label: '接单专区' },
    { href: '/about', label: '关于我们' },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-['Pacifico'] text-primary mr-12">技术派</Link>
            <nav className="hidden md:flex space-x-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    'text-gray-800 hover:text-primary transition-colors relative py-2',
                    isActive(href) && 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索..."
                className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-button focus:outline-none focus:border-primary transition-colors"
              />
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
            {isAuthenticated() ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/profile"
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                >
                  <Image
                    src={user?.avatar || 'https://ui-avatars.com/api/?name=User&background=random'}
                    alt="用户头像"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-gray-700">{user?.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="px-6 py-2 border border-primary text-primary rounded-button hover:bg-blue-50 transition-colors whitespace-nowrap"
                >
                  退出
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="px-6 py-2 bg-primary text-white rounded-button hover:bg-blue-600 transition-colors whitespace-nowrap"
                >
                  登录
                </Link>
                <Link
                  href="/auth/register"
                  className="px-6 py-2 border border-primary text-primary rounded-button hover:bg-blue-50 transition-colors whitespace-nowrap"
                >
                  注册
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 