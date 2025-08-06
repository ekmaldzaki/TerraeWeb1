"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How many people have stayed at Terrae?",
    answer:
      "Quite a lot! We've welcomed both local and international guests. It’s always a great mix of cultures and stories coming together.",
  },
  {
    question: "How do I get there?",
    answer:
      "If you're traveling by train, stop at Klakah Station,  we can pick you up for IDR 100,000. From Juanda International Airport, pickup is available too for IDR 200,000. Coming from somewhere else? Just let us know and we’ll help figure it out.",
  },
  {
    question: "Is Terrae just a place to stay?",
    answer:
      "Not at all! When you stay at Terrae, you also get to be part of the community, nature activities, local events, cultural rituals, and even cooking with locals. It’s a full experience, not just a room.",
  },
  {
    question: "Can I join the activities without staying overnight?",
    answer:
      "Yes, you can! But we highly recommend staying for a few days, ideally a week, to really soak in the nature, culture, and everything we offer. That’s how you get the full Terrae experience.",
  },
  {
    question: "Are there activities every day?",
    answer:
      "Not necessarily daily, but there’s always something going on, from trail runs, clean-ups, cultural events, or just meaningful conversations. It’s laid-back but impactful.",
  },
  {
    question: "Do I need to speak Indonesian?",
    answer:
      "Nope! We often host international travelers and volunteers, so English works just fine. But if you’re curious about the local language, we’d love to teach you!",
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
