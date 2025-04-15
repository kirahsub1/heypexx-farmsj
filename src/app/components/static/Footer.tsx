import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin,Mail,Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 border-t border-b border-gray-300 pt-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8 pb-12">
        {/* Logo and Description */}
        <div className="md:col-span-1 md:border-r border-gray-300 pr-6">
          <div className="flex flex-col items-start">
            <Image
              src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1737469420/image_18_gwbxab.png"
              alt="Logo"
              width={150}
              height={50}
              className="mb-4"
              priority
            />
            <p className="text-sm text-gray-600">
              Connecting local farms to global markets through seamless
              leasing,sales and exportation of quality agricultural produce.
            </p>
          </div>
        </div>

        {/* Other Footer Content */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-8 pl-0 md:pl-6">
          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span>heypexxfarms@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4 text-gray-500" />
              <span>+234802 335 6010</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4 text-gray-500" />
              <span>+234905 123 5413</span>
            </div>
          </div>

          {/* Account info*/}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/MyAccount"
                  className="text-gray-600 hover:text-gray-900"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/signin"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/Notification"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Notifications
                </Link>
              </li>
              <li>
                <Link
                  href="/Shop"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>

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
                  href="/whyHeypexx"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Why Heypexx
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/faqsect"
                  className="text-gray-600 hover:text-gray-900"
                >
                  FAQS
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left space-y-4 md:space-y-0 bg-gray-100">
        {/* Social Icons */}

        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/share/p/1KexsZjZ9m/"
              className="hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600" />
            </Link>
            <Link
              href="https://x.com/Heypexxfarms"
              className="hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 text-gray-600 hover:text-sky-500" />
            </Link>
            <Link
              href="https://www.instagram.com/heypexxfarms/"
              className="hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-gray-600 hover:text-pink-500" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/heypexx-farms-ng/"
              className="hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-pink-500" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © 2025 Heypexx Farms Powered by Kirahshub.All rights reserved.
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
