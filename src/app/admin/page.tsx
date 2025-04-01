'use client'

import { useState } from 'react'
import {
  UsersIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  CalendarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const stats = [
  { name: '总用户数', value: '1,234', change: '+12%', icon: 'fas fa-users' },
  { name: '总文章数', value: '456', change: '+8%', icon: 'fas fa-file-alt' },
  { name: '总评论数', value: '789', change: '+15%', icon: 'fas fa-comments' },
  { name: '今日访问', value: '123', change: '+5%', icon: 'fas fa-eye' },
]

const recentArticles = [
  {
    id: 1,
    title: '如何成为一名优秀的前端开发者',
    author: '张三',
    date: '2024-03-20',
    views: 1234,
  },
  {
    id: 2,
    title: 'React Hooks 最佳实践',
    author: '李四',
    date: '2024-03-19',
    views: 890,
  },
  {
    id: 3,
    title: 'TypeScript 入门指南',
    author: '王五',
    date: '2024-03-18',
    views: 567,
  },
]

const recentUsers = [
  {
    id: 1,
    name: '张三',
    email: 'zhangsan@example.com',
    joinDate: '2024-03-20',
    role: '普通用户',
  },
  {
    id: 2,
    name: '李四',
    email: 'lisi@example.com',
    joinDate: '2024-03-19',
    role: 'VIP用户',
  },
  {
    id: 3,
    name: '王五',
    email: 'wangwu@example.com',
    joinDate: '2024-03-18',
    role: '普通用户',
  },
]

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('week')

  return (
    <div className="space-y-6">
      {/* 数据统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100">
              <UsersIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">用户总数</h3>
              <p className="text-2xl font-semibold text-gray-900">1,234</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100">
              <DocumentTextIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">文章总数</h3>
              <p className="text-2xl font-semibold text-gray-900">56</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">评论总数</h3>
              <p className="text-2xl font-semibold text-gray-900">89</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100">
              <EyeIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">访问量</h3>
              <p className="text-2xl font-semibold text-gray-900">12,345</p>
            </div>
          </div>
        </div>
      </div>

      {/* 访问趋势图表 */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">访问趋势</h2>
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1 rounded-md text-sm ${
                timeRange === 'week'
                  ? 'bg-primary text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setTimeRange('week')}
            >
              周
            </button>
            <button
              className={`px-3 py-1 rounded-md text-sm ${
                timeRange === 'month'
                  ? 'bg-primary text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setTimeRange('month')}
            >
              月
            </button>
          </div>
        </div>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <ChartBarIcon className="h-12 w-12 text-gray-400" />
          <span className="ml-2 text-gray-500">图表区域</span>
        </div>
      </div>

      {/* 最近文章和用户 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 最近文章 */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">最近文章</h2>
            <button className="text-sm text-primary hover:text-primary-dark">
              查看全部
            </button>
          </div>
          <div className="space-y-4">
            {recentArticles.map((article) => (
              <div
                key={article.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <DocumentTextIcon className="h-5 w-5 text-gray-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {article.author} · {article.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    <EyeIcon className="h-4 w-4 inline-block mr-1" />
                    {article.views}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 最近用户 */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">最近用户</h2>
            <button className="text-sm text-primary hover:text-primary-dark">
              查看全部
            </button>
          </div>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <UsersIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">
                      {user.name}
                    </h3>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  <CalendarIcon className="h-4 w-4 inline-block mr-1" />
                  {user.joinDate}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 