"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import NewsletterSection from "../landing/Newsletter";
import { motion } from "framer-motion";

interface LinkItem {
  href: string;
  label: string;
}

interface SocialLink extends LinkItem {
  icon: React.ElementType;
  color: string;
}

const accountLinks: LinkItem[] = [
  { href: "/MyAccount", label: "My Account" },
  { href: "/signin", label: "Login" },
  { href: "/Notification", label: "Notifications" },
  { href: "/Shop", label: "Shop" }
];

const quickLinks: LinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/whyHeypexx", label: "Why Heypexx" },
  { href: "/services", label: "Our Services" },
  { href: "/faqsect", label: "FAQs" },
  { href: "/Contact", label: "Contact Us" }
];

const socialLinks: SocialLink[] = [
  { 
    href: "https://www.facebook.com/share/p/1KexsZjZ9m/",
    icon: Facebook,
    color: "hover:text-blue-600",
    label: "Facebook"
  },
  { 
    href: "https://x.com/Heypexxfarms",
    icon: Twitter,
    color: "hover:text-sky-500",
    label: "Twitter"
  },
  { 
    href: "https://www.instagram.com/heypexxfarms/",
    icon: Instagram,
    color: "hover:text-pink-500",
    label: "Instagram"
  },
  { 
    href: "https://www.linkedin.com/company/heypexx-farms-ng/",
    icon: Linkedin,
    color: "hover:text-blue-700",
    label: "LinkedIn"
  }
];

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 pt-12 mt-16 overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#46A908_1px,_transparent_1px)] [background-size:24px_24px]" />

      <div className="relative border-b border-gray-200/50 pb-8">
        <NewsletterSection />
      </div>

      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12 py-16"
      >
        {/* Logo and Description */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 pr-6"
        >
          <div className="flex flex-col items-start">
            <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
              <Image
                src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1737469420/image_18_gwbxab.png"
                alt="Heypexx Farms Logo"
                width={180}
                height={60}
                className="brightness-110"
                priority
              />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Connecting local farms to global markets through seamless
              leasing, sales and exportation of quality agricultural produce.
            </p>
            <div className="flex items-start space-y-3 flex-col text-gray-600">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#46A908]" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#46A908]" />
                <span>heypexxfarms@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#46A908]" />
                <span>+234 802 335 6010</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {/* Account Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Account</h3>
            <ul className="space-y-3">
              {accountLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#46A908] transition-colors duration-300 group flex items-center space-x-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#46A908] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#46A908] transition-colors duration-300 group flex items-center space-x-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#46A908] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex items-center space-x-3 text-gray-600 hover:text-[#46A908] transition-colors duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className={`w-5 h-5 ${social.color}`} />
                    <span>{social.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        className="relative border-t border-gray-200/50 px-6 py-8 bg-gradient-to-r from-gray-50 via-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Heypexx Farms. Powered by{" "}
            <a href="https://kirahshub.com" target="_blank" rel="noopener noreferrer" className="text-[#46A908] hover:underline">
              Kirahshub
            </a>
            . All rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-[#46A908] transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-600 hover:text-[#46A908] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
