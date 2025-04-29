"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "../hooks/useLocale";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { locale, isMounted, switchLocale } = useLocale();

  const navLinks = [
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
    {
      name: locale === "id" ? "Jadi Relawan" : "Become a Volunteer",
      path: "https://www.worldpackers.com/locations/terrae-basecamp-graha-semeru-housing",
    },
  ];

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageChange = (lang: string) => {
    switchLocale();
    setIsLanguageDropdownOpen(false);
  };

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

          {/* Language Dropdown */}
          <li className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="ml-4 text-white bg-transparent hover:bg-gray-700 rounded-full p-2"
            >
              <img
                src={
                  locale === "id"
                    ? "/images/flag_id.png"
                    : "/images/flag_en.png"
                }
                alt="Language Flag"
                className="w-7 h-5 rounded-md object-cover"
              />
            </button>

            {/* Dropdown untuk memilih bahasa */}
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg py-2 w-32">
                <button
                  onClick={() => handleLanguageChange("id")}
                  className="flex items-center space-x-2 px-4 py-1 hover:bg-gray-200 w-full text-left"
                >
                  <img
                    src="/images/flag_id.png"
                    alt="Indonesian Flag"
                    className="w-7 h-5 rounded-md object-cover"
                  />
                  <span>Bahasa Indonesia</span>
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="flex items-center space-x-2 px-4 py-1 hover:bg-gray-200 w-full text-left"
                >
                  <img
                    src="/images/flag_en.png"
                    alt="English Flag"
                    className="w-7 h-5 rounded-md object-cover"
                  />
                  <span>English</span>
                </button>
              </div>
            )}
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
            className="fixed inset-x-0 bottom-0 bg-[#4e342e] text-white py-6 shadow-lg rounded-t-2xl"
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
              <li className="relative">
                <button
                  onClick={toggleLanguageDropdown}
                  className="text-white bg-transparent hover:bg-gray-700 rounded-full p-2"
                >
                  <img
                    src={
                      locale === "id"
                        ? "/images/flag_id.png"
                        : "/images/flag_en.png"
                    }
                    alt="Language Flag"
                    className="w-6 h-6"
                  />
                </button>
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg py-2 w-32">
                    <button
                      onClick={() => handleLanguageChange("id")}
                      className="flex items-center space-x-2 px-4 py-1 hover:bg-gray-200 w-full text-left"
                    >
                      <img
                        src="images/flag_id.png"
                        alt="Indonesian Flag"
                        className="w-6 h-6"
                      />
                      <span>Bahasa Indonesia</span>
                    </button>
                    <button
                      onClick={() => handleLanguageChange("en")}
                      className="flex items-center space-x-2 px-4 py-1 hover:bg-gray-200 w-full text-left"
                    >
                      <img
                        src="images/flag_en.png"
                        alt="English Flag"
                        className="w-6 h-6"
                      />
                      <span>English</span>
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
