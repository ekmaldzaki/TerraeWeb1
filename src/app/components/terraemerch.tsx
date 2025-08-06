"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const merchItems = [
  { title: "Terrae T-Shirt", src: "/images/merch_tshirt.jpg" },
  { title: "Terrae Hoodie", src: "/images/merch_hoodie.jpg" },
  { title: "Local Coffee", src: "/images/merch_coffee.jpg" },
  { title: "Incense & Fragrance", src: "/images/merch_incense.jpg" },
];

export default function TerraeMerch() {
  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-5xl mx-auto space-y-16 text-center">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Terrae Merch & Local Goods
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-justify">
            Bring the warmth of Terrae with you wherever you go. From
            minimalist-designed T-shirts and cozy hoodies to locally harvested
            coffee and calming incense, each item carries the essence of the
            highlands. Thoughtfully crafted and community-rooted, Terrae
            products are more than just souvenirs they’re a piece of the
            experience.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {merchItems.map((item, index) => (
            <div key={index} className="space-y-2 text-center">
              <div className="w-full aspect-[5/4] relative rounded overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <p className="text-white font-medium">{item.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
