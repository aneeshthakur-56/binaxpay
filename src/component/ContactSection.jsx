import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaClock,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaDiscord,
  FaPaperPlane,
} from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ContactSection = () => {
  const [emailHovered, setEmailHovered] = useState(false);

  return (
    <>
      <style>{`
        .contact-section {
          background: linear-gradient(135deg, #0A0A0A 0%, #0D1F1A 50%, #0A0A0A 100%);
          color: #fff;
          padding: 80px 0;
        }

        .text-accent {
          color: #2DD9A8;
        }

        .contact-form-control {
          background-color: #225750;
          border: 1px solid #BCB9B9;
          color: #fff;
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 1rem;
          width: 100%;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .contact-form-control::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .contact-form-control:focus {
          outline: none;
          border-color: #6FE6B8;
          box-shadow: 0 0 0 3px rgba(111, 230, 184, 0.15);
          background-color: #225750;
          color: #fff;
        }

        .contact-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: #12896B;
          border: 2px solid #12896B;
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          padding: 14px 32px;
          border-radius: 12px;
          cursor: pointer;
          transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
        }

        .contact-btn:hover {
          background-color: transparent;
          color: #12896B;
          transform: translateY(-2px);
        }

        .contact-btn:active {
          transform: translateY(0);
        }

        @keyframes contactCardFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .contact-info-card {
          background-color: #225750;
          border-radius: 16px;
          padding: 30px;
          height: 100%;
          border: 1px solid rgba(111, 230, 184, 0.1);
          animation: contactCardFloat 4.5s ease-in-out infinite;
          will-change: transform;
          transition: transform 0.4s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        @keyframes iconInsideFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .contact-info-card:hover {
          animation-play-state: paused;
          transform: translateY(-10px) scale(1.01);
          border-color: #6FE6B8 !important;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45), 0 0 25px rgba(111, 230, 184, 0.25) !important;
        }

        .info-block {
          display: flex;
          gap: 15px;
          margin-bottom: 25px;
        }

        .info-icon-box {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transition: border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .info-icon-box:hover {
          border-color: #6FE6B8;
          background-color: rgba(111, 230, 184, 0.1);
          box-shadow: 0 0 16px rgba(111, 230, 184, 0.25);
        }

        .info-icon-svg {
          font-size: 1.3rem;
          color: #12896B;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .info-icon-box:hover .info-icon-svg {
          color: #fff;
          animation: iconInsideFloat 1.4s ease-in-out infinite;
        }

        .section-title {
          color: white;
        }

        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.7);
          margin-right: 10px;
          font-size: 18px;
          transition: background-color 0.25s ease, color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .social-icon:hover {
          background-color: #1FBF8F;
          color: #000;
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(31, 191, 143, 0.35);
        }

        .social-icon:active {
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 60px 16px;
          }
          .contact-info-card {
            padding: 24px 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-btn,
          .contact-info-card,
          .info-icon-box,
          .social-icon {
            transition: none;
          }
          .contact-btn:hover,
          .social-icon:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="container">
          <motion.div
            className="row justify-content-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div className="col-lg-8 text-center" variants={fadeUpVariants}>
              <h2 className="fw-bold d-flex justify-content-center flex-wrap">
                <span>
                  <span className="underline-span">Ge</span>t In
                </span>
                <span style={{ color: "#12896B", marginLeft: "6px" }}>
                  Touch
                </span>
              </h2>
              <p className="lead mt-4" style={{ color: "#A3A3A3" }}>
                Have questions? Our team is here to help you with any inquiries.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="row mt-5 align-items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {/* Contact Form */}
            <motion.div className="col-lg-6 mb-4 mb-lg-0" variants={fadeUpVariants}>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="contact-form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="contact-form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="contact-form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      rows="5"
                      className="contact-form-control"
                      placeholder="Your Message"
                      style={{ resize: "vertical", minHeight: "120px" }}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="contact-btn">
                      <FaPaperPlane size={16} />
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>

            {/* Info Column */}
            <motion.div className="col-lg-6 mt-5 mt-lg-0" variants={fadeUpVariants}>
              <div className="contact-info-card">
                <div className="row g-4">
                  {/* Email */}
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="me-3">
                        <div
                          className="info-icon-box"
                          onMouseEnter={() => setEmailHovered(true)}
                          onMouseLeave={() => setEmailHovered(false)}
                        >
                          {emailHovered ? (
                            <FaEnvelopeOpen className="info-icon-svg" />
                          ) : (
                            <FaEnvelope className="info-icon-svg" />
                          )}
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-2" style={{ fontSize: "1.05rem", fontWeight: 600 }}>Email</h5>
                        <p className="mb-1" style={{ color: "#A3A3A3", fontSize: "0.95rem" }}>info@Binaxpay.com</p>
                        <p className="mb-0" style={{ color: "#A3A3A3", fontSize: "0.95rem" }}>support@Binaxpay.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="col-12 mt-4">
                    <h5 className="mb-3" style={{ fontSize: "1.05rem", fontWeight: 600 }}>Follow Us</h5>
                    <div className="d-flex flex-wrap">
                      <a href="#" className="social-icon" aria-label="Twitter">
                        <FaTwitter />
                      </a>
                      <a href="#" className="social-icon" aria-label="LinkedIn">
                        <FaLinkedin />
                      </a>
                      <a href="#" className="social-icon" aria-label="GitHub">
                        <FaGithub />
                      </a>
                      <a href="#" className="social-icon" aria-label="Telegram">
                        <FaTelegramPlane />
                      </a>
                      <a href="#" className="social-icon" aria-label="Discord">
                        <FaDiscord />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;