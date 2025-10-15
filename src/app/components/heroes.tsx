"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100vh] w-full bg-cover bg-center flex items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage: "url('/images/Heroes_1.webp')" }}
    >
      {/* Overlay untuk kontras */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Hero content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center px-6 py-10 sm:px-8 sm:py-12 md:py-16 max-w-[90%] sm:max-w-xl md:max-w-3xl 
        bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug sm:leading-tight tracking-wide mb-4 sm:mb-6 drop-shadow-xl">
          HEAL NATURE
          <br />
          <span className="text-white">AS YOU WANDER</span>
        </h1>

        <motion.p
          className="text-white/90 text-base sm:text-lg md:text-2xl max-w-2xl leading-relaxed font-light px-2 sm:px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          Travel that gives back,{" "}
          <span className="text-amber-500 font-semibold">
            heal nature, embrace culture,
          </span>{" "}
          and create memories that truly matter.
        </motion.p>
      </motion.div>
    </section>
  );
}
