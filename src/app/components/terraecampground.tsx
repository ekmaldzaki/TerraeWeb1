"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function TerraeCampground() {
  return (
    <main className="bg-black text-white pt-40">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-32 py-32 md:py-40">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 space-y-8 md:pr-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-700">
            Terrae Campground
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl text-justify leading-relaxed">
            <strong className="text-amber-500">
              Born from the need for pause
            </strong>{" "}
            in today’s fast-paced world, Terrae Campground is more than just a
            place to pitch your tent. It’s where you slow down, breathe deeper,
            and reconnect, with <span className="text-amber-500">nature</span>,{" "}
            <span className="text-amber-500">community</span>, and{" "}
            <span className="text-amber-500">yourself</span>.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl max-w-sm">
            <Image
              src="/images/campground1.jpg"
              alt="Terrae Campground"
              width={400}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Packages & Prices */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 drop-shadow-lg">
            Packages & Prices
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you seek{" "}
            <span className="text-amber-500">cultural immersion</span> or just a
            peaceful escape, we offer experiences that balance comfort and
            authenticity.
          </p>
        </motion.div>

        {/* Package Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-lg mt-16 max-w-md mx-auto"
        >
          <div className="relative h-80">
            <Image
              src="/images/campground2.jpg"
              alt="Cultural Camp"
              fill
              className="object-fit"
            />
          </div>
          <div className="p-8 space-y-4">
            <h3 className="text-xl font-semibold">
              Cultural Camp <span className="text-amber-500">(250K / pax)</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A <strong>2D1N journey</strong> that blends camping with heritage.
              Stay in a cozy 4-person tent, complete with sleeping bags, mats,
              cooking set, chairs, table, and tent lights.
            </p>
            <p className="text-amber-400 font-medium text-sm">
              Bonus: Guided exploration of Selogending site & Kandangan
              Waterfall.
            </p>
            <a
              href="https://wa.me/6282244862001?text=Hi%2C%20I%20would%20like%20to%20book%20a%20camp%20at%20Terrae%20Campground."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 transition font-semibold shadow-lg"
            >
              Book via WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* Gallery Activities */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 drop-shadow-lg">
            Gallery Activities
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore the{" "}
            <span className="text-amber-500">spirit of adventure</span> at
            Terrae Campground. Here’s a glimpse of experiences waiting for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            "/images/camp_activity1.jpg",
            "/images/camp_activity2.jpg",
            "/images/camp_activity3.jpg",
            "/images/camp_activity4.jpg",
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl hover:scale-105 transition"
            >
              <Image
                src={img}
                alt={`Activity ${i + 1}`}
                width={400}
                height={500}
                className="w-full aspect-[4/5] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rental Items */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 drop-shadow-lg">
            Rental Add-Ons
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Customize your camping experience with affordable extras — each
            crafted to make your stay{" "}
            <span className="text-amber-500">more comfortable & memorable</span>
            .
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-16">
          {[
            { name: "Mat", price: "5K / night", img: "/images/matras.jpg" },
            { name: "Gas", price: "5K / night", img: "/images/gas.jpg" },
            {
              name: "Hydropack",
              price: "20K / night",
              img: "/images/hydropack.jpg",
            },
            {
              name: "Folding Chair",
              price: "10K / night",
              img: "/images/kursi_lipat.jpeg",
            },
            {
              name: "Folding Table",
              price: "10K / night",
              img: "/images/meja2_lipat.jpeg",
            },
            {
              name: "Headlamp",
              price: "5K / night",
              img: "/images/headlamp.png",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-lg shadow-xl hover:scale-[1.02] transition"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-amber-400 text-sm font-semibold">
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white/10 border-t border-white/10 py-24 px-6 md:px-12 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-amber-400 drop-shadow-lg"
          >
            Contact Us
          </motion.h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/6282244862001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 transition font-semibold shadow-lg"
            >
              <FaWhatsapp size={20} /> WhatsApp
            </a>
            <a
              href="https://instagram.com/terrae.campground"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 hover:bg-white hover:text-black transition font-semibold"
            >
              <FaInstagram size={20} /> Instagram
            </a>
            <div className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-semibold bg-white/5 backdrop-blur-md">
              <FaMapMarkerAlt size={20} /> Kandangan Village, Senduro, Lumajang
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
