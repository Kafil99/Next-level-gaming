"use client";

import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function News() {
  // Array to store image paths
  const images = [
    "/Images/thumbnail1.png",
    "/Images/thumbnail2.png",
    "/Images/thumbnail3.png",
    "/Images/thumbnail4.png",
    "/Images/thumbnail5.png",
    "/Images/thumbnail6.png",
    "/Images/thumbnail7.png",
  ];

  return (
    <>
      <div>
        <Navbar />
      </div>

      <main className="w-full bg-[#0F0B1F] min-h-screen">
        <div className="w-full min-h-[400px] bg-[#0F0B1F] text-white px-4 md:px-8 py-16">
          <div className="max-w-7xl mx-auto mb-8">
            <nav className="flex items-center space-x-2 text-sm">
              <span>Home</span>
              <span className="text-orange-500">&gt;</span>
              <span className="text-orange-500">News</span>
            </nav>
          </div>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Lorem Ipsum is simply dummy text of the printing and.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 px-4 pl-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <Image
                src="/Images/fortnite.png"
                alt="Gaming scene"
                width={600}
                height={300}
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold">
                Lorem Ipsum is simply dummy text dummy text
              </h2>
              <p className="text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
                Join stream · 5min
              </button>
            </div>
            {/* First set of 7 images */}
            <div className="space-y-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center bg-white/5 p-3 rounded-lg"
                >
                  <Image
                    src={image}
                    alt={`Stream thumbnail ${index + 1}`}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">
                      Lorem ipsum is simply dummy text dummy text ?
                    </h3>
                  </div>
                  <button className="bg-blue-600 whitespace-nowrap text-sm px-4 py-1.5 rounded-full">
                    Join stream · 5min
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="relative">
                <Image
                  src="/Images/cybercity.png"
                  alt="Gaming scene"
                  width={600}
                  height={300}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <button className="absolute bottom-4 left-4 bg-blue-600 text-white px-6 py-2 rounded-full text-sm">
                  Join stream · 5min
                </button>
              </div>
              <h2 className="text-2xl font-bold">
                Lorem Ipsum is simply dummy text dummy text
              </h2>
              <p className="text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
              <p className="text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            {/* Second set of 7 images */}
            <div className="space-y-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center bg-white/5 p-3 rounded-lg"
                >
                  <Image
                    src={image}
                    alt={`Stream thumbnail ${index + 8}`}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">
                      Lorem ipsum is simply dummy text dummy text ?
                    </h3>
                  </div>
                  <button className="bg-orange-500 whitespace-nowrap text-sm px-4 py-1.5 rounded-full text-white">
                    Join stream · 5min
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-7xl mx-auto py-16">
            <div className="text-white mb-12">
              <h2 className="text-3xl font-bold mb-4">Lorem Ipsum</h2>
              <p className="text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="bg-[#D9D9D9] rounded-lg p-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Stay in the loop
                </h3>
                <p className="text-gray-700 mb-6">
                  Subscribe to receive the latest news and updates about TDA. We
                  promise not to spam you!
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="flex-1 px-4 py-3 rounded-lg bg-black/10 border-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <button className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
