'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-white text-white overflow-hidden">
      {/* Floating Background Images */}
      <motion.div 
        className="absolute top-10 left-10 w-24 h-24"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Image src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1739804710/image_2_omkgjo.png" alt="Floating Image 1" width={100} height={100} className="opacity-30" />
      </motion.div>
      
      <motion.div 
        className="absolute top-20 right-20 w-24 h-24"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Image src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1739804710/image_ker50y.png" alt="Floating Image 2" width={100} height={100} className="opacity-30" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-20 w-24 h-24"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Image src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1739804710/image_1_zfzatb.png" alt="Floating Image 3" width={100} height={100} className="opacity-30" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Image src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1739804710/image_3_h3a2ov.png" alt="Floating Image 4" width={100} height={100} className="opacity-30" />
      </motion.div>
      
      {/* Hero Content */}
      <div className="text-center z-10 px-4">
  <h1 className="text-6xl md:text-7xl font-extrabold text-black leading-tight">
    Shop Smart. Farm Big. <br /> 
    <span className="text-green-600">Export Goods.</span>
  </h1>
  <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
    Get high-quality farm products and lease the perfect land to grow your farm — all in one place.
  </p>
  <div className="mt-8 flex justify-center gap-6">
    <button className="bg-[#46A908] text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300">
      Buy Now
    </button>
    <button className="border border-white px-8 py-3 text-lg font-semibold text-green-500 bg-white bg-opacity-20 rounded-full shadow-lg hover:bg-opacity-100 hover:text-gray-900 transition-all duration-300">
      Lease Now
    </button>
  </div>
</div>

    </div>
  );
}

export { Hero };

