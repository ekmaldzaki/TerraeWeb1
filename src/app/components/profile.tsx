"use client";

import { usePathname } from "next/navigation";
import profileEn from "../locales/profile_en.json";
import profileId from "../locales/profile_id.json";
import ProfileCard from "../components/profileCard";

export default function Profile() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const profiles = locale === "id" ? profileId : profileEn;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              role={profile.role}
              imageUrl={profile.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
