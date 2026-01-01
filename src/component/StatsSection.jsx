import React from "react";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.min.css";
import Back from "../assets/Image/Back.jpg";

const stats = [
  { value: 12500000, label: "Transactions Processed" },
  { value: 10000, label: "Happy Clients" },
  { value: 50, label: "Supported Cryptos" },
  { value: 150, label: "Countries" },
];

const StatsSection = () => {
  return (
    <>
      <div
        className="stats-section text-white"
        style={{ backgroundImage: `url(${Back})` }}
      >
        <div className="container text-center">
          <h2 className="stats-title display-5 fw-bold mb-3">
            <span className="by-text">By</span> The{" "}
            <span className="highlight">Numbers</span>
          </h2>
          <p className="description mb-5">
            Join thousands of businesses already benefiting from Binaxpay's
            revolutionary payment solutions.
          </p>

          <div className="row justify-content-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3 mb-4">
                <div className="stat-number">
                  <CountUp end={stat.value} duration={3} separator="," />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .stats-section {
          background-size: cover;
          background-position: center;
          padding: 110px 0 90px;
        }

        .stats-title {
          font-size: 2.6rem;
          line-height: 1.3;
        }

        .highlight {
          color: #00e5ff;
        }

        .by-text {
          color: white;
          display: inline-block;
          position: relative;
        }

        .by-text::after {
          content: "";
          position: absolute;
          width: 60px;
          height: 3px;
          background-color: #00e5ff;
          left: 0;
          bottom: -8px;
        }

        .description {
          font-size: 1.25rem;
          color: #ddd;
          max-width: 800px;
          margin: 0 auto;
        }

        .stat-number {
          font-size: 2.8rem;
          font-weight: bold;
          color: #00e5ff;
        }

        .stat-label {
          font-size: 1.15rem;
          color: #ccc;
          margin-top: 8px;
        }

        @media (max-width: 767px) {
          .stats-title {
            font-size: 2rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default StatsSection;
