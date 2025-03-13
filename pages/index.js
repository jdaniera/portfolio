"use client";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import ProjectList from "@/components/ProjectList";
import { projectsData } from "@/data/projectsData";
import styles from "@/styles/Home.module.css";
import gsap from "gsap/dist/gsap";
import Observer from "gsap/dist/Observer";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useMediaQuery from "@/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const isMobile = useMediaQuery("(max-width: 840px)");
	const [showHeader, setShowHeader] = useState(false);
	const [shouldRenderHeader, setShouldRenderHeader] = useState(false);
	const projectsRef = useRef(null);
	const introRef = useRef(null);
	const headerRef = useRef(null);
	const timeoutRef = useRef(null);

	// ✅ Intersection Observer to track when `Intro` leaves the viewport
	useEffect(() => {
		const projectsElement = projectsRef.current;
		const introElement = introRef.current;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// ✅ Show header when `Projects` is fully in view
					if (entry.target === projectsElement && entry.isIntersecting) {
						if (!shouldRenderHeader) {
							timeoutRef.current = setTimeout(() => {
								setShouldRenderHeader(true);
								setShowHeader(true);
							}, 500);
						}
					}

					// ✅ Hide header when scrolling back into `Intro`
					if (entry.target === introElement && entry.isIntersecting) {
						clearTimeout(timeoutRef.current);
						setShowHeader(false);
						setShouldRenderHeader(false);
					}
				});
			},
			{ threshold: 0.8 } // ✅ Only triggers when section is ~80% visible
		);

		if (projectsElement) observer.observe(projectsElement);
		if (introElement) observer.observe(introElement);

		return () => {
			if (projectsElement) observer.unobserve(projectsElement);
			if (introElement) observer.unobserve(introElement);
			clearTimeout(timeoutRef.current);
		};
	}, [shouldRenderHeader]);

	// ✅ Smooth Header Animation
	useEffect(() => {
		if (!shouldRenderHeader || !headerRef.current) return;

		if (showHeader) {
			gsap.fromTo(
				headerRef.current,
				{ opacity: 0, y: -50 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					pointerEvents: "auto",
				}
			);
		} else {
			gsap.to(headerRef.current, {
				opacity: 0,
				y: -30,
				duration: 0.8,
				ease: "power3.inOut",
				pointerEvents: "none",
			});
		}
	}, [showHeader, shouldRenderHeader]);

	return (
		<>
			<Head>
				<title>Jasmine Putri | Portfolio</title>
				<meta
					name="description"
					content="Jasmine Putri's Portfolio | A Digital Experience Designer with a focus in story-telling and human-centered design."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{shouldRenderHeader && (
				<header ref={headerRef} className={styles.fixedHeader}>
					<Header />
				</header>
			)}

			<main className={`${styles.page}`}>
				<section
					className={`${styles.snapSection} ${styles.introSection}`}
					data-section="intro"
					ref={introRef}
				>
					<Intro />
				</section>

				{/* Projects Section */}
				<section
					ref={projectsRef}
					className={styles.projectsSection}
					gridContainer
					data-section="projects"
				>
					<article className={styles.projectsListContainer}>
						<ProjectList projects={projectsData} />
					</article>
				</section>

				{/* Footer Section */}
				{/* <div
          className={`${styles.snapSection} ${styles.footerSection}`}
          data-section="footer"
        >
          <footer className={styles.footer}>Jasmine Putri </footer>
        </div> */}
			</main>
		</>
	);
}
