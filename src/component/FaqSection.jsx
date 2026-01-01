import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// FAQ Item Component
const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <div
        className="bg-white rounded shadow"
        style={{ transition: "all 0.3s ease" }}
      >
        <button
          className="w-100 text-start px-4 py-4 border-0 bg-white rounded"
          style={{ fontWeight: "600", fontSize: "18px", color: "#1c1c1c" }}
          onClick={onClick}
        >
          {question}
          <span className="float-end" style={{ fontSize: "20px" }}>
            {isOpen ? "▲" : "▼"}
          </span>
        </button>

        {isOpen && (
          <div className="px-4 pb-4 text-muted" style={{ fontSize: "16px" }}>
            {answer}
          </div>
        )}
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
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#efefef" }}
    >
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold d-flex justify-content-center flex-wrap">
          <span style={{ position: "relative", display: "inline-block" }}>
            <span style={{ color: "#2e2e2e" }}>Fr</span>
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "4px",
                backgroundColor: "#000066",
                borderRadius: "2px",
              }}
            />
          </span>
          <span style={{ color: "#2e2e2e" }}>equently Asked</span>
          <span style={{ color: "#000066", marginLeft: "6px" }}>Questions</span>
        </h2>
        <p className="text-muted mt-3" style={{ fontSize: "18px" }}>
          Get answers to common questions about Bitsfar's crypto payment
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
  );
};

export default FaqSection;
