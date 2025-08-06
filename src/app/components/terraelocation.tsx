"use client";

import { motion } from "framer-motion";

export default function TerraeLocation() {
  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content - Title & Description */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Where is Terrae?</h2>
          <p className="text-gray-300 text-justify">
            Terrae is located in{" "}
            <strong>Kandangan, Senduro, Lumajang, East Java, Indonesia</strong>
            , on the edge of the breathtaking Bromo Tengger Semeru National
            Park.
            <br />
            <br />
            A hidden sanctuary where nature thrives and local wisdom guides.
            Here, you’ll wake up to mountain air, walk through rice fields, and
            share stories with villagers over coffee grown in the backyard.
            Whether you’re a traveler, storyteller, or earth-lover, this place
            welcomes you.
            <br />
            <br />
            Come for the view. Stay for the people. Leave with purpose.
          </p>
          <a
            href="https://maps.app.goo.gl/VCpj5e9jazXt9VXt8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 rounded bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Open with Google Maps
          </a>
        </motion.div>

        {/* Right Content - Embedded Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-80 md:h-96 rounded overflow-hidden shadow-lg">
            <iframe
              title="Terrae Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.1067008441864!2d113.030278!3d-8.143921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd65ebbf2e1a5cf%3A0xf88e2275c8c3d65c!2sKandangan%2C%20Senduro%2C%20Lumajang%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1690987636542!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
