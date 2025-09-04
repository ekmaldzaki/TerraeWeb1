"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const itineraryItems = [
  {
    day: "Day 1",
    title: "Sonjo (Visiting), Introduction & Schedule Discussion",
    description:
      "A warm welcome to the host, partners, and local community, followed by introductions and open discussion to set our shared schedule.",
  },
  {
    title: "Explore Hidden Waterfall",
    description:
      "Discover a secluded natural gem, surrounded by lush greenery and untouched landscapes.",
  },
  {
    title: "Waterfall Cleanup",
    description:
      "Join forces to help preserve the beauty of the waterfall by collecting waste and restoring its natural charm.",
  },
  {
    title: "Trail Run to the Waterfall",
    description:
      "An adventurous run through scenic paths leading to the refreshing waters of the hidden falls.",
  },
  {
    title: "Explore Selogending Site",
    description:
      "Learn about the ancient history, local traditions, and cultural attire unique to Selogending.",
  },
  {
    title: "Mandara Giri Semeru Temple",
    description:
      "Immerse yourself in temple architecture, local beliefs, and the rich cultural heritage of the region.",
  },
  {
    title: "Cook & Enjoy Traditional Cuisine",
    description:
      "Prepare and savor authentic dishes using local ingredients and age-old recipes.",
  },
  {
    title: "Food Exchange Between Guests",
    description:
      "Share and taste homemade meals from fellow guests, creating a unique cultural food experience.",
  },
  {
    title: "Selogending Coffee Processing",
    description:
      "Follow the journey of coffee beans from the plantation to the final brewed cup.",
  },
  {
    title: "Cardamom Tea Processing",
    description:
      "Experience how cardamom tea is grown, harvested, and prepared for a flavorful drink.",
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

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[200px] gap-6">
        {itineraryItems.map((item, index) => {
          let gridClass = "lg:col-span-2 lg:row-span-1"; // default size

          if (index === 0) {
            gridClass = "lg:col-span-3 lg:row-span-2"; // Day 1 big
          } else if (index === 1 || index === 2) {
            gridClass = "lg:col-span-3 lg:row-span-1"; // wider horizontal
          }

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={gridClass}
            >
              <Card className="bg-white/5 border border-white/10 text-white h-full hover:shadow-lg hover:shadow-amber-900/30 transition flex flex-col">
                <CardHeader>
                  {item.day && (
                    <span className="text-xs font-bold text-amber-600 bg-white/10 px-2 py-1 rounded w-fit mb-2">
                      {item.day}
                    </span>
                  )}
                  <CardTitle className="text-lg font-semibold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex">
                  <CardDescription className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
