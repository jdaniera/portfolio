import React from "react";
import styles from "./SectionText.module.css";
import clsx from "clsx";

const SectionTextBox = ({
  title,
  subtitle = "",
  children,
  variant = "",  // Can pass "compact" or other future variants
  customStyles = {},  // Only supports `outer` for outer container tweaks
}) => {
  return (
    <div
      className={clsx(styles.outerContainer, variant && styles[variant])}
      style={{
        ...customStyles.outer,
      }}
    >
      {/* Optional Subtitle Row */}
      {subtitle && (
        <div className={styles.subtitleRow}>
          <div className={styles.leftColumn}>
            <p className={styles.containerSubtitle}>{subtitle}</p>
          </div>
          <div className={styles.rightColumn}></div>
        </div>
      )}

      {/* Title + Content */}
      <div className={styles.row}>
        <div className={styles.leftColumn}>
          <h2 className={styles.containerTitle}>{title}</h2>
        </div>
        <div className={styles.rightColumn}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SectionTextBox;
