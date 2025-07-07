import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../api/protectedApi";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    postData("/user/latest_transactions", {})
      .then((res) => {
        setTransactions(res.data.data);
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
        return "bg-success";
      case "BTC":
        return "bg-primary";
      case "ETH":
        return "bg-secondary";
      case "USD":
        return "bg-info";
      default:
        return "bg-light text-dark";
    }
  };

  const getStatusBadge = (status) => {
    switch ((status || "").toLowerCase()) {
      case "completed":
        return "bg-success";
      case "pending":
        return "bg-warning text-dark";
      case "failed":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div
      className="container-fluid min-vh-100"
      style={{ backgroundColor: "#1b1c2a", color: "#fff", padding: "2rem" }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Dashboard Overview</h2>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Dashboard Cards */}
      <div className="row mb-4">
        {[...Array(4)].map((_, i) => (
          <div className="col-md-6 col-lg-3 mb-3" key={i}>
            <div
              className="card text-white h-100"
              style={{ backgroundColor: "#2e2e97" }}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="text-white-50">Total Balance</h6>
                    <h4>$12,450.75</h4>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#00e1ff",
                      padding: "10px",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="fas fa-wallet text-dark"></i>
                  </div>
                </div>
                <p className="text-success mt-2 mb-0">
                  <i className="fas fa-caret-up me-1"></i>12.5% from last month
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="card border-0 shadow-lg">
        <div
          className="card-header d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "#000077", color: "#fff" }}
        >
          <h5 className="mb-0">Recent Transactions</h5>
          <button className="btn btn-outline-light btn-sm">View All</button>
        </div>
        <div
          className="card-body"
          style={{ backgroundColor: "#13152a", color: "#fff" }}
        >
          <div className="table-responsive">
            <table className="table table-dark table-bordered text-center align-middle">
              <thead>
                <tr style={{ backgroundColor: "#000077" }}>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Currency</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No Transactions Found.
                    </td>
                  </tr>
                ) : (
                  transactions.map((trx, index) => (
                    <tr key={index}>
                      <td>#TRX-{7840 + index}</td>
                      <td>{trx.timestamp || "2023-10-15 14:30"}</td>
                      <td>{trx.type || "Deposit"}</td>
                      <td>{parseFloat(trx.amount).toFixed(4)}</td>
                      <td>
                        <span
                          className={`badge ${getCurrencyColor(trx.tokenName)}`}
                        >
                          {trx.tokenName || "USDT"}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge ${getStatusBadge(
                            trx.status || "Completed"
                          )}`}
                        >
                          {(trx.status || "Completed").charAt(0).toUpperCase() +
                            (trx.status || "Completed").slice(1)}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
