"use client";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import en from "../locales/en.json";
import id from "../locales/id.json";

type ContactProps = {
  title: string;
  tagline: string;
  about: string;
  code: string;
  faq: string;
  guild: string;
  contactus: string;
  whatsapp: string;
  email: string;
};

export default function Contact() {
  const [locale, setLocale] = useState<string | null>(null);

  useEffect(() => {
    const routerLocale = window.location.pathname.includes("/en") ? "en" : "id";
    setLocale(routerLocale);
  }, []);

  if (!locale) return null; // Wait until the locale is determined

  const contact = locale === "en" ? en.contact : id.contact;

  // Menyesuaikan href berdasarkan locale
  const codeOfConductLink =
    locale === "en" ? "/en/code-of-conduct" : "/id/code-of-conduct";
  const faqLink = locale === "en" ? "/en/faq" : "/id/faq";
  const guildHouseLink = locale === "en" ? "/en/guildhouse" : "/id/guildhouse";

  return (
    <section id="ourContact" className="bg-white py-16 text-[#252525]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Kanan */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold text-gray-900">
              {contact.title}
            </h2>
            <p className="text-lg">{contact.tagline}</p>
            <a
              href="https://www.instagram.com/terrae.wild"
              target="_blank"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              <FaInstagram className="mr-2" /> @terrae.wild
            </a>
          </div>

          {/* Kiri */}
          <div className="md:w-1/2 space-y-6">
            <motion.div
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h5 className="text-xl font-semibold mb-3">{contact.about}</h5>
              <ul className="list-none space-y-2">
                <li>
                  <a
                    href={codeOfConductLink}
                    className="text-blue-600 hover:underline"
                  >
                    {contact.code}
                  </a>
                </li>
                <li>
                  <a href={faqLink} className="text-blue-600 hover:underline">
                    {contact.faq}
                  </a>
                </li>
                <li>
                  <a
                    href={guildHouseLink}
                    className="text-blue-600 hover:underline"
                  >
                    {contact.guild}
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h5 className="text-xl font-semibold mb-3">
                {contact.contactus}
              </h5>
              <div className="space-y-3">
                <a
                  href="https://wa.me/6285158554505"
                  target="_blank"
                  className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  <FaWhatsapp className="mr-2" /> {contact.whatsapp}
                </a>
                <br />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=taptjakrawala@gmail.com"
                  target="_blank"
                  className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  <FaEnvelope className="mr-2" /> {contact.email}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
