"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type QuestProps = {
  code: string;
  imageUrl: string;
  title: string;
  location: string;
  registered: string;
  ends: string;
  description: string;
  task: string;
  reward: string;
  terms: string;
  status: "available" | "unavailable";
  applyLink: string;
};

export default function Quest({
  code,
  imageUrl,
  title,
  location,
  registered,
  ends,
  description,
  task,
  reward,
  terms,
  status,
  applyLink,
}: QuestProps) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const labels = {
    questCode: locale === "id" ? "Kode Quest" : "Quest Code",
    registered: locale === "id" ? "Terdaftar" : "Registered",
    ends: locale === "id" ? "Berakhir" : "Ends",
    available: locale === "id" ? "Quest Tersedia" : "Quest Available",
    notAvailable:
      locale === "id" ? "Quest Tidak Tersedia" : "Quest Not Available",
    applyNow: locale === "id" ? "Daftar Sekarang" : "Apply Now",
    notAvailableButton: locale === "id" ? "Belum Tersedia" : "Not Available",
  };

  return (
    <motion.div
      className="card text-center shadow-sm p-4 rounded-3xl bg-white text-[#252525] hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-code mb-2">
        <p className="font-bold text-sm">
          {labels.questCode}: {code}
        </p>
      </div>

      <img
        src={imageUrl}
        alt={title}
        className="rounded-3xl mx-auto mb-4"
        width={300}
        height={200}
      />

      <div className="card-body space-y-4">
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-gray-600">{location}</p>

        <p className="text-gray-500 text-sm">
          {labels.registered}: {registered || "-"} <br />
          {labels.ends}: {ends || "-"}
        </p>

        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="text-left" dangerouslySetInnerHTML={{ __html: task }} />
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: reward }}
        />
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: terms }}
        />

        <p
          className={`font-bold ${
            status === "available" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status === "available" ? labels.available : labels.notAvailable}
        </p>

        <a
          href={status === "available" ? applyLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={
            status === "unavailable" ? (e) => e.preventDefault() : undefined
          }
          className={`inline-block mt-2 px-4 py-2 rounded transition text-white ${
            status === "available"
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {status === "available" ? labels.applyNow : labels.notAvailableButton}
        </a>
      </div>
    </motion.div>
  );
}
