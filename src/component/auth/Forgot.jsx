import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bitsfar from "../../assets/Image/binaxpay.png";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaBolt,
  FaKey,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { resendVierifyOtpMail } from "../../api/api";
import AuthLayout from "../layout/AuthLayout";
import "../custom.css";

const Forgot = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);

  const handleGetOtp = async () => {
    if (!email) {
      toast.error("Please enter your email address first");
      return;
    }
    try {
      setOtpLoading(true);
      const response = await resendVierifyOtpMail({
        email: email,
        type: "resendOtp",
      });
      if (response?.data?.success || response?.success) {
        toast.success(
          response?.message ||
            response?.data?.message ||
            "OTP Sent Successfully!",
        );
        setOtpTimer(120);
      } else {
        toast.error(
          response?.data?.message || response?.message || "Failed to send OTP",
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending OTP");
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
      <div className="logo mb-4">
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
          <span className="feature-icon-ring me-3">
            <FaShieldAlt size={22} color="#6FE6B8" />
          </span>
          <span>Secure Process</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon-ring me-3">
            <FaBolt size={22} color="#6FE6B8" />
          </span>
          <span>Quick Recovery</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon-ring me-3">
            <FaKey size={22} color="#6FE6B8" />
          </span>
          <span>New Password</span>
        </div>
      </div>
    </div>
  );

  const formPanel = (
    <>
      <div className="auth-heading">
        <h2>Forgot Password</h2>
        <p className="form-subtitle">
          Enter your email to receive a password reset OTP
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="form-group mb-3">
          <label htmlFor="email">Email Address</label>
          <div className="input-with-icon" style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#A3A3A3",
              }}
            >
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Enter Registered Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control custom-input"
              style={{ paddingRight: "110px" }}
            />
            <button
              type="button"
              className="btn btn-signin"
              onClick={handleGetOtp}
              disabled={otpLoading || otpTimer > 0}
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "0.82rem",
                padding: "6px 12px",
                borderRadius: "6px",
              }}
            >
              {otpLoading
                ? "Sending..."
                : otpTimer > 0
                  ? `${otpTimer}s`
                  : "Get OTP"}
            </button>
          </div>
        </div>

        {/* OTP Input */}
        <div className="form-group mb-3">
          <label htmlFor="otp">Enter OTP</label>
          <div className="input-with-icon" style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#A3A3A3",
              }}
            >
              <FaKey />
            </span>
            <input
              type="text"
              placeholder="6-Digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
              required
              className="form-control custom-input"
            />
          </div>
        </div>

        {/* New Password */}
        <div className="form-group mb-3">
          <label htmlFor="password">New Password</label>
          <div className="input-with-icon" style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#A3A3A3",
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
                color: "#A3A3A3",
              }}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-signin btn-block mt-3"
          disabled={loading}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        {/* Footer */}
        <div className="auth-footer">
          Remembered your password? <Link to="/signin">Sign in</Link>
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
