import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getData, postData } from "../api/protectedApi";
import moment from "moment";

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
    console.log("fll data ", data.data.data);
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
    <>
      <div class="row">
        <div class="col-12" data-aos="fade-up">
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="mb-0 text">Margin Transactions</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table
                  class="table table-responsive bg-dark table-scroll table-hover transaction-table"
                  id="transactionsTable"
                >
                  <thead style={{ backgroundColor: "#00f0ff" }}>
                    <tr>
                      <th
                        style={{ color: "#ffffff", backgroundColor: "#00f0ff" }}
                      >
                        ID
                      </th>
                      <th
                        style={{ color: "#ffffff", backgroundColor: "#00f0ff" }}
                      >
                        Amount
                      </th>
                      <th
                        style={{ color: "#ffffff", backgroundColor: "#00f0ff" }}
                      >
                        Commision
                      </th>
                      <th
                        style={{ color: "#ffffff", backgroundColor: "#00f0ff" }}
                      >
                        Charge
                      </th>
                      <th
                        style={{ color: "#ffffff", backgroundColor: "#00f0ff" }}
                      >
                        Payable
                      </th>
                      <th
                        style={{ color: "#ffffff", backgroundColor: "#00f0ff" }}
                      >
                        Remark
                      </th>
                      <th
                        style={{ color: "#ffffff", backgroundColor: "#00f0ff" }}
                      >
                        ApiKey
                      </th>
                      <th
                        style={{ color: "#ffffff", backgroundColor: "#00f0ff" }}
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.length === 0 ? (
                      <tr>
                        <td>No Transaction found.</td>
                      </tr>
                    ) : (
                      transactions.map((transaction, index) => (
                        <tr key={index}>
                          <td className="tdn text-nowrap">
                            {index + (currentPage - 1) * limit + 1}
                          </td>
                          <td className="tdn text-nowrap">
                            ${transaction.amount.toFixed(3)}
                          </td>
                          <td className="tdn text-nowrap">
                            ${transaction.commissionAmount.toFixed(3)}
                          </td>
                          <td className="tdn text-nowrap">
                            ${transaction.transactionCharge.toFixed(3)}
                          </td>
                          <td className="tdn text-nowrap">
                            ${transaction.payableAmount.toFixed(3)}
                          </td>
                          <td className="tdn text-nowrap">{transaction.remark}</td>
                          <td className="tdn text-nowrap">{transaction.apiKey}</td>
                          <td className="tdn text-nowrap">
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
    </>
  );
};

export default MarginTransactions;
