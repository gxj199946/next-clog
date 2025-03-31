'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  name: string
  email: string
  role: string
  avatar?: string
}

interface LoginResponse {
  success: boolean
  message?: string
  error?: string
  token?: string
  user?: User
}

export function useAuth() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const login = async (user: User, token: string) => {
    try {
      // 保存用户信息到 localStorage
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      
      // 重定向到首页
      router.replace('/')
      return true
    } catch (err) {
      console.error('登录错误:', err)
      setError(err instanceof Error ? err.message : '登录过程中发生错误')
      return false
    }
  }

  const register = async (name: string, email: string, password: string) => {
    setError(null)
    setLoading(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || '注册失败')
      }

      // 注册成功后自动登录
      return await login(data.user!, data.token!)
    } catch (err) {
      console.error('注册错误:', err)
      setError(err instanceof Error ? err.message : '注册过程中发生错误')
      return false
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.replace('/auth/login')
  }

  const getUser = (): User | null => {
    if (typeof window === 'undefined') return null
    const userStr = localStorage.getItem('user')
    return userStr ? JSON.parse(userStr) : null
  }

  const isAuthenticated = (): boolean => {
    if (typeof window === 'undefined') return false
    return !!localStorage.getItem('token')
  }

  return {
    login,
    register,
    logout,
    getUser,
    isAuthenticated,
    error,
    loading,
  }
} 