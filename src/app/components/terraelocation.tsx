"use client";

import { motion } from "framer-motion";

export default function TerraeLocation() {
  return (
    <section className="relative bg-black text-white py-24 px-4 overflow-hidden">
      {/* Amber gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90 z-0" />

      {/* Decorative glow orbs */}
      <div className="absolute top-32 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Text Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-white/5 border border-white/20 rounded-3xl p-8 md:p-10 shadow-[0_8px_32px_rgba(255,255,255,0.05)] space-y-6 hover:bg-white/10 transition-all duration-500"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Where is <span className="text-amber-600">Terrae</span>?
          </h2>

          <p className="text-gray-300 text-justify leading-relaxed">
            Terrae is located in{" "}
            <span className="text-white font-medium">
              Kandangan, Senduro, Lumajang, East Java, Indonesia
            </span>
            , nestled on the edge of the majestic{" "}
            <span className="text-amber-500">Bromo-Tengger-Semeru</span>{" "}
            National Park.
            <br />
            <br />
            Away from the city noise, this village is where{" "}
            <span className="text-white font-medium">peace meets purpose</span>.
            Whether you’re chasing sunrises, stories, or sustainable living,
            this is the kind of place where paths cross, minds open, and hearts
            grow.
            <br />
            <br />
            <span className="italic text-gray-400">
              Come for the view. Stay for the people. Leave with purpose.
            </span>
          </p>

          <a
            href="https://maps.app.goo.gl/nqJn5TVJ94mxDEXJA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-6 py-3 rounded-xl font-semibold text-white 
              border border-amber-600 bg-amber-500/10 backdrop-blur-md
              hover:bg-amber-500/20 hover:scale-105 transition-all duration-300"
          >
            Open with Google Maps
          </a>
        </motion.div>

        {/* RIGHT: Map Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-white/5 border border-white/20 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.05)] hover:bg-white/10 transition-all duration-500"
        >
          <div className="relative w-full h-80 md:h-[420px] rounded-3xl overflow-hidden">
            <iframe
              title="Terrae Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d949.3145345890451!2d113.0914587!3d-8.0646103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6418fae13f4a9%3A0x7bdf5c27d499c2f8!2sTerrae%20-%20Terrae%20Homestay!5e1!3m2!1sid!2sid!4v1754549816902!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
