'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import LoginModal from '@/components/LoginModal';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  showLoginModal: () => void;
  hideLoginModal: () => void;
  login: (userData: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const showLoginModal = useCallback(() => {
    setIsLoginModalOpen(true);
  }, []);

  const hideLoginModal = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  const login = useCallback((userData: any) => {
    setUser(userData);
    setIsAuthenticated(true);
    hideLoginModal();
  }, [hideLoginModal]);

  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        showLoginModal,
        hideLoginModal,
        login,
        logout,
      }}
    >
      {children}
      <LoginModal isOpen={isLoginModalOpen} onClose={hideLoginModal} />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 