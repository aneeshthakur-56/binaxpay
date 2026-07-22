import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './component/Navbar';
import AuthGuard from './component/AuthGuard';
import HeroSection from './component/HeroSection';
import StatsSection from './component/StatsSection';
import FeaturesSection from './component/FeaturesSection';
import Business from './component/Business';
import Pricing from './component/Pricing';
import TestimonialsAndCTA from './component/TestimonialsAndCTA';
import FaqSection from './component/FaqSection';
import ContactSection from './component/ContactSection';
import Footer from './component/Footer';
import Signin from './component/Signin';
import Signup from './component/Signup';
import VerifySignup from './component/verifySignup';
import VerifySignin from './component/verifySignin.jsx';
import RegisterSuccess from './component/RegisterSuccess';
import Forgot from './component/Forgot';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './pages/DashboardLayout';
import Profile from './pages/Profile';
import DepositTransactions from './pages/DepositTransactions.jsx';
import MarginTransactions from './pages/MarginTransactions.jsx';
import PayoutTransactions from './pages/PayoutTransactions.jsx';
import WithdrawHistory from './pages/WithdrawHistory.jsx';
import Withdraw from './pages/Withdraw.jsx';
import ApiKeys from './pages/ApiKeys.jsx';
import WhiteListIp from './pages/whiteListIp.jsx';
import SelfAddresses from './pages/selfAddresses.jsx';
import SelfTransactions from './pages/selfTransactions.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 👇 Home component without Signin/Signup
const Home = () => (
  <>
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

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
      delay: 50,
    });
  }, []);

  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
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
            <Route path="/deposit_transactions" element={<DepositTransactions />} />
            <Route path="/margin_transactions" element={<MarginTransactions />} />
            <Route path="/payout_transactions" element={<PayoutTransactions />} />
            <Route path="/withdraw_history" element={<WithdrawHistory />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/api_keys" element={<ApiKeys />} />
            <Route path="/whitelist_ip" element={<WhiteListIp />} />
            <Route path="/self_addresses" element={<SelfAddresses />} />
            <Route path="/self_transactions/:address" element={<SelfTransactions />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
