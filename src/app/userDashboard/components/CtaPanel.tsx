"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface DashboardCtaPanelProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  buttonLink: string;
}

const DashboardCtaPanel: React.FC<DashboardCtaPanelProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "CTA image",
  buttonLink,
}) => {
  return (
    <div className="group relative bg-gradient-to-br from-[#F4B84A] to-[#FFD280] border-0 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-yellow-200 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-yellow-300 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />

      {/* Image */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start relative">
        <div className="transform transition-transform duration-500 group-hover:scale-105 -mt-6 md:-mt-16 md:-ml-12 z-10">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={380}
            height={380}
            className="object-contain drop-shadow-xl"
            priority
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-2/3 flex flex-col justify-center z-20 transform transition-transform duration-300 group-hover:translate-x-2">
        <h2 className="text-4xl font-bold text-white mb-3 tracking-tight drop-shadow-sm">
          {title}
        </h2>
        <p className="text-white/90 mb-6 text-lg leading-relaxed max-w-xl">
          {description}
        </p>
        <Link
          href={buttonLink}
          className="group/btn bg-white/95 hover:bg-white text-[#46A908] px-8 py-3.5 rounded-2xl w-fit font-semibold 
          transition-all duration-300 transform hover:translate-x-1 hover:shadow-lg flex items-center gap-2 hover:gap-3"
        >
          <span>Shop now</span>
          <svg
            className="w-5 h-5 transition-transform duration-300 transform group-hover/btn:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default DashboardCtaPanel;

