import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Partner 1", logo: "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740170814/image_47_mmsziv.png" },
  { name: "Partner 2", logo: "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740170814/image_45_lzzawn.png" },
  { name: "Partner 3", logo: "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740170816/image_46_wxj4pe.png" },
  { name: "Partner 4", logo: "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740170817/image_51_ioozyn.png" },
];

const Partnership: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Join Our Partnership Network
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
        The world’s top brand trust Heypexx farm
        </p>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="relative w-32 h-16 flex items-center justify-center p-2 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                layout="fill"
                objectFit="contain"
                priority
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-8">
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition"
          >
            Partner with Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partnership;

