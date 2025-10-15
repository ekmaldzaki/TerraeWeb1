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
    <section className="relative bg-black text-white py-32 px-6 md:px-12 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/95 z-0" />
      <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Terrae Local <span className="text-amber-500">Culture</span> &
            Traditions
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed md:text-xl text-justify">
            In collaboration with{" "}
            <a
              href="https://www.instagram.com/kandangan.heritage/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:underline"
            >
              @kandangan.heritage
            </a>
            , Terrae invites you to explore the rich tapestry of local wisdom
            rooted in the{" "}
            <span className="text-white font-medium">Tengger and Javanese</span>{" "}
            heritage. Through cultural exchanges, sacred ceremonies, historical
            walks, and traditional celebrations, we invite you to{" "}
            <span className="text-white font-semibold">
              learn, connect, and grow
            </span>{" "}
            in harmony with the community and the land.
          </p>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(255,191,0,0.08)] p-8 md:p-12"
        >
          <h3 className="text-2xl font-semibold text-amber-400 text-center mb-10">
            Cultural Journey
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {cultureImages.map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-md hover:shadow-[0_0_25px_rgba(255,191,0,0.2)] transition-shadow"
              >
                <Image
                  src={src}
                  alt={`Culture Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
