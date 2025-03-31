'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TutorialsPage() {
  // 模拟课程数据
  const tutorials = [
    {
      id: 1,
      title: 'React 18 高级开发实战',
      cover: 'https://ai-public.mastergo.com/ai/img_res/6735e191bf2d54a901d5fe653ef7a9c7.jpg',
      tags: [
        { name: 'React.js', color: 'blue' },
        { name: '进阶', color: 'green' }
      ],
      description: '深入学习 React 18 新特性，掌握高阶组件、Hooks 进阶、性能优化等核心技能，打造高质量的前端应用。',
      lessons: 24,
      instructor: {
        name: '陈志远',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/24de2d3e887e4d518bdca9105b99be9d.jpg',
        title: '高级前端工程师'
      },
      isHot: true
    },
    {
      id: 2,
      title: 'Vue 3 企业级项目开发实战',
      cover: 'https://ai-public.mastergo.com/ai/img_res/6735e191bf2d54a901d5fe653ef7a9c7.jpg',
      tags: [
        { name: 'Vue.js', color: 'green' },
        { name: '实战', color: 'blue' }
      ],
      description: '从零开始学习 Vue 3 的新特性，结合 TypeScript、Vite 等现代化工具，实现企业级项目的开发。',
      lessons: 32,
      instructor: {
        name: '李明',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/24de2d3e887e4d518bdca9105b99be9d.jpg',
        title: '资深前端专家'
      },
      isHot: false
    },
    {
      id: 3,
      title: 'Node.js 微服务架构',
      cover: 'https://ai-public.mastergo.com/ai/img_res/6735e191bf2d54a901d5fe653ef7a9c7.jpg',
      tags: [
        { name: 'Node.js', color: 'purple' },
        { name: '架构', color: 'red' }
      ],
      description: '深入理解微服务架构，掌握 Node.js 在企业级应用中的最佳实践，打造高可用的后端服务。',
      lessons: 28,
      instructor: {
        name: '王建',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/24de2d3e887e4d518bdca9105b99be9d.jpg',
        title: '架构师'
      },
      isHot: true
    }
  ]

  // 学习路径数据
  const learningPaths = [
    {
      id: 1,
      title: '前端开发工程师',
      icon: 'fas fa-laptop-code',
      color: 'blue',
      courses: 12,
      students: 2890,
      description: '从零基础到高级前端工程师的完整学习路径，包含 HTML、CSS、JavaScript、React、Vue 等核心技术。'
    },
    {
      id: 2,
      title: '后端开发工程师',
      icon: 'fas fa-server',
      color: 'green',
      courses: 15,
      students: 2100,
      description: '系统学习后端开发技术栈，包含 Node.js、Python、数据库、微服务架构等专业知识。'
    },
    {
      id: 3,
      title: '全栈开发工程师',
      icon: 'fas fa-layer-group',
      color: 'purple',
      courses: 20,
      students: 1560,
      description: '全面掌握前后端开发技术，打造全栈开发能力，胜任更多岗位需求。'
    },
    {
      id: 4,
      title: '移动端开发工程师',
      icon: 'fas fa-mobile-alt',
      color: 'red',
      courses: 10,
      students: 1280,
      description: '专注移动端应用开发，掌握 React Native、Flutter 等主流跨平台开发技术。'
    }
  ]

  // 讲师团队数据
  const instructors = [
    {
      id: 1,
      name: '陈志远',
      avatar: 'https://ai-public.mastergo.com/ai/img_res/24de2d3e887e4d518bdca9105b99be9d.jpg',
      title: '高级前端工程师',
      company: 'TechShare',
      description: '8年前端开发经验，精通 React 生态系统，参与过多个大型企业级项目开发。',
      students: 12800,
      rating: 4.9
    },
    {
      id: 2,
      name: '李明',
      avatar: 'https://ai-public.mastergo.com/ai/img_res/24de2d3e887e4d518bdca9105b99be9d.jpg',
      title: '资深前端专家',
      company: 'TechShare',
      description: '10年+工作经验，前百度高级工程师，专注前端架构设计和性能优化。',
      students: 15600,
      rating: 4.8
    },
    {
      id: 3,
      name: '王建',
      avatar: 'https://ai-public.mastergo.com/ai/img_res/24de2d3e887e4d518bdca9105b99be9d.jpg',
      title: '架构师',
      company: 'TechShare',
      description: '12年后端开发经验，精通分布式系统设计，曾主导多个大型系统架构设计。',
      students: 9800,
      rating: 4.9
    },
    {
      id: 4,
      name: '张雪',
      avatar: 'https://ai-public.mastergo.com/ai/img_res/24de2d3e887e4d518bdca9105b99be9d.jpg',
      title: '全栈开发专家',
      company: 'TechShare',
      description: '全栈开发专家，擅长 Node.js 和 React 技术栈，著有多本技术书籍。',
      students: 11200,
      rating: 4.7
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold">精品课程</h2>
                <p className="text-gray-600 mt-2">专业的技术教程，助你快速进阶</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="搜索课程..." 
                    className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-button focus:outline-none focus:border-primary"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
                <div className="flex bg-white rounded-button shadow-sm">
                  <button className="px-4 py-2 text-primary border-b-2 border-primary">全部</button>
                  <button className="px-4 py-2 text-gray-500 hover:text-primary">前端</button>
                  <button className="px-4 py-2 text-gray-500 hover:text-primary">后端</button>
                  <button className="px-4 py-2 text-gray-500 hover:text-primary">移动端</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map(tutorial => (
                <div key={tutorial.id} className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <Image
                      src={tutorial.cover}
                      alt={tutorial.title}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover"
                    />
                    {tutorial.isHot && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary bg-opacity-90 text-white rounded-full text-sm">
                        热门推荐
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                      <span className="px-2 py-1 bg-black bg-opacity-50 text-white rounded text-sm">
                        <i className="fas fa-play-circle mr-1"></i>{tutorial.lessons} 课时
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      {tutorial.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className={`px-2 py-1 bg-${tag.color}-100 text-${tag.color}-600 rounded-full text-xs`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary">{tutorial.title}</h4>
                    <p className="text-gray-600 mb-4 line-clamp-2">{tutorial.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Image
                          src={tutorial.instructor.avatar}
                          alt={tutorial.instructor.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-sm font-medium">{tutorial.instructor.name}</p>
                          <p className="text-xs text-gray-500">{tutorial.instructor.title}</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-primary text-white rounded-button hover:bg-blue-600">
                        开始学习
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 学习路径部分 */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">专业学习路径</h2>
              <p className="text-gray-600">根据职业发展规划，为你提供最适合的学习路径</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {learningPaths.map(path => (
                <div key={path.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-lg bg-${path.color}-100 text-${path.color}-600 flex items-center justify-center mb-4`}>
                    <i className={`${path.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{path.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <i className="fas fa-book-open mr-2"></i>
                      {path.courses} 门课程
                    </span>
                    <span className="mx-2">·</span>
                    <span className="flex items-center">
                      <i className="fas fa-user-graduate mr-2"></i>
                      {path.students.toLocaleString()} 名学员
                    </span>
                  </div>
                  <button className="w-full px-4 py-2 bg-white border border-primary text-primary rounded-button hover:bg-blue-50">
                    查看详情
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 讲师团队部分 */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">专业讲师团队</h2>
              <p className="text-gray-600">来自一线互联网公司的资深技术专家</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {instructors.map(instructor => (
                <div key={instructor.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center mb-4">
                    <Image
                      src={instructor.avatar}
                      alt={instructor.name}
                      width={80}
                      height={80}
                      className="rounded-full mb-4"
                    />
                    <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                    <p className="text-gray-600 text-sm mb-1">{instructor.title}</p>
                    <p className="text-primary text-sm">{instructor.company}</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{instructor.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <i className="fas fa-user-graduate mr-1"></i>
                      {instructor.students.toLocaleString()} 学员
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-star text-yellow-400 mr-1"></i>
                      {instructor.rating} 评分
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 