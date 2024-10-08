import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TUser } from '@/types'; // Import your TUser type

interface AuthState {
    isAuthenticated: boolean;
    userData: TUser | null;
    isLoading: boolean; // Add this line
    setIsAuthenticated: (value: boolean) => void;
    setUserData: (userData: TUser) => void;
    setLoading: (loading: boolean) => void; // Add this line
    logout: () => void;
  }
  
  export const useAuthStore = create<AuthState>()(
    persist(
      (set) => ({
        isAuthenticated: false,
        userData: null,
        isLoading: false, // Initialize loading state
        setIsAuthenticated: (value) => set({ isAuthenticated: value }),
        setUserData: (userData) => set({ userData }),
        setLoading: (loading) => set({ isLoading: loading }), // Setter for loading
        logout: () => set({ isAuthenticated: false, userData: null }),
      }),
      {
        name: 'auth-store',
        getStorage: () => localStorage,
      }
    )
  );
  
