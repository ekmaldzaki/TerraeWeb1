"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Info,
  Home,
  Mountain,
  LandPlot,
  Tent,
  ShoppingBag,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/", icon: Info },
    { name: "Stay", href: "/stay", icon: Home },
    { name: "Activities", href: "/activities", icon: Mountain },
    { name: "Culture", href: "/culture", icon: LandPlot },
    { name: "Campground", href: "/campground", icon: Tent },
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
      {/* 🖥️ DESKTOP NAVBAR */}
      <header className="hidden md:block fixed top-0 left-0 w-full z-50">
        <div
          className="mx-auto max-w-7xl flex items-center justify-between px-8 py-5 
          rounded-b-2xl backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/Logo_1.png"
              alt="Terrae Logo"
              width={42}
              height={42}
              className="w-10 h-10 object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8 text-sm font-medium">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-amber-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <a
            href={navLinks[6].href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-amber-600 px-5 py-2 rounded-full font-medium hover:bg-amber-500 transition-all duration-300 shadow-md"
          >
            Contact
          </a>
        </div>
      </header>

      {/* 📱 MOBILE NAVBAR */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50
        flex items-center justify-between px-6 py-3
        backdrop-blur-2xl bg-black/40 border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
      >
        {/* Logo kiri */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Logo_1.png"
            alt="Terrae Logo"
            width={38}
            height={38}
            className="w-9 h-9 object-contain"
          />
        </Link>

        {/* Burger menu kanan */}
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 bg-white/10 hover:bg-amber-600 hover:text-black transition rounded-full border border-white/20 backdrop-blur-md"
        >
          <Menu className="w-5 h-5 text-white" />
        </button>
      </nav>

      {/* 📲 FULLSCREEN MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-2xl flex flex-col items-center justify-center space-y-6"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-amber-600 hover:text-black rounded-full border border-white/20 transition"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {navLinks.map((link, i) => {
              const Icon = link.icon;
              const delay = i * 0.05;
              if (link.external) {
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay, duration: 0.3 }}
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-amber-600 text-black font-medium hover:bg-amber-700 hover:text-white transition-all duration-300 shadow-lg"
                  >
                    <Icon className="h-5 w-5" />
                    {link.name}
                  </motion.a>
                );
              }
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-amber-600 hover:text-black transition-all duration-300 shadow-lg border border-white/10"
                  >
                    <Icon className="h-5 w-5" />
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
