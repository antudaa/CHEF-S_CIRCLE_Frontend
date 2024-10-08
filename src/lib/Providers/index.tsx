"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import UserProvider from "@/Context/user.provider";

export interface ProvidersProps {
    children: React.ReactNode;
}

const queryClient = new QueryClient();

export function Providers({ children }: ProvidersProps) {

    return (
        <QueryClientProvider client={queryClient} >
            {/* <UserProvider> */}
                {children}
            {/* </UserProvider> */}
        </QueryClientProvider>
    );
}