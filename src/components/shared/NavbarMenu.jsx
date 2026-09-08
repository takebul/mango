"use client";

import { Bars, House, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { FaBook } from "react-icons/fa6";
import Link from "next/link";
import Logo from "./Logo";
import { useSession } from "@/lib/auth-client";
import { FiLogIn, FiUser } from "react-icons/fi";

export function NavbarMenu() {
  const { data: userData } = useSession();

  const navItems = [
    { icon: House, label: "Home", href: "/" },
    { icon: FaBook, label: "All Books", href: "/all-books" },
    { icon: Person, label: "My Profile", href: "/profile" },
  ];

  return (
    <Drawer>
      <Button
        size="md"
        variant="ghost"
        className="p-2 rounded-xl text-slate-700 hover:text-amber-600 hover:bg-amber-50/80"
        aria-label="Open mobile menu"
      >
        <Bars className="size-6" />
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog className="max-w-xs w-full bg-white h-full p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <Logo size="sm" />
                <Drawer.CloseTrigger />
              </div>

              <nav className="flex flex-col gap-2 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3.5 px-4 py-3 rounded-xl text-slate-700 font-semibold text-base hover:text-amber-600 hover:bg-amber-50/70 transition-colors"
                  >
                    <item.icon className="size-5 text-amber-500" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100">
              {userData ? (
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
                    {userData?.user?.name?.[0] || "U"}
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-semibold text-sm text-slate-900 truncate">
                      {userData?.user?.name}
                    </p>
                    <p className="text-xs text-slate-500 truncate">
                      {userData?.user?.email}
                    </p>
                  </div>
                </div>
              ) : (
                <Link
                  href="/signin"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white mango-btn-gradient shadow-md shadow-amber-500/20"
                >
                  <FiLogIn className="size-4" />
                  <span>Sign In</span>
                </Link>
              )}
            </div>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}

