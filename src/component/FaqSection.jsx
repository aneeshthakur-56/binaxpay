import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from "framer-motion";

// FAQ Item Component
const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <div className={`faq-card ${isOpen ? "active" : ""}`}>
        <button
          className={`w-100 text-start px-4 py-4 border-0 faq-btn d-flex align-items-center justify-content-between ${isOpen ? "active-text" : ""}`}
          style={{ 
            fontWeight: "600", 
            fontSize: "18px", 
          }}
          onClick={onClick}
        >
          <span>{question}</span>
          <span className={`faq-chevron ${isOpen ? "active-chevron" : ""}`}>
            <i className="bi bi-chevron-down"></i>
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="px-4 pb-4" style={{ fontSize: "16px", color: "rgb(238, 231, 231)" }}>
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
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

  return (
    <>
      <style>{`
        .faq-section {
          background-color: #fff !important;
          color: #2b2b2b;
        }

        .faq-title-main {
          color: #2b2b2b !important;
        }

        .faq-title-accent {
          color: #12896B !important;
        }

        .faq-card {
          background-color: #1e6057 !important;
          border: 1px solid #2A2A2A !important;
          border-left: 3px solid transparent !important;
          border-radius: 12px;
          overflow: hidden;
          transition: border-left 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
        }

        .faq-card.active {
          border-left: 7px solid #605f5f !important;
        }

        .faq-btn {
          background: transparent !important;
          color: #E0E0E0 !important;
          transition: color 0.2s ease;
          outline: none !important;
        }

        .faq-btn:hover {
          color: #ffffff !important;
        }

        .faq-btn:hover .faq-chevron {
          color: #6FE6B8 !important;
        }

        .faq-btn.active-text {
          color: #ffffff !important;
        }

        .faq-chevron {
          font-size: 18px;
          color: #A3A3A3;
          transition: transform 0.25s ease, color 0.2s ease;
          display: inline-flex;
          align-items: center;
        }

        .faq-chevron.active-chevron {
          color: #6FE6B8 !important;
          transform: rotate(180deg) !important;
        }
      `}</style>

      <div className="container-fluid py-5 faq-section">
        {/* Heading */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold d-flex justify-content-center flex-wrap">
            <span className="faq-title-main">
              <span className="underline-span">Fr</span>equently Asked
            </span>
            <span className="faq-title-accent" style={{ marginLeft: "6px" }}>Questions</span>
          </h2>
          <p className="mt-3 fs-5" style={{ color: "rgb(115, 114, 114)" }}>
            Get answers to common questions about Binaxpay's crypto payment
            gateway.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto" style={{ maxWidth: "1000px" }}>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqSection;
