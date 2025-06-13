"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CartItem from "../../userDashboard/components/CartItem";
import CartSummary from "./OrderSummary";
import { ShoppingBag, AlertCircle } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  stockLeft: number;
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Tomatoes fresh full basket",
      price: 4000,
      imageUrl:
        "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746006543/image_9_vbbeh2.png",
      stockLeft: 3,
    },
    {
      id: 2,
      name: "Pepper mixed bag",
      price: 3500,
      imageUrl:
        "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746007406/image_10_fd6vot.png",
      stockLeft: 5,
    },
  ]);

  const [quantities, setQuantities] = useState<{ [key: number]: number }>({
    1: 1,
    2: 2,
  });

  const handleIncrement = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 0) - 1),
    }));
  };

  const handleRemove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    const newQuantities = { ...quantities };
    delete newQuantities[id];
    setQuantities(newQuantities);
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * (quantities[item.id] || 0),
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50/60 py-10 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Cart Header */}
        <div className="mb-8">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-2xl font-bold text-gray-800 flex items-center gap-3"
          >
            <ShoppingBag className="w-6 h-6 text-green-600" />
            Shopping Cart ({items.length} items)
          </motion.h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Cart Items */}
          <motion.div layout className="flex-1 space-y-4">
            <AnimatePresence>
              {items.length > 0 ? (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CartItem
                      name={item.name}
                      price={item.price}
                      quantity={quantities[item.id] || 0}
                      imageUrl={item.imageUrl}
                      stockLeft={item.stockLeft}
                      onIncrement={() => handleIncrement(item.id)}
                      onDecrement={() => handleDecrement(item.id)}
                      onRemove={() => handleRemove(item.id)}
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Add items to start shopping
                  </p>
                  <a
                    href="/userDashboard/productListing"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-green-600 rounded-xl hover:bg-green-700 transition-colors duration-200"
                  >
                    Continue Shopping
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {items.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100 mt-6"
              >
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <p className="text-sm text-amber-700">
                  Items in your cart are not reserved. Check out now to secure
                  your products.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Cart Summary */}
          {items.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/3"
            >
              <div className="sticky top-24">
                <CartSummary subtotal={subtotal} />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
