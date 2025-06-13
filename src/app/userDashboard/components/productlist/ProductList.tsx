import React, { useState } from "react";
import Image from "next/image";
import { Product } from "./types";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="px-4 py-8"
    >
      <motion.div
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {products.map((product) => (
          <motion.div            key={product.id}
            variants={item}
            animate={{
              scale: hoveredId === product.id ? 1.02 : 1,
              y: hoveredId === product.id ? -5 : 0
            }}
            onHoverStart={() => setHoveredId(product.id)}
            onHoverEnd={() => setHoveredId(null)}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Quick action buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors"
                >
                  <FaHeart className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-600 hover:text-green-500 transition-colors"
                >
                  <FaShoppingCart className="w-5 h-5" />
                </motion.button>
              </div>              {/* Product badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/90 text-white backdrop-blur-sm">
                  Featured
                </span>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
                  {product.title}
                </h2>                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-700 text-sm font-medium">
                    Available
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                {product.description}
              </p>

              <div className="flex items-center gap-1 mb-4">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-200 fill-gray-200"
                      }`}
                    />
                  ))}
                <span className="text-gray-500 text-sm ml-2">
                  ({product.ratingsCount})
                </span>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-gray-900">
                  ₦{product.price.toLocaleString()}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProductList;

