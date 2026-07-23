import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postData } from "../api/protectedApi";
import moment from "moment";
import styles from "./css/DepositTransactions.module.css";

const DashboardTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 10;
  const totalPages = Math.ceil(totalCount / limit);

  useEffect(() => {
    const skip = (currentPage - 1) * limit;
    postData("/user/deposit_transactions", {
      skip: skip.toString(),
      limit: limit.toString(),
    })
      .then((res) => {
        setTransactions(res.data.data);
        setTotalCount(res.data.count);
      })
      .catch((err) => console.error("Error:", err));
  }, [currentPage]);

  return (
    <div className={`container-fluid p-4 ${styles.pageContainer}`}>
      <div className="card border-0 shadow-lg">
        <div className="card-header">
          <h5 className="mb-0 text">Recent Transactions</h5>
        </div>
        <div className={`card-body ${styles.cardBody}`}>
          <div className="table-responsive">
            <table className="table table-bordered bg-dark table-hover text-center align-middle mb-0 text-white">
              <thead>
                <tr>
                  <th className={styles.tableHeaderTh}>ID</th>
                  <th className={styles.tableHeaderTh}>Amount</th>
                  <th className={styles.tableHeaderTh}>From</th>
                  <th className={styles.tableHeaderTh}>Hash</th>
                  <th className={styles.tableHeaderTh}>Currency</th>
                  <th className={styles.tableHeaderTh}>Value</th>
                  <th className={styles.tableHeaderTh}>Date</th>
                </tr>
              </thead>

              <tbody>
                {transactions.length === 0 ? (
                  <tr>
                    <td colSpan="7" className={styles.noTrxTd}>
                      No Transaction found.
                    </td>
                  </tr>
                ) : (
                  transactions.map((transaction, index) => (
                    <tr key={index} className="text-white">
                      <td className="text-nowrap">{index + (currentPage - 1) * limit + 1}</td>
                      <td className="text-nowrap">${transaction.amount.toFixed(3)}</td>
                      <td className="text-nowrap">
                        <Link
                          to={"https://bscscan.com/address/" + transaction.from}
                          className={styles.tableLink}
                        >
                          {transaction.from.substr(0, 10)}....
                        </Link>
                      </td>
                      <td className="text-nowrap">
                        <Link
                          to={
                            "https://bscscan.com/tx/" +
                            transaction.transactionHash
                          }
                          className={styles.tableLink}
                        >
                          {transaction.transactionHash.substr(0, 10)}....
                        </Link>
                      </td>
                      <td className="text-nowrap">{transaction.tokenName}</td>
                      <td className="text-nowrap">{transaction.value}</td>
                      <td className="text-nowrap">
                        {moment(transaction.createdAt).format(
                          "DD-MM-YYYY hh:mm A"
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center align-items-center mt-3">
            {Array.from({ length: totalPages }).map((_, idx) => {
              const page = idx + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`btn btn-sm mx-1 ${
                    currentPage === page ? "btn-primary" : "btn-outline-light"
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
  );
};

export default DashboardTransactions;
