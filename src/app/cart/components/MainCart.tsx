"use client";

import CartItem from "./CartItem";
import CartSummary from "./OrderSummary";
import { useState } from "react";

export default function CartPage() {
  // Cart item states
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(2);

  const price1 = 4000;
  const price2 = 3500;

  // Handlers for item 1
  const handleIncrement1 = () => setQuantity1((q) => q + 1);
  const handleDecrement1 = () => setQuantity1((q) => Math.max(1, q - 1));
  const handleRemove1 = () => alert("Remove item 1");

  // Handlers for item 2
  const handleIncrement2 = () => setQuantity2((q) => q + 1);
  const handleDecrement2 = () => setQuantity2((q) => Math.max(1, q - 1));
  const handleRemove2 = () => alert("Remove item 2");

  const subtotal = price1 * quantity1 + price2 * quantity2;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Column: Cart Items */}
        <div className="flex-1 space-y-4">
          <CartItem
            name="Tomatoes fresh full basket"
            price={price1}
            quantity={quantity1}
            imageUrl="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746006543/image_9_vbbeh2.png"
            stockLeft={3}
            onIncrement={handleIncrement1}
            onDecrement={handleDecrement1}
            onRemove={handleRemove1}
          />
          <CartItem
            name="Pepper mixed bag"
            price={price2}
            quantity={quantity2}
            imageUrl="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746007406/image_10_fd6vot.png"
            stockLeft={5}
            onIncrement={handleIncrement2}
            onDecrement={handleDecrement2}
            onRemove={handleRemove2}
          />
        </div>

        {/* Right Column: Cart Summary */}
        <div className="w-full lg:w-1/3">
          <CartSummary subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
