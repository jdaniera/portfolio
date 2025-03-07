import React from "react";
import clsx from "clsx";
import styles from "./TwoColBox.module.css";

export default function TwoColBox({
	leftContent,
	rightContent,
	variant = "5050",
	align = "top",
	justify = "left",
	customStyles = {},
	gap = "0"
}) {
	return (
		<div
			className={clsx(styles.twoColumnBox, styles[`variant-${variant}`])}
			style={{
				...customStyles.outer,
				maxWidth: customStyles.outer?.maxWidth || "1200px",
				margin: "0 auto",
				gap: gap
			}}
		>
			{/* Left Column */}
			<div
				className={clsx(
					styles.column,
					styles[`align-${align}`],
					styles[`justify-${justify}`]
				)}
				style={customStyles.left}
			>
				{leftContent}
			</div>

			{/* Right Column */}
			<div
				className={clsx(
					styles.column,
					styles[`align-${align}`],
					styles[`justify-${justify}`]
				)}
				style={customStyles.right}
			>
				{rightContent}
			</div>
		</div>
	);
}
