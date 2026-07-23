import React, { useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import bitsfar from "../assets/Image/binaxpay.png";
import { SiFsecure } from "react-icons/si";
import { FaBoltLightning } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";
import { verifySignIn, resendVierifyOtpMail } from "../api/api";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import AuthLayout from "./AuthLayout";
import "./custom.css";

const VerifySignin = () => {
  const location = useLocation();
  const { email } = location.state || {};
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otp = inputs.current.map((input) => input?.value || "").join("");
    if (otp.length < 6) {
      toast.error("Please enter complete 6-digit OTP");
      return;
    }
    setLoading(true);
    try {
      let formData = { email, otp };
      let response = await verifySignIn(formData);
      if (response.success === true) {
        toast.success(response.message || "Verification Successful!");
        localStorage.setItem("user", JSON.stringify(response.user));
        login(response.token);
        navigate("/dashboard");
      } else {
        toast.error(response.message || "Invalid OTP");
      }
    } catch (err) {
      toast.error(err.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      let response = await resendVierifyOtpMail({ email, type: "resendOtp" });
      if (response.success === true) {
        toast.success(response.message || "OTP resent successfully");
      } else {
        toast.error(response.message || "Failed to resend OTP");
      }
    } catch (err) {
      toast.error(err.message || "Error resending OTP");
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) return;
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const contentPanel = (
    <div className="auth-content">
      <div className="logo">
        <Link to="/">
          <img src={bitsfar} alt="Binaxpay Logo" />
        </Link>
      </div>
      <h1>
        <span className="accent">Welcome</span> Back
      </h1>
      <p>
        Sign in to access your Binaxpay account and manage your crypto
        payment gateway services.
      </p>
      <div className="auth-features">
        <div className="feature-item">
          <span className="feature-icon-ring">
            <SiFsecure size={24} color="#12896B" />
          </span>
          &nbsp;
          <span>Secure & Encrypted</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon-ring">
            <FaBoltLightning size={24} color="#12896B" />
          </span>
          &nbsp;
          <span>Lightning Fast</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon-ring">
            <RiGlobalLine size={24} color="#12896B" />
          </span>
          &nbsp;
          <span>Global Access</span>
        </div>
      </div>
    </div>
  );

  const formPanel = (
    <>
      <h2>Enter Verification Code</h2>
      <p className="form-subtitle">
        OTP sent to: <strong style={{ color: "#6FE6B8" }}>{email || "your email"}</strong>
      </p>

      <form className="auth-form" onSubmit={handleOtpSubmit}>
        <div className="form-group mb-4">
          <label className="form-label text-white mb-2">Enter 6-Digit OTP</label>
          <div className="d-flex justify-content-between gap-2">
            {Array(6)
              .fill()
              .map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  ref={(el) => (inputs.current[i] = el)}
                  onChange={(e) => handleChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="form-control text-center otp-input"
                  style={{
                    width: "48px",
                    height: "52px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    backgroundColor: "#225750",
                    border: "1px solid rgba(111, 230, 184, 0.3)",
                    color: "#ffffff",
                    padding: "0",
                    caretColor: "#6FE6B8",
                  }}
                />
              ))}
          </div>
        </div>

        <div className="d-flex gap-3">
          <button
            type="submit"
            className="btn btn-signin flex-grow-1"
            disabled={loading}
            style={{
              borderRadius: "30px",
              padding: "12px 20px",
              fontWeight: "700",
            }}
          >
            {loading ? "Verifying..." : "Continue"}
          </button>

          <button
            type="button"
            onClick={handleResendOtp}
            className="btn btn-outline-info flex-grow-1"
            style={{
              borderRadius: "30px",
              padding: "12px 20px",
              fontWeight: "600",
            }}
          >
            Resend OTP
          </button>
        </div>
      </form>
    </>
  );

  return (
    <AuthLayout
      contentPosition="right"
      contentPanel={contentPanel}
      formPanel={formPanel}
    />
  );
};

export default VerifySignin;
