// components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#C3E4AA] text-white rounded-full shadow-lg mx-auto my-3 max-w-4xl">
      <div className="px-4">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex items-center">
          <Link href="/">
  <Image 
    src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1737469420/image_18_gwbxab.png" 
    alt="Heypexx Logo" 
    width={100} // Set appropriate width
    height={32} // Set appropriate height
    priority // Ensures faster loading for LCP images
    className="h-8 w-auto"
  />
          </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center text-sm text-green-900">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <Link href="/why-heypexx" className="hover:text-gray-700">Why Heypexx</Link>
            <Link href="/services" className="hover:text-gray-700">Our Service</Link>
            <Link href="/contact" className="hover:text-gray-700">Contact Us</Link>
          </div>

          {/* Sign In & Register Buttons */}
          <div className="hidden md:flex space-x-3">
            <Link href="/signin" className="px-3 py-1 bg-white text-green-600 rounded-xl text-sm hover:bg-gray-200">
              Sign In
            </Link>
            <Link href="/register" className="px-3 py-1 bg-[#46A908] text-white rounded-xl text-sm hover:bg-green-600">
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-400 rounded-b-2xl px-3 py-2 text-center text-sm text-green-900">
          <Link href="/" className="block py-1 hover:text-gray-700">Home</Link>
          <Link href="/why-heypexx" className="block py-1 hover:text-gray-700">Why Heypexx</Link>
          <Link href="/services" className="block py-1 hover:text-gray-700">Our Service</Link>
          <Link href="/contact" className="block py-1 hover:text-gray-700">Contact Us</Link>
          <div className="mt-3 space-y-2">
            <Link href="/signin" className="block px-4 py-1 bg-white text-green-600 rounded-xl hover:bg-gray-200">
              Sign In
            </Link>
            <Link href="/register" className="block px-4 py-1 bg-green-700 text-white rounded-xl hover:bg-green-600">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

