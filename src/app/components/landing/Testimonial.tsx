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
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-2xl p-8 rounded-3xl bg-gradient-to-br from-white via-white to-[#f8faf5] shadow-[0_10px_40px_-15px_rgba(70,169,8,0.1)] backdrop-blur-sm text-gray-900 transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(70,169,8,0.2)] border border-[#46A908]/5"
      >        {/* Quote Icon with gradient background */}
        <div className="relative mb-8">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#46A908]/20 to-[#46A908]/5 rounded-full blur-xl"></div>
          <Quote size={40} className="relative text-[#46A908]" strokeWidth={1.5} />
        </div>

        {/* Message */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-medium leading-relaxed text-gray-700 mb-8"
        >
          &ldquo;{message}&rdquo;
        </motion.p>

        {/* Rating */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-1.5 mb-8"
        >
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={24}
              className={`transform transition-all duration-300 ${i < rating ? "text-yellow-400 scale-110" : "text-gray-200"}`}
              fill={i < rating ? "currentColor" : "none"}
              strokeWidth={1.5}
            />
          ))}
        </motion.div>        {/* User Info */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#46A908] to-[#83c254] rounded-full blur"></div>
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-xl">
              <Image
                src={image}
                alt={name}
                layout="fill"
                objectFit="cover"
                sizes="64px"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-900 mb-0.5">{name}</span>
            <span className="text-[#46A908] font-medium mb-0.5">{title}</span>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#46A908]/30"></div>
              {location}
            </div>
          </div>
        </motion.div>
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

  return (    <section className="relative py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c3e4aa]/30 via-white to-[#f8faf5]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_#46A908_1px,_transparent_1px)] [background-size:24px_24px]" />
        {/* Animated circles */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#46A908]/5 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#c3e4aa]/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#83c254]/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >          <span className="inline-block px-4 py-1.5 bg-[#46A908]/10 text-[#46A908] rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-1.5 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#46A908]/30"></div>
            <div className="w-20 h-1 bg-[#46A908] rounded-full"></div>
            <div className="w-3 h-3 rounded-full bg-[#46A908]/30"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hear from our satisfied farmers, exporters, and landowners who have transformed their agricultural journey with us
          </p>
        </motion.div>

        {/* Slider container */}
        <div
          ref={sliderRef}
          className="keen-slider"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#46A908] cursor-pointer pointer-events-auto hover:bg-white transition-all duration-300">
              <button onClick={() => instanceRef.current?.prev()} className="p-2">
                ←
              </button>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#46A908] cursor-pointer pointer-events-auto hover:bg-white transition-all duration-300">
              <button onClick={() => instanceRef.current?.next()} className="p-2">
                →
              </button>
            </div>
          </div>
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
