import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <>
      <style>{`
        .testimonial-section {
          background: transparent !important;
          padding: 100px 20px 40px;
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
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: #12896B !important;
          border-radius: 4px;
        }

        .highlight {
          color: #2DD9A8 !important;
        }

        .testimonial-card {
          background-color: #111;
          border: 2px solid transparent;
          border-radius: 20px;
          padding: 28px 24px;
          transition: all 0.35s ease;
          height: 100%;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .testimonial-card:hover {
          border-color: #1FBF8F !important;
          box-shadow: 0 0 12px rgba(31, 191, 143, 0.38) !important;
          animation: floatUpDown 1.2s ease-in-out infinite;
        }

        @keyframes floatUpDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        .testimonial-text {
          font-size: 0.98rem;
          line-height: 1.6;
          color: #e6e6e6;
          margin-top: 15px;
          margin-bottom: 15px;
          flex-grow: 1;
        }

        .testimonial-name {
          font-weight: 700;
          font-size: 1.1rem;
          color: #fff;
          white-space: nowrap;
        }

        .testimonial-role {
          color: #6FE6B8;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .profile-ring {
          border: 2px solid #6FE6B8 !important;
          width: 52px;
          height: 52px;
          object-fit: cover;
          flex-shrink: 0;
          box-shadow: 0 0 10px rgba(111, 230, 184, 0.3);
        }

        .star {
          color: #6FE6B8 !important;
          font-size: 1.1rem;
          letter-spacing: 2px;
        }
      `}</style>

      <div className="testimonial-section">
        {/* Heading */}
        <h2 className="custom-heading" data-aos="fade-up">
          <span className="underline-span">Wh</span>at Our{" "}
          <span className="highlight">Clients</span> Say
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
                <div className="testimonial-card">
                  <div>
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="rounded-circle profile-ring"
                      />
                      <div className="ms-3 overflow-hidden">
                        <p className="mb-0 testimonial-name">{t.name}</p>
                        <small className="testimonial-role">{t.role}</small>
                      </div>
                    </div>
                    <p className="testimonial-text">"{t.quote}"</p>
                  </div>
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
