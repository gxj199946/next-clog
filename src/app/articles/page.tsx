'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ArticlesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const articles = [
    {
      id: 1,
      title: 'TypeScript 4.5 新特性详解',
      excerpt: 'TypeScript 4.5 带来了多项重要更新，包括新的装饰器语法、条件类型中的尾递归优化等特性...',
      cover: 'https://ai-public.mastergo.com/ai/img_res/330ea57ed37eb96075de8b2d95ab8865.jpg',
      date: '2小时前',
      readTime: '10分钟',
      category: '前端开发',
      tags: ['TypeScript', 'JavaScript', '前端'],
      stats: {
        views: 1234,
        likes: 56,
        comments: 23
      },
      author: {
        name: '张志远',
        role: '高级前端工程师',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/24de2d3e887e4d518bdca9105b99be9d.jpg'
      }
    },
    {
      id: 2,
      title: 'Kubernetes 服务网格实践指南',
      cover: 'https://ai-public.mastergo.com/ai/img_res/fe96a72e53daa571d4005f212d3946cd.jpg',
      author: {
        name: '周雨萱',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/bb81db2e465953d457ba7cdb9c05364d.jpg',
        role: '云计算专家'
      },
      date: '2024-01-15',
      excerpt: '探索服务网格在 Kubernetes 集群中的最佳实践，包括 Istio 的部署配置、流量管理、安全策略等关键内容，助力团队构建可靠的微服务架构。',
      stats: {
        views: 2876,
        likes: 198,
        comments: 35
      },
      tags: [
        { name: 'Kubernetes', color: 'green' },
        { name: '云原生', color: 'blue' }
      ]
    },
    {
      id: 3,
      title: '设计系统构建与维护指南',
      cover: 'https://ai-public.mastergo.com/ai/img_res/958f02073282dd58333efcd9b70b28d3.jpg',
      author: {
        name: '王梓晴',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/a608a6c7440b5b0aa3d6338b7275fa4e.jpg',
        role: '高级UI设计师'
      },
      date: '2024-01-14',
      excerpt: '分享如何从零开始构建一个完整的设计系统，包括组件库设计、样式指南制定、设计标准化流程等内容，助力团队提升设计效率和一致性。',
      stats: {
        views: 2156,
        likes: 167,
        comments: 29
      },
      tags: [
        { name: 'UI设计', color: 'red' },
        { name: '设计系统', color: 'yellow' }
      ]
    }
  ]

  const popularTags = [
    { name: 'JavaScript', color: 'blue' },
    { name: 'Python', color: 'green' },
    { name: 'React', color: 'purple' },
    { name: 'Vue', color: 'red' },
    { name: 'Node.js', color: 'yellow' },
    { name: 'Docker', color: 'pink' }
  ]

  const recommendedAuthors = [
    {
      name: '刘伟明',
      avatar: 'https://ai-public.mastergo.com/ai/img_res/7d1b2dc9d862f7105d305e061aac8a3a.jpg',
      role: '资深架构师',
      articles: 128,
      followers: 12563
    },
    {
      name: '周雨萱',
      avatar: 'https://ai-public.mastergo.com/ai/img_res/bb81db2e465953d457ba7cdb9c05364d.jpg',
      role: '云计算专家',
      articles: 98,
      followers: 8752
    },
    {
      name: '王梓晴',
      avatar: 'https://ai-public.mastergo.com/ai/img_res/a608a6c7440b5b0aa3d6338b7275fa4e.jpg',
      role: '高级UI设计师',
      articles: 156,
      followers: 15234
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      <main className="flex-1 pt-20">


        {/* 文章列表部分 */}
        <div className="container mx-auto px-6 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">最新文章</h2>
            <div className="flex items-center space-x-4">
              <Link
                href="/write"
                className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <i className="fas fa-pen-to-square mr-2"></i>
                写文章
              </Link>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 ${
                    viewMode === 'grid'
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <i className="fas fa-grid-2 text-lg"></i>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 ${
                    viewMode === 'list'
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <i className="fas fa-list text-lg"></i>
                </button>
              </div>
            </div>
          </div>

          {/* 文章列表 */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}>
                {articles.map(article => (
                  <article 
                    key={article.id} 
                    className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    <div 
                      className={
                        viewMode === 'list'
                          ? 'flex-shrink-0 w-[300px] relative'
                          : 'relative aspect-[16/9]'
                      }
                    >
                      <Image
                        src={article.cover}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className={`flex-1 p-6 ${viewMode === 'list' ? 'min-w-0' : ''}`}>
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 relative mr-3 flex-shrink-0">
                          <Image
                            src={article.author.avatar}
                            alt={article.author.name}
                            fill
                            className="rounded-full"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-medium truncate">{article.author.name}</h4>
                          <p className="text-sm text-gray-500 truncate">{article.author.role} · {article.date}</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 hover:text-primary line-clamp-2">
                        <Link href={`/articles/${article.id}`}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <i className="far fa-clock mr-1"></i>
                            {article.readTime}
                          </span>
                          <span className="flex items-center">
                            <i className="far fa-folder mr-1"></i>
                            {article.category}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span><i className="far fa-eye mr-1"></i>{article.stats.views}</span>
                          <span><i className="far fa-heart mr-1"></i>{article.stats.likes}</span>
                          <span><i className="far fa-comment mr-1"></i>{article.stats.comments}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* 侧边栏 */}
            <div className="lg:col-span-1 space-y-6">
              {/* 热门标签 */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold mb-4">热门标签</h3>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'React', 'Vue', 'Node.js', 'Python', 'Docker'].map(tag => (
                    <Link
                      key={tag}
                      href={`/articles/tags/${tag}`}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* 推荐作者 */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold mb-4">推荐作者</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center">
                      <div className="w-12 h-12 relative mr-3">
                        <Image
                          src="https://ai-public.mastergo.com/ai/img_res/24de2d3e887e4d518bdca9105b99be9d.jpg"
                          alt="作者头像"
                          fill
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">张志远</h4>
                        <p className="text-sm text-gray-500">高级前端工程师</p>
                      </div>
                      <button className="px-3 py-1 border border-primary text-primary rounded-full text-sm hover:bg-primary hover:text-white transition-colors">
                        关注
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 