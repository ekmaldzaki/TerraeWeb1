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
            READY TO EXPLORE MORE?
          </h2>
          <a
            href="https://wa.me/6285179856864?text=Hi!%20I%20have%20a%20question%20about%20Terrae."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Contact Us on WhatsApp
          </a>
        </motion.div>

        {/* Right Copywriting */}
        <motion.div
          className="md:w-1/2 text-gray-700 text-base leading-relaxed text-justify"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Staying at Terrae isn’t just about having a place to sleep. It’s about
          discovering stories, cultures, and connections that last. From cozy
          rooms in nature to real local adventures and cultural exchanges with
          the Tenggerese community, every moment is thoughtfully crafted.
          Whether you're here for a day or a week, you’re welcome to be part of
          something genuine. Let’s talk, connect, and make your journey to
          Terrae unforgettable.
        </motion.div>
      </div>
    </section>
  );
}
