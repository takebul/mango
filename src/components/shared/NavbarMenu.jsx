import { Bars, House, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { FaBook } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/mango.png";

export function NavbarMenu() {
  const navItems = [
    { icon: House, label: "Home", href: "/" },
    { icon: FaBook, label: "All Books", href: "/all-book" },
    { icon: Person, label: "My Profile", href: "/profile" },
  ];

  return (
    <Drawer>
      <Button
        size="lg"
        className={"rounded-sm shadow-none border-none"}
        variant="outline"
      >
        <Bars />
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>
                <Link href={"/"}>
                  <Image
                    className="w-55"
                    src={logo}
                    alt="logo"
                    height={50}
                    width={100}
                  />
                </Link>
              </Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-1 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                  >
                    <item.icon className="size-5 text-muted" />
                    <Link href={item.href}>{item.label}</Link>
                  </button>
                ))}
              </nav>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}
