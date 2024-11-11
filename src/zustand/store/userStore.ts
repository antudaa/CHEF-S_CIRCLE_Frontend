import { TUser } from '@/types';
import { create } from 'zustand';

interface UserState {
    data: TUser[];
    userData: TUser[];
    setData: (data: TUser[]) => void;
    setUserData: (data: TUser[]) => void;
    blockUser: (id: string) => void;
    // updateUser: (user: TUser) => void;
    unblockUser: (id: string) => void;
    removeUser: (id: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
    data: [],
    userData: [],
    setData: (data) => set({ data }),
    setUserData: (data) => set({ userData: data }),
    blockUser: (id) =>
        set((state) => ({
            userData: state.userData.map((user) =>
                user._id === id ? { ...user, status: 'blocked' } : user
            ),
            data: state.data.map((user) =>
                user._id === id ? { ...user, status: 'blocked' } : user
            ),
        })),
    unblockUser: (id) =>
        set((state) => ({
            userData: state.userData.map((user) =>
                user._id === id ? { ...user, status: 'active' } : user
            ),
            data: state.data.map((user) =>
                user._id === id ? { ...user, status: 'active' } : user
            ),
        })),
    removeUser: (id) =>
        set((state) => ({
            userData: state.userData.filter((user) => user._id !== id),
            data: state.data.filter((user) => user._id !== id),
        })),
}));