"use client";

import { motion } from "framer-motion";

export default function TerraeLocation() {
  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content - Title & Description */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Where is Terrae?</h2>
          <p className="text-gray-300 text-justify">
            Terrae is located in{" "}
            <strong>Kandangan, Senduro, Lumajang — East Java, Indonesia</strong>
            , nestled on the edge of the majestic Bromo-Tengger-Semeru National
            Park.
            <br />
            <br />
            Away from the city noise, this village is where peace meets purpose.
            Whether you’re chasing sunrises, stories, or sustainable living,
            this is the kind of place where paths cross, minds open, and hearts
            grow.
            <br />
            <br />
            Come for the view. Stay for the people. Leave with purpose.
          </p>
          <a
            href="https://maps.app.goo.gl/nqJn5TVJ94mxDEXJA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 rounded bg-white text-black font-semibold hover:bg-gray-300 transition"
          >
            Open with Google Maps
          </a>
        </motion.div>

        {/* Right Content - Embedded Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-80 md:h-96 rounded overflow-hidden shadow-lg">
            <iframe
              title="Terrae Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d949.3145345890451!2d113.0914587!3d-8.0646103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6418fae13f4a9%3A0x7bdf5c27d499c2f8!2sTerrae%20-%20Terrae%20Homestay!5e1!3m2!1sid!2sid!4v1754549816902!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
