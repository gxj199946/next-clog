'use client'

import { useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'

export default function LoginPage() {
  const { showLoginModal } = useAuth()

  useEffect(() => {
    showLoginModal()
  }, [showLoginModal])

  return null
} 