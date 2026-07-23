import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bitsfar from "../assets/Image/binaxpay.png";
import { Link } from "react-router-dom";
import LandingSidebar from "../pages/Landingsidebar";
import Offcanvas from "bootstrap/js/dist/offcanvas";

const navItems2 = [
  "Home",
  "Features",
  "Benefits",
  "Pricing",
  "Testimonials",
  "Contact",
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems2) {
        const el = document.getElementById(item.toLowerCase());
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.toLowerCase());
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById("landingSidebar");
    if (!el) return;

    const onShown = () => setIsSidebarOpen(true);
    const onHidden = () => setIsSidebarOpen(false);

    el.addEventListener("shown.bs.offcanvas", onShown);
    el.addEventListener("hidden.bs.offcanvas", onHidden);

    return () => {
      el.removeEventListener("shown.bs.offcanvas", onShown);
      el.removeEventListener("hidden.bs.offcanvas", onHidden);
    };
  }, []);

  const handleToggleSidebar = (e) => {
    const checked = e.target.checked;
    setIsSidebarOpen(checked);
    const el = document.getElementById("landingSidebar");
    if (!el) return;
    const instance = Offcanvas.getOrCreateInstance(el);
    if (checked) {
      instance.show();
    } else {
      instance.hide();
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top px-3 py-3">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={bitsfar} alt="logo" height="40" />
          </a>

          {/* SVG Animated Hamburger Checkbox Toggle */}
          <label className="hamburger d-lg-none">
            <input
              type="checkbox"
              checked={isSidebarOpen}
              onChange={handleToggleSidebar}
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
          </label>

          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {navItems2.map((item) => (
                <li key={item} className="nav-item">
                  <a
                    className={`nav-link text-white ${activeSection === item.toLowerCase() ? "active" : ""}`}
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="d-flex gap-2 align-items-center">
              <Link to="/Signin" className="btn btn-signin-glass">
                Sign In
              </Link>
              <Link to="/Signup" className="btn btn-signup-primary">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Landing Sidebar */}
      <LandingSidebar />

      <style>{`
        .navbar {
          background: linear-gradient(135deg, rgba(10, 10, 10, 0.92) 0%, rgba(18, 53, 46, 0.92) 50%, rgba(10, 10, 10, 0.92) 100%) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
          transition: all 0.3s ease;
          z-index: 1030 !important;
        }

        .navbar-brand,
        .nav-link {
          color: #ffffff !important;
        }

        .btn-signup-primary {
          background: linear-gradient(135deg, #6FE6B8 0%, #2E9F97 100%) !important;
          border: none !important;
          color: #0A0A0A !important;
          font-weight: 700 !important;
          padding: 8px 24px !important;
          border-radius: 50px !important;
          letter-spacing: 0.3px;
          box-shadow: 0 4px 18px rgba(111, 230, 184, 0.25) !important;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          text-decoration: none !important;
          white-space: nowrap !important;
        }

        .btn-signup-primary:hover {
          background: linear-gradient(135deg, #82f5c9 0%, #34b3a9 100%) !important;
          color: #0A0A0A !important;
          transform: translateY(-2px) scale(1.02) !important;
          box-shadow: 0 8px 25px rgba(111, 230, 184, 0.45) !important;
        }

        .btn-signup-primary:active {
          transform: translateY(0) scale(0.98) !important;
          box-shadow: 0 3px 12px rgba(111, 230, 184, 0.2) !important;
        }

        .btn-signin-glass {
          background: rgba(255, 255, 255, 0.06) !important;
          border: 1.5px solid rgba(255, 255, 255, 0.18) !important;
          color: #ffffff !important;
          font-weight: 600 !important;
          padding: 8px 22px !important;
          border-radius: 50px !important;
          letter-spacing: 0.3px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          text-decoration: none !important;
          white-space: nowrap !important;
        }

        .btn-signin-glass:hover {
          background: rgba(111, 230, 184, 0.12) !important;
          border-color: #6FE6B8 !important;
          color: #6FE6B8 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(111, 230, 184, 0.18) !important;
        }

        .btn-signin-glass:active {
          transform: translateY(0) scale(0.98) !important;
        }

        .nav-link {
          position: relative;
          opacity: 0.85;
          padding: 8px 16px !important;
          transition: opacity 0.3s ease, color 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          opacity: 1;
          color: #6FE6B8 !important;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 2px;
          left: 50%;
          background: linear-gradient(135deg, #6FE6B8 0%, #2E9F97 100%);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 60%;
        }

        /* SVG Animated Hamburger Checkbox Toggle */
        .hamburger {
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          z-index: 1040;
        }

        .hamburger input {
          display: none;
        }

        .hamburger svg {
          height: 2.6em;
          transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .line {
          fill: none;
          stroke: #ffffff;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 3;
          transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .line-top-bottom {
          stroke-dasharray: 12 63;
        }

        .hamburger input:checked + svg {
          transform: rotate(-45deg);
        }

        .hamburger input:checked + svg .line-top-bottom {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32.42;
        }

        @media (max-width: 991.98px) {
          .navbar {
            padding: 12px 20px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
