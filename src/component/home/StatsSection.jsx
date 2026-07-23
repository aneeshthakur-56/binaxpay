import React, { useState, useEffect, useRef, memo } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import back from "../../assets/Image/back.png";
import styles from "./css/StatsSection.module.css";

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
      className={styles.statCard}
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
      <div className={styles.statNumber}>
        <AnimatedNumber value={stat.value} isInView={isInView} />
      </div>
      <div className={styles.statLabel}>{stat.label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className={styles.statsSection} ref={sectionRef}>
      <img src={back} alt="background" className={styles.bgImage} loading="lazy" />

      <motion.div
        className={styles.statsIntroPanel}
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

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} index={index} />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;