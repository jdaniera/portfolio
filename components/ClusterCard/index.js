import React from "react";
import styles from "./ClusterCard.module.css";
import clsx from "clsx";

export default function ClusterCard({ title, description, variant = "common" }) {
    return (
        <div className={clsx(styles.card, variant === "ien" ? styles.ienCard : styles.commonCard)}>
            <h4 className={styles.cardTitle}>{title}</h4>
            <p className={styles.cardDescription}>{description}</p>
        </div>
    );
}
