import React from "react";
import styles from "./Pricing.module.css";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["Generate QR Codes", "Basic Styling", "Download as SVG"],
      button: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$9.99/mo",
      features: [
        "Unlimited QR Codes",
        "Custom Colors & Logo",
        "Download as PNG & SVG",
        "Priority Support",
      ],
      button: "Choose Pro",
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$19.99/mo",
      features: [
        "All Pro Features",
        "Analytics & Tracking",
        "High-Resolution QR Codes",
        "Team Collaboration",
      ],
      button: "Choose Premium",
      highlighted: false,
    },
  ];

  return (
    <div className={styles.pricingBg}>
      <h1 className={styles.pricingTitle}>Pricing Plans</h1>
      <div className={styles.pricingGrid}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={
              plan.highlighted
                ? `${styles.pricingCard} ${styles.pricingCardHighlight}`
                : styles.pricingCard
            }
          >
            <h2 className={styles.planName}>{plan.name}</h2>
            <p className={styles.planPrice}>{plan.price}</p>
            <ul className={styles.planFeatures}>
              {plan.features.map((feature, i) => (
                <li key={i} className={styles.planFeatureItem}>
                  <span className={styles.check}>✔</span> <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={
                plan.highlighted
                  ? `${styles.planBtn} ${styles.planBtnHighlight}`
                  : styles.planBtn
              }
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;