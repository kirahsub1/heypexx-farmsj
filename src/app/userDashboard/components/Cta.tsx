"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface DashboardCtaPanelProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  buttonLink: string;
}

const DashboardCtaPanel: React.FC<DashboardCtaPanelProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "CTA image",
  buttonLink,
}) => {  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-10 overflow-hidden group"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4B84A] to-[#f3a322]">
        <div className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image with animations */}
        <motion.div 
          className="w-full md:w-1/3 flex justify-center md:justify-start relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl transform group-hover:scale-110 transition-transform duration-700" />
            <motion.div 
              className="-mt-6 md:-mt-16 md:-ml-12"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={380}
                height={380}
                className="object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content with animations */}
        <motion.div 
          className="w-full md:w-2/3 flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-white/90 mb-6 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href={buttonLink}>
              <motion.button
                className="group relative inline-flex items-center gap-2 bg-white text-[#F4B84A] px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:shadow-white/20 transform hover:-translate-y-0.5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Shop now
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DashboardCtaPanel;