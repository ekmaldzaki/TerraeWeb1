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
    age: 27,
    role: "Founder of Kandangan Heritage",
    instagram: "https://www.instagram.com/dandi_prasiska",
    image: "/images/owner_kandangan.jpg",
    description:
      "A proud son of Kandangan village with a dream to bring his beloved hometown to the global stage. Through cultural events, innovative platforms, and community-based initiatives, Dandi works to showcase Kandangan’s rich heritage and vibrant spirit.",
  },
];

export default function BehindTerrae() {
  const [index, setIndex] = useState(0);
  const profile = profiles[index];

  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            The People Behind Terrae
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-justify">
            Behind Terrae lies a group of passionate souls, each bringing their
            own story, energy, and dreams. Together, they share a vision of
            celebrating Lumajang’s beauty through sustainability, culture, and
            innovation.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            key={profile.name}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">{profile.name}</h3>
            <p className="text-sm text-gray-400">
              Age {profile.age} • {profile.role}
            </p>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:underline"
            >
              {profile.instagram.replace("https://www.instagram.com/", "@")}
            </a>
            <p className="text-gray-300 leading-relaxed text-justify">
              {profile.description}
            </p>
          </motion.div>

          {/* Right: Image + Gallery */}
          <div className="flex flex-col items-center gap-6">
            {/* Main Image */}
            <div className="relative w-full max-w-[400px] aspect-[4/5] overflow-hidden rounded-lg">
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
            <div className="flex gap-4">
              {profiles.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative w-20 h-20 rounded overflow-hidden border-2 ${
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
