'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

interface PageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `文章详情 - TechShare`,
    description: `阅读完整文章内容 - ${params.id}`
  }
}

// 模拟文章数据
const post = {
  id: '1',
  title: '使用 Next.js 13 开发现代化 Web 应用',
  content: `
    Next.js 13 带来了许多激动人心的新特性，让我们一起来探索如何使用这些特性构建现代化的 Web 应用。

    ## App Router

    App Router 是 Next.js 13 最重要的新特性之一，它提供了一种全新的、基于文件系统的路由方式。
    使用 App Router，我们可以更直观地组织应用的路由结构，并且能够更好地利用 React Server Components。

    ## Server Components

    React Server Components 允许我们在服务器端渲染 React 组件，这带来了以下好处：
    - 减少客户端 JavaScript 包的大小
    - 改善首次加载性能
    - 更好的 SEO

    ## 示例代码

    \`\`\`tsx
    // app/page.tsx
    export default async function HomePage() {
      const data = await fetchData()
      return (
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      )
    }
    \`\`\`

    ## 总结

    Next.js 13 的这些新特性为我们提供了更好的开发体验和性能优化机会。通过合理使用这些特性，
    我们可以构建出更快、更可靠的 Web 应用。
  `,
  author: '张三',
  date: '2024-03-30',
  category: '前端开发',
  views: 1234,
  likes: 56,
}

export default function ArticlePage({ params }: PageProps) {
  // 使用 params.id 获取文章数据
  console.log('Article ID:', params.id)
  
  const relatedArticles = [
    {
      title: 'TypeScript 5.0 新特性抢先看：新增特性与改进详解',
      views: 2891,
      date: '3天前'
    },
    {
      title: 'TypeScript 高级类型实战：打造类型安全的应用',
      views: 3567,
      date: '5天前'
    },
    {
      title: '从零开始：TypeScript 项目最佳实践指南',
      views: 4123,
      date: '1周前'
    }
  ]

  const comments = [
    {
      id: 1,
      author: {
        name: '张雪琪',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/19f5f828d507696761ed947c0d049f9d.jpg',
        role: '高级前端工程师'
      },
      content: '非常详细的解析！特别是关于条件类型中的 tail-recursion 优化这部分，帮我解决了很多之前遇到的问题。期待能看到更多类似的技术分享。',
      date: '2小时前',
      likes: 34
    },
    {
      id: 2,
      author: {
        name: '王浩然',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/8cf31c44ed425ac319e78507616a9cea.jpg',
        role: '资深工程师'
      },
      content: '关于新的装饰器语法这部分写得很好，不过建议可以再补充一些实际的使用场景和性能优化的建议。',
      date: '4小时前',
      likes: 28
    }
  ]

  useEffect(() => {
    // 加载 markdown-it
    const loadMarkdownIt = async () => {
      const md = (await import('markdown-it')).default()
      const content = document.getElementById('article-content')
      if (content) {
        content.innerHTML = md.render(post.content)
      }
    }
    loadMarkdownIt()

    // 添加滚动监听
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                <Link href="/articles" className="hover:text-primary">
                  ← 返回文章列表
                </Link>
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-gray-500">
                  <span>作者：{post.author}</span>
                  <span>阅读：{post.views}</span>
                  <span>点赞：{post.likes}</span>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  点赞
                </button>
              </div>
            </header>

            <div className="prose max-w-none">
              {post.content.split('\n').map((line, index) => (
                <p key={index} className="mb-4 text-gray-600">
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold mb-6">评论</h3>
              <form className="mb-8">
                <textarea
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  rows={4}
                  placeholder="写下你的评论..."
                ></textarea>
                <button
                  type="submit"
                  className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  发表评论
                </button>
              </form>

              <div className="space-y-6">
                {comments.map(comment => (
                  <div key={comment.id} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <span className="font-semibold">{comment.author.name}</span>
                        <span className="text-gray-500 text-sm">{comment.date}</span>
                      </div>
                      <button className="text-gray-600 hover:text-primary">回复</button>
                    </div>
                    <p className="text-gray-600">
                      {comment.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />

      <style jsx global>{`
        .markdown-body {
          font-size: 16px;
          line-height: 1.6;
        }
        .markdown-body h1 {
          font-size: 2em;
          margin-bottom: 1em;
        }
        .markdown-body h2 {
          font-size: 1.5em;
          margin: 1em 0;
        }
        .markdown-body code {
          background: #f6f8fa;
          padding: 0.2em 0.4em;
          border-radius: 3px;
        }
        .markdown-body pre {
          background: #f6f8fa;
          padding: 16px;
          border-radius: 6px;
          overflow-x: auto;
        }
        .toc-link.active {
          color: #3B82F6;
          font-weight: bold;
        }
        header {
          transition: all 0.3s ease;
        }
        header.scrolled {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  )
} 