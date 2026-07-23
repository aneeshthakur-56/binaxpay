import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bitsfar from '../assets/Image/binaxpay.png';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaShieldAlt, FaBolt, FaKey } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { resendVierifyOtpMail } from "../api/api";
import AuthLayout from "./AuthLayout";
import "./custom.css";

const Forgot = () => {
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);

  const handleGetOtp = async () => {
    if (!email) {
      toast.error('Please enter your email address first');
      return;
    }
    try {
      setOtpLoading(true);
      const response = await resendVierifyOtpMail({ email: email, type: "resendOtp" });
      if (response?.data?.success || response?.success) {
        toast.success(response?.message || response?.data?.message || 'OTP Sent Successfully!');
        setOtpTimer(120);
      } else {
        toast.error(response?.data?.message || response?.message || 'Failed to send OTP');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error sending OTP');
    } finally {
      setOtpLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    if (otpTimer > 0) {
      timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [otpTimer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !otp) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.info("Processing password reset...");
  };

  const contentPanel = (
    <div className="auth-content">
      <div className="logo">
        <Link to="/">
          <img src={bitsfar} alt="Binaxpay Logo" />
        </Link>
      </div>
      <h1>
        <span className="accent">Reset</span> Password
      </h1>
      <p>
        Enter your email address and verification OTP to reset your password.
      </p>
      <div className="auth-features">
        <div className="feature-item">
          <span className="feature-icon-ring">
            <FaShieldAlt size={22} color="#12896B" />
          </span>
          &nbsp;
          <span>Secure Process</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon-ring">
            <FaBolt size={22} color="#12896B" />
          </span>
          &nbsp;
          <span>Quick Recovery</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon-ring">
            <FaKey size={22} color="#12896B" />
          </span>
          &nbsp;
          <span>New Password</span>
        </div>
      </div>
    </div>
  );

  const formPanel = (
    <>
      <h2>Forgot Password</h2>
      <p className="form-subtitle">
        Reset your account password using your email
      </p>

      <form className="auth-form" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <div
            className="input-with-icon"
            style={{ position: "relative" }}
          >
            <span
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#aaa",
              }}
            >
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control custom-input"
            />
          </div>
        </div>

        {/* New Password */}
        <div className="form-group mb-3">
          <label htmlFor="password">New Password</label>
          <div
            className="input-with-icon"
            style={{ position: "relative" }}
          >
            <span
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#aaa",
              }}
            >
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control custom-input"
              style={{ paddingRight: "45px" }}
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>

        {/* OTP Field */}
        <div className="form-group mb-4">
          <label htmlFor="otp">Enter Verification OTP</label>
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={handleGetOtp}
              disabled={otpLoading || otpTimer > 0}
              style={{
                whiteSpace: "nowrap",
                borderRadius: "10px",
                padding: "8px 18px",
                fontWeight: "600",
              }}
            >
              {otpLoading
                ? 'Sending...'
                : otpTimer > 0
                  ? `${String(Math.floor(otpTimer / 60)).padStart(2, '0')}:${String(otpTimer % 60).padStart(2, '0')}`
                  : 'Get Code'}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-signin btn-block"
          disabled={loading}
        >
          {loading ? "Processing..." : "Send Reset Link"}
        </button>

        {/* Footer */}
        <div className="auth-footer mt-3">
          Remember your password? <Link to="/signin">Sign in</Link>
        </div>
      </form>
    </>
  );

  return (
    <AuthLayout
      contentPosition="left"
      contentPanel={contentPanel}
      formPanel={formPanel}
    />
  );
};

export default Forgot;