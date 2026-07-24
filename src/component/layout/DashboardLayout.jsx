import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "./Sidebar";
import "./DashboardLayout.css";
import Offcanvas from "bootstrap/js/dist/offcanvas";
import binaxpay from "../../assets/Image/binaxpay.png";
import HamburgerMenu from "../ui/HamburgerMenu";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let user = {};
  try {
    user = JSON.parse(localStorage.getItem("user")) || {};
  } catch (e) {
    user = {};
  }

  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const el = document.getElementById("sidebarCollapse");
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

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("isAuthenticated");
    logout();
    setTimeout(() => navigate("/signin"), 300); // reduced from 500ms
  };

  const handleToggleSidebar = (e) => {
    const checked = e.target.checked;
    setIsSidebarOpen(checked);
    const el = document.getElementById("sidebarCollapse");
    if (el) {
      const instance = Offcanvas.getOrCreateInstance(el, { backdrop: true });
      if (checked) {
        instance.show();
      } else {
        instance.hide();
      }
    }
  };

  return (
    <div className="dashboard-layout-wrapper">
      {/* Mobile Top Navbar (< 992px) */}
      <header className="mobile-top-navbar d-lg-none">
        <Link to="/dashboard" className="mobile-logo-link">
          <img src={binaxpay} alt="BinaXpay Logo" className="mobile-navbar-logo" />
        </Link>
        <div className="mobile-hamburger-wrapper">
          <HamburgerMenu
            checked={isSidebarOpen}
            onChange={handleToggleSidebar}
            strokeColor="#6FE6B8"
            size="2.2em"
          />
        </div>
      </header>

      {/* Sidebar Component */}
      <Sidebar user={user} handleLogout={handleLogout} />

      {/* Main Content Area */}
      <main className="main-content-layout">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;