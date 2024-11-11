import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser, useCurrentToken } from '@/redux/features/auth/authSlice';
import { useLazyGetUserFullDetailQuery } from '@/redux/features/users/userApi';
import { TDecodedAccessToken, TUser } from '@/types';
import { decodeJwt } from 'jose';

const useAuth = () => {
    const reduxUserData = useSelector(selectCurrentUser);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const [userData, setUserData] = useState(reduxUserData);

    useEffect(() => {
        const persistAuth = localStorage.getItem('persist:auth');
        if (persistAuth) {
            try {
                const parsedAuth = JSON.parse(persistAuth);
                const parsedUserData = parsedAuth.user ? JSON.parse(parsedAuth.user) : null;
                setUserData(parsedUserData || reduxUserData);

                setAccessToken(parsedAuth.accessToken || null);
                setRefreshToken(parsedAuth.refreshToken || null);
            } catch (error) {
                console.error("Error parsing auth data:", error);
            }
        }
    }, [reduxUserData]);

    return { userData, accessToken, refreshToken };
};

export default useAuth;

export const useUserData = () => {
    const token = useSelector(useCurrentToken);
    const [userData, setUserData] = useState<TUser | null>(null);
    const [triggerGetUserFullDetail, { data, error, isLoading }] = useLazyGetUserFullDetailQuery();

    // Decode the JWT token to extract user data like userId, etc.
    let payload: TDecodedAccessToken | null = null;
    if (token) {
        try {
            payload = decodeJwt<TDecodedAccessToken>(token);
        } catch (error) {
            console.error("Error decoding the token", error);
        }
    }

    const userId = payload?.userId;

    useEffect(() => {
        // Fetch user data when userId and token are available
        if (userId && token) {
            const fetchUserData = async () => {
                try {
                    await triggerGetUserFullDetail({ id: userId, token });
                } catch (err) {
                    console.error("Error fetching user data:", err);
                }
            };

            fetchUserData();
        }
    }, [userId, token, triggerGetUserFullDetail]);

    // Set user data when it's fetched successfully
    useEffect(() => {
        if (data) {
            setUserData(data.data);
        }
    }, [data]);

    return {
        userData,
        isLoading,
        error,
    };
};
