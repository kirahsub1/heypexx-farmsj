"use client";

import "../app/globals.css"; // Ensure correct path
import { Hero } from "./components/landing/Hero";
import HighlightedSection from "./components/landing/Highlighted";
import ImagePopupSection from "./components/landing/Whyheypexx";
import Partnership from "./components/landing/Partner";
import ServicesSection from "./components/landing/Service";
import Slideshow from "./components/landing/Slider";
import HowItWorks from "./components/landing/HowItwork";
import TestimonialSection from "./components/landing/Testimonial";
import FAQSection from "./components/landing/Faq";
// import Newsletter from "./components/landing/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <Slideshow />
      <Partnership />
      <HighlightedSection />
      <ImagePopupSection />
      <ServicesSection />
      <HowItWorks />
      <TestimonialSection />
      <FAQSection />
  
    </div>
  );
}
