"use client";

import React, { useState } from "react";
import { Button } from "@/app/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function CheckoutPage() {
  const [promoCode, setPromoCode] = useState("");
  const [isApplyingCode, setIsApplyingCode] = useState(false);

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) return;

    setIsApplyingCode(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsApplyingCode(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6 space-y-6 font-sans"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm text-gray-600"
      >
        If You Proceed, You Are Automatically Accepting Our
        <Link
          href="/terms"
          className="text-green-600 hover:text-green-700 transition-colors"
        >
          {" "}
          Terms & Conditions
        </Link>
      </motion.p>

      {/* Order Summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="border border-gray-200 rounded-lg p-4 space-y-3 bg-white shadow-sm"
      >
        <div className="space-y-2 pb-3 border-b">
          <div className="flex justify-between">
            <span className="text-gray-600">Item&apos;s Total (2)</span>
            <span className="font-medium">₦11,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Delivery Fees</span>
            <span className="font-medium">₦1,000</span>
          </div>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>₦12,000</span>
        </div>
        <div className="flex gap-2 pt-2">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          />
          <Button
            onClick={handleApplyPromo}
            disabled={isApplyingCode || !promoCode.trim()}
            variant="primary"
            className="text-white transition-colors"
          >
            {isApplyingCode ? "Applying..." : "Apply"}
          </Button>
        </div>
      </motion.div>

      {/* Payment Method */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-6 border rounded-lg shadow-sm"
      >
        <div className="flex justify-between items-center mb-2">
          <p className="font-medium">Payment Method</p>
          <Button
            variant="outline"
            className="text-green-600 hover:text-green-700"
          >
            Change
          </Button>
        </div>
        <p className="text-sm text-gray-600">
          Pay With Cards, Bank Transfer Or USSD
        </p>
        <p className="text-xs text-gray-500 mt-1">
          You Will Be Redirected To Our Secure Checkout Page
        </p>
      </motion.div>

      {/* Delivery Address */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white p-6 border rounded-lg shadow-sm"
      >
        <div className="flex justify-between items-center mb-2">
          <p className="font-medium">Delivery Address</p>
          <Button
            variant="outline"
            className="text-green-600 hover:text-green-700"
          >
            Change Your Address
          </Button>
        </div>
        <p className="text-sm font-medium">Mimi</p>
        <p className="text-sm text-gray-600">
          No 24, Ajapa Street, Lagos, Nigeria.
        </p>
      </motion.div>

      {/* Delivery Method */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white p-6 border rounded-lg shadow-sm"
      >
        <div className="flex justify-between items-center mb-2">
          <p className="font-medium">Delivery</p>
          <Button
            variant="outline"
            className="text-green-600 hover:text-green-700"
          >
            Change
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="text-green-500 w-5 h-5" />
          <p className="text-sm">Home Delivery</p>
        </div>
      </motion.div>

      {/* Order Items */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white p-6 border rounded-lg shadow-sm"
      >
        <p className="font-medium mb-4">Orders</p>
        <div className="space-y-4">
          <div className="flex items-center gap-4 pb-4 border-b">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src="/images/tomatoes.png"
                alt="Tomatoes"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium">Tomatoes Fresh Full Basket</p>
              <p className="text-sm text-gray-600">QTY: 1</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src="/images/egg.png"
                alt="Egg"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium">Egg</p>
              <p className="text-sm text-gray-600">QTY: 1</p>
            </div>
          </div>
        </div>
        <p className="text-right text-xs text-gray-500 mt-4">
          Fulfilled By Hypexx Farms
        </p>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex justify-between items-center pt-4"
      >
        <Link href="/userDashboard/cart">
          <Button
            variant="outline"
            className="text-sm flex items-center gap-2 hover:text-green-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back & Continue Shopping
          </Button>
        </Link>
        <Button variant="primary" className="text-white px-8 py-2.5">
          Confirm Order
        </Button>
      </motion.div>
    </motion.div>
  );
}
