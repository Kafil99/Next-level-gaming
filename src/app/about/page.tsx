"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
import Footer from "../components/Footer";
import WorkWithUs from "../components/Work";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/Images/assasinscreed.png",
    "/Images/assasinscreed2.png",
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Navbar />
      <main className="relative w-full min-h-screen bg-[#0a061f] text-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 py-8 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 z-10 space-y-6 mb-8 lg:mb-0">
            <nav className="flex items-center space-x-2 text-sm mb-8">
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
              <ChevronRight size={16} />
              <Link href="/about" className="text-red-500">
                About us
              </Link>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Lorem Ipsum is simply dummy text of the printing and.
            </h1>
            <p className="text-gray-300 text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
            <button className="bg-gradient-to-r from-red-600 to-orange-400 px-8 py-3 rounded-full text-white font-semibold flex items-center space-x-2 hover:opacity-90 transition-opacity">
              Get in touch
              <ArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={slides[currentSlide]}
                alt="Hero carousel image"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 rounded-lg backdrop-blur-sm px-4 py-2">
                <span className="text-white">
                  {currentSlide + 1} of {slides.length}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 bg-black/50 rounded-lg backdrop-blur-sm hover:bg-black/70 transition-colors"
                  aria-label="Previous slide"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 bg-black/50 rounded-lg backdrop-blur-sm hover:bg-black/70 transition-colors"
                  aria-label="Next slide"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <WorkWithUs />
      <Team />
      <Footer />
    </>
  );
}
