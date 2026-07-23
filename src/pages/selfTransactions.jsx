import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { postData } from '../api/protectedApi';
import moment from 'moment';
import styles from './css/selfTransactions.module.css';

const SelfTransactions = () => {
  const { address } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 10;

  let callData = async (page) => {
    postData('/user/check_self_deposit', { wallet_address: address, contract_address: '0x55d398326f99059fF775485246999027B3197955' })
      .then((res) => {
        fillApiData(res);
      })
      .catch((err) => console.error('ee', err));
  };

  let fillApiData = async (data) => {
    setTransactions(data.data.list);
  };

  useEffect(() => {
    callData(currentPage);
  }, [currentPage]);

  return (
    <div className="row">
      <div className="col-12" data-aos="fade-up">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0 text-light">Self Transactions {address}</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-responsive table-scroll table-hover transaction-table" id="transactionsTable">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Amount</th>
                    <th>From</th>
                    <th>Hash</th>
                    <th>Value</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.length === 0 ? (
                    <tr><td colSpan="6">No Transaction found.</td></tr>
                  ) : (
                    transactions.map((transaction, index) => (
                      <tr key={index}>
                        <td>{index + ((currentPage - 1) * limit) + 1}</td>
                        <td className={styles.tableCell}>${transaction.amount.toFixed(3)}</td>
                        <td className={styles.tableCell}>
                          <Link to={"https://bscscan.com/address/" + transaction.from}>
                            {(transaction.from).substr(0, 10)}....
                          </Link>
                        </td>
                        <td className={styles.tableCell}>
                          <Link to={"https://bscscan.com/tx/" + transaction.transactionHash}>
                            {(transaction.transactionHash).substr(0, 10)}....
                          </Link>
                        </td>
                        <td className={styles.tableCell}>{transaction.value}</td>
                        <td className={styles.tableCell}>{moment(transaction.createdAt).format('DD-MM-YYYY hh:mm A')}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfTransactions;