import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Public & Landing Page
import Home from '../pages/Home';

// Auth Pages
import Signin from '../component/auth/Signin';
import Signup from '../component/auth/Signup';
import VerifySignup from '../component/auth/verifySignup';
import VerifySignin from '../component/auth/verifySignin';
import RegisterSuccess from '../component/auth/RegisterSuccess';
import Forgot from '../component/auth/Forgot';

// Protected / Dashboard Layout & Pages
import AuthGuard from '../component/auth/AuthGuard';
import DashboardLayout from '../component/layout/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import DepositTransactions from '../pages/DepositTransactions';
import MarginTransactions from '../pages/MarginTransactions';
import PayoutTransactions from '../pages/PayoutTransactions';
import WithdrawHistory from '../pages/WithdrawHistory';
import Withdraw from '../pages/Withdraw';
import ApiKeys from '../pages/ApiKeys';
import WhiteListIp from '../pages/whiteListIp';
import SelfAddresses from '../pages/selfAddresses';
import SelfTransactions from '../pages/selfTransactions';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Home Route */}
      <Route path="/" element={<Home />} />

      {/* Auth Routes */}
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/VerifySignup" element={<VerifySignup />} />
      <Route path="/verify-signin" element={<VerifySignin />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/forgot" element={<Forgot />} />

      {/* Protected Dashboard Routes */}
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
  );
};

export default AppRoutes;
