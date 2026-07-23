import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const DEFAULT_FAQS = [
  {
    question: "What cryptocurrencies does Binaxpay support?",
    answer:
      "Binaxpay currently supports over 50 cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), Bitcoin Cash (BCH), Cardano (ADA), Polkadot (DOT), and many more. We continuously add support for new cryptocurrencies based on market demand.",
  },
  {
    question: "How quickly are transactions processed?",
    answer:
      "Binaxpay processes transactions in near real-time. Most cryptocurrency transactions are confirmed within 30 seconds to 2 minutes, depending on the blockchain network.",
  },
  {
    question: "Can I convert crypto to fiat automatically?",
    answer:
      "Yes! Binaxpay offers automatic conversion to fiat currencies at competitive exchange rates. You can choose to receive settlements in crypto or fiat.",
  },
  {
    question: "What security measures are in place?",
    answer:
      "Binaxpay employs multiple layers of security including military-grade encryption, multi-signature wallets, cold storage, and two-factor authentication.",
  },
  {
    question: "How do I integrate Binaxpay with my website?",
    answer:
      "Binaxpay offers hosted payment pages, plugins for WooCommerce/Shopify/Magento, and API options for developers. Most merchants can set up in under an hour.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        .faq-section {
          background-color: #ebebec !important;
          color: #1a1a1a;
          padding: 80px 20px;
        }

        .faq-title-main {
          color: #1a1a1a !important;
        }

        .faq-title-accent {
          color: #12896B !important;
        }

        .faq-list {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .faq-item {
          width: 100%;
          position: relative;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .faq-item:last-child {
          border-bottom: none;
        }

        .faq-trigger {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          min-height: 64px;
          padding: 18px 20px 18px 58px;
          position: relative;
          margin: 0;
          cursor: pointer;
          border: none;
          border-left: 4px solid transparent;
          background: transparent;
          color: #444444;
          text-align: left;
          outline: none;
          font-size: 1.1rem;
          font-weight: 500;
          transition: color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
          will-change: auto;
        }

        @media (min-width: 768px) {
          .faq-trigger {
            font-size: 1.2rem;
            padding-left: 64px;
          }
        }

        .faq-trigger:hover {
          color: #1a1a1a;
          border-left-color: rgba(18, 137, 107, 0.4);
          background: rgba(18, 137, 107, 0.04);
        }

        .faq-trigger.is-active {
          border-left-color: #12896B;
          background: rgba(18, 137, 107, 0.08);
          color: #1a1a1a;
          font-weight: 700;
        }

        .faq-pm-symbol {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          line-height: 1;
          font-family: inherit;
          user-select: none;
          font-size: 24px;
          font-weight: 400;
          color: #666666;
          transition: color 0.25s ease;
        }

        @media (min-width: 768px) {
          .faq-pm-symbol {
            left: 22px;
          }
        }

        .faq-trigger.is-active .faq-pm-symbol {
          color: #12896B;
        }

        .faq-chevron-arrow {
          position: absolute;
          right: 22px;
          display: block;
          width: 9px;
          height: 9px;
          border-top: 2.5px solid #666666;
          border-right: 2.5px solid #666666;
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 0.25s ease;
          flex-shrink: 0;
        }

        .faq-chevron-arrow.closed {
          transform: rotate(133deg);
        }

        .faq-chevron-arrow.open {
          transform: rotate(-44deg);
          border-color: #12896B;
        }

        /* Answer content - no grid animation, pure Framer Motion */
        .faq-answer-wrapper {
          overflow: hidden;
          border-left: 4px solid transparent;
          background: transparent;
        }

        .faq-answer-wrapper.is-active {
          border-left-color: #12896B;
          background: rgba(18, 137, 107, 0.03);
        }

        .faq-answer-box {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          padding: 8px 24px 24px 58px;
          font-size: 1.05rem;
          font-weight: 400;
          color: #444444;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .faq-answer-box {
            padding-left: 64px;
            font-size: 1.1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-trigger,
          .faq-chevron-arrow,
          .faq-pm-symbol {
            transition: none !important;
          }
        }
      `}</style>

      <div className="container-fluid py-5 faq-section" id="faq">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold d-flex justify-content-center flex-wrap">
            <span className="faq-title-main">
              <span className="underline-span">Fr</span>equently Asked
            </span>
            <span className="faq-title-accent" style={{ marginLeft: "8px" }}>Questions</span>
          </h2>
          <p className="mt-3 fs-5" style={{ color: "#555555" }}>
            Get answers to common questions about Binaxpay's crypto payment gateway.
          </p>
        </div>

        {/* FAQ List */}
        <ul className="faq-list">
          {DEFAULT_FAQS.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <li
                key={index}
                className="faq-item"
              >
                <button
                  className={`faq-trigger ${isActive ? "is-active" : ""}`}
                  onClick={() => toggleItem(index)}
                  aria-expanded={isActive}
                >
                  <span className="faq-pm-symbol">
                    {isActive ? "−" : "+"}
                  </span>

                  <span style={{ paddingRight: "32px" }}>{faq.question}</span>

                  <span
                    className={`faq-chevron-arrow ${isActive ? "open" : "closed"}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      className="faq-answer-wrapper is-active"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                        opacity: { duration: 0.25, ease: "easeInOut" },
                      }}
                      style={{ willChange: "height, opacity", transform: "translateZ(0)" }}
                    >
                      <div className="faq-answer-box">
                        <span>{faq.answer}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FaqSection;