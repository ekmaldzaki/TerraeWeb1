"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] md:min-h-screen w-full bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/Heroes_1.webp')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-10" />

      <motion.div
        className="relative z-20 flex flex-col items-center justify-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/images/Logo_1.png"
          alt="Logo"
          className="w-24 md:w-32 h-auto mb-6"
        />

        <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight mb-2 max-w-full">
          HEAL NATURE
          <br />
          AS YOU WANDER
        </h1>

        <p className="text-white text-lg md:text-xl mb-6 max-w-full">
          where your vacation restoring the world
        </p>

        <button
          onClick={() => {
            document
              .getElementById("activities-list")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          How to join?
        </button>
      </motion.div>
    </section>
  );
}
