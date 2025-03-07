import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";
import styles from "./FeatureBox.module.css";

export default function FeatureBox({
	title,
	features = [],
	backgroundColors = [],
	customStyles = {},
	variant = "grid",
	titleVariant = "default",
}) {
	const isMobile = useMediaQuery("(max-width: 840px)");

	const isColumnFallback = isMobile && features.length > 2;

	const layoutClass = clsx({
		[styles.columnLayout]: variant === "column" || isColumnFallback,
		[styles.smallLayout]: variant === "small",
		[styles.mediumLayout]: variant === "medium",
		[styles.largeLayout]: variant === "large",
		[styles.smallGridLayout]: variant === "smallGrid" && !isMobile,
	});

	const titleClass = clsx(styles.featureSectionTitle, {
        [styles.smallTitle]: titleVariant === "small",  
        [styles.largeTitle]: titleVariant === "large" || "",
    });

	return (
		<div className={styles.featureBox} style={{ ...customStyles }}>
            {title && <h2 className={titleClass}>{title}</h2>}
            <div className={layoutClass}>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={styles.featureCard}
                        style={{
                            backgroundColor: backgroundColors[index] || "transparent",
                            boxShadow: backgroundColors[index]
                                ? "0 2px 6px rgba(0, 0, 0, 0.05)"
                                : "none",
                        }}
                    >
                        <h3 className={styles.featureTitle}>{feature.heading}</h3>
                        <p className={styles.featureDescription}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
	);
}
