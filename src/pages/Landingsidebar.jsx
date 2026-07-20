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
        backgroundColor: "#0f0f1f",
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
          <li className="nav-item mb-2" key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="nav-link text-white"
              onClick={closeSidebar}
              style={{
                padding: "10px 15px",
                borderRadius: "8px",
                transition: "0.3s",
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
          to="/Signup"
          className="btn btn-outline-info w-100 mb-3"
          onClick={closeSidebar}
        >
          Sign Up
        </Link>
        <Link
          to="/Signin"
          className="btn btn-primary btn-signin w-100"
          onClick={closeSidebar}
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default LandingSidebar;