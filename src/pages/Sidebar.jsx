import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "bootstrap/js/dist/offcanvas";

// ✅ Replace with your actual logo image path
import bitsfar from "../assets/Image/bitsfar.png";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const transactionsRef = useRef(null);
  const supportRef = useRef(null);
  const moreRef = useRef(null);
  const settingsRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeSidebar = () => {
    const sidebarElement = document.getElementById("sidebarCollapse");
    let instance = Offcanvas.getInstance(sidebarElement);

    if (!instance) {
      instance = new Offcanvas(sidebarElement);
    }

    instance.hide(); // ✅ now it works safely
  };

  useEffect(() => {
    const setMaxHeight = (ref, isOpen) => {
      if (ref.current) {
        ref.current.style.maxHeight = isOpen
          ? ref.current.scrollHeight + "px"
          : "0px";
      }
    };

    setMaxHeight(transactionsRef, openDropdown === "transactions");
    setMaxHeight(supportRef, openDropdown === "support");
    setMaxHeight(moreRef, openDropdown === "more");
    setMaxHeight(settingsRef, openDropdown === "settings");
  }, [openDropdown]);

  return (
    <>
      {/* Sidebar */}
      <div
        className="offcanvas offcanvas-start sidebar_box"
        tabIndex="-1"
        id="sidebarCollapse"
        style={{
          backgroundColor: "#2e2e97",
          width: "260px",
          padding: "20px 10px",
          color: "#fff",
        }}
      >
        <div className="text-center mb-4">
          <img src={bitsfar} alt="Bitsfar Logo" style={{ width: "150px" }} />
        </div>

        <ul className="nav flex-column">
          {/* Dashboard */}
          <li className="nav-item mb-3">
            <Link
              className="nav-link d-flex align-items-center gap-2"
              to="/dashboard"
              onClick={closeSidebar}
              style={{
                backgroundColor: "#233b99",
                color: "#00E1FF",
                borderRadius: "10px",
                padding: "12px 16px",
              }}
            >
              📊 Dashboard
            </Link>
          </li>

          {/* Transactions Dropdown */}
          <li className="nav-item mb-2">
            <button
              className="nav-link d-flex justify-content-between align-items-center w-100 text-start btn btn-link text-white"
              onClick={() => toggleDropdown("transactions")}
              style={{ padding: "10px 15px", fontWeight: 500 }}
            >
              <span className="d-flex align-items-center gap-2">
                🔄 Transactions
              </span>
              <span>▼</span>
            </button>
            <div
              ref={transactionsRef}
              className="overflow-hidden"
              style={{
                backgroundColor: "#05005C",
                borderRadius: "8px",
                maxHeight: "0px",
                transition: "max-height 0.4s ease",
                paddingRight: "15px",
                textAlign: "center",
              }}
            >
              <Link
                className="text-white d-block py-1"
                to="/deposit_transactions"
                onClick={closeSidebar}
              >
                Deposit
              </Link>
              <Link
                className="text-white d-block py-1"
                to="/margin_transactions"
                onClick={closeSidebar}
              >
                Margin
              </Link>
              <Link
                className="text-white d-block py-1"
                to="payout_transactions"
                onClick={closeSidebar}
              >
                Payout
              </Link>
            </div>
          </li>

          <li className="nav-item mb-2">
            <button
              className="nav-link d-flex justify-content-between align-items-center w-100 text-start btn btn-link text-white"
              onClick={() => toggleDropdown("settings")}
              style={{ padding: "10px 15px", fontWeight: 500 }}
            >
              <span className="d-flex align-items-center gap-2">
                🔄 Settings
              </span>
              <span>▼</span>
            </button>
            <div
              ref={settingsRef}
              className="overflow-hidden"
              style={{
                backgroundColor: "#05005C",
                borderRadius: "8px",
                maxHeight: "0px",
                transition: "max-height 0.4s ease",
                paddingRight: "15px",
                textAlign: "center",
              }}
            >
              <Link
                className="text-white d-block py-1"
                to="/whitelist_ip"
                onClick={closeSidebar}
              >
                IP Management
              </Link>
              <Link
                className="text-white d-block py-1"
                to="/api_keys"
                onClick={closeSidebar}
              >
                Api Keys
              </Link>
              <Link
                className="text-white d-block py-1"
                to="/profile"
                onClick={closeSidebar}
              >
                Profile
              </Link>
              <Link
                className="text-white d-block py-1"
                to="/self_addresses"
                onClick={closeSidebar}
              >
                Self Address
              </Link>
            </div>
          </li>

          {/* Support Dropdown */}
          <li className="nav-item mb-2 d-none">
            <button
              className="nav-link d-flex justify-content-between align-items-center w-100 text-start btn btn-link text-white"
              onClick={() => toggleDropdown("support")}
              style={{ padding: "10px 15px", fontWeight: 500 }}
            >
              <span className="d-flex align-items-center gap-2">
                🎧 Support
              </span>
              <span>▼</span>
            </button>
            <div
              ref={supportRef}
              className="overflow-hidden"
              style={{
                backgroundColor: "#05005C",
                borderRadius: "8px",
                maxHeight: "0px",
                transition: "max-height 0.4s ease",
                paddingRight: "15px",
                textAlign: "center",
              }}
            >
              <Link
                className="text-white d-block py-1"
                to="#"
                onClick={closeSidebar}
              >
                Create Ticket
              </Link>
              <Link
                className="text-white d-block py-1"
                to="#"
                onClick={closeSidebar}
              >
                Inbox
              </Link>
              <Link
                className="text-white d-block py-1"
                to="#"
                onClick={closeSidebar}
              >
                Outbox
              </Link>
            </div>
          </li>
          <li className="nav-item mb-2">
            <button
              className="nav-link d-flex justify-content-between align-items-center w-100 text-start btn btn-link text-white"
              onClick={() => toggleDropdown("support")}
              style={{ padding: "10px 15px", fontWeight: 500 }}
            >
              <span className="d-flex align-items-center gap-2">Withdraw</span>
              <span>▼</span>
            </button>
            <div
              ref={supportRef}
              className="overflow-hidden"
              style={{
                backgroundColor: "#05005C",
                borderRadius: "8px",
                maxHeight: "0px",
                transition: "max-height 0.4s ease",
                paddingRight: "15px",
                textAlign: "center",
              }}
            >
              <Link
                className="text-white d-block py-1"
                to="withdraw"
                onClick={closeSidebar}
              >
                Submit Withdraw
              </Link>
              <Link
                className="text-white d-block py-1"
                to="withdraw_history"
                onClick={closeSidebar}
              >
                Withdraw History
              </Link>
            </div>
          </li>

          {/* ✅ More Dropdown */}
          <li className="nav-item mb-2">
            <button
              className="nav-link d-flex justify-content-between align-items-center w-100 text-start btn btn-link text-white"
              onClick={() => toggleDropdown("more")}
              style={{ padding: "10px 15px", fontWeight: 500 }}
            >
              <span className="d-flex align-items-center gap-2">⋯ More</span>
              <span>▼</span>
            </button>
            <div
              ref={moreRef}
              className="overflow-hidden"
              style={{
                backgroundColor: "#05005C",
                borderRadius: "8px",
                maxHeight: "0px",
                transition: "max-height 0.4s ease",
                paddingRight: "15px",
                textAlign: "center",
              }}
            >
              <Link
                className="text-white d-block py-1"
                to="#"
                onClick={closeSidebar}
              >
                Supported Coins
              </Link>
              <Link
                className="text-white d-block py-1"
                to="#"
                onClick={closeSidebar}
              >
                Fees
              </Link>
              <Link
                className="text-white d-block py-1"
                to="#"
                onClick={closeSidebar}
              >
                Docs
              </Link>
              <Link
                className="text-white d-block py-1"
                to="#"
                onClick={closeSidebar}
              >
                Blog
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
