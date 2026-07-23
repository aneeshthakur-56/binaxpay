import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaRocket,
  FaArrowRight,
  FaShieldAlt,
  FaBolt,
  FaGlobe,
} from "react-icons/fa";
import binaxpay from "../assets/Image/binaxpay.png";

const features = [
  { icon: FaShieldAlt, label: "Secure Payments", desc: "Military-grade encryption" },
  { icon: FaBolt, label: "Instant Settlement", desc: "Near real-time processing" },
  { icon: FaGlobe, label: "Global Reach", desc: "150+ countries supported" },
];

const RegisterSuccess = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.8,
    duration: 2 + Math.random() * 2,
    size: 4 + Math.random() * 8,
    color: ["#2DD9A8", "#12896B", "#6FE6B8", "#1FBF8F", "#2E9F97"][
      Math.floor(Math.random() * 5)
    ],
  }));

  return (
    <>
      <style>{`
        .success-page {
          min-height: 100vh;
          background: #0A0A0A;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }

        .success-page::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at 30% 20%,
            rgba(18, 137, 107, 0.08) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 70% 80%,
            rgba(45, 217, 168, 0.06) 0%,
            transparent 50%
          );
          pointer-events: none;
          animation: gradientShift 15s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(2%, 2%) scale(1.02); }
          66% { transform: translate(-1%, 1%) scale(0.98); }
        }

        .success-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 560px;
          background: rgba(20, 20, 20, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(111, 230, 184, 0.12);
          border-radius: 24px;
          padding: 48px 40px;
          text-align: center;
          box-shadow:
            0 0 0 1px rgba(111, 230, 184, 0.05),
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 0 80px rgba(18, 137, 107, 0.08);
        }

        @media (max-width: 600px) {
          .success-card {
            padding: 36px 24px;
            border-radius: 20px;
          }
        }

        .success-logo {
          display: inline-block;
          margin-bottom: 32px;
        }

        .success-logo img {
          height: 48px;
          width: auto;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .success-logo:hover img {
          opacity: 1;
        }

        .success-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(18, 137, 107, 0.15);
          border: 1px solid rgba(45, 217, 168, 0.25);
          color: #2DD9A8;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 100px;
          margin-bottom: 24px;
          letter-spacing: 0.02em;
        }

        .success-title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .success-title .accent {
          background: linear-gradient(135deg, #6FE6B8 0%, #2E9F97 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .success-message {
          color: #A3A3A3;
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
        }

        .success-divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(111, 230, 184, 0.2) 50%,
            transparent 100%
          );
          margin: 28px 0;
        }

        .success-tip {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(18, 137, 107, 0.08);
          border: 1px solid rgba(45, 217, 168, 0.1);
          border-radius: 14px;
          padding: 16px 20px;
          text-align: left;
          margin-bottom: 32px;
        }

        .success-tip-icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          background: rgba(18, 137, 107, 0.15);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2DD9A8;
          font-size: 16px;
        }

        .success-tip-text {
          color: #cac8c8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }

        .success-tip-text strong {
          color: #ffffff;
          font-weight: 600;
        }

        .success-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .btn-primary-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          background: linear-gradient(135deg, #12896B 0%, #1FBF8F 100%);
          border: none;
          color: #ffffff;
          font-weight: 600;
          font-size: 1rem;
          padding: 14px 28px;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          text-decoration: none;
        }

        .btn-primary-action:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(18, 137, 107, 0.4);
        }

        .btn-primary-action:active {
          transform: translateY(0);
        }

        .btn-secondary-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background: transparent;
          border: 1.5px solid rgba(111, 230, 184, 0.2);
          color: #A3A3A3;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 12px 28px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .btn-secondary-action:hover {
          border-color: rgba(45, 217, 168, 0.5);
          color: #2DD9A8;
          background: rgba(45, 217, 168, 0.05);
        }

        .feature-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .feature-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #888;
          font-size: 0.8rem;
          padding: 6px 14px;
          border-radius: 100px;
          transition: all 0.25s ease;
        }

        .feature-pill:hover {
          background: rgba(18, 137, 107, 0.1);
          border-color: rgba(45, 217, 168, 0.2);
          color: #2DD9A8;
        }

        .feature-pill svg {
          width: 12px;
          height: 12px;
        }

        .confetti-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .success-page::before {
            animation: none;
          }
          .btn-primary-action:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="success-page">
        {/* Confetti particles */}
        <AnimatePresence>
          {showConfetti &&
            particles.map((p) => (
              <motion.div
                key={p.id}
                className="confetti-particle"
                style={{
                  left: `${p.x}%`,
                  top: "-10px",
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  boxShadow: `0 0 ${p.size * 2}px ${p.color}40`,
                }}
                initial={{ y: -20, opacity: 1, scale: 0 }}
                animate={{
                  y: [0, 150, 400, 700],
                  x: [0, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
                  opacity: [1, 1, 0.6, 0],
                  scale: [0, 1.2, 0.8, 0.4],
                  rotate: [0, 180, 360, 540],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  ease: "easeOut",
                }}
              />
            ))}
        </AnimatePresence>

        <motion.div
          className="success-card"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Logo */}
          <motion.div
            className="success-logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link to="/">
              <img src={binaxpay} alt="Binaxpay" />
            </Link>
          </motion.div>

          {/* Verified Badge */}
          <motion.div
            className="success-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.4, ease: "backOut" }}
          >
            <FaCheckCircle size={16} />
            Verified
          </motion.div>

          {/* Title */}
          <motion.h1
            className="success-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            Account Verified <span className="accent">Successfully!</span>
          </motion.h1>

          {/* Message */}
          <motion.p
            className="success-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            Congratulations! Your Payment Gateway account is now live.
            You're ready to accept secure crypto payments and grow your
            business with confidence.
          </motion.p>

          {/* Divider */}
          <motion.div
            className="success-divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.65, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Tip Box */}
          <motion.div
            className="success-tip"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            <div className="success-tip-icon">
              <FaRocket />
            </div>
            <p className="success-tip-text">
              <strong>Next step:</strong> Integrate your payment API or explore
              the dashboard to manage transactions and monitor analytics in real-time.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="success-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link to="/signin" className="btn-primary-action">
              Sign In
              <FaArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            className="feature-pills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {features.map((feat, i) => (
              <motion.span
                key={feat.label}
                className="feature-pill"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
              >
                <feat.icon size={12} />
                {feat.label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default RegisterSuccess;