"use client";

import { usePathname } from "next/navigation";
import en from "../locales/en.json";
import id from "../locales/id.json";

export default function Benefit() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const data = locale === "id" ? id.benefits : en.benefits;

  return (
    <section className="bg-gray-50 text-[#252525] py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 border-b border-b-[0.5px] border-gray-300 pb-2 text-left">
          {locale === "id"
            ? "Keuntungan Menjadi Anggota Guild"
            : "Benefits of Becoming a Guild Member"}
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <div key={index} className="text-left space-y-4">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-700 whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
