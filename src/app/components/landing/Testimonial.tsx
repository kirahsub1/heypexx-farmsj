"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  title: string;
  message: string;
  rating: number;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "John Doe",
    title: "CEO, InnovateTech",
    message: "Absolutely loved the experience! Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    title: "Marketing Director, CreativeHub",
    message: "Great service, would definitely come back!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Alex Brown",
    title: "Product Manager, TechWorld",
    message: "Fantastic! Made my day so much better!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const TestimonialCard = ({
  name,
  title,
  message,
  rating,
  image,
}: TestimonialProps) => {
  return (
    <div className="keen-slider__slide flex justify-center">
      <div className="w-full max-w-lg p-8 rounded-3xl shadow-2xl bg-white text-gray-900 transition-all duration-300">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={26}
              className={i < rating ? "text-yellow-400" : "text-gray-300"}
              fill={i < rating ? "currentColor" : "none"}
            />
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

        {/* Message */}
        <p className="text-lg font-medium italic leading-relaxed text-gray-600">
          {message}
        </p>

        {/* User Info */}
        <div className="mt-6 flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
              sizes="56px"
              className="rounded-full"
            />
          </div>
          <span className="font-bold text-lg text-gray-900">{name}</span>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 1,
        spacing: 24,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => slider.next(), 5000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="p-12 bg-gradient-to-b from-[#c3e4aa] to-white min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12 uppercase tracking-wide">
        What People Say
      </h2>
      <div ref={sliderRef} className="keen-slider w-full max-w-4xl">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
