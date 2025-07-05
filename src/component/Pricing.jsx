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
          background-color: #000066;
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
          background: #fff;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          height: 100%;
          transition: all 0.4s ease;
        }

        .pricing-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .rate {
          font-size: 2.5rem;
          font-weight: bold;
          color: #000066;
        }

        .note {
          font-size: 0.9rem;
          color: gray;
          margin-left: 4px;
        }

        .plan-feature {
          margin-top: 10px;
          display: flex;
          align-items: center;
          font-size: 0.95rem;
        }

        .plan-feature .icon {
          font-weight: bold;
          margin-right: 8px;
        }

        .plan-feature.included .icon {
          color: #00e5ff;
        }

        .plan-feature.excluded {
          color: #999;
        }

        .plan-feature.excluded .icon {
          color: red;
        }

        .plan-btn {
          border: 2px solid #00e5ff;
          color: #00e5ff;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 30px;
          transition: all 0.3s ease;
        }

        .plan-btn:hover {
          background-color: #00e5ff;
          color: #001067;
        }

        .pro-btn {
          background-color: #001067;
          color: #fff;
          border: none;
        }

        .pro-btn:hover {
          background-color: transparent;
          color: #00e5ff;
          border: 2px solid #00e5ff;
        }

        .popular-tag {
          position: absolute;
          top: 17px;
          right: 0;
          background: #001067;
          color: #fff;
          font-size: 0.75rem;
          padding: 4px 10px;
          border-radius: 0 16px 0 8px;
          transform: rotate(12deg);
          transform-origin: top right;
        }
      `}</style>

      <section className="pricing-section">
        <div className="text-center">
          <h2 className="pricing-heading">
            <span className="underline">Simple, Transparent</span>{" "}
            <span className="highlight">Pricing</span>
          </h2>
          <p className="pricing-subtext mt-5">
            Choose the plan that fits your business needs. Scale up or down as
            you grow.
          </p>
        </div>

        <div className="container">
          <div className="row justify-content-center g-4">
            {plans.map((plan, index) => (
              <div className="col-md-4" key={index}>
                <motion.div
                  className="pricing-box position-relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {plan.style === "pro" && (
                    <div className="popular-tag">POPULAR</div>
                  )}
                  <h5 className="fw-bold">{plan.title}</h5>
                  <p className="text-muted mb-3">{plan.description}</p>

                  <div className="rate">
                    {plan.rate}
                    <span className="note">{plan.note}</span>
                  </div>

                  <div className="mt-3 mb-4">
                    {plan.features.map((feature, i) => (
                      <div
                        className={`plan-feature ${
                          feature.included ? "included" : "excluded"
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
                    className={`mt-3 w-100 plan-btn ${
                      plan.style === "pro" ? "pro-btn" : ""
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
