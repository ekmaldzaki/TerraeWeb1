"use client";

import { motion } from "framer-motion";
import { Home, Trees, Mountain, Shirt } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const products = [
  {
    icon: (
      <Home
        size={36}
        className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
      />
    ),
    title: "Stay & Retreats",
    description:
      "Reconnect with nature and yourself through our cozy homestays, crafted for rest, reset, and meaningful moments in a serene village setting.",
  },
  {
    icon: (
      <Trees
        size={36}
        className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
      />
    ),
    title: "Experiences & Activities",
    description:
      "Join purposeful adventures like waterfall cleanups, conservation projects, trail runs, and nature-based gatherings that make a real impact.",
  },
  {
    icon: (
      <Mountain
        size={36}
        className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
      />
    ),
    title: "Local Culture & Traditions",
    description:
      "Immerse in the stories, values, and rituals of the Tenggerese and Javanese people through cultural sharing, ceremonies, and artful connection.",
  },
  {
    icon: (
      <Shirt
        size={36}
        className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
      />
    ),
    title: "Merch & Local Goods",
    description:
      "Take home a piece of Terrae with locally crafted t-shirts, hoodies, coffee, incense, and handmade items from the heart of Kandangan village.",
  },
];

export default function ProductList() {
  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Amber gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90 z-0" />

      {/* Decorative amber orbs */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What We <span className="text-amber-600">Offer</span>
        </motion.h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className="backdrop-blur-lg bg-white/5 border border-white/20 rounded-3xl 
                  shadow-[0_8px_32px_rgba(255,255,255,0.05)]
                  hover:bg-white/10 hover:scale-[1.03]
                  transition-all duration-500 h-full flex flex-col justify-between"
              >
                <CardHeader className="flex flex-col items-center justify-center space-y-4 pt-8">
                  {item.icon}
                  <CardTitle className="text-lg font-semibold text-center text-white">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-8">
                  <p className="text-sm text-gray-300 leading-relaxed text-justify">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
