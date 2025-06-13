'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainCart from "../../userDashboard/components/MainCart";
import Product from "../../userDashboard/components/Product";
import Product2 from "../../userDashboard/components/Product2";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f8faf5] to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Your Shopping Cart
          </h1>
          <div className="h-1 w-20 bg-green-600 rounded-full"></div>
        </motion.div>

        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg shadow-green-100/50 overflow-hidden"
          >
            <MainCart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg shadow-green-100/50 p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Recommended Products
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Product />
              </div>
              <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Product2 />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;