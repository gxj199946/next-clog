'use client'

import { useState } from 'react'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: '我的博客',
    siteDescription: '分享技术，记录生活',
    siteKeywords: '技术,博客,编程,开发',
    allowComments: true,
    requireCommentApproval: true,
    allowUserRegistration: true,
    emailNotifications: true,
    maintenanceMode: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const target = e.target as HTMLInputElement
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? target.checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 保存设置到后端
    console.log('保存设置:', settings)
  }

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">系统设置</h1>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          保存设置
        </button>
      </div>

      {/* 设置表单 */}
      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 基本设置 */}
          <div>
            <h2 className="text-lg font-medium mb-4">基本设置</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  网站名称
                </label>
                <input
                  type="text"
                  name="siteName"
                  value={settings.siteName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  网站描述
                </label>
                <textarea
                  name="siteDescription"
                  value={settings.siteDescription}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  网站关键词
                </label>
                <input
                  type="text"
                  name="siteKeywords"
                  value={settings.siteKeywords}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* 评论设置 */}
          <div>
            <h2 className="text-lg font-medium mb-4">评论设置</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="allowComments"
                  checked={settings.allowComments}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  允许评论
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="requireCommentApproval"
                  checked={settings.requireCommentApproval}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  评论需要审核
                </label>
              </div>
            </div>
          </div>

          {/* 用户设置 */}
          <div>
            <h2 className="text-lg font-medium mb-4">用户设置</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="allowUserRegistration"
                  checked={settings.allowUserRegistration}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  允许用户注册
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={settings.emailNotifications}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  启用邮件通知
                </label>
              </div>
            </div>
          </div>

          {/* 系统设置 */}
          <div>
            <h2 className="text-lg font-medium mb-4">系统设置</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="maintenanceMode"
                  checked={settings.maintenanceMode}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  维护模式
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
} 