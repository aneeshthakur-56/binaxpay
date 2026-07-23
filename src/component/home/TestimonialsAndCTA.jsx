import React from "react";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import styles from "./css/TestimonialsAndCTA.module.css";

const TestimonialsAndCTA = () => {
  return (
    <div id="testimonials" className={styles.testimonialsAndCtaWrapper}>
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default TestimonialsAndCTA;
