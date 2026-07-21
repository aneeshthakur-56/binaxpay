import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaEnvelope,
  FaClock,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaDiscord,
  FaPaperPlane,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <>
      <style>{`
        .contact-section {
            background: linear-gradient(135deg, #0A0A0A 0%, #0D1F1A 50%, #0A0A0A 100%);
          color: #fff;
          padding: 80px 0;
        }

        .text-accent {
          color:#2DD9A8 !important;
        }

        .form-control {
          background-color: #225750 !important;
            border: 1px solid #BCB9B9 !important;
          color: #fff !important;
          transition: all 0.3s ease;
        }

        .form-control:focus {
       outline: none !important;
            border-color: #6FE6B8 !important;
            box-shadow: 0 0 0 0.35rem rgba(111, 230, 184, 0.16) !important;
            background-color: #225750 !important;
            color: #fff !important;
        }

        .btn-primary {
          background-color: #12896B !important;
          border: 2px solid transparent !important;
          color: #fff !important;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background-color: transparent !important;
          border: 2px solid #12896B !important;
          color: #12896B !important;
        }

        .feature-card {
          background-color:#225750 !important;
          border-radius: 15px;
          padding: 30px;
          height: 100%;
          border:1px solid #1a1a1a;
        }

        .info-block {
          display: flex;
          gap: 15px;
          margin-bottom: 25px;
        }

        .info-icon-box {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ffffff;
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .info-icon-svg {
          font-size: 1.4rem;
          color: #12896B !important;
          transition: all 0.3s ease;
        }

        .info-icon-box:hover {
          border-color: var(--primary) !important;
          box-shadow: 0 0 12px rgba(18, 105, 85, 0.4);
        }

        .info-icon-box:hover .info-icon-svg {
          color: var(--primary) !important;
          animation: iconInsideFloat 1.4s ease-in-out infinite;
        }

        @keyframes iconInsideFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .section-title {
          color: white !important;
        }

        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          margin-right: 10px;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background-color: #1FBF8F !important;
          color: #000 !important;
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold d-flex justify-content-center flex-wrap">
                <span>
                  <span className="underline-span">Ge</span>t In
                </span>
                <span style={{ color: "#12896B", marginLeft: "6px" }}>
                  Touch
                </span>
              </h2>
              <p className="lead mt-5 ">
                Have questions? Our team is here to help you with any inquiries.
              </p>
            </div>
          </div>

          <div className="row mt-5 align-items-start">
            {/* Contact Form */}
            <div className="col-lg-6">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control bg-black border-dark text-light"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control border-dark text-light"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control bg-black border-dark text-light"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      rows="5"
                      className="form-control bg-black border-dark text-light"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary py-5">
                      <FaPaperPlane className="me-2" />
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Info Column */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="feature-card">
                <div className="row g-4">
                  {/* Email */}
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="me-3">
                        <div className="info-icon-box">
                          <FaEnvelope className="info-icon-svg" />
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-2">Email</h5>
                        <p className="mb-0">info@Binaxpay.com</p>
                        <p className="mb-0">support@Binaxpay.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  {/* <div className="col-md-6">
                    <div className="d-flex">
                      <div className="me-3">
                        <FaClock className="info-icon" />
                      </div>
                      <div>
                        <h5 className="mb-2">Working Hours</h5>
                        <p className="mb-0">Mon–Fri: 9am–6pm (UTC)</p>
                        <p className="mb-0">Sat–Sun: Closed</p>
                      </div>
                    </div>
                  </div> */}

                  {/* Social Icons */}
                  <div className="col-12 mt-4">
                    <h5 className="mb-3">Follow Us</h5>
                    <div className="d-flex">
                      <a href="#" className="social-icon">
                        <FaTwitter />
                      </a>
                      <a href="#" className="social-icon">
                        <FaLinkedin />
                      </a>
                      <a href="#" className="social-icon">
                        <FaGithub />
                      </a>
                      <a href="#" className="social-icon">
                        <FaTelegramPlane />
                      </a>
                      <a href="#" className="social-icon">
                        <FaDiscord />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
