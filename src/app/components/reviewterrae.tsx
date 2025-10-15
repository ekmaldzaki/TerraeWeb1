"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const reviews = [
  {
    name: "Lina Rischawy",
    country: "Germany",
    image: "/images/review_lina_rischawy.jpg",
    text: `I was the very first volunteer at Terrae, and I’m truly impressed by what this group is trying to achieve. Our future depends on the younger generation, yet our planet is already on the edge of irreversible destruction. During my time here, we joined cleanups, talked with locals, and explored solutions for waste management. Terrae is stepping in where sometimes governments fail, and that deserves full support..`,
  },
  {
    name: "Nicolas & Kayet",
    country: "France",
    image: "/images/review_nicolas_kayet.jpg",
    text: `We stayed for over a month at Terrae, focusing on research around flora and fauna, as well as cultural exchange. Even before Terrae had a fixed homestay, we could still fully experience everything, community activities, conservation projects, and moments of fun with the team and local villagers. It was a unique mix of research, cultural sharing, and personal connection.`,
  },
  {
    name: "Lina Reininghaus",
    country: "Germany",
    image: "/images/review_lina_reininghaus.jpg",
    text: `I loved my stay at Terrae! Everyone was so welcoming, and I felt that my time and ideas were genuinely appreciated. Each day brought something new, whether it was learning about culture, joining activities, or starting small projects. It’s the kind of place where you feel free to contribute. I’d definitely recommend Terrae to travelers looking for a meaningful and unforgettable experience in Java.`,
  },
  {
    name: "Madeleine",
    country: "United Kingdom",
    image: "/images/review_madeleine.jpg",
    text: `Eco Terrae is such an exciting project to be part of. There’s so much flexibility here, you can contribute in ways that suit your skills, while also learning from the community. Beyond that, it was an amazing cultural experience. I learnt so much about local traditions and how they connect with nature. It was a highlight of my travels. Huge thanks to Ghifarry and the team 💖`,
  },
  {
    name: "Sam",
    country: "United Kingdom",
    image: "/images/review_sam.jpg",
    text: `I came to Terrae around the same time as Madeleine, and my experience was equally memorable. Even when I faced a setback losing something valuable, the Terrae team and local community immediately stepped in to help. That kindness and care left a strong impression. It’s not just a project, it feels like family.`,
  },
  {
    name: "Leonard & Clarissa",
    country: "France",
    image: "/images/review_leo_clarissa.jpg",
    text: `We originally planned Terrae as just a short transit stop, but it turned into so much more. We joined cleanups, trail runs, and even took part in local traditions like dance and community celebrations. One of the highlights was exchanging food, we shared French dishes, while enjoying traditional Kandangan meals together. Even in a brief stay, we felt fully included in the Terrae experience.`,
  },
];

export default function ReviewTerrae() {
  return (
    <section className="relative bg-black text-white py-20 px-4 overflow-hidden">
      {/* Subtle gradient & amber glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90 z-0" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-amber-500/10 rounded-full blur-3xl z-0" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.4)]">
            Honest Voices from Terrae
          </h2>
          <p className="text-gray-300 text-sm md:text-base mt-3 max-w-xl mx-auto">
            Here’s what people who have visited Terrae say about their
            experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-white/10 backdrop-blur-md border border-white/10 hover:border-amber-500/40 hover:shadow-md hover:shadow-amber-900/20 transition-all duration-500 p-4 md:p-5">
                <CardHeader className="flex flex-row items-center gap-4 p-0 mb-2">
                  <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-amber-500/30 group-hover:border-amber-500/70 transition">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-base md:text-lg font-semibold text-white">
                      {review.name}
                    </CardTitle>
                    <CardDescription className="text-amber-500 text-xs md:text-sm">
                      {review.country}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="p-0">
                  <p className="text-gray-300 text-sm leading-relaxed md:text-[15px]">
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
