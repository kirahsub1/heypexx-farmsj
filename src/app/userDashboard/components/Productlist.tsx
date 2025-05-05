"use client";

import {useRef, useState } from "react";
import ProductCard from "./ProductCard";

const allProducts = [
  {
    title: "Tomatoes",
    description: "Farm fresh full basket.",
    price: 4000,
    rating: 5,
    ratingsCount: 150,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746006543/image_9_vbbeh2.png",
    overlayColor: "bg-red-300",
  },
  {
    title: "Sweet Potatoes",
    description: "Farm fresh full basket",
    price: 2500,
    rating: 4,
    ratingsCount: 124,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746006543/image_10_psuoeh.png",
    overlayColor: "bg-orange-300",
  },
  {
    title: "Eggs",
    description: "Farm fresh full basket",
    price: 1500,
    rating: 4,
    ratingsCount: 80,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746006542/image_11_ssfqkz.png",
    overlayColor: "bg-yellow-200",
  },
  {
    title: "Plantain",
    description: "Farm fresh full basket",
    price: 4000,
    rating: 5,
    ratingsCount: 100,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746006542/image_12_jkvckg.png",
    overlayColor: "bg-yellow-300",
  },
  {
    title: "Plantain",
    description: "Farm fresh full basket",
    price: 4000,
    rating: 5,
    ratingsCount: 100,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746006542/image_12_jkvckg.png",
    overlayColor: "bg-yellow-300",
  },
];



export default function HomePage() {
  const [visibleCount, setVisibleCount] = useState(4);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);

    // Scroll to newly revealed items
    setTimeout(() => {
      loadMoreRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100); // delay to allow rendering
  };

  const visibleProducts = allProducts.slice(0, visibleCount);

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Farm Produce Just for You!</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>

      {visibleCount < allProducts.length && (
        <div ref={loadMoreRef} className="mt-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </main>
  );
}

