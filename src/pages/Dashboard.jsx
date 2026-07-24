import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postData } from "../api/protectedApi";
import { useAuth } from "../context/AuthContext";
import moment from "moment";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import styles from "./css/Dashboard.module.css";
import { dummyDashboardData, dummyTransactions } from "../data/dummyData";

const Dashboard = () => {
  const [transactions, setTransactions] = useState(dummyTransactions);
  const [dashboardData, setDashboardData] = useState(dummyDashboardData);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedText, setCopiedText] = useState(null);

  // Exactly 5 transactions shown on Dashboard for a clean single-page layout
  const displayedTransactions = transactions.slice(0, 5);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsLoading(true);
    let p1 = postData("/user/latest_transactions", {})
      .then((res) => {
        if (res?.data?.data && res.data.data.length > 0) {
          setTransactions(res.data.data);
        } else {
          setTransactions(dummyTransactions);
        }
      })
      .catch((err) => {
        console.error(err);
        setTransactions(dummyTransactions);
      });

    let p2 = postData("/user/wallet_sum", {})
      .then((res) => {
        if (res?.data && Object.keys(res.data).length > 0) {
          setDashboardData(res.data);
        } else {
          setDashboardData(dummyDashboardData);
        }
      })
      .catch((err) => {
        console.error(err);
        setDashboardData(dummyDashboardData);
      });

    Promise.allSettled([p1, p2]).finally(() => {
      // Short delay (250ms) to ensure page data & DOM settle before playing entrance animation
      setTimeout(() => setIsLoading(false), 250);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("isAuthenticated");
    logout();
    setTimeout(() => {
      navigate("/signin");
    }, 800);
  };

  const handleCopy = (text, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1500);
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

  function formatAmount(amount) {
    if (amount === undefined || amount === null || isNaN(amount)) return "0.00";
    return Number(amount).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function formatCryptoAmount(amount) {
    if (amount === undefined || amount === null || isNaN(amount)) return "0.0000";
    return Number(amount).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    });
  }

  // ─── Smooth & Elegant Text Animation Variants (Triggers after page data loads) ───
  const SMOOTH_EASE = [0.22, 1, 0.36, 1]; // Smooth out-cubic deceleration

  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const textFadeUpVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: SMOOTH_EASE,
      },
    },
  };

  const statContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.06,
      },
    },
  };

  const statCardVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: SMOOTH_EASE,
      },
    },
  };

  const sectionLeftVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.22,
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: SMOOTH_EASE,
      },
    },
  };

  const sectionRightVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.3,
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: SMOOTH_EASE,
      },
    },
  };

  const tableBodyVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.04,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.15, ease: SMOOTH_EASE },
    },
  };

  const tableRowVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.35,
        ease: SMOOTH_EASE,
      },
    },
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Animated Header */}
      <motion.div
        className={styles.dashboardHeader}
        variants={headerContainerVariants}
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
      >
        <motion.h2 className={styles.dashboardTitle} variants={textFadeUpVariants}>
          Dashboard Overview
        </motion.h2>
        <motion.p className={styles.dashboardSubtitle} variants={textFadeUpVariants}>
          Welcome back! Manage your crypto gateway transactions and balance.
        </motion.p>
      </motion.div>

      {/* Stat Cards Row */}
      <motion.div
        className={`row g-3 ${styles.statRowWrapper}`}
        variants={statContainerVariants}
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
      >
        {/* Card 1: Total Balance */}
        <motion.div className="col-12 col-sm-6 col-lg-3" variants={statCardVariants}>
          <div className={styles.dashboardStatCard}>
            <div className={styles.statCardContent}>
              <div className={styles.statTextGroup}>
                <div className={styles.statLabel}>Total Balance</div>
                <motion.div className={styles.statValue} variants={textFadeUpVariants}>
                  ${formatAmount(dashboardData?.walletBalance)}
                </motion.div>
                <div className={`${styles.statTrend} ${styles.statTrendSuccess}`}>
                  <i className="fas fa-arrow-up me-1"></i> Live Wallet Sync
                </div>
              </div>
              <div className={styles.statIconBadge}>
                <i className="fas fa-wallet"></i>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Tx Count */}
        <motion.div className="col-12 col-sm-6 col-lg-3" variants={statCardVariants}>
          <div className={styles.dashboardStatCard}>
            <div className={styles.statCardContent}>
              <div className={styles.statTextGroup}>
                <div className={styles.statLabel}>Tx Count</div>
                <motion.div className={styles.statValue} variants={textFadeUpVariants}>
                  {dashboardData?.depositCount ?? 0}
                </motion.div>
                <div className={`${styles.statTrend} ${styles.statTrendNeutral}`}>
                  <i className="fas fa-sync-alt me-1"></i> Total Processed
                </div>
              </div>
              <div className={styles.statIconBadge}>
                <i className="fas fa-exchange-alt"></i>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Deposited Amount */}
        <motion.div className="col-12 col-sm-6 col-lg-3" variants={statCardVariants}>
          <div className={styles.dashboardStatCard}>
            <div className={styles.statCardContent}>
              <div className={styles.statTextGroup}>
                <div className={styles.statLabel}>Deposited Amount</div>
                <motion.div className={styles.statValue} variants={textFadeUpVariants}>
                  ${formatAmount(dashboardData?.totalDeposit)}
                </motion.div>
                <div className={`${styles.statTrend} ${styles.statTrendSuccess}`}>
                  <i className="fas fa-arrow-up me-1"></i> Verified Total
                </div>
              </div>
              <div className={styles.statIconBadge}>
                <i className="fas fa-arrow-down"></i>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Gateway Status */}
        <motion.div className="col-12 col-sm-6 col-lg-3" variants={statCardVariants}>
          <div className={styles.dashboardStatCard}>
            <div className={styles.statCardContent}>
              <div className={styles.statTextGroup}>
                <div className={styles.statLabel}>Gateway Status</div>
                <motion.div className={styles.statValue} style={{ fontSize: "1.35rem", display: "flex", alignItems: "center" }} variants={textFadeUpVariants}>
                  <span className={styles.statusDot}></span>
                  Active
                </motion.div>
                <div className={`${styles.statTrend} ${styles.statTrendSuccess}`}>
                  <i className="fas fa-shield-alt me-1"></i> 100% Uptime
                </div>
              </div>
              <div className={styles.statIconBadge}>
                <i className="fas fa-check-circle"></i>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content Layout: Transactions Table (65%) + Right Panel (35%) */}
      <div className="row g-3">
        {/* Left Column: Recent Transactions Table */}
        <motion.div
          className="col-12 col-lg-8"
          variants={sectionLeftVariants}
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
        >
          <div className={styles.tableCard}>
            <div className={styles.tableCardHeader}>
              <div>
                <motion.h5 className={styles.tableCardTitle} variants={textFadeUpVariants}>
                  Recent Transactions
                </motion.h5>
                <motion.p className={styles.tableCardSubtitle} variants={textFadeUpVariants}>
                  Real-time payment gateway ledger
                </motion.p>
              </div>
              <Link to="/deposit_transactions" className={styles.btnHeaderIcon} title="View All Transactions">
                <i className="fas fa-table"></i>
              </Link>
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

                  {isLoading ? (
                    <tbody>
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <tr key={idx}>
                          <td><span className={styles.skeletonBox} style={{ width: "24px" }}></span></td>
                          <td><span className={styles.skeletonBox} style={{ width: "110px" }}></span></td>
                          <td><span className={styles.skeletonBox} style={{ width: "60px" }}></span></td>
                          <td><span className={styles.skeletonBox} style={{ width: "95px", borderRadius: "9999px" }}></span></td>
                          <td><span className={styles.skeletonBox} style={{ width: "110px" }}></span></td>
                          <td><span className={styles.skeletonBox} style={{ width: "110px" }}></span></td>
                        </tr>
                      ))}
                    </tbody>
                  ) : displayedTransactions.length === 0 ? (
                    <tbody>
                      <tr>
                        <td colSpan="6" className="text-center py-4" style={{ color: "#A3A3A3" }}>
                          <i className="fas fa-inbox mb-2 d-block" style={{ fontSize: "1.8rem", opacity: 0.5 }}></i>
                          No Transactions Found.
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <AnimatePresence mode="wait">
                      <motion.tbody
                        variants={tableBodyVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        {displayedTransactions.map((trx, index) => {
                          const rowIndex = index + 1;
                          const fromAbbr = trx.from ? `${trx.from.slice(0, 8)}...${trx.from.slice(-4)}` : "N/A";
                          const hashAbbr = trx.transactionHash ? `${trx.transactionHash.slice(0, 8)}...${trx.transactionHash.slice(-4)}` : "N/A";

                          return (
                            <motion.tr
                              key={trx.id || index}
                              variants={tableRowVariants}
                            >
                              <td className="text-nowrap" style={{ fontWeight: "600", color: "#A3A3A3" }}>
                                {rowIndex}
                              </td>

                              <td className="text-nowrap" style={{ color: "#A3A3A3" }} title={moment(trx.createdAt).format("DD MMM YYYY, hh:mm A")}>
                                {moment(trx.createdAt).format("DD MMM YYYY")}
                              </td>

                              <td className="text-nowrap font-weight-bold">
                                <span style={{ color: "#FFFFFF", fontWeight: "600" }}>
                                  {trx.type || "Deposit"}
                                </span>
                              </td>

                              <td className="text-nowrap">
                                <span className={`${styles.badgeCustom} ${getCurrencyColor(trx.tokenName)}`}>
                                  {formatCryptoAmount(trx.amount)} {trx.tokenName || ""}
                                </span>
                              </td>

                              <td className="text-nowrap">
                                <div className={styles.addressCell}>
                                  <a
                                    href={`https://bscscan.com/address/${trx.from}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.fromLink}
                                    title={trx.from || "Wallet Address"}
                                  >
                                    {fromAbbr}
                                  </a>
                                  {trx.from && (
                                    <button
                                      type="button"
                                      className={styles.btnCopy}
                                      onClick={(e) => handleCopy(trx.from, e)}
                                      title="Copy full address"
                                    >
                                      <i className={`fas ${copiedText === trx.from ? "fa-check text-success" : "fa-copy"}`}></i>
                                    </button>
                                  )}
                                </div>
                              </td>

                              <td className="text-nowrap">
                                <div className={styles.addressCell}>
                                  <a
                                    href={`https://bscscan.com/tx/${trx.transactionHash}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.hashLink}
                                    title={trx.transactionHash || "Tx Hash"}
                                  >
                                    {hashAbbr}
                                  </a>
                                  {trx.transactionHash && (
                                    <button
                                      type="button"
                                      className={styles.btnCopy}
                                      onClick={(e) => handleCopy(trx.transactionHash, e)}
                                      title="Copy transaction hash"
                                    >
                                      <i className={`fas ${copiedText === trx.transactionHash ? "fa-check text-success" : "fa-copy"}`}></i>
                                    </button>
                                  )}
                                </div>
                              </td>
                            </motion.tr>
                          );
                        })}
                      </motion.tbody>
                    </AnimatePresence>
                  )}
                </table>
              </div>
            </div>

            {/* Table Footer with View All Link (No Pagination Controls) */}
            <div className={styles.tableCardFooter}>
              <div className={styles.paginationInfo}>
                Showing <span>{displayedTransactions.length}</span> of <span>{transactions.length}</span> recent entries
              </div>
              <Link to="/deposit_transactions" className={styles.btnFooterViewAll}>
                View All Transactions <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Wealth Panel & System Highlights */}
        <motion.div
          className="col-12 col-lg-4"
          variants={sectionRightVariants}
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
        >
          {/* My Card / Wallet Panel */}
          <div className={styles.myCardPanel}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className={styles.myCardChip} title="VIP Card Chip">
                <i className="fas fa-microchip"></i>
              </div>
              <span className={`${styles.badgeCustom} ${styles.badgeUsdt}`}>BINAXPAY VIP</span>
            </div>
            <div className={styles.myCardBalanceLabel}>Available Balance</div>
            <motion.div
              className={styles.myCardBalance}
              variants={textFadeUpVariants}
            >
              ${formatAmount(dashboardData?.walletBalance)}
            </motion.div>

            <div
              className="d-flex justify-content-between align-items-center mb-3"
              style={{ fontSize: "0.825rem", color: "#A3A3A3" }}
            >
              <span>Total Deposits</span>
              <span style={{ color: "#FFFFFF", fontWeight: "700" }}>
                ${formatAmount(dashboardData?.totalDeposit)}
              </span>
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
            <motion.div
              className={styles.activityCardHeader}
              variants={textFadeUpVariants}
            >
              System Highlights
            </motion.div>

            <div className={styles.activityItemsGrid}>
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>
                  <i className="fas fa-bolt"></i>
                </div>
                <div className={styles.activityTextGroup}>
                  <motion.div className={styles.activityItemTitle} variants={textFadeUpVariants}>
                    Instant Settlement
                  </motion.div>
                  <div className={styles.activityItemSubtitle}>
                    Near real-time node sync
                  </div>
                </div>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className={styles.activityTextGroup}>
                  <motion.div className={styles.activityItemTitle} variants={textFadeUpVariants}>
                    Security Engine
                  </motion.div>
                  <div className={styles.activityItemSubtitle}>
                    Encrypted BSC Smart Contract
                  </div>
                </div>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>
                  <i className="fas fa-globe"></i>
                </div>
                <div className={styles.activityTextGroup}>
                  <motion.div className={styles.activityItemTitle} variants={textFadeUpVariants}>
                    Global Network
                  </motion.div>
                  <div className={styles.activityItemSubtitle}>
                    Multi-currency crypto gateway
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;