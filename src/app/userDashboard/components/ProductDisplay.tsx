"use client";

import { motion } from "framer-motion";
import ProductList from "./productlist/ProductList";
import { Product } from "./productlist/types";
import { BadgeCheck, ArrowRight, Zap } from "lucide-react";

const allProducts: Product[] = [
  {
    id: 1,
    title: "Tomatoes",
    description: "Farm fresh full basket.",
    price: 4000,
    rating: 5,
    ratingsCount: 150,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1747146466/Group_59_mfib4g.png",
  },
  {
    id: 2,
    title: "Green Pepper",
    description: "Farm fresh full basket",
    price: 2500,
    rating: 4,
    ratingsCount: 124,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1747146357/image_17_jpju6w.png",
  },
  {
    id: 3,
    title: "Atarodo",
    description: "Farm fresh full basket",
    price: 1500,
    rating: 4,
    ratingsCount: 80,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1747146357/image_18_ptmqsy.png",
  },
  {
    id: 4,
    title: "Onions",
    description: "Farm fresh full basket",
    price: 4000,
    rating: 5,
    ratingsCount: 100,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1747146357/image_19_afuhzi.png",
  },
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

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-blue-600"
            >
              <BadgeCheck className="w-5 h-5" />
              <span className="text-sm font-medium">Premium Selection</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold text-gray-800"
            >
              Sponsored Products
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-sm max-w-lg"
            >
              Handpicked quality products from our trusted partners
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mt-4 md:mt-0"
          >
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Top Deals</span>
            </button>
            <motion.a
              whileHover={{ x: 5 }}
              href="#"
              className="flex items-center gap-2 text-blue-600 font-medium group"
            >
              View All
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>

        {/* Featured Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {["Featured", "Best Price", "Limited Time", "Free Delivery"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <ProductList products={allProducts} />
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Become a Sponsor</h3>
            <p className="text-sm text-gray-600 mt-1">
              Reach more customers with sponsored product placement
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.main>
  );
}
