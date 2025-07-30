"use client";

import React, { useState } from "react";
// import RegisterModal from "@/components/modal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-white/10 backdrop-blur border border-gray-200 rounded-lg shadow-md mx-0 md:mx-28">
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
          <button
            onClick={() => setOpenModal(true)}
            className=" rounded transition"
          >
            <img className="w-16 h-16" src="/image/login.png" alt="Login" />
          </button>
          {/* <RegisterModal open={openModal} handleClose={() => setOpenModal(false)} /> */}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            className="p-2 text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✖" : "☰"}
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
              onClick={() => {
                setMobileMenuOpen(false);
                setOpenModal(true);
              }}
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
