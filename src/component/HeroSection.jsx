import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hero from "../assets/Image/hero.png";
import photo from "../assets/Image/photo.jpg";
import photo1 from "../assets/Image/photo1.jpg";
import photo2 from "../assets/Image/photo2.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="container text-white py-7 py-lg-5 px-3 px-lg-4 d-flex align-items-center">
          <div className="row align-items-center justify-content-center w-100">
            {/* Text Column */}
            <div className="col-lg-6 order-2 order-lg-1 text-slide" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-3">
                CRYPTO <br />
                <span className="text-brand">PAYMENTS</span> <br />
                MADE EASY
              </h1>

              <p className="hero-subtext mb-4">
                Seamlessly accept and send crypto payments with our cutting-edge platform, built for businesses, traders, and everyday users alike. Whether you're an entrepreneur looking to expand your payment options, a crypto investor managing digital assets, or even an explorer from another world —our gateway makes transactions fast, secure, and borderless.
              </p>

              <div className="d-flex gap-3 flex-wrap cta-buttons mb-4">
                <button className="btn btn-start btn-lg rounded-pill fw-semibold">
                  <i className="mdi mdi-rocket me-1"></i> Start Free Trial
                </button>
                <button className="btn btn-outline-brand btn-lg rounded-pill fw-semibold">
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
            <div className="col-lg-6 order-1 order-lg-2 text-center image-slide" data-aos="fade-left">
              <img
                src={hero}
                alt="Crypto Safe"
                className="img-fluid float-animation"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 180px 20px 80px;
          position: relative;
          background: linear-gradient(135deg, #0A0A0A 0%, #12352E 50%, #0A0A0A 100%);
          min-height: 80vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .text-slide {
          text-align: left;
          padding-right: 40px;
        }

        .text-slide h1 {
          letter-spacing: 1px;
          line-height: 1.1;
          text-align: left;
        }

        .text-brand {
          background: linear-gradient(135deg, #6FE6B8 0%, #2E9F97 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: #6FE6B8;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtext {
          font-size: clamp(0.85rem, 0.75rem + 1vw, 1.25rem);
          line-height: 1.6;
          color: #A3A3A3;
        }

        .cta-buttons {
          justify-content: flex-start;
        }

        .trust-info {
          justify-content: flex-start;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 150px 20px 60px;
          }

          .text-slide {
            text-align: center;
            padding-right: 0;
            margin-bottom: 30px;
          }

          .text-slide h1 {
            text-align: center;
          }

          .cta-buttons {
            justify-content: center;
          }

          .trust-info {
            justify-content: center;
          }

          .image-slide {
            margin-top: 30px;
          }
        }

        .avatar-stack {
          display: flex;
          align-items: center;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #0A0A0A;
          object-fit: cover;
        }

        .avatar-2,
        .avatar-3 {
          margin-left: -12px;
        }

        .btn-start {
          background: linear-gradient(135deg, #6FE6B8 0%, #2E9F97 100%);
          color: #0A0A0A !important;
          border: none;
          padding: 12px 28px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(111, 230, 184, 0.3);
        }

        .btn-start:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(111, 230, 184, 0.4);
          background: linear-gradient(135deg, #2E9F97 0%, #6FE6B8 100%);
        }

        .btn-outline-brand {
          background: transparent;
          border: 2px solid #6FE6B8;
          color: #6FE6B8;
          padding: 12px 28px;
          transition: all 0.3s ease;
        }

        .btn-outline-brand:hover {
          background: linear-gradient(135deg, #6FE6B8 0%, #2E9F97 100%);
          color: #0A0A0A;
          border-color: transparent;
        }

        .float-animation {
          animation: float 4s ease-in-out infinite;
          max-width: 100%;
          height: auto;
          max-height: 600px;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </>
  );
};

export default HeroSection;