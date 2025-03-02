import React from "react";
import styles from "./ProjectSummary.module.css";

const ProjectSummary = ({ title, details }) => {
  return (
    <div className={styles.projectSummary}>
      <h1 className={styles.projectTitle}>{title}</h1>
      <ul className={styles.detailsGrid}>
        {details.map(({ label, value }, index) => (
          <li key={index} className={styles.detailItem}>
            <span className={styles.label}>{label}:</span>
            <span className={styles.value}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSummary;
