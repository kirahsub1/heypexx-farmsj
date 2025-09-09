
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="border-b px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Checkout</h1>
        <input
          type="text"
          placeholder="Search product"
          className="border rounded-lg px-3 py-1 text-sm"
        />
      </header>

      {/* Terms */}
      <div className="bg-gray-50 text-xs text-gray-600 px-6 py-3">
        If You Proceed, You Are Automatically Accepting Our Terms & Conditions{" "}
        <a href="#" className="text-green-600 underline">
          Terms & Conditions
        </a>
      </div>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-6 py-6 space-y-6">
        {/* Price Summary */}
        <div className="border rounded-lg p-4 space-y-2">
          <div className="flex justify-between">
            <span>Item’s Total (2)</span>
            <span>₦11,000</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fees</span>
            <span>₦1,000</span>
          </div>
          <div className="flex justify-between font-semibold border-t pt-2">
            <span>Total</span>
            <span>₦12,000</span>
          </div>

          {/* Promo Code */}
          <div className="flex mt-3">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter code here"
              className="flex-1 border rounded-l-lg px-3 py-2 text-sm"
            />
            <button className="bg-green-600 text-white px-4 rounded-r-lg text-sm">
              APPLY
            </button>
          </div>
        </div>

        {/* Payment Method */}
        <div className="border rounded-lg p-4 flex justify-between items-center">
          <div>
            <p className="text-sm">Payment Method</p>
            <p className="text-sm font-medium">
              Pay With Cards, Bank Transfer Or USSD
            </p>
          </div>
          <a href="#" className="text-green-600 text-sm font-medium">
            Change
          </a>
        </div>

        {/* Delivery Address */}
        <div className="border rounded-lg p-4 flex justify-between items-center">
          <div>
            <p className="text-sm">Delivery Address</p>
            <p className="text-sm font-medium">Mimi</p>
            <p className="text-xs text-gray-500">
              No 24 Ajao Street, Lagos Nigeria
            </p>
          </div>
          <a href="#" className="text-green-600 text-sm font-medium">
            Change Your Address
          </a>
        </div>

        {/* Delivery */}
        <div className="border rounded-lg p-4 flex justify-between items-center">
          <div>
            <p className="text-sm">Delivery</p>
            <p className="text-sm font-medium">Home Delivery</p>
          </div>
          <a href="#" className="text-green-600 text-sm font-medium">
            Change
          </a>
        </div>

        {/* Orders */}
        <div className="border rounded-lg p-4 space-y-3">
          <h2 className="text-sm font-medium">Orders</h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Image
                src="/tomatoes.png"
                alt="Tomatoes"
                width={48}
                height={48}
                className="w-12 h-12 rounded"
              />
              <div>
                <p className="text-sm">Tomatoes Fresh Full Basket</p>
                <p className="text-xs text-gray-500">QTY: 1</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Image
                src="/egg.png"
                alt="Egg"
                width={48}
                height={48}
                className="w-12 h-12 rounded"
              />
              <div>
                <p className="text-sm">Egg</p>
                <p className="text-xs text-gray-500">QTY: 1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6">
          <Link href="/userDashboard/productListing" className="text-sm text-gray-600 underline">
            Go Back & Continue Shopping
          </Link>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium">
            Confirm order
          </button>
        </div>
      </main>
    </div>
  );
}
 