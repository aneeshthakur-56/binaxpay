import React, { useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import bitsfar from "../../assets/Image/binaxpay.png";
import { SiFsecure } from "react-icons/si";
import { FaBoltLightning } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";
import { verifySignIn, resendVierifyOtpMail } from "../../api/api";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import AuthLayout from "../layout/AuthLayout";
import "../custom.css";

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
      <div className="logo mb-4">
        <Link to="/">
          <img src={bitsfar} alt="Binaxpay Logo" />
        </Link>
      </div>
      <h1>
        <span className="accent">Two-Factor </span> Authentication
      </h1>
      <p>
        Enter the 6-digit OTP code sent to your email to verify your login identity.
      </p>
      <div className="auth-features">
        <div className="feature-item">
          <span className="feature-icon-ring me-3">
            <SiFsecure size={22} color="#6FE6B8" />
          </span>
          <span>Encrypted Verification</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon-ring me-3">
            <FaBoltLightning size={22} color="#6FE6B8" />
          </span>
          <span>Instant OTP Delivery</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon-ring me-3">
            <RiGlobalLine size={22} color="#6FE6B8" />
          </span>
          <span>Global Security</span>
        </div>
      </div>
    </div>
  );

  const formPanel = (
    <>
      <div className="auth-heading">
        <h2>Verify Sign In</h2>
        <p className="form-subtitle">
          OTP sent to <span style={{ color: "#6FE6B8", fontWeight: 600 }}>{email || "your email"}</span>
        </p>
      </div>

      <form className="auth-form" onSubmit={handleOtpSubmit}>
        <div className="d-flex justify-content-between gap-2 mb-4">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="form-control custom-input otp-input"
              style={{
                width: "48px",
                height: "52px",
                textAlign: "center",
                fontSize: "1.25rem",
                fontWeight: "700",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "8px",
                color: "#FFFFFF",
              }}
              ref={(el) => (inputs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              required
            />
          ))}
        </div>

        <button
          type="submit"
          className="btn btn-signin btn-block"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify & Sign In"}
        </button>

        <div className="auth-footer text-center mt-3">
          Didn't receive the OTP?{" "}
          <button
            type="button"
            className="btn btn-link p-0 text-decoration-underline"
            style={{ color: "#6FE6B8", fontWeight: 600 }}
            onClick={handleResendOtp}
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
