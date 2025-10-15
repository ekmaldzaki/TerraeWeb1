"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const merchItems = [
  {
    title: "Terrae Jacket",
    images: ["/images/merch_jacket1.jpg", "/images/merch_jacket2.webp"],
    price: "IDR 200k",
  },
  {
    title: "Terrae T-Shirt",
    images: [
      "/images/merch_tshirt1.jpg",
      "/images/merch_tshirt2.jpg",
      "/images/merch_tshirt3.jpg",
    ],
    price: "IDR 90k",
  },
  {
    title: "Local Coffee",
    images: ["/images/merch_coffee1.jpg", "/images/merch_coffee2.jpg"],
    price: "100g: IDR 20k • 200g: IDR 35k",
  },
  {
    title: "Incense & Fragrance",
    images: ["/images/merch_incense.jpg"],
    price: "Box: IDR 30k • Bottle: IDR 50k",
  },
];

export default function TerraeMerch() {
  return (
    <section className="relative bg-black text-white pt-40 pb-32 px-6 overflow-hidden">
      {/* background glass shimmer */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-black/70 to-black/90 backdrop-blur-2xl" />

      <div className="relative max-w-6xl mx-auto space-y-20 text-center">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
            Terrae Merch & Local Goods
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-justify leading-relaxed">
            Bring the warmth of Terrae with you wherever you go. From
            minimalist-designed T-shirts and cozy jackets to locally harvested
            coffee and calming incense, each item carries the essence of the
            highlands. Thoughtfully crafted and community-rooted, Terrae
            products are more than just souvenirs, they’re a piece of the
            experience.
          </p>
        </motion.div>

        {/* Merch Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10"
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

  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [images]);

  const nextImage = () => setCurrent((p) => (p + 1) % images.length);
  const prevImage = () =>
    setCurrent((p) => (p - 1 + images.length) % images.length);

  return (
    <div className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-amber-600/40 via-amber-500/20 to-transparent hover:from-amber-500/60 hover:to-amber-900/20 transition-all duration-500">
      <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-4 flex flex-col items-center space-y-4 h-full">
        <div className="relative w-full aspect-[5/4] rounded-xl overflow-hidden shadow-xl">
          <Image
            src={images[current]}
            alt={title}
            fill
            className="object-cover transition-all duration-700 scale-105 group-hover:scale-110"
          />

          {/* Glass controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/30 backdrop-blur border border-white/20 text-white hover:bg-amber-500 hover:text-black transition"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/30 backdrop-blur border border-white/20 text-white hover:bg-amber-500 hover:text-black transition"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        <div className="space-y-1">
          <p className="text-lg font-semibold tracking-wide">{title}</p>
          <p className="text-amber-400 font-medium">{price}</p>
        </div>
      </div>
    </div>
  );
}
