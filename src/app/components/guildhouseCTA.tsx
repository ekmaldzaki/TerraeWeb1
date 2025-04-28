"use client";

import { usePathname } from "next/navigation";
import en from "../locales/en.json";
import id from "../locales/id.json";

export default function GuildhouseCTA() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const data = locale === "id" ? id.guildhouseCTA : en.guildhouseCTA;

  return (
    <section className="bg-gray-50 text-[#252525] py-16">
      <div className="container mx-auto px-6 space-y-12">
        {data.map((item, index) => (
          <div key={index} className="text-center">
            <h2 className="text-4xl font-bold mb-6 whitespace-pre-line">
              {item.title}
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="mb-6 text-lg whitespace-pre-line text-justify">
                {item.description}
              </p>
              <div className="flex justify-center">
                <a
                  href={item.buttonLink}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded transition"
                  target={
                    item.buttonLink.startsWith("http") ? "_blank" : "_self"
                  }
                  rel={
                    item.buttonLink.startsWith("http")
                      ? "noopener noreferrer"
                      : ""
                  }
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
