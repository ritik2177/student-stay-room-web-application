"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils"; // classnames helper

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        "fixed top-4 left-4 right-4 z-50 bg-white/10 backdrop-blur border border-gray-200 rounded-lg shadow-md mx-0 md:mx-28"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Left: Company name */}
        <div className="text-2xl font-bold text-gray-800">MyCompany</div>

        {/* Center: Desktop nav links */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#hotel"
            className="px-4 py-2 rounded-md hover:bg-white/30 transition-colors duration-200"
          >
            Hotel
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-md hover:bg-white/30 transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="#dashboard"
            className="px-4 py-2 rounded-md hover:bg-white/30 transition-colors duration-200"
          >
            Dashboard
          </a>
        </div>

        {/* Right: Desktop login button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            className="p-2 rounded hover:bg-gray-200 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {/* Hamburger icon (three lines) */}
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" /> // X icon
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" /> // Hamburger icon
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 overflow-hidden">
          <div className="flex flex-col px-4 py-3 space-y-1">
            <a
              href="#hotel"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-blue-100 transition-colors"
            >
              Hotel
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-blue-100 transition-colors"
            >
              Contact
            </a>
            <a
              href="#dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-blue-100 transition-colors"
            >
              Dashboard
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}





//this is for home page
'use client'

export default function Home() {


  return (
    <div>
    <div className="relative bg-[url('/image/image1.png')] bg-cover bg-center h-screen text-white">

  {/* Overlay */}
  <div className=""></div>

  {/* Content */}
  <div className="flex flex-col justify-center h-full px-6 md:px-16">
    
    {/* Text Section */}
    <div className="mb-3 ml-4">
      <h1 className="text-5xl  max-w-96 font-bold mb-1 drop-shadow-lg text-gray-500">
        Welcome to Student Stey
      </h1>
      <p className="text-lg leading-relaxed  max-w-[500px] text-gray-400 drop-shadow-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magni
        necessitatibus beatae quia facilis eaque dolor.
      </p>
    </div>

    {/* Search Section */}
    <div className="w-full max-w-4xl bg-white/70 backdrop-blur-md rounded-xl p-4 shadow-lg">
  <div className="flex flex-col md:flex-row gap-4 w-full">
    
    <input
      type="text"
      placeholder="Enter your center name"
      className="w-full p-3 rounded-md border border-gray-300 placeholder-gray-500 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    
    <input
      type="date"
      className="w-full p-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    
    <input
      type="number"
      placeholder="Enter area PIN Code"
      className="w-full p-3 rounded-md border border-gray-300 placeholder-gray-500 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    
    <button className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition">
      Search
    </button>

  </div>
</div>


  </div>
</div>

   
    </div>
    
  );
}

