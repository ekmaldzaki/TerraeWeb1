"use client";

import Image from "next/image";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-sm">
      {/* Top section */}
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
          {/* Left: Logo & Address */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/Logo_Footer.png"
                alt="Terrae Logo"
                width={30}
                height={30}
              />
              <span className="font-semibold text-lg">TERRAE</span>
            </div>
            <p>Senduro, Lumajang, Indonesia</p>
            <p className="mt-1 text-blue-500">terrae-hub.com</p>
          </div>

          {/* Middle: Slogan */}
          <div className="text-center md:text-left">
            <h4 className="font-medium text-lg mb-2 text-center">
              Connecting Cultures. <br />
              Empowering Communities.
            </h4>
            <p>
              Terrae is where meaningful journeys begin — whether you come to
              give, to grow, or to rediscover life. Join the movement of impact
              and adventure.
            </p>
          </div>

          {/* Right: Social */}
          <div className="md:text-right">
            <p className="font-medium mb-2">FOLLOW</p>
            <div className="flex flex-col items-start md:items-end gap-2">
              <a
                href="https://www.instagram.com/terrae.world/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-800 hover:text-black transition"
              >
                <FaInstagram size={20} />
                @terrae.world
              </a>
              <a
                href="mailto:taptjakrawala@gmail.com"
                className="inline-flex items-center gap-2 text-gray-800 hover:text-black transition"
              >
                <FaEnvelope size={18} />
                taptjakrawala@gmail.com
              </a>
              <a
                href="https://wa.me/6285179856864"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-800 hover:text-black transition"
              >
                <FaWhatsapp size={20} />
                +62 851-7985-6864
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 text-right text-gray-400 text-xs">
          &copy; 2025 Terrae
        </div>
      </div>
    </footer>
  );
}
