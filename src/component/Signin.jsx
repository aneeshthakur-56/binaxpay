import React from 'react';
import { Link } from 'react-router-dom';
import bitsfar from '../assets/Image/bitsfar.png';
import { FaLock, FaEnvelope, FaGlobe, FaBolt, FaShieldAlt } from 'react-icons/fa';

const Signin = () => {
  return (
    <div className="signin-wrapper d-flex text-white">
      {/* Left Side */}
      <div className="signin-left animate-left d-flex flex-column justify-content-center align-items-center text-center p-4">
        
        <img src={bitsfar} alt="logo" width="200" className="mb-4" />
        <h1 className="fw-bold mb-3 display-5 m-0">Welcome Back</h1>
        <p className="mb-4 w-75 mx-auto">
          Sign in to access your Bitsfar account and manage your crypto payment gateway services.
        </p>
        <div className="text-start w-75">
          <p><FaShieldAlt className="me-2 text-info" /> Secure & Encrypted</p>
          <p><FaBolt className="me-2 text-info" /> Lightning Fast</p>
          <p><FaGlobe className="me-2 text-info" /> Global Access</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="signin-right animate-right d-flex flex-column justify-content-center px-4">
        <div className="w-100" style={{ maxWidth: "400px", margin: "0 auto" }}>
          <h2 className="fw-bold mb-3">Sign In</h2>
          <p className="mb-4 text-light">Enter your credentials to access your account</p>

          <form>
            <div className="mb-3 position-relative">
              <FaEnvelope className="form-icon" />
              <input type="email" placeholder="your@email.com" className="form-control custom-input" />
            </div>

            <div className="mb-3 position-relative">
              <FaLock className="form-icon" />
              <input type="password" placeholder="••••••••" className="form-control custom-input" />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <input type="checkbox" className="form-check-input me-2" /> Remember me
              </div>
              <Link to="/Forgot" className="text-info text-decoration-none">Forgot password?</Link>
            </div>

            <button type="submit" className="btn custom-signin-btn w-100">Sign In</button>
          </form>

          <p className="mt-4 text-center">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-info text-decoration-none">Sign up</Link>
          </p>
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        .signin-wrapper {
          height: 100vh;
          background: #000;
          overflow: hidden;
        }

        .signin-left, .signin-right {
          flex: 1;
          height: 100%;
        }

        .signin-left {
              background: linear-gradient(135deg, rgba(0, 0, 102, 0.9) 0%, rgba(26, 26, 46, 0.9) 100%);
          background-size: cover;
          background-position: center;
        }
  
   

        .signin-right {
          background-color: #000;
        }

        .form-icon {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          color: #999;
        }

        .custom-input {
          padding-left: 40px;
          background-color: transparent;
          border: 1px solid #444;
          border-radius: 8px;
          color: white;
        }

        .custom-input::placeholder {
          color: #999;
        }

        .custom-input:focus {
          border-color: white;
          color: white;
          background-color: transparent;
          box-shadow: none;
        }

        .custom-signin-btn {
           background-color:rgb(7, 18, 119);
           color: white;
          border-radius: 8px;
          padding: 10px 20px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .custom-signin-btn:hover {
          background-color: black;
          color: aqua;
          border-color: aqua;
        }

        /* 🔥 Animation */
        .animate-left {
          animation: slideInLeft 1s ease-out forwards;
          transform: translateX(-100%);
          opacity: 0;
        }

        .animate-right {
          animation: slideInRight 1s ease-out forwards;
          transform: translateX(100%);
          opacity: 0;
        }

        @keyframes slideInLeft {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .signin-wrapper {
            flex-direction: column;
          }

          .signin-left, .signin-right {
            width: 100%;
            flex: none;
            min-height: 50vh;
          }

          .animate-left, .animate-right {
            transform: none;
            opacity: 1;
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Signin;
