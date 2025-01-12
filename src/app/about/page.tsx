"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
import Footer from "../components/Footer";

// Props Interface for the Card Component
interface CardProps {
  badge: string;
  title: string;
  description: string;
  badgeColor: string;
}

// Card Component
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

// WorkWithUs Component
function WorkWithUs() {
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
            description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            badgeColor="bg-pink-100 text-pink-800"
          />
          <Card
            badge="Lorem ipsum"
            title="Lorem Ipsum"
            description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            badgeColor="bg-orange-100 text-orange-800"
          />
          <Card
            badge="Lorem ipsum"
            title="Lorem Ipsum"
            description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            badgeColor="bg-green-100 text-green-800"
          />
        </div>
      </section>
    </div>
  );
}

// Game Component
function Game() {
  return (
    <div className="w-full min-h-screen bg-white">
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/Images/titan.png"
              alt="Dark fantasy battle scene"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className="text-sm uppercase tracking-wider text-gray-600">
              Lorem ipsum
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// About Page Component
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
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
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
      <Game />
      <Team />
      <Footer />
    </>
  );
}
