import React from "react";
import Image from "next/image"; // Import Next.js Image component

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

function TeamMemberCard({ name, role, imageUrl }: TeamMemberProps) {
  return (
    <div className="bg-black/20 rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
      <div className="w-24 h-24 mb-4 relative">
        <Image
          src={imageUrl}
          alt={`${name}'s photo`}
          layout="fill"
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-white text-lg font-medium">{name}</h3>
      <p className="text-gray-300 text-sm">{role}</p>
    </div>
  );
}

// Newsletter Subscribe Component
function NewsletterSubscribe() {
  return (
    <div className="bg-black/20 rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-white text-xl font-semibold mb-2">Stay in the loop</h2>
      <p className="text-gray-300 mb-4">
        Subscribe to receive the latest news and updates about TDA. We promise
        not to spam you!
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40"
        />
        <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
          Continue
        </button>
      </div>
    </div>
  );
}

// Main App Component
export default function Team() {
  const teamMembers = [
    {
      name: "John Peter",
      role: "COO",
      imageUrl: "/Images/team1.png",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      imageUrl: "/Images/team2.png",
    },
    {
      name: "Alice Brown",
      role: "CFO",
      imageUrl: "/Images/team3.png",
    },
    {
      name: "Mike Johnson",
      role: "CMO",
      imageUrl: "/Images/team4.png",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-blue-950 to-blue-700 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Team Section */}
        <section>
          <h2 className="text-white text-2xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </section>

        {/* Additional Section */}
        <section>
          <h2 className="text-white text-2xl font-bold mb-4">Lorem Ipsum</h2>
          <p className="text-gray-300 max-w-2xl">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </section>

        {/* Newsletter Section */}
        <section className="pb-8">
          <NewsletterSubscribe />
        </section>
      </div>
    </main>
  );
}
