import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
  const isApiRoute = request.nextUrl.pathname.startsWith('/api')
  const isPublicRoute = request.nextUrl.pathname === '/' || 
                       request.nextUrl.pathname.startsWith('/_next') ||
                       request.nextUrl.pathname.startsWith('/public')
  const isAuthApi = request.nextUrl.pathname.startsWith('/api/auth')

  // 如果是认证相关的 API 路由，直接放行
  if (isAuthApi) {
    return NextResponse.next()
  }

  // 如果是其他 API 路由，检查认证
  if (isApiRoute) {
    if (!token) {
      return NextResponse.json({ error: '未授权' }, { status: 401 })
    }
  }

  // 如果已登录且访问登录/注册页，重定向到首页
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // 如果未登录且访问需要认证的页面，重定向到登录页
  // 修改这里，只有特定页面需要认证
  const protectedRoutes = ['/profile', '/dashboard']
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  )

  if (!token && isProtectedRoute) {
    const loginUrl = new URL('/auth/login', request.url)
    loginUrl.searchParams.set('from', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  // 设置响应头，将 token 存储到 cookie 中
  const response = NextResponse.next()
  if (token) {
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径除了:
     * - _next/static (静态文件)
     * - _next/image (图片优化)
     * - favicon.ico (浏览器图标)
     * - public (公共文件)
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
} 