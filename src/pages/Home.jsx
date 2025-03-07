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
    <div className="relative overflow-hidden">
      <div className="absolute w-[879px] h-[877px] left-[-585px] top-[461px]  opacity-50 bg-[#254a76] rounded-full blur-[500px] "></div>
      <div className="absolute w-[879px] h-[877px] right-[-500px] top-[464px] bg-[#254A76] opacity-50  blur-[500px]  rounded-full -z-1"></div>
      <div className="w-[879px] h-[877px] absolute top-[2000px] left-[-500px] opacity-50 bg-[#254a76] rounded-full blur-[500px] -z-1" />
      <div className="w-[879px] h-[877px] absolute top-[2000px] right-[-480px] opacity-50 bg-[#254a76] rounded-full blur-[500px] -z-1" />

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
