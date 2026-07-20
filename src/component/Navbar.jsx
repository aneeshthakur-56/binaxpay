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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset to trigger active state slightly before reaching top
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
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShowSidebar = () => {
    const el = document.getElementById("landingSidebar");
    const instance = Offcanvas.getOrCreateInstance(el);
    instance.show();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-3 fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={bitsfar} alt="logo" height="40" />
          </a>

          <button
            className="navbar-toggler border-0 shadow-none px-0"
            type="button"
            onClick={handleShowSidebar}
          >
            <i className="fas fa-bars text-white fs-2"></i>
          </button>

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

            <div className="d-flex gap-2">
              <Link to="/Signup" className="btn btn-outline-info">
                Sign Up
              </Link>
              <Link to="/Signin" className="btn btn-primary btn-signin">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ Landing Sidebar is back */}
      <LandingSidebar />

       <style>{`
        .navbar-custom {
          background-color: rgba(0, 0, 0, 0.7) !important;
          z-index: 1111;
          height: 97px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          backdrop-filter: blur(10px);
        }

        .navbar-brand,
        .nav-link,
        .btn {
          color: var(--bs-navbar-active-color);
        }

        .btn {
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          padding: 5px 20px !important;
          border-radius: 30px;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          gap: 8px;
          white-space: nowrap;
        }

        .btn-outline-info {
          color: #2DD9A8 !important;
          border: 2px solid #2DD9A8 !important;
          background-color: transparent !important;
        }

        .btn-outline-info:hover {
          background-color: #2DD9A8 !important;
          color: #000 !important;
        }

        .btn-signin {
          background-color: #12896B !important;
          color: white !important;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .btn-signin:hover {
          color: #12896B !important;
          border: 2px solid #12896B !important;
          background-color: transparent !important;
        }

        .btn i {
          font-size: 18px;
          margin: 0;
          vertical-align: middle;
        }

        .navbar .nav-link {
          font-weight: 500;
          margin: 0 10px;
          position: relative;
          font-size: 1rem;
          color: white !important;
        }

        .navbar .nav-link::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2.5px;
          background: linear-gradient(160deg, #2E9F97 0%, #6FE6B8 50%, #EAE9F8 100%);
          left: 0;
          bottom: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar .nav-link:hover {
          color: white !important;
        }

        .navbar .nav-link:hover::after,
        .navbar .nav-link.active::after {
          transform: scaleX(1);
        }

        .navbar-buttons {
          gap: 10px;
        }

        @media (max-width: 991px) {
          .navbar-buttons {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            background-color: black;
          }

          .navbar-buttons .btn {
            width: 100%;
          }

          .navbar-nav {
            text-align: center;
            margin-top: 1rem;
          }
        }

        @media (min-width: 992px) {
          .navbar-buttons {
            margin-right: 4rem;
          }

          .navbar-nav {
            padding-left: 3rem;
          }
        }

        .navbar-collapse {
          flex-grow: 1;
          flex-basis: 100%;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Navbar;
