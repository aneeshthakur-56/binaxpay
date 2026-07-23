import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaDiscord,
} from "react-icons/fa";
import styles from "./css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="align-items-start">
          {/* Left */}
          <Col md={6}>
            <div className={styles.footerLogo}>
              <img src="/binaxpay.png" alt="Binaxpay" className={styles.footerLogoImage} />
            </div>
            <div className={styles.footerDescription}>
              The most advanced cryptocurrency payment gateway for modern
              businesses. Secure, fast, and cost-effective solutions for the
              digital economy.
            </div>
            <div className={styles.socialIcons}>
              <div className={styles.socialIcon}>
                <FaTwitter />
              </div>
              <div className={styles.socialIcon}>
                <FaLinkedin />
              </div>
              <div className={styles.socialIcon}>
                <FaGithub />
              </div>
              <div className={styles.socialIcon}>
                <FaTelegramPlane />
              </div>
              <div className={styles.socialIcon}>
                <FaDiscord />
              </div>
            </div>
          </Col>

          {/* Right */}
          <Col md={6} className="mt-5 mt-md-0 text-md-end">
            <div className={styles.footerSubscribeTitle}>
              Subscribe to Our Newsletter
            </div>
            <div className={styles.subscribeWrapper}>
              <input
                type="email"
                className={styles.subscribeInput}
                placeholder="Your email address"
              />
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>
          </Col>
        </Row>

        <div className={styles.footerBottom}>
          © 2025-2026 Binaxpay. All rights reserved. Wallet services and other virtual asset services provided by Hodltech OÜ or its partners.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
