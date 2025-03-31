'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

interface PageProps {
  params: {
    id: string
  }
}

interface Comment {
  id: number
  author: {
    name: string
    avatar: string
    role: string
  }
  content: string
  date: string
  likes: number
  replies?: Comment[]
  replyTo?: string
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
  author: {
    name: '张三',
    avatar: 'https://ai-public.mastergo.com/ai/img_res/19f5f828d507696761ed947c0d049f9d.jpg',
    role: '高级前端工程师',
    articles: 128,
    followers: 12500,
    likes: 89200
  },
  date: '2024-03-30',
  category: '前端开发',
  views: 1234,
  likes: 56,
  tags: [
    { name: 'Next.js', color: 'blue' },
    { name: '前端开发', color: 'purple' }
  ]
}

// 模拟相关文章数据
const relatedArticles = [
  {
    id: '2',
    title: 'Next.js 13 App Router 最佳实践指南',
    views: 2891,
    date: '3天前',
    cover: 'https://ai-public.mastergo.com/ai/img_res/8cf31c44ed425ac319e78507616a9cea.jpg'
  },
  {
    id: '3',
    title: 'React Server Components 深入解析',
    views: 3567,
    date: '5天前',
    cover: 'https://ai-public.mastergo.com/ai/img_res/d1df6f1813c9cf8b7adfc1fd1361184f.jpg'
  },
  {
    id: '4',
    title: '从零开始：Next.js 13 项目最佳实践',
    views: 4123,
    date: '1周前',
    cover: 'https://ai-public.mastergo.com/ai/img_res/a679a3d0d95f5ae75ba9242f7aab833f.jpg'
  }
]

export default function ArticlePage({ params }: PageProps) {
  const articleId = params.id
  console.log('Loading article:', articleId)

  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes)
  const [newComment, setNewComment] = useState('')
  const [replyTo, setReplyTo] = useState<{ id: number; name: string } | null>(null)
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: {
        name: '张雪琪',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/19f5f828d507696761ed947c0d049f9d.jpg',
        role: '高级前端工程师'
      },
      content: '非常详细的解析！特别是关于 App Router 的部分，帮我解决了很多之前遇到的问题。期待能看到更多类似的技术分享。',
      date: '2小时前',
      likes: 34,
      replies: [
        {
          id: 3,
          author: {
            name: '李明',
            avatar: 'https://ai-public.mastergo.com/ai/img_res/d1df6f1813c9cf8b7adfc1fd1361184f.jpg',
            role: '前端开发者'
          },
          content: '完全同意！App Router 确实解决了很多传统路由的痛点。',
          date: '1小时前',
          likes: 12,
          replyTo: '张雪琪'
        }
      ]
    },
    {
      id: 2,
      author: {
        name: '王浩然',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/8cf31c44ed425ac319e78507616a9cea.jpg',
        role: '资深工程师'
      },
      content: '关于 Server Components 这部分写得很好，不过建议可以再补充一些实际的使用场景和性能优化的建议。',
      date: '4小时前',
      likes: 28
    }
  ])

  useEffect(() => {
    // 加载 markdown-it 和 highlight.js
    const loadMarkdown = async () => {
      const [MarkdownIt, hljs] = await Promise.all([
        import('markdown-it'),
        import('highlight.js')
      ])
      
      const md = MarkdownIt.default({
        html: true,
        linkify: true,
        typographer: true,
        highlight: function (str, lang) {
          if (lang && hljs.default.getLanguage(lang)) {
            try {
              return hljs.default.highlight(str, { language: lang }).value
            } catch {
              return ''
            }
          }
          return '' // 使用默认的转义
        }
      })

      const content = document.getElementById('article-content')
      if (content) {
        content.innerHTML = md.render(post.content)
      }
    }
    loadMarkdown()

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

  // 处理点赞
  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  // 处理评论提交
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const newCommentObj: Comment = {
      id: Date.now(),
      author: {
        name: '当前用户',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/a679a3d0d95f5ae75ba9242f7aab833f.jpg',
        role: '用户'
      },
      content: newComment,
      date: '刚刚',
      likes: 0
    }

    if (replyTo) {
      setComments(prevComments => {
        return prevComments.map(comment => {
          if (comment.id === replyTo.id) {
            return {
              ...comment,
              replies: [
                ...(comment.replies || []),
                { ...newCommentObj, replyTo: replyTo.name }
              ]
            }
          }
          return comment
        })
      })
    } else {
      setComments(prev => [newCommentObj, ...prev])
    }

    setNewComment('')
    setReplyTo(null)
  }

  const handleReplyClick = (commentId: number, authorName: string) => {
    setReplyTo({ id: commentId, name: authorName })
    const textarea = document.querySelector('textarea')
    if (textarea) {
      textarea.focus()
      textarea.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderCommentForm = () => (
    <form onSubmit={handleCommentSubmit} className="mb-8">
      <div className="flex items-start gap-4">
        <Image
          src="https://ai-public.mastergo.com/ai/img_res/a679a3d0d95f5ae75ba9242f7aab833f.jpg"
          alt="当前用户"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex-1">
          {replyTo && (
            <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
              回复 <span className="text-primary">{replyTo.name}</span>
              <button
                type="button"
                onClick={() => setReplyTo(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          )}
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            rows={4}
            placeholder={replyTo ? `回复 ${replyTo.name}...` : "写下你的评论..."}
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {replyTo ? '回复' : '发表评论'}
          </button>
        </div>
      </div>
    </form>
  )

  const renderComment = (comment: Comment, isReply = false) => (
    <div key={comment.id} className={`bg-gray-50 p-6 rounded-lg ${isReply ? 'ml-12' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <Image
            src={comment.author.avatar}
            alt={comment.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="font-medium">{comment.author.name}</div>
            <div className="text-sm text-gray-500">{comment.date}</div>
          </div>
        </div>
        <button 
          onClick={() => handleReplyClick(comment.id, comment.author.name)}
          className="text-gray-600 hover:text-primary transition-colors"
        >
          <i className="far fa-comment mr-2"></i>
          回复
        </button>
      </div>
      <p className="text-gray-600">
        {comment.replyTo && (
          <span className="text-primary mr-1">
            回复 @{comment.replyTo}：
          </span>
        )}
        {comment.content}
      </p>
      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        <button className="hover:text-primary transition-colors">
          <i className="far fa-heart mr-1"></i>
          {comment.likes}
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 左侧文章内容 */}
            <article className="lg:w-3/4">
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
                  <div className="flex items-center gap-4">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">{post.author.name}</div>
                      <div className="text-sm text-gray-500">{post.author.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500">
                      <i className="far fa-eye mr-2"></i>
                      {post.views.toLocaleString()}
                    </span>
                    <button 
                      onClick={handleLike}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        isLiked 
                          ? 'bg-primary text-white hover:bg-blue-600' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <i className={`${isLiked ? 'fas' : 'far'} fa-heart`}></i>
                      {likesCount.toLocaleString()}
                    </button>
                  </div>
                </div>
              </header>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <span
                    key={tag.name}
                    className={`px-3 py-1 bg-${tag.color}-100 text-${tag.color}-600 rounded-full text-sm`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <div id="article-content" className="prose max-w-none mb-12"></div>

              <div className="mt-12 border-t border-gray-200 pt-8">
                <h3 className="text-xl font-semibold mb-6">评论 ({comments.length})</h3>
                {renderCommentForm()}
                <div className="space-y-6">
                  {comments.map(comment => (
                    <div key={comment.id} className="space-y-4">
                      {renderComment(comment)}
                      {comment.replies?.map(reply => (
                        <div key={reply.id} className="ml-12">
                          {renderComment(reply, true)}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* 右侧边栏 */}
            <aside className="lg:w-1/4 space-y-6">
              {/* 作者信息 */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-xl font-bold">{post.author.name}</h4>
                    <p className="text-gray-500">{post.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <span>文章 {post.author.articles}</span>
                  <span>粉丝 {(post.author.followers / 1000).toFixed(1)}k</span>
                  <span>获赞 {(post.author.likes / 1000).toFixed(1)}k</span>
                </div>
                <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
                  <i className="fas fa-plus mr-2"></i>关注
                </button>
              </div>

              {/* 相关文章 */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="font-bold mb-4">相关文章</h4>
                <div className="space-y-4">
                  {relatedArticles.map((article) => (
                    <Link 
                      key={article.id}
                      href={`/articles/${article.id}`}
                      className="block hover:bg-gray-50 p-2 rounded transition-colors"
                    >
                      <div className="flex gap-4">
                        <Image
                          src={article.cover}
                          alt={article.title}
                          width={80}
                          height={60}
                          className="rounded object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium mb-2 line-clamp-2 hover:text-primary transition-colors">
                            {article.title}
                          </h5>
                          <div className="flex items-center text-sm text-gray-500">
                            <span>{article.views.toLocaleString()} 阅读</span>
                            <span className="mx-2">·</span>
                            <span>{article.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
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
        .hljs {
          background: #f6f8fa;
          padding: 1em;
          border-radius: 6px;
        }
      `}</style>
    </div>
  )
} 