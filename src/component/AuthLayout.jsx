import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import binaxpayLogo from "../assets/Image/binaxpay.png";

/**
 * Shared AuthLayout component for authentication pages.
 * @param {Object} props
 * @param {"left" | "right"} [props.contentPosition="left"] - Side where the branding/content panel is rendered.
 * @param {React.ReactNode} props.contentPanel - The content/branding panel JSX.
 * @param {React.ReactNode} props.formPanel - The input form panel JSX.
 */
const AuthLayout = ({ contentPosition = "left", contentPanel, formPanel }) => {
  const isContentLeft = contentPosition === "left";

  const backHomeBtn = (
    <div
      className={`d-flex ${isContentLeft ? "justify-content-end" : "justify-content-left"} mb-5 desktop-back-btn`}
      style={{ marginBottom: "70px" }}
    >
      <Link to="/" className="back-home-btn" style={{ margin: 0 }}>
        <FaArrowLeft /> Back to Home
      </Link>
    </div>
  );

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      
      {/* Mobile Top Navbar (Visible < 1000px) */}
      <nav className="auth-mobile-nav d-flex justify-content-between align-items-center px-4 py-3">
        <div>
          <Link to="/">
            <img src={binaxpayLogo} alt="Binaxpay Logo" style={{ height: "36px", width: "auto" }} />
          </Link>
        </div>
        <div>
          <Link to="/" className="back-home-btn" style={{ margin: 0 }}>
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </nav>

      <div className="auth-container">
        {isContentLeft ? (
          <>
            {/* Content Panel (Left) - Background stays static, inner content animates from left */}
            <div className="auth-left">
              <div className="auth-animate-left">{contentPanel}</div>
            </div>
            {/* Form Panel (Right) - Background stays static, inner form animates from right */}
            <div className="auth-right">
              <div className="auth-form-container auth-animate-right">
                {backHomeBtn}
                {formPanel}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Form Panel (Left) - Background stays static, inner form animates from left */}
            <div className="auth-right">
              <div className="auth-form-container auth-animate-left">
                {backHomeBtn}
                {formPanel}
              </div>
            </div>
            {/* Content Panel (Right) - Background stays static, inner content animates from right */}
            <div className="auth-left">
              <div className="auth-animate-right">{contentPanel}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AuthLayout;
