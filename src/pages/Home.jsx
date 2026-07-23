import React from 'react';
import Navbar from '../component/home/Navbar';
import HeroSection from '../component/home/HeroSection';
import StatsSection from '../component/home/StatsSection';
import FeaturesSection from '../component/home/FeaturesSection';
import Business from '../component/home/Business';
import Pricing from '../component/home/Pricing';
import TestimonialsAndCTA from '../component/home/TestimonialsAndCTA';
import FaqSection from '../component/home/FaqSection';
import ContactSection from '../component/home/ContactSection';
import Footer from '../component/home/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home"><HeroSection /></div>
      <StatsSection />
      <div id="features"><FeaturesSection /></div>
      <div id="benefits"><Business /></div>
      <div id="pricing"><Pricing /></div>
      <TestimonialsAndCTA />
      <FaqSection />
      <div id="contact"><ContactSection /></div>
      <Footer />
    </>
  );
};

export default Home;
