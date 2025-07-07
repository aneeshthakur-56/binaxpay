import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./../context/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./Sidebar";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  let user = JSON.parse(localStorage.getItem('user')) 
  const [collapsed, setCollapsed] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleMobileView = () => {
      const textEls = document.querySelectorAll(".nav-text");
      textEls.forEach((text) => {
        text.style.opacity = "1";
      });
    };

    window.addEventListener("load", handleMobileView);
    window.addEventListener("resize", handleMobileView);

    return () => {
      window.removeEventListener("load", handleMobileView);
      window.removeEventListener("resize", handleMobileView);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("isAuthenticated");
    logout();
    setTimeout(() => navigate("/signin"), 500);
  };

  return (
    <div className="wrapper d-sm-flex bg-gray">
      <Sidebar />
      <div className="main-content flex-grow-1">
        {/* ✅ Top Navbar */}
        <nav className="navbar navbar-expand-lg mobile-navbar bg-primary px-3">
          <div className="container-fluid">
            {/* Sidebar toggle for mobile */}
            <button
              className="btn btn-sm sidebar-toggle d-md-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebarCollapse"
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* ✅ Username + Logout button */}
            <div className="d-flex align-items-center ms-auto gap-3">
              <span className="text-white fw-semibold">{user.userId} ({user.name})</span>
              <button className="btn btn-sm btn-danger" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt me-1"></i> Logout
              </button>
            </div>
          </div>
        </nav>

        {/* ✅ Main Content Area */}
        <main className="flex-grow-1 bg-light overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
