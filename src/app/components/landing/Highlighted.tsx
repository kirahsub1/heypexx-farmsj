import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HighlightedSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_#46A908_1px,_transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Animated Border */}
          <div className="relative group">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="border-2 border-[#46A908] text-gray-800 px-8 py-4 rounded-full text-lg md:text-xl font-semibold bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              What value do we cultivate?
            </motion.div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#46A908] to-emerald-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          </div>

          {/* Description with enhanced typography */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl text-gray-700 text-xl md:text-2xl leading-relaxed font-light"
            style={{ fontFamily: "Inria Serif, serif" }}
          >
            We make it easy for customers to buy fresh farm produce in full chain
            production and for farmers to lease land, helping them grow and reach
            more people.
          </motion.p>

          {/* Mini Images with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-6 mt-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#46A908] to-emerald-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <Image
                src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740173186/image_10_vbfuzm.png"
                alt="Farm"
                width={100}
                height={100}
                className="rounded-xl shadow-lg relative transform transition-all duration-300 group-hover:shadow-xl"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#46A908] to-emerald-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <Image
                src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740173187/image_11_cjkjjw.png"
                alt="Fresh Produce"
                width={100}
                height={100}
                className="rounded-xl shadow-lg relative transform transition-all duration-300 group-hover:shadow-xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightedSection;




