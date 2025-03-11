"use client";
import Link from "next/link";
import styles from "./ProjectList.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectList({ projects }) {
	const sectionTitleRef = useRef(null);

	return (
		<>
			<div className="gridContainer" id="projectList">
				<div
					className={styles.sectionTitleContainer}
					style={{ gridColumn: "1 / 5" }}
				>
					<div className={styles.sectionTitle} ref={sectionTitleRef}>
						<h2 className={styles.titleTop}>selected</h2>
						<h2 className={styles.titleBottom}>projects</h2>
					</div>
				</div>
				<div className={styles.projectList} style={{ gridColumn: "6 / 16" }}>
					{projects.map((project) => (
						<div className={styles.projectItem} key={project.slug}>
							<div className={styles.projectCardWrapper}>
								<Link href={`/projects/${project.slug}`} passHref>
									<div className={styles.projectCard}>
										{/* Project Image */}
										<div className={styles.projectImage}>
											<img src={project.image} alt={project.title} />
										</div>

										{/* Project Details */}
										<div className={styles.projectDetails}>
											<h3 className={styles.projectTitle}>
												{project.title}
												{project.tag && (
													<sup className={styles.studyTag}>{project.tag}</sup>
												)}
											</h3>

											{/* SUMMARY  */}
											<p className={styles.projectSummary}>{project.summary}</p>

											{/* DETAILS */}
											{["Role", "Type", "Tools"].map((label) => {
												const field = project.overview.find(
													(item) => item.label === label
												);
												return field ? (
													<p key={label} className={styles.projectMeta}>
														<strong>{label}: </strong>
														{field.value}
													</p>
												) : null;
											})}
										</div>
									</div>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
			`
		</>
	);
}
