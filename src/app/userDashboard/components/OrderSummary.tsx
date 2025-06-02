// components/CartSummary.tsx

"use client";

import React from "react";

interface CartSummaryProps {
  subtotal: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal }) => {
  return (
    <div className="bg-white rounded-xl shadow border p-4 w-full max-w-xs mx-auto">
      <h3 className="text-lg font-semibold mb-2">Cart Summary</h3>
      <div className="flex justify-between items-center text-gray-700 border-t pt-2">
        <span>Subtotal</span>
        <span className="font-medium">₦{subtotal.toLocaleString()}</span>
      </div>
      <button className="w-full mt-4 bg-[#46A908] text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
        Checkout (₦{subtotal.toLocaleString()})
      </button>
    </div>
  );
};

export default CartSummary;
