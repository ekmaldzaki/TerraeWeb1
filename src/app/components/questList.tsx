"use client";

import Quest from "../components/quest";
import { usePathname } from "next/navigation";
import questEn from "../locales/quest_en.json";
import questId from "../locales/quest_id.json";

export default function QuestList() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1]; // Dapetin locale dari URL

  // Pilih data quest berdasarkan locale
  const questsData = locale === "id" ? questId : questEn;

  return (
    <section id="questsList" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          Quests List
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {questsData.map((quest) => (
            <Quest
              key={quest.code}
              {...quest}
              status={
                quest.status === "available" ? "available" : "unavailable"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
