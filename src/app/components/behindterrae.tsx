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
    role: "Founder of Komunitas Ekowisata Lumajang",
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
  {
    name: "Muhammad Akyas",
    age: 20,
    role: "Manager of Terrae Wild",
    instagram: "https://www.instagram.com/akyasalf",
    image: "/images/manager_wild.jpg",
    description:
      "An avid trail runner and nature enthusiast who discovered his true calling in the wilderness. Akyas strives to craft experiences where every step on the trail resonates with freedom, every breath carries the essence of the forest, and every journey becomes a bond between people and nature’s raw beauty.",
  },
];

export default function BehindTerrae() {
  const [index, setIndex] = useState(0);
  const profile = profiles[index];

  return (
    <section className="relative bg-black text-white py-16 px-4 sm:py-24 overflow-hidden">
      {/* Amber gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90 z-0" />

      {/* Decorative glow orbs */}
      <div className="absolute top-32 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Title */}
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            The People Behind <span className="text-amber-600">Terrae</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-justify text-sm sm:text-base">
            Behind Terrae lies a group of passionate souls, each bringing their
            own story, energy, and dreams. Together, they share a vision of
            celebrating Lumajang’s beauty through sustainability, culture, and
            innovation.
          </p>
        </div>

        {/* Main content layout */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 sm:gap-12 md:items-start">
          {/* ===== LEFT SECTION ===== */}
          <div className="flex flex-col items-center md:items-start space-y-6 w-full">
            {/* MOBILE layout: text left + photo right */}
            <div className="sm:hidden flex items-stretch justify-between w-full gap-4">
              {/* Left Card */}
              <div
                className="flex-1 backdrop-blur-lg bg-white/5 border border-white/20 rounded-3xl shadow-[0_8px_32px_rgba(255,255,255,0.05)]
                  p-4 flex flex-col justify-between transition-all duration-300 hover:bg-white/10"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{profile.name}</h3>
                  <p className="text-xs text-gray-400">
                    Age {profile.age} • {profile.role}
                  </p>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-amber-400 hover:underline break-all transition-colors"
                  >
                    {profile.instagram.replace(
                      "https://www.instagram.com/",
                      "@"
                    )}
                  </a>
                  <p className="text-gray-200 text-xs leading-relaxed ">
                    {profile.description}
                  </p>
                </div>
              </div>

              {/* Right Photo — outside card, proportional */}
              <div className="relative flex-shrink-0 w-[40%] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* DESKTOP vertical card */}
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="hidden sm:block backdrop-blur-lg bg-white/5 border border-white/20 rounded-3xl shadow-[0_8px_32px_rgba(255,255,255,0.05)]
                 p-6 sm:p-8 space-y-4 sm:space-y-5 transition-all duration-300 hover:bg-white/10 w-full"
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
                className="text-amber-500 hover:text-amber-400 hover:underline break-all transition-colors"
              >
                {profile.instagram.replace("https://www.instagram.com/", "@")}
              </a>
              <p className="text-gray-200 leading-relaxed text-justify text-sm sm:text-base">
                {profile.description}
              </p>
            </motion.div>

            {/* Gallery buttons below (desktop) */}
            <div className="hidden sm:flex flex-wrap justify-center gap-3 pt-2">
              {profiles.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 
                    ${
                      i === index
                        ? "border-amber-500 scale-110"
                        : "border-gray-700 hover:border-amber-600 hover:scale-105"
                    }`}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ===== RIGHT SECTION (Desktop) ===== */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={profile.image}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-black"
                >
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover rounded-3xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ===== MOBILE GALLERY single row ===== */}
        <div className="sm:hidden flex justify-center gap-2 mt-4">
          {profiles.map((p, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 
                ${
                  i === index
                    ? "border-amber-500 scale-105"
                    : "border-gray-700 hover:border-amber-600 hover:scale-105"
                }`}
            >
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
