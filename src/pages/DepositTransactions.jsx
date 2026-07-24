import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { postData } from "../api/protectedApi";
import moment from "moment";
import styles from "./css/DepositTransactions.module.css";
import { dummyTransactions } from "../data/dummyData";
import binaxpay from "../assets/Image/binaxpay.png";

const DashboardTransactions = () => {
  const [transactions, setTransactions] = useState(dummyTransactions);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(dummyTransactions.length);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [copiedText, setCopiedText] = useState(null);
  const [currentTime, setCurrentTime] = useState(moment());

  const limit = 10;
  const totalPages = Math.ceil(totalCount / limit);
  const shouldReduceMotion = useReducedMotion();

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(moment()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const skip = (currentPage - 1) * limit;
    postData("/user/deposit_transactions", {
      skip: skip.toString(),
      limit: limit.toString(),
    })
      .then((res) => {
        if (res?.data?.data && res.data.data.length > 0) {
          setTransactions(res.data.data);
          setTotalCount(res.data.count || res.data.data.length);
        } else {
          setTransactions(dummyTransactions);
          setTotalCount(dummyTransactions.length);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setTransactions(dummyTransactions);
        setTotalCount(dummyTransactions.length);
      })
      .finally(() => setTimeout(() => setIsLoading(false), 400));
  }, [currentPage]);

  const handleCopy = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1500);
  };

  const filteredTransactions = transactions.filter((t) => {
    const q = searchQuery.toLowerCase();
    return (
      t.tokenName?.toLowerCase().includes(q) ||
      t.from?.toLowerCase().includes(q) ||
      t.transactionHash?.toLowerCase().includes(q)
    );
  });

  const paginated = filteredTransactions.slice((currentPage - 1) * limit, currentPage * limit);
  const filteredTotalPages = Math.ceil(filteredTransactions.length / limit) || 1;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const tableRowVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: shouldReduceMotion ? 0 : i * 0.04, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  // Mock user data fallback — replace/hydrate with real user context if available
  const user = {
    name: "Bhushan Kumar",
    id: "T2S834755",
    status: "ACTIVE",
    regDate: "20 Jul 2026",
    initials: "BK",
  };

  const getCurrencyColor = (token) => {
    if (!token) return styles.badgeDefault;
    const t = token.toUpperCase();
    if (t.includes("USDT")) return styles.badgeUsdt;
    if (t.includes("BTC")) return styles.badgeBtc;
    if (t.includes("ETH")) return styles.badgeEth;
    if (t.includes("USD")) return styles.badgeUsd;
    return styles.badgeDefault;
  };

  return (
    <div className={styles.pageContainer}>
      {/* Decorative Images Layer */}
      <div className={styles.decoLayer}>
        <motion.img
          src={binaxpay}
          alt="BinaXpay Decorative"
          className={styles.decoMain}
          initial={{ opacity: 0, y: -30, rotate: -6 }}
          animate={{ opacity: 0.25, y: 0, rotate: -6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      <motion.div
        className={styles.contentWrapper}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Page Header */}
        <motion.div variants={itemVariants} className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Deposit History</h1>
          <p className={styles.pageSubtitle}>
            Track, verify, and audit every incoming transaction across your gateway.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div variants={itemVariants} className={styles.statsRow}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}><i className="fas fa-wallet"></i></div>
            <div className={styles.statTextGroup}>
              <span className={styles.statLabel}>Total Volume:</span>
              <span className={styles.statValue}>
                ${transactions.reduce((a, t) => a + (parseFloat(t.amount) || 0), 0).toFixed(2)}
              </span>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}><i className="fas fa-exchange-alt"></i></div>
            <div className={styles.statTextGroup}>
              <span className={styles.statLabel}>Transactions:</span>
              <span className={styles.statValue}>{totalCount}</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}><i className="fas fa-check-circle"></i></div>
            <div className={styles.statTextGroup}>
              <span className={styles.statLabel}>Success Rate:</span>
              <span className={styles.statValue}>100%</span>
            </div>
          </div>
        </motion.div>

        {/* Toolbar */}
        <motion.div variants={itemVariants} className={styles.toolbar}>
          <div className={styles.searchBox}>
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search by currency, address, or hash..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            />
          </div>
          <button className={styles.btnExport}>
            <i className="fas fa-download"></i> Export
          </button>
        </motion.div>

        {/* Table Card */}
        <motion.div variants={itemVariants} className={styles.tableCard}>
          <div className={styles.tableCardHeader}>
            <div>
              <h5 className={styles.tableCardTitle}>Recent Transactions</h5>
              <p className={styles.tableCardSubtitle}>Real-time payment gateway ledger</p>
            </div>
          </div>

          <div className={styles.tableResponsiveFix}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Amount</th>
                  <th>From</th>
                  <th>Hash</th>
                  <th>Currency</th>
                  <th>Value</th>
                  <th>Date</th>
                </tr>
              </thead>

              {isLoading ? (
                <tbody>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <tr key={idx}>
                      <td><span className={styles.skeletonBox} style={{ width: "30px" }}></span></td>
                      <td><span className={styles.skeletonBox} style={{ width: "70px" }}></span></td>
                      <td><span className={styles.skeletonBox} style={{ width: "120px" }}></span></td>
                      <td><span className={styles.skeletonBox} style={{ width: "120px" }}></span></td>
                      <td><span className={styles.skeletonBox} style={{ width: "80px", borderRadius: "999px" }}></span></td>
                      <td><span className={styles.skeletonBox} style={{ width: "60px" }}></span></td>
                      <td><span className={styles.skeletonBox} style={{ width: "110px" }}></span></td>
                    </tr>
                  ))}
                </tbody>
              ) : paginated.length === 0 ? (
                <tbody>
                  <tr>
                    <td colSpan="7" className={styles.noTrxTd}>
                      <i className="fas fa-inbox mb-2 d-block" style={{ fontSize: "1.8rem", opacity: 0.4 }}></i>
                      No transactions found.
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {paginated.map((t, index) => {
                    const fromAbbr = t.from ? `${t.from.slice(0, 8)}...${t.from.slice(-4)}` : "N/A";
                    const hashAbbr = t.transactionHash ? `${t.transactionHash.slice(0, 8)}...${t.transactionHash.slice(-4)}` : "N/A";
                    const rowIndex = index + (currentPage - 1) * limit + 1;

                    return (
                      <motion.tr
                        key={t.id || index}
                        custom={index}
                        variants={tableRowVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {/* 1. ID */}
                        <td className="text-nowrap" style={{ fontWeight: "600", color: "#A3A3A3" }}>
                          {rowIndex}
                        </td>

                        {/* 2. Amount */}
                        <td className="text-nowrap" style={{ color: "#FFFFFF", fontWeight: 600 }}>
                          ${(parseFloat(t.amount) || 0).toFixed(3)}
                        </td>

                        {/* 3. From */}
                        <td className="text-nowrap">
                          <div className={styles.addressCell}>
                            <a
                              href={`https://bscscan.com/address/${t.from}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.fromLink}
                            >
                              {fromAbbr}
                            </a>
                            {t.from && (
                              <button
                                type="button"
                                className={styles.btnCopy}
                                onClick={() => handleCopy(t.from)}
                                title="Copy address"
                              >
                                <i className={`fas ${copiedText === t.from ? "fa-check text-success" : "fa-copy"}`}></i>
                              </button>
                            )}
                          </div>
                        </td>

                        {/* 4. Hash */}
                        <td className="text-nowrap">
                          <div className={styles.addressCell}>
                            <a
                              href={`https://bscscan.com/tx/${t.transactionHash}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.hashLink}
                            >
                              {hashAbbr}
                            </a>
                            {t.transactionHash && (
                              <button
                                type="button"
                                className={styles.btnCopy}
                                onClick={() => handleCopy(t.transactionHash)}
                                title="Copy hash"
                              >
                                <i className={`fas ${copiedText === t.transactionHash ? "fa-check text-success" : "fa-copy"}`}></i>
                              </button>
                            )}
                          </div>
                        </td>

                        {/* 5. Currency */}
                        <td className="text-nowrap">
                          <span className={`${styles.badgeCustom} ${getCurrencyColor(t.tokenName)}`}>
                            {t.tokenName || "USDT"}
                          </span>
                        </td>

                        {/* 6. Value */}
                        <td className="text-nowrap" style={{ color: "#A3A3A3" }}>
                          {t.value || "-"}
                        </td>

                        {/* 7. Date */}
                        <td className="text-nowrap" style={{ color: "#A3A3A3" }} title={moment(t.createdAt).format("DD MMM YYYY, hh:mm A")}>
                          {moment(t.createdAt).format("DD-MM-YYYY hh:mm A")}
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              )}
            </table>
          </div>

          {/* Pagination */}
          {filteredTotalPages > 1 && (
            <div className={styles.tableCardFooter}>
              <div className={styles.paginationInfo}>
                Showing <span>{filteredTransactions.length > 0 ? (currentPage - 1) * limit + 1 : 0}</span> to{" "}
                <span>{Math.min(currentPage * limit, filteredTransactions.length)}</span> of{" "}
                <span>{filteredTransactions.length}</span> entries
              </div>
              <div className={styles.paginationControls}>
                <button
                  className={`${styles.pageBtn} ${currentPage === 1 ? styles.disabled : ""}`}
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>

                {Array.from({ length: filteredTotalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`${styles.pageNumberBtn} ${currentPage === page ? styles.activePage : ""}`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  className={`${styles.pageBtn} ${currentPage === filteredTotalPages ? styles.disabled : ""}`}
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, filteredTotalPages))}
                  disabled={currentPage === filteredTotalPages}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashboardTransactions;
