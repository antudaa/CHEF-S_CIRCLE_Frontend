import { create } from 'zustand';
import axios from 'axios';
import Cookies from 'js-cookie';
import { PremiumAccessState, TError } from '@/types';

const token = Cookies.get('accessToken');

const baseURL = process.env.NEXT_PUBLIC_BASE_API;

export const usePremiumAccessStore = create<PremiumAccessState>((set) => ({
    isLoading: false,
    isSuccess: false,
    error: null,

    purchasePremiumAccess: async (startDate, endDate, pricePerMonth) => {
        set({ isLoading: true, isSuccess: false, error: null });
        try {
            const response = await axios.post(`${baseURL}/purchase-premium`, {
                startDate,
                endDate,
                pricePerMonth,
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.status === 200 && response.data.success) {
                set({ isSuccess: true });
                return response.data;
            } else {
                throw new Error(response.data.message || 'Failed to purchase premium access');
            }
        } catch (err) {
            const error = err as TError; // Cast error to TError
            set({ error: error.data?.message || error.message || 'Something went wrong' });
        } finally {
            set({ isLoading: false });
        }
    },
}));
