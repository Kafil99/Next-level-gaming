import React from "react";
import { Flame } from "lucide-react";
import Image from "next/image";

export default function Gamecards() {
  // GameCard Component
  const GameCard = ({ imageUrl, followers }: { imageUrl: string; followers: number }) => {
    return (
      <div className="relative group cursor-pointer">
        <div className="overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-105">
          <Image
            src={imageUrl}
            alt="Game cover"
            layout="responsive"
            width={500} // Replace with the actual width of your image
            height={500} // Replace with the actual height of your image
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="flex items-center gap-1 mt-2">
          <Flame size={20} className="text-white" />
          <span className="text-white font-medium">{followers} Followers</span>
        </div>
      </div>
    );
  };

  // Trending Games Data
  const trendingGames = [
    {
      imageUrl: "/Images/game1.png",
      followers: 40,
    },
    {
      imageUrl: "/Images/game2.png",
      followers: 40,
    },
    {
      imageUrl: "/Images/game3.png",
      followers: 40,
    },
    {
      imageUrl: "/Images/game4.png",
      followers: 40,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0a071b] p-4 md:p-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-2xl font-bold">
            Currently Trending Games
          </h2>
          <button className="px-4 py-2 bg-[#1e1b2e] text-white rounded-lg hover:bg-[#2a2640] transition-colors">
            SEE ALL
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trendingGames.map((game, index) => (
            <GameCard
              key={index}
              imageUrl={game.imageUrl}
              followers={game.followers}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
