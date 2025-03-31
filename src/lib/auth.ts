import { cookies } from 'next/headers'

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'user' | 'admin'
}

export async function getToken() {
  const cookieStore = await cookies()
  return cookieStore.get('token')?.value
}

export async function getUser(): Promise<User | null> {
  const cookieStore = await cookies()
  const userStr = cookieStore.get('user')?.value
  if (!userStr) return null
  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}

export async function isAuthenticated() {
  return !!await getToken()
}

export async function isAdmin() {
  const user = await getUser()
  return user?.role === 'admin'
}

export async function requireAuth() {
  if (!await isAuthenticated()) {
    throw new Error('未授权')
  }
}

export async function requireAdmin() {
  if (!await isAdmin()) {
    throw new Error('需要管理员权限')
  }
} 