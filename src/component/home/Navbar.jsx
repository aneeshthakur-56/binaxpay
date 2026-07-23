import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bitsfar from "../../assets/Image/binaxpay.png";
import { Link } from "react-router-dom";
import LandingSidebar from "./Landingsidebar";
import Offcanvas from "bootstrap/js/dist/offcanvas";
import styles from "./css/Navbar.module.css";

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
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top px-3 py-3 ${styles.navbar}`}>
        <div className="container">
          <a className={`navbar-brand ${styles.navbarBrand}`} href="#">
            <img src={bitsfar} alt="logo" height="40" />
          </a>

          {/* SVG Animated Hamburger Checkbox Toggle */}
          <label className={`d-lg-none ${styles.hamburger}`}>
            <input
              type="checkbox"
              checked={isSidebarOpen}
              onChange={handleToggleSidebar}
            />
            <svg viewBox="0 0 32 32">
              <path
                className={`${styles.line} ${styles.lineTopBottom}`}
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className={styles.line} d="M7 16 27 16" />
            </svg>
          </label>

          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {navItems2.map((item) => (
                <li key={item} className="nav-item">
                  <a
                    className={`nav-link text-white ${styles.navLink} ${activeSection === item.toLowerCase() ? styles.navLinkActive : ""}`}
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="d-flex gap-2 align-items-center">
              <Link to="/Signin" className={`btn ${styles.btnSigninGlass}`}>
                Sign In
              </Link>
              <Link to="/Signup" className={`btn ${styles.btnSignupPrimary}`}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Landing Sidebar */}
      <LandingSidebar activeSection={activeSection} />
    </>
  );
};

export default Navbar;
