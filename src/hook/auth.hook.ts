import { loginUser, registerUser } from "@/services/AuthService"
import { ILogin, IUser } from "@/types"
import { useAuthStore } from "@/zustand/store/authStore"
import { useMutation } from "@tanstack/react-query"
import { message } from "antd"
import { useRouter } from "next/navigation"
import { FieldValues } from "react-hook-form"

export const useUserRegistration = () => {

    const router = useRouter();

    return useMutation<IUser, Error, FieldValues>({
        mutationKey: ["USER_REGISTRATION"],
        mutationFn: async (userData) => await registerUser(userData),
        onSuccess: () => {
            router.push('/login');
            message.success("User Account created successful.");
        },
        onError: (error) => {
            message.error(error.message)
        }
    })
}


export const useLoginHook = () => {
    const router = useRouter();
    const { setIsAuthenticated, setUserData } = useAuthStore(); // Get methods from Zustand

    return useMutation<ILogin, Error, FieldValues>({
        mutationKey: ["USER_LOGIN"],
        mutationFn: async (loginData) => await loginUser(loginData),
        onSuccess: (data) => {
            setIsAuthenticated(true);
            console.log("Login success, user data:", data?.data?.user); // Add a log here
            setUserData(data?.data?.user); // Make sure this is setting the correct user data
            router.push('/');
            message.success("Successfully logged in.");
        },
        onError: (error) => {
            console.log(error);
            message.error(`Something went wrong. Please check your credentials.`);
        }
    });
};
