import logo from "@/assets/mango.png";
import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
import { Button } from "@heroui/react";
import { NavbarMenu } from "./NavbarMenu";
import { House, Person } from "@gravity-ui/icons";
import { FaBook } from "react-icons/fa6";

const Navbar = () => {
  const navItems = [
    { icon: House, label: "Home", href: "/" },
    { icon: FaBook, label: "All Books", href: "all-book" },
    { icon: Person, label: "My Profile", href: "profile" },
  ];
  return (
    <div className="shadow">
      <div className="container mx-auto flex justify-between items-center">
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
        <ul className="flex items-center gap-2">
          <li>
            <Button
              className={
                "rounded-sm bg-linear-to-r from-emerald-400 from-10% via-amber-300-500 via-30% to-emerald-600 to-90%"
              }
            >
              <Link href={"/"}>Login</Link>
            </Button>
          </li>
          <li>
            <Button className={"rounded-sm"} variant="danger">
              <Link href={"/"}>Logout</Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
