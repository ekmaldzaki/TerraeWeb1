"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const itineraryItems = [
  {
    category: "Sonjo (Visiting)",
    description:
      "A warm welcome to the host, partners, and local community, followed by introductions and open discussion to set our shared schedule.",
    image: "/images/itinerary_sonjo.jpg",
    day: "Day 1",
  },
  {
    category: "Explore Waterfall",
    description:
      "Discover a secluded natural gem, surrounded by lush greenery and untouched landscapes.",
    image: "/images/itinerary_explorewaterfall.jpg",
  },
  {
    category: "Clean Up Waterfall",
    description:
      "Join forces to help preserve the beauty of the waterfall by collecting waste and restoring its natural charm.",
    image: "/images/itinerary_cleanup.jpg",
  },
  {
    category: "Trail Run Waterfall",
    description:
      "An adventurous run through scenic paths leading to the refreshing waters of the hidden falls.",
    image: "/images/itinerary_trailrun.jpg",
  },
  {
    category: "Explore Campground",
    description:
      "Experience outdoor life by exploring the serene campground and connecting with nature.",
    image: "/images/itinerary_campground.jpg",
  },
  {
    category: "Explore Selogending Site",
    description:
      "Learn about the ancient history, local traditions, and cultural attire unique to Selogending.",
    image: "/images/itinerary_selogendingsite.jpg",
  },
  {
    category: "Explore Mandara Giri Semeru Temple",
    description:
      "Immerse yourself in temple architecture, local beliefs, and the rich cultural heritage of the region.",
    image: "/images/itinerary_temple.jpg",
  },
  {
    category: "From Garden to Table",
    description:
      "Follow the journey of coffee beans and cardamom tea from the plantation to the final brewed cup.",
    image: "/images/itinerary_coffee.jpg",
  },
  {
    category: "Cook & Enjoy Traditional Cuisine",
    description:
      "Prepare and savor authentic dishes using local ingredients and age-old recipes.",
    image: "/images/itinerary_cooking.jpg",
  },
  {
    category: "Food Exchange",
    description:
      "Share and taste homemade meals from fellow guests, creating a unique cultural food experience.",
    image: "/images/itinerary_food-exchange.jpg",
  },
];

export default function ItineraryTerrae() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Elegant amber gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90 z-0" />
      {/* Amber glow orbs for soft luxury */}
      <div className="absolute top-24 left-1/3 w-[32rem] h-[32rem] bg-amber-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-amber-400/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-5xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-amber-500">Itinerary</span> List
          </h2>
          <p className="mt-5 text-lg text-gray-300 leading-relaxed">
            This itinerary offers a{" "}
            <span className="text-amber-500">
              full-day immersive experience
            </span>{" "}
            with <span className="text-amber-500">flexible timing</span>. Every
            activity adapts to local partnerships, weather, and shared
            intentions, keeping the spirit of discovery alive.
          </p>
        </motion.div>

        {/* Grid of Itinerary Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {itineraryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="flex flex-row bg-white/5 backdrop-blur-lg border border-white/10 text-white h-full hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] hover:scale-[1.01] transition-transform duration-300 overflow-hidden p-5 gap-5 rounded-2xl">
                {/* Image */}
                <div className="relative w-36 h-36 md:w-40 md:h-40 shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.category}
                    fill
                    className="object-cover hover:scale-110 transition duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center flex-1">
                  <CardHeader className="p-0 mb-2">
                    {item.day && (
                      <span className="text-xs font-semibold text-amber-400 bg-white/10 px-2 py-1 rounded mb-2 w-fit tracking-wide">
                        {item.day}
                      </span>
                    )}
                    <CardTitle className="text-lg md:text-xl font-semibold">
                      {item.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
