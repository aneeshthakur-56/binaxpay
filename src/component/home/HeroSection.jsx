import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hero from "../../assets/Image/hero.png";
import photo from "../../assets/Image/photo.jpg";
import photo1 from "../../assets/Image/photo1.jpg";
import photo2 from "../../assets/Image/photo2.jpg";
import styles from "./css/HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className="container text-white py-7 d-flex align-items-center">
        <div className="row align-items-center justify-content-center w-100">
          {/* Text Column */}
          <div className={`col-lg-6 order-2 order-lg-1 ${styles.textSlide}`} data-aos="fade-right">
            <h1 className="display-4 fw-bold mb-3">
              CRYPTO <br />
              <span className={styles.textBrand}>PAYMENTS</span> <br />
              MADE EASY
            </h1>

            <p className={`${styles.heroSubtext} mb-4`}>
              Seamlessly accept and send crypto payments with our cutting-edge platform, built for businesses, traders, and everyday users alike. Whether you're an entrepreneur looking to expand your payment options, a crypto investor managing digital assets, or even an explorer from another world —our gateway makes transactions fast, secure, and borderless.
            </p>

            <div className={`d-flex gap-3 flex-wrap ${styles.ctaButtons} mb-4`}>
              <button className={`btn ${styles.btnHeroPrimary} fw-bold`}>
                <i className="mdi mdi-rocket me-2"></i> Start Free Trial
              </button>
              <button className={`btn ${styles.btnHeroSecondary} fw-semibold`}>
                <i className="mdi mdi-play-circle me-2"></i> Request Demo
              </button>
            </div>

            <div className={`d-flex align-items-center ${styles.trustInfo} mt-3`}>
              <div className={`${styles.avatarStack} me-2`}>
                <img src={photo} alt="avatar1" className={`${styles.avatar} ${styles.avatar1}`} />
                <img src={photo1} alt="avatar2" className={`${styles.avatar} ${styles.avatar2}`} />
                <img src={photo2} alt="avatar3" className={`${styles.avatar} ${styles.avatar3}`} />
              </div>
              <p className="mb-0 fw-semibold text-white">
                10,000+ businesses trust Binaxpay
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className={`col-lg-6 order-1 order-lg-2 text-center ${styles.imageSlide}`} data-aos="fade-left">
            <img
              src={hero}
              alt="Crypto Safe"
              className={`img-fluid ${styles.floatAnimation}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;