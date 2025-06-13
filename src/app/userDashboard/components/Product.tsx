"use client";

import { motion } from "framer-motion";
import ProductList from "./productlist/ProductList";
import { TrendingUp, ArrowRight } from "lucide-react";
import { allProducts } from "./data/products";

export default function ProductSection() {
  const featuredProducts = allProducts.slice(0, 4);

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-50">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Featured Products
              </h2>
              <p className="text-gray-500">Our top picks for you</p>
            </div>
          </div>
          <motion.a
            href="/userDashboard/productListing"
            className="group flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
            whileHover={{ x: 5 }}
          >
            View All
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, staggerChildren: 0.1 }}
        >
          <ProductList products={featuredProducts} />
        </motion.div>
      </motion.div>
    </div>
  );
}
