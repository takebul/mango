"use client";

import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, Suspense } from "react";
import { toast } from "react-toastify";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

const SignInForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setIsLoading(true);
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "Failed to sign in. Please check your credentials.");
        return;
      }

      if (data) {
        toast.success("Welcome back! Signing you in...");
        router.push(callbackUrl);
        router.refresh();
      }
    } catch {
      toast.error("An unexpected error occurred during sign in.");
    } finally {
      setIsLoading(false);
    }
  };

  const signInGoogle = async () => {
    try {
      setIsGoogleLoading(true);
      await authClient.signIn.social({
        provider: "google",
        callbackURL: callbackUrl,
      });
    } catch {
      toast.error("Google sign-in could not be initiated.");
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4.5rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-amber-50/20 to-slate-100">
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-200/50 p-8 sm:p-10 transition-all">
        {/* Logo & Heading */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo size="lg" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
            Sign in to access your borrowed books and reader profile
          </p>
        </div>

        {/* Google Sign-in */}
        <button
          type="button"
          onClick={signInGoogle}
          disabled={isGoogleLoading}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition shadow-xs hover:border-slate-300"
        >
          <Icon icon="devicon:google" className="size-5" />
          <span>{isGoogleLoading ? "Connecting..." : "Continue with Google"}</span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            or with email
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                <FiMail className="size-4.5" />
              </div>
              <input
                required
                name="email"
                type="email"
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Password
              </label>
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                <FiLock className="size-4.5" />
              </div>
              <input
                required
                name="password"
                type={isVisible ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-10 pr-11 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition"
              />
              <button
                type="button"
                aria-label={isVisible ? "Hide password" : "Show password"}
                onClick={() => setIsVisible(!isVisible)}
                className="absolute right-3.5 text-slate-400 hover:text-slate-600 p-1 rounded-md"
              >
                {isVisible ? (
                  <Eye className="size-4.5" />
                ) : (
                  <EyeSlash className="size-4.5" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white mango-btn-gradient shadow-lg shadow-amber-500/25 transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>{isLoading ? "Signing in..." : "Sign In to Mango"}</span>
            <FiArrowRight className="size-4" />
          </button>
        </form>

        {/* Footer link */}
        <p className="text-center text-xs sm:text-sm text-slate-500 mt-6 pt-4 border-t border-slate-100">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-bold text-amber-600 hover:text-amber-700 hover:underline"
          >
            Create free account
          </Link>
        </p>
      </div>
    </div>
  );
};

const SignInPage = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-[calc(100vh-4.5rem)] flex items-center justify-center">
          <div className="size-8 border-3 border-amber-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <SignInForm />
    </Suspense>
  );
};

export default SignInPage;

