"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cultureImages = [
  "/images/culture1.jpg",
  "/images/culture2.jpg",
  "/images/culture3.jpg",
  "/images/culture4.jpg",
];

export default function TerraeCulture() {
  return (
    <section className="bg-black text-white pt-36 py-24 px-4">
      <div className="max-w-5xl mx-auto space-y-16 text-center">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Terrae Local Culture & Traditions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-justify">
            In collaboration with{" "}
            <a
              href="https://www.instagram.com/kandangan.heritage/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:underline"
            >
              @kandangan.heritage
            </a>
            , Terrae invites you to dive into the rich tapestry of local culture
            primarily the wisdom and rituals of the Tengger community,
            interwoven with Javanese traditions. Through cultural exchanges,
            sacred ceremonies, historical site visits, and local celebrations,
            we offer an immersive journey to learn, connect, and grow together.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {cultureImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full aspect-[5/4] rounded-md overflow-hidden"
            >
              <Image
                src={src}
                alt={`Culture Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
