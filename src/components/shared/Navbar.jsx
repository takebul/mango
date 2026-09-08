"use client";

import Logo from "./Logo";
import NavLink from "./NavLink";
import Link from "next/link";
import { Avatar } from "@heroui/react";
import { NavbarMenu } from "./NavbarMenu";
import { House, Person } from "@gravity-ui/icons";
import { FaBook } from "react-icons/fa6";
import LogOutPage from "./LogOut";
import { useSession } from "@/lib/auth-client";
import { FiLogIn, FiUser } from "react-icons/fi";

const Navbar = () => {
  const { data: userData, isPending } = useSession();

  const navItems = [
    { icon: House, label: "Home", href: "/" },
    { icon: FaBook, label: "All Books", href: "/all-books" },
    { icon: Person, label: "My Profile", href: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Left branding & mobile trigger */}
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <NavbarMenu />
          </div>
          <Logo size="md" />
        </div>

        {/* Center navigation */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
              <item.icon className="size-4.5 text-slate-500 group-hover:text-amber-500" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Right Auth controls */}
        <div className="flex items-center gap-3">
          {isPending ? (
            <div className="h-9 w-24 bg-slate-100 animate-pulse rounded-lg" />
          ) : !userData ? (
            <div className="flex items-center gap-2">
              <Link
                href="/signin"
                className="hidden sm:inline-flex items-center text-sm font-semibold text-slate-700 hover:text-amber-600 px-3 py-2 rounded-lg transition"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white mango-btn-gradient px-4 py-2 rounded-xl shadow-md shadow-amber-500/20"
              >
                <FiLogIn className="size-4" />
                <span>Get Started</span>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/profile"
                className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full bg-slate-100/80 hover:bg-amber-50 border border-slate-200/60 transition group"
              >
                <Avatar className="w-8 h-8 rounded-full ring-2 ring-amber-400">
                  <Avatar.Image
                    alt={userData?.user?.name || "User"}
                    src={userData?.user?.image || undefined}
                  />
                  <Avatar.Fallback className="bg-amber-500 text-white font-bold text-xs">
                    {userData?.user?.name?.[0]?.toUpperCase() || "U"}
                  </Avatar.Fallback>
                </Avatar>
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-bold text-slate-900 leading-tight group-hover:text-amber-600 transition truncate max-w-[110px]">
                    {userData?.user?.name || "Member"}
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium leading-none">
                    View Profile
                  </p>
                </div>
              </Link>
              <LogOutPage />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

