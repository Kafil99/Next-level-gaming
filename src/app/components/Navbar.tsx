import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-[#0a061f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">LOGO</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About us
            </Link>
            <Link href="/services" className="hover:text-gray-300 transition-colors">
              Portfolio
            </Link>
            <Link href="/news" className="hover:text-gray-300 transition-colors">
              News
            </Link>
            <Link href={"/contact"}>
            <button className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
              Contact us
            </button>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 hover:text-gray-300 transition-colors"
            >
              About us
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 hover:text-gray-300 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/news"
              className="block px-3 py-2 hover:text-gray-300 transition-colors"
            >
              News
            </Link>
            <Link href={"/contact"}>
            <button className="w-full text-left px-3 py-2 bg-red-600 rounded-md hover:bg-red-700 transition-colors">
              Contact us
            </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
