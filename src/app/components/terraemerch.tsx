"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const merchItems = [
  {
    title: "Terrae Jacket",
    images: ["/images/merch_jacket1.jpg", "/images/merch_jacket2.jpg"],
    price: "IDR 120k",
  },
  {
    title: "Terrae T-Shirt",
    images: [
      "/images/merch_tshirt1.jpg",
      "/images/merch_tshirt2.jpg",
      "/images/merch_tshirt3.jpg",
    ],
    price: "IDR 75k",
  },
  {
    title: "Local Coffee",
    images: ["/images/merch_coffee1.jpg", "/images/merch_coffee2.jpg"],
    price: "100g: IDR 12k • 200g: IDR 20k",
  },
  {
    title: "Incense & Fragrance",
    images: ["/images/merch_incense.jpg"],
    price: "Box: IDR 30k • Bottle: IDR 50k",
  },
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
          <h2 className="text-3xl md:text-4xl font-bold text-amber-600">
            Terrae Merch & Local Goods
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-justify">
            Bring the warmth of Terrae with you wherever you go. From
            minimalist-designed T-shirts and cozy jackets to locally harvested
            coffee and calming incense, each item carries the essence of the
            highlands. Thoughtfully crafted and community-rooted, Terrae
            products are more than just souvenirs — they’re a piece of the
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
            <MerchCard key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MerchCard({
  title,
  images,
  price,
}: {
  title: string;
  images: string[];
  price: string;
}) {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-3 text-center">
      <div className="w-full aspect-[5/4] relative rounded overflow-hidden group">
        <Image
          src={images[current]}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded transition-all duration-500"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 text-sm rounded hover:bg-black/70"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 text-sm rounded hover:bg-black/70"
            >
              ›
            </button>
          </>
        )}
      </div>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-amber-600 font-medium">{price}</p>
    </div>
  );
}
