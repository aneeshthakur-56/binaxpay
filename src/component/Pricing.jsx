import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

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
    btnText: "Contact Sales",
    style: "enterprise",
  },
];

const Pricing = () => {
  const orderClasses = {
    starter: "order-1 order-md-1 order-lg-1",
    pro: "order-2 order-md-3 order-lg-2",
    enterprise: "order-3 order-md-2 order-lg-3"
  };

  return (
    <>
      <style>{`
        .pricing-section {
          background-color: #ebebec;
          padding: 100px 20px 80px;
        }

        .pricing-heading {
          font-size: 2.8rem;
          color: #2b2b2b;
          text-align: center;
          font-weight: 700;
        }

        .highlight {
          color: #000066 !important;
        }

        .underline {
          position: relative;
          display: inline-block;
        }

        .underline::before {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 50px;
          height: 4px;
          background-color: #12896B;
          border-radius: 2px;
        }

        .pricing-subtext {
          font-size: 1.25rem;
          color: #444;
          text-align: center;
          margin-top: 15px;
          margin-bottom: 60px;
        }

        .pricing-box {
          background: #1e6057 !important;
          border-radius: 20px;
          padding: 40px;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .pricing-box h5 {
          color: #FFFFFF !important;
        }

        .plan-desc {
          color: #B8D9CF !important;
          min-height: 48px;
        }

        .plan-starter,
        .plan-enterprise {
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
        }

        .plan-starter:hover,
        .plan-enterprise:hover {
          border-color: rgba(111, 230, 184, 0.6) !important;
          transform: translateY(-6px) !important;
          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(111, 230, 184, 0.15),
            0 0 26px rgba(111, 230, 184, 0.3) !important;
        }

        .plan-pro {
          background-color: #12896B !important;
          border: 1px solid #12896B !important;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28) !important;
          color: #FFFFFF !important;
        }

        .plan-pro h5,
        .plan-pro .plan-desc,
        .plan-pro .rate-val,
        .plan-pro .note,
        .plan-pro .plan-feature,
        .plan-pro .plan-feature .icon {
          color: #FFFFFF !important;
        }

        .plan-pro .plan-desc {
          color: rgba(255, 255, 255, 0.9) !important;
        }

        .plan-pro .note {
          color: rgba(255, 255, 255, 0.85) !important;
        }

        .plan-pro .plan-feature.included .icon {
          color: #E3F8EC !important;
        }

        .plan-pro .plan-feature.excluded .icon {
          color: #FFB6B6 !important;
        }

        @media (min-width: 992px) {
          .plan-pro {
            transform: translateY(-15px) !important;
          }
          .plan-pro:hover {
            transform: translateY(-21px) !important;
          }
        }

        .plan-pro:hover {
          box-shadow:
            0 24px 50px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(255, 255, 255, 0.12) !important;
        }

        .rate-container {
          display: flex;
          align-items: baseline;
          margin-bottom: 1rem;
        }

        .rate-val {
          font-size: 2.5rem;
          font-weight: bold;
          background: #fff;
          -webkit-background-clip: text;
          background-clip: text;
          color: #6FE6B8; /* fallback solid color */
          -webkit-text-fill-color: transparent;
        }

        .note {
          font-size: 0.9rem;
          color: #B8D9CF !important;
          font-weight: 400;
          margin-left: 4px;
        }

        .plan-feature {
          margin-top: 10px;
          display: flex;
          align-items: center;
          font-size: 0.95rem;
          color: #EAF5F0 !important;
        }

        .plan-feature .icon {
          font-weight: bold;
          margin-right: 8px;
        }

        .plan-feature.included .icon {
          color: #6FE6B8 !important;
        }

        .plan-feature.excluded {
          color: #9DBDB3 !important;
        }

        .plan-feature.excluded .icon {
          color: #FF8080 !important;
        }

        .features-container {
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .plan-btn {
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 30px;
          transition: all 0.3s ease;
        }

        .plan-starter .plan-btn,
        .plan-enterprise .plan-btn {
          background: transparent !important;
          border: 2px solid #6FE6B8 !important;
          color: #6FE6B8 !important;
          font-weight: bold !important;
          border-radius: 30px !important;
          transition: all 0.3s ease !important;
        }

        .plan-starter .plan-btn:hover,
        .plan-enterprise .plan-btn:hover {
          background: #fff !important;
          color: #0A0A0A !important;
          border-color: transparent !important;
          box-shadow: 0 4px 15px rgba(111, 230, 184, 0.25) !important;
        }

        .plan-pro .plan-btn {
          background: #fff !important;
          color: #0A0A0A !important;
          border: none !important;
          font-weight: bold !important;
          border-radius: 30px !important;
          box-shadow: 0 4px 15px rgba(111, 230, 184, 0.15) !important;
          transition: all 0.3s ease !important;
        }

        .plan-pro .plan-btn:hover {
          background: #1e6057 !important;
          border: 2px solid #fff !important;
          color: #fff !important;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.45) !important;
          transform: translateY(-2px) !important;
        }

        [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled), button:not(:disabled) {
          cursor: pointer;
        }

        .popular-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #6FE6B8 0%, #2E9F97 100%) !important;
          color: #0A0A0A !important;
          font-size: 0.7rem;
          font-weight: bold;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 50px;
          box-shadow: 0 2px 8px rgba(111, 230, 184, 0.2);
        }
      `}</style>

      <section className="pricing-section">
        <div className="text-center">
          <h2 className="pricing-heading">
            <span className="underline-span">Si</span>mple, Transparent{" "}
            <span className="text-heading-green">Pricing</span>
          </h2>
          <p className="pricing-subtext mb-5">
            Choose the plan that fits your business needs. Scale up or down as
            you grow.
          </p>
        </div>

        <div className="container">
          <div className="row justify-content-center g-4">
            {plans.map((plan, index) => (
              <div className={`col-12 col-md-6 col-lg-4 mb-4 ${orderClasses[plan.style] || ""}`} key={index}>
                <motion.div
                  className={`pricing-box position-relative plan-${plan.style}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {plan.style === "pro" && (
                    <div className="popular-tag">POPULAR</div>
                  )}
                  <h5 className="fw-bold">{plan.title}</h5>
                  <p className="plan-desc mb-3">{plan.description}</p>

                  <div className="rate-container">
                    <span className="rate-val">{plan.rate}</span>
                    <span className="note">{plan.note}</span>
                  </div>

                  <div className="features-container">
                    {plan.features.map((feature, i) => (
                      <div
                        className={`plan-feature ${feature.included ? "included" : "excluded"
                          }`}
                        key={i}
                      >
                        <span className="icon">
                          {feature.included ? "✓" : "✕"}
                        </span>
                        {feature.text}
                      </div>
                    ))}
                  </div>

                  <button
                    className={`mt-3 w-100 plan-btn ${plan.style === "pro" ? "pro-btn" : ""
                      }`}
                  >
                    <i className="mdi mdi-cart me-2"></i>
                    {plan.btnText}
                  </button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;