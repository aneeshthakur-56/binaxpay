import React from "react";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";

const TestimonialsAndCTA = () => {
  return (
    <div 
      id="testimonials"
      style={{
        background: "linear-gradient(135deg, #0A0A0A 0%, #0D1F1A 50%, #0A0A0A 100%)",
        paddingBottom: "80px"
      }}
    >
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default TestimonialsAndCTA;
