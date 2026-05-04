import { Bars, House, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import NavLink from "./NavLink";
import { FaBook } from "react-icons/fa6";
import Link from "next/link";

export function NavbarMenu() {
  const navItems = [
    { icon: House, label: "Home", href: "/" },
    { icon: FaBook, label: "All Books", href: "all-book" },
    { icon: Person, label: "My Profile", href: "profile" },
  ];

  return (
    <Drawer>
      <Button
        size="lg"
        className={"rounded-sm shadow-none border-none"}
        variant="outline"
      >
        <Bars />
        Menu
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
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
