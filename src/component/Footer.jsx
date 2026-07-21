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
          max-width: 500px;
          margin-left: auto;
          background: transparent;
          border-radius: 50px;
          overflow: hidden;
          border: 1px solid #333;
          transition: border-color 0.3s ease;
        }

        .subscribe-wrapper:focus-within {
          border-color: #12896B;
        }

        .subscribe-input {
          flex: 1;
          border: none;
          background-color: #0b100f;
          color: #fff;
          padding: 16px 20px;
          font-size: 16px;
          border-radius: 50px 0 0 50px;
        }

        .subscribe-input:focus {
          outline: none !important;
        }

        .subscribe-input::placeholder {
          color: #888;
        }

        .subscribe-button {
          background-color: #12896B;
          color: white;
          border: 2px solid transparent;
          padding: 0 30px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 0 50px 50px 0;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .subscribe-button:hover {
          background-color: transparent !important;
          color: #12896B !important;
          box-shadow: inset 0 0 0 2px #12896B !important;
        }

        .footer-bottom {
          margin-top: 60px;
          padding-top: 20px;
          border-top: 1px solid #2a2a44;
          text-align: center;
          font-size: 20px;
          color: #fffff;
        }

        @media (max-width: 767px) {
          .subscribe-wrapper {
            flex-direction: column;
            border-radius: 20px;
          }

          .subscribe-input {
            border-radius: 20px 20px 0 0;
          }

          .subscribe-button {
            border-radius: 0 0 20px 20px;
            width: 100%;
            margin-top: 10px;
          }

          .footer-subscribe-title {
            text-align: left;
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
