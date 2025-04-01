'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: 实际的登录 API 调用
      const mockUser = {
        id: '1',
        name: formData.username,
        email: `${formData.username}@example.com`,
        role: 'user',
        avatar: '/default-avatar.png'
      };
      
      login(mockUser);
      onClose(); // 登录成功后关闭弹出框
    } catch (error) {
      console.error('登录失败:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* 背景遮罩 */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* 模态框 */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
          {/* 关闭按钮 */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* 登录表单 */}
          <div className="p-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">登录您的账号</h2>
              <p className="mt-2 text-sm text-gray-600">
                或者{' '}
                <Link
                  href="/auth/register"
                  className="text-primary hover:text-primary-dark"
                >
                  注册新账号
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  用户名
                </label>
                <input
                  id="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  密码
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.remember}
                    onChange={(e) =>
                      setFormData({ ...formData, remember: e.target.checked })
                    }
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="ml-2 text-sm text-gray-600">记住我</span>
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-primary hover:text-primary-dark"
                >
                  忘记密码？
                </Link>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                登录
              </button>

              {/* 社交登录 */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      其他登录方式
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    className="flex justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <svg
                      className="h-5 w-5 text-green-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8.07 16.57C12.35 16.57 16 13.24 16 9.28C16 5.31 12.35 2 8.07 2C3.79 2 0.14 5.31 0.14 9.28C0.14 13.24 3.79 16.57 8.07 16.57Z" />
                      <path d="M16.41 15.44C16.36 15.39 16.31 15.34 16.26 15.29C15.75 14.84 15.17 14.45 14.54 14.12C14.51 14.11 14.47 14.1 14.44 14.09C14.41 14.08 14.38 14.08 14.35 14.08C14.32 14.08 14.29 14.09 14.26 14.1C14.23 14.11 14.2 14.13 14.18 14.15C13.96 14.41 13.71 14.65 13.43 14.85C13.37 14.9 13.3 14.94 13.23 14.97C13.16 15 13.08 15.01 13 15.01C12.93 15.01 12.85 15 12.78 14.97C12.71 14.94 12.64 14.9 12.58 14.85C11.94 14.41 11.37 13.87 10.89 13.25C10.42 12.63 10.05 11.93 9.81 11.19C9.77 11.06 9.77 10.92 9.8 10.79C9.84 10.66 9.91 10.54 10.01 10.45C10.22 10.24 10.46 10.06 10.72 9.92C10.77 9.89 10.81 9.85 10.84 9.81C10.87 9.77 10.89 9.72 10.9 9.67C10.91 9.62 10.91 9.57 10.9 9.52C10.89 9.47 10.87 9.42 10.84 9.38C10.6 8.95 10.33 8.53 10.04 8.13L10 8.07C9.93 7.98 9.85 7.9 9.76 7.83C9.67 7.76 9.57 7.71 9.46 7.67C9.36 7.63 9.25 7.61 9.14 7.61C9.03 7.61 8.92 7.63 8.82 7.67C8.58 7.77 8.35 7.89 8.13 8.04C7.91 8.19 7.71 8.36 7.53 8.55C7.38 8.71 7.26 8.9 7.18 9.11C7.1 9.32 7.06 9.54 7.07 9.76C7.07 10.06 7.11 10.35 7.18 10.64C7.38 11.5 7.71 12.33 8.16 13.1C8.61 13.87 9.17 14.58 9.83 15.2C10.49 15.82 11.23 16.35 12.03 16.77C12.83 17.19 13.68 17.5 14.56 17.69C14.86 17.77 15.17 17.81 15.48 17.82C15.71 17.83 15.94 17.8 16.16 17.73C16.38 17.66 16.58 17.55 16.75 17.4C16.95 17.23 17.13 17.04 17.29 16.83C17.45 16.62 17.58 16.4 17.69 16.16C17.73 16.06 17.75 15.95 17.75 15.84C17.75 15.73 17.73 15.62 17.69 15.52C17.65 15.41 17.6 15.31 17.53 15.22C17.46 15.13 17.38 15.05 17.29 14.98L16.41 15.44Z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="flex justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="flex justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <svg
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 