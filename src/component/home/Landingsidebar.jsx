import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import binaxpay from "../../assets/Image/binaxpay.png";
import Offcanvas from "bootstrap/js/dist/offcanvas";
import styles from "./css/Landingsidebar.module.css";

const navItems = [
  "Home",
  "Features",
  "Benefits",
  "Pricing",
  "Testimonials",
  "Contact",
];

const LandingSidebar = ({ activeSection = "home" }) => {
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
      className={`offcanvas offcanvas-start ${styles.sidebarBox}`}
      tabIndex="-1"
      id="landingSidebar"
    >
      {/* Header with Logo and Close Button */}
      <div className={styles.sidebarHeader}>
        <Link to="/" onClick={closeSidebar}>
          <img src={binaxpay} alt="BinaXpay Logo" className={styles.sidebarLogo} />
        </Link>
      </div>

      {/* Nav Links */}
      <div className={styles.navContainer}>
        <ul className="nav flex-column">
          {navItems.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <li className="nav-item mb-1" key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                  onClick={closeSidebar}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Action Buttons (Sign In & Sign Up guaranteed visible) */}
      <div className={styles.footerSection}>
        <div className={styles.footerTitle}>Get Started</div>
        <Link
          to="/Signin"
          className={styles.btnSignin}
          onClick={closeSidebar}
        >
          Sign In
        </Link>
        <Link
          to="/Signup"
          className={styles.btnSignup}
          onClick={closeSidebar}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LandingSidebar;