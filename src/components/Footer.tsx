'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 关于我们 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">关于我们</h3>
            <p className="mb-4">
              我们致力于为开发者提供优质的技术内容、学习资源和交流平台。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-weixin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-weibo text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-white transition-colors" href="/articles">技术文章</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/tutorials">视频教程</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/jobs">接单专区</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/about">关于我们</a>
              </li>
            </ul>
          </div>

          {/* 帮助中心 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">帮助中心</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-white transition-colors" href="/faq">常见问题</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/contact">联系我们</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/terms">服务条款</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/privacy">隐私政策</a>
              </li>
            </ul>
          </div>

          {/* 订阅我们 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">订阅我们</h3>
            <p className="mb-4">
              订阅我们的邮件，获取最新的技术文章和教程更新。
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-button focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-r-button hover:bg-blue-600 transition-colors"
              >
                订阅
              </button>
            </form>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>
            © 2024 技术博客. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 