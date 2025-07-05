


import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background-color: #14142b;
          color: white;
          padding: 70px 0 40px;
        }

        .footer h5 {
          font-weight: 700;
          font-size: 24px;
        }

        .footer p {
          color: #ccc;
          margin-top: 15px;
          font-size: 16px;
        }

        .footer .social-icons svg {
          // background-color:rgb(91, 204, 245);
          color: white;
          padding: 10px;
          border-radius: 50%;
          margin-right: 12px;
          font-size: 24px;
          transition: transform 0.3s;
        }

        .footer .social-icons svg:hover {
          transform: translateY(-4px);
        }

        .footer input {
          background-color: #0d0d0d;
          border: none;
          color: white;
          padding: 14px 20px;
          width: 100%;
          border-radius: 0;
        }

        .footer input::placeholder {
          color: #aaa;
        }

        .footer .subscribe-btn {
          background-color: #00008B;
          border: none;
          border-radius: 30px;
          padding: 14px 30px;
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid #2c2c3a;
          margin-top: 50px;
          padding-top: 20px;
          color: #bbb;
          font-size: 14px;
        }
      `}</style>

      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            {/* Left Side */}
            <Col md={6}>
              <h5>BITSFAR</h5>
              <p>
                The most advanced cryptocurrency payment gateway for modern businesses. <br />
                Secure, fast, and cost-effective solutions for the digital economy.
              </p>
              <div className="social-icons mt-4">
                <FaTwitter size={40} color="white" />
                <FaLinkedin  size={40} color="white" />
                <FaGithub  size={40} color="white"/>
                <FaTwitter style={{ opacity: 0.3 }} />
                {/* <FaLinkedin style={{ opacity: 0.3 }} /> */}
              </div>
            </Col>

          
            <Col md={6} className="text-md-end mt-5 mt-md-0">
              <h6 className="mb-3 fw-bold" style={{ fontSize: "17px" }}>
                Subscribe to Our Newsletter
              </h6>
              <div className="d-flex">
                <Form.Control type="email" placeholder="Your email address" className="me-2" />
                <Button className="subscribe-btn">Subscribe</Button>
              </div>
            </Col>
          </Row>

          <div className="footer-bottom text-center mt-5">
            © 2023 Bitsfar. All rights reserved. Cryptocurrency services are provided by Bitsfar Technologies AG.
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;

