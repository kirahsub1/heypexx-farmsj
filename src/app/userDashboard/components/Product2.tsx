"use client";

import { motion } from "framer-motion";
import ProductList from "./productlist/ProductList";
import { Sparkles, ArrowRight, Heart } from "lucide-react";
import { allProducts } from "./data/products";

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
  // Get products with ID 2-5 for variety
  const specialProducts = allProducts.slice(1, 5);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-b from-gray-50/50 to-white pt-8 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-purple-600"
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Recommended for You</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold text-gray-800"
            >
              You May Also Like
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-sm"
            >
              Products picked based on your preferences
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mt-4 md:mt-0"
          >
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-purple-200 text-purple-600 hover:bg-purple-50 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Favorites</span>
            </button>
            <motion.a
              whileHover={{ x: 5 }}
              href="#"
              className="flex items-center gap-2 text-purple-600 font-medium group"
            >
              View All
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>

        {/* Quick Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {["Best Sellers", "New Arrivals", "Special Offers", "Seasonal"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-purple-600 bg-purple-50 rounded-full cursor-pointer hover:bg-purple-100 transition-colors"
              >
                {tag}
              </span>
            )
          )}
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
          className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl text-center"
        >
          <p className="text-purple-900 font-medium mb-2">
            Get personalized recommendations
          </p>
          <p className="text-purple-600 text-sm mb-4">
            Complete your profile to see more relevant products
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 bg-purple-600 text-white rounded-xl text-sm font-medium hover:bg-purple-700 transition-colors shadow-sm hover:shadow-md"
          >
            Update Preferences
          </motion.button>
        </motion.div>

        {/* Special Offers Section */}
        <div className="py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-50">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Special Offers
                  </h2>
                  <p className="text-gray-500">Limited time deals</p>
                </div>
              </div>
              <motion.a
                href="/userDashboard/productListing"
                className="flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors"
                whileHover={{ x: 5 }}
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Products Grid */}
            <motion.div variants={container} initial="hidden" animate="show">
              <ProductList products={specialProducts} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
