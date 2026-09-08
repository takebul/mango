"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children, classname = "" }) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <Link
      href={href}
      className={`relative flex items-center gap-2 px-3.5 py-2 text-sm font-semibold transition-all duration-200 rounded-lg ${
        isActive
          ? "text-amber-600 bg-amber-50/80 font-bold"
          : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/80"
      } ${classname}`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
      )}
    </Link>
  );
};

export default NavLink;

