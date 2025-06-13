"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

import { Product } from "./productlist/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative w-full h-64">
        {/* Background color overlay with gradient */}
        <div
          className={clsx(
            "absolute inset-0",
            product.overlayColor,
            "opacity-40 mix-blend-multiply z-5",
            "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/20 after:to-transparent"
          )}
        />

        {/* Product image with zoom effect */}
        <div className="relative h-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover z-10 transform group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
          />
        </div>

        {/* Floating action buttons */}
        <div className="absolute top-3 right-3 z-20 space-y-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors group/heart"
          >
            <Heart className="w-5 h-5 text-gray-400 group-hover/heart:text-red-500 transition-colors" />
          </motion.button>
        </div>

        {/* Quick add button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 z-20"
        >
          <button className="w-full px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl text-sm font-medium text-gray-800 hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/cart">
            <ShoppingCart className="w-4 h-4 transition-colors" />
            Quick Add
          </button>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        {/* Title and Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={clsx(
                  "w-4 h-4",
                  i < product.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-200"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">
            ({product.ratingsCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-gray-800">
            ₦{product.price.toLocaleString()}
          </p>
          <span className="text-xs text-green-600 font-medium px-2 py-1 bg-green-50 rounded-full">
            In Stock
          </span>
        </div>
      </div>
    </motion.div>
  );
}
