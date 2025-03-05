import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import styles from "./FeatureBox.module.css";

export default function FeatureBox({
	title,
	features = [],
	backgroundColors = [],
	customStyles = {},
	variant = "grid",
	alignment = "left",
	itemAlignmentHorizontal = "left",
	itemAlignmentVertical = "top",
}) {
	const isMobile = useMediaQuery("(max-width: 840px)");
	const shouldForceColumn = isMobile && features.length > 2;

	const isColumn = shouldForceColumn ? true : variant === "column";

	const alignmentClass = isColumn
		? styles[`columnLayout_${alignment}`]
		: styles.dynamicGrid;

	const horizontalClass = styles[`items-align-${itemAlignmentHorizontal}`];
	const verticalClass = styles[`items-align-${itemAlignmentVertical}`];

	return (
		<div className={styles.featureBox} style={{ ...customStyles }}>
			{title && <h2 className={styles.featureSectionTitle}>{title}</h2>}
			<div
				className={`${alignmentClass} ${horizontalClass} ${verticalClass}`}
				style={
					isColumn
						? {}
						: { gridTemplateColumns: `repeat(${features.length}, 1fr)` }
				}
			>
				{features.map((feature, index) => (
					<div
						key={index}
						className={styles.featureCard}
						style={{
							backgroundColor: backgroundColors[index] || "transparent",
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
