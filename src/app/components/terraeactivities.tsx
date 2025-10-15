"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const activities = [
  {
    title: "Clean-Up Events",
    images: [
      "/images/cleanup1.jpg",
      "/images/cleanup2.webp",
      "/images/cleanup3.jpg",
      "/images/cleanup4.jpg",
      "/images/cleanup5.jpg",
    ],
  },
  {
    title: "Trail Run Events",
    images: ["/images/trailrun1.jpg", "/images/trailrun2.jpg"],
  },
  {
    title: "Fun Bike Events",
    images: ["/images/funbike1.webp", "/images/funbike2.webp"],
  },
];

export default function TerraeActivities() {
  return (
    <section className="relative bg-black text-white py-32 px-6 md:px-12 overflow-hidden">
      {/* Background ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/95 z-0" />
      <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl z-0" />

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Terrae <span className="text-amber-500">Activities</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed md:text-xl text-justify ">
            At Terrae, we collaborate with{" "}
            <a
              href="https://www.instagram.com/komunitasekowisatalumajang/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:underline"
            >
              @komunitasekowisatalumajang
            </a>{" "}
            to host meaningful experiences that connect people with nature. From
            forest conservation and trail runs to clean-up and fun bike events,
            each activity invites you to{" "}
            <span className="text-white font-medium">
              give back, explore, and grow together.
            </span>
          </p>
        </motion.div>

        {/* Activities List */}
        <div className="space-y-20">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(255,191,0,0.08)] p-8 md:p-12 space-y-8"
            >
              {/* Activity Title */}
              <h3 className="text-2xl font-semibold text-amber-400 text-center drop-shadow-sm">
                {activity.title}
              </h3>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {activity.images.map((img, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden border border-white/10 shadow-md hover:shadow-[0_0_25px_rgba(255,191,0,0.2)] transition-shadow"
                  >
                    <Image
                      src={img}
                      alt={`${activity.title} ${imgIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
