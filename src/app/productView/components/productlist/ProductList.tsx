import React from "react";
import Image from "next/image";
import { Product } from "./types";
import { FaStar } from "react-icons/fa";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 w-full"
          >
            <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{product.description}</p>

              <div className="flex items-center text-yellow-400 mt-2 text-sm">
                {Array(product.rating)
                  .fill(null)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
                <span className="text-gray-500 ml-2">
                  ({product.ratingsCount} reviews)
                </span>
              </div>

              <p className="text-green-600 font-bold text-lg mt-3">
                ₦{product.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

