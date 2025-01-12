"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  MapPin,
} from "lucide-react";
import LocationMarker from "../components/Locationmarker";
import Sayhello from "../components/Sayhello";
import Loremipsum from "../components/Lorem";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0B0721] text-white w-full overflow-x-hidden">
      <Navbar />
      <nav className="p-4 md:p-8">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <span>Home</span>
            <span className="text-orange-500">&gt;</span>
            <span className="text-orange-500">Contact us</span>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Lorem Ipsum is simply dummy text of the printing and.
          </h1>
          <p className="text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="relative w-full aspect-[2/1] mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[#1a1139]">
            <Image
              src="/Images/worldmap.png"
              alt="World map with location markers"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
          <LocationMarker
            size="large"
            className="absolute top-[20%] left-[15%] z-10"
          />
          <LocationMarker className="absolute top-[15%] left-[25%] z-10" />
          <LocationMarker
            size="large"
            className="absolute top-[30%] left-[40%] z-10"
          />
          <LocationMarker className="absolute top-[25%] left-[55%] z-10" />
          <LocationMarker
            size="large"
            className="absolute top-[20%] left-[75%] z-10"
          />
          <LocationMarker className="absolute top-[40%] left-[80%] z-10" />
          <LocationMarker
            size="large"
            className="absolute top-[60%] left-[20%] z-10"
          />
          <LocationMarker className="absolute top-[70%] left-[30%] z-10" />
          <LocationMarker
            size="large"
            className="absolute top-[75%] left-[85%] z-10"
          />
          <LocationMarker className="absolute top-[45%] left-[45%] z-10" />
          <LocationMarker
            size="large"
            className="absolute top-[55%] left-[60%] z-10"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-medium mb-4">Follow us</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-orange-500" />
              <span className="text-orange-500">+94 4444 5555 6</span>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <p className="text-gray-300">
                but also the leap into electronic typesetting
              </p>
            </div>
          </div>
        </div>
        <Sayhello />
        <Loremipsum />
        <Footer />
      </main>
    </div>
  );
}
