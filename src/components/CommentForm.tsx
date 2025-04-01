'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface CommentFormProps {
  articleId: string;
  onSubmit: (content: string) => void;
}

export default function CommentForm({ articleId, onSubmit }: CommentFormProps) {
  const [content, setContent] = useState('');
  const { isAuthenticated, showLoginModal } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      showLoginModal();
      return;
    }

    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="写下你的评论..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          rows={4}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          发表评论
        </button>
      </div>
    </form>
  );
} 