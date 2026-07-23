import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CallToAction = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const animationStyle = () => ({
    transform: animate ? "translateY(0)" : "translateY(30px)",
    opacity: animate ? 1 : 0,
    transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
  });

  return (
    <>
      <style>
        {`
          ::placeholder {
            color: #A3A3A3 !important;
            opacity: 1;
          }

          .cta-section {
            background: transparent !important;
            position: relative;
            overflow: hidden;
            color: #cac8c8 !important;
            width: 100%;
            max-width: 100%;
          }

          @keyframes ctaFloat {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-12px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .cta-card {
            position: relative;
            background: rgba(20, 45, 40, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1.5px solid rgba(111, 230, 184, 0.35);
            border-radius: 28px;
            z-index: 1;
            overflow: hidden;
            animation: ctaFloat 4.5s ease-in-out infinite;
            will-change: transform;
            transition: transform 0.4s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          }

          .cta-card:focus-within {
            animation-play-state: paused;
          }
          .custom-btn {
            color: #0A0A0A !important;
            background: linear-gradient(90deg, #6FE6B8 0%, #2E9F97 100%) !important;
            border: none !important;
            transition: all 0.3s ease;
            box-shadow: 0 12px 32px rgba(46, 159, 151, 0.25);
          }

          .custom-btn:hover {
            color: #0A0A0A !important;
            box-shadow: 0 0 24px rgba(111, 230, 184, 0.4);
            transform: translateY(-2px);
          }

          .cta-description {
            color: rgb(238, 231, 231);
          }

          .term-link {
            color: #6FE6B8 !important;
          }

          .cta-badge {
            display: inline-block;
            padding: 6px 16px;
            border-radius: 999px;
            background: rgba(111, 230, 184, 0.1);
            border: 1px solid rgba(111, 230, 184, 0.3);
            color: #6FE6B8;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            margin-bottom: 16px;
          }
        `}
      </style>

      <div
        className="cta-section d-flex justify-content-center align-items-center px-3 px-sm-4 py-4"
        style={{
          color: "#fff",
        }}
      >
        <div
          className="cta-card shadow-lg w-100 mx-auto py-5 px-4"
          style={{
            maxWidth: "1200px",
            boxShadow: "0 24px 70px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="row align-items-center m-0">
            {/* Left: Text Section */}
            <div
              className="col-md-6 d-flex flex-column justify-content-center mb-4 mb-md-0"
              style={animationStyle("left")}
            >
              <span className="cta-badge">GET STARTED TODAY</span>
              <h1 className="fw-bold display-5 text-white">
                Ready to Start <br />
                Accepting Crypto Payments?
              </h1>
              <p className="mt-3 fs-5 cta-description">
                Join thousands of businesses using Binaxpay to streamline their
                payment processing and unlock new revenue opportunities in the
                growing cryptocurrency market.
              </p>
            </div>

            {/* Right: Form Section */}
            <div
              className="col-md-6 d-flex align-items-center justify-content-center"
              style={animationStyle("right")}
            >
              <form style={{ width: "100%", maxWidth: "400px" }}>
                <input
                  type="email"
                  className="form-control mb-2 text-white"
                  placeholder="Your Email Address"
                />
                <input
                  type="password"
                  className="form-control mb-3 text-white"
                  placeholder="Create Password"
                />
                <button
                  className="btn custom-btn w-100 fw-semibold py-2 rounded-pill d-flex align-items-center justify-content-center mb-2"
                  type="submit"
                >
                  <i className="bi bi-person-plus-fill me-2 py-3"></i> Start Free
                  Trial
                </button>
                <p className="mt-2 text-center small cta-description mb-0">
                  By signing up, you agree to our{" "}
                  <span className="term-link">Terms of Service</span> and{" "}
                  <span className="term-link">Privacy Policy</span>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;

