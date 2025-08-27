"use client";

import { useState } from "react";
import Image from "next/image";

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
      "Sink",
      "Seated toilet",
      "Shower",
    ],
    gallery: [
      "/images/room1_1.jpg",
      "/images/room1_2.jpg",
      "/images/room1_bath_1.jpg",
      "/images/room1_bath_2.jpg",
    ],
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
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Terrae Homestay</h2>
          <p className="text-gray-300 leading-relaxed">
            Discover a place to rest, reconnect, and recharge. Terrae Homestay
            offers a peaceful escape into nature with the warmth of community
            hospitality. Whether you're here for adventure, culture, or simply
            serenity — this is your new home in the highlands.
          </p>
        </div>

        {/* Room Sections */}
        {rooms.map((room, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-10 items-start border-b border-gray-700 pb-12"
          >
            {/* Image Album */}
            <div className="flex flex-col gap-4 items-center w-full">
              <div className="w-full aspect-[5/4] relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={selectedImages[index]}
                  alt={`${room.name} Main Image`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {room.gallery.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`w-20 h-20 relative rounded-md overflow-hidden cursor-pointer transition hover:opacity-80 ${
                      selectedImages[index] === img
                        ? "ring-2 ring-amber-600"
                        : ""
                    }`}
                    onClick={() => handleImageClick(index, img)}
                  >
                    <Image
                      src={img}
                      alt={`${room.name} Thumbnail ${imgIndex}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Room Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {room.description}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-lg mb-2">Facilities</h4>
                <div className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
                  {room.facilities.map((facility, fIndex) => (
                    <p key={fIndex}>• {facility}</p>
                  ))}
                </div>
              </div>

              {/* Price List */}
              <div>
                <h4 className="font-medium text-lg mb-3">
                  Rates per night, per room
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-amber-600 p-4 rounded-xl text-center shadow">
                    <p className="font-semibold text-white">No Breakfast</p>
                    <p className="text-white font-bold text-xl mt-1">
                      IDR 200k
                    </p>
                  </div>
                  <div className="bg-amber-600 p-4 rounded-xl text-center shadow">
                    <p className="font-semibold text-white">With Breakfast</p>
                    <p className="text-white font-bold text-xl mt-1">
                      IDR 300k
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Shared Facilities */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center">Shared Facilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sharedFacilities.map((facility, i) => (
              <div
                key={i}
                className="space-y-2 text-center bg-gray-900 rounded-xl p-3 shadow hover:shadow-lg transition"
              >
                <div className="w-full aspect-[5/4] relative rounded-lg overflow-hidden">
                  <Image
                    src={facility.src}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-white font-medium">{facility.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
