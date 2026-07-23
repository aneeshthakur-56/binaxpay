import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bitsfar from "../../assets/Image/binaxpay.png";
import { FaRocket, FaHandHoldingUsd, FaEye, FaEyeSlash, FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { FcHeadset } from "react-icons/fc";
import { registerUser } from "../../api/api";
import { toast } from "react-toastify";
import AuthLayout from "../layout/AuthLayout";
import "../custom.css";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response = await registerUser({
        email: email,
        password: password,
        name: name,
        phoneNumber: phone,
      });
      if (response.success === true) {
        toast.success(response.message);
        navigate("/verifySignup", { state: { email: email, password: password } });
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
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
        <span className="accent">Join </span> Us
      </h1>
      <p>
        Create your Binaxpay account to start using our crypto payment gateway
        services today.
      </p>
      <div className="auth-features">
        <div className="feature-item">
          <span className="feature-icon-ring me-3">
            <FaRocket size={22} color="#6FE6B8" />
          </span>
          <span>Quick Setup</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon-ring me-3">
            <FaHandHoldingUsd size={22} color="#6FE6B8" />
          </span>
          <span>Low Fees</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon-ring me-3">
            <FcHeadset size={22} color="#6FE6B8" />
          </span>
          <span>24/7 Support</span>
        </div>
      </div>
    </div>
  );

  const formPanel = (
    <>
      <h2>Create Account</h2>
      <p className="form-subtitle">Fill in your details to get started</p>

      <form className="auth-form" id="signupForm" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="form-group mb-3">
          <label htmlFor="name">Full Name</label>
          <div className="input-with-icon" style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#A3A3A3" }}>
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-control custom-input"
            />
          </div>
        </div>

        {/* Email */}
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <div className="input-with-icon" style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#A3A3A3" }}>
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

        {/* Phone */}
        <div className="form-group mb-3">
          <label htmlFor="phone">Phone Number</label>
          <div className="input-with-icon" style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#A3A3A3" }}>
              <FaPhone />
            </span>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="form-control custom-input"
            />
          </div>
        </div>

        {/* Password */}
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <div className="input-with-icon" style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#A3A3A3" }}>
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control custom-input"
              style={{ paddingRight: "45px" }}
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "#A3A3A3" }}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="terms">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            I agree to the <Link to="#">Terms of Service</Link> and{" "}
            <Link to="#">Privacy Policy</Link>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-signup btn-block"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        {/* Footer */}
        <div className="auth-footer">
          Already have an account? <Link to="/signin">Sign in</Link>
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

export default Signup;
