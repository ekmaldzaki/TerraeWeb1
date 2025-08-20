"use client";

import Image from "next/image";

const reviews = [
  {
    name: "Lina Rischawy",
    country: "Germany",
    image: "/images/review_lina_rischawy.jpg",
    text: `I was the very first volunteer at Terrae, and I’m truly impressed by what this group is trying to achieve. Our future depends on the younger generation, yet our planet is already on the edge of irreversible destruction. During my time here, we joined cleanups, talked with locals, and explored solutions for waste management. Terrae is stepping in where sometimes governments fail, and that deserves full support.`,
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
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-600">
            Honest Voices from Terrae
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here’s what people who have visited Terrae say about their
            experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-sm text-amber-600">{review.country}</p>
                </div>
              </div>

              {/* Body */}
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
