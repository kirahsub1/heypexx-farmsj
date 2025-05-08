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
    <div className="relative bg-[#F4B84A] border rounded-2xl p-6 shadow-md flex flex-col md:flex-row items-center gap-6 overflow-hidden">
      {/* Image */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start relative">
        <div className="-mt-6 md:-mt-16 md:-ml-12 z-10">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={380}
            height={380}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-2/3 flex flex-col justify-center z-20">
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-white mb-4 text-lg">{description}</p>
        <Link
          href={buttonLink}
          className="bg-[#46A908] text-white px-6 py-3 rounded-xl w-fit font-semibold hover:bg-green-700 transition"
        >
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default DashboardCtaPanel;