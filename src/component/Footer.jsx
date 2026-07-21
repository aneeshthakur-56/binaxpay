import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background-color: #1a1a2e;
          color: #ffffff;
          padding: 80px 0 30px;
          font-family: 'Segoe UI', sans-serif;
        }

        .footer-logo {
          font-size: 32px;
          font-weight: 800;
          font-family: 'Space Grotesk', sans-serif;
        }

        .footer-logo .highlight {
          color: #00f5ff;
        }

        .footer-description {
          color: #d1d1d1;
          margin-top: 20px;
          font-size: 17px;
          line-height: 1.8;
          max-width: 520px;
        }

        .social-icons {
          margin-top: 30px;
          display: flex;
          gap: 16px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #1d1d3a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease;
          color: #ffffff;
          cursor:pointer;
        }

        .social-icon:hover {
          background-color:#00f0ff;
          transform: translateY(-2px);
        }

        .footer-subscribe-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #ffffff;
        }

        .subscribe-wrapper {
          display: flex;
          align-items: stretch;
          max-width: 500px;
          width: 100%;
          margin-left: auto;
          background-color: transparent;
          border-radius: 50px;
          overflow: hidden;
          border: 1px solid #2A2A2A;
          padding: 0;
          transition: all 0.3s ease;
        }

        .subscribe-wrapper:focus-within {
          border-color: #6FE6B8 !important;
          box-shadow: 0 0 0 0.35rem rgba(111, 230, 184, 0.16) !important;
        }

        .subscribe-input {
          flex: 1;
          min-width: 0;
          border: none !important;
          background-color: #225750 !important;
          color: #fff !important;
          padding: 14px 20px !important;
          font-size: 16px;
          border-radius: 50px 0 0 50px;
        }

        .subscribe-input:focus {
          outline: none !important;
          border: none !important;
          box-shadow: none !important;
          background-color: #225750 !important;
          color: #fff !important;
        }

        .subscribe-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .subscribe-button {
          flex-shrink: 0;
          background-color: #12896B;
          color: white;
          border: none;
          padding: 14px 28px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 0 50px 50px 0;
          cursor: pointer;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease-in-out;
        }

        .subscribe-button:hover {
          background-color: #acacb5;
          color: #12896B;
          box-shadow: 0 0 10px rgba(3, 42, 32, 0.4);
        }

        .footer-bottom {
          margin-top: 60px;
          padding-top: 20px;
          border-top: 1px solid #2a2a44;
          text-align: center;
          font-size: 20px;
          color: #fffff;
        }

        @media (max-width: 770px) {
          .subscribe-wrapper {
            margin-left: 0;
            margin-right: auto;
          }
          
          .footer-subscribe-title {
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .subscribe-input {
            padding: 12px 14px !important;
            font-size: 14px;
          }

          .subscribe-button {
            padding: 12px 18px;
            font-size: 14px;
          }
        }
      `}</style>

      <footer className="footer">
        <Container>
          <Row className="align-items-start">
            {/* Left */}
            <Col md={6}>
              <div className="footer-logo">
                BINA<span className="highlight">X PAY</span>
              </div>
              <div className="footer-description">
                The most advanced cryptocurrency payment gateway for modern
                businesses. Secure, fast, and cost-effective solutions for the
                digital economy.
              </div>
              <div className="social-icons">
                <div className="social-icon">
                  <FaTwitter />
                </div>
                <div className="social-icon">
                  <FaLinkedin />
                </div>
                <div className="social-icon">
                  <FaGithub />
                </div>
                <div className="social-icon">
                  <FaTelegramPlane />
                </div>
                <div className="social-icon">
                  <FaDiscord />
                </div>
              </div>
            </Col>

            {/* Right */}
            <Col md={6} className="mt-5 mt-md-0 text-md-end">
              <div className="footer-subscribe-title">
                Subscribe to Our Newsletter
              </div>
              <div className="subscribe-wrapper">
                <input
                  type="email"
                  className="subscribe-input"
                  placeholder="Your email address"
                />
                <button className="subscribe-button">Subscribe</button>
              </div>
            </Col>
          </Row>

          <div className="footer-bottom mt-5">
            © 2022-2025 Binaxpay. All rights reserved. Wallet services and other virtual asset services provided by Hodltech OÜ or its partners.
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
