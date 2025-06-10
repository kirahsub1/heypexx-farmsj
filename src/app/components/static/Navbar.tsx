// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1737469420/image_18_gwbxab.png"
                alt="Heypexx Logo"
                width={120}
                height={40}
                priority
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-green-600 transition-colors duration-200 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/whyHeypexx"
              className="text-gray-800 hover:text-green-600 transition-colors duration-200 text-sm font-medium"
            >
              Why Heypexx
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-green-600 transition-colors duration-200 text-sm font-medium"
            >
              Our Service
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-green-600 transition-colors duration-200 text-sm font-medium"
            >
              Contact Us
            </Link>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href="/signin"
                className="px-4 py-2 text-sm font-medium text-gray-800 hover:text-green-600 transition-colors duration-200"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-green-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-4 bg-white/80 backdrop-blur-md space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/whyHeypexx"
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            Why Heypexx
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            Our Service
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            Contact Us
          </Link>
          <div className="pt-4 space-y-2">
            <Link
              href="/signin"
              className="block w-full px-4 py-2 text-center text-base font-medium text-gray-800 hover:text-green-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="block w-full px-4 py-2 text-center text-base font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

