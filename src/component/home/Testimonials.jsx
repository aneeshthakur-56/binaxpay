import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/Testimonials.module.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Binaxpay has transformed how we accept international payments. The low fees and fast settlement times have saved us thousands in transaction costs while opening up new markets we couldn't reach before.",
  },
  {
    name: "Michael Chen",
    role: "CTO, DigitalGoods",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The API integration was seamless and well-documented. Our developers had it up and running in less than a day. The real-time analytics have given us valuable insights into our customer behavior and payment preferences.",
  },
  {
    name: "Emma Rodriguez",
    role: "Founder, CryptoStore",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "As a crypto-native business, we needed a payment processor that truly understands blockchain. Binaxpay's multi-chain support and automatic conversions are game-changers. Our revenue increased by 40% after switching to Binaxpay.",
  },
];

const Testimonials = () => {
  return (
    <div className={styles.testimonialSection}>
      {/* Heading */}
      <h2 className={styles.customHeading} data-aos="fade-up">
        <span className={styles.underlineSpan}>Wh</span>at Our{" "}
        <span className={styles.highlight}>Clients</span> Say
      </h2>

      {/* Subtext */}
      <p className="text-white mt-3 fs-6" data-aos="fade-up" data-aos-delay="100">
        Don't just take our word for it. Here's what our customers have to say
        about Binaxpay.
      </p>

      {/* Cards */}
      <div className="container mt-5">
        <div className="row g-4 justify-content-center">
          {testimonials.map((t, index) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={index}
              data-aos="fade-up"
              data-aos-delay={150 + index * 100}
            >
              <div className={styles.testimonialCard}>
                <div>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className={`rounded-circle ${styles.profileRing}`}
                    />
                    <div className="ms-3 overflow-hidden">
                      <p className={`mb-0 ${styles.testimonialName}`}>{t.name}</p>
                      <small className={styles.testimonialRole}>{t.role}</small>
                    </div>
                  </div>
                  <p className={styles.testimonialText}>"{t.quote}"</p>
                </div>
                <div className={`${styles.star} mt-2`}>★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
