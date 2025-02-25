import React from "react";
import Image from "next/image";

const HighlightedSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-12 px-4 bg-gray-100">
      {/* Centered Text with Rounded Border */}
      <div className="border-2 border-gray-700 text-gray-700 px-6 py-3 rounded-full text-lg font-semibold">
        What value do we cultivate?
      </div>

      {/* Description */}
      <p className="mt-4 max-w-xl text-gray-600 text-xl font-light" style={{ fontFamily: "Inria Serif, serif" }}>
        We make it easy for customers to buy fresh farm produce in full chain 
        production and for farmers to lease land, helping them grow and reach more people.
      </p>

      {/* Mini Images */}
      <div className="flex gap-4 mt-6">
        <Image
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740173186/image_10_vbfuzm.png"
          alt="Farm"
          width={80}
          height={80}
          className="rounded-lg shadow-md"
        />
        <Image
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740173187/image_11_cjkjjw.png"
          alt="Fresh Produce"
          width={80}
          height={80}
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default HighlightedSection;




