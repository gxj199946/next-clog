'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function JobsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  
  // 模拟项目数据
  const jobs = [
    {
      id: 1,
      title: '企业官网开发',
      category: 'Web 开发',
      budget: '15,000-20,000',
      duration: '30 天',
      description: '需要一个现代化的企业官网，包含响应式设计、产品展示、新闻资讯等功能。技术栈要求使用 Next.js 和 Tailwind CSS。',
      requirements: ['React', 'Next.js', 'Tailwind CSS', '响应式设计'],
      postedAt: '2小时前',
      proposals: 8,
      client: {
        name: '张经理',
        company: '某某科技有限公司',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/24de2d3e887e4d518bdca9105b99be9d.jpg',
        verified: true
      }
    },
    {
      id: 2,
      title: '电商小程序开发',
      category: '小程序开发',
      budget: '25,000-30,000',
      duration: '45 天',
      description: '开发一个完整的电商小程序，包含商品展示、购物车、订单管理、支付功能等。需要有小程序开发经验。',
      requirements: ['微信小程序', 'Vue', 'Node.js', '微信支付'],
      postedAt: '4小时前',
      proposals: 12,
      client: {
        name: '李总监',
        company: '某某电商有限公司',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/24de2d3e887e4d518bdca9105b99be9d.jpg',
        verified: true
      }
    },
    {
      id: 3,
      title: '后台管理系统开发',
      category: 'Web 开发',
      budget: '20,000-25,000',
      duration: '40 天',
      description: '开发一个功能完善的后台管理系统，包含用户管理、权限控制、数据统计等功能。要求代码质量高，性能优秀。',
      requirements: ['Vue 3', 'TypeScript', 'Element Plus', 'Node.js'],
      postedAt: '6小时前',
      proposals: 6,
      client: {
        name: '王经理',
        company: '某某软件科技公司',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/24de2d3e887e4d518bdca9105b99be9d.jpg',
        verified: true
      }
    },
    // ... 更多项目数据
  ]

  // 计算分页数据
  const totalPages = Math.ceil(jobs.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentJobs = jobs.slice(startIndex, endIndex)

  // 生成分页按钮数组
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    return pageNumbers
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-indigo-800 py-28 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-6">寻找优秀的开发者</h1>
              <p className="text-xl mb-12 opacity-90">在这里发布您的项目需求，与数千名专业开发者建立联系</p>
              <div className="flex gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-indigo-700 rounded-button hover:bg-indigo-50 transition duration-300 shadow-lg whitespace-nowrap">
                  发布项目
                </button>
                <button className="px-8 py-3 border-2 border-white text-white rounded-button hover:bg-white/10 transition duration-300 whitespace-nowrap">
                  浏览项目
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://ai-public.mastergo.com/ai/img_res/330ea57ed37eb96075de8b2d95ab8865.jpg"
              alt="背景图案"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* 项目列表 */}
        <div className="container mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold mb-12 text-center">接单专区</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentJobs.map(job => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">{job.category}</span>
                  <span className="text-sm text-gray-500">{job.postedAt}</span>
                </div>
                <h4 className="text-xl font-bold mb-2 hover:text-primary cursor-pointer">{job.title}</h4>
                <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.requirements.map((req, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                      {req}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <i className="fas fa-clock mr-2"></i>
                    {job.duration}
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-comment mr-2"></i>
                    {job.proposals} 个投标
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={job.client.avatar}
                        alt={job.client.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium flex items-center">
                          {job.client.name}
                          {job.client.verified && (
                            <i className="fas fa-check-circle text-primary ml-1"></i>
                          )}
                        </p>
                        <p className="text-xs text-gray-500">{job.client.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">￥{job.budget}</p>
                      <p className="text-xs text-gray-500">预算</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 分页 */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              
              {getPageNumbers().map(number => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === number
                      ? 'bg-primary text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 