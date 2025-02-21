import React from "react";
import styles from "./Box.module.css";

const Box = ({
  outerBgColor = "transparent",
  innerBgColor = "transparent",
  borderColor = "transparent",
  borderWidth = 2,
  title,
  subtitle,
  children,
  customStyles = {},
}) => {
  return (
    <div
      className={styles.outerContainer}
      style={{
        "--outer-bg": outerBgColor,
        "--border-color": borderColor,
        "--border-width": `${borderWidth}px`,
        ...customStyles.outer,
      }}
    >
      {/* Subtitle Row (Empty Right Column) */}
      {subtitle && (
        <div className={styles.subtitleRow}>
          <div className={styles.leftColumn}>
            <p className={styles.containerSubtitle}>{subtitle}</p>
          </div>
          <div className={styles.rightColumn}></div>
        </div>
      )}

      {/* Title + Right Column Row */}
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

export default Box;
