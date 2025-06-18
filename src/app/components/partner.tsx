"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partnerLogos = [
  { src: "/images/partner_1.png", alt: "Partner 1" },
  { src: "/images/partner_2.png", alt: "Partner 2" },
  { src: "/images/partner_3.jpg", alt: "Partner 3" },
  { src: "/images/partner_4.png", alt: "Partner 4" },
];

export default function Partners() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        Our Partners
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
        {partnerLogos.map((logo, index) => (
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
    </section>
  );
}
