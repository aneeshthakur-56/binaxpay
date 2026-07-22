import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bitsfar from "../assets/Image/binaxpay.png";
import { FaRocket, FaHandHoldingUsd, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcHeadset } from "react-icons/fc";
import { registerUser } from "../api/api";
import { toast } from "react-toastify";
import AuthLayout from "./AuthLayout";
import "./custom.css";

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
      <div className="logo">
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
          <span className="feature-icon-ring">
            <FaRocket size={24} color="#12896B" />
          </span>
          &nbsp;
          <span>Quick Setup</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon-ring">
            <FaHandHoldingUsd size={24} color="#12896B" />
          </span>
          &nbsp;
          <span>Low Fees</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon-ring">
            <FcHeadset size={24} color="#12896B" />
          </span>
          &nbsp;
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
        <div className="form-group">
          <label>Full Name</label>
          <div className="input-with-icon">
            <i className="fas fa-user"></i>
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

        <div className="form-group">
          <label>Email</label>
          <div className="input-with-icon">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control custom-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Phone</label>
          <div className="input-with-icon">
            <i className="fas fa-phone"></i>
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="form-control custom-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="input-with-icon">
            <i className="fas fa-lock"></i>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control custom-input"
              style={{ paddingRight: "45px" }}
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>

        <div className="form-group terms">
          <input type="checkbox" id="terms" name="terms" required />
          <label>
            I agree to the <Link to="/">Terms of Service </Link>and{" "}
            <Link to="/">Privacy Policy</Link>
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Account"}
        </button>
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
