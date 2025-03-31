import Link from 'next/link'

const posts = [
  {
    id: '1',
    title: '使用 Next.js 13 开发现代化 Web 应用',
    excerpt:
      '探索 Next.js 13 的新特性，包括 App Router、Server Components 等，了解如何使用这些特性构建高性能的 Web 应用。',
    author: '张三',
    date: '2024-03-30',
    category: '前端开发',
  },
  {
    id: '2',
    title: 'TypeScript 高级特性详解',
    excerpt:
      '深入理解 TypeScript 的类型系统，包括泛型、条件类型、映射类型等高级特性，提升代码的类型安全性。',
    author: '李四',
    date: '2024-03-29',
    category: '编程语言',
  },
  // 更多文章...
]

export default function PostsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">文章列表</h1>
        <Link
          href="/posts/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          写文章
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">{post.category}</span>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
              <Link href={`/posts/${post.id}`}>
                <h2 className="text-xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">作者：{post.author}</span>
                <Link
                  href={`/posts/${post.id}`}
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  阅读更多 →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-2 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
            上一页
          </button>
          <span className="px-3 py-2 rounded-md bg-blue-600 text-white">1</span>
          <span className="px-3 py-2 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
            2
          </span>
          <span className="px-3 py-2 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
            3
          </span>
          <button className="px-3 py-2 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
            下一页
          </button>
        </nav>
      </div>
    </div>
  )
} 