"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import en from "../locales/en.json";
import id from "../locales/id.json";

interface Event {
  dateRange: string;
  description: string;
  title: string;
  googleFormLink: string;
  dateEnd: string; // Format: YYYY-MM-DD
  isAvailable: boolean;
}

export default function GuildhouseDate() {
  const pathname = usePathname();
  const isIndonesian = pathname.startsWith("/id");
  const localeData = isIndonesian ? id : en;

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleCardClick = (event: Event) => {
    const now = new Date();
    const eventEndDate = new Date(event.dateEnd);
    if (eventEndDate >= now) {
      setSelectedEvent(event);
    }
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <motion.section
      className="bg-gray-50 text-[#252525] py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isIndonesian ? localeData.guildhouseDate.title : "Our Agenda"}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {localeData.guildhouseDate.events.map((event, index) => {
            const now = new Date();
            const eventEndDate = new Date(event.dateEnd);
            const isPastEvent = eventEndDate < now;

            return (
              <motion.div
                key={index}
                className={`relative border rounded-lg overflow-hidden shadow-lg ${
                  isPastEvent
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-xl transition-shadow cursor-pointer"
                }`}
                onClick={() => !isPastEvent && handleCardClick(event)}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6">
                  <h3
                    className="text-lg font-semibold mb-2"
                    dangerouslySetInnerHTML={{ __html: event.title }}
                  />
                  <p
                    className="text-sm text-gray-600"
                    dangerouslySetInnerHTML={{ __html: event.dateRange }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {selectedEvent && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center z-50 bg-black/10 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-1/2 lg:w-1/3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className="text-xl font-bold mb-4"
              dangerouslySetInnerHTML={{ __html: selectedEvent.title }}
            />
            <p
              className="text-gray-600 mb-6"
              dangerouslySetInnerHTML={{ __html: selectedEvent.description }}
            />
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 text-sm font-medium rounded hover:bg-gray-400"
                onClick={closeModal}
              >
                {isIndonesian ? "Batal" : "Cancel"}
              </button>
              {selectedEvent.isAvailable ? (
                <a
                  href={selectedEvent.googleFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600"
                >
                  {isIndonesian ? "Daftar" : "Register"}
                </a>
              ) : (
                <button
                  className="px-4 py-2 bg-gray-300 text-sm font-medium rounded cursor-not-allowed"
                  disabled
                >
                  {isIndonesian ? "Tidak Tersedia" : "Unavailable"}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}
