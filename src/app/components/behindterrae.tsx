"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const profiles = [
  {
    name: "Ghifarry Putra Adjani",
    age: 23,
    role: "Founder of Terrae",
    instagram: "https://www.instagram.com/gipak_",
    image: "/images/owner_terrae.jpg",
    description:
      "A passionate young entrepreneur from Lumajang with a strong drive to develop tourism especially ecotourism in the region. With fresh ideas and bold initiatives, Ghifarry aims to bring innovation and impactful solutions for sustainable travel experiences.",
  },
  {
    name: "Fanzha Zhimran",
    age: 21,
    role: "Founder of Komunitas Eko Wisata Lumajang",
    instagram: "https://www.instagram.com/fanzhazhimran",
    image: "/images/owner_komunitas.jpg",
    description:
      "Nature enthusiast and visionary behind Lumajang Ecotourism Community. Fanzha dedicates his journey to connecting people with nature, promoting outdoor activities, and building greater awareness of environmental preservation in Lumajang.",
  },
  {
    name: "Dandi Prasiska",
    age: 24,
    role: "Founder of Kandangan Heritage",
    instagram: "https://www.instagram.com/dandi_prasiska",
    image: "/images/owner_kandangan.webp",
    description:
      "A proud son of Kandangan village with a dream to bring his beloved hometown to the global stage. Through cultural events, innovative platforms, and community-based initiatives, Dandi works to showcase Kandangan’s rich heritage and vibrant spirit.",
  },
  {
    name: "Risdian Rifqy",
    age: 23,
    role: "Manager of Terrae Campground",
    instagram: "https://www.instagram.com/risdianrifqy",
    image: "/images/manager_campground.webp",
    description:
      "A passionate traveler with a vision to create a campground that feels natural, vibrant, and truly enjoyable. Risdian believes in designing outdoor spaces where people can connect with nature, relax, and experience the essence of the wild in comfort.",
  },
  {
    name: "Aprillia DM.",
    age: 24,
    role: "Manager of Terrae Trip",
    instagram: "https://www.instagram.com/aprilliadm30",
    image: "/images/manager_trip.jpg",
    description:
      "A joyful adventurer with a passion for traveling, exploring new places, and meeting people along the way. Aprillia bright energy and love for adventure turn every trip into a lively experience. More than just exploring, she brings laughter and warmth to the team, making each journey feel meaningful and unforgettable.",
  },
];

export default function BehindTerrae() {
  const [index, setIndex] = useState(0);
  const profile = profiles[index];

  return (
    <section className="bg-black text-white py-16 px-2 sm:py-24 sm:px-4">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Title */}
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            The People Behind Terrae
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-justify text-sm sm:text-base">
            Behind Terrae lies a group of passionate souls, each bringing their
            own story, energy, and dreams. Together, they share a vision of
            celebrating Lumajang’s beauty through sustainability, culture, and
            innovation.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 sm:gap-12 md:grid md:grid-cols-2 md:items-center">
          {/* Left: Text */}
          <motion.div
            key={profile.name}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-semibold">
              {profile.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Age {profile.age} • {profile.role}
            </p>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:underline break-all"
            >
              {profile.instagram.replace("https://www.instagram.com/", "@")}
            </a>
            <p className="text-gray-300 leading-relaxed text-justify text-sm sm:text-base">
              {profile.description}
            </p>
          </motion.div>

          {/* Right: Image + Gallery */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            {/* Main Image */}
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-[4/5] overflow-hidden rounded-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={profile.image}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 sm:gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent w-full justify-center">
              {profiles.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative min-w-[56px] min-h-[56px] w-14 h-14 sm:w-20 sm:h-20 rounded overflow-hidden border-2 ${
                    i === index ? "border-amber-600" : "border-gray-700"
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
