"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] md:min-h-screen w-full bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/Heroes_1.webp')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-0" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black z-10" />

      {/* Hero content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <h1 className="text-white text-4xl md:text-7xl font-extrabold leading-tight tracking-wide mb-6 drop-shadow-lg">
          HEAL NATURE
          <br />
          AS YOU WANDER
        </h1>

        <motion.p
          className="text-white/90 text-lg md:text-2xl max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          Travel that gives back,{" "}
          <span className="text-amber-600 font-semibold">
            heal nature, embrace culture,
          </span>{" "}
          and create memories that truly matter.
        </motion.p>
      </motion.div>
    </section>
  );
}
