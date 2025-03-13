"use client";
import Menu from "../Menu";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Intro.module.css";
import BlendCursor from "@/components/BlendCursor";

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
			duration: 1.8,
			stagger: 0.8,
			ease: "power2.out",
		});

		// Menu animation
		gsap.from(menuRef.current, {
			opacity: 0,
			x: 30,
			duration: 1.8,
			delay: 1.2,
			ease: "power2.out",
		});

		// Logo animation
		gsap.from(logoRef.current, {
			opacity: 0,
			scale: 0.6,
			filter: "blur(10px)", 
			duration: 2, 
			delay: 1.8,
			ease: "power3.out", 
			onComplete: () => {
				gsap.to(logoRef.current, { filter: "blur(0px)", duration: 0.5 }); // clear blur effect
			}
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
		<>
			<div className={styles.introWrapper}>
				<BlendCursor />
				<div className={`gridContainer ${styles.introOuterContainer}`}>
					<div
						className={styles.textContainer}
						style={{ gridColumn: "2 / 11" }}
					>
						<div className={styles.disclaimer}>
							<p>
								This portfolio is still a work in progress. For the best experience please view on desktop.
							</p>
						</div>
						<div className={styles.introInnerContainer}>
							<h1 ref={textRef}>
								Hello,
								<br />
								<span>welcome.</span>
							</h1>
							<p ref={subTextRef}>
								Jasmine Putri is a Vancouver-based multidisciplinary digital
								experience designer with a love for story-telling and
								human-centered design.
							</p>
						</div>
					</div>
					<div
						className={styles.menuWrapper}
						style={{ gridColumn: "12 / 14" }}
						ref={menuRef}
					>
						<Menu layout="column" animate="true"/>
					</div>
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
			</div>
		</>
	);
}
