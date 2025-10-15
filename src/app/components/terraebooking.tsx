"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaGlobe, FaInstagram } from "react-icons/fa";

export default function TerraeBookingAndPricing() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Elegant amber gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90 z-0" />

      {/* Decorative amber orbs for depth and luxury */}
      <div className="absolute top-20 left-1/3 w-[32rem] h-[32rem] bg-amber-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-amber-400/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-24">
        {/* BOOK YOUR STAY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-10 shadow-[0_8px_32px_rgba(255,255,255,0.05)]"
        >
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500">
              Book Your Stay
            </h2>
            <p className="text-gray-300 text-justify leading-relaxed">
              Staying at <strong>Terrae Homestay</strong> means more than just a
              place to sleep, it’s your gateway to a meaningful and immersive
              experience. You'll join nature-based activities, explore local
              culture, and be part of community-powered adventures that make
              every day unforgettable.
              <br />
              <br />
              We highly recommend staying for at least <strong>
                one week
              </strong>{" "}
              to truly feel the rhythm of this place, from morning trail runs
              and forest cleanups to cultural rituals and storytelling.
              <br />
              <br />
              <strong>
                Are you a backpacker, a Worldpackers volunteer, or a digital
                nomad?
              </strong>{" "}
              Terrae is open for collaboration! We actively host volunteers
              through <strong>Worldpackers</strong> and welcome co-creation of
              impactful projects together.
            </p>
          </div>

          {/* Booking Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-6 mt-10"
          >
            <a
              href="https://wa.me/6285179856864?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Terrae%20Homestay."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-600/90 hover:bg-amber-700 transition text-white font-semibold shadow-[0_0_20px_rgba(245,158,11,0.2)] backdrop-blur-sm"
            >
              <FaWhatsapp size={20} />
              Book via WhatsApp
            </a>
            <a
              href="https://www.worldpackers.com/locations/ecoterrae"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-black transition font-semibold"
            >
              <FaGlobe size={20} />
              Apply on Worldpackers
            </a>
          </motion.div>
        </motion.div>

        {/* FLEXIBLE PRICING SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-10 shadow-[0_8px_32px_rgba(255,255,255,0.05)] text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
            Let’s Make It Work, Together
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed text-justify">
            We believe travel should be about connection, not numbers. At
            Terrae, it’s about sharing moments, culture, and stories together.
            If the price doesn’t feel right, just reach out, we’ll figure it out
            together. What matters most is that you feel at home here, with us.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/6285179856864?text=Hi%2C%20I%E2%80%99d%20love%20to%20stay%20at%20Terrae%20but%20I%20was%20wondering%20if%20we%20could%20adjust%20things%20a%20little.%20Can%20we%20talk%3F%20%3A%29"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-amber-600/90 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-[0_0_20px_rgba(245,158,11,0.2)]"
            >
              <FaWhatsapp className="text-xl" /> Message Us on WhatsApp
            </a>
            <a
              href="https://www.instagram.com/terrae.world/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-amber-500 hover:bg-amber-600 hover:text-black text-amber-400 font-semibold py-3 px-6 rounded-lg transition backdrop-blur-sm"
            >
              <FaInstagram className="text-xl" /> Say Hi on Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
