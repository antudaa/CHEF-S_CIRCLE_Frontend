'use client'
import { TError, TUser } from '@/types';
import { message } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.NEXT_PUBLIC_BASE_API;

// Fetch a list of users
export const fetchUsers = async ({ queryKey }: { queryKey: [string, string] }) => {
    const query = queryKey[1];
    const token = Cookies.get('accessToken');
    const response = await axios.get(`${baseURL}/users?${query}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.data.users;
};

// Block a user
export const blockUser = async (userId: string) => {
    const token = Cookies.get('accessToken');
    try {
        const response = await axios.patch(
            `${baseURL}/users/block/${userId}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (err: unknown) {
        if (err && typeof err === 'object' && 'data' in err) {
            const error = err as TError;
            message.error(`${error?.data?.message} Check slot availability.` || 'Failed to block the user!');
        } else {
            message.error('An unknown error occurred.');
        }
    }
};

// Unblock a user
export const unblockUser = async (userId: string) => {
    const token = Cookies.get('accessToken');
    try {
        const response = await axios.patch(
            `${baseURL}/users/unblock/${userId}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (err: unknown) {
        if (err && typeof err === 'object' && 'data' in err) {
            const error = err as TError;
            message.error(`${error?.data?.message} Check slot availability.` || 'Failed to unBlock the user!');
        } else {
            message.error('An unknown error occurred.');
        }
    }
};

export const updateUserProfile = async (userId: string, data: Partial<TUser>) => {
    console.log(userId, data)
    try {
        const response = await axios.patch(`${baseURL}/users/${userId}`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Add auth token
            },
        });
        console.log(response);
        return response.data;
    } catch (err: unknown) {
        if (err && typeof err === 'object' && 'data' in err) {
            const error = err as TError;
            message.error(`${error?.data?.message} Check slot availability.` || 'Failed to update user data!');
        } else {
            message.error('An unknown error occurred.');
        }
    }
};

// Delete a user
export const deleteUser = async (userId: string) => {
    const token = Cookies.get('accessToken');
    try {
        const response = await axios.delete(`${baseURL}/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (err: unknown) {
        if (err && typeof err === 'object' && 'data' in err) {
            const error = err as TError;
            message.error(`${error?.data?.message} Check slot availability.` || 'Failed to delete user!');
        } else {
            message.error('An unknown error occurred.');
        }
    }
};
