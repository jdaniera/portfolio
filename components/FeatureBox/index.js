import React from "react";
import styles from "./FeatureBox.module.css";

export default function FeatureBox({ 
    title, 
    features = [], 
    backgroundColors = [], 
    customStyles = {} 
}) {
    return (
        <div 
            className={styles.featureBox} 
            style={{ ...customStyles }} 
        >
            {title && <h2 className={styles.sectionTitle}>{title}</h2>}
            <div
                className={styles.dynamicGrid}
                style={{ gridTemplateColumns: `repeat(${features.length}, 1fr)` }}
            >
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={styles.featureCard}
                        style={{ backgroundColor: backgroundColors[index] || 'var(--grey)' }}
                    >
                        <h3 className={styles.featureTitle}>{feature.heading}</h3>
                        <p className={styles.featureDescription}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
