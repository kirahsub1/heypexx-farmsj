import Image from "next/image";
import { FaFacebookF, FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiHeart } from "react-icons/fi";

const thumbnails = [
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746707777/image_14_evakkd.png",
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746707777/image_13_obwr14.png",
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746707777/image_15_lkqx5v.png",
  "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746707777/image_16_jibirc.png",
];

export default function ProductPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-700 mb-4">
        <span className="mr-1">Home</span>
        <span className="mx-1">|</span>
        <span className="mr-1">Farm Produce</span>
        <span className="mx-1">|</span>
        <span className="text-green-600 font-medium">Tomatoes</span>
      </nav>

      <div className="max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-md flex flex-col md:flex-row gap-8">
        {/* Left - Main Image & Thumbnails */}
        <div className="flex flex-col items-center">
          <Image
            src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1746006543/image_9_vbbeh2.png"
            alt="Tomatoes"
            width={300}
            height={300}
            className="rounded-xl"
            priority
          />
          <div className="flex gap-2 mt-4">
            {thumbnails.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                width={50}
                height={50}
                className="rounded-md border hover:ring-2 ring-green-500 cursor-pointer"
              />
            ))}
          </div>
          <div className="flex gap-3 mt-4 items-center text-gray-500">
            <span>Share this product</span>
            <IoMdClose className="w-5 h-5 cursor-pointer" />
            <FaFacebookF className="w-5 h-5 text-blue-600 cursor-pointer" />
          </div>
        </div>

        {/* Right - Product Details */}
        <div className="flex-1 relative">
          <FiHeart className="absolute top-2 right-2 w-5 h-5 text-[#46A908]" />
          <h1 className="text-2xl font-semibold">Tomatoes</h1>
          <p className="text-gray-500 mb-4">Farm fresh full basket</p>

          <div className="text-3xl font-bold mb-1">₦4,000</div>
          <p className="text-red-500 mb-4">4 baskets left</p>

          <div className="flex gap-2 text-sm text-gray-600 mb-6">
            <span>+ shipping from</span>
            <span className="font-semibold">to Ikeja</span>
          </div>

          <div className="flex items-center gap-1 text-yellow-500 mb-6">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
            <span className="text-gray-600 ml-2">(263 reviews)</span>
          </div>

          <button className="bg-[#46A908] text-white w-full py-3 rounded-md text-lg hover:bg-green-700 transition">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
