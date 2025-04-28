"use client";
import { motion } from "framer-motion";

export default function Partners() {
  return (
    <section className="bg-gray-50 text-[#252525] py-16 pt-16">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Our Partners
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-32"
        >
          <img
            src="/images/partner_1.png"
            alt="Partner 1"
            className="h-16 md:h-20"
          />
          <img
            src="/images/partner_2.png"
            alt="Partner 2"
            className="h-16 md:h-20"
          />
          <img
            src="/images/partner_3.jpg"
            alt="Partner 3"
            className="h-16 md:h-20"
          />
          <img
            src="/images/partner_4.png"
            alt="Partner 4"
            className="h-16 md:h-20"
          />
        </motion.div>
      </div>
    </section>
  );
}
