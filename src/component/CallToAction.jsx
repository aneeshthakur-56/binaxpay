import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CallToAction = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const animationStyle = (from) => ({
    transform: animate
      ? "translateX(0)"
      : from === "left"
      ? "translateX(-100px)"
      : "translateX(100px)",
    opacity: animate ? 1 : 0,
    transition: "all 0.8s ease",
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
            color:#cac8c8 !important;
          }

          .cta-section::before {
            content: "";
            position: absolute;
            top: -20%;
            right: -10%;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(111, 230, 184, 0.12) 0%, transparent 70%);
            pointer-events: none;
          }

          .cta-card {
            position: relative;
            background: #3fd8c463;
            border-radius: 28px;
            z-index: 1;
          }

          .cta-card::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 28px;
            padding: 1.5px;
            background: linear-gradient(135deg, #6FE6B8 0%, #2E9F97 50%, rgba(111,230,184,0.1) 100%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
          }

          .cta-section .form-control {
            background-color: #225750 !important;
            border: 1px solid #2A2A2A !important;
            color: #fff !important;
            padding: 14px 16px !important;
            border-radius: 14px !important;
          }

          .cta-section .form-control:focus {
            outline: none !important;
            border-color: #6FE6B8 !important;
            box-shadow: 0 0 0 0.35rem rgba(111, 230, 184, 0.16) !important;
            background-color: #225750 !important;
            color: #fff !important;
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
          className="cta-card row shadow-lg w-100 mx-auto py-5 px-4"
          style={{
            maxWidth: "1200px",
            boxShadow: "0 24px 70px rgba(0, 0, 0, 0.5)",
          }}
        >
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
    </>
  );
};

export default CallToAction;

