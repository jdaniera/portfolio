import React from "react";
import clsx from "clsx";
import styles from "./SectionContainer.module.css";



export default function SectionContainer({
	children,
	spacing = "medium",          
	background = "transparent", 
	fullWidth = false,  
	id = ""
}) {
	return (
		<section
			id={id}
			className={clsx(
				styles.sectionContainer,
				styles[`spacing-${spacing}`],
				{ [styles.fullWidth]: fullWidth }
			)}
			style={{ backgroundColor: background }}
		>
			<div className={styles.content}>
				{children}
			</div>
		</section>
	);
}
