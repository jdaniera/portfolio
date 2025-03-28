"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./Timeline.module.css";

export default function Timeline() {
	const containerRef = useRef(null);
	const timelineRef = useRef(null);

	useLayoutEffect(() => {
		if (typeof window !== "undefined") {
			const loadGSAP = async () => {
				const gsapModule = await import("gsap");
				const scrollTriggerModule = await import("gsap/ScrollTrigger");

				const gsap = gsapModule.default || gsapModule;
				const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
				gsap.registerPlugin(ScrollTrigger);

				const ctx = gsap.context(() => {
					const container = containerRef.current;
					const timeline = timelineRef.current;
					if (!container || !timeline) return;

					// Horizontal scroll animation
					const horizontalTween = gsap.to(timeline, {
						x: () => -timeline.scrollWidth + window.innerWidth,
						ease: "none",
						scrollTrigger: {
							trigger: container,
							start: "top top",
							end: () => `+=${timeline.scrollWidth}`,
							scrub: 1,
							pin: true,
							anticipatePin: 1,
							id: "horizontalScroll",
						},
					});

					const containerAnim = horizontalTween.scrollTrigger;

					// Parallax effect for Section 3
					const section = document.querySelector(".parallaxSection");
					if (section) {
						const bg = section.querySelector(".bgLayer");
						const fg = section.querySelector(".fgLayer");

						if (bg) {
							gsap.to(bg, {
								y: "-20%",
								ease: "none",
								scrollTrigger: {
									trigger: section,
									start: "left center",
									end: "right center",
									scrub: true,
									containerAnimation: containerAnim,
								},
							});
						}

						if (fg) {
							gsap.to(fg, {
								y: "-45%",
								scale: 1.1,
								opacity: 1,
								ease: "none",
								scrollTrigger: {
									trigger: section,
									start: "left center",
									end: "right center",
									scrub: true,
									containerAnimation: containerAnim,
								},
							});
						}
					}
				}, containerRef);

				// Refresh ScrollTrigger after setup
				ScrollTrigger.refresh();

				// Cleanup function to kill animations and ScrollTriggers
				return () => ctx.revert();
			};

			loadGSAP();
		}
	}, []);

	return (
		<section ref={containerRef} className={styles.timelineSection}>
			<div ref={timelineRef} className={styles.timelineContent}>
				{/* Section 1 - Introduction & CTA */}
				<div className={styles.milestone}>
					<p className={styles.ctaText}>Scroll to see my journey →</p>
					<h2 className={`${styles.heading} ${styles.rightAlign}`}>
						How I’ve Been Making Stuff Forever
					</h2>
				</div>

				{/* Section 2 - Making Things Era */}
				<div className={styles.milestone}>
					<div className={styles.leftAlign}>
						<p>
							I can’t remember a time when I wasn’t making something—if I had
							paper, markers, and scissors, I had a project.
						</p>
						<p>
							Pencil dolls? I made paper clothes for them (custom wardrobe, of
							course). Sticker packs? Just my drawings with double-sided tape.
							Basically, if I could create it, I did.
						</p>
					</div>
					<div className={styles.rightAlign}>
						<p>
							Every birthday, Christmas, or random occasion, I’d make something
							personal for my friends—custom cards, jewelry, little clay
							trinkets, crocheted sweater.
						</p>
					</div>
				</div>

				{/* Section 3 - Tumblr & Coding */}
				<div className={styles.milestone}>
					<section className={`${styles.parallaxSection} parallaxSection`}>
						<img
							src="/images/about/bedroom.png"
							className={`${styles.layer} ${styles.bgLayer} bgLayer`}
						/>
						<img
							src="/images/about/computer.png"
							className={`${styles.layer} ${styles.fgLayer} fgLayer`}
						/>
					</section>
					<div className={styles.leftBlock}></div>
					<div className={styles.rightAlign}>
						<h2 className={`${styles.heading} ${styles.rightAlign}`}>
							The Digital Awakening
						</h2>

						<p>
							Back in my Tumblr days, I spent hours tweaking HTML & CSS to make
							my blog just right.
						</p>
						<p>
							I had no idea this was actual web development—I just wanted my
							page to look cool and feel like me. Custom fonts? Moving elements?
							Fancy hover effects? You name it, I tried it.
						</p>
					</div>
				</div>

				{/* Section 4 - Psychology & Exploration */}
				<div className={styles.milestone}>
					<div className={styles.leftAlign}>
						<h2 className={`${styles.heading} ${styles.leftAlign}`}>
							Too Many Interests
						</h2>
						<p>
							When it was time for university, I went with psychology—because
							people are fascinating (and I’m nosy). But I couldn’t just do
							psychology, so I took criminology, humanities, history, and
							literature too (because… why not?).
						</p>
					</div>
					<div className={styles.rightAlign}>
						<p>
							After graduating, I wasn’t sure what to do next, so I worked in
							restaurants for a few years. I became fascinated by the art of
							food & cocktails, realizing creativity isn’t limited to just
							“art”—it’s about how you put things together.
						</p>
						<p>
							It was another way of telling stories—which, looking back, has
							always been a theme for me.
						</p>
					</div>
				</div>

				{/* Section 5 - UI/UX Discovery */}
				<div className={styles.milestone}>
					<div className={styles.leftAlign}>
						<p>
							With everything shut down during COVID, I had way too much time on
							my hands. So, I started messing around with code again, and this
							time, I actually wanted to understand it.
						</p>
					</div>
					<div className={styles.rightAlign}>
						<h2 className={`${styles.heading} ${styles.rightAlign}`}>
							UI/UX? Oh, this is so my thing.
						</h2>
						<ul className={styles.list}>
							<li>
								Creativity & design thinking (finally, structured creativity!)
							</li>
							<li>
								Human behavior & psychology (all my psych classes did matter!)
							</li>
							<li>Logic & problem-solving (my inner nerd was thriving)</li>
						</ul>
						<p>
							So, I joined BCIT’s Digital Design & Development program, where I
							learned how to blend design, dev, and storytelling into something
							meaningful.
						</p>
					</div>
				</div>

				{/* Section 6 - Wrapping Up */}
				<div className={styles.milestone}>
					<div className={styles.leftBlock}></div>
					<div className={styles.rightAlign}>
						<h2 className={`${styles.heading} ${styles.rightAlign}`}>
							Okay, this feels right.
						</h2>
						<p>
							Now, I focus on designing and building interactive experiences,
							bringing together everything I love in a way that finally makes
							sense—but is always evolving.
						</p>
						<p>
							My portfolio reflects that journey—where design meets storytelling
							meets structured creativity, but also where curiosity and
							collaboration shape every project.
						</p>
						<p>
							I’m always discovering something new—whether it’s a fresh way to
							solve a problem, a different perspective from a teammate, or
							helping a client bring their vision to life. And honestly? That’s
							the best part.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
