"use client";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { TUser } from '@/types';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface DecodedToken {
  userId: string;
}

interface AuthState {
  isAuthenticated: boolean;
  userData: TUser | null;
  isLoading: boolean;
  setIsAuthenticated: (value: boolean) => void;
  setUserData: (userData: TUser) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
  updateUserData: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userData: null,
      isLoading: true,

      setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
      setUserData: (userData: TUser) => {
        if (typeof window !== 'undefined') {
          Cookies.set('userData', JSON.stringify(userData));
          set({ userData });
        }
      },
      setLoading: (loading: boolean) => set({ isLoading: loading }),

      logout: () => {
        if (typeof window !== 'undefined') {
          Cookies.remove('accessToken');
          Cookies.remove('refreshToken');
          Cookies.remove('userData');
          Cookies.remove('auth-store');
          set({ isAuthenticated: false, userData: null });

          window.location.reload();
        }
      },

      updateUserData: async () => {
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
          try {
            const decodedToken = jwtDecode<DecodedToken>(accessToken);
            const freshUserData = await queryClient.fetchQuery({
              queryKey: ['user', decodedToken.userId],
              queryFn: () => fetchUserData(decodedToken.userId),
            });

            if (freshUserData) {
              set({ userData: freshUserData });
              Cookies.set('userData', JSON.stringify(freshUserData));
            }
          } catch (error) {
            console.error("Error updating user data:", error);
          }
        }
      }
    }),
    {
      name: 'auth-store',
      storage: {
        getItem: (key) => {
          const item = Cookies.get(key);
          return item ? JSON.parse(item) : null;
        },
        setItem: (key, value) => Cookies.set(key, JSON.stringify(value)),
        removeItem: (key) => Cookies.remove(key),
      },
    }
  )
);

const fetchUserData = async (userId: string): Promise<TUser> => {
  const response = await fetch(`/api/users/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return await response.json() as TUser;
};
