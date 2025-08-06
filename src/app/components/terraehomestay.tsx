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
  const [breakfast, setBreakfast] = useState<"nobreakfast" | "withbreakfast">(
    "nobreakfast"
  );

  // Track selected image per room index
  const [selectedImages, setSelectedImages] = useState(
    rooms.map((room) => room.gallery[0]) // default image: gallery[0]
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
          <p className="text-gray-300 text-justify">
            Discover a place to rest, reconnect, and recharge. Terrae Homestay
            offers a peaceful escape into nature with the comfort of
            community-based hospitality. Whether you're staying for adventure,
            culture, or serenity. This is your new home in the highlands.
          </p>
        </div>

        {/* Room Sections */}
        {rooms.map((room, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image Album */}
            <div className="flex flex-col gap-4 items-center w-full">
              <div className="w-full aspect-[5/4] relative rounded-md overflow-hidden">
                <Image
                  src={selectedImages[index]}
                  alt={`${room.name} Main Image`}
                  fill
                  className="rounded-md object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
                {room.gallery.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`w-20 h-20 relative rounded overflow-hidden cursor-pointer transition hover:opacity-80 ${
                      selectedImages[index] === img
                        ? "ring-2 ring-amber-800"
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
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">{room.name}</h3>
              <p className="text-gray-300 text-justify">{room.description}</p>
              <ul className="list-disc list-inside text-gray-400">
                {room.facilities.map((facility, fIndex) => (
                  <li key={fIndex}>{facility}</li>
                ))}
              </ul>

              {/* Switch */}
              <div className="flex items-center gap-4 mt-4">
                <span className="text-sm text-gray-300">Breakfast</span>
                <button
                  onClick={() =>
                    setBreakfast(
                      breakfast === "withbreakfast"
                        ? "nobreakfast"
                        : "withbreakfast"
                    )
                  }
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 ${
                    breakfast === "withbreakfast"
                      ? "bg-amber-800"
                      : "bg-gray-600"
                  }`}
                >
                  <span
                    className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${
                      breakfast === "withbreakfast"
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
                <span className="text-sm text-gray-300">
                  {breakfast === "withbreakfast"
                    ? "With Breakfast (IDR 300k)"
                    : "No Breakfast (IDR 200k)"}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Shared Facilities */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center">Shared Facilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sharedFacilities.map((facility, i) => (
              <div key={i} className="space-y-2 text-center">
                <div className="w-full aspect-[5/4] relative rounded overflow-hidden">
                  <Image
                    src={facility.src}
                    alt={facility.title}
                    fill
                    className="object-cover rounded"
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
