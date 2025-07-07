import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import AuthGuard from "./component/AuthGuard";
import HeroSection from "./component/HeroSection";
import StatsSection from "./component/StatsSection";
import FeaturesSection from "./component/FeaturesSection";
import Business from "./component/Business";
import Pricing from "./component/Pricing";
import Testimonials from "./component/Testimonials";
import CallToAction from "./component/CallToAction";
import FaqSection from "./component/FaqSection";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import VerifySignup from "./component/verifySignup";
import VerifySignin from "./component/verifySignin.jsx";
import RegisterSuccess from "./component/RegisterSuccess";
import Forgot from "./component/Forgot";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./pages/DashboardLayout";
import Profile from "./pages/Profile";

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
            <Navbar /> <Home />
          </>
        }
      />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/VerifySignup" element={<VerifySignup />} />
      <Route path="/verify-signin" element={<VerifySignin />} />

      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route element={<AuthGuard />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default App;
