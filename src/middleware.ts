import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { decodeJwt } from 'jose';

// Define role-based access routes
const roleBasedRoutes: {
  [key: string]: RegExp[];
} = {
  user: [/^\/user/],
  admin: [/^\/admin/],
};

// Routes that are public and don't require authentication
const AuthRoutes = ["/login", "/register"];

// Middleware to handle authentication and role-based routing
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Retrieve the tokens from cookies
  const accessToken = request.cookies.get('accessToken');
  let user = null;

  // Decode the accessToken to extract user info
  if (accessToken) {
    try {
      // Decode the JWT without verifying
      const payload = decodeJwt(accessToken.value);
      user = payload as { role: string; userId: string };
    } catch (error) {
      console.error("Error decoding accessToken", error);
    }
  }

  // If no user is logged in, allow access to AuthRoutes or redirect to login
  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Check role-based access for authenticated users
  if (user.role && roleBasedRoutes[user.role]) {
    const routes = roleBasedRoutes[user.role];

    // Allow access if the pathname matches the user's role-based routes
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  // If the user does not have permission, redirect to the home page
  return NextResponse.redirect(new URL("/", request.url));
}

// Define the paths the middleware should apply to
export const config = {
  matcher: ["/user", "/user/:page*", "/admin/:page*", "/login", "/register"],
};
