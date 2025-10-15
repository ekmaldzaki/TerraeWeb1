"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How many people have stayed at Terrae?",
    answer:
      "Quite a lot! We've welcomed both local and international guests. It’s always a great mix of cultures and stories coming together.",
  },
  {
    question: "How do I get there?",
    answer:
      "If you're traveling by train, stop at Klakah Station, we can pick you up for IDR 100,000. From Juanda International Airport, pickup is also available for IDR 200,000. Coming from somewhere else? Just let us know and we’ll help figure it out.",
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
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Amber glow orbs for luxury depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/95 z-0" />
      <div className="absolute top-20 left-1/4 w-[30rem] h-[30rem] bg-amber-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 right-1/3 w-[28rem] h-[28rem] bg-amber-400/10 rounded-full blur-3xl z-0" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 mt-3 max-w-xl mx-auto">
            Everything you need to know before joining{" "}
            <span className="text-amber-400">Terrae</span>.
          </p>
        </motion.div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-amber-500/30 transition-all duration-500"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-white hover:text-amber-500 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
