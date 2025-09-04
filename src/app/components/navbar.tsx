"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Tent,
  Mountain,
  LandPlot,
  ShoppingBag,
  Info,
  Phone,
  Home,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "/", icon: Info },
    { name: "Stay", href: "/stay", icon: Tent },
    { name: "Activities", href: "/activities", icon: Mountain },
    { name: "Culture", href: "/culture", icon: LandPlot },
    { name: "Campground", href: "/campground", icon: Home },
    { name: "Goodies", href: "/goodies", icon: ShoppingBag },
    {
      name: "Contact",
      href: "https://wa.me/6285179856864?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Terrae.",
      icon: Phone,
      external: true,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <header
        className="absolute top-0 left-0 w-full z-50 
        bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-md 
        md:bg-transparent md:backdrop-blur-0"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Logo_1.png"
              alt="Terrae Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </Link>

          {/* Center Links (Desktop Only) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-amber-600 transition font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact (Desktop Only) */}
          <div className="hidden md:flex">
            <a
              href={navLinks[6].href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-600 transition font-semibold"
            >
              Contact
            </a>
          </div>

          {/* Mobile Burger Menu */}
          <div className="md:hidden">
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-white">
                  <Menu className="h-6 w-6" />
                </button>
              </DialogTrigger>

              <DialogContent
                className="p-0 bg-black/30 backdrop-blur-xl border-0 shadow-none w-full max-w-full"
                showCloseButton={false}
              >
                <VisuallyHidden>
                  <DialogTitle>Mobile Navigation</DialogTitle>
                </VisuallyHidden>

                {/* Mobile Menu Links (as buttons) */}
                <div className="flex flex-col items-center space-y-4 py-8 px-6">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    if (link.external) {
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-3 px-4 py-3 
                            rounded-md bg-amber-600 text-white font-medium 
                            hover:bg-amber-700 transition"
                        >
                          <Icon className="h-5 w-5" />
                          {link.name}
                        </a>
                      );
                    }
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 
                          rounded-md bg-amber-600 text-white font-medium 
                          hover:bg-amber-700 transition"
                      >
                        <Icon className="h-5 w-5" />
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
    </>
  );
}
