import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import bitsfar from "../assets/bitsfar.png";

import bitsfar from '../assets/Image/bitsfar.png';

const Sidebar = () => {
  const offcanvasRef = useRef(null);
  let offcanvasInstance = useRef(null);

  useEffect(() => {
    // Initialize Bootstrap Offcanvas only if the element exists
    if (offcanvasRef.current) {
      offcanvasInstance.current = new window.bootstrap.Offcanvas(offcanvasRef.current);
    }

    return () => {
      // Optional cleanup if needed
      offcanvasInstance.current = null;
    };
  }, []);

  // Function to close the sidebar
  const closeSidebar = () => {
    if (offcanvasInstance.current) {
      offcanvasInstance.current.hide();
    }
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        className="btn btn-primary d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarCollapse"
      >
        <i className="fas fa-bars"></i> Menu
      </button>

      {/* Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="sidebarCollapse"
        ref={offcanvasRef}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="text-center mb-4">
            <img src={bitsfar} alt="Bitsfar Logo" className="img-fluid logo" />
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="#dashboard"
                data-bs-toggle="tab"
                onClick={closeSidebar}
              >
                <i className="fas fa-tachometer-alt"></i> Dashboard
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="transactionDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-exchange-alt"></i> Transactions
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="#deposit"
                    data-bs-toggle="tab"
                    onClick={closeSidebar}
                  >
                    Deposit
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="#margin"
                    data-bs-toggle="tab"
                    onClick={closeSidebar}
                  >
                    Margin
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="#payout"
                    data-bs-toggle="tab"
                    onClick={closeSidebar}
                  >
                    Payout
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="supportDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-headset"></i> Support
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="#create-ticket"
                    data-bs-toggle="tab"
                    onClick={closeSidebar}
                  >
                    Create Ticket
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="#inbox"
                    data-bs-toggle="tab"
                    onClick={closeSidebar}
                  >
                    Inbox
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="#outbox"
                    data-bs-toggle="tab"
                    onClick={closeSidebar}
                  >
                    Outbox
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}


export default Sidebar;