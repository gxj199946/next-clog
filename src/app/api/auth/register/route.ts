import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'

export async function POST(request: Request) {
  try {
    // 解析请求体
    let name, email, password
    try {
      const body = await request.json()
      name = body.name
      email = body.email
      password = body.password
      console.log('Received registration request for email:', email)
    } catch (e) {
      console.error('Failed to parse request body:', e)
      return NextResponse.json(
        { message: '无效的请求数据' },
        { status: 400 }
      )
    }

    // 验证输入
    if (!name || !email || !password) {
      console.log('Missing required fields')
      return NextResponse.json(
        { message: '请填写所有必填字段' },
        { status: 400 }
      )
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('Invalid email format')
      return NextResponse.json(
        { message: '邮箱格式不正确' },
        { status: 400 }
      )
    }

    // 验证密码长度
    if (password.length < 6) {
      console.log('Password too short')
      return NextResponse.json(
        { message: '密码长度至少为6位' },
        { status: 400 }
      )
    }

    // 检查邮箱是否已存在
    let existingUser
    try {
      console.log('Checking if email exists:', email)
      existingUser = await prisma.user.findUnique({
        where: { email },
      })
      console.log('Email check result:', existingUser ? 'Email exists' : 'Email available')
    } catch (e) {
      console.error('Database error:', e)
      return NextResponse.json(
        { message: '数据库查询错误' },
        { status: 500 }
      )
    }

    if (existingUser) {
      console.log('Email already registered:', email)
      return NextResponse.json(
        { message: '该邮箱已被注册' },
        { status: 400 }
      )
    }

    // 生成随机头像
    const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`
    console.log('Generated avatar URL:', avatar)

    // 创建用户
    try {
      console.log('Creating new user:', email)
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          avatar,
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          avatar: true,
        },
      })
      console.log('User created successfully:', user.id)

      // 生成 token
      const token = sign(
        { userId: user.id },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '7d' }
      )

      return NextResponse.json({
        token,
        user,
      })
    } catch (e) {
      console.error('Error creating user:', e)
      return NextResponse.json(
        { message: '创建用户失败' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: '服务器内部错误' },
      { status: 500 }
    )
  }
} 