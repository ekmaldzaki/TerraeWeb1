"use client";

import { motion } from "framer-motion";

const activities = [
  {
    image: "/images/activities_1.jpg",
    title: "Volunteers (Long Stay)",
    subtitle: "Start from 15 USD",
    targetId: "volunteers",
  },
  {
    image: "/images/activities_2.jpg",
    title: "Backpackers (2D1N)",
    subtitle: "20 USD/pax",
    targetId: "backpackers",
  },
  {
    image: "/images/activities_3.jpg",
    title: "Travelers (2D1N)",
    subtitle: "70 USD/pax",
    targetId: "travelers",
  },
  {
    image: "/images/activities_4.jpg",
    title: "Journey+ (2D1N)",
    subtitle: "150 USD/pax",
    targetId: "journeyplus",
  },
];

export default function ActivitiesList() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black py-16 px-4 text-white">
      {/* Title */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        You can join our activities as:
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between text-center">
              <div>
                <h3 className="text-xl font-semibold mb-1">{activity.title}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  {activity.subtitle}
                </p>
              </div>
              <button
                onClick={() => handleScroll(activity.targetId)}
                className="mt-auto bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition"
              >
                Learn more
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
