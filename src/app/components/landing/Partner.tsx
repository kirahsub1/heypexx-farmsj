"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./Partner.css";

const partners = [
  {
    name: "Partner 1",
    logo: "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740170814/image_47_mmsziv.png",
  },
  {
    name: "Partner 2",
    logo: "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740170814/image_45_lzzawn.png",
  },
  {
    name: "Partner 3",
    logo: "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740170816/image_46_wxj4pe.png",
  },
  {
    name: "Partner 4",
    logo: "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740170817/image_51_ioozyn.png",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Partnership: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="absolute inset-0 opacity-[0.03] pattern-background" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 md:text-5xl mb-4"
          >
            Join Our Partnership Network
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            The world&apos;s top brands trust Heypexx farm for sustainable
            agriculture
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative w-full h-24 bg-white rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  layout="fill"
                  objectFit="contain"
                  className="p-4 transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#46A908] text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-[#3d9007] transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
          >
            Partner with Us
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;
