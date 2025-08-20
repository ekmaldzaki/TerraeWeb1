import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function FlexiblePricing() {
  return (
    <section className="bg-black text-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Let’s Make It Work, Together
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed text-justify">
        We believe travel should be about connection, not numbers. At Terrae,
        it’s more than just a stay, it’s about sharing moments, culture, and
        stories together. If the price doesn’t feel right for you, don’t worry.
        Just reach out, and we’ll figure something out together. What matters
        most is that you feel at home here, with us.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="https://wa.me/6285179856864?text=Hi%2C%20I%E2%80%99d%20love%20to%20stay%20at%20Terrae%20but%20I%20was%20wondering%20if%20we%20could%20adjust%20things%20a%20little.%20Can%20we%20talk%3F%20%3A%29"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          <FaWhatsapp className="text-xl" /> Message Us on WhatsApp
        </a>
        <a
          href="https://www.instagram.com/terrae.world/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-amber-600 hover:bg-amber-600 hover:text-white text-amber-600 font-semibold py-3 px-6 rounded-lg transition"
        >
          <FaInstagram className="text-xl" /> Say Hi on Instagram
        </a>
      </div>
    </section>
  );
}
