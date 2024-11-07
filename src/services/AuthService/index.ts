"use server";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { axiosInstance } from "@/lib/AxiosInstance";
import { TError, TUser } from "@/types";
import { message } from "antd";
type DecodedUser = Pick<TUser, "_id" | "name" | "email" | "role" | "status" | "profileImage">;

export const registerUser = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/auth/register-user", userData);
        return data;
    } catch (err: unknown) {
        if (err && typeof err === 'object' && 'data' in err) {
            const error = err as TError;
            message.error(`${error?.data?.message} Check slot availability.` || 'Registration failed.');
        } else {
            message.error('An unknown error occurred.');
        }
    }
};

export const loginUser = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/auth/login", userData);
        if (data.success) {
            cookies().set("accessToken", data.data.accessToken);
            cookies().set("refreshToken", data.data.refreshToken);
        }
        return data;
    } catch (err: unknown) {
        if (err && typeof err === 'object' && 'data' in err) {
            const error = err as TError;
            message.error(`${error?.data?.message} Check slot availability.` || 'Login failed.');
        } else {
            message.error('An unknown error occurred.');
        }
    }
};

export const logout = (): void => {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
};

export const getCurrentUser = async (): Promise<DecodedUser | null> => {
    const accessToken = cookies().get("accessToken")?.value;
    if (accessToken) {
        const decodedToken = jwtDecode<{ _id: string; name: string; email: string; role: string; status: string; profileImage: string }>(accessToken);

        return {
            _id: decodedToken._id,
            name: decodedToken.name,
            email: decodedToken.email,
            role: decodedToken.role as "user" | "admin", // Type assertion
            status: decodedToken.status as "active" | "deactivated" | "suspended" | "blocked", // Type assertion
            profileImage: decodedToken.profileImage,
        };
    }
    return null;
};