"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import { Product } from "./productlist/types";
import { Loader2, LeafyGreen, Filter } from "lucide-react";

const allProducts: Product[] = [
  {
    id: 1,
    title: "Tomatoes",
    description: "Farm fresh full basket.",
    price: 4000,
    rating: 5,
    ratingsCount: 150,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746006543/image_9_vbbeh2.png",
  },
  {
    id: 2,
    title: "Sweet Potatoes",
    description: "Farm fresh full basket",
    price: 2500,
    rating: 4,
    ratingsCount: 124,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746006543/image_10_psuoeh.png",
  },
  {
    id: 3,
    title: "Eggs",
    description: "Farm fresh full basket",
    price: 1500,
    rating: 4,
    ratingsCount: 80,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746006542/image_11_ssfqkz.png",
  },
  {
    id: 4,
    title: "Plantain",
    description: "Farm fresh full basket",
    price: 4000,
    rating: 5,
    ratingsCount: 100,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746006542/image_12_jkvckg.png",
  },
];

export default function HomePage() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Vegetables", "Fruits", "Grains", "Dairy"];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
    setTimeout(() => {
      loadMoreRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const visibleProducts = allProducts.slice(0, visibleCount);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-8 bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-green-600"
            >
              <LeafyGreen className="w-5 h-5" />
              <span className="text-sm font-medium">Fresh Picks</span>
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-800">
              Farm Produce Just for You!
            </h1>
            <p className="text-gray-500 max-w-2xl">
              Discover fresh, locally sourced produce delivered straight from
              our farms to your table
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 text-gray-700 hover:border-gray-300 transition-all shadow-sm"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </motion.button>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                category === selectedCategory
                  ? "bg-green-500 text-white shadow-md shadow-green-500/20"
                  : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-100"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {visibleProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  delay: visibleProducts.indexOf(product) * 0.1,
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCount < allProducts.length && (
          <motion.div
            ref={loadMoreRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLoadMore}
              className="group px-8 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-3"
            >
              <span className="font-medium">Load More Products</span>
              <Loader2 className="w-4 h-4 animate-spin opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            <p className="text-sm text-gray-500">
              Showing {visibleCount} of {allProducts.length} products
            </p>
          </motion.div>
        )}
      </div>
    </motion.main>
  );
}
