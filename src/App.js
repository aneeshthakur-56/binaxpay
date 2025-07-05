import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import StatsSection from './component/StatsSection';
import FeaturesSection from './component/FeaturesSection';
import Business from './component/Business';
import Pricing from './component/Pricing';
import Testimonials from './component/Testimonials';
import CallToAction from './component/CallToAction';
import FaqSection from './component/FaqSection';
import ContactSection from './component/ContactSection';
import Footer from './component/Footer';
import Signin from './component/Signin';
import Signup from './component/Signup';
import Forgot from './component/Forgot';

// 👇 Home component without Signin/Signup
const Home = () => (
  <>
    <HeroSection />
    <StatsSection />
    <FeaturesSection />
    <Business />
    <Pricing />
    <Testimonials />
    <CallToAction />
    <FaqSection />
    <ContactSection />
    <Footer />
  </>
);

const App = () => (
  <Router>
    <Routes>
 
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

   
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />
    </Routes>
  </Router>
);

export default App;
