import Link from 'next/link'

const user = {
  name: '张三',
  email: 'zhangsan@example.com',
  avatar: '/avatars/default.jpg',
  bio: '热爱编程，专注于前端开发和全栈技术。',
  joinDate: '2024-01-01',
  stats: {
    posts: 12,
    tutorials: 3,
    jobs: 5,
    followers: 156,
    following: 89,
  },
}

const activities = [
  {
    id: '1',
    type: 'post',
    title: '发布了文章《使用 Next.js 13 开发现代化 Web 应用》',
    date: '2024-03-30',
  },
  {
    id: '2',
    type: 'comment',
    title: '评论了文章《TypeScript 高级特性详解》',
    date: '2024-03-29',
  },
  {
    id: '3',
    type: 'job',
    title: '接取了项目《开发一个电商网站》',
    date: '2024-03-28',
  },
]

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* 侧边栏 */}
          <div className="md:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto bg-gray-700 rounded-full mb-4"></div>
                <h2 className="text-xl font-semibold text-white mb-1">
                  {user.name}
                </h2>
                <p className="text-gray-400 text-sm">{user.email}</p>
              </div>
              <div className="text-sm text-gray-300 mb-6">{user.bio}</div>
              <div className="text-sm text-gray-400">
                加入时间：{user.joinDate}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">统计信息</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">文章</span>
                  <span className="text-white">{user.stats.posts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">教程</span>
                  <span className="text-white">{user.stats.tutorials}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">项目</span>
                  <span className="text-white">{user.stats.jobs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">关注者</span>
                  <span className="text-white">{user.stats.followers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">正在关注</span>
                  <span className="text-white">{user.stats.following}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 主要内容 */}
          <div className="md:col-span-3">
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">最近动态</h3>
                <button className="text-sm text-blue-400 hover:text-blue-300">
                  查看全部
                </button>
              </div>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0"
                  >
                    <div>
                      <p className="text-gray-300">{activity.title}</p>
                      <span className="text-sm text-gray-400">
                        {activity.date}
                      </span>
                    </div>
                    <Link
                      href="#"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      查看
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  我的文章
                </h3>
                <Link
                  href="/posts/new"
                  className="block text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  写文章
                </Link>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  我的项目
                </h3>
                <Link
                  href="/jobs/post"
                  className="block text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  发布项目
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 