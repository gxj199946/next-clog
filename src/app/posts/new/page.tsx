import Link from 'next/link'

export default function NewPostPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">写文章</h1>
          <Link
            href="/posts"
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← 返回文章列表
          </Link>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              标题
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="输入文章标题"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              分类
            </label>
            <select
              id="category"
              name="category"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">选择分类</option>
              <option value="frontend">前端开发</option>
              <option value="backend">后端开发</option>
              <option value="mobile">移动开发</option>
              <option value="devops">DevOps</option>
              <option value="other">其他</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              内容
            </label>
            <div className="border border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-gray-800 border-b border-gray-700 p-2">
                <button
                  type="button"
                  className="px-3 py-1 text-sm text-gray-400 hover:text-white"
                >
                  预览
                </button>
              </div>
              <textarea
                id="content"
                name="content"
                rows={20}
                className="w-full p-4 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="使用 Markdown 格式编写文章内容..."
              ></textarea>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6">
            <button
              type="button"
              className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              保存草稿
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              发布文章
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 