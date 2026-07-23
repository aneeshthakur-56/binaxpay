import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import { SiFsecure } from "react-icons/si";
import { FaBoltLightning } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";
import { toast } from "react-toastify";
import bitsfar from "../assets/Image/binaxpay.png";
import { loginUser } from "../api/api";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "./AuthLayout";
import "./custom.css";

const Signin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await loginUser({ email, password });
      if (response.success === false) {
        toast.error(response.message);
      } else {
        toast.success(response.message);
        setTimeout(() => {
          navigate("/verify-signin", { state: { email } });
        }, 2000);
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
          <img src={bitsfar} alt="Bitsfar Logo" />
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
      <h2>Sign In</h2>
      <p className="form-subtitle">
        Enter your credentials to access your account
      </p>

      <form className="auth-form" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="form-group">
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

        {/* Password */}
        <div className="form-group mb-2">
          <label htmlFor="password">Password</label>
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
          {/* Forgot Password Link */}
          <div className="text-end mt-1 mb-2">
            <Link to="/forgot" className="forgot-password-link">
              Forgot password?
            </Link>
          </div>
        </div>

        {/* Remember Me */}
        <div className="form-options">
          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-signin btn-block"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        {/* Footer */}
        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
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

export default Signin;
