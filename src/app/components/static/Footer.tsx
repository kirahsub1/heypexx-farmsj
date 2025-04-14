import React from "react";
import Image from "next/image"; // Import next/image
import Link from "next/link"; // Import next/link

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Column */}
        <div className="flex flex-col items-start">
          <Image
            src="/path-to-logo.png" // Replace with your logo image path
            alt="Logo"
            width={150} // Set your desired width
            height={50} // Set your desired height
            className="mb-4"
          />
          <p className="text-sm text-gray-400">
            Bringing you the best updates straight to your inbox.
          </p>
        </div>

        {/* Links Column */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/facebook-icon.png" // Replace with your social media icon path
                alt="Facebook"
                width={24} // Set desired width
                height={24} // Set desired height
              />
            </Link>
            <Link
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/twitter-icon.png" // Replace with your social media icon path
                alt="Twitter"
                width={24} // Set desired width
                height={24} // Set desired height
              />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram-icon.png" // Replace with your social media icon path
                alt="Instagram"
                width={24} // Set desired width
                height={24} // Set desired height
              />
            </Link>
          </div>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm">info@yourdomain.com</p>
          <p className="text-gray-400 text-sm">(123) 456-7890</p>
        </div>
      </div>

      <div className="bg-gray-800 text-center py-4">
        <p className="text-gray-400 text-sm">
          © 2025 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
