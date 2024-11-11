import { jwtDecode, JwtPayload } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
    role: 'user' | 'admin';
    userId: string;
}

export const verifyToken = (token: string): CustomJwtPayload => {
    return jwtDecode(token);
};