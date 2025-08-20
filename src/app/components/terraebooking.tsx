"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaGlobe } from "react-icons/fa";

export default function TerraeBooking() {
  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Book Your Stay</h2>
          <p className="text-gray-300 text-justify">
            Staying at <strong>Terrae Homestay</strong> means more than just a
            place to sleep. It's your gateway to a meaningful and immersive
            experience. You'll get to be part of nature-based activities,
            connect with vibrant local culture, and join in community-powered
            adventures that make every day unforgettable.
            <br />
            <br />
            We highly recommend a stay of at least <strong>one week</strong> to
            fully soak in the rhythm of this place, from early morning
            trail-runs and forest cleanups to cultural rituals and stories of
            heritage. But even if you’re just passing through for a night or
            two, we’d love to welcome you.
            <br />
            <br />
            <strong>
              Are you a backpacker, a Worldpackers volunteer, or a digital
              nomad?
            </strong>{" "}
            Terrae is also open for collaboration! We're actively hosting
            volunteers through <strong>Worldpackers</strong>, and we’d love to
            co-create impactful projects together. If you're looking for a place
            to contribute, grow, and connect, this is the one.
          </p>
        </motion.div>

        {/* Booking Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a
            href="https://wa.me/6285179856864?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Terrae%20Homestay."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded bg-amber-600 hover:bg-amber-800 transition text-white font-semibold"
          >
            <FaWhatsapp size={20} />
            Book via WhatsApp
          </a>
          <a
            href="https://www.worldpackers.com/locations/ecoterrae"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded border border-white hover:bg-white hover:text-black transition font-semibold"
          >
            <FaGlobe size={20} />
            Apply on Worldpackers
          </a>
        </motion.div>
      </div>
    </section>
  );
}
