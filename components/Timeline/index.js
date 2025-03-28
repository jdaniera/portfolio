"use client";
import { useEffect, useRef } from "react";
import styles from "./Timeline.module.css";

export default function Timeline() {
	const containerRef = useRef(null);
	const timelineRef = useRef(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			import("gsap").then((gsapModule) => {
				const gsap = gsapModule.default || gsapModule;

				import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
					gsap.registerPlugin(ScrollTrigger);

					// Horizontal scroll
					const scrollTriggerInstance = ScrollTrigger.create({
						trigger: containerRef.current,
						start: "top top",
						end: () => `+=${timelineRef.current.scrollWidth}`,
						scrub: 1,
						pin: true,
						anticipatePin: 1,
					});

					// Horizontal animation
					gsap.to(timelineRef.current, {
						x: () => -timelineRef.current.scrollWidth + window.innerWidth,
						ease: "none",
						scrollTrigger: scrollTriggerInstance,
					});

					// Section 3. Parallax 
					gsap.utils.toArray(".parallaxSection").forEach((section) => {
						const bg = section.querySelector(".bgLayer");
						const fg = section.querySelector(".fgLayer");

						if (bg) {
							gsap.to(bg, {
								y: "-10%",
								ease: "none",
								scrollTrigger: {
									trigger: section,
									start: "left center",
									end: "right center",
									scrub: true,
									containerAnimation: scrollTriggerInstance,
								},
							});
						}

						if (fg) {
							gsap.to(fg, {
								y: "-25%",
								ease: "none",
								scrollTrigger: {
									trigger: section,
									start: "left center",
									end: "right center",
									scrub: true,
									containerAnimation: scrollTriggerInstance,
								},
							});
						}
					});
				});
			});
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
