"use client";

type ProfileCardProps = {
  name: string;
  role: string;
  imageUrl: string;
};

export default function ProfileCard({
  name,
  role,
  imageUrl,
}: ProfileCardProps) {
  return (
    <div className="card text-center shadow-sm p-6 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl">
      <div className="flex justify-center mb-4">
        <img
          src={imageUrl}
          alt={`Profile image of ${name}`}
          className="rounded-full object-cover"
          width={140}
          height={140}
        />
      </div>
      <div className="card-body text-center">
        <h4 className="font-bold text-lg text-[#252525]">{name}</h4>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
}
