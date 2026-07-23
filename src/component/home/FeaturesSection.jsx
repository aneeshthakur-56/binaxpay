import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiFsecure } from "react-icons/si";
import { FaBoltLightning, FaCoins } from "react-icons/fa6";
import { RiGlobalLine, RiExchangeDollarLine } from "react-icons/ri";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import styles from "./css/FeaturesSection.module.css";

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
    <section className={`${styles.featuresHeadingSection} text-center`}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} fw-bold`} data-aos="fade-up">
          <span className={styles.underlineSpan}>Po</span>werful{" "}
          <span className={styles.textHeadingGreen}>Features</span>
        </h2>
        <p className={styles.sectionSubtext} data-aos="fade-up" data-aos-delay="100">
          Our cutting-edge technology and innovative approach make us the
          preferred choice for crypto payment solutions worldwide.
        </p>

        <div className={`${styles.featureGrid} mt-5`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${styles.featureCard} text-start h-100`}
              data-aos="fade-up"
              data-aos-delay={150 + index * 100}
            >
              <div className={styles.goCorner}>
                <div className={styles.goArrow}>→</div>
              </div>

              <div className={styles.featureCardContent}>
                <div className="d-flex align-items-center mb-3">
                  <div className={`${styles.iconCircle} mb-0`}>{feature.icon}</div>
                  <h5 className={`${styles.featureTitle} mb-0 ms-3`}>{feature.title}</h5>
                </div>
                <p className={styles.featureDescription}>{feature.description}</p>
                <a href="#" className={styles.learnLink}>
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;