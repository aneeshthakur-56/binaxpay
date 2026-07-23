import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/CallToAction.module.css";

const CallToAction = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const animationStyle = () => ({
    transform: animate ? "translateY(0)" : "translateY(30px)",
    opacity: animate ? 1 : 0,
    transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
  });

  return (
    <div
      className={`${styles.ctaSection} d-flex justify-content-center align-items-center px-3 px-sm-4 py-4`}
      style={{ color: "#fff" }}
    >
      <div
        className={`${styles.ctaCard} shadow-lg w-100 mx-auto py-5 px-4`}
        style={{
          maxWidth: "1200px",
          boxShadow: "0 24px 70px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="row align-items-center m-0">
          {/* Left: Text Section */}
          <div
            className="col-md-6 d-flex flex-column justify-content-center mb-4 mb-md-0"
            style={animationStyle()}
          >
            <span className={styles.ctaBadge}>GET STARTED TODAY</span>
            <h1 className="fw-bold display-5 text-white">
              Ready to Start <br />
              Accepting Crypto Payments?
            </h1>
            <p className={`mt-3 fs-5 ${styles.ctaDescription}`}>
              Join thousands of businesses using Binaxpay to streamline their
              payment processing and unlock new revenue opportunities in the
              growing cryptocurrency market.
            </p>
          </div>

          {/* Right: Form Section */}
          <div
            className="col-md-6 d-flex align-items-center justify-content-center"
            style={animationStyle()}
          >
            <form style={{ width: "100%", maxWidth: "400px" }}>
              <input
                type="email"
                className={`form-control mb-2 ${styles.formControlInput}`}
                placeholder="Your Email Address"
              />
              <input
                type="password"
                className={`form-control mb-3 ${styles.formControlInput}`}
                placeholder="Create Password"
              />
              <button
                className={`btn ${styles.customBtn} w-100 fw-semibold py-2 rounded-pill d-flex align-items-center justify-content-center mb-2`}
                type="submit"
              >
                <i className="bi bi-person-plus-fill me-2 py-3"></i> Start Free
                Trial
              </button>
              <p className={`mt-2 text-center small ${styles.ctaDescription} mb-0`}>
                By signing up, you agree to our{" "}
                <span className={styles.termLink}>Terms of Service</span> and{" "}
                <span className={styles.termLink}>Privacy Policy</span>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
