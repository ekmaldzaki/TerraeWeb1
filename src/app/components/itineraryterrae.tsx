"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

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
    category: "From Garden to Kitchen",
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
    <section className="bg-black text-white py-16 px-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">
          <span className="text-amber-600">Itinerary</span> List
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          This itinerary covers a{" "}
          <span className="text-amber-600">full-day experience</span> with{" "}
          <span className="text-amber-600">flexible timing</span>. Activities
          are adapted to available partners and mutual agreements.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {itineraryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="flex flex-row bg-white/5 border border-white/10 text-white h-full hover:shadow-lg hover:shadow-amber-900/30 transition overflow-hidden p-4 gap-4">
              {/* Image (square, rounded) */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 shrink-0">
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center flex-1">
                <CardHeader className="p-0 mb-2">
                  {item.day && (
                    <span className="text-xs font-bold text-amber-600 bg-white/10 px-2 py-1 rounded w-fit mb-1">
                      {item.day}
                    </span>
                  )}
                  <CardTitle className="text-lg font-semibold">
                    {item.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
