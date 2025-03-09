"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./BlendCursor.module.css"; 

export default function BlendCursor() {
	const colors = ["#FCF2C5", "#FDF6D8", "#FEFBEC", "#FBEFB1"];
	const circles = useRef([]);

	useEffect(() => {
		const moveCircles = (e) => {
			if (circles.current.length < 1) return;
			circles.current.forEach((circle, i) => {
				gsap.to(circle, {
					x: e.clientX,
					y: e.clientY,
					xPercent: -50,
					yPercent: -50,
					delay: i * 1,
					ease: "slow",
				});
			});
		};

		window.addEventListener("mousemove", moveCircles);
		return () => {
			window.removeEventListener("mousemove", moveCircles);
		};
	}, []);

	return (
		<>
			{[...Array(4)].map((_, i) => (
				<div
					key={i}
					ref={(ref) => (circles.current[i] = ref)}
					className={styles.blendCursor}
					style={{
						backgroundColor: colors[i],
						width: 500 - i * 15, // Different sizes for trailing effect
						height: 500 - i * 15,
						filter: `blur(${200 - i * 5}px)`, // Increasing blur on layers
						transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
					}}
				/>
			))}
		</>
	);
}
