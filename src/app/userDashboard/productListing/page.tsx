"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductList from "../components/productlist/ProductList";
import { Search, Filter, LeafyGreen } from "lucide-react";
import { Product } from "../components/productlist/types";
import { allProducts } from "../components/data/products";

const ProductListingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(allProducts);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = allProducts.filter(
      (product: Product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f8faf5] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <LeafyGreen className="w-8 h-8 text-green-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Farm Fresh Products
            </h1>
          </div>
          <p className="text-gray-600">
            Discover fresh, high-quality products from local farmers
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 hover:border-gray-300 transition-colors">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ProductList products={filteredProducts} />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductListingPage;
