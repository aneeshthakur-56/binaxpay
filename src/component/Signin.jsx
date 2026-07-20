import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaArrowLeft } from "react-icons/fa";
import { SiFsecure } from "react-icons/si";
import { FaBoltLightning } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import bitsfar from "../assets/Image/binaxpay.png";
import { loginUser } from "../api/api";
import { useAuth } from "../context/AuthContext";
import "./custom.css";

const Signin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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

  return (
    <>
      <div className="auth-container">
        {/* Left Panel */}
        <div className="auth-left">
          <div className="auth-content" data-aos="fade-right">
            <div className="logo">
              <Link to="/">
                <img src={bitsfar} alt="Bitsfar Logo" />
              </Link>
            </div>
            <h1>Welcome Back</h1>
            <p>
              Sign in to access your Bitsfars account and manage your crypto
              payment gateway services.
            </p>
            <div className="auth-features">
              <div className="feature-item">
                <SiFsecure size={24} color="#00E8F8" />
                &nbsp;
                <span>Secure & Encrypted</span>
              </div>
              <div className="feature-item">
                <FaBoltLightning size={24} color="#00E8F8" />
                &nbsp;
                <span>Lightning Fast</span>
              </div>
              <div className="feature-item">
                <RiGlobalLine size={24} color="#00E8F8" />
                &nbsp;
                <span>Global Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel (Form) */}
        <div className="auth-right">
          <div className="auth-form-container" data-aos="fade-left">
            <ToastContainer position="bottom-right" autoClose={3000} />
            <Link to="/" className="btn btn-sm btn-outline-secondary mb-4 d-inline-flex align-items-center gap-2" style={{ border: 'none', color: '#a0a0b0' }}>
              <FaArrowLeft /> Back to Home
            </Link>
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
                    style={{
                      paddingLeft: "35px",
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div
                  className="input-with-icon"
                  style={{ position: "relative" }}
                >
                  {/* Left lock icon */}
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
                    style={{
                      paddingLeft: "35px",
                      paddingRight: "35px",
                    }}
                  />
                  {/* Right toggle icon */}
                  <span
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      color: "#aaa",
                    }}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>

              {/* Remember Me */}
              <div className="form-options">
                <div className="remember-me">
                  <input type="checkbox" id="remember" name="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                {/* <Link to="/forgot" className="forgot-password">Forgot password?</Link> */}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>

              {/* Footer */}
              <div className="auth-footer">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
