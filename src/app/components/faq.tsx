"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How many volunteers are there?",
    answer:
      "We’ve welcomed a vibrant mix of local and international volunteers — including professionals from Germany, Netherlands, and more. Our growing network is passionate, skilled, and united by a shared mission to make a meaningful impact.",
  },
  {
    question: "Why should I join?",
    answer:
      "This is more than a trip — it’s a journey of self-discovery. Immerse yourself in authentic Indonesian culture, contribute to real change in Senduro, Lumajang, and take a break from the modern world to reconnect with what truly matters.",
  },
  {
    question: "How can I get there?",
    answer:
      "We offer two convenient pickup options: from Klakah Train Station for an additional IDR 100,000, or from Juanda International Airport for IDR 200,000. We’ll make sure your journey begins smoothly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-4 py-64 relative">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">FAQs</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium hover:bg-gray-800 transition"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <motion.div
              initial={false}
              animate={{ height: openIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden px-6"
            >
              {openIndex === index && (
                <p className="py-2 text-sm text-gray-300">{faq.answer}</p>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
