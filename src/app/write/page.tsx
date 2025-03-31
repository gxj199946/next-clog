'use client'

import { useState, useRef, ChangeEvent } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { marked } from 'marked'
import dynamic from 'next/dynamic'

// 动态导入 MD 编辑器以避免 SSR 问题
const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
)

export default function WritePage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [content, setContent] = useState('# 开始写作...')
  const [previewUrl, setPreviewUrl] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isPreview, setIsPreview] = useState(false)
  const [showImagePreview, setShowImagePreview] = useState(false)

  // 处理封面图片上传
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
        setCoverImage(file.name)
      }
      reader.readAsDataURL(file)
    }
  }

  // 处理文件拖放
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
        setCoverImage(file.name)
      }
      reader.readAsDataURL(file)
    }
  }

  // 处理 MD 文件导入
  const handleMDImport = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result
        if (typeof text === 'string') {
          setContent(text)
        }
      }
      reader.readAsText(file)
    }
  }

  // 发布文章
  const handlePublish = () => {
    // TODO: 实现文章发布逻辑
    console.log({
      title,
      description,
      coverImage,
      content
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      <main className="container mx-auto px-6 py-8 pt-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-8">创建文章</h1>

            {/* 标题输入 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">文章标题</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="请输入文章标题..."
              />
            </div>

            {/* 简介输入 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">文章简介</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="请输入文章简介..."
                rows={3}
              />
            </div>

            {/* 封面图片上传 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">封面图片</label>
              <div
                className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:border-primary transition-colors"
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                {previewUrl ? (
                  <div className="flex items-center gap-4">
                    <div className="relative w-48 h-32">
                      <Image
                        src={previewUrl}
                        alt="封面预览"
                        fill
                        className="object-cover rounded-lg cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          setShowImagePreview(true)
                        }}
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-gray-500 mb-2">点击图片可以预览原图</p>
                      <p className="text-gray-400 text-sm">建议尺寸: 1920 x 1080</p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setPreviewUrl('')
                          setCoverImage('')
                        }}
                        className="mt-2 text-red-500 text-sm hover:text-red-600"
                      >
                        <i className="fas fa-trash-alt mr-1"></i>
                        删除图片
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="py-8">
                    <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
                    <p className="text-gray-500">点击或拖拽图片到此处上传</p>
                    <p className="text-gray-400 text-sm mt-2">建议尺寸: 1920 x 1080</p>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            {/* 工具栏 */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPreview(!isPreview)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <i className={`fas fa-${isPreview ? 'edit' : 'eye'} mr-2`}></i>
                  {isPreview ? '编辑' : '预览'}
                </button>
                <label className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                  <i className="fas fa-file-import mr-2"></i>
                  导入 MD
                  <input
                    type="file"
                    className="hidden"
                    accept=".md"
                    onChange={handleMDImport}
                  />
                </label>
              </div>
             
            </div>

            {/* Markdown 编辑器 */}
            <div className="min-h-[500px] mb-6">
              {isPreview ? (
                <div 
                  className="prose max-w-none p-6 border border-gray-200 rounded-lg"
                  dangerouslySetInnerHTML={{ __html: marked(content) }}
                />
              ) : (
                <MDEditor
                  value={content}
                  onChange={(val) => setContent(val || '')}
                  height={500}
                  preview="edit"
                />
              )}
            </div>

            {/* 底部按钮 */}
            <div className="flex justify-end space-x-4">
              <button className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                保存草稿
              </button>
              <button
                onClick={handlePublish}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                发布文章
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* 图片预览模态框 */}
      {showImagePreview && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowImagePreview(false)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
            <Image
              src={previewUrl}
              alt="封面预览"
              width={1920}
              height={1080}
              className="w-full h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center"
              onClick={() => setShowImagePreview(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
} 