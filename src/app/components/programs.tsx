"use client";

import { motion } from "framer-motion";

const programs = [
  {
    image: "/images/programs_1.jpg",
    title: "Waterfall Clean Up",
    description:
      "Together with volunteers and travelers, we run an environmental program dedicated to nature — participating in impactful waterfall clean-up efforts to protect and preserve our stunning natural surroundings.",
  },
  {
    image: "/images/programs_2.jpg",
    title: "Cultural Exchange",
    description:
      "An enriching cultural exchange between locals and international guests — fostering deep understanding, meaningful connection, and mutual respect through shared stories, traditions, and daily life.",
  },
  {
    image: "/images/programs_3.jpg",
    title: "Conservating Rare Flora & Fauna",
    description:
      "Alongside volunteers and travelers, we venture into the wild to identify, learn about, and conserve rare flora and fauna. It’s an adventure-driven mission to protect what’s precious in our ecosystem.",
  },
];

export default function Programs() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-black mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Your Activities
        </motion.h2>

        {/* Program Cards */}
        <div className="space-y-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full md:w-1/2 rounded-xl shadow-md object-cover h-64"
              />
              <div className="text-center md:text-left md:w-1/2">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-700 text-sm">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
