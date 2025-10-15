"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const rooms = [
  {
    name: "Modern Forest Room",
    description:
      "A cozy modern room nestled within nature. Perfect for those seeking comfort and calm.",
    facilities: [
      "Queen size bed",
      "2 guests",
      "Fan",
      "Wardrobe",
      "Desk",
      "Private bathroom",
      "Seated toilet",
      "Shower",
    ],
    gallery: [
      "/images/room1_1.jpg",
      "/images/room1_2.jpg",
      "/images/room1_bath_1.jpg",
      "/images/room1_bath_2.jpg",
    ],
    price: {
      noBreakfast: "IDR 400k",
      withBreakfast: "IDR 450k",
    },
  },
  {
    name: "Wooden Bungalow Room",
    description:
      "A unique half-circle wooden bungalow room, blending rustic charm with comfort.",
    facilities: [
      "Queen size bed",
      "2 guests",
      "Fan",
      "Desk",
      "Private bathroom",
      "Sink",
      "Seated toilet",
      "Shower",
    ],
    gallery: [
      "/images/room2_1.jpg",
      "/images/room2_2.jpg",
      "/images/room2_bath_1.jpg",
      "/images/room2_bath_2.jpg",
    ],
    price: {
      noBreakfast: "IDR 400k",
      withBreakfast: "IDR 450k",
    },
  },
];

const sharedFacilities = [
  { title: "Living Room", src: "/images/livingroom.jpg" },
  { title: "Shared Kitchen", src: "/images/sharedkitchen.jpg" },
  { title: "Gazebo", src: "/images/gazebo.jpg" },
  { title: "Cleaning Area", src: "/images/cleaningarea.jpg" },
  { title: "Parking Spot", src: "/images/parkingspot.jpg" },
];

export default function TerraeHomestay() {
  const [selectedImages, setSelectedImages] = useState(
    rooms.map((room) => room.gallery[0])
  );

  const handleImageClick = (roomIndex: number, imageUrl: string) => {
    const updatedImages = [...selectedImages];
    updatedImages[roomIndex] = imageUrl;
    setSelectedImages(updatedImages);
  };

  return (
    <section className="relative bg-black text-white py-24 px-4 md:px-10 overflow-hidden">
      {/* Amber gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90 z-0" />

      {/* Amber glow orbs */}
      <div className="absolute top-32 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Terrae <span className="text-amber-600">Homestay</span>
          </motion.h2>
          <p className="text-gray-300 leading-relaxed text-balance text-justify">
            Discover a place to rest, reconnect, and recharge. Terrae Homestay
            offers a peaceful escape into nature with the warmth of community
            hospitality. Whether you're here for adventure, culture, or simply
            serenity, this is your new home in the highlands..
          </p>
        </div>

        {/* Room Sections */}
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-10 items-start bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_8px_32px_rgba(255,255,255,0.05)] transition-all duration-500 hover:bg-white/10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Room Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-amber-400">
                  {room.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {room.description}
                </p>
              </div>

              {/* Facilities */}
              <div>
                <h4 className="font-medium text-lg mb-2 text-white">
                  Facilities
                </h4>
                <div className="grid grid-cols-2 gap-1 text-gray-400 text-sm">
                  {room.facilities.map((facility, fIndex) => (
                    <p key={fIndex}>• {facility}</p>
                  ))}
                </div>
              </div>

              {/* Prices */}
              <div>
                <h4 className="font-medium text-lg mb-3 text-white">Rates</h4>
                <div className="flex gap-3 flex-wrap">
                  <span className="px-3 py-1 rounded-full border border-amber-600/70 text-amber-400 text-sm bg-amber-500/10 backdrop-blur-md">
                    No Breakfast — {room.price.noBreakfast}
                  </span>
                  <span className="px-3 py-1 rounded-full border border-amber-600/70 text-amber-400 text-sm bg-amber-500/10 backdrop-blur-md">
                    With Breakfast — {room.price.withBreakfast}
                  </span>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="flex flex-col gap-4 items-center w-full">
              <div className="w-full aspect-[5/4] relative rounded-2xl overflow-hidden border border-white/20 shadow-lg">
                <Image
                  src={selectedImages[index]}
                  alt={`${room.name} Main`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {room.gallery.map((img, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => handleImageClick(index, img)}
                    className={`relative rounded-lg overflow-hidden transition-all duration-300 
                      w-16 h-16 md:w-20 md:h-20 
                      hover:scale-105 ${
                        selectedImages[index] === img
                          ? "ring-2 ring-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                          : "opacity-80"
                      }`}
                  >
                    <Image
                      src={img}
                      alt={`${room.name} Thumbnail ${imgIndex}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Shared Facilities */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-amber-500">
            Shared Facilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sharedFacilities.map((facility, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-lg transition-all shadow-[0_8px_32px_rgba(255,255,255,0.05)]"
              >
                <div className="relative w-full aspect-[5/4]">
                  <Image
                    src={facility.src}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center text-white py-3 font-medium">
                  {facility.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
