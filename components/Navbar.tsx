"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { integralCF } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn("w-full fixed z-50 transition-shadow", {
        "bg-white/50 backdrop-blur-md border-b": isScrolled,
      })}
    >
      {/* Top Banner */}
      <div
        className={cn(
          "relative bg-primary h-10 text-white transition-all duration-300 ease-in text-center py-3 px-4 text-[10px] md:text-sm",
          { "h-0 p-0 overflow-hidden": isScrolled }
        )}
      >
        <p>
          Sign up and get 20% off to your first order.{" "}
          <Link href="#" className="underline font-medium">
            Sign Up Now
          </Link>
        </p>
      </div>

      {/* Main Navbar */}
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="size-6" />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "flex items-center justify-center gap-4 text-xl md:text-2xl font-semibold",
              integralCF.className
            )}
          >
            <Image alt="Phool Buttey Nepal Logo" src="/logo.png" width={50} height={50} priority />
            <span className="bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
              Phool Buttey Nepal.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/products" className="hover:text-muted-foreground">
              Shop
            </Link>
            <Link href="#" className="hover:text-muted-foreground">
              On Sale
            </Link>
            <Link href="#" className="hover:text-muted-foreground">
              New Arrivals
            </Link>
            <Link href="#" className="hover:text-muted-foreground">
              About
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search for products..."
                className="w-full py-3 pl-12 pr-4 bg-muted border rounded-full focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <button className="lg:hidden">
              <Search className="size-6" />
            </button>
            <Link href="#" className="hover:bg-muted rounded-full p-3">
              <ShoppingCart className="size-5" />
            </Link>
            <Link href="#" className="hover:bg-muted rounded-full p-3">
              <User className="size-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute inset-0 bg-background transform transition-transform duration-300 lg:hidden",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="p-4">
          <button
            className="absolute right-4 top-4 p-2 text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            X
          </button>
          <nav className="mt-12 space-y-6">
            <Link
              href="/products"
              className="block text-lg hover:text-muted-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="#"
              className="block text-lg hover:text-muted-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              On Sale
            </Link>
            <Link
              href="#"
              className="block text-lg hover:text-muted-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </Link>
            <Link
              href="/products"
              className="block text-lg hover:text-muted-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Brands
            </Link>
          </nav>
          {/* Mobile Search */}
          <div className="mt-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for products..."
                className="w-full py-2 pl-10 pr-4 bg-muted rounded-lg focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
