import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiFsecure } from "react-icons/si";
import { FaBoltLightning, FaCoins } from "react-icons/fa6";
import { RiGlobalLine, RiExchangeDollarLine } from "react-icons/ri";
import { MdOutlineIntegrationInstructions } from "react-icons/md";

const features = [
  {
    icon: <SiFsecure size={24} />,
    title: "Military-Grade Security",
    description:
      "Binaxpay employs advanced encryption, multi-signature wallets, and cold storage to ensure your transactions and funds are always protected against threats.",
  },
  {
    icon: <FaBoltLightning size={24} />,
    title: "Lightning-Fast Settlement",
    description:
      "Experience near-instant transaction confirmations with our optimized blockchain routing technology. Convert crypto to fiat instantly with zero slippage.",
  },
  {
    icon: <RiGlobalLine size={24} />,
    title: "Global Compliance",
    description:
      "Stay fully compliant across multiple jurisdictions with our built-in KYC/AML tools, automated tax reporting, and adherence to international financial regulations.",
  },
  {
    icon: <MdOutlineIntegrationInstructions size={24} />,
    title: "Developer-Friendly APIs",
    description:
      "Integrate crypto payments in minutes using our comprehensive REST APIs, SDKs for major programming languages, and pre-built plugins for popular e-commerce platforms.",
  },
  {
    icon: <FaCoins size={24} />,
    title: "Multi-Currency Support",
    description:
      "Accept 50+ cryptocurrencies including Bitcoin, Ethereum, Solana, and major stablecoins like USDT and USDC. Give your customers the freedom to pay their way.",
  },
  {
    icon: <RiExchangeDollarLine size={24} />,
    title: "Lowest Processing Fees",
    description:
      "Save up to 80% on transaction costs compared to traditional credit cards. Enjoy flat rate pricing as low as 0.5% per transaction with no hidden fees.",
  },
];

const FeaturesSection = () => {
  return (
    <>
      <style>{`
        .features-heading-section {
          background: #ebebec;
          color: #2b2b2b;
          padding: 100px 20px;
        }

        .features-heading-section .section-title {
          font-size: 2.8rem;
          margin-bottom: 20px;
          color: #2b2b2b !important;
        }

        .text-heading-green {
          color: #12896B !important;
        }

        .underline-span {
          position: relative;
          display: inline-block;
        }

        .underline-span::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(160deg, #12896B 0%, #2E9F97 50%, #EAE9F8 100%);
          border-radius: 2px;
        }

        .section-subtext {
          font-size: 1.1rem;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 60px;
        }

        .feature-card {
          position: relative;
          background: #ffffff !important;
          border-radius: 16px;
          padding: 32px 26px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease, border-color 0.4s ease;
          border: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          z-index: 0;
          overflow: hidden;
        }

        /* Expanding circle animation with #12896B */
        .feature-card::before {
          content: "";
          position: absolute;
          z-index: 1;
          top: -16px;
          right: -16px;
          background: linear-gradient(135deg, #12896B 0%, #0E6851 100%);
          height: 36px;
          width: 36px;
          border-radius: 50%;
          transform: scale(1);
          transform-origin: 50% 50%;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }

        .feature-card:hover::before {
          transform: scale(32);
        }

        .feature-card-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .go-corner {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          width: 2.4em;
          height: 2.4em;
          overflow: hidden;
          top: 0;
          right: 0;
          background: linear-gradient(135deg, #12896B 0%, #0E6851 100%);
          border-radius: 0 14px 0 28px;
          z-index: 3;
          transition: background 0.35s ease, transform 0.35s ease;
        }

        .go-arrow {
          margin-top: -2px;
          margin-right: -2px;
          color: #ffffff;
          font-weight: bold;
          font-size: 1.1rem;
          transition: transform 0.35s ease, color 0.35s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: #12896B !important;
          box-shadow:
            0 20px 45px rgba(0, 0, 0, 0.15),
            0 0 25px rgba(18, 137, 107, 0.3) !important;
        }

        .feature-card:hover .go-corner {
          background: #ffffff;
        }

        .feature-card:hover .go-arrow {
          transform: scale(1.2) rotate(-20deg);
          color: #12896B;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #2b2b2b;
          transition: color 0.4s ease-out;
        }

        .feature-description {
          color: #666666;
          margin-bottom: 20px;
          flex-grow: 1;
          transition: color 0.4s ease-out;
        }

        .learn-link {
          color: #12896B !important;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease-in-out;
          margin-top: auto;
        }

        .learn-link:hover {
          text-decoration: underline;
        }

        .icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(18, 137, 107, 0.1);
          color: #12896B;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.35s ease, color 0.35s ease;
        }

        /* Hover states: Text smoothly transitions to bright white on #12896B background */
        .feature-card:hover .feature-title {
          color: #ffffff !important;
        }

        .feature-card:hover .feature-description {
          color: #E2F7F1 !important;
        }

        .feature-card:hover .learn-link {
          color: #ffffff !important;
        }

        .feature-card:hover .icon-circle {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
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
          <h2 className="section-title fw-bold" data-aos="fade-up">
            <span className="underline-span">Po</span>werful{" "}
            <span className="text-heading-green">Features</span>
          </h2>
          <p className="section-subtext" data-aos="fade-up" data-aos-delay="100">
            Our cutting-edge technology and innovative approach make us the
            preferred choice for crypto payment solutions worldwide.
          </p>

          <div className="feature-grid mt-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card text-start h-100"
                data-aos="fade-up"
                data-aos-delay={150 + index * 100}
              >
                <div className="go-corner">
                  <div className="go-arrow">→</div>
                </div>

                <div className="feature-card-content">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-circle mb-0">{feature.icon}</div>
                    <h5 className="feature-title mb-0 ms-3">{feature.title}</h5>
                  </div>
                  <p className="feature-description">{feature.description}</p>
                  <a href="#" className="learn-link">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;