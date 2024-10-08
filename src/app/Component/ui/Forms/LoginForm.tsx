"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/Component/ui/Forms/input";
import { Label } from "@/app/Component/ui/Forms/label";
import { cn } from "@/lib/utils";
import { loginValidationSchema } from "@/schemas/login.schema";
import { z } from "zod";
import Link from "next/link";
import { useLoginHook } from "@/hook/auth.hook";
import LoadingButton from "../Buttons/LoadingButton";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandInstagram,
  IconProps,
} from "@tabler/icons-react";

// Define types for form input
type LoginFormData = z.infer<typeof loginValidationSchema>;

// LoginForm Component
const LoginForm = () => {

  const { mutate: handleUserLogin, isPending } = useLoginHook();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    handleUserLogin(data);
  };

  return (
    <div className="max-w-2xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white my-10">
      <h2 className="font-bold text-xl text-neutral-800 text-center mx-auto">
        Welcome to {`CHEF'S`} CIRCLE
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 text-center mx-auto">
        Login to aceternity if you can because we don&apos;t have a login flow yet
      </p>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            {...register("email")}
            id="email"
            name="email"
            placeholder="antu.programmer@gmail.com"
            type="email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            {...register("password")}
            id="password"
            name="password"
            placeholder="••••••••"
            type="password"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password.message}</span>
          )}
        </LabelInputContainer>

        {
          isPending ? <LoadingButton /> : (
            <button className="bg-gradient-to-br relative group/btn from-black to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]" type="submit">
              Sign up &rarr;
              <BottomGradient />
            </button>
          )
        }

        <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-4 h-[1px] w-full" />
        <p className="text-sm text-center py-4">{`Don't have an account.`}<Link className="text-indigo-500 px-2" href='/register'>Register</Link></p>
        {/* Social Buttons */}
        <div className="flex flex-col space-y-4">
          <SocialButton icon={IconBrandGithub} label="GitHub" />
          <SocialButton icon={IconBrandGoogle} label="Google" />
          <SocialButton icon={IconBrandInstagram} label="Instagram" />
        </div>
      </form>
    </div>
  );
};

// SocialButton Component
const SocialButton = ({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<IconProps>; // Use IconProps directly from Tabler Icons
  label: string;
}) => (
  <button
    className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 border border-indigo-200"
    type="button"
  >
    <Icon className="h-4 w-4 text-neutral-800" />
    <span className="text-neutral-700 text-sm">{label}</span>
    <BottomGradient />
  </button>
);

// BottomGradient Component
const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

// LabelInputContainer Component
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);

export default LoginForm;
