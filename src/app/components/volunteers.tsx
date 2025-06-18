"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stayPhotos = [
  { src: "/images/local_resident_1.jpg", label: "Local Resident's house" },
  { src: "/images/local_resident_2.jpg", label: "Local Resident's house" },
  { src: "/images/local_resident_3.jpg", label: "Local Resident's house" },
  { src: "/images/local_resident_4.jpg", label: "Local Resident's house" },
];

export default function Volunteers() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <section className="bg-black text-white py-16 px-4 space-y-20 overflow-x-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-white px-4 py-2 rounded-lg mb-4">
            <img
              src="/images/partner_1.png"
              alt="Worldpackers"
              className="h-6"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Volunteers – Start from 15 USD
          </h2>
          <p className="text-gray-300 mb-6 max-w-lg">
            Join as a volunteer to live alongside the local community, support
            local events and activities, and make a real impact — much like a
            community service exchange program. Registration is done through
            Worldpackers or WhatsApp.
          </p>

          {/* Register Buttons */}
          <AnimatePresence mode="wait">
            {!showOptions ? (
              <motion.button
                key="register"
                onClick={() => setShowOptions(true)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition w-full sm:w-auto"
              >
                Register here
              </motion.button>
            ) : (
              <motion.div
                key="options"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex"
              >
                <a
                  href="https://www.worldpackers.com/locations/terrae-basecamp-graha-semeru-housing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-blue-600 text-white text-center px-6 py-3 rounded-full hover:bg-blue-700 transition w-full sm:w-auto"
                >
                  Worldpackers
                </a>
                <a
                  href="https://wa.me/6285179856864?text=Hey%2C%20Terrae!%20I%27m%20interested%20in%20joining%20as%20a%20volunteer.%20Could%20you%20please%20share%20more%20details%20about%20the%20program%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-600 text-white text-center px-6 py-3 rounded-full hover:bg-green-700 transition w-full sm:w-auto"
                >
                  WhatsApp
                </a>

                <button
                  onClick={() => setShowOptions(false)}
                  className="block text-sm text-gray-400 hover:text-white transition mt-2 sm:mt-0"
                >
                  Cancel
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/volunteers_header.jpg"
            alt="Volunteers"
            className="rounded-xl w-full h-120 object-cover"
          />
        </motion.div>
      </div>

      {/* Your Stay Section */}
      <SectionGallery title="Your Stay" items={stayPhotos} />

      {/* NEW Text Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-4 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl md:text-2xl font-semibold">
          Engage with Locals, Communities, and Small Businesses
        </h3>
        <p className="text-gray-300 text-sm md:text-base">
          As a volunteer, you’ll have the unique opportunity to immerse yourself
          in the everyday life of the village — from helping with
          community-based events, supporting local enterprises, to collaborating
          on sustainability programs. Much like a cultural exchange or
          short-term service-learning, this experience allows you to contribute
          meaningfully while building real relationships with locals. It’s not
          just volunteering — it’s a journey of impact and shared growth.
        </p>
      </motion.div>
    </section>
  );
}

function SectionGallery({
  title,
  items,
}: {
  title: string;
  items: { src: string; label: string }[];
}) {
  return (
    <div className="text-center px-2">
      <motion.h3
        className="text-xl md:text-2xl font-semibold mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-64 object-cover"
            />
            <p className="text-sm text-gray-300 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
