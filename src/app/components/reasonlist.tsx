"use client";

import { motion } from "framer-motion";
import { Map, Handshake, HandHeart } from "lucide-react";

const reasons = [
  {
    icon: <Map size={32} className="text-white mb-4" />,
    title: "Wander As You Want",
    description:
      "We offer total flexibility in your journey — you’re free to explore without rigid schedules, yet guided by a professional and supportive team.",
  },
  {
    icon: <Handshake size={32} className="text-white mb-4" />,
    title: "Giving Impacts",
    description:
      "Your presence matters. Together, we create meaningful change for local communities, and you’re invited to be part of something that truly matters.",
  },
  {
    icon: <HandHeart size={32} className="text-white mb-4" />,
    title: "Your New Home",
    description:
      "Feel welcomed, accepted, and cared for — this is more than just a place to stay, it’s your new home, where belonging begins.",
  },
];

export default function ReasonList() {
  return (
    <section className="bg-black text-white py-16 px-4">
      {/* Section Title */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What makes us different
      </motion.h2>

      {/* Reason Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-xl p-6 text-center shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-300 text-sm">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
