"use client";

import { motion } from "framer-motion";
import { Home, Trees, Mountain, Shirt } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const products = [
  {
    icon: <Home size={36} className="text-amber-500" />,
    title: "Stay & Retreats",
    description:
      "Reconnect with nature and yourself through our cozy homestays, crafted for rest, reset, and meaningful moments in a serene village setting.",
  },
  {
    icon: <Trees size={36} className="text-amber-500" />,
    title: "Experiences & Activities",
    description:
      "Join purposeful adventures like waterfall cleanups, conservation projects, trail runs, and nature-based gatherings that make a real impact.",
  },
  {
    icon: <Mountain size={36} className="text-amber-500" />,
    title: "Local Culture & Traditions",
    description:
      "Immerse in the stories, values, and rituals of the Tenggerese and Javanese people through cultural sharing, ceremonies, and artful connection.",
  },
  {
    icon: <Shirt size={36} className="text-amber-500" />,
    title: "Merch & Local Goods",
    description:
      "Take home a piece of Terrae with locally crafted t-shirts, hoodies, coffee, incense, and handmade items from the heart of Kandangan village.",
  },
];

export default function ProductList() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What We Offer
      </motion.h2>

      {/* Product Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border border-white/10 text-white hover:shadow-lg hover:shadow-amber-900/40 transition">
              <CardHeader className="flex flex-col items-center justify-center space-y-3">
                {item.icon}
                <CardTitle className="text-lg font-semibold text-center">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 leading-relaxed text-justify">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
