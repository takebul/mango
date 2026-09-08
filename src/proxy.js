import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function proxy(request) {
  const sessionCookie = getSessionCookie(request);
  const { pathname, search } = request.nextUrl;

  const isAuthRoute = pathname.startsWith("/signin") || pathname.startsWith("/signup");
  const isProtectedRoute = pathname.startsWith("/profile");

  // If user is already authenticated and visits signin/signup, redirect to home or callback
  if (sessionCookie && isAuthRoute) {
    const callbackUrl = request.nextUrl.searchParams.get("callbackUrl") || "/";
    return NextResponse.redirect(new URL(callbackUrl, request.url));
  }

  // If user is not authenticated and visits protected route, redirect to signin with callbackUrl
  if (!sessionCookie && isProtectedRoute) {
    const signInUrl = new URL("/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", `${pathname}${search}`);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/signin", "/signup"],
};
