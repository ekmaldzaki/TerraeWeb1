"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const businessPartners = [
  {
    src: "/images/partner_1.png",
    alt: "Worldpackers",
    href: "https://www.worldpackers.com/",
  },
  {
    src: "/images/partner_2.png",
    alt: "PUM Netherlands",
    href: "https://www.pum.nl/",
  },
  {
    src: "/images/partner_3.png",
    alt: "Komunitas Eko Wisata Lumajang",
    href: "https://www.instagram.com/komunitasekowisatalumajang/",
  },
  {
    src: "/images/partner_4.jpg",
    alt: "Kandangan Heritage",
    href: "https://www.instagram.com/kandangan.heritage/",
  },
];

const mediaPartners = [
  {
    src: "/images/media_1.jpg",
    alt: "Layanan Wisata Lumajang",
    href: "https://www.instagram.com/layananwisatalumajang/",
  },
  {
    src: "/images/media_2.png",
    alt: "Senduro Now",
    href: "https://www.instagram.com/senduronow/",
  },
  {
    src: "/images/media_3.png",
    alt: "Info Event Lumajang",
    href: "https://www.instagram.com/infoeventlumajang/",
  },
];

export default function Partners() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Elegant amber gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90 z-0" />

      {/* Decorative amber glow orbs for luxury nature vibe */}
      <div className="absolute top-32 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 text-white tracking-wide drop-shadow-xl">
          Our <span className="text-amber-500">Partners</span>
        </h2>

        {/* Business / Event Partners */}
        <div className="mb-28">
          <h3 className="text-center text-xl md:text-2xl font-semibold mb-12 text-amber-500 tracking-wide">
            Business / Event Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
            {businessPartners.map((logo, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl flex items-center justify-center 
                p-4 w-44 h-32 md:w-56 md:h-36 shadow-[0_0_30px_rgba(255,191,0,0.08)] hover:shadow-[0_0_40px_rgba(255,191,0,0.15)] 
                hover:bg-white/20 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.alt}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-4 rounded-lg"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Media Partners */}
        <div>
          <h3 className="text-center text-xl md:text-2xl font-semibold mb-12 text-amber-500 tracking-wide">
            Media Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
            {mediaPartners.map((logo, index) => (
              <motion.div
                key={index}
                className={`relative bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl flex items-center justify-center 
                p-4 w-44 h-32 md:w-56 md:h-36 shadow-[0_0_30px_rgba(255,191,0,0.08)] hover:shadow-[0_0_40px_rgba(255,191,0,0.15)] 
                hover:bg-white/20 transition-all duration-500 ${
                  index === 2
                    ? "col-span-2 justify-self-center md:col-span-1 md:justify-self-auto"
                    : ""
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.alt}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-4 rounded-lg"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
