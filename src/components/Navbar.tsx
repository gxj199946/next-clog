'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Navbar() {
  const { isAuthenticated, user, showLoginModal, logout } = useAuth()
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
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-1">
                  <img
                    src={user?.avatar || '/default-avatar.png'}
                    alt="用户头像"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="text-gray-700">{user?.name}</span>
                </button>
                <div className="absolute right-0 top-full mt-1 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      个人中心
                    </Link>
                    <Link
                      href="/admin"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      后台管理
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      退出登录
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={showLoginModal}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                登录
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 