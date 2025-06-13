"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductPage from "../components/ProductViewpage";
import ProductDisplay from "../components/ProductDisplay";
import Rating from "../components/Rating";

const ProductViewPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f8faf5] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Main Product Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ProductPage />
          </motion.div>

          {/* Similar Products Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Similar Products
            </h2>
            <ProductDisplay />
          </motion.div>

          {/* Ratings & Reviews Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Rating />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductViewPage;
