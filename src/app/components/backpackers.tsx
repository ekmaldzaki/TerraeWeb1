"use client";

import { motion } from "framer-motion";

const stayPhotos = [
  {
    src: "/images/backpackers_stay_1.jpg",
    label: "Asmoro Homestay at Senduro",
  },
  {
    src: "/images/backpackers_stay_2.jpg",
    label: "Asmoro Homestay at Senduro",
  },
  {
    src: "/images/backpackers_stay_3.jpg",
    label: "Asmoro Homestay at Senduro",
  },
  {
    src: "/images/backpackers_stay_4.jpg",
    label: "Asmoro Homestay at Senduro",
  },
];

export default function Backpackers() {
  return (
    <section className="bg-black text-white py-16 px-4 space-y-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Backpackers – Simple Living, Rich Experience
          </h2>
          <p className="text-gray-300 mb-6 max-w-lg">
            Designed for curious travelers who value authenticity and connection
            over luxury. Starting from just 20 USD/pax, our Backpackers package
            offers cozy local homestays, real interaction with the community,
            and an immersive natural experience — perfect for students, solo
            adventurers, and conscious explorers looking to travel light and
            live deeply.
          </p>
          <a
            href="https://wa.me/6285179856864?text=Hey%2C%20Terrae!%20I%27m%20interested%20in%20joining%20the%20Backpackers%202D1N%20experience.%20Could%20you%20please%20provide%20more%20details%20on%20what%27s%20included%20and%20how%20to%20join%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition w-full sm:w-auto"
          >
            Join Now
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/backpackers_header.jpg"
            alt="Backpackers"
            className="rounded-xl w-full h-120 object-cover"
          />
        </motion.div>
      </div>

      {/* Your Stay */}
      <SectionGallery title="Your Stay" items={stayPhotos} />

      {/* Experience Simplicity Section */}
      <div className="max-w-3xl mx-auto text-center">
        <motion.h3
          className="text-xl md:text-2xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Experience Simplicity, Live Fully
        </motion.h3>
        <motion.p
          className="text-gray-300 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          With modest yet comfortable facilities, the Backpackers program
          focuses on what truly matters — people, stories, and genuine
          discovery. It’s about slowing down, connecting deeply, and finding joy
          in life’s simplest pleasures. Less luxury, more meaning.
        </motion.p>
      </div>
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
    <div className="text-center">
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
