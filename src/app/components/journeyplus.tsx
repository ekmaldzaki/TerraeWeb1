"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stayPhotos = [
  { src: "/images/journeyplus_stay_1.jpg", label: "Aurama Resort at Senduro" },
  { src: "/images/journeyplus_stay_2.jpg", label: "Aurama Resort at Senduro" },
  { src: "/images/journeyplus_stay_3.jpg", label: "Aurama Resort at Senduro" },
  { src: "/images/journeyplus_stay_4.jpg", label: "Aurama Resort at Senduro" },
];

export default function JourneyPlus() {
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
            Journey+ – 150 USD/pax
          </h2>
          <p className="text-gray-300 mb-6 max-w-lg">
            Designed for discerning travelers who desire indulgence and
            authenticity in equal measure. Journey+ offers upscale lodging at
            Aurama Resort, fine dining with locally sourced gourmet meals, and
            exclusive access to cultural events and nature escapes — all wrapped
            in premium comfort and attentive service.
          </p>
          <a
            href="https://wa.me/6285179856864?text=Hey%2C%20Terrae!%20I%27m%20interested%20in%20reserving%20a%20spot%20for%20the%20Journey%2B%202D1N%20package.%20Please%20share%20more%20details%20on%20the%20itinerary%2C%20exclusive%20benefits%2C%20and%20how%20to%20book."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition w-full sm:w-auto"
          >
            Reserve Your Spot
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
            src="/images/journeyplus_header.jpg"
            alt="Journey Plus"
            className="rounded-xl w-full h-120 object-cover"
          />
        </motion.div>
      </div>

      {/* Your Stay */}
      <SectionGallery title="Your Stay" items={stayPhotos} />

      {/* Premium Experience Description */}
      <div className="max-w-3xl mx-auto text-center">
        <motion.h3
          className="text-xl md:text-2xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          A Private Resort Experience — Where Luxury Meets Nature
        </motion.h3>
        <motion.p
          className="text-gray-300 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Journey+ offers the ultimate escape: your own private resort nestled
          in nature, complete with hotel-grade amenities. Enjoy a stunning pool,
          an on-site restaurant serving gourmet dishes, and seamless,
          personalized service throughout your stay. Every detail is curated to
          deliver an exclusive and elevated experience — ideal for those who
          expect more from their journey. This is indulgence, redefined.
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
