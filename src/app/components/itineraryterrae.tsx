"use client";

import { motion } from "framer-motion";

const itineraryItems = [
  {
    day: "Day 1",
    title: "Sonjo (Visiting), Introduction & Schedule Discussion",
    description:
      "A warm welcome to the host, partners, and local community, followed by introductions and open discussion to set our shared schedule.",
    fixed: true,
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
    title: "Explore Selogending Site (History, Culture, Traditional Attire)",
    description:
      "Learn about the ancient history, local traditions, and cultural attire unique to Selogending.",
  },
  {
    title:
      "Explore Mandara Giri Semeru Temple (History, Culture, Traditional Attire)",
    description:
      "Immerse yourself in temple architecture, local beliefs, and the rich cultural heritage of the region.",
  },
  {
    title: "Cook & Enjoy Traditional/Local Cuisine",
    description:
      "Prepare and savor authentic dishes using local ingredients and age-old recipes.",
  },
  {
    title: "Food Exchange Between Guests",
    description:
      "Share and taste homemade meals from fellow guests, creating a unique cultural food experience.",
  },
  {
    title: "Selogending Coffee Processing (From Garden to Kitchen)",
    description:
      "Follow the journey of coffee beans from the plantation to the final brewed cup.",
  },
  {
    title: "Cardamom Tea Processing (From Garden to Kitchen)",
    description:
      "Experience how cardamom tea is grown, harvested, and prepared for a flavorful drink.",
  },
];

const puzzleShapes = [
  "polygon(0% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%)",
  "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20%)",
  "polygon(0% 0%, 80% 0%, 100% 20%, 100% 100%, 0% 100%)",
  "polygon(0% 0%, 100% 0%, 100% 80%, 80% 80%, 80% 100%, 0% 100%)",
];

export default function ItineraryTerrae() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">
          <span className="text-amber-600">Itinerary</span> List
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          This itinerary covers a{" "}
          <span className="text-amber-600">full-day experience</span> with{" "}
          <span className="text-amber-600">flexible timing</span>. Activities
          are adapted to available partners and mutual agreements. Every plan is
          discussed together, except for Day 1 which is always dedicated to{" "}
          <span className="text-amber-600">Sonjo (visiting)</span>,
          introductions with the host, partners, and the local community, plus
          schedule discussions.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {itineraryItems.map((item, index) => {
          const shape = puzzleShapes[index % puzzleShapes.length];
          return (
            <motion.div
              key={index}
              drag={!item.fixed}
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              whileHover={{ scale: 1.05 }}
              className={`p-6 w-72 min-h-[160px] flex flex-col justify-center text-center font-medium bg-amber-600 text-white shadow-lg relative ${
                item.fixed ? "ring-4 ring-amber-400" : ""
              }`}
              style={{
                clipPath: shape,
                cursor: item.fixed ? "default" : "grab",
              }}
            >
              {item.day && (
                <span className="absolute top-2 left-2 text-xs font-bold text-black bg-white px-2 py-1 rounded">
                  {item.day}
                </span>
              )}
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm mt-2">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
