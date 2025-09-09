"use client";
import { useState } from "react";
import { Heart, MapPin } from "lucide-react";
import Image from "next/image";

type LandItem = {
  id: number;
  price: string;
  title: string;
  description: string;
  location: string;
  pricingType: "per annum" | "Outright Price";
  image: string;
};

const landData: LandItem[] = [
  {
    id: 1,
    price: "₦300,000",
    title: "2plot for Poultry lease",
    description:
      "A poultry farm on 2 plots of land @ oke-oba, existing pen on the farm with cage for 200 birds.",
    location: "Oyo, Ibadan",
    pricingType: "per annum",
    image:
      "https://images.unsplash.com/photo-1609788378876-57a85bd3bc67?fit=crop&w=600&q=80",
  },
  {
    id: 2,
    price: "₦500,000",
    title: "Farm Land for rent at Kebbi Road",
    description: "Farm land for rent • hanna village, km 42 kebbi road • size: 45.2 hectares.",
    location: "Kebbi, Nassawara",
    pricingType: "Outright Price",
    image:
      "https://images.unsplash.com/photo-1599351430140-c34f7f97b3a0?fit=crop&w=600&q=80",
  },
  {
    id: 3,
    price: "₦1,000,000",
    title: "Farm Land for rent with Genuine Document",
    description: "4000 acres of land at Ifesowapo for farm.",
    location: "Osun, Osogbo",
    pricingType: "per annum",
    image:
      "https://images.unsplash.com/photo-1589923188900-15e7d4db5c48?fit=crop&w=600&q=80",
  },
  {
    id: 4,
    price: "₦900,000",
    title: "Farm Land for rent at Kebbi Road",
    description: "Farm land for rent • hanna village, km 42 kebbi road • size: 45.2 hectares.",
    location: "Kebbi, Nassawara",
    pricingType: "Outright Price",
    image:
      "https://images.unsplash.com/photo-1599351430140-c34f7f97b3a0?fit=crop&w=600&q=80",
  },
  {
    id: 5,
    price: "₦800,000",
    title: "Farm Land for rent at Kebbi Road",
    description: "Farm land for rent • hanna village, km 42 kebbi road • size: 45.2 hectares.",
    location: "Kebbi, Nassawara",
    pricingType: "Outright Price",
    image:
      "https://images.unsplash.com/photo-1572276596237-5c6a8e2b6d4e?fit=crop&w=600&q=80",
  },
  {
    id: 6,
    price: "₦700,000",
    title: "Farm Land for rent at Kebbi Road",
    description: "Farm land for rent • hanna village, km 42 kebbi road • size: 45.2 hectares.",
    location: "Kebbi, Nassawara",
    pricingType: "Outright Price",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?fit=crop&w=600&q=80",
  },
];

export default function LandLeasingPage() {
  const [visible, setVisible] = useState(4);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Available Farm Lands for Lease</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {landData.slice(0, visible).map((land) => (
          <div
            key={land.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-3"
          >
            <div className="relative">
              <Image
                src={land.image}
                alt={land.title}
                width={600}
                height={192}
                className="h-48 w-full object-cover rounded-xl"
              />
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                <Heart size={18} className="text-gray-600" />
              </button>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-green-600 font-bold">
                {land.price}{" "}
                <span className="text-sm font-normal text-gray-500">
                  {land.pricingType}
                </span>
              </p>
              <h2 className="font-semibold">{land.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">{land.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={14} /> {land.location}
              </div>
            </div>

            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
              Lease Now
            </button>
          </div>
        ))}
      </div>

      {visible < landData.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisible((prev) => prev + 3)}
            className="px-6 py-2 bg-green-100 text-green-600 rounded-xl hover:bg-green-200"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
