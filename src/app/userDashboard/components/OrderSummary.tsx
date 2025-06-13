// components/CartSummary.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Clock } from "lucide-react";

interface CartSummaryProps {
  subtotal: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal }) => {
  const deliveryFee = 3000;
  const total = subtotal + deliveryFee;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 w-full"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>

      {/* Price Breakdown */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-gray-600">
          <span>Subtotal</span>
          <span className="font-medium">₦{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center text-gray-600">
          <span>Delivery Fee</span>
          <span className="font-medium">₦{deliveryFee.toLocaleString()}</span>
        </div>
        <div className="h-px bg-gray-100 my-3" />
        <div className="flex justify-between items-center text-lg font-bold text-gray-800">
          <span>Total</span>
          <span>₦{total.toLocaleString()}</span>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Truck className="w-5 h-5 text-green-500" />
          <span>Estimated delivery: 2-4 business days</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Clock className="w-5 h-5 text-green-500" />
          <span>Order processing time: 24 hours</span>
        </div>
      </div>

      {/* Checkout Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-6 bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-200 shadow-sm hover:shadow-md"
      >
        Proceed to Checkout
      </motion.button>

      {/* Security Note */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
        <ShieldCheck className="w-4 h-4 text-green-500" />
        <span>Secure checkout with Heypexx Protect</span>
      </div>

      {/* Additional Info */}
      <div className="mt-4 bg-green-50 rounded-xl p-4">
        <p className="text-sm text-green-700 text-center">
          🎉 Free delivery on orders above ₦50,000
        </p>
      </div>
    </motion.div>
  );
};

export default CartSummary;
