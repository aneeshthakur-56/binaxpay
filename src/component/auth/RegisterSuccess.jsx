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
import binaxpay from "../../assets/Image/binaxpay.png";
import styles from "./css/RegisterSuccess.module.css";

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
    <div className={styles.successPage}>
      {/* Confetti particles */}
      <AnimatePresence>
        {showConfetti &&
          particles.map((p) => (
            <motion.div
              key={p.id}
              className={styles.confettiParticle}
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
        className={styles.successCard}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -12, 0],
        }}
        transition={{
          opacity: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
          scale: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
          y: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.7,
          },
        }}
      >
        {/* Logo */}
        <motion.div
          className={styles.successLogo}
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
          className={styles.successBadge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.4, ease: "backOut" }}
        >
          <FaCheckCircle size={16} />
          Verified
        </motion.div>

        {/* Title */}
        <motion.h1
          className={styles.successTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          Account Verified <span className={styles.accent}>Successfully!</span>
        </motion.h1>

        {/* Message */}
        <motion.p
          className={styles.successMessage}
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
          className={styles.successDivider}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.65, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Tip Box */}
        <motion.div
          className={styles.successTip}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          <div className={styles.successTipIcon}>
            <FaRocket />
          </div>
          <p className={styles.successTipText}>
            <strong>Next step:</strong> Integrate your payment API or explore
            the dashboard to manage transactions and monitor analytics in real-time.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className={styles.successActions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <Link to="/signin" className={styles.btnPrimaryAction}>
            Sign In
            <FaArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          className={styles.featurePills}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          {features.map((feat, i) => (
            <motion.span
              key={feat.label}
              className={styles.featurePill}
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
  );
};

export default RegisterSuccess;