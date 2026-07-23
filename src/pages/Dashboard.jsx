import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postData } from "../api/protectedApi";
import { useAuth } from "../context/AuthContext";
import moment from "moment";
import styles from "./css/Dashboard.module.css";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [dashboardData, setDashboardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const totalPages = Math.ceil(transactions.length / limit) || 1;
  const paginatedTransactions = transactions.slice((currentPage - 1) * limit, currentPage * limit);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    postData("/user/latest_transactions", {})
      .then((res) => {
        if (res?.data?.data) {
          setTransactions(res.data.data);
        }
      })
      .catch((err) => console.error(err));
    postData("/user/wallet_sum", {})
      .then((res) => {
        setDashboardData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("isAuthenticated");
    logout();
    setTimeout(() => {
      navigate("/signin");
    }, 1000);
  };

  const getCurrencyColor = (token) => {
    switch (token?.toUpperCase()) {
      case "USDT":
        return styles.badgeUsdt;
      case "BTC":
        return styles.badgeBtc;
      case "ETH":
        return styles.badgeEth;
      case "USD":
        return styles.badgeUsd;
      default:
        return styles.badgeDefault;
    }
  };

  const getStatusBadge = (status) => {
    switch ((status || "").toLowerCase()) {
      case "completed":
        return styles.statusCompleted;
      case "pending":
        return styles.statusPending;
      case "failed":
        return styles.statusFailed;
      default:
        return styles.statusSecondary;
    }
  };
 function formatAmount(amount) {
    return parseFloat(amount).toFixed(3);
  }
  return (
    <div className={styles.dashboardContainer}>
      {/* Header */}
      <div className={styles.dashboardHeader}>
        <h2 className={styles.dashboardTitle}>Dashboard Overview</h2>
        <p className={styles.dashboardSubtitle}>Welcome back! Manage your crypto gateway transactions and balance.</p>
      </div>

      {/* Dashboard Cards Row */}
      <div className="row g-2 mb-3">
        {/* Card 1: Total Balance */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.dashboardStatCard}>
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <div className={styles.statLabel}>Total Balance</div>
                <div className={styles.statValue}>${ formatAmount(dashboardData?.walletBalance) ?? 0}</div>
                <div className={`${styles.statTrend} ${styles.statTrendSuccess}`}>
                  <i className="fas fa-arrow-up me-1"></i> Live Wallet Sync
                </div>
              </div>
              <div className={styles.statIconBadge}>
                <i className="fas fa-wallet"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Tx Count */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.dashboardStatCard}>
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <div className={styles.statLabel}>Tx Count</div>
                <div className={styles.statValue}>{dashboardData?.depositCount ?? 0}</div>
                <div className={`${styles.statTrend} ${styles.statTrendNeutral}`}>
                  <i className="fas fa-sync-alt me-1"></i> Total Processed
                </div>
              </div>
              <div className={styles.statIconBadge}>
                <i className="fas fa-exchange-alt"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Deposited Amount */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.dashboardStatCard}>
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <div className={styles.statLabel}>Deposited Amount</div>
                <div className={styles.statValue}>${formatAmount(dashboardData?.totalDeposit) ?? 0}</div>
                <div className={`${styles.statTrend} ${styles.statTrendSuccess}`}>
                  <i className="fas fa-arrow-up me-1"></i> Verified Total
                </div>
              </div>
              <div className={styles.statIconBadge}>
                <i className="fas fa-arrow-down"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Gateway Status */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.dashboardStatCard}>
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <div className={styles.statLabel}>Gateway Status</div>
                <div className={styles.statValue} style={{ fontSize: "1.35rem" }}>Active</div>
                <div className={`${styles.statTrend} ${styles.statTrendSuccess}`}>
                  <i className="fas fa-shield-alt me-1"></i> 100% Uptime
                </div>
              </div>
              <div className={styles.statIconBadge}>
                <i className="fas fa-check-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout: Transactions Table (65%) + Wealth Summary Card (35%) */}
      <div className="row g-4">
        {/* Left Column: Recent Transactions Table */}
        <div className="col-12 col-lg-8">
          <div className={styles.tableCard}>
            <div className={styles.tableCardHeader}>
              <div>
                <h5 className={styles.tableCardTitle}>Recent Transactions</h5>
                <p className={styles.tableCardSubtitle}>Real-time payment gateway ledger</p>
              </div>
              <Link to="/deposit" className={styles.btnViewAll}>View All</Link>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className={`${styles.customTable} text-center align-middle`}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Currency</th>
                      <th>From</th>
                      <th>Hash</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedTransactions.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center py-4" style={{ color: "#A3A3A3" }}>
                          No Transactions Found.
                        </td>
                      </tr>
                    ) : (
                      paginatedTransactions.map((trx, index) => (
                        <tr key={index}>
                          <td className="text-nowrap">{index + (currentPage - 1) * limit + 1}</td>

                          <td className="text-nowrap" style={{ color: "#A3A3A3" }}>
                            {moment(trx.createdAt).format("DD-MM-YYYY hh:mm A")}
                          </td>

                          <td className="text-nowrap font-weight-bold">
                            {trx.type || "Deposit"}
                          </td>

                          <td className="text-nowrap">
                            <span className={`${styles.badgeCustom} ${getCurrencyColor(trx.tokenName)}`}>
                              {parseFloat(trx.amount).toFixed(4)} {trx.tokenName || ""}
                            </span>
                          </td>

                          <td className="text-nowrap">
                            <a
                              href={`https://bscscan.com/address/${trx.from}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.hashLink}
                            >
                              {trx.from ? `${trx.from.slice(0, 8)}...` : "N/A"}
                            </a>
                          </td>

                          <td className="text-nowrap">
                            <a
                              href={`https://bscscan.com/tx/${trx.transactionHash}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.hashLink}
                            >
                              {trx.transactionHash ? `${trx.transactionHash.slice(0, 8)}...` : "N/A"}
                            </a>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className={styles.tableCardFooter}>
                <div className={styles.paginationInfo}>
                  Showing <span>{transactions.length > 0 ? (currentPage - 1) * limit + 1 : 0}</span> to{" "}
                  <span>{Math.min(currentPage * limit, transactions.length)}</span> of{" "}
                  <span>{transactions.length}</span> entries
                </div>
                <div className={styles.paginationControls}>
                  <button
                    className={`${styles.pageBtn} ${currentPage === 1 ? styles.disabled : ""}`}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <i className="fas fa-chevron-left me-1"></i> Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`${styles.pageNumberBtn} ${currentPage === page ? styles.activePage : ""}`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    className={`${styles.pageBtn} ${currentPage === totalPages ? styles.disabled : ""}`}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next <i className="fas fa-chevron-right ms-1"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Wealth Panel & System Highlights */}
        <div className="col-12 col-lg-4">
          {/* My Card / Wallet Panel */}
          <div className={styles.myCardPanel}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className={styles.myCardChip}></div>
              <span className={`${styles.badgeCustom} ${styles.badgeUsdt}`}>BINAXPAY VIP</span>
            </div>
            <div className={styles.myCardBalanceLabel}>Available Balance</div>
            <div className={styles.myCardBalance}>${formatAmount(dashboardData?.walletBalance) ?? "0.00"}</div>

            <div className="d-flex justify-content-between align-items-center mb-3" style={{ fontSize: "0.825rem", color: "#A3A3A3" }}>
              <span>Total Deposits</span>
              <span style={{ color: "#FFFFFF", fontWeight: "700" }}>${formatAmount(dashboardData?.totalDeposit) ?? "0.00"}</span>
            </div>

            <div className={styles.quickActionsRow}>
              <Link to="/deposit" className={styles.btnActionPrimary}>
                <i className="fas fa-plus-circle"></i> Deposit
              </Link>
              <Link to="/transactions" className={styles.btnActionOutline}>
                <i className="fas fa-history"></i> History
              </Link>
            </div>
          </div>

          {/* System Highlights Card */}
          <div className={styles.activityCard}>
            <h6 className="text-white font-weight-bold mb-3" style={{ fontSize: "0.95rem" }}>
              System Highlights
            </h6>

            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>
                <i className="fas fa-bolt"></i>
              </div>
              <div>
                <div style={{ fontSize: "0.85rem", color: "#FFFFFF", fontWeight: "600" }}>
                  Instant Settlement
                </div>
                <div style={{ fontSize: "0.78rem", color: "#A3A3A3" }}>
                  Near real-time node sync
                </div>
              </div>
            </div>

            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <div>
                <div style={{ fontSize: "0.85rem", color: "#FFFFFF", fontWeight: "600" }}>
                  Security Engine
                </div>
                <div style={{ fontSize: "0.78rem", color: "#A3A3A3" }}>
                  Encrypted BSC Smart Contract
                </div>
              </div>
            </div>

            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>
                <i className="fas fa-globe"></i>
              </div>
              <div>
                <div style={{ fontSize: "0.85rem", color: "#FFFFFF", fontWeight: "600" }}>
                  Global Network
                </div>
                <div style={{ fontSize: "0.78rem", color: "#A3A3A3" }}>
                  Multi-currency crypto gateway
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
