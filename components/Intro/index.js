"use client";
import Menu from "../Menu";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Intro.module.css";

export default function Intro() {
	const logoWrapperRef = useRef(null);
	const logoRef = useRef(null);
	const textRef = useRef(null);
	const subTextRef = useRef(null);
	const menuRef = useRef(null);

	useEffect(() => {
		// Text animation on mount
		gsap.from([textRef.current, subTextRef.current], {
			opacity: 0,
			y: 50,
			duration: 1,
			stagger: 0.3,
			ease: "power3.out",
		});

		// Menu animation
		gsap.from(menuRef.current, {
			opacity: 0,
			x: 30,
			duration: 1,
			delay: 0.6,
			ease: "power3.out",
		});

		// Mouse movement effect for logo
		const handleMouseMove = (e) => {
			const { innerWidth, innerHeight } = window;
			const x = (e.clientX / innerWidth - 0.5) * 20;
			const y = (e.clientY / innerHeight - 0.5) * 20;

			gsap.to(logoRef.current, {
				rotateX: y / 2,
				rotateY: -x / 2,
				x: -x / 1,
				y: -y / 1,
				transformPerspective: 1000,
				transformOrigin: "center",
				duration: 0.6,
				ease: "slow",
			});
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className={`gridContainer ${styles.introOuterContainer}`}>
			<div
				className={styles.introInnerContainer}
				style={{ gridColumn: "2 / 11" }}
			>
				<h1 ref={textRef}>
					Hello,
					<br />
					<span>welcome.</span>
				</h1>
				<p ref={subTextRef}>
					Jasmine Putri is a Vancouver-based multidisciplinary digital
					experience designer with a love for story-telling and human-centered
					design.
				</p>
			</div>
			<div ref={logoWrapperRef} className={styles.logoWrapper}>
				<div className={styles.logoContainer} ref={logoRef}>
					<Image
						src="/images/logo/logo-light.svg"
						alt="Jasmine Putri logo"
						width={1920}
						height={1080}
						style={{ width: "100%", height: "auto" }}
					/>
				</div>
			</div>
			<div style={{ gridColumn: "12 / 14" }} ref={menuRef}>
				<Menu layout="column" />
			</div>
		</div>
	);
}
