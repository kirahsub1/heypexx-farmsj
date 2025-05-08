import React from "react";
import Image from "next/image";
import { Product } from "./types";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-xl shadow p-4 bg-white hover:shadow-md transition"
        >
          <div className="relative w-full h-48">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          <p className="text-green-600 font-bold mt-1">
            ${product.price.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
