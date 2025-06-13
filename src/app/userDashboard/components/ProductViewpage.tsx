"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Heart, Star, Truck, Shield, ArrowLeft, Share2 } from "lucide-react";

const thumbnails = [
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746707777/image_14_evakkd.png",
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746707777/image_13_obwr14.png",
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746707777/image_15_lkqx5v.png",
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746707777/image_16_jibirc.png",
];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(thumbnails[0]);
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50/50 py-8"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2 text-sm text-gray-600 mb-6"
        >
          <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <div className="flex items-center gap-2">
            <span className="hover:text-green-600 cursor-pointer">Home</span>
            <span className="text-gray-400">/</span>
            <span className="hover:text-green-600 cursor-pointer">
              Farm Produce
            </span>
            <span className="text-gray-400">/</span>
            <span className="text-green-600 font-medium">Tomatoes</span>
          </div>
        </motion.nav>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left - Main Image & Thumbnails */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="relative group">
                <motion.div
                  layoutId="mainImage"
                  className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
                >
                  <Image
                    src={selectedImage}
                    alt="Tomatoes"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </motion.div>

                {/* Share button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                </motion.div>
              </div>
              {/* Thumbnails */}
              <div className="mt-6 grid grid-cols-4 gap-4">
                {thumbnails.map((src, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ y: -2 }}
                    onClick={() => setSelectedImage(src)}
                    className={`relative aspect-square rounded-xl overflow-hidden ${
                      selectedImage === src
                        ? "ring-2 ring-green-500"
                        : "ring-1 ring-gray-200"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`View ${idx + 1}`}
                      fill
                      className="object-cover hover:opacity-80 transition-opacity"
                    />
                  </motion.button>
                ))}
              </div>
              {/* Social Share */}{" "}
              <div className="mt-6 flex items-center gap-4 py-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">Share via:</span>
                <div className="flex gap-3">
                  {[
                    {
                      Icon: FaFacebookF,
                      color: "bg-blue-600",
                    },
                    {
                      Icon: FaTwitter,
                      color: "bg-sky-500",
                    },
                    {
                      Icon: FaWhatsapp,
                      color: "bg-green-500",
                    },
                  ].map(({ Icon, color }, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${color} text-white p-2 rounded-full`}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 space-y-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">
                    Fresh Tomatoes
                  </h1>
                  <p className="text-gray-500 mt-2">
                    Premium farm fresh full basket
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 rounded-full ${
                    isLiked ? "bg-red-50" : "bg-gray-50"
                  }`}
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isLiked ? "text-red-500 fill-red-500" : "text-gray-400"
                    }`}
                  />
                </motion.button>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-900">₦4,000</div>
                <p className="text-red-500 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Only 4 baskets left
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-500">(263 verified reviews)</span>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Quantity:</span>
                <div className="flex items-center gap-3">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-300"
                  >
                    -
                  </motion.button>
                  <span className="w-12 text-center font-medium">
                    {quantity}
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-300"
                  >
                    +
                  </motion.button>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span>Free shipping to Ikeja</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>Secure checkout with Heypexx Protect</span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
              >
                Add to Cart - ₦{(4000 * quantity).toLocaleString()}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
