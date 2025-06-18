"use client";

import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section className="bg-white py-64 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-gray-400 tracking-widest mb-2">
            TERRAE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            ARE YOU READY?
          </h2>
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
            Contact Us!
          </button>
        </motion.div>

        {/* Right Copywriting */}
        <motion.div
          className="md:w-1/2 text-gray-700 text-base leading-relaxed"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Whether you're a passionate volunteer or a curious traveler, your
          journey with Terrae promises more than just a trip — it's a chance to
          connect deeply with Lumajang's soul. Share moments with locals,
          immerse in real community experiences, and contribute to causes that
          matter. From unforgettable nature adventures to meaningful cultural
          exchange, every step is designed to inspire and empower. Step out of
          your routine, and step into something extraordinary. Join us — let's
          make impact together.
        </motion.div>
      </div>
    </section>
  );
}
