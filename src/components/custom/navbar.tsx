// components/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Package2, Search } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Input } from "../ui/input";
import ModeToggle from "./darkmode";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {routes.map((route) => (
          <NavLink
            key={route.href}
            href={route.href}
            isActive={pathname === route.href}
          >
            {route.label}
          </NavLink>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle className="ml-3 mb-3">
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </SheetTitle>
          <SheetDescription></SheetDescription>
          <nav className="flex flex-col gap-4">
            {routes.map((route) => (
              <NavLink
                key={route.href}
                href={route.href}
                isActive={pathname === route.href}
                mobile
              >
                {route.label}
              </NavLink>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  isActive,
  mobile,
}) => {
  const baseStyles = "font-medium transition-colors duration-200";
  const mobileStyles = mobile
    ? "block text-lg py-2 px-4 rounded-md"
    : "inline-flex items-center px-3 py-2 rounded-md text-sm";
  const activeStyles = isActive
    ? "bg-primary/10 text-primary"
    : "text-foreground/60 hover:text-foreground hover:bg-accent";

  return (
    <Link
      href={href}
      className={`${baseStyles} ${mobileStyles} ${activeStyles}`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
