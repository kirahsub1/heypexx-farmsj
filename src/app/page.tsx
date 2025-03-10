"use client";

import "../app/globals.css"; // Ensure correct path
import { Hero } from "./components/landing/Hero";
import HighlightedSection from "./components/landing/Highlighted";
import ImagePopupSection from "./components/landing/ImagePopUps";
import Partnership from "./components/landing/Partner";
import ServicesSection from "./components/landing/Service";
import Slideshow from "./components/landing/Slider";

export default function Home() {
  return (
    <div>
      <Hero />
      <Slideshow />
      <Partnership />
      <HighlightedSection />
      <ImagePopupSection />
      <ServicesSection />
    </div>
  );
}

