'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-white via-[#f8faf5] to-white text-white overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#46A908_1px,_transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#46A908]/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#C3E4AA]/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-[#83c254]/15 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {/* Floating Images with enhanced animations */}
      <motion.div 
        className="absolute top-20 left-20 w-32 h-32"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 6,
          ease: "easeInOut"
        }}
      >
        <Image 
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1739804710/image_2_omkgjo.png" 
          alt="Floating Image 1" 
          width={130} 
          height={130} 
          className="opacity-40 hover:opacity-60 transition-opacity duration-300" 
        />
      </motion.div>
        <motion.div 
        className="absolute top-32 right-24 w-32 h-32"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -5, 5, 0],
          scale: [1, 1.08, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 7,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <Image 
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1739804710/image_ker50y.png" 
          alt="Floating Image 2" 
          width={130} 
          height={130} 
          className="opacity-40 hover:opacity-60 transition-opacity duration-300" 
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-24 left-32 w-32 h-32"
        animate={{ 
          y: [0, 12, 0],
          rotate: [0, 8, -8, 0],
          scale: [1, 1.06, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Image 
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1739804710/image_1_zfzatb.png" 
          alt="Floating Image 3" 
          width={130} 
          height={130} 
          className="opacity-40 hover:opacity-60 transition-opacity duration-300" 
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-28 right-20 w-32 h-32"
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, -6, 6, 0],
          scale: [1, 1.04, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 9,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <Image 
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1739804710/image_3_h3a2ov.png" 
          alt="Floating Image 4" 
          width={130} 
          height={130} 
          className="opacity-40 hover:opacity-60 transition-opacity duration-300" 
        />
      </motion.div>
        {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 px-6 max-w-6xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 bg-[#46A908]/10 text-[#46A908] rounded-full text-sm font-medium"
        >
          Welcome to Heypexx Farms
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 leading-tight tracking-tight"
        >
          Shop Smart.Farm <br className="hidden sm:block" /> Big.{" "}
          <span className="bg-gradient-to-r from-[#46A908] to-[#83c254] text-transparent bg-clip-text">
            Export Goods.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Get high-quality farm products and lease the perfect land to grow your farm 
          — all in one place, with expert support every step of the way.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 text-lg font-semibold rounded-full bg-[#46A908] text-white shadow-xl hover:shadow-2xl hover:shadow-[#46A908]/20 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#46A908] to-[#83c254] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Buy Now</span>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 text-lg font-semibold rounded-full bg-white text-[#46A908] border-2 border-[#46A908] shadow-xl hover:shadow-2xl hover:shadow-[#46A908]/10 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-full bg-[#46A908]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Lease Now</span>
          </motion.button>
        </motion.div>
      </motion.div>

    </div>
  );
}

export { Hero };

