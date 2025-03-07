import React from "react";
import clsx from "clsx";
import styles from "./SectionText.module.css";

const SectionTextBox = ({
    title,
    subtitle = "",
    children,
    className = "",
    customStyles = {},
    variant = "", // base: 3 col title, fullTitle = no grid contraisnt
}) => {
    return (
        <div
            className={clsx(styles.sectionTextBox, className, variant && styles[variant])}
            style={customStyles.outer}
        >
            <div className={clsx(styles.grid, variant && styles[`${variant}Grid`])}>
                {/* Left Column: Title + Subtitle */}
                <div className={styles.leftColumn}>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    <h2 className={styles.title}>{title}</h2>
                </div>

                {/* Spacer Column (only for regular layout) */}
                {variant !== "fullTitle" && (
                    <div className={styles.spacer} aria-hidden="true" />
                )}

                {/* Right Column: Description */}
                <div className={styles.rightColumn}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SectionTextBox;
