"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "@/styles/Timeline.module.css";
import Header from "@/components/Header";

export default function Timeline() {
	const containerRef = useRef(null);
	const timelineRef = useRef(null);

	useEffect(() => {
		let ctx;

		const init = async () => {
			const { ScrollTrigger } = await import("gsap/ScrollTrigger");
			gsap.registerPlugin(ScrollTrigger);

			const container = containerRef.current;
			const timeline = timelineRef.current;
			if (!container || !timeline) return;

			ctx = gsap.context(() => {
				// Horizontal scrolling animation
				const horizontalScroll = gsap.to(timeline, {
					x: () => -timeline.scrollWidth + window.innerWidth,
					ease: "none",
					scrollTrigger: {
						trigger: container,
						start: "top top",
						end: () => `+=${timeline.scrollWidth * 2.5}`, // make scrolling through a bit slower
						scrub: 1,
						pin: true,
						anticipatePin: 1,
						markers: true,
					},
				});

				const baseTrigger = {
					start: "left 50%",
					end: "left 20%",
					scrub: true,
					toggleActions: "play none none reset", // reset on scroll back
					containerAnimation: horizontalScroll,
				};

				// SECTION 1: Intro
				const section1TL = gsap.timeline({
					scrollTrigger: {
						trigger: ".milestone-1",
						...baseTrigger,
						markers: true,
					},
				});
				section1TL
					.from(".milestone-1 .ctaText", {
						opacity: 0,
						y: 20,
						duration: 2,
						ease: "power3.out",
					})
					.from(".milestone-1 .heading", {
						opacity: 0,
						y: 40,
						duration: 2,
						ease: "power3.out",
					});

				// SECTION 2: Making Things
				const section2TL = gsap.timeline({
					scrollTrigger: {
						trigger: ".milestone-2",
						...baseTrigger,
						markers: true,
					},
				});
				section2TL;
				section2TL.from(
					".milestone-2 .slideUpImage.left",
					{
						y: 100,
						opacity: 0,
						duration: 2,
						stagger: 0.5,
						ease: "power2.out",
					},
					"-=0.3"
				);

				// Right images
				section2TL
					.from(
						".milestone-2 .slideUpImage.right",
						{
							y: 100,
							opacity: 0,
							duration: 2,
							stagger: 0.5,
							ease: "power2.out",
						},
						"-=1"
					)
					.from(".milestone-2 .leftAlign p", {
						x: -50,
						opacity: 0,
						duration: 2,
						stagger: {
							each: 0.8,
							ease: "power1.inOut",
						},
						ease: "power1.inOut",
					})
					.from(".milestone-2 .rightAlign p", {
						x: 50,
						opacity: 0,
						duration: 2,
						stagger: {
							each: 0.8,
							ease: "power1.inOut",
						},
						ease: "power1.inOut",
					});

				// SECTION 3: Digital Awakening - Text
				const section3TL = gsap.timeline({
					scrollTrigger: {
						trigger: ".milestone-3",
						...baseTrigger,
						markers: true,
					},
				});
				section3TL
					.from(".milestone-3 .heading", {
						y: 50,
						opacity: 0,
						duration: 2,
						stagger: {
							each: 0.8,
							ease: "power1.inOut",
						},
						ease: "power1.inOut",
					})
					.from(".milestone-3 .rightAlign p", {
						y: 20,
						opacity: 0,
						duration: 2,
						stagger: {
							each: 0.8,
							ease: "power1.inOut",
						},
						ease: "power1.inOut",
					});

				// SECTION 3: Parallax layers
				const section = timeline.querySelector(".parallaxSection");
				if (section) {
					const bg = section.querySelector(".bgLayer");
					const mg = section.querySelector(".mgLayer");
					const fg = section.querySelector(".fgLayer");

					if (bg) {
						gsap.to(bg, {
							x: "-5%",
							ease: "none",
							scrollTrigger: {
								trigger: section,
								start: "left center",
								end: "right center",
								scrub: true,
								containerAnimation: horizontalScroll,
							},
						});
					}
					if (mg) {
						gsap.to(mg, {
							x: "-10%",
							ease: "none",
							scrollTrigger: {
								trigger: section,
								start: "left center",
								end: "right center",
								scrub: true,
								containerAnimation: horizontalScroll,
							},
						});
					}
					if (fg) {
						gsap.to(fg, {
							x: "-15%",
							scale: 1.05,
							ease: "none",
							scrollTrigger: {
								trigger: section,
								start: "left center",
								end: "right center",
								scrub: true,
								containerAnimation: horizontalScroll,
							},
						});
					}
				}

				// SECTION 4: Psychology
				const section4TL = gsap.timeline({
					scrollTrigger: {
						trigger: ".milestone-4",
						...baseTrigger,
						markers: true,
					},
				});
				section4TL
					.from(".milestone-4 .leftAlign > *", {
						x: -40,
						opacity: 0,
						duration: 1.6,
						stagger: {
							each: 0.2,
							ease: "power1.inOut",
						},
						ease: "power1.inOut",
					})
					.from(".milestone-4 .rightAlign > *", {
						x: 40,
						opacity: 0,
						duration: 1.6,
						stagger: {
							each: 0.2,
							ease: "power1.inOut",
						},
						ease: "power1.inOut",
					});
				// SECTION 5: UI/UX
				const section5TL = gsap.timeline({
					scrollTrigger: {
						trigger: ".milestone-5",
						...baseTrigger,
						markers: true,
					},
				});
				section5TL
					.from(".milestone-5 .leftAlign p", {
						y: 20,
						opacity: 0,
						duration: 2,
						stagger: {
							each: 0.8,
							ease: "power1.inOut",
						},
						ease: "power1.inOut",
					})
					.from(".milestone-5 .heading", {
						scale: 0.95,
						opacity: 0,
						duration: 2,
						stagger: {
							each: 0.8,
							ease: "power1.inOut",
						},
						ease: "power1.inOut",
					})
					.from(".milestone-5 .list li", {
						y: 30,
						opacity: 0,
						duration: 2,
						stagger: {
							each: 0.8,
							ease: "power1.inOut",
						},
						ease: "power1.inOut",
					})
					.from(".milestone-5 .rightAlign p", {
						y: 20,
						opacity: 0,
						duration: 2,
						stagger: {
							each: 0.8,
							ease: "power1.inOut",
						},
						ease: "power1.inOut",
					});

				// SECTION 6: Wrap Up
				const section6TL = gsap.timeline({
					scrollTrigger: {
						trigger: ".milestone-6",
						...baseTrigger,
						markers: true,
					},
				});
				section6TL.from(".milestone-6 p", {
					y: 40,
					opacity: 0,
					duration: 2,
					stagger: {
						each: 0.8,
						ease: "power1.inOut",
					},
					ease: "power1.inOut",
				});
			}, container);
			ScrollTrigger.refresh();
		};

		init();

		return () => ctx?.revert();
	}, []);

	return (
		<>
			<Header />
			<section ref={containerRef} className={styles.timelineSection}>
				<div ref={timelineRef} className={styles.timelineContent}>
					{/* Section 1 - Introduction & CTA */}
					<div className={`${styles.milestone} milestone milestone-1`}>
						<p className={`${styles.ctaText} ctaText`}>
							Scroll to see my journey →
						</p>
						<h2
							className={`${styles.heading} ${styles.rightAlign} rightAlign heading`}
						>
							How I’ve Been Making Stuff Forever
						</h2>
					</div>

					{/* Section 2 - Making Things Era */}
					<div className={`${styles.milestone} milestone milestone-2`}>
						<div className={styles.backgroundImageWrap}>
							{/* Left side images */}
							<div
								className={`${styles.imageGroup} ${styles.leftImages} leftImages`}
							>
								<img
									src="/images/about/dress.webp"
									alt="Paper dress"
									className={`${styles.slideUpImage} slideUpImage left`}
									id="dress"
								/>
								<img
									src="/images/about/sticker-frog.webp"
									alt="Frog sticker"
									className={`${styles.slideUpImage} slideUpImage left`}
								/>
							</div>
						</div>
						<div className={`${styles.leftAlign} leftAlign`}>
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
						<div className={styles.backgroundImageWrap}>
							{/* Right side images */}
							<div
								className={`${styles.imageGroup} ${styles.rightImages} rightImages`}
							>
								<img
									src="/images/about/star-clay.webp"
									alt="Star shaped clay piece"
									className={`${styles.slideUpImage} slideUpImage right`}
								/>
								<img
									src="/images/about/cow-magnet.webp"
									alt="Cow magnet"
									className={`${styles.slideUpImage} slideUpImage right`}
								/>
							</div>
						</div>
						<div className={`${styles.rightAlign} rightAlign`}>
							<p>
								Every birthday, Christmas, or random occasion, I’d make
								something personal for my friends—custom cards, jewelry, little
								clay trinkets, crocheted sweater.
							</p>
						</div>
					</div>

					{/* Section 3 - Tumblr & Coding */}
					<div className={`${styles.milestone} milestone milestone-3`}>
						<section className={`${styles.parallaxSection} parallaxSection`}>
							<img
								src="/images/about/bedroom-bg.png"
								className={`${styles.layer} ${styles.bgLayer} bgLayer`}
							/>
							<img
								src="/images/about/bedroom-mg.png"
								className={`${styles.layer} ${styles.mgLayer} mgLayer`}
							/>
							<img
								src="/images/about/bedroom-fg.png"
								className={`${styles.layer} ${styles.fgLayer} fgLayer`}
							/>
						</section>
						<div className={styles.leftBlock}></div>
						<div className={`${styles.rightAlign} rightAlign`}>
							<h2
								className={`${styles.heading} ${styles.rightAlign} rightAlign heading`}
							>
								The Digital Awakening
							</h2>

							<p>
								Back in my Tumblr days, I spent hours tweaking HTML & CSS to
								make my blog just right.
							</p>
							<p>
								I had no idea this was actual web development—I just wanted my
								page to look cool and feel like me. Custom fonts? Moving
								elements? Fancy hover effects? You name it, I tried it.
							</p>
						</div>
					</div>

					{/* Section 4 - Psychology & Exploration */}
					<div className={`${styles.milestone} milestone milestone-4`}>
						<div className={`${styles.leftAlign} leftAlign`}>
							<h2
								className={`${styles.heading} ${styles.leftAlign} leftAlign heading`}
							>
								Too Many Interests
							</h2>
							<p>
								When it was time for university, I went with psychology—because
								people are fascinating (and I’m nosy). But I couldn’t just do
								psychology, so I took criminology, humanities, history, and
								literature too (because… why not?).
							</p>
						</div>
						<div className={`${styles.rightAlign} rightAlign`}>
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
					<div className={`${styles.milestone} milestone milestone-5`}>
						<div className={`${styles.leftAlign} leftAlign`}>
							<p>
								With everything shut down during COVID, I had way too much time
								on my hands. So, I started messing around with code again, and
								this time, I actually wanted to understand it.
							</p>
						</div>
						<div className={`${styles.rightAlign} rightAlign`}>
							<h2
								className={`${styles.heading} ${styles.rightAlign} rightAlign heading`}
							>
								UI/UX? Oh, this is so my thing.
							</h2>
							<ul className={`${styles.list} list `}>
								<li>
									Creativity & design thinking? Check! (finally, structured
									creativity!)
								</li>
								<li>
									Human behavior & psychology? Check! (all my psych classes did
									matter!)
								</li>
								<li>
									Logic & problem-solving? Check! (my inner nerd was thriving)
								</li>
							</ul>
							<p>
								So, I joined BCIT’s Digital Design & Development program, where
								I learned how to blend design, dev, and storytelling into
								something meaningful.
							</p>
						</div>
					</div>

					{/* Section 6 - Wrapping Up */}
					<div className={`${styles.milestone} milestone milestone-6`}>
						<div className={styles.leftBlock}></div>
						<div className={`${styles.rightAlign} rightAlign`}>
							<h2
								className={`${styles.heading} ${styles.rightAlign} rightAlign heading`}
							>
								Okay, this feels right.
							</h2>
							<p>
								Now, I focus on designing and building interactive experiences,
								bringing together everything I love in a way that finally makes
								sense—but is always evolving.
							</p>
							<p>
								My portfolio reflects that journey—where design meets
								storytelling meets structured creativity, but also where
								curiosity and collaboration shape every project.
							</p>
							<p>
								I’m always discovering something new—whether it’s a fresh way to
								solve a problem, a different perspective from a teammate, or
								helping a client bring their vision to life. And honestly?
								That’s the best part.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
