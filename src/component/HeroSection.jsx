import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hero from "../assets/Image/hero.png";
import photo from "../assets/Image/photo.jpg";
import photo1 from "../assets/Image/photo1.jpg";
import photo2 from "../assets/Image/photo2.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="bg-gradient-dark hero-section">
        <div className="container text-white py-5 px-3 px-lg-4 min-vh-100 d-flex align-items-center">
          <div className="row align-items-center justify-content-center w-100">
            {/* Text Column */}
            <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0 text-slide">
              <h1 className="display-4 fw-bold mb-3 mt-5">
                CRYPTO  <br />
                <span className="text-info">PAYMENTS</span> <br />
                MADE EASY
              </h1>

              <p className="fs-5 mb-4">
                Seamlessly accept and send crypto payments with our cutting-edge platform, built for businesses, traders, and everyday users alike. Whether you're an entrepreneur looking to expand your payment options, a crypto investor managing digital assets, or even an explorer from another world —our gateway makes transactions fast, secure, and borderless.
              </p>

              <div className="d-flex gap-3 flex-wrap cta-buttons mb-4">
                <button className="btn btn-start btn-lg rounded-pill fw-semibold">
                  <i className="mdi mdi-rocket me-1"></i> Start Free Trial
                </button>
                <button className="btn btn-outline-info btn-lg rounded-pill fw-semibold">
                  <i className="mdi mdi-play-circle me-1"></i> Request Demo
                </button>
              </div>

              <div className="d-flex align-items-center trust-info mt-3">
                <div className="avatar-stack me-2">
                  <img src={photo} alt="avatar1" className="avatar avatar-1" />
                  <img src={photo1} alt="avatar2" className="avatar avatar-2" />
                  <img src={photo2} alt="avatar3" className="avatar avatar-3" />
                </div>
                <p className="mb-0 fw-semibold text-white trust-text">
                  10,000+ businesses trust Binaxpay
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="col-lg-6 order-1 order-lg-2 text-center image-slide">
              <img
                src={hero}
                alt="Crypto Safe"
                className="img-fluid float-animation"
                // style={{ maxWidth: "460px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-gradient-dark {
          background-color: rgb(7, 13, 70);
        }

        .hero-section {
          margin-top: -10px;
          z-index: 0;
        }

        .float-animation {
          animation: floatUpDown 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        @keyframes floatUpDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(-35px); }
          100% { transform: translateY(0); }
        }

        @keyframes slideInLeft {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInRight {
          0% { transform: translateX(50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        .text-slide {
          animation: slideInLeft 1s ease-out forwards;
        }

        .image-slide {
          animation: slideInRight 1s ease-out forwards;
        }

        .btn-start {
          background-color: #12896B !important;
          color: white !important;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .btn-start:hover {
          color: #12896B !important;
          border: 2px solid #12896B !important;
          background-color: transparent !important;
        }

        .avatar-stack {
          position: relative;
          width: 100px;
          height: 40px;
        }

        .avatar-stack .avatar {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid white;
        }

        .avatar-1 { left: 0; z-index: 3; }
        .avatar-2 { left: 25px; z-index: 2; }
        .avatar-3 { left: 50px; z-index: 1; }

        .trust-text {
          font-size: 0.875rem;
           
        }

        @media (max-width: 768px) {
          .text-slide {
            text-align: center;
          }

          .cta-buttons {
            justify-content: center !important;
          }

          .trust-info {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .trust-text {
            margin-left: 0;
            margin-top: 10px;
          }

          .avatar-stack {
            margin-bottom: 10px;
          }

          .float-animation {
            max-width: 90%;
            margin-bottom: 1rem;
            margin-top: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
