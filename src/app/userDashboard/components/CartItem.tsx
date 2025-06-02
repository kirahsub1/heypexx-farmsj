// components/CartItem.tsx

"use client";

import Image from "next/image";
import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

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
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow border mb-4">
      <div className="flex items-start gap-4">
        <Image
          src={imageUrl}
          alt={name}
          width={64}
          height={64}
          className="object-contain rounded"
        />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-red-500 text-sm mb-1">⚠ {stockLeft} units left</p>
          <button
            onClick={onRemove}
            className="text-green-600 text-sm flex items-center gap-1"
            aria-label={`Remove ${name}`}
            title={`Remove ${name}`}
          >
            <Trash2 size={14} /> Remove
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-medium text-lg">₦{price.toLocaleString()}</p>
        <div className="flex items-center mt-2 gap-2">
          <button
            onClick={onDecrement}
            className="bg-gray-300 px-2 py-1 rounded text-white disabled:opacity-50"
            disabled={quantity === 1}
            aria-label="Decrease quantity"
            title="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span>{quantity}</span>
          <button
            onClick={onIncrement}
            className="bg-green-600 px-2 py-1 rounded text-white hover:bg-green-700"
            aria-label="Increase quantity"
            title="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
