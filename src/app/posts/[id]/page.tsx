import Link from 'next/link'

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

export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
            <Link href="/posts" className="hover:text-blue-400">
              ← 返回文章列表
            </Link>
            <span>{post.category}</span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-gray-400">作者：{post.author}</span>
              <span className="text-gray-400">阅读：{post.views}</span>
              <span className="text-gray-400">点赞：{post.likes}</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              点赞
            </button>
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          {post.content.split('\n').map((line, index) => (
            <p key={index} className="mb-4 text-gray-300">
              {line}
            </p>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <h3 className="text-xl font-semibold text-white mb-6">评论</h3>
          <form className="mb-8">
            <textarea
              className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="写下你的评论..."
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              发表评论
            </button>
          </form>

          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-white">李四</span>
                  <span className="text-gray-400 text-sm">2024-03-30</span>
                </div>
                <button className="text-gray-400 hover:text-white">回复</button>
              </div>
              <p className="text-gray-300">
                写得很好，对我理解 Next.js 13 的新特性很有帮助！
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
} 