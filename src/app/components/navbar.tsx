"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "../hooks/useLocale";

interface NavLink {
  name: string;
  path: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, isMounted, switchLocale } = useLocale();

  const navLinks: NavLink[] = [
    {
      name: locale === "id" ? "Tentang Kami" : "Get to Know Us",
      path: "/profile",
    },
    {
      name: locale === "id" ? "Guild House" : "Guild House",
      path: "/guildhouse",
    },
    { name: "FAQ", path: "/faq" },
    {
      name: locale === "id" ? "Kode Etik" : "Code of Conduct",
      path: "/code-of-conduct",
    },
  ];

  if (!isMounted) return null;

  return (
    <nav className="bg-[#4e342e] text-white py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href={`/${locale}`} className="text-xl font-bold">
          <img src="/favicon.png" alt="terrae-logo" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={`/${locale}${path}`}
                className="text-gray-300 hover:text-white transition"
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={switchLocale}
              className="ml-4 bg-white text-[#2c1d16] px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-200 transition"
            >
              {locale === "id" ? "EN" : "ID"}
            </button>
          </li>
        </ul>

        {/* Burger for mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 bg-gradient-to-r from-[#4e342e] to-[#2c1d16] text-white py-6 shadow-lg rounded-t-2xl"
          >
            <ul className="flex flex-col items-center space-y-4">
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    href={`/${locale}${path}`}
                    className="text-gray-300 hover:text-white transition text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    switchLocale();
                    setIsOpen(false);
                  }}
                  className="bg-white text-[#2c1d16] px-4 py-1 rounded-md text-sm font-medium hover:bg-gray-200 transition"
                >
                  {locale === "id" ? "EN" : "ID"}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
