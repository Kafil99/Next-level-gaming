"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  Globe,
  Folders,
  Play,
  Check,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  const [activeSlide, setActiveSlide] = useState(0);
  const testimonials = [
    {
      name: "Viezh Robert",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4.6,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      name: "Yessica Christy",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      rating: 4.5,
      text: "Lorem ipsum is simply dummy text of the printing and",
    },
    {
      name: "Kim Young Jou",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4.5,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Anna Smith",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4.8,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="w-full min-h-screen bg-[#0A051F] text-white">
        <nav className="w-full px-4 py-6 flex justify-center">
          <div className="flex items-center space-x-2 text-sm">
            <span>
              Home
            </span>
            <span className="text-red-500 mx-1">&gt;</span>
            <span className="text-red-500">Services</span>
          </div>
        </nav>
        <main className="w-full px-4 text-center mt-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and.
          </h1>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="bg-[#1A1A1A] rounded-lg max-w-3xl mx-auto p-8 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-pink-100/10 p-3 mb-3">
                  <Users className="w-6 h-6 text-pink-500" />
                </div>
                <div className="text-2xl font-bold">90+</div>
                <div className="text-gray-400">Clients</div>
              </div>
              <div className="flex flex-col items-center border-t md:border-t-0 md:border-l md:border-r border-gray-700 py-8 md:py-0 px-4">
                <div className="rounded-full bg-blue-100/10 p-3 mb-3">
                  <Globe className="w-6 h-6 text-blue-500" />
                </div>
                <div className="text-2xl font-bold">30+</div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div className="flex flex-col items-center border-t md:border-t-0 border-gray-700 pt-8 md:pt-0">
                <div className="rounded-full bg-red-100/10 p-3 mb-3">
                  <Folders className="w-6 h-6 text-red-500" />
                </div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-gray-400">Projects</div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src="/Images/herovideo.png"
                  alt="DOOM Eternal"
                  className="w-full rounded-lg"
                  width={500}
                  height={300}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-[#0A051F] ml-1" />
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Lorem Ipsum is simply dummy text.
                </h2>
                <p className="text-gray-400 mb-6">
                  Lorem ipsum is simply dummy text of the printing and typesetting
                  industry Lorem ipsum is simply dummy.
                </p>
                <ul className="space-y-3">
                  {[
                    "Lorem ipsum is simply",
                    "Lorem ipsum is simply",
                    "Lorem ipsum is simply",
                    "Lorem ipsum is simply",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Lorem Ipsum is simply dummy text dummy text
                </h2>
                <p className="text-gray-400 mb-4">
                  Lorem ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries.
                </p>
                <p className="text-gray-400 mb-8">
                  Lorem ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg transition-colors">
                  Read more
                </button>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/Images/assasinscreed.png"
                  alt="Assassin&apos;s Creed Game"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 pb-24 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/20 to-blue-900/30 rounded-3xl" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
              <div className="h-full">
                <Image
                  src="/Images/titan.png"
                  alt="Game Character"
                  className="w-full h-full object-cover rounded-lg"
                  width={800}
                  height={600}
                />
              </div>
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Lorem Ipsum is simply dummy text dummy text
                </h2>
                <p className="text-gray-400 mb-4">
                  Lorem ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries.
                </p>
                <p className="text-gray-400 mb-8">
                  Lorem ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg transition-colors">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 pb-24">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-600" />
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-12">
                <div className="text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Lorem Ipsum is simply dummy text dummy text
                  </h2>
                  <p className="text-gray-200 mb-4">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries.
                  </p>
                  <p className="text-gray-200 mb-8">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg transition-colors">
                    Read more
                  </button>
                </div>
                <div className="h-full">
                  <Image
                    src="/Images/actiongame.png"
                    alt="Action Game Character"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-neutral-200 py-24">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Trusted by Thousands of
                  <br />
                  Happy Customer&apos;s {/* Corrected apostrophe */}
                </h2>
                <p className="text-neutral-600">
                  Lorem ipsum is simply dummy text of the printing and typesetting
                  industry.
                  <br />
                  Lorem ipsum is simply dummy.
                </p>
              </div>
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {testimonials
                    .slice(activeSlide, activeSlide + 3)
                    .map((testimonial, index) => (
                      <div
                        key={index}
                        className={`bg-white p-8 rounded-lg border-2 transition-all ${index === 0 ? "border-red-500" : "border-neutral-200"}`}
                      >
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full"
                              width={48}
                              height={48}
                            />
                            <div>
                              <h3 className="font-semibold text-black">
                                {testimonial.name}
                              </h3>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-black">
                              {testimonial.rating}
                            </span>
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          </div>
                        </div>
                        <p className="text-neutral-600">{testimonial.text}</p>
                      </div>
                    ))}
                </div>
                <div className="flex items-center justify-between mt-12">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${index === activeSlide ? "bg-red-500 w-8" : "bg-neutral-300"}`}
                        onClick={() => setActiveSlide(index)}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
                      className="p-2 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                      disabled={activeSlide === 0}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => setActiveSlide(Math.min(testimonials.length - 3, activeSlide + 1))}
                      className="p-2 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                      disabled={activeSlide >= testimonials.length - 3}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="w-full bg-blue-600 py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Lorem Ipsum</h2>
              <p className="text-blue-100 mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-black text-xl font-semibold mb-2">
                  Stay in the loop
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Subscribe to receive the latest news and updates about TDA. We
                  promise not to spam you&apos;!
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors" />
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap"
                  >
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
