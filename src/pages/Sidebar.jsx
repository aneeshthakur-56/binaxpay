import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "bootstrap/js/dist/offcanvas";

// ✅ Replace with your actual logo image path
import binaxpay from "../assets/Image/binaxpay.png";
import { FaAddressBook, FaArrowDown, FaChartLine, FaHistory, FaKey, FaNetworkWired, FaPaperPlane, FaUser, FaWallet, FaMoneyBillWave } from "react-icons/fa";

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
          background: "linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(18, 53, 46, 0.95) 50%, rgba(10, 10, 10, 0.95) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRight: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
          width: "260px",
          padding: "20px 10px",
          color: "#fff",
        }}
      >

        <div className="text-center mb-4">
          <img src={binaxpay} alt="Bitsfar Logo" style={{ width: "150px" }} />
        </div>

        <ul className="nav flex-column">
          {/* Dashboard */}
          <li className="nav-item mb-1">
            <Link
              className="nav-link d-flex align-items-center gap-2"
              to="/dashboard"
              onClick={closeSidebar}
              style={{
                backgroundColor: "#225750",
                border: "1px solid #2A2A2A",
                color: "#fff",
                borderRadius: "10px",
                padding: "10px 14px",
                transition: "all 0.3s ease",
              }}
            >
              📊 Dashboard
            </Link>
          </li>

          {/* Transactions Dropdown */}
          <li className="nav-item mb-1">
            <button
              className="nav-link d-flex justify-content-between align-items-center w-100 text-start btn btn-link text-white"
              onClick={() => toggleDropdown("transactions")}
              style={{
                backgroundColor: "#225750",
                border: "1px solid #2A2A2A",
                borderRadius: "10px",
                padding: "10px 14px",
                fontWeight: 500,
                transition: "all 0.3s ease",
              }}
            >
              <span className="d-flex align-items-center gap-2 ">
                🔄 Transactions
              </span>
              <span>▼</span>
            </button>
            <div
              ref={transactionsRef}
              className="overflow-hidden "
              style={{
                backgroundColor: "#163f39",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                maxHeight: "0px",
                transition: "max-height 0.4s ease",
                paddingRight: "15px",
                textAlign: "center",
                marginLeft: "15px",
                marginTop: "4px",
              }}
            >
              <Link
                className="text-white d-flex align-items-center gap-3 py-1 justify-content-center "
                to="/deposit_transactions"
                onClick={closeSidebar}
              >
                <FaArrowDown size={14} />
                Deposit
              </Link>
              <Link
                className="text-white d-flex align-items-center gap-3 py-1 justify-content-center"
                to="/margin_transactions"
                onClick={closeSidebar}
              >
                <FaChartLine size={14} />
                Margin
              </Link>
              <Link
                className="text-white d-flex align-items-center py-1 gap-3 justify-content-center "
                to="payout_transactions"
                onClick={closeSidebar}
              >
                <FaWallet size={14} />
                Payout
              </Link>
            </div>
          </li>

          <li className="nav-item mb-1">
            <button
              className="nav-link d-flex justify-content-between align-items-center w-100 text-start btn btn-link text-white"
              onClick={() => toggleDropdown("settings")}
              style={{
                backgroundColor: "#225750",
                border: "1px solid #2A2A2A",
                borderRadius: "10px",
                padding: "10px 14px",
                fontWeight: 500,
                transition: "all 0.3s ease",
              }}
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
                backgroundColor: "#163f39",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                maxHeight: "0px",
                transition: "max-height 0.4s ease",
                paddingLeft: "60px",
                textAlign: "center",
                marginLeft: "15px",
                marginTop: "4px",
              }}
            >
              <Link
                className="text-white d-block py-1 d-flex gap-3 align-items-center text-start"
                to="/whitelist_ip"
                onClick={closeSidebar}
              >
                <FaNetworkWired size={14} />
                IP Management
              </Link>
              <Link
                className="text-white d-block py-1 d-flex gap-3 align-items-center text-start"
                to="/api_keys"
                onClick={closeSidebar}
              >
                <FaKey size={14} />
                Api Keys
              </Link>
              <Link
                className="text-white d-block py-1 d-flex gap-3 align-items-center text-start"
                to="/profile"
                onClick={closeSidebar}
              >
                <FaUser size={14} />
                Profile
              </Link>
              <Link
                className="text-white d-block py-1 d-flex gap-3 align-items-center text-start"
                to="/self_addresses"
                onClick={closeSidebar}
              >
                <FaAddressBook size={14} />
                Self Address
              </Link>
            </div>
          </li>

          <li className="nav-item mb-1">
            <button
              className="nav-link d-flex justify-content-between align-items-center w-100 text-start btn btn-link text-white"
              onClick={() => toggleDropdown("support")}
              style={{
                backgroundColor: "#225750",
                border: "1px solid #2A2A2A",
                borderRadius: "10px",
                padding: "10px 14px",
                fontWeight: 500,
                transition: "all 0.3s ease",
              }}
            >
              <span className="d-flex align-items-center gap-2">🔄 Withdraw</span>
              <span>▼</span>
            </button>
            <div
              ref={supportRef}
              className="overflow-hidden"
              style={{
                backgroundColor: "#163f39",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                maxHeight: "0px",
                transition: "max-height 0.4s ease",
                paddingLeft: "44px",
                textAlign: "center",
                marginLeft: "15px",
                marginTop: "4px",
              }}
            >
              <Link
                className="text-white d-block py-1 gap-3 d-flex align-items-center justify-content-center"
                to="withdraw"
                onClick={closeSidebar}
              >
                <FaPaperPlane size={14} />
                Submit Withdraw
              </Link>
              <Link
                className="text-white d-block py-1 gap-3 d-flex align-items-center justify-content-center"
                to="withdraw_history"
                onClick={closeSidebar}
              >
                <FaHistory size={14} />
                Withdraw History
              </Link>
            </div>
          </li>

          {/* ✅ More Dropdown */}
          <li className="nav-item mb-1">
            <button
              className="nav-link d-flex justify-content-between align-items-center w-100 text-start btn btn-link text-white"
              onClick={() => toggleDropdown("more")}
              style={{
                backgroundColor: "#225750",
                border: "1px solid #2A2A2A",
                borderRadius: "10px",
                padding: "10px 14px",
                fontWeight: 500,
                transition: "all 0.3s ease",
              }}
            >
              <span className="d-flex align-items-center gap-2">⋯ More</span>
              <span>▼</span>
            </button>
            <div
              ref={moreRef}
              className="overflow-hidden"
              style={{
                backgroundColor: "#163f39",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
                maxHeight: "0px",
                transition: "max-height 0.4s ease",
                paddingRight: "15px",
                paddingLeft: "48px",
                textAlign: "center",
                marginLeft: "15px",
                marginTop: "4px",
              }}
            >
              <Link
                className="text-white d-flex align-items-center py-1 px-3"
                to="#"
                onClick={closeSidebar}
              >
                Supported Coins
              </Link>

              <Link
                className="text-white d-flex align-items-center py-1 px-3"
                to="#"
                onClick={closeSidebar}
              >
                Fees
              </Link>

              <Link
                className="text-white d-flex align-items-center py-1 px-3"
                to="#"
                onClick={closeSidebar}
              >
                Docs
              </Link>

              <Link
                className="text-white d-flex align-items-center py-1 px-3"
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
