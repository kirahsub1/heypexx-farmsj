// pages/dashboard.tsx
"use client";

import { motion } from "framer-motion";
import DashboardCtaPanel from "./CtaPanel";
import Image from "next/image";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const categories = [
    {
      name: "Fruits",
      image:
        "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745939076/image_8_hgvz2q.png",
    },
    {
      name: "Vegetables",
      image:
        "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745939076/image_8_hgvz2q.png",
    },
    {
      name: "Grains",
      image:
        "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745939076/image_7_lhiwt8.png",
    },
    {
      name: "Dairy",
      image:
        "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745939076/Frame_591_jxqdt0.png",
    },
    { name: "Herbs", image: "/categories/herbs.png" },
    {
      name: "Tubers",
      image:
        "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745939076/image_6_r66e3l.png",
    },
    { name: "Legumes", image: "/categories/legumes.png" },
    { name: "Oils", image: "/categories/oils.png" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="p-6 space-y-6"
    >
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* CTA Panel with enhanced styling */}
        <motion.div
          variants={item}
          className="w-full lg:w-2/3 transition-transform hover:scale-[1.01]"
        >
          <DashboardCtaPanel
            title="Get the Latest Farm Products"
            description="Fresh produce straight from our fields to your table. Limited stock available!"
            imageSrc="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745931388/image_4_wtmnuy.png"
            buttonLink="/shop"
          />
        </motion.div>

        {/* Categories Section with modern design */}
        <motion.div
          variants={item}
          className="w-full lg:w-1/3 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Our Categories</h2>
              <p className="text-sm text-gray-500 mt-1">
                Explore our fresh selections
              </p>
            </div>
            <motion.a
              href="/categories"
              className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 group"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              See all
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Category Grid with animations */}
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category) => (
              <motion.div
                key={category.name}
                variants={item}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-16 h-16 mb-2">
                    <div className="absolute inset-0 bg-green-100 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform" />
                    <div className="absolute inset-0 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-all">
                      <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-gray-50">
                        <Image
                          src={category.image}
                          alt={category.name}
                          width={64}
                          height={64}
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                    {category.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trending Section */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 text-green-600 mb-4">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Trending Categories</span>
            </div>
            <div className="flex gap-2">
              {["Fruits", "Vegetables", "Dairy"].map((trend) => (
                <motion.span
                  key={trend}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 text-sm bg-green-50 text-green-600 rounded-full cursor-pointer hover:bg-green-100 transition-colors"
                >
                  {trend}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
