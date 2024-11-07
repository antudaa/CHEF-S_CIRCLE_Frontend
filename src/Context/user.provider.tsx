"use client"
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import { IUser } from "../types/index";
import { getCurrentUser } from "../services/AuthService";

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

export interface DecodedUser {
    _id: string; // Ensure this is not optional
    email: string;
    name: string;
    profilePicture?: string;
    role: 'user' | 'admin';
    // Any other fields in DecodedUser
}

interface IUserProviderValues {
    user: IUser | null;
    isLoading: boolean;
    setUser: (user: IUser | null) => void;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleUser = async () => {
        const user = await getCurrentUser();
    
        // Cast user to IUser if DecodedUser is similar to IUser
        setUser(user as IUser);
        setIsLoading(false);
    };

    useEffect(() => {
        handleUser();
    }, [isLoading]);

    return (
        <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error("useUser must be used within the UserProvider context");
    }

    return context;
};

export default UserProvider;