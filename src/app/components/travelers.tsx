"use client";

import { motion } from "framer-motion";

const stayPhotos = [
  { src: "/images/terrae_villa_1.jpg", label: "Terrae Villa at Senduro" },
  { src: "/images/terrae_villa_2.jpg", label: "Terrae Villa at Senduro" },
  { src: "/images/terrae_villa_3.jpg", label: "Terrae Villa at Senduro" },
  { src: "/images/terrae_villa_5.jpg", label: "Terrae Villa at Senduro" },
];

export default function Travelers() {
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
            Travelers – 70 USD/pax
          </h2>
          <p className="text-gray-300 mb-6 max-w-lg">
            Perfect for travelers seeking comfort and authenticity. With
            upgraded accommodation, curated local experiences, and warm
            hospitality, this package offers the best balance between quality
            and value — ideal for those who want more, without going overboard.
          </p>
          <a
            href="https://wa.me/6285179856864?text=Hey%2C%20Terrae!%20I%27m%20looking%20to%20book%20the%20Travelers%202D1N%20package.%20Can%20you%20tell%20me%20more%20about%20the%20accommodation%2C%20activities%2C%20and%20what%27s%20included%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition w-full sm:w-auto"
          >
            Book Now
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
            src="/images/travelers_header.jpg"
            alt="Travelers"
            className="rounded-xl w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      {/* Your Stay */}
      <SectionGallery title="Your Stay" items={stayPhotos} />

      {/* Experience Section */}
      <div className="max-w-3xl mx-auto text-center">
        <motion.h3
          className="text-xl md:text-2xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Comfortable & Private Getaway in a Rural Haven
        </motion.h3>
        <motion.p
          className="text-gray-300 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Escape the crowds and retreat into comfort. This experience is
          designed for those who value privacy, cozy accommodation, and
          authentic local surroundings — without compromising modern amenities.
          Stay in a private villa set in the peaceful countryside, where the
          charm of nature blends seamlessly with hotel-standard facilities and
          thoughtful hospitality.
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
