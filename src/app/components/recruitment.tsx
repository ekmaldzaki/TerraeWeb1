"use client";

import { usePathname } from "next/navigation";
import en from "../locales/en.json";
import id from "../locales/id.json";

export default function Recruitment() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const data = locale === "id" ? id.recruitment : en.recruitment;

  return (
    <section className="px-4 py-5 my-5 text-center bg-gray-50">
      <h2 className="text-4xl font-bold mb-4 text-[#252525]">{data.title}</h2>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4 text-[#252525]">{data.description}</p>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
        {data.cards.map((card, index) => (
          <div
            className="max-w-sm w-full bg-white shadow-sm rounded-lg p-6 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-x"
            key={index}
          >
            <div className="card-body">
              <h4 className="font-bold text-xl text-[#252525] mb-3">
                {card.title}
              </h4>
              <p className="text-[#252525] text-justify mb-4">
                {card.description}
              </p>
              <a
                className="btn btn-success inline-block bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                href={card.buttonLink}
                role="button"
                target={card.buttonLink.startsWith("http") ? "_blank" : "_self"}
                rel={
                  card.buttonLink.startsWith("http")
                    ? "noopener noreferrer"
                    : ""
                }
              >
                {card.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
