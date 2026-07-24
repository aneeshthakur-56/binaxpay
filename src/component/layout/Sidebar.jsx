import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Offcanvas from "bootstrap/js/dist/offcanvas";
import { motion, useReducedMotion } from "framer-motion";
import binaxpay from "../../assets/Image/binaxpay.png";
import {
  FaTachometerAlt,
  FaExchangeAlt,
  FaPaperPlane,
  FaCog,
  FaEllipsisH,
  FaChevronDown,
  FaArrowDown,
  FaChartLine,
  FaWallet,
  FaHistory,
  FaNetworkWired,
  FaKey,
  FaUser,
  FaAddressBook,
  FaCoins,
  FaPercentage,
  FaBookOpen,
  FaNewspaper,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({ user, handleLogout }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const transactionsRef = useRef(null);
  const withdrawRef = useRef(null);
  const settingsRef = useRef(null);
  const moreRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeSidebar = () => {
    const sidebarElement = document.getElementById("sidebarCollapse");
    if (sidebarElement) {
      let instance = Offcanvas.getInstance(sidebarElement);
      if (!instance) {
        instance = Offcanvas.getOrCreateInstance(sidebarElement, {
          backdrop: true,
        });
      }
      instance.hide();
    }
  };

  // Auto-expand dropdown if current pathname matches any subitem
  useEffect(() => {
    const path = location.pathname;
    if (["/deposit_transactions", "/margin_transactions", "/payout_transactions"].includes(path)) {
      setOpenDropdown("transactions");
    } else if (["/withdraw", "/withdraw_history"].includes(path)) {
      setOpenDropdown("withdraw");
    } else if (["/whitelist_ip", "/api_keys", "/profile", "/self_addresses"].includes(path)) {
      setOpenDropdown("settings");
    } else if (["/supported_coins", "/fees", "/docs", "/blog"].includes(path)) {
      setOpenDropdown("more");
    }
  }, [location.pathname]);

  // Adjust height of collapsible submenu containers smoothly
  useEffect(() => {
    const setMaxHeight = (ref, isOpen) => {
      if (ref.current) {
        ref.current.style.maxHeight = isOpen
          ? ref.current.scrollHeight + "px"
          : "0px";
      }
    };

    setMaxHeight(transactionsRef, openDropdown === "transactions");
    setMaxHeight(withdrawRef, openDropdown === "withdraw");
    setMaxHeight(settingsRef, openDropdown === "settings");
    setMaxHeight(moreRef, openDropdown === "more");
  }, [openDropdown]);

  const isCurrent = (path) => location.pathname === path;

  // ─── Smooth Animation Variants ───
  const SMOOTH_EASE = [0.16, 1, 0.3, 1]; // Out-Expo fluid easing

  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
        delayChildren: shouldReduceMotion ? 0 : 0.04,
      },
    },
  };

  const navItemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: SMOOTH_EASE,
      },
    },
  };

  const footerVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.2,
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: SMOOTH_EASE,
      },
    },
  };

  return (
    <div
      className="offcanvas-lg offcanvas-start sidebar_box"
      tabIndex="-1"
      id="sidebarCollapse"
      data-bs-backdrop="true"
    >
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <Link to="/dashboard" onClick={closeSidebar}>
          <img src={binaxpay} alt="BinaXpay Logo" className="sidebar-logo" />
        </Link>
      </div>

      {/* Sidebar Navigation */}
      <div className="sidebar-nav-container">
        <motion.ul
          className="nav flex-column"
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Dashboard */}
          <motion.li className="nav-item mb-1" variants={navItemVariants}>
            <Link
              className={`sidebar-nav-link ${isCurrent("/dashboard") ? "active" : ""}`}
              to="/dashboard"
              onClick={closeSidebar}
            >
              <div className="d-flex align-items-center gap-2">
                <FaTachometerAlt className="sidebar-icon" />
                <span>Dashboard</span>
              </div>
            </Link>
          </motion.li>

          {/* Transactions Group */}
          <motion.li className="nav-item mb-1" variants={navItemVariants}>
            <button
              className={`sidebar-dropdown-btn ${["/deposit_transactions", "/margin_transactions", "/payout_transactions"].includes(location.pathname)
                  ? "group-active"
                  : ""
                }`}
              onClick={() => toggleDropdown("transactions")}
            >
              <div className="d-flex align-items-center gap-2">
                <FaExchangeAlt className="sidebar-icon" />
                <span>Transactions</span>
              </div>
              <FaChevronDown
                className={`chevron-icon ${openDropdown === "transactions" ? "rotated" : ""}`}
              />
            </button>
            <div ref={transactionsRef} className="sidebar-submenu">
              <Link
                className={`submenu-link ${isCurrent("/deposit_transactions") ? "active" : ""}`}
                to="/deposit_transactions"
                onClick={closeSidebar}
              >
                <FaArrowDown size={13} />
                <span>Deposit</span>
              </Link>
              <Link
                className={`submenu-link ${isCurrent("/margin_transactions") ? "active" : ""}`}
                to="/margin_transactions"
                onClick={closeSidebar}
              >
                <FaChartLine size={13} />
                <span>Margin</span>
              </Link>
              <Link
                className={`submenu-link ${isCurrent("/payout_transactions") ? "active" : ""}`}
                to="/payout_transactions"
                onClick={closeSidebar}
              >
                <FaWallet size={13} />
                <span>Payout</span>
              </Link>
            </div>
          </motion.li>

          {/* Withdraw Group */}
          <motion.li className="nav-item mb-1" variants={navItemVariants}>
            <button
              className={`sidebar-dropdown-btn ${["/withdraw", "/withdraw_history"].includes(location.pathname) ? "group-active" : ""
                }`}
              onClick={() => toggleDropdown("withdraw")}
            >
              <div className="d-flex align-items-center gap-2">
                <FaPaperPlane className="sidebar-icon" />
                <span>Withdraw</span>
              </div>
              <FaChevronDown
                className={`chevron-icon ${openDropdown === "withdraw" ? "rotated" : ""}`}
              />
            </button>
            <div ref={withdrawRef} className="sidebar-submenu">
              <Link
                className={`submenu-link ${isCurrent("/withdraw") ? "active" : ""}`}
                to="/withdraw"
                onClick={closeSidebar}
              >
                <FaPaperPlane size={13} />
                <span>Submit Withdraw</span>
              </Link>
              <Link
                className={`submenu-link ${isCurrent("/withdraw_history") ? "active" : ""}`}
                to="/withdraw_history"
                onClick={closeSidebar}
              >
                <FaHistory size={13} />
                <span>Withdraw History</span>
              </Link>
            </div>
          </motion.li>

          {/* Settings Group */}
          <motion.li className="nav-item mb-1" variants={navItemVariants}>
            <button
              className={`sidebar-dropdown-btn ${["/whitelist_ip", "/api_keys", "/profile", "/self_addresses"].includes(location.pathname)
                  ? "group-active"
                  : ""
                }`}
              onClick={() => toggleDropdown("settings")}
            >
              <div className="d-flex align-items-center gap-2">
                <FaCog className="sidebar-icon" />
                <span>Settings</span>
              </div>
              <FaChevronDown
                className={`chevron-icon ${openDropdown === "settings" ? "rotated" : ""}`}
              />
            </button>
            <div ref={settingsRef} className="sidebar-submenu">
              <Link
                className={`submenu-link ${isCurrent("/whitelist_ip") ? "active" : ""}`}
                to="/whitelist_ip"
                onClick={closeSidebar}
              >
                <FaNetworkWired size={13} />
                <span>IP Management</span>
              </Link>
              <Link
                className={`submenu-link ${isCurrent("/api_keys") ? "active" : ""}`}
                to="/api_keys"
                onClick={closeSidebar}
              >
                <FaKey size={13} />
                <span>Api Keys</span>
              </Link>
              <Link
                className={`submenu-link ${isCurrent("/profile") ? "active" : ""}`}
                to="/profile"
                onClick={closeSidebar}
              >
                <FaUser size={13} />
                <span>Profile</span>
              </Link>
              <Link
                className={`submenu-link ${isCurrent("/self_addresses") ? "active" : ""}`}
                to="/self_addresses"
                onClick={closeSidebar}
              >
                <FaAddressBook size={13} />
                <span>Self Address</span>
              </Link>
            </div>
          </motion.li>

          {/* More Group */}
          <motion.li className="nav-item mb-1" variants={navItemVariants}>
            <button
              className={`sidebar-dropdown-btn ${["/supported_coins", "/fees", "/docs", "/blog"].includes(location.pathname)
                  ? "group-active"
                  : ""
                }`}
              onClick={() => toggleDropdown("more")}
            >
              <div className="d-flex align-items-center gap-2">
                <FaEllipsisH className="sidebar-icon" />
                <span>More</span>
              </div>
              <FaChevronDown
                className={`chevron-icon ${openDropdown === "more" ? "rotated" : ""}`}
              />
            </button>
            <div ref={moreRef} className="sidebar-submenu">
              <Link
                className={`submenu-link ${isCurrent("/supported_coins") ? "active" : ""}`}
                to="#"
                onClick={closeSidebar}
              >
                <FaCoins size={13} />
                <span>Supported Coins</span>
              </Link>
              <Link
                className={`submenu-link ${isCurrent("/fees") ? "active" : ""}`}
                to="#"
                onClick={closeSidebar}
              >
                <FaPercentage size={13} />
                <span>Fees</span>
              </Link>
              <Link
                className={`submenu-link ${isCurrent("/docs") ? "active" : ""}`}
                to="#"
                onClick={closeSidebar}
              >
                <FaBookOpen size={13} />
                <span>Docs</span>
              </Link>
              <Link
                className={`submenu-link ${isCurrent("/blog") ? "active" : ""}`}
                to="#"
                onClick={closeSidebar}
              >
                <FaNewspaper size={13} />
                <span>Blog</span>
              </Link>
            </div>
          </motion.li>
        </motion.ul>
      </div>

      {/* Sidebar Footer: User Info + Logout */}
      <motion.div
        className="sidebar-footer"
        variants={footerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="sidebar-user-card">
          <div className="user-avatar-badge">
            {(user?.name || user?.userId || "U").charAt(0).toUpperCase()}
          </div>
          <div className="user-info-text">
            <p className="user-name">{user?.name || "Merchant User"}</p>
            <p className="user-id">{user?.userId ? `ID: ${user.userId}` : "Logged In"}</p>
          </div>
        </div>
        <button className="sidebar-logout-btn" onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </motion.div>
    </div>
  );
};

export default Sidebar;
