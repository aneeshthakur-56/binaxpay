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

const Business = () => {
  return (
    <>
      <style>{`
        .benefit-section {
          background: linear-gradient(to bottom right, #05052e, #0d0d4f);
          padding: 100px 20px;
          color: white;
          text-align: center;
        }

        .benefit-heading {
          font-size: 2.8rem;
          font-weight: 700;
          display: inline-block;
          position: relative;
        }

        .underline-span {
          position: relative;
          display: inline-block;
          margin-right: 6px;
        }

        .underline-span::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: #12896B;
          border-radius: 5px;
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
          background-color: #0c0c21;
          border-radius: 16px;
          padding: 30px;
          text-align: left;
          color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .benefit-box:hover {
          border-color: #1FBF8F;
          box-shadow: 0 0 12px rgba(31, 191, 143, 0.38);
          animation: floatUpDown 1.2s ease-in-out infinite;
        }

        @keyframes floatUpDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        .benefit-icon {
          font-size: 36px;
          color: #00e5ff;
          margin-bottom: 15px;
        }

        .benefit-title {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .benefit-description {
          margin-top: 10px;
          color: #cccccc;
        }

        @media (max-width: 768px) {
          .benefit-grid {
            grid-template-columns: 1fr;
          }

          .benefit-heading {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <div className="benefit-section">
        <h2 className="benefit-heading">
          <span className="underline-span fw-bold">Bu</span>siness{" "}
          <span className="text-accent">Benefits</span>
        </h2>
        <p className="mb-5 mt-2 fs-5 text-white">
          Discover how Binaxpay can transform your payment processing and grow
          your business.
        </p>

        <div className="container">
          <div className="benefit-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-box h-100"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="benefit-icon">
                  <i className={`mdi ${benefit.icon}`}></i>
                </div>
                <h5 className="benefit-title">{benefit.title}</h5>
                <p className="benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;
