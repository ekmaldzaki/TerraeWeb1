"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import en from "../locales/en.json";
import id from "../locales/id.json";
import AccordionItem from "./accordionItem";

type AccordionItemData = {
  question: string;
  answer: string;
};

type AccordionData = {
  [key: string]: AccordionItemData[];
};

type AccordionProps = {
  dataKey: string;
};

export default function Accordion({ dataKey }: AccordionProps) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const dataSet = locale === "id" ? id : en;

  const accordionData = dataSet.accordion as AccordionData;
  const data = accordionData?.[dataKey] || [];

  return (
    <section className="px-4 py-8 my-8 bg-gray-50 text-[#252525]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="divide-y divide-gray-200">
          {data.map((faq: AccordionItemData, index: number) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
