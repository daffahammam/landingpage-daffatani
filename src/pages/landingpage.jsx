// src/pages/landingpage.jsx
import React from "react";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import HeroSection from "../components/HeroSection";
import LocationSection from "../components/LocationSection";
import Navbar from "../components/Navbar";
import ProductsSection from "../components/ProductsSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/ui/Footer";

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800">
       <Navbar />
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
      <LocationSection/>
      <Footer/>
    </div>
  );
}
