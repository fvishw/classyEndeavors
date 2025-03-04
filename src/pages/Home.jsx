import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ClientLogos from "../components/ClientLogos";
import Testimonial from "../components/Testimonial";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ClientLogos />
      <Testimonial />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
