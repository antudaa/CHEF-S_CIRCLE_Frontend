"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Mail, Loader } from "lucide-react";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useLazyGetUserFullDetailQuery } from "@/redux/features/users/userApi";
import { message } from "antd";
import { TError } from "@/types";
import { verifyToken } from "@/utils/verifyToken";
import { setUser } from "@/redux/features/auth/authSlice";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function SignInForm() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const [triggerGetUserFullDetail] = useLazyGetUserFullDetailQuery();

    // Initialize react-hook-form with the Zod schema
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data: LoginFormValues) => {
        try {
            const res = await login(data).unwrap();
            const userData = verifyToken(res.data.accessToken);
            const id = userData.userId;
            const token = res.data.accessToken;

            const user = await triggerGetUserFullDetail({ id, token }).unwrap();
            dispatch(setUser({
                user: user?.data,
                accessToken: res?.data?.accessToken,
                refreshToken: res?.data?.refreshToken,
            }))

            message.success('Login Successfull😎');
            router.push('/');
        } catch (err: unknown) {
            if (err && typeof err === 'object' && 'data' in err) {
                const error = err as TError;
                message.error(`${error?.data?.message}` || 'Login failed! Please try again.');
            } else {
                message.error('An unknown error occurred.');
            }
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="antu.programmer@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">
                    {
                        isLoading ?
                            <Loader className="mr-2" /> :
                            <Mail className="mr-2" />
                    }
                    {
                        isLoading ?
                            'Loading' :
                            'Login with Email'
                    }
                </Button>
            </form>
        </Form>
    )

}