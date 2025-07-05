import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const features = [
  {
    icon: (
      <i
        className="mdi mdi-shield-lock-outline"
        style={{ fontSize: "28px", color: "#00e5ff" }}
      ></i>
    ),
    title: "Military-Grade Security",
    description:
      "Bitsfar employs advanced encryption, multi-signature wallets, and cold storage to ensure your transactions and funds are always protected against threats.",
  },
  {
    icon: (
      <i
        className="mdi mdi-speedometer"
        style={{ fontSize: "28px", color: "#00e5ff" }}
      ></i>
    ),
    title: "Lightning Fast Transactions",
    description:
      "Our optimized blockchain routing ensures your payments are processed in seconds, not minutes. Avg. confirmation under 30 seconds.",
  },
  {
    title: "Lowest Fees in Industry",
    description:
      "Enjoy transaction fees up to 70% lower than competitors. Volume discounts available with our efficient infrastructure.",
  },
  {
    icon: (
      <i
        className="mdi mdi-cube-outline"
        style={{ fontSize: "28px", color: "#00e5ff" }}
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
        style={{ fontSize: "28px", color: "#00e5ff" }}
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
        style={{ fontSize: "28px", color: "#00e5ff" }}
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
          color: #2b2b2b;
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
          background-color: #000066;
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
          background: #fff;
          border-radius: 16px;
          padding: 30px;
          position: relative;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .feature-card:hover {
          border-color: #00e5ff;
          box-shadow: 0 0 12px #00e5ff60;
          animation: floatUpDown 1.2s ease-in-out infinite;
        }

        @keyframes floatUpDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
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
        }

        .learn-link {
          color: #0033cc;
          font-weight: 500;
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
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 500px) {
          .feature-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="features-heading-section text-center">
        <div className="container">
          <h2 className="section-title fw-bold">
            <span className="underlined">Powerful</span>{" "}
            <span className="highlight">Features</span>
          </h2>
          <p className="section-subtext mt-4">
            Our cutting-edge technology and innovative approach make us the
            preferred choice for crypto payment solutions worldwide.
          </p>

          <div className="feature-grid mt-5">
            {features.map((feature, index) => (
              <div key={index} className="feature-card text-start h-100">
                <div className="icon-circle">{feature.icon}</div>
                <h5 className="feature-title">{feature.title}</h5>
                <p>{feature.description}</p>
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
