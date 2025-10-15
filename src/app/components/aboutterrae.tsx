"use client";

import { motion } from "framer-motion";

export default function AboutTerrae() {
  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Ambient glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90 z-0" />
      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl z-0" />

      {/* Content container */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(255,191,0,0.08)] p-8 md:p-14 text-left space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold leading-snug tracking-wide text-center md:text-left drop-shadow-[0_0_10px_rgba(245,158,11,0.4)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What is <span className="text-amber-500">Terrae</span>?
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          className="text-base md:text-lg leading-relaxed text-gray-200"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-white font-semibold">Terrae</span> is a{" "}
          <span className="text-amber-400 font-medium">
            community-based sanctuary
          </span>{" "}
          where nature, culture, and meaningful connection meet. It’s a place to{" "}
          <span className="text-amber-500 font-semibold">slow down</span>,
          reconnect with yourself, and experience the warmth of authentic local
          living.
        </motion.p>

        {/* Divider line (visual rhythm) */}
        <div className="w-16 h-[2px] bg-gradient-to-r from-amber-500/60 to-transparent rounded-full" />

        {/* Paragraph 2 */}
        <motion.p
          className="text-base md:text-lg leading-relaxed text-gray-200"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          From peaceful stays and cultural workshops to community action and
          local cuisine, Terrae invites you to{" "}
          <span className="text-white font-medium">
            escape the rush of modern life
          </span>{" "}
          and return with a deeper sense of purpose for yourself, for others,
          and for the Earth.
        </motion.p>

        {/* Subtle closing emphasis */}
        <motion.p
          className="text-base md:text-lg italic text-gray-400 pt-4 border-t border-white/10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          A quiet moment in nature can change how you see everything.
        </motion.p>
      </motion.div>
    </section>
  );
}
