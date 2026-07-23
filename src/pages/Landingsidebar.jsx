import React from "react";
import { Link } from "react-router-dom";
import binaxpay from "../assets/Image/binaxpay.png";
import Offcanvas from "bootstrap/js/dist/offcanvas";

const navItems = [
  "Home",
  "Features",
  "Benefits",
  "Pricing",
  "Testimonials",
  "Contact",
];

const LandingSidebar = () => {
  const closeSidebar = () => {
    const el = document.getElementById("landingSidebar");
    if (el) {
      let instance = Offcanvas.getInstance(el);
      if (!instance) {
        instance = new Offcanvas(el);
      }
      instance.hide();
    }
  };

  return (
    <div
      className="offcanvas offcanvas-start sidebar_box"
      tabIndex="-1"
      id="landingSidebar"
      style={{
        background: "linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(18, 53, 46, 0.95) 50%, rgba(10, 10, 10, 0.95) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRight: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
        width: "260px",
        padding: "20px 10px",
        color: "#fff",
      }}
    >
      {/* Logo */}
      <div className="text-center mb-4">
        <img src={binaxpay} alt="Bitsfar Logo" style={{ width: "150px" }} />
      </div>

      {/* Nav Links */}
      <ul className="nav flex-column mb-auto">
        {navItems.map((item) => (
          <li className="nav-item mb-1" key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="nav-link text-white"
              onClick={closeSidebar}
              style={{
                backgroundColor: "#225750",
                border: "1px solid #2A2A2A",
                padding: "8px 14px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                color: "#fff",
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Bottom Buttons */}
      <div className="mt-4 px-3 border-top border-secondary pt-4">
        <h6 className="text-uppercase text-secondary mb-3" style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>
          Get Started
        </h6>
        <Link
          to="/Signin"
          className="btn btn-signin-glass w-100 mb-2"
          onClick={closeSidebar}
        >
          Sign In
        </Link>
        <Link
          to="/Signup"
          className="btn btn-signup-primary w-100"
          onClick={closeSidebar}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LandingSidebar;