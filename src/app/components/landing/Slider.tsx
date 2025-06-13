"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const images = [
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740164015/image_6_fmgsqr.png",
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740164046/image_5_qy1o0j.png",
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740164002/image_8_hefwd7.png",
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740163999/image_4_je7y6t.png",
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740994672/image_22_nytys4.png",
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741007851/Leonardo_Kino_XL_Farm_tomatoe_fresh_produce_in_africa_3_gqh7hz.jpg",
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741007851/Leonardo_Kino_XL_Farm_Corn_fresh_produce_in_africa_1_p6dj45.jpg",
];

const ImageScroller = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-[#f8faf5] to-white">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#46A908_1px,_transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#46A908]/10 text-[#46A908] rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Farm Products
          </h2>
          <div className="flex items-center justify-center gap-1.5 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#46A908]/30"></div>
            <div className="w-20 h-1 bg-[#46A908] rounded-full"></div>
            <div className="w-3 h-3 rounded-full bg-[#46A908]/30"></div>
          </div>
        </motion.div>

        <div
          className="overflow-hidden relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex w-max"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: isHovered ? 60 : 30,
              ease: "linear",
            }}
          >
            {[...images, ...images, ...images].map((src, index) => (
              <motion.div
                key={index}
                className="w-80 h-56 mx-4 relative flex-shrink-0 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#46A908]/20 to-[#83c254]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                  <Image
                    src={src}
                    alt={`Farm Product ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageScroller;
