import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/Pricing.module.css";

const plans = [
  {
    title: "Starter",
    description: "Perfect for small businesses and startups",
    rate: "0.9%",
    note: "/transaction",
    features: [
      { text: "Up to $10,000 monthly volume", included: true },
      { text: "50+ cryptocurrencies supported", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "Email support", included: true },
      { text: "No fiat withdrawals", included: false },
      { text: "No advanced fraud protection", included: false },
    ],
    btnText: "Choose Plan",
    style: "starter",
  },
  {
    title: "Professional",
    description: "Ideal for growing businesses",
    rate: "0.7%",
    note: "/transaction",
    features: [
      { text: "Up to $100,000 monthly volume", included: true },
      { text: "50+ cryptocurrencies supported", included: true },
      { text: "Advanced analytics dashboard", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "Fiat withdrawals available", included: true },
      { text: "Basic fraud protection", included: true },
    ],
    btnText: "Choose Plan",
    style: "pro",
  },
  {
    title: "Enterprise",
    description: "For high-volume businesses",
    rate: "0.5%",
    note: "/transaction",
    features: [
      { text: "Unlimited monthly volume", included: true },
      { text: "50+ cryptocurrencies supported", included: true },
      { text: "Premium analytics dashboard", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Custom fiat withdrawal options", included: true },
      { text: "Advanced fraud protection", included: true },
    ],
    btnText: "Choose Plan",
    style: "enterprise",
  },
];

const orderClasses = {
  starter: "order-2 order-lg-1",
  pro: "order-1 order-lg-2",
  enterprise: "order-3 order-lg-3",
};

const Pricing = () => {
  return (
    <section className={styles.pricingSection}>
      <div className="text-center">
        <h2 className={styles.pricingHeading} data-aos="fade-up">
          <span className={styles.underlineSpan}>Si</span>mple, Transparent{" "}
          <span className={styles.textHeadingGreen}>Pricing</span>
        </h2>
        <p className={`${styles.pricingSubtext} mb-5`} data-aos="fade-up" data-aos-delay="100">
          Choose the plan that fits your business needs. Scale up or down as
          you grow.
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center g-4">
          {plans.map((plan, index) => {
            const planStyleClass =
              plan.style === "pro"
                ? styles.planPro
                : plan.style === "starter"
                ? styles.planStarter
                : styles.planEnterprise;

            return (
              <div className={`col-12 col-md-6 col-lg-4 mb-4 ${orderClasses[plan.style] || ""}`} key={index}>
                <motion.div
                  className={`${styles.pricingBox} position-relative ${planStyleClass}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {plan.style === "pro" && (
                    <div className={styles.popularTag}>POPULAR</div>
                  )}
                  <h5 className="fw-bold">{plan.title}</h5>
                  <p className={`${styles.planDesc} mb-3`}>{plan.description}</p>

                  <div className={styles.rateContainer}>
                    <span className={styles.rateVal}>{plan.rate}</span>
                    <span className={styles.note}>{plan.note}</span>
                  </div>

                  <div className={styles.featuresContainer}>
                    {plan.features.map((feature, i) => (
                      <div
                        className={`${styles.planFeature} ${
                          feature.included ? styles.included : styles.excluded
                        }`}
                        key={i}
                      >
                        <span className={styles.icon}>
                          {feature.included ? "✓" : "✕"}
                        </span>
                        {feature.text}
                      </div>
                    ))}
                  </div>

                  <button className={`mt-3 w-100 ${styles.planBtn}`}>
                    <i className="mdi mdi-cart me-2"></i>
                    {plan.btnText}
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;