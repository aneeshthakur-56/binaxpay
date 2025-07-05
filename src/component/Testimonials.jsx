import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Bitsfar has transformed how we accept international payments. The low fees and fast settlement times have saved us thousands in transaction costs while opening up new markets we couldn't reach before.",
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
      "As a crypto-native business, we needed a payment processor that truly understands blockchain. Bitsfar's multi-chain support and automatic conversions are game-changers. Our revenue increased by 40% after switching to Bitsfar.",
  },
];

const Testimonials = () => {
  return (
    <>
      <style>{`
        .testimonial-section {
          background-color: #0a0a0a;
          padding: 100px 20px;
          text-align: center;
        }

        .custom-heading {
          font-size: 2.8rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
        }

        .wh-underline {
          position: relative;
          display: inline-block;
        }

        .wh-underline::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: #00eaff !important;
          border-radius: 4px;
        }

        .highlight {
          color: #00eaff !important;
        }

        .testimonial-card {
          background-color: #111;
          border: 1px solid #333;
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          height: 100%;
          text-align: left;
        }

        .testimonial-card:hover {
          border: 1px solid #00eaff;
          box-shadow: 0 0 15px #00eaff88;
          transform: scale(1.02);
        }

        .testimonial-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #e0e0e0;
        }

        .testimonial-name {
          font-weight: 600;
          color: #fff;
        }

        .testimonial-role {
          color: #bbb;
        }

        .star {
          color: #00eaff;
          font-size: 1rem;
        }
      `}</style>

      <div className="testimonial-section">
        {/* Heading */}
        <h2 className="custom-heading">
          <span className="wh-underline">Wh</span>at Our{" "}
          <span className="highlight">Clients</span> Say
        </h2>

        {/* Subtext */}
        <p className="text-white mt-3 fs-6">
          Don't just take our word for it. Here's what our customers have to say
          about Bitsfar.
        </p>

        {/* Cards */}
        <div className="container mt-5">
          <div className="row g-4">
            {testimonials.map((t, index) => (
              <div className="col-md-4" key={index}>
                <div className="testimonial-card h-100">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="rounded-circle border border-info"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div className="ms-3">
                      <p className="mb-0 testimonial-name">{t.name}</p>
                      <small className="testimonial-role">{t.role}</small>
                    </div>
                  </div>
                  <p className="testimonial-text">"{t.quote}"</p>
                  <div className="star mt-2">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
