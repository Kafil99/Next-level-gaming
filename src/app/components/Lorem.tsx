import React from "react";
export default function Loremipsum() {
  return (
    <main className="w-full min-h-screen bg-[#1a0f8f] p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Lorem Ipsum
        </h1>
        <p className="text-white text-sm md:text-base mb-8">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="bg-[#e8e0d9] rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Stay in the loop
          </h2>
          <p className="text-sm md:text-base mb-4">
            Subscribe to receive the latest news and updates about TDA. We
            promise not to spam you!
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 px-4 py-3 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="px-6 py-3 bg-[#ff0033] text-white rounded-lg font-medium hover:bg-[#dd002c] transition-colors">
              Continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
