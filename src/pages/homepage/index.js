import React from "react";
import HeroSection from "../../components/hero-section";
import Testimonial from "../../components/testimonial";
import Why from "../../components/why";
import CTA from "../../components/cta_banner";
import FAQ from "../../components/faq";
import OurServices from "../../components/our-services";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <Why />
      <Testimonial />
      <CTA />
      <FAQ />
    </div>
  );
};

export default Homepage;
