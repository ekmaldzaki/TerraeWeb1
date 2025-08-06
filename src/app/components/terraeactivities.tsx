"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const activities = [
  {
    title: "Clean-Up Events",
    images: [
      "/images/cleanup1.jpg",
      "/images/cleanup2.jpg",
      "/images/cleanup3.jpg",
      "/images/cleanup4.jpg",
    ],
  },
  {
    title: "Trail Run Events",
    images: ["/images/trailrun1.jpg", "/images/trailrun2.jpg"],
  },
];

export default function TerraeActivities() {
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
          <h2 className="text-3xl md:text-4xl font-bold">Terrae Activities</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-justify">
            At Terrae, we collaborate with{" "}
            <a
              href="https://www.instagram.com/komunitasekowisatalumajang/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:underline"
            >
              @komunitasekowisatalumajang
            </a>
            , we regularly host exciting and meaningful activities that connect
            people with nature. From waterfall clean-ups and forest conservation
            to outdoor sports like trail running, each activity invites you to
            give back, explore, and grow together. And many more meaningful
            experiences await you.
          </p>
        </motion.div>

        {/* Activity Gallery */}
        <div className="space-y-16">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold">{activity.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activity.images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative w-full aspect-[5/4] rounded-md overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${activity.title} ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
