"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

import en from "../locales/en.json";
import id from "../locales/id.json";

interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  descriptionComplete: string;
  link?: string;
}

export default function Activities() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  const pathname = usePathname();
  const router = useRouter();

  const isIndonesian = pathname.startsWith("/id");
  const activities: Activity[] = isIndonesian ? id.activities : en.activities;

  return (
    <section className="bg-gray-50 text-[#252525] py-16">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Our Activities
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 md:hover:scale-105"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-start">
                {activity.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 text-justify">
                {activity.description}
              </p>
              <button
                onClick={() => setSelectedActivity(activity)}
                className="mt-4 bg-[#4e342e] text-white px-4 py-2 rounded-lg hover:bg-[#2c1d16] transition"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/10 backdrop-blur-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center"
          >
            <h3 className="text-2xl font-bold">{selectedActivity.title}</h3>
            <p
              className="text-gray-600 mt-2 text-start"
              dangerouslySetInnerHTML={{
                __html: selectedActivity.descriptionComplete,
              }}
            ></p>

            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => setSelectedActivity(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Close
              </button>

              <button
                onClick={() => {
                  if (selectedActivity.id === 3) return;
                  if (selectedActivity.id === 2) {
                    router.push("/guildhouse");
                  } else {
                    window.open(selectedActivity.link, "_blank");
                  }
                }}
                disabled={selectedActivity.id === 3}
                className={`px-4 py-2 rounded-lg transition ${
                  selectedActivity.id === 3
                    ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {selectedActivity.id === 3 ? "Coming Soon" : "Register"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
