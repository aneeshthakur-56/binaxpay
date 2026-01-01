import React, { useState, useEffect } from "react";
import { useNavigate , Link } from "react-router-dom";
import { postData } from "../api/protectedApi";
import { useAuth } from "../context/AuthContext";
import moment from "moment"; 

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [dashboardData, setDashboardData] = useState([]);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    postData("/user/latest_transactions", {})  .then((res) => { setTransactions(res.data.data);  }) .catch((err) => console.error(err));
    postData("/user/wallet_sum", {})  .then((res) => { setDashboardData(res.data);  }) .catch((err) => console.error(err));
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
      </div>

      {/* Dashboard Cards */}
      <div className="row mb-4">
        <div className="col-md-6 col-lg-3 mb-3">
            <div
              className="card text-white h-100"
              style={{ backgroundColor: "#2e2e97" }}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="text-white-50 ">Total Balance</h6>
                    <h4>${dashboardData?.walletBalance }</h4>
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
              </div>
            </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
            <div className="card text-white h-100" style={{ backgroundColor: "#2e2e97" }}  >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="text-white-50">Tx Count</h6>
                    <h4>{dashboardData?.depositCount }</h4>
                  </div> 
                </div> 
              </div>
            </div>
        </div>

         <div className="col-md-6 col-lg-3 mb-3">
            <div className="card text-white h-100" style={{ backgroundColor: "#2e2e97" }}  >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="text-white-50">Deposited Amount</h6>
                    <h4>${dashboardData?.totalDeposit }</h4>
                  </div> 
                </div>
                 
              </div>
            </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card border-0 shadow-lg">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0 text">Recent Transactions</h5>
          <button className="btn2 btn-outline-light btn-sm ">View All</button>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-dark table-bordered text-center align-middle">
              <thead>
                <tr>
                  <th style={{ backgroundColor: "#000066", color: "#fff" }}>
                    ID
                  </th>
                  <th style={{ backgroundColor: "#000066", color: "#fff" }}>
                    Date
                  </th>
                  <th style={{ backgroundColor: "#000066", color: "#fff" }}>
                    Type
                  </th>

                  <th style={{ backgroundColor: "#000066", color: "#fff" }}>
                    Currency
                  </th>
                  <th style={{ backgroundColor: "#000066", color: "#fff" }}>
                    From
                  </th>
                  <th style={{ backgroundColor: "#000066", color: "#fff" }}>
                    Hash
                  </th>
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
                      <td> { 1 + index}</td>
                      <td>{moment(trx.createdAt).format("DD-MM-YYYY hh:mm A" )}</td>
                      <td>{trx.type || "Deposit"}</td>
                      <td>{parseFloat(trx.amount).toFixed(4)}</td>
                      <td>
                        <span
                          className={`badge ${getCurrencyColor(trx.tokenName)}`}
                        >
                          <Link
                          to={"https://bscscan.com/address/" + trx.from}
                          style={{ color: "#00ccff" }}
                        >
                          {trx.from.substr(0, 10)}....</Link> 
                        </span>
                      </td>  
                      <td> <Link
                          to={"https://bscscan.com/tx/" + trx.transactionHash}
                          style={{ color: "#00ccff" }}
                        >
                          {trx.transactionHash.substr(0, 10)}....</Link></td>
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
