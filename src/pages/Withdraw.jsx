import React, { useState, useEffect } from "react";
import { getData, postData } from "../api/protectedApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./css/Withdraw.module.css";

const Withdraw = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);

  const getBalance = () => {
    postData("/user/wallet_sum", {})
      .then((res) => {
        setBalance(res.data?.walletBalance);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getBalance();
  }, []);

  const handleGetOtp = async () => {
    try {
      setOtpLoading(true);
      const response = await getData("/user/withrawOtp", {});
      if (response.data.success) {
        toast.success("OTP Sent Successfully!");
        setOtpTimer(120);
      } else {
        toast.error(response.data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending OTP");
    } finally {
      setOtpLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    if (otpTimer > 0) {
      timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [otpTimer]);

  const handleWithdraw = async () => {
    if (!amount || !address || !otp) {
      toast.error("Please fill all fields");
      return;
    }

    const payload = {
      amount: amount,
      walletAddress: address,
      otp: otp,
    };

    try {
      setLoading(true);
      const response = await postData("/user/placeWithraw", payload);

      if (response.data.success) {
        toast.success("Withdraw Request Submitted Successfully");
        getBalance();
        setAmount("");
        setAddress("");
        setOtp("");
        setToken("");
      } else {
        toast.error(response.data.message || "Withdraw Failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while processing the withdrawal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`bg-dark text-white rounded p-4 shadow-lg mx-auto ${styles.withdrawCard}`}
    >
      <h5 className="mb-3 fw-semibold">Withdraw</h5>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="mb-3">
        <p className="mb-1 small">
          Minimum Withdraw: <span className="text-white fw-bold">10 USDT</span>
        </p>
        <p className="mb-0 small">
          Current Balance:{" "}
          <span className="text-white fw-bold">${balance.toFixed(3)}</span>
        </p>
      </div>

      <div className="mb-3">
        <label className="form-label small">Withdraw Amount</label>
        <input
          type="number"
          min="0"
          step="any"
          className="form-control bg-secondary text-white border-0"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            if (value < 0) return;
            setAmount(value);
          }}
        />
      </div>

      <div className="mb-3">
        <label className="form-label small">Address</label>
        <input
          type="text"
          className="form-control bg-secondary text-white border-0"
          placeholder="Wallet address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
          className={`btn btn-info text-dark fw-semibold ${styles.actionBtn}`}
          onClick={handleGetOtp}
          disabled={otpLoading || otpTimer > 0}
        >
          {otpLoading
            ? "Sending..."
            : otpTimer > 0
              ? `${Math.floor(otpTimer / 60)}:${String(otpTimer % 60).padStart(
                2,
                "0"
              )}`
              : "Code"}
        </button>
      </div>

      <div className="mb-3 small"></div>

      <div className="mb-3">
        <label className="form-label small">Token Name</label>
        <select className="form-select bg-secondary text-white border-0">
          <option>USDT</option>
        </select>
      </div>

      <button
        className={`btn btn-info text-dark fw-semibold w-100 ${styles.actionBtn}`}
        onClick={handleWithdraw}
        disabled={loading}
      >
        {loading ? "Processing..." : "Withdraw"}
      </button>
    </div>
  );
};

export default Withdraw;
