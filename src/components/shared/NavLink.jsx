"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children, classname }) => {
  const pathName = usePathname();

  const isActive = href === pathName;

  return (
    <div>
      <Link
        href={href}
        className={`"text-lg font-bold" ${isActive ? "border-b-2 border-green-500 pb-0.5 " : ""}  ${classname}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
