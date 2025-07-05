import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What cryptocurrencies does Bitsfar support?",
      answer:
        "Bitsfar currently supports over 50 cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), Bitcoin Cash (BCH), Cardano (ADA), Polkadot (DOT), and many more. We continuously add support for new cryptocurrencies based on market demand. You can view the full list of supported cryptocurrencies in your dashboard after signing up.",
    },
    {
      question: "How quickly are transactions processed?",
      answer:
        "Bitsfar processes transactions in near real-time. Most cryptocurrency transactions are confirmed within 30 seconds to 2 minutes, depending on the blockchain network. Our advanced routing technology ensures the fastest possible confirmation times by optimizing transaction fees and network selection automatically.",
    },
    {
      question: "Can I convert crypto to fiat automatically?",
      answer:
        "Yes! Bitsfar offers automatic conversion to fiat currencies (USD, EUR, GBP, etc.) at competitive exchange rates. You can choose to receive settlements in crypto or fiat, or a combination of both. Our system handles all the conversion automatically, and you can withdraw funds to your bank account with just a few clicks.",
    },
    {
      question: "What security measures are in place?",
      answer:
        "Bitsfar employs multiple layers of security including military-grade encryption, multi-signature wallets, cold storage for the majority of funds, two-factor authentication, and regular security audits. We also offer advanced fraud protection tools and customizable security settings to meet your specific business requirements.",
    },
    {
      question: "How do I integrate Bitsfar with my website?",
      answer:
        "Bitsfar offers several integration options to suit different technical requirements. For non-developers, we provide hosted payment pages and plugins for popular platforms like WooCommerce, Shopify, and Magento. Developers can use our comprehensive API documentation to build custom integrations. Most merchants can get set up in under an hour, and our support team is available to assist with any questions.",
    },
  ];

  return (
    <section
      className="faq-section light-section py-5"
      id="faq"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center" data-aos="fade-up">
            <h2 className="section-title fw-bold">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="lead text-muted">
              Get answers to common questions about Bitsfar's crypto payment
              gateway.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="row mt-5">
          <div className="col-lg-10 mx-auto">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div
                  className={`accordion-item border-0 mb-3 rounded ${
                    openIndex === index ? "shadow-sm" : ""
                  }`}
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button px-4 py-3 fw-semibold ${
                        openIndex === index ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => toggleFaq(index)}
                      style={{
                        backgroundColor: "#e8eafc",
                        color: "#001067",
                        borderRadius: "0.5rem",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {faq.question}
                      <span className="ms-auto">
                        {openIndex === index ? "▲" : "▼"}
                      </span>
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      openIndex === index ? "show" : ""
                    }`}
                  >
                    <div
                      className="accordion-body bg-white"
                      style={{
                        borderBottomLeftRadius: "0.5rem",
                        borderBottomRightRadius: "0.5rem",
                        padding: "1.25rem 1.5rem",
                        boxShadow:
                          openIndex === index
                            ? "0 8px 20px rgba(0, 0, 0, 0.08)"
                            : "none",
                      }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
