"use client";

import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";

const Logo = ({
  variant = "light", // "light" (for light backgrounds) | "dark" (for dark backgrounds like Footer)
  size = "md", // "sm" | "md" | "lg"
  showText = true,
  href = "/",
  className = "",
}) => {
  // Dimensions for pixel-perfect balance
  const iconSizes = {
    sm: "size-8.5",
    md: "size-10.5",
    lg: "size-13",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
  };

  const badgeSizes = {
    sm: "text-[9px] px-1.5 py-0.2 tracking-wider",
    md: "text-[10px] px-2 py-0.5 tracking-widest",
    lg: "text-xs px-2.5 py-0.5 tracking-widest",
  };

  const isDark = variant === "dark";

  const content = (
    <div
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none transition-all group ${className}`}
    >
      {/* 3D Mango Books Emblem Frame */}
      <div
        className={`relative shrink-0 rounded-2xl p-0.5 bg-gradient-to-tr from-amber-400/40 via-orange-300/30 to-amber-200/50 shadow-md shadow-amber-500/15 group-hover:shadow-lg group-hover:shadow-amber-500/30 group-hover:scale-105 transition-all duration-300 ${
          iconSizes[size] || iconSizes.md
        }`}
      >
        <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-white shadow-inner">
          <Image
            src={logoImg}
            alt="Mango Books"
            fill
            priority
            sizes="64px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Brand Name Wordmark & Accent Badge */}
      {showText && (
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span
            className={`font-black tracking-tight leading-none ${
              textSizes[size] || textSizes.md
            } ${
              isDark
                ? "text-white group-hover:text-amber-300"
                : "text-slate-900 group-hover:text-amber-600"
            } transition-colors duration-200`}
          >
            Mango
          </span>
          <span
            className={`font-black uppercase rounded-lg shadow-xs leading-tight ${
              badgeSizes[size] || badgeSizes.md
            } ${
              isDark
                ? "bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-black shadow-amber-400/20"
                : "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-amber-500/25"
            } group-hover:brightness-105 transition-all duration-200`}
          >
            Books
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default Logo;
