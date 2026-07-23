import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaDiscord,
  FaPaperPlane,
} from "react-icons/fa";
import styles from "./css/ContactSection.module.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ContactSection = () => {
  const [emailHovered, setEmailHovered] = useState(false);

  return (
    <section className={styles.contactSection} id="contact">
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
                <span className={styles.underlineSpan}>Ge</span>t In
              </span>
              <span className={styles.textAccent} style={{ marginLeft: "6px" }}>
                Touch
              </span>
            </h2>
            <p className="lead mt-4" style={{ color: "#A3A3A3" }}>
              Have questions? Our team is here to help you with any inquiries.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="row mt-5 g-4 align-items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Contact Form Card */}
          <motion.div className="col-lg-6 d-flex flex-column" variants={fadeUpVariants}>
            <div className={`${styles.contactInfoCard} ${styles.noFloat} w-100 h-100 d-flex flex-column justify-content-between`}>
              <form className="h-100 d-flex flex-column justify-content-between">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className={styles.contactFormControl}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className={styles.contactFormControl}
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className={styles.contactFormControl}
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      rows="4"
                      className={styles.contactFormControl}
                      placeholder="Your Message"
                      style={{ resize: "vertical", minHeight: "110px" }}
                    ></textarea>
                  </div>
                </div>
                <div className="mt-4">
                  <button type="submit" className={styles.contactBtn}>
                    <FaPaperPlane size={16} />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Info & Social Links Card */}
          <motion.div className="col-lg-6 d-flex flex-column" variants={fadeUpVariants}>
            <div className={`${styles.contactInfoCard} w-100 h-100 d-flex flex-column justify-content-between`}>
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <h4 className="fw-bold mb-3" style={{ fontSize: "1.25rem", color: "#6FE6B8" }}>
                    Get In Touch Directly
                  </h4>
                  <p style={{ color: "#A3A3A3", fontSize: "0.95rem", lineHeight: "1.6" }} className="mb-4">
                    Whether you have questions about integration, pricing plans, or customized payment solutions for your business, reach out to us anytime.
                  </p>
                </div>

                {/* Centered Email Block */}
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3">
                    <div
                      className={styles.infoIconBox}
                      onMouseEnter={() => setEmailHovered(true)}
                      onMouseLeave={() => setEmailHovered(false)}
                    >
                      {emailHovered ? (
                        <FaEnvelopeOpen className={styles.infoIconSvg} />
                      ) : (
                        <FaEnvelope className={styles.infoIconSvg} />
                      )}
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1" style={{ fontSize: "1.05rem", fontWeight: 600 }}>Email</h5>
                    <div style={{ color: "#A3A3A3", fontSize: "0.95rem" }}>
                      <div>info@Binaxpay.com</div>
                      <div>support@Binaxpay.com</div>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="mt-4 pt-4 border-top border-secondary border-opacity-25">
                  <h5 className="mb-3" style={{ fontSize: "1.05rem", fontWeight: 600 }}>Follow Us</h5>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="#" className={styles.socialIcon} aria-label="Twitter">
                      <FaTwitter />
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="GitHub">
                      <FaGithub />
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="Telegram">
                      <FaTelegramPlane />
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="Discord">
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
  );
};

export default ContactSection;