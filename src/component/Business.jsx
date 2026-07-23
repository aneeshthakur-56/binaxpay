import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

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
      ease: [0.25, 0.46, 0.45, 0.94], // smooth cubic-bezier
    },
  },
};

const Business = () => {
  return (
    <>
      <style>{`
        .benefit-section {
          background: radial-gradient(circle at 50% 50%, #0a1f18 0%, #0A0A0A 100%);
          padding: 100px 20px;
          color: white;
          text-align: center;
        }

        .benefit-heading {
          font-size: 2.8rem;
          font-weight: 700;
          display: inline-block;
          position: relative;
          color: #ffffff !important;
        }

        .benefit-heading .text-accent {
          color: #12896B !important;
        }
        .text-accent {
          color: #2DD9A8 !important;
        }

        .benefit-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-top: 60px;
        }

        .benefit-box {
          background-color: #3fd8c463;
          border-radius: 16px;
          padding: 30px;
          text-align: left;
          color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(111, 230, 184, 0.15);
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        .benefit-box:hover {
          border-color: #1FBF8F;
          box-shadow: 0 0 20px rgba(31, 191, 143, 0.38);
        }

        .benefit-icon {
          font-size: 36px;
          color: #6FE6B8;
          margin-bottom: 15px;
        }

        .benefit-title {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .benefit-description {
          margin-top: 10px;
          color: #cac8c8;
        }

        @media (max-width: 768px) {
          .benefit-grid {
            grid-template-columns: 1fr;
          }

          .benefit-heading {
            font-size: 2.2rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .benefit-box {
            transition: none;
            will-change: auto;
          }
        }
      `}</style>

      <div className="benefit-section">
        <h2 className="benefit-heading" data-aos="fade-up">
          Why Your Business Needs <span className="text-accent">Crypto Payments</span>
        </h2>
        <p className="mb-5 mt-2 fs-5" style={{ color: "#A3A3A3" }} data-aos="fade-up" data-aos-delay="100">
          Discover how Binaxpay can transform your payment processing and grow
          your business.
        </p>

        <div className="container">
          <motion.div
            className="benefit-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-box h-100"
                variants={itemVariants}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.25, ease: "easeOut" }
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="benefit-icon mb-0 me-3" style={{ display: "inline-flex" }}>
                    <i className={`mdi ${benefit.icon}`}></i>
                  </div>
                  <h5 className="benefit-title mb-0">{benefit.title}</h5>
                </div>
                <p className="benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Business;