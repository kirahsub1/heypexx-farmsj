"use client";

import Image from "next/image";
import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  stockLeft: number;
  onRemove: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  price,
  quantity,
  imageUrl,
  stockLeft,
  onRemove,
  onIncrement,
  onDecrement,
}) => {  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-lg shadow-green-100/20 mb-4 group hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start gap-6">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={imageUrl}
              alt={name}
              width={80}
              height={80}
              className="object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        <div>
          <motion.h4 
            className="font-semibold text-xl text-gray-800 mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {name}
          </motion.h4>
          <motion.p 
            className="flex items-center gap-1.5 text-amber-500 text-sm mb-2 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            {stockLeft} units left
          </motion.p>
          <motion.button
            onClick={onRemove}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-red-500 text-sm flex items-center gap-2 hover:text-red-600 transition-colors duration-200"
            aria-label={`Remove ${name}`}
            title={`Remove ${name}`}
          >
            <Trash2 size={16} className="stroke-2" /> Remove
          </motion.button>
        </div>
      </div>
      <div className="flex flex-col items-end gap-3">
        <motion.p 
          className="font-semibold text-xl text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          ₦{price.toLocaleString()}
        </motion.p>
        <div className="flex items-center gap-3 bg-gray-50 p-1 rounded-full">
          <motion.button
            onClick={onDecrement}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white p-2 rounded-full text-gray-600 hover:text-green-600 shadow-sm hover:shadow transition-all duration-200 disabled:opacity-50 disabled:hover:text-gray-600"
            disabled={quantity === 1}
            aria-label="Decrease quantity"
            title="Decrease quantity"
          >
            <Minus size={16} className="stroke-2" />
          </motion.button>
          <span className="font-medium text-gray-900 w-8 text-center">{quantity}</span>
          <motion.button
            onClick={onIncrement}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 p-2 rounded-full text-white hover:bg-green-600 shadow-sm hover:shadow-md transition-all duration-200"
            aria-label="Increase quantity"
            title="Increase quantity"
          >
            <Plus size={16} className="stroke-2" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
