import logo from "@/assets/mango.png";
import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
import { Button } from "@heroui/react";

const Navbar = () => {
  return (
    <div className="shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image
            className="w-55"
            src={logo}
            alt="logo"
            height={50}
            width={100}
          />
        </Link>
        <ul className="flex gap-4">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-books"}>All Books</NavLink>
          </li>
          <li>
            <NavLink href={"/profile"}>My Profile</NavLink>
          </li>
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
