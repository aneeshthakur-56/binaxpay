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
          background-color: #000000;
          color: #fff;
          padding: 80px 0;
        }

        .text-accent {
          color: #00eaff!important;
        }

        .form-control,
        .form-control:focus {
          background-color: #1a1a1a;
          border: 1px solid #333;
          color: #fff;
        }

        .btn-primary {
          background-color: #000066;
          border: none;
        }

        .btn-primary:hover {
          background-color: #000;
          border: 1px solid aqua;
          color: aqua;
        }

        .feature-card {
          background-color: #000000;
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

        .info-icon {
          font-size: 1.8rem;
          color: #00eaff;
        }
          .section-title{
          color:white!important;
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
          background-color: #00eaff;
          color: #000;
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold d-flex justify-content-center flex-wrap">
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span style={{ color: "#fffff" }}>Ge</span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "4px",
                      backgroundColor: "#00f0ff",
                      borderRadius: "2px",
                    }}
                  />
                </span>
                <span style={{ color: "#fffff" }}>t In</span>
                <span style={{ color: "#00f0ff", marginLeft: "6px" }}>
                  Touch
                </span>
              </h2>
              <p className="lead mt-5 ">
                Have questions? Our team is here to help you with any inquiries.
              </p>
            </div>
          </div>

          <div className="row mt-5">
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
                      className="form-control bg-black border-dark text-light"
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
                        <FaEnvelope className="info-icon" />
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
