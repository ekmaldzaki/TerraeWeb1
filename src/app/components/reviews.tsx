"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import en from "../locales/en.json";
import id from "../locales/id.json";

interface Review {
  name: string;
  origin: string;
  image: string;
  rating: number;
  shortText: string;
  fullText: string;
}

export default function Reviews() {
  const pathname = usePathname();
  const isIndonesian = pathname.startsWith("/id");
  const reviewsData = isIndonesian ? id.reviews : en.reviews;
  const [expanded, setExpanded] = useState(false);

  const review: Review = reviewsData.items[0]; // sementara 1 review

  const buttonLabel = expanded
    ? isIndonesian
      ? "Baca lebih sedikit"
      : "Show Less"
    : isIndonesian
    ? "Baca lebih lanjut"
    : "Read More";

  return (
    <section id="ourReview" className="bg-gray-50 py-16 text-[#252525]">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          {reviewsData.sectionTitle}
        </motion.h2>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-100 shadow-md max-w-md mx-auto rounded-xl p-6"
        >
          <img
            src={review.image}
            alt={review.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h5 className="text-xl font-bold text-gray-800">{review.name}</h5>
          <p className="text-sm text-gray-500 mb-2">{review.origin}</p>
          <div className="mb-3 text-yellow-400 text-xl">
            {"★".repeat(review.rating)}
          </div>
          <p
            className="text-gray-600 text-justify text-sm"
            dangerouslySetInnerHTML={{
              __html: expanded
                ? review.shortText + " " + review.fullText
                : review.shortText,
            }}
          />
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 bg-[#4e342e] text-white px-4 py-2 rounded-lg hover:bg-[#2c1d16] transition"
          >
            {buttonLabel}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
