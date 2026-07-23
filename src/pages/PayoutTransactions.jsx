import React, { useState, useEffect } from "react";
import { postData } from "../api/protectedApi";
import moment from "moment";
import styles from "./css/PayoutTransactions.module.css";

const PayoutTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 10;
  const totalPages = Math.ceil(totalCount / limit);

  let callData = async (page) => {
    const skip = (page - 1) * limit;
    postData("/user/payout_transactions", {
      skip: skip.toString(),
      limit: limit.toString(),
    })
      .then((res) => {
        fillApiData(res);
      })
      .catch((err) => console.error("ee", err));
  };

  let fillApiData = async (data) => {
    setTransactions(data.data.data);
    setTotalCount(data.data.count);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    callData(currentPage);
  }, [currentPage]);

  return (
    <div className="row">
      <div className="col-12" data-aos="fade-up">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0 text">Payout Transactions</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-responsive table-scroll table-hover transaction-table bg-dark"
                id="transactionsTable"
              >
                <thead>
                  <tr>
                    <th className={styles.tableHeaderTh}>ID</th>
                    <th className={styles.tableHeaderTh}>WalletAddress</th>
                    <th className={styles.tableHeaderTh}>RequestID</th>
                    <th className={styles.tableHeaderTh}>Amount</th>
                    <th className={styles.tableHeaderTh}>Status</th>
                    <th className={styles.tableHeaderTh}>CallbackUrl</th>
                    <th className={styles.tableHeaderTh}>Remark</th>
                    <th className={styles.tableHeaderTh}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="text-center">No Transaction found.</td>
                    </tr>
                  ) : (
                    transactions.map((transaction, index) => (
                      <tr key={index}>
                        <td className={`tdn ${styles.tableCell}`}>
                          {index + (currentPage - 1) * limit + 1}
                        </td>
                        <td className={`tdn ${styles.tableCell}`}>{transaction.walletAddress}</td>
                        <td className={`tdn ${styles.tableCell}`}>{transaction.requestId}</td>
                        <td className={`tdn ${styles.tableCell}`}>${transaction.amount}</td>
                        <td className={`tdn ${styles.tableCell}`}>{transaction.status}</td>
                        <td className={`tdn ${styles.tableCell}`}>{transaction.callbackUrl}</td>
                        <td className={`tdn ${styles.tableCell}`}>{transaction.remark}</td>
                        <td className={`tdn ${styles.tableCell}`}>
                          {moment(transaction.createdAt).format(
                            "DD-MM-YYYY hh:mm A"
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div className="flex justify-center space-x-2">
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-1 rounded border ${
                        currentPage === page
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutTransactions;
