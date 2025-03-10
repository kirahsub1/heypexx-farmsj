'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740164015/image_6_fmgsqr.png',
  'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740164046/image_5_qy1o0j.png',
  'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740164002/image_8_hefwd7.png',
  'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740163999/image_4_je7y6t.png',
  'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740994672/image_22_nytys4.png',
  'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741007851/Leonardo_Kino_XL_Farm_tomatoe_fresh_produce_in_africa_3_gqh7hz.jpg',
  'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741007851/Leonardo_Kino_XL_Farm_Corn_fresh_produce_in_africa_1_p6dj45.jpg'
];

const ImageScroller = () => {
  return (
    <div className="overflow-hidden relative w-full bg-white py-16 flex items-center">
      <motion.div
        className="flex w-max"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: 'linear',
        }}
      >
        {[...images, ...images, ...images].map((src, index) => (
          <div key={index} className="w-72 h-48 mx-4 relative flex-shrink-0">
            <Image
              src={src}
              alt={`Scrolling Image ${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageScroller;
