import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div className="space-y-4">
            <h2 className="font-bold text-xl">LOGO</h2>
            <p className="text-gray-600">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-gray-600">@Lorem</p>
          </div>
          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="font-bold">About us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Zeux
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="font-bold">Contact us</h3>
            <p className="text-gray-600">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-gray-600">+908 89097 890</p>
          </div>
          {/* Social Media Section */}
          <div className="flex space-x-4 items-start">
            <a
              href="#"
              className="p-2 bg-black rounded-full text-white hover:bg-gray-800"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-black rounded-full text-white hover:bg-gray-800"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-black rounded-full text-white hover:bg-gray-800"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-black rounded-full text-white hover:bg-gray-800"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            Copyright © 2022 prodesigner All rights Received
          </p>
        </div>
      </div>
    </footer>
  );
}
