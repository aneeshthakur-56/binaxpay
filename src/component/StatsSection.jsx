import React from "react";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.min.css";
import back from "../assets/Image/back.png";

const stats = [
  { value: 12500000, label: "Transactions Processed" },
  { value: 10000, label: "Happy Clients" },
  { value: 50, label: "Supported Cryptos" },
  { value: 150, label: "Countries" },
];

const StatsSection = () => {
  return (
    <>
      <div className="stats-section">
        <img src={back} alt="background" className="bg-image" />
        
        <div className="stats-intro-panel" data-aos="fade-up">
          <h2>
            By The <span>Numbers</span>
          </h2>
          <p>
            Join thousands of businesses already benefiting from Binaxpay's
            revolutionary payment solutions.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="stat-number">
                <CountUp end={stat.value} duration={3} separator="," />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-section {
          position: relative;
          padding: clamp(50px, 8vw, 100px) 20px;
          overflow: hidden;
        }

        .stats-section .bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .stats-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,
            rgba(10, 10, 10, 0.75) 0%,
            rgba(10, 10, 10, 0.5) 50%,
            rgba(10, 10, 10, 0.85) 100%);
          z-index: 1;
        }

        .stats-intro-panel {
          position: relative;
          z-index: 2;
          max-width: 700px;
          margin: 0 auto clamp(30px, 6vw, 60px);
          text-align: center;
          background: rgba(20, 20, 20, 0.45);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(111, 230, 184, 0.18);
          border-radius: 24px;
          padding: clamp(24px, 5vw, 40px) clamp(16px, 4vw, 32px);
        }

        .stats-intro-panel h2 {
          color: #FFFFFF;
          font-weight: 700;
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          margin-bottom: 0;
        }

        .stats-intro-panel h2 span {
          background: linear-gradient(135deg, #6FE6B8 0%, #2E9F97 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: #6FE6B8;
          -webkit-text-fill-color: transparent;
        }

        .stats-intro-panel p {
          color: #A3A3A3;
          margin-top: 12px;
          font-size: clamp(0.88rem, 1.5vw, 1rem);
          margin-bottom: 0;
        }

        .stats-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }

        .stat-card {
          background: #141414 !important;
          border: 1px solid rgba(111, 230, 184, 0.12) !important;
          border-radius: 16px !important;
          padding: clamp(16px, 3vw, 28px) clamp(10px, 2vw, 16px) !important;
          text-align: center;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 0;
          overflow: hidden;
        }

        .stat-card:hover {
          transform: translateY(-4px) !important;
          border-color: rgba(111, 230, 184, 0.4) !important;
          box-shadow: 0 12px 30px rgba(111, 230, 184, 0.15) !important;
        }

        .stat-number {
          font-size: clamp(1.4rem, 2.5vw + 0.6rem, 2.2rem) !important;
          font-weight: 700;
          background: linear-gradient(135deg, #6FE6B8 0%, #2E9F97 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: #6FE6B8 !important;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        .stat-label {
          color: #A3A3A3 !important;
          font-size: clamp(0.78rem, 1.2vw + 0.4rem, 0.95rem) !important;
          margin-top: 8px;
          margin-bottom: 0;
          word-break: break-word;
          line-height: 1.3;
        }

        @media (max-width: 992px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .stat-card {
            padding: 14px 8px !important;
            border-radius: 12px !important;
          }
          .stat-number {
            font-size: clamp(1.15rem, 5.5vw, 1.5rem) !important;
          }
          .stat-label {
            font-size: 0.75rem !important;
            margin-top: 4px;
          }
        }

        @media (max-width: 340px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default StatsSection;
