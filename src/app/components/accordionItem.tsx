"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AccordionItemProps = {
  question: string;
  answer: string;
};

export default function AccordionItem({
  question,
  answer,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 bg-white shadow-sm rounded-lg p-4">
      <button
        className="w-full text-left py-4 font-semibold text-[#252525] hover:text-green-700 transition duration-200 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="ml-4 text-green-600 text-xl">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="pb-4 text-gray-600 leading-relaxed text-sm"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
