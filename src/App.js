import React from "react";
import "./assets/css/normalize.css";
import "./assets/css/reset.css";
import "./assets/css/bootstrap.css";
import './assets/css/global.css';
import Header from './components/header';
import HeroSection from './components/hero-section';
import Testimonial from './components/testimonial';
import Why from './components/why';
import CTA from './components/cta_banner';
import FAQ from './components/faq';
import OurServices from './components/our-services';
import Footer from './components/footer';

function App () {
  return (
    <div>
      <Header />
      <HeroSection />
      <OurServices />
      <Why />
      <Testimonial />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
