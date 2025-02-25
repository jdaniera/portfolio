import React from "react";
import styles from "./FeatureBox.module.css";

const FeatureBox = ({ title, features, customStyles = {} }) => {
  return (
    <div className={styles.container} style={{ ...customStyles.container }}>
      {/* Section Title */}
      <h3 className={styles.sectionTitle} style={{ ...customStyles.title }}>{title}</h3>

      {/* Features Grid */}
      <div className={styles.featuresGrid} style={{ ...customStyles.grid }}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard} style={{ ...customStyles.card }}>
            <h4 className={styles.featureTitle} style={{ ...customStyles.featureTitle }}>{feature.heading}</h4>
            <p className={styles.featureDescription} style={{ ...customStyles.featureDescription }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBox;
