import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bitsfar from "../assets/Image/bitsfar.png";
import { Link } from "react-router-dom";

const navItems = [
  "Home",
  "Features",
  "Benefits",
  "Pricing",
  "Testimonials",
  "Contact",
];

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom px-3 py-3">
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center fw-bold"
            href="#"
          >
            <img
              src={bitsfar}
              alt="logo"
              height="40"
              width="auto"
              className="me-2"
            />
          </a>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto text-center">
              {navItems.map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="navbar-buttons d-lg-flex d-block text-center mt-3 mt-lg-0">
              <Link
                to="/Signup"
                className="btn btn-outline-info rounded-pill fw-semibold d-inline-flex align-items-center justify-content-center px-3 py-2 me-lg-2 mb-2 mb-lg-0"
              >
                <i className="mdi mdi-account-plus"></i>
                <span className="ms-2">Sign Up</span>
              </Link>

              <Link
                to="/Signin"
                className="btn btn-signin rounded-pill fw-semibold d-inline-flex align-items-center justify-content-center px-3 py-2"
              >
                <i className="mdi mdi-login"></i>
                <span className="ms-2">Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

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
          color: #00ffff !important;
          border: 2px solid #00ffff !important;
          background-color: transparent !important;
        }

        .btn-outline-info:hover {
          background-color: #00ffff !important;
          color: #000 !important;
        }

        .btn-signin {
          background-color: #04009a !important;
          color: white !important;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .btn-signin:hover {
         color: #00ffff !important;
          border: 2px solid #00ffff !important;
          background-color: transparent !important;
        }

        .btn i {
          font-size: 18px;
          margin: 0;
          vertical-align: middle;
        }

        .nav-link {
          font-weight: 500;
          margin: 0 10px;
          position: relative;
          font-size: 1rem;
          color: white !important;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          background-color: #00f0ff;
          left: 0;
          bottom: 0;
          transition: width 0.3s ease-in-out;
        }

        .nav-link:hover {
          color: white !important;
        }

        .nav-link:hover::after {
          width: 100%;
          background-color: #00f0ff;
        }

        .navbar-buttons {
          gap: 10px;
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%280,0,0,0.8%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
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
