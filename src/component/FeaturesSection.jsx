import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const features = [
  {
    icon: (
      <i
        className="mdi mdi-shield-lock-outline"
        style={{ fontSize: "28px", color: "#6FE6B8" }}
      ></i>
    ),
    title: "Military-Grade Security",
    description:
      "Binaxpay employs advanced encryption, multi-signature wallets, and cold storage to ensure your transactions and funds are always protected against threats.",
  },
  {
    icon: (
      <i
        className="mdi mdi-speedometer"
        style={{ fontSize: "28px", color: "#6FE6B8" }}
      ></i>
    ),
    title: "Lightning Fast Transactions",
    description:
      "Our optimized blockchain routing ensures your payments are processed in seconds, not minutes. Avg. confirmation under 30 seconds.",
  },
  {
    icon: (
      <i
        className="mdi mdi-tag-outline"
        style={{ fontSize: "28px", color: "#6FE6B8" }}
      ></i>
    ),
    title: "Lowest Fees in Industry",
    description:
      "Enjoy transaction fees up to 70% lower than competitors. Volume discounts available with our efficient infrastructure.",
  },
  {
    icon: (
      <i
        className="mdi mdi-cube-outline"
        style={{ fontSize: "28px", color: "#6FE6B8" }}
      ></i>
    ),
    title: "Global Reach",
    description:
      "Accept crypto payments from customers in over 150 countries around the world with localized support.",
  },
  {
    icon: (
      <i
        className="mdi mdi-chart-areaspline"
        style={{ fontSize: "28px", color: "#6FE6B8" }}
      ></i>
    ),
    title: "Easy Integration",
    description:
      "Simple API & plugins for Shopify, WooCommerce, and more. Go live in minutes, not weeks.",
  },
  {
    icon: (
      <i
        className="mdi mdi-code-braces"
        style={{ fontSize: "28px", color: "#6FE6B8" }}
      ></i>
    ),
    title: "Real-time Analytics",
    description:
      "Track all your transactions, revenue, and customer data with our powerful analytics dashboard.",
  },
];

const FeaturesSection = () => {
  return (
    <>
      <style>{`
        .features-heading-section {
          background-color: #ebebec;
          padding: 100px 20px 80px;
        }

        .section-title {
          font-size: 2.5rem;
          color: #2b2b2b !important;
        }

        .powerful {
        color:#2b2b2b !important;
        }

        .highlight {
          color: #000066;
        }

        .underlined {
          position: relative;
          display: inline-block;
          padding-bottom: 5px;
        }

        .underlined::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 4px;
          background-color: #12896B;
        }

        .section-subtext {
          font-size: 1.25rem;
          color: #444;
          max-width: 750px;
          margin: 0 auto;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 60px;
        }

        .feature-card {
          background: #1e6057 !important;
          border-radius: 16px;
          padding: 30px;
          position: relative;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          border: 2px solid transparent;
          display: flex;
          flex-direction: column;
        }

        .feature-card::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 18px;
          padding: 2px;
          background: linear-gradient(160deg, #6FE6B8 0%, #2E9F97 50%, #EAE9F8 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(111, 230, 184, 0.08),
            0 0 24px rgba(111, 230, 184, 0.25);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .icon-circle {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
        }

        .feature-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: white;
        }

        .learn-link {
          color: #66f9d7 !important;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s ease-in-out;
        }

        .learn-link:hover {
          color: #DAECE8 !important;
          text-decoration:underline;
        }

        .feature-description {
          color: #fff;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        @media (max-width: 992px) {
          .feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .section-subtext {
            font-size: 1rem;
          }

          .feature-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .feature-card {
            padding: 24px 20px;
          }
        }
      `}</style>

      <section className="features-heading-section text-center">
        <div className="container">
          <h2 className="section-title fw-bold">
            <span className="underlined powerful">Powerful</span>{" "}
            <span className="text-heading-green">Features</span>
          </h2>
          <p className="section-subtext mt-4">
            Our cutting-edge technology and innovative approach make us the
            preferred choice for crypto payment solutions worldwide.
          </p>

          <div className="feature-grid mt-5">
            {features.map((feature, index) => (
              <div key={index} className="feature-card text-start h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-circle mb-0">{feature.icon}</div>
                  <h5 className="feature-title mb-0">{feature.title}</h5>
                </div>
                <p className="feature-description">{feature.description}</p>
                <a href="#" className="learn-link">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;