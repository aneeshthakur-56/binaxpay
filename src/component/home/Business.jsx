import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/Business.module.css";

const benefits = [
  {
    icon: "mdi-earth",
    title: "Global Reach",
    description:
      "Accept payments from customers anywhere in the world without worrying about currency conversions or international transaction fees. Cryptocurrency knows no borders.",
  },
  {
    icon: "mdi-cash-multiple",
    title: "Lower Costs",
    description:
      "Reduce payment processing fees by up to 80% compared to traditional credit card processors. No chargebacks, no hidden fees, just transparent pricing.",
  },
  {
    icon: "mdi-shield-check",
    title: "Fraud Prevention",
    description:
      "Blockchain transactions are irreversible and secure by design. Eliminate chargeback fraud and reduce payment disputes to near zero.",
  },
  {
    icon: "mdi-account-group",
    title: "New Customers",
    description:
      "Attract tech-savvy customers who prefer paying with cryptocurrency. Crypto users tend to spend more and be more loyal to businesses that accept their preferred payment method.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Business = () => {
  return (
    <div className={styles.benefitSection}>
      <h2 className={styles.benefitHeading} data-aos="fade-up">
        Why Your Business Needs <span className={styles.textAccent}>Crypto Payments</span>
      </h2>
      <p className={`mb-5 mt-2 fs-5 ${styles.benefitSubtext}`} data-aos="fade-up" data-aos-delay="100">
        Discover how Binaxpay can transform your payment processing and grow
        your business.
      </p>

      <div className="container">
        <motion.div
          className={styles.benefitGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`${styles.benefitBox} h-100`}
              variants={itemVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: "easeOut" }
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <div className={`${styles.benefitIcon} mb-0 me-3`} style={{ display: "inline-flex" }}>
                  <i className={`mdi ${benefit.icon}`}></i>
                </div>
                <h5 className={`${styles.benefitTitle} mb-0`}>{benefit.title}</h5>
              </div>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Business;