"use client";

import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Gamecards from "./components/Gamecard";
import Maingame from "./components/Maingame";
import { Smartphone, Monitor, Gamepad2, Glasses, Camera, Box, ArrowRight } from "lucide-react";
import Footer from "./components/Footer";

export default function App() {
  const services = [
    {
      title: "Mobile Game Development",
      icon: Smartphone,
    },
    {
      title: "PC Game Development",
      icon: Monitor,
    },
    {
      title: "PS4 Game Development",
      icon: Gamepad2,
    },
    {
      title: "AR/VR Solutions",
      icon: Glasses,
    },
    {
      title: "AR/VR design",
      icon: Camera,
    },
    {
      title: "3D Modelings",
      icon: Box,
    },
  ];

  const projects = [
    {
      image: "/Images/project1.png",
      alt: "Gaming setup with multiple monitors",
    },
    {
      image: "/Images/project2.png",
      alt: "Gamer playing at night",
    },
    {
      image: "/Images/project3.png",
      alt: "Professional gaming setup",
    },
    {
      image: "/Images/project4.png",
      alt: "Esports gaming screen",
    },
    {
      image: "/Images/project5.png",
      alt: "Gaming tournament setup",
    },
    {
      image: "/Images/project6.png",
      alt: "Gaming controller in hands",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="w-full min-h-screen bg-[#0a061c] relative overflow-hidden">
        <main className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 md:pt-40 relative">
          {/* Main Content */}
          <div className="relative z-10 max-w-2xl">
            <p className="text-orange-500 font-semibold mb-4">
              Proved By prodesigner
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Work that we produce for our clients
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry&apos;s standard.
            </p>
            <button className="bg-gradient-to-r from-red-600 to-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Get more details
            </button>
          </div>

          {/* Game Controller */}
          <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
              <div>
                <Image
                  src="/Images/controller.png"
                  alt="Game Controller"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>

          {/* Logos */}
          <div className="absolute top-44 right-80 flex items-center gap-28">
            <div className="flex items-center gap-2">
              <Image
                src="/Images/cry1.png"
                alt="CryEngine Logo"
                width={64}
                height={64}
              />
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Images/unreal1.png"
                alt="Unreal Logo"
                width={48}
                height={48}
              />
            </div>
          </div>
        </main>

        <Gamecards />
        <Maingame />

        <main className="w-full min-h-screen bg-gray-900">
          <div className="relative w-full min-h-screen flex flex-col">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75"
              style={{
                backgroundImage: "url(/Images/callofduty2.png)",
              }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 container mx-auto px-4 py-20 flex-1 flex flex-col justify-center">
              <div className="text-center text-white mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Lorem ipsum is simply dummy text of the printing
                  <br className="hidden md:block" />
                  and typesetting industry.
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto w-full">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`text-center ${
                      index >= 4 ? "lg:col-start-2 lg:col-span-2" : ""
                    }`}
                  >
                    <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group hover:bg-gray-100 transition-colors shadow-lg">
                      <service.icon className="w-8 h-8 text-gray-800" />
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <button className="text-white hover:text-gray-300 transition-colors text-2xl">
                      →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <main className="w-full min-h-screen bg-[#0a051e] text-white px-4 py-12 md:px-8 lg:px-12">
          <section className="max-w-7xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              Our Recent Projects
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg group"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    layout="responsive"
                    width={300}
                    height={200}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="bg-[#1a103c] hover:bg-[#251452] transition-colors px-6 py-2 rounded-md">
                SEE ALL
              </button>
            </div>
          </section>
          <section className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Lorem Ipsum
              </h2>
              <p className="text-gray-400">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="bg-[#1a103c] p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Stay in the loop</h3>
              <p className="text-gray-400 mb-6">
                Subscribe to receive the latest news and updates about TDA. We
                promise not to spam you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="flex-1 px-4 py-3 rounded-md bg-[#0a051e] border border-gray-700 focus:outline-none focus:border-purple-500"
                />
                <button className="bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-md flex items-center justify-center">
                  <span className="mr-2">Continue</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
