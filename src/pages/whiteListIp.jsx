import React, { useState, useEffect } from "react";
import { getData, postData } from "../api/protectedApi";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./css/whiteListIp.module.css";

const WhirteListIp = () => {
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [otp, setOtp] = useState("");
  const [ip, setIP] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = async () => {
    if (!otp) {
      toast.error("Please set otp");
      return;
    }

    try {
      setLoading(true);
      const response = await postData("/user/whitelist_ip", {
        otp: otp,
        ip: ip,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setShowModal(false);
        getData("/user/whitelist_ip_list")
          .then((res) => {
            setTransactions(res.data.data);
          })
          .catch((err) => console.error("ee", err));
      } else {
        toast.error(response.data.message || " Failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while processing the request.");
    } finally {
      setLoading(false);
    }
  };

  const handleGetOtp = async () => {
    try {
      setOtpLoading(true);
      const response = await getData("/user/withrawOtp", {});

      if (response.data.success) {
        alert("OTP Sent Successfully");
        setOtpTimer(120);
      } else {
        alert(response.data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending OTP");
    } finally {
      setOtpLoading(false);
    }
  };

  useEffect(() => {
    getData("/user/whitelist_ip_list")
      .then((res) => {
        setTransactions(res.data.data);
      })
      .catch((err) => console.error("ee", err));

    let timer;
    if (otpTimer > 0) {
      timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [otpTimer]);

  return (
    <div className="row">
      <div
        className={`col-12 ${styles.pageContainer}`}
        data-aos="fade-up"
      >
        {showModal && (
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark text-white rounded">
                <div className="modal-header border-0">
                  <h5 className="modal-title fw-semibold text">
                    Whitelist IP
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>

                <div className="modal-body">
                  <div className="mb-3 d-flex">
                    <input
                      type="text"
                      className="form-control bg-secondary text-white border-0"
                      placeholder="IP Address"
                      value={ip}
                      onChange={(e) => {
                        setIP(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3 d-flex">
                    <input
                      type="text"
                      className="form-control bg-secondary text-white border-0 me-2"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <button
                      className="btn btn-info text-dark fw-semibold"
                      onClick={handleGetOtp}
                      disabled={otpLoading || otpTimer > 0}
                    >
                      {otpLoading
                        ? "Sending..."
                        : otpTimer > 0
                        ? `${Math.floor(otpTimer / 60)}:${String(
                            otpTimer % 60
                          ).padStart(2, "0")}`
                        : "Code"}
                    </button>
                  </div>
                  <button
                    className="btn btn-info text-dark fw-semibold w-100"
                    onClick={handleForm}
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Whitelist IP"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mb-4 px-2">
          <h2 data-aos="fade-right" className="aos-init aos-animate text-white">
            IP WhiteList
          </h2>
          <div className="d-flex">
            <button
              className="btn btn-sm btn-outline me-2"
              onClick={() => setShowModal(true)}
            >
              <i className="fas fa-plus me-1"></i>{" "}
              <span className="d-none d-md-inline"> New IP</span>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0 text">Api Key List</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <ToastContainer position="top-right" autoClose={3000} />
              <table
                className="table table-responsive table-scroll table-hover transaction-table"
                id="transactionsTable"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>IP</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.length === 0 ? (
                    <tr>
                      <td colSpan="3">No Transaction found.</td>
                    </tr>
                  ) : (
                    transactions.map((transaction, index) => (
                      <tr key={index}>
                        <td className="tdn">{index + 1}</td>
                        <td className="tdn">{transaction.ipAddress}</td>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhirteListIp;
