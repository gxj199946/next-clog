'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function WriteButton() {
  const router = useRouter();
  const { isAuthenticated, showLoginModal } = useAuth();

  const handleClick = () => {
    if (!isAuthenticated) {
      showLoginModal();
      return;
    }
    router.push('/write');
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      写文章
    </button>
  );
} 