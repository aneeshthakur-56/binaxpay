import React, { useState, useEffect, useRef, memo } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import back from "../assets/Image/back.png";

const stats = [
  { value: 12500000, label: "Transactions Processed", suffix: "" },
  { value: 10000, label: "Happy Clients", suffix: "" },
  { value: 50, label: "Supported Cryptos", suffix: "" },
  { value: 150, label: "Countries", suffix: "" },
];


const AnimatedNumber = memo(({ value, isInView }) => {
  const springValue = useSpring(0, {
    mass: 1,
    stiffness: 50,
    damping: 30,
    duration: 2.5,
  });

  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (latest) => {
      setDisplay(latest);
    });
    return unsubscribe;
  }, [displayValue]);

  return <span>{display}</span>;
});

AnimatedNumber.displayName = "AnimatedNumber";


const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="stat-number">
        <AnimatedNumber value={stat.value} isInView={isInView} />
      </div>
      <div className="stat-label">{stat.label}</div>
    </motion.div>
  );
};


const StatsSection = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <>
      <style>{`
        .stats-section {
          position: relative;
          background: #0A0A0A;
          padding: clamp(50px, 8vw, 100px) 20px;
          overflow: hidden;
        }

        .stats-section .bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.18;
          filter: blur(1px) brightness(0.8);
          z-index: 0;
          pointer-events: none;
        }

        .stats-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #0A0A0A 0%, rgba(10,10,10,0.4) 40%, #0A0A0A 100%);
          z-index: 1;
          pointer-events: none;
        }

        .stats-intro-panel {
          position: relative;
          z-index: 2;
          max-width: 700px;
          margin: 0 auto clamp(30px, 6vw, 60px);
          text-align: center;
          background: rgba(20, 20, 20, 0.45);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(111, 230, 184, 0.18);
          border-radius: 24px;
          padding: clamp(24px, 5vw, 40px) clamp(16px, 4vw, 32px);
        }

        .stats-intro-panel h2 {
          color: #FFFFFF;
          font-weight: 700;
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          margin-bottom: 0;
        }

        .stats-intro-panel h2 span {
          background: linear-gradient(135deg, #6FE6B8 0%, #2E9F97 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: #6FE6B8;
          -webkit-text-fill-color: transparent;
        }

        .stats-intro-panel p {
          color: #A3A3A3;
          margin-top: 12px;
          font-size: clamp(0.88rem, 1.5vw, 1rem);
          margin-bottom: 0;
        }

        .stats-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }

        .stat-card {
          background: #141414;
          border: 1px solid rgba(111, 230, 184, 0.14);
          border-radius: 16px;
          padding: clamp(16px, 3vw, 28px) clamp(10px, 2vw, 16px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 0;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }

        .stat-card:hover {
          border-color: rgba(111, 230, 184, 0.45);
          box-shadow: 0 16px 36px rgba(111, 230, 184, 0.2), 0 0 20px rgba(111, 230, 184, 0.12);
          background-color: #1a1a1a;
        }

        .stat-number {
          font-size: clamp(1.4rem, 2.5vw + 0.6rem, 2.2rem);
          font-weight: 700;
          background: linear-gradient(135deg, #6FE6B8 0%, #2E9F97 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: #6FE6B8;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        .stat-label {
          color: #A3A3A3;
          font-size: clamp(0.78rem, 1.2vw + 0.4rem, 0.95rem);
          margin-top: 8px;
          margin-bottom: 0;
          word-break: break-word;
          line-height: 1.3;
        }

        @media (max-width: 992px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .stat-card {
            padding: 14px 8px;
            border-radius: 12px;
          }
          .stat-number {
            font-size: clamp(1.15rem, 5.5vw, 1.5rem);
          }
          .stat-label {
            font-size: 0.75rem;
            margin-top: 4px;
          }
        }

        @media (max-width: 340px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stat-card {
            transition: none;
          }
        }
      `}</style>

      <div className="stats-section" ref={sectionRef}>
        <img src={back} alt="background" className="bg-image" loading="lazy" />

        <motion.div
          className="stats-intro-panel"
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2>
            By The <span>Numbers</span>
          </h2>
          <p>
            Join thousands of businesses already benefiting from Binaxpay's
            revolutionary payment solutions.
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StatsSection;