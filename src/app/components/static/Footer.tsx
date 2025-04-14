import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 border-t border-b border-gray-300 pt-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8 pb-12">
        {/* Logo and Description */}
        <div className="md:col-span-1 md:border-r border-gray-300 pr-6">
          <div className="flex flex-col items-start">
            <Image
              src="/path-to-logo.png"
              alt="Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-sm text-gray-600">
              Bringing you the best updates straight to your inbox.
            </p>
          </div>
        </div>

        {/* Other Footer Content */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-8 pl-0 md:pl-6">
          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-600">info@yourdomain.com</p>
            <p className="text-sm text-gray-600">(123) 456-7890</p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/facebook-icon.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://twitter.com"
                className="hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/twitter-icon.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instagram-icon.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left space-y-4 md:space-y-0 bg-gray-100">
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <Link
            href="https://facebook.com"
            className="hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/facebook-icon.png"
              alt="Facebook"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="https://twitter.com"
            className="hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/twitter-icon.png"
              alt="Twitter"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="https://instagram.com"
            className="hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram-icon.png"
              alt="Instagram"
              width={20}
              height={20}
            />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © 2025 Your Company. All rights reserved.
        </p>

        {/* Legal Links */}
        <div className="flex justify-center md:justify-end space-x-4">
          <Link
            href="/terms"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
