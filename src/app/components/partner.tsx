"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const businessPartners = [
  { src: "/images/partner_1.png", alt: "Business Partner 1" },
  { src: "/images/partner_2.png", alt: "Business Partner 2" },
  { src: "/images/partner_3.png", alt: "Business Partner 3" },
  { src: "/images/partner_4.jpg", alt: "Business Partner 4" },
];

const mediaPartners = [
  { src: "/images/media_1.jpg", alt: "Media Partner 1" },
  { src: "/images/media_2.png", alt: "Media Partner 2" },
  { src: "/images/media_3.png", alt: "Media Partner 3" },
];

export default function Partners() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-14">
        Our Partners
      </h2>

      {/* Business / Event Partners */}
      <div className="mb-24">
        <h3 className="text-center text-xl md:text-2xl font-semibold mb-8">
          Business / Event Partners
        </h3>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {businessPartners.map((logo, index) => (
            <motion.div
              key={index}
              className="w-32 h-20 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Media Partners */}
      <div>
        <h3 className="text-center text-xl md:text-2xl font-semibold mb-8">
          Media Partners
        </h3>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {mediaPartners.map((logo, index) => (
            <motion.div
              key={index}
              className={`w-32 h-20 relative ${
                index === 2
                  ? "col-span-2 justify-self-center md:col-span-1 md:justify-self-auto"
                  : ""
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
