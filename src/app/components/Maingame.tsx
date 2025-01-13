import React from "react";
import Image from "next/image"; 

export default function Maingame() {
  return (
    <main className="w-full min-h-screen bg-[#0D0B21] text-white px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 max-w-3xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>
          <div className="max-w-xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Lorem Ipsum</h2>
            <p className="text-sm md:text-base text-gray-300 mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute right-0 top-0 transform translate-x-1/4 -translate-y-1/4">
            <div className="grid grid-cols-8 gap-2">
              {[...Array(48)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-red-500 rounded-full opacity-70"
                ></div>
              ))}
            </div>
          </div>
          <Image
            src="/Images/callofduty.png"
            alt="Call of Duty Mobile"
            width={1920} 
            height={1080} 
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </main>
  );
}
