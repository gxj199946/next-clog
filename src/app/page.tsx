'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="pt-16 flex-grow">
        <section className="hero-bg pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-white">
              <h2 className="text-5xl font-bold mb-6">分享技术，连接未来</h2>
              <p className="text-xl mb-8 opacity-90">
                在这里，与千万开发者一起成长。分享你的技术见解，获取最新行业动态，找到志同道合的伙伴。
              </p>
              <Link
                href="/write"
                className="inline-block px-8 py-3 bg-primary text-white rounded-button text-lg hover:bg-blue-600 transition-colors whitespace-nowrap"
              >
                开始写作
              </Link>
              
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold mb-12 text-center">精选内容</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="article-card bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="https://ai-public.mastergo.com/ai/img_res/ee8da9d49c241e621ab6244d88cc9891.jpg"
                  alt="文章封面"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="https://ai-public.mastergo.com/ai/img_res/8cce18c9b4b2d919bd0dc6e15c6b1cd5.jpg"
                      alt="作者头像"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-medium">陈志远</h4>
                      <p className="text-sm text-gray-500">前端开发工程师</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    Vue 3 组合式 API 最佳实践指南
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    深入探讨 Vue 3 组合式 API 的使用技巧，包括响应式系统、生命周期钩子、依赖注入等核心概念的最佳实践方案。
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>2024-01-15</span>
                    <div className="flex items-center space-x-4">
                      <span><i className="far fa-eye mr-1"></i>2,356</span>
                      <span><i className="far fa-heart mr-1"></i>189</span>
                      <span><i className="far fa-comment mr-1"></i>45</span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="article-card bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="https://ai-public.mastergo.com/ai/img_res/5088ec613629d8703f9ca63c8fb9a475.jpg"
                  alt="文章封面"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="https://ai-public.mastergo.com/ai/img_res/1ccd3a0475619eb4d46ef09ed708d375.jpg"
                      alt="作者头像"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-medium">林雨晴</h4>
                      <p className="text-sm text-gray-500">全栈开发工程师</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    Node.js 微服务架构实战
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    详细讲解如何使用 Node.js 构建可扩展的微服务架构，包括服务发现、负载均衡、容错处理等关键技术点。
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>2024-01-14</span>
                    <div className="flex items-center space-x-4">
                      <span><i className="far fa-eye mr-1"></i>1,892</span>
                      <span><i className="far fa-heart mr-1"></i>156</span>
                      <span><i className="far fa-comment mr-1"></i>38</span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="article-card bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="https://ai-public.mastergo.com/ai/img_res/26b37f639709e465ce7275832748dd56.jpg"
                  alt="文章封面"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="https://ai-public.mastergo.com/ai/img_res/7ea8ffc1fb07e740f7e5469936fa41a9.jpg"
                      alt="作者头像"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-medium">张明辉</h4>
                      <p className="text-sm text-gray-500">UI/UX 设计师</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    移动端 UI 设计原则与实践
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    探讨移动端 UI 设计的核心原则，从用户体验、交互设计到视觉呈现，全方位提升设计水平。
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>2024-01-13</span>
                    <div className="flex items-center space-x-4">
                      <span><i className="far fa-eye mr-1"></i>1,567</span>
                      <span><i className="far fa-heart mr-1"></i>134</span>
                      <span><i className="far fa-comment mr-1"></i>29</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold mb-12 text-center">热门分类</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-code text-primary text-2xl"></i>
                </div>
                <h4 className="font-bold mb-2">前端开发</h4>
                <p className="text-gray-600">238 篇文章</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-server text-green-600 text-2xl"></i>
                </div>
                <h4 className="font-bold mb-2">后端开发</h4>
                <p className="text-gray-600">195 篇文章</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-mobile-alt text-purple-600 text-2xl"></i>
                </div>
                <h4 className="font-bold mb-2">移动开发</h4>
                <p className="text-gray-600">167 篇文章</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-paint-brush text-red-600 text-2xl"></i>
                </div>
                <h4 className="font-bold mb-2">UI 设计</h4>
                <p className="text-gray-600">142 篇文章</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold mb-12 text-center">平台数据</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">125,678</div>
                <p className="text-gray-600">注册用户</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">45,892</div>
                <p className="text-gray-600">技术文章</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">8,567</div>
                <p className="text-gray-600">活跃作者</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2,345</div>
                <p className="text-gray-600">接单项目</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold mb-12 text-center">最新教程</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <Image
                  src="https://ai-public.mastergo.com/ai/img_res/58884b07717100abf6dc5acd5d8fb09a.jpg"
                  alt="教程封面"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4">React 18 完全指南</h4>
                  <p className="text-gray-600 mb-4">
                    从基础到高级，全面掌握 React 18 的新特性和最佳实践
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">12 课时</span>
                    <Link
                      href="/tutorials/react-18"
                      className="px-4 py-2 bg-primary text-white rounded-button hover:bg-blue-600 transition-colors whitespace-nowrap"
                    >
                      开始学习
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <Image
                  src="https://ai-public.mastergo.com/ai/img_res/5def41ab458477ff5eaa3daab5b20d4c.jpg"
                  alt="教程封面"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4">云原生架构实战</h4>
                  <p className="text-gray-600 mb-4">
                    深入理解云原生架构，掌握容器化和微服务部署技术
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">16 课时</span>
                    <Link
                      href="/tutorials/cloud-native"
                      className="px-4 py-2 bg-primary text-white rounded-button hover:bg-blue-600 transition-colors whitespace-nowrap"
                    >
                      开始学习
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <Image
                  src="https://ai-public.mastergo.com/ai/img_res/7ea8ffc1fb07e740f7e5469936fa41a9.jpg"
                  alt="教程封面"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4">UI 设计入门到精通</h4>
                  <p className="text-gray-600 mb-4">
                    从零开始学习 UI 设计，掌握设计原则和工具使用
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">10 课时</span>
                    <Link
                      href="/tutorials/ui-design"
                      className="px-4 py-2 bg-primary text-white rounded-button hover:bg-blue-600 transition-colors whitespace-nowrap"
                    >
                      开始学习
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
