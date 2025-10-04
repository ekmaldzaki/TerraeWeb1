"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function TerraeCampground() {
  return (
    <main className="bg-black text-white pt-36">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Terrae Campground
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl text-justify">
            <strong className="text-amber-600">
              Born from the need for pause
            </strong>{" "}
            in today’s fast-paced world, Terrae Campground is more than just a
            place to pitch your tent. It’s where you slow down, breathe deeper,
            and reconnect, with <span className="text-amber-600">nature</span>,
            with <span className="text-amber-600">community</span>, and with{" "}
            <span className="text-amber-600">yourself</span>.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 mt-10 md:mt-0 flex justify-center"
        >
          <Image
            src="/images/campground1.jpg"
            alt="Terrae Campground"
            width={400} // scale down 60-70% dari 600
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
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
          <h2 className="text-3xl md:text-4xl font-bold">Packages & Prices</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Whether you seek{" "}
            <span className="text-amber-600">cultural immersion</span> or just a
            peaceful escape, we offer experiences that balance comfort and
            authenticity.
          </p>
        </motion.div>

        {/* Cultural Camp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-lg overflow-hidden shadow-lg mt-12 max-w-lg mx-auto"
        >
          <Image
            src="/images/campground2.jpg"
            alt="Cultural Camp"
            width={360} // scaled down dari 600
            height={450}
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">
              Cultural Camp <span className="text-amber-600">(250K / pax)</span>
            </h3>
            <p className="text-gray-300 text-sm">
              A <strong>2D1N journey</strong> that blends camping with heritage.
              Stay in a cozy 4-person tent, complete with sleeping bags, mats,
              cooking set, chairs, table, and tent lights.
            </p>
            <p className="text-amber-500 font-medium text-sm">
              Bonus: Guided exploration of Selogending site & Kandangan
              Waterfall.
            </p>
            {/* Booking Button */}
            <a
              href="https://wa.me/6282244862001?text=Hi%2C%20I%20would%20like%20to%20book%20a%20camp%20at%20Terrae%20Campground."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-6 py-3 rounded bg-amber-600 hover:bg-amber-800 transition text-white font-semibold"
            >
              Book via WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* Gallery Activities */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Gallery Activities</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore the{" "}
            <span className="text-amber-600">spirit of adventure </span>
            at Terrae Campground. Here’s a glimpse of activities waiting for
            you.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
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
              className="rounded-lg overflow-hidden shadow-lg"
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
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Rental Add-Ons</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Customize your camping experience with affordable extras. Each item
            is designed to make your stay{" "}
            <span className="text-amber-600">more comfortable & memorable</span>
            .
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              name: "Mat",
              price: "5K / night",
              img: "/images/matras.jpg",
            },
            {
              name: "Gas",
              price: "5K / night",
              img: "/images/gas.jpg",
            },
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
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={300}
                height={300}
                className="object-cover w-full aspect-square"
              />
              <div className="p-4 text-center">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-amber-500 text-sm font-semibold">
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white/5 py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Contact Us
          </motion.h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/6282244862001?text=Hi%2C%20I%20would%20like%20to%20book%20a%20camp%20at%20Terrae%20Campground."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded bg-amber-600 hover:bg-amber-800 transition text-white font-semibold"
            >
              <FaWhatsapp size={20} /> WhatsApp
            </a>
            <a
              href="https://instagram.com/terrae.campground"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded border border-white hover:bg-white hover:text-black transition font-semibold"
            >
              <FaInstagram size={20} /> Instagram
            </a>
            <div className="flex items-center gap-2 px-6 py-3 rounded border border-white text-white font-semibold">
              <FaMapMarkerAlt size={20} /> Kandangan Village, Senduro, Lumajang
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
