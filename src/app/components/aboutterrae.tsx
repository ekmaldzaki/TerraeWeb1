"use client";

import { motion } from "framer-motion";

export default function AboutTerrae() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold leading-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What is <span className="text-amber-600">Terrae</span>?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-300 text-justify"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Terrae is a{" "}
          <span className="text-white font-semibold">
            community-based sanctuary
          </span>{" "}
          where nature, culture, and meaningful connection come together. It’s a
          space to <span className="text-amber-600">slow down</span>, reconnect
          with yourself, and experience the warmth of authentic local living.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-300 text-justify"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
      </div>
    </section>
  );
}
