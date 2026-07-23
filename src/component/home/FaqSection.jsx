import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/FaqSection.module.css";

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
    question: "Are there any hidden fees?",
    answer:
      "No! Binaxpay operates on transparent, flat-rate pricing. You only pay the percentage fee per transaction outlined in your plan. There are no setup fees, monthly maintenance fees, or hidden costs.",
  },
  {
    question: "How do I integrate Binaxpay into my website?",
    answer:
      "Integration is easy! We offer pre-built plugins for popular e-commerce platforms like WooCommerce, Shopify, and Magento. For custom websites, our REST APIs and SDKs allow full integration in just a few lines of code.",
  },
  {
    question: "Is Binaxpay secure?",
    answer:
      "Security is our top priority. We use bank-grade encryption, multi-signature wallets, and cold storage to safeguard digital assets. Our platform is audited regularly by independent security firms.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`container-fluid py-5 ${styles.faqSection}`} id="faq">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold d-flex justify-content-center flex-wrap">
          <span className={styles.faqTitleMain}>
            <span className={styles.underlineSpan}>Fr</span>equently Asked
          </span>
          <span className={styles.faqTitleAccent} style={{ marginLeft: "8px" }}>Questions</span>
        </h2>
        <p className="mt-3 fs-5" style={{ color: "#555555" }}>
          Get answers to common questions about Binaxpay's crypto payment gateway.
        </p>
      </div>

      {/* FAQ List */}
      <ul className={styles.faqList}>
        {DEFAULT_FAQS.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <li key={index} className={styles.faqItem}>
              <button
                className={`${styles.faqTrigger} ${isActive ? styles.isActive : ""}`}
                onClick={() => toggleItem(index)}
                aria-expanded={isActive}
              >
                <span className={styles.faqPmSymbol}>
                  {isActive ? "−" : "+"}
                </span>

                <span style={{ paddingRight: "32px" }}>{faq.question}</span>

                <span
                  className={`${styles.faqChevronArrow} ${isActive ? styles.open : styles.closed}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    className={`${styles.faqAnswerWrapper} ${styles.isActive}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                      opacity: { duration: 0.25, ease: "easeInOut" },
                    }}
                    style={{ willChange: "height, opacity", transform: "translateZ(0)" }}
                  >
                    <div className={styles.faqAnswerBox}>
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
  );
};

export default FaqSection;