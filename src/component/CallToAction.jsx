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
            color: #fff !important;
            opacity: 1;
          }

          input::placeholder {
            color: #fff !important;
          }

          .form-control {
            background-color: #0b0b0b !important;
            border: 1px solid #222 !important;
            color: #fff !important;
            padding: 12px !important;
          }

          .form-control:focus {
            border-color: #12896B !important;
            box-shadow: 0 0 0 0.25rem rgba(18, 137, 107, 0.25) !important;
            outline: none !important;
            background-color: #0b0b0b !important;
            color: #fff !important;
          }

          .custom-btn {
            color: #03045e !important;
            background-color: #fff !important;
            border: none;
            transition: all 0.3s ease;
          }

          .custom-btn:hover {
            color: #fff !important;
            background-color: #12896B !important;
          }

          .highlight-text {
            color: #0ff;
          }
        `}
      </style>

      <div
        className="d-flex justify-content-center align-items-center min-vh-100 px-3 py-3"
        style={{
          background: "linear-gradient(to right, #03045e, #0a0a0a)",
          color: "#fff",
        }}
      >
        <div
          className="row shadow-lg rounded-4 w-100 mx-auto py-5 px-4"
          style={{
            maxWidth: "1200px",
            backgroundColor: "#0a0a0a",
          }}
        >
          {/* Left: Text Section */}
          <div
            className="col-md-6 d-flex flex-column justify-content-center mb-4 mb-md-0"
            style={animationStyle("left")}
          >
            <h1 className="fw-bold display-5">
              Ready to Start <br />
              Accepting Crypto Payments?
            </h1>
            <p className="mt-3 fs-5 text-white-50">
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
              <p className="mt-2 text-center small text-white-50 mb-0">
                By signing up, you agree to our{" "}
                <span className="text-info">Terms of Service</span> and{" "}
                <span className="text-info">Privacy Policy</span>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
