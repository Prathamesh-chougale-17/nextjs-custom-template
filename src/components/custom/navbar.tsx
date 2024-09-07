// components/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {routes.map((route) => (
                <NavLink
                  key={route.href}
                  href={route.href}
                  isActive={pathname === route.href}
                >
                  {route.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-100 transition-colors duration-200"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetTitle className="text-lg font-bold mb-2">
                  Navigation Menu
                </SheetTitle>
                <SheetDescription className="text-sm text-gray-500 mb-4">
                  Access the main navigation links for our website.
                </SheetDescription>
                <nav className="flex flex-col space-y-4">
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
          </div>
        </div>
      </div>
    </nav>
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
    : "inline-flex items-center px-1 pt-1 text-sm";
  const activeStyles = isActive
    ? "text-blue-600 border-b-2 border-blue-600"
    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100";

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
