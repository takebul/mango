"use client";
import logo from "@/assets/mango.png";
import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import { NavbarMenu } from "./NavbarMenu";
import { House, Person } from "@gravity-ui/icons";
import { FaBook } from "react-icons/fa6";
import LogOutPage from "./LogOut";
import { authClient, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const { data, isPending } = useSession();

  const userData = data;
  // const user = data.user;

  const navItems = [
    { icon: House, label: "Home", href: "/" },
    { icon: FaBook, label: "All Books", href: "all-book" },
    { icon: Person, label: "My Profile", href: "profile" },
  ];
  return (
    <div className="shadow">
      <div className="w-auto lg:container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="btn md:hidden ">
            <NavbarMenu />
          </div>
          <Link href={"/"}>
            <Image
              className="w-55"
              src={logo}
              alt="logo"
              height={50}
              width={100}
            />
          </Link>
        </div>
        <ul className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              classname={"flex items-center gap-1"}
              key={item.label}
              href={item.href}
            >
              <item.icon className="size-5 text-muted" />
              {item.label}
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {!userData && (
            <div>
              <Button
                className={
                  "rounded-sm bg-linear-to-r from-emerald-400 from-10% via-amber-300-500 via-30% to-emerald-600 to-90%"
                }
              >
                <Link href={"/signin"}>Login</Link>
              </Button>
            </div>
          )}

          {userData && (
            <div className="flex items-center gap-2 md:gap-4">
              <h2 className="font-semibold truncate text-xs md:text-sm">
                Hi, {userData?.user?.name}{" "}
              </h2>
              <Avatar>
                <Avatar.Image
                  alt={userData?.user?.name}
                  src={userData?.user?.image}
                />
                <Avatar.Fallback>{userData?.user?.name[0]}</Avatar.Fallback>
              </Avatar>
              {/* <Button onClick={async () => await authClient.signOut()}>
                {isPending ? "Loading..." : "Log out"}
              </Button> */}
              <LogOutPage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
