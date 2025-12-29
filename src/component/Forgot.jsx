import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import bitsfar from '../assets/Image/binaxpay.png';
import { FaEnvelope, FaLock, FaBolt, FaShieldAlt, FaKey } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {  resendVierifyOtpMail  } from "../api/api";

const Forgot = () => {
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [showPassword, setShowPassword] = useState(false);
    const [cPassword, setCPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [otpLoading, setOtpLoading] = useState(false);
    const [otpTimer, setOtpTimer] = useState(0);
    const handleGetOtp = async () => {
        try {
            setOtpLoading(true); 
            const response =   await resendVierifyOtpMail({email:email,type:"resendOtp"}); 
            console.log(' withdraw response ' , response)
            if (response.data.success) {
                  toast.success('OTP Sent Successfully!');
                setOtpTimer(120);  // Start 2 minute countdown
            } else {
                  toast.error(response.data.message || 'Failed to send OTP');
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
          <p className="mb-4 text-light">You can reset password here</p>

          <form>
            <div className="mb-3 position-relative">
              <FaEnvelope className="form-icon" /> 
               <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='form-control custom-input'
                  />
            </div>
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
             <div className="mb-3 d-flex">
              <input
                type="text"
                className="form-control bg-secondary text-white border-0 me-2"
                placeholder="Enter OTP"
              value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-info text-dark fw-semibold"
                onClick={handleGetOtp}
                disabled={otpLoading || otpTimer > 0}
              >
                {otpLoading
                  ? 'Sending...'
                  : otpTimer > 0
                    ? `${Math.floor(otpTimer / 60)}:${String(otpTimer % 60).padStart(2, '0')}`
                    : 'Code'}
              </button>
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