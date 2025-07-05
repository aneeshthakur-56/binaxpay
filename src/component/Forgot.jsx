import React from 'react';
import { Link } from 'react-router-dom';
import bitsfar from '../assets/Image/bitsfar.png';
import { FaEnvelope, FaLock, FaBolt, FaShieldAlt, FaKey } from 'react-icons/fa';

const Forgot = () => {
  return (
    <div className="forgot-wrapper d-flex flex-column flex-md-row text-white ">
      {/* Left Side */}
     
      <div className="forgot-left animate-left d-flex flex-column justify-content-center align-items-center text-center p-4">
        <img src={bitsfar} alt="logo" width="90" className="mb-3" />
        <h1 className="fw-bold display-6 m-0">Reset Password</h1>
        <p className="mt-3 mb-4 w-75">
          Enter your email address to receive instructions on how to reset your password.
        </p>
        <div className="text-start w-75">
          <p><FaShieldAlt className="me-2 text-info" /> Secure Process</p>
          <p><FaBolt className="me-2 text-info" /> Quick Recovery</p>
          <p><FaKey className="me-2 text-info" /> New Password</p>
        </div>
      </div>
   

      {/* Right Side */}
      <div className="forgot-right animate-right d-flex flex-column justify-content-center align-items-center px-4 py-5 w-100">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <h3 className="fw-bold mb-3">Forgot Password</h3>
          <p className="mb-4 text-light">We'll send you a link to reset your password</p>

          <form>
            <div className="mb-3 position-relative">
              <FaEnvelope className="form-icon" />
              <input type="email" placeholder="your@email.com" className="form-control custom-input" />
            </div>

            <button type="submit" className="btn custom-reset-btn w-100">Send Reset Link</button>
          </form>

          <p className="mt-4 text-center">
            Remember your password?{' '}
            <Link to="/signin" className="text-info text-decoration-none">Sign in</Link>
          </p>
        </div>
      </div>

      <style>{`
        .forgot-wrapper {
          min-height: 100vh;
          background: #000;
        }

        .forgot-left, .forgot-right {
          flex: 1;
        }

        .forgot-left {
          background: linear-gradient(135deg, rgba(0, 0, 102, 0.9) 0%, rgba(26, 26, 46, 0.9) 100%);
          background-size: cover;
          background-position: center;
        }

        .forgot-right {
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

        .custom-reset-btn {
          // background-color: #001aff;
                 background-color:rgb(7, 18, 119);
          color: white;
          border-radius: 8px;
          padding: 10px 20px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .custom-reset-btn:hover {
          background-color: black;
          color: aqua;
          border-color: aqua;
        }

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
          .forgot-wrapper {
            flex-direction: column;
          }

          .forgot-left, .forgot-right {
            width: 100%;
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

export default Forgot;