'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: '仪表盘', path: '/admin', icon: 'fas fa-chart-line' },
  { name: '用户管理', path: '/admin/users', icon: 'fas fa-users' },
  { name: '文章管理', path: '/admin/articles', icon: 'fas fa-file-alt' },
  { name: '评论管理', path: '/admin/comments', icon: 'fas fa-comments' },
  { name: '系统设置', path: '/admin/settings', icon: 'fas fa-cog' },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 侧边栏 */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <h1 className="text-xl font-bold text-gray-800">后台管理</h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    pathname === item.path
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <i className={`${item.icon} mr-3`}></i>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* 主内容区 */}
      <div
        className={`flex flex-col min-h-screen transition-all duration-200 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        {/* 顶部导航栏 */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 cursor-pointer">
                <img
                  src="https://ai-public.mastergo.com/ai/img_res/a679a3d0d95f5ae75ba9242f7aab833f.jpg"
                  alt="管理员"
                  className="w-8 h-8 rounded-full"
                />
                <span>管理员</span>
                <i className="fas fa-chevron-down ml-1 group-hover:transform group-hover:rotate-180 transition-transform"></i>
              </div>
              
              {/* 用户菜单下拉框 */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <i className="fas fa-user mr-2"></i>个人中心
                </Link>
                <Link
                  href="/admin"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <i className="fas fa-cog mr-2"></i>后台管理
                </Link>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  onClick={() => {
                    // TODO: 处理退出登录
                    console.log('退出登录')
                  }}
                >
                  <i className="fas fa-sign-out-alt mr-2"></i>退出登录
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* 页面内容 */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
} 