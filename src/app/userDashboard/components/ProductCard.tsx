import Image from "next/image";
import { Heart } from "lucide-react";
import clsx from "clsx";

type Product = {
  title: string;
  description: string;
  price: number;
  rating: number;
  ratingsCount: number;
  image: string;
  overlayColor: string; // Tailwind-compatible bg color
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="relative bg-white shadow-md rounded-2xl overflow-hidden">
      <div className="relative w-full h-56">
        {/* Background color overlay layer */}
        <div
          className={clsx(
            "absolute inset-0",
            product.overlayColor,
            "opacity-50 mix-blend-multiply z-5"
          )}
        />

        {/* Product image */}
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover z-10"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority
        />

        {/* Heart icon */}
        <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow z-20">
          <Heart className="text-red-500" />
        </div>
      </div>

      {/* Text section */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex items-center gap-2 text-yellow-500 text-sm">
          <div className="flex">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </div>
          <span className="text-gray-500 text-xs">
            ({product.ratingsCount.toLocaleString()} ratings)
          </span>
        </div>
        <p className="text-lg font-bold text-green-700">
          ₦{product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
