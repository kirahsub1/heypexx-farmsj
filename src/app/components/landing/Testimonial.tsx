"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

interface TestimonialProps {
  name: string;
  title: string;
  message: string;
  rating: number;
  image: string;
  location: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Michael Chen",
    title: "Farm Owner",
    message:
      "Heypexx Farms has revolutionized how we connect with buyers. Their platform made it incredibly easy to reach new markets and get better prices for our produce.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "California, USA",
  },
  {
    name: "Sarah Johnson",
    title: "Agricultural Exporter",
    message:
      "The export services provided by Heypexx are exceptional. They've helped us expand our reach to international markets with minimal hassle.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "Ontario, Canada",
  },
  {
    name: "David Williams",
    title: "Land Owner",
    message:
      "I've had great success leasing my agricultural land through Heypexx. Their platform connects you with reliable farmers and ensures smooth transactions.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    location: "Texas, USA",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const TestimonialCard = ({
  name,
  title,
  message,
  rating,
  image,
  location,
}: TestimonialProps) => {
  return (
    <div className="keen-slider__slide flex justify-center px-4">
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        className="w-full max-w-2xl p-8 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] bg-white/95 backdrop-blur-sm text-gray-900 transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)]"
      >
        {/* Quote Icon */}
        <div className="mb-6">
          <Quote size={40} className="text-[#46A908] opacity-30" />
        </div>

        {/* Message */}
        <p className="text-xl font-medium leading-relaxed text-gray-700 mb-8 italic">
          &ldquo;{message}&rdquo;
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={22}
              className={i < rating ? "text-yellow-400" : "text-gray-300"}
              fill={i < rating ? "currentColor" : "none"}
            />
          ))}
        </div>

        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-[#46A908]/10 shadow-lg">
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
              sizes="64px"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-900">{name}</span>
            <span className="text-[#46A908] font-medium">{title}</span>
            <span className="text-gray-500 text-sm">{location}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 1,
        spacing: 48,
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

  const stopAutoplay = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    if (instanceRef.current) {
      timeoutRef.current = setTimeout(() => {
        instanceRef.current?.next();
        startAutoplay();
      }, 5000);
    }
  }, [instanceRef, stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, [startAutoplay, stopAutoplay]);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c3e4aa]/40 to-white">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_#46A908_1px,_transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-[#46A908] mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied farmers, exporters, and landowners
          </p>
        </motion.div>

        {/* Slider container */}
        <div
          ref={sliderRef}
          className="keen-slider"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
