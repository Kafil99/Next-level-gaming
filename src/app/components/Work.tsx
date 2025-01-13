import React from "react";

interface CardProps {
  badge: string;
  title: string;
  description: string;
  badgeColor: string;
}

function Card({ badge, title, description, badgeColor }: CardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 flex flex-col gap-4">
      <span className={`text-sm px-4 py-1 rounded-full w-fit ${badgeColor}`}>
        {badge}
      </span>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function WorkWithUs() {
  return (
    <div className="w-full min-h-screen bg-[#0a0826] p-6 md:p-12 flex items-center justify-center">
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Why work with us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            badge="Lorem ipsum"
            title="Lorem Ipsum"
            description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s."
            badgeColor="bg-pink-100 text-pink-800"
          />
          <Card
            badge="Lorem ipsum"
            title="Lorem Ipsum"
            description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s."
            badgeColor="bg-orange-100 text-orange-800"
          />
          <Card
            badge="Lorem ipsum"
            title="Lorem Ipsum"
            description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s."
            badgeColor="bg-green-100 text-green-800"
          />
        </div>
      </section>
    </div>
  );
}
