'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="bg-white relative overflow-hidden pb-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
            </div>

            {/* 我们的故事 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <Image
                  src="https://ai-public.mastergo.com/ai/img_res/9ae80ee21547c167fa0c4fb3f5802895.jpg"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                  alt="关于我们"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">我们的故事</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  TechShare 成立于 2020 年，是一个致力于连接全球开发者的技术社区平台。我们期望通过技术分享和知识传播，帮助更多开发者提升技能，实现职业发展。
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-primary mb-2">120k+</div>
                    <p className="text-gray-600">注册用户</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-primary mb-2">50k+</div>
                    <p className="text-gray-600">技术文章</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 使命、愿景、价值观 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-bullseye text-primary text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold mb-4">我们的使命</h4>
                <p className="text-gray-600">打造最优质的技术分享平台，助力开发者成长。</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-eye text-green-600 text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold mb-4">我们的愿景</h4>
                <p className="text-gray-600">成为全球最具影响力的开发者社区。</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-heart text-purple-600 text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold mb-4">我们的价值观</h4>
                <p className="text-gray-600">开放、创新、协作、成长。</p>
              </div>
            </div>

            {/* 加入我们 */}
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-6">加入我们</h3>
              <p className="text-xl mb-8 opacity-90">如果你对技术充满热情，期待与优秀的人一起创造价值，欢迎加入我们的团队</p>
              <button className="px-8 py-3 bg-white text-primary rounded-button hover:bg-blue-50 transition duration-300 shadow-lg whitespace-nowrap">
                查看职位
              </button>
            </div>

            {/* 我们的团队 */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-12">我们的团队</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <Image
                    src="https://ai-public.mastergo.com/ai/img_res/d5f4252ffe6f0244da80ba13bfe5aa14.jpg"
                    width={128}
                    height={128}
                    className="rounded-full mx-auto mb-4"
                    alt="张志远"
                  />
                  <h4 className="font-bold mb-1">张志远</h4>
                  <p className="text-gray-600">创始人 & CEO</p>
                </div>
                <div className="text-center">
                  <Image
                    src="https://ai-public.mastergo.com/ai/img_res/b654848012fb675cc151a6c2b40b7b96.jpg"
                    width={128}
                    height={128}
                    className="rounded-full mx-auto mb-4"
                    alt="李雨晴"
                  />
                  <h4 className="font-bold mb-1">李雨晴</h4>
                  <p className="text-gray-600">技术副总裁</p>
                </div>
                <div className="text-center">
                  <Image
                    src="https://ai-public.mastergo.com/ai/img_res/77d4a8df09e5d1de1171b2fad43bd76b.jpg"
                    width={128}
                    height={128}
                    className="rounded-full mx-auto mb-4"
                    alt="王浩然"
                  />
                  <h4 className="font-bold mb-1">王浩然</h4>
                  <p className="text-gray-600">产品总监</p>
                </div>
                <div className="text-center">
                  <Image
                    src="https://ai-public.mastergo.com/ai/img_res/9e88e4e3d0ff1e1b4fde95e7f9bb2e7b.jpg"
                    width={128}
                    height={128}
                    className="rounded-full mx-auto mb-4"
                    alt="陈梓晴"
                  />
                  <h4 className="font-bold mb-1">陈梓晴</h4>
                  <p className="text-gray-600">设计总监</p>
                </div>
              </div>
            </div>

            {/* 联系我们 */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-12">联系我们</h3>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-envelope text-primary text-2xl"></i>
                  </div>
                  <h4 className="font-bold mb-2">邮件联系</h4>
                  <p className="text-gray-600">contact@techshare.com</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-phone text-green-600 text-2xl"></i>
                  </div>
                  <h4 className="font-bold mb-2">电话咨询</h4>
                  <p className="text-gray-600">400-123-4567</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-map-marker-alt text-purple-600 text-2xl"></i>
                  </div>
                  <h4 className="font-bold mb-2">公司地址</h4>
                  <p className="text-gray-600">北京市朝阳区科技园区</p>
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