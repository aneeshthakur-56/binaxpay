import React, { useState, useEffect } from "react";
import { postData } from "../api/protectedApi";
import moment from "moment";
import styles from "./css/MarginTransactions.module.css";

const MarginTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 10;
  const totalPages = Math.ceil(totalCount / limit);

  let callData = async (page) => {
    const skip = (page - 1) * limit;
    postData("/user/margin_transactions", {
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
            <h5 className="mb-0 text">Margin Transactions</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-responsive bg-dark table-scroll table-hover transaction-table"
                id="transactionsTable"
              >
                <thead>
                  <tr>
                    <th className={styles.tableHeaderTh}>ID</th>
                    <th className={styles.tableHeaderTh}>Amount</th>
                    <th className={styles.tableHeaderTh}>Commision</th>
                    <th className={styles.tableHeaderTh}>Charge</th>
                    <th className={styles.tableHeaderTh}>Payable</th>
                    <th className={styles.tableHeaderTh}>Remark</th>
                    <th className={styles.tableHeaderTh}>ApiKey</th>
                    <th className={styles.tableHeaderTh}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.length === 0 ? (
                    <tr>
                      <td colSpan="8">No Transaction found.</td>
                    </tr>
                  ) : (
                    transactions.map((transaction, index) => (
                      <tr key={index}>
                        <td className={`tdn ${styles.tableCell}`}>
                          {index + (currentPage - 1) * limit + 1}
                        </td>
                        <td className={`tdn ${styles.tableCell}`}>
                          ${transaction.amount.toFixed(3)}
                        </td>
                        <td className={`tdn ${styles.tableCell}`}>
                          ${transaction.commissionAmount.toFixed(3)}
                        </td>
                        <td className={`tdn ${styles.tableCell}`}>
                          ${transaction.transactionCharge.toFixed(3)}
                        </td>
                        <td className={`tdn ${styles.tableCell}`}>
                          ${transaction.payableAmount.toFixed(3)}
                        </td>
                        <td className={`tdn ${styles.tableCell}`}>{transaction.remark}</td>
                        <td className={`tdn ${styles.tableCell}`}>{transaction.apiKey}</td>
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
                          ? "bg-blue-500 text"
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

export default MarginTransactions;
