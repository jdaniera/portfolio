import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import useMediaQuery from "@/hooks/useMediaQuery";
import ProjectSummary from "@/components/ProjectSummary";
import SectionTextBox from "../SectionText";
import SectionContainer from "../SectionContainer";
import FlipCard from "../FlipCard";
import FeatureBox from "../FeatureBox";
import FullWidth from "../FullWidth";
import SideNav from "../SideNav";
import styles from "@/styles/Projects.module.css";

export default function OnwardProject() {
	const isMobile = useMediaQuery("(max-width: 840px)");

	const handleLearnMore = (title) => {
		console.log(`Learn more clicked for: ${title}`);
	};

	const competitors = [
		{
			name: "Talenteria",
			image: "/images/onward/comp/talenteria.webp",
			alt: "Talenteria logo",
			focus: "AI-powered recruitment for employers",
			gaps: "Designed for recruiters, not candidates; no interview coaching for nurses",
		},
		{
			name: "CareerFlow",
			image: "/images/onward/comp/careerflow.webp",
			alt: "Career Flow logo",
			focus: "Resume, LinkedIn optimization, job tracking",
			gaps: "Broad job seeker focus; lacks industry-specific content for healthcare",
		},
		{
			name: "PrepMeUp",
			image: "/images/onward/comp/prepmeup.png",
			alt: "PrepMeUp logo",
			focus: "AI mock interviews for general job seekers",
			gaps: "No cultural adaptation or terminology support for nursing; generic question sets",
		},
		{
			name: "FinalRound AI",
			image: "/images/onward/comp/finalround.avif",
			alt: "FinalRound AI logo",
			focus: "Mock interviews for competitive industries (finance, tech)",
			gaps: "Focused on corporate careers; lacks healthcare-specific and cultural content",
		},
		{
			name: "Yoodli",
			image: "/images/onward/comp/yoodli_logo.png",
			alt: "Yoodli Logo",
			focus: "Public speaking & communication training",
			gaps: "Focuses on general communication skills, not interview-specific or healthcare-focused",
		},
		{
			name: "Google Interview Warmup",
			image: "/images/onward/comp/warmup.png",
			alt: "Google Interview Warmup logo",
			focus: "Basic AI interview practice (tech-focused)",
			gaps: "Primarily for tech roles; no cultural coaching, limited to predefined industries",
		},
		{
			name: "Interviews by AI",
			image: "/images/onward/comp/interviewsai.webp",
			alt: "Interviews by AI logo",
			focus: "AI-generated questions & feedback",
			gaps: "Lacks healthcare-specific content and cultural adaptation; general-purpose tool",
		},
	];

	return (
		<>
			<Head>
				<title>Jasmine Putri | Portfolio | Onward</title>
				<meta name="description" content="Onward Case Study" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.page}>
				<Header />

				<SideNav
					className={styles.floatingSideNav}
					sections={[
						{ name: "Overview", id: "overview" },
						{ name: "Solution", id: "solution" },
						{ name: "Persona", id: "persona" },
						{ name: "Competitive Analysis", id: "competitor-analysis" },
						{ name: "Design & Branding", id: "design" },
						{ name: "Development", id: "development" },
					]}
				/>

				<main className="gridContainer">
					{/* Overview Section */}
					<div
						className="sectionSpacing--medium"
						style={{ gridColumn: "4 / span 10" }}
						id="overview"
					>
						<SectionContainer padding="large">
							<ProjectSummary
								title="Onward"
								details={[
									{
										label: "role",
										value: "UI/UX Designer, Front-end Developer",
									},
									{ label: "timeline", value: "January 2024 — May 2024" },
									{ label: "type", value: "Website / Web App / Mobile App" },
									{ label: "toolstack", value: "Figma, Next.js" },
									{ label: "program used", value: "Next.js, Azure" },
									{
										label: "link",
										value: (
											<a
												href="https://be-neighbourly.com"
												target="_blank"
												rel="noopener noreferrer"
											>
												be-neighbourly.com
											</a>
										),
									},
								]}
							/>
						</SectionContainer>
						<SectionContainer padding="small">
							<SectionTextBox title="What is Onward?" subtitle="Overview">
								<p>
									Onward helps Internationally Educated Nurses (IENs)
									confidently enter the Canadian workforce by improving their
									interview confidence and communication skills.
								</p>
								<p>
									Created for the BCIT D3 and FSWD showcase, Onward leverages
									AI-driven pattern recognition to assist under-represented
									communities.
								</p>
							</SectionTextBox>
						</SectionContainer>
					</div>
					<div
						className="sectionSpacing--medium"
						style={{ gridColumn: "2 / span 14" }}
					>
						<Image
							src="/images/onward/transcription.png"
							alt="Neighbourly Hero"
							width={1920}
							height={1080}
							style={{ width: "100%", height: "auto" }}
						/>
					</div>

					{/* Ideation */}
					<div
						id="ideation"
						className="sectionSpacing--medium"
						style={{ gridColumn: "4 / span 10" }}
					>
						<SectionContainer>
							<SectionTextBox
								title="How Can AI-Driven Tools Support Newcomers?"
								subtitle="Ideation"
							>
								<p>
									We initially explored broader newcomer challenges, from
									navigating services to finding employment. Employment emerged
									as a critical milestone, contributing to financial security,
									social integration, and confidence.
								</p>
								<p>
									Healthcare was identified as a key sector with immigrants
									comprising 25% of Canada’s health workforce, making support
									for internationally educated nurses (IENs) essential.
								</p>
							</SectionTextBox>
						</SectionContainer>
					</div>
				</main>

				<FullWidth backgroundColor="var(--vanilla)">
					{/* Research */}
					<div
						id="research"
						className="sectionSpacing--small"
						style={{ gridColumn: "4 / span 10" }}
					>
						<SectionContainer>
							<SectionTextBox title="The Problem" subtitle="Research">
								<p>
									With immigrants making up 25% of registered nurses in Canada,
									internationally educated nurses (IENs) play a crucial role in
									supporting the country’s healthcare system. Despite their
									skills and experience,{" "}
									<b>
										many internationally educated professionals struggle to find
										employment that matches their qualifications.
									</b>
								</p>
								<p>
									In 2021, 26.7% of recent immigrants were employed in positions
									for which they were overqualified, underscoring ongoing
									challenges related to credential recognition, licensing
									requirements, and adapting to Canadian workplace expectations.
								</p>
							</SectionTextBox>
						</SectionContainer>
						<div
							style={{
								gridColumn: "4 / span 10",
								marginTop: "2rem",
								marginBottom: "2rem",
							}}
						>
							<h2
								style={{
									color: "var(--violet)",
									fontSize: "1.5rem",
									marginBottom: "1rem",
									textAlign: "center",
								}}
							>
								What Barriers do IENs Trying to Enter the Canadian Healthcare
								Face?
							</h2>
						</div>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
								gap: "16px",
								gridColumn: "4 / span 10",
								marginBottom: "4rem",
							}}
						>
							<FlipCard
								title="Credential Recognition & Licensing"
								description="Many IENs face lengthy and expensive processes to have their qualifications recognized in Canada. These often include extra exams, bridging programs, and courses to meet provincial licensing requirements. This leads to underemployment and long delays in returning to their profession."
								buttonText="Learn More"
								onButtonClick={() =>
									handleLearnMore("Credential Recognition & Licensing")
								}
							/>

							<FlipCard
								title="Cultural & Communication Barriers"
								description="Canadian healthcare interviews emphasize soft skills, cultural competency, and familiarity with local healthcare practices. IENs often find these expectations challenging due to unfamiliar formats, different terminology, and cultural differences in how professional experiences are presented."
								buttonText="Learn More"
								onButtonClick={() =>
									handleLearnMore("Cultural & Communication Barriers")
								}
							/>

							<FlipCard
								title="Performance Anxiety & Feedback Gaps"
								description="For many IENs, interview anxiety is heightened by unfamiliar hiring practices and a lack of culturally relevant preparation. Canadian employers expect candidates to use the STAR method — often unfamiliar to IENs. Without tailored feedback and practice, they struggle to communicate their skills, impacting confidence and performance."
								buttonText="Learn More"
								onButtonClick={() =>
									handleLearnMore("Performance Anxiety & Feedback Gaps")
								}
							/>
						</div>
						<SectionContainer>
							{/* Survey Insights Section */}
							<div id="survey-insights" className="sectionSpacing--medium">
								<SectionTextBox title="Survey Insights" subtitle="">
									<p>
										To better understand the unique challenges in job
										interviews, surveys of internationally educated and local
										nurses explored how communication, credentials, and
										preparation affect performance.
									</p>
								</SectionTextBox>
								<FeatureBox
									title="Common Challenges"
									variant="columnLayout"
									features={[
										{
											heading: "Anxiety & Nerves",
											description:
												"Both IENs and local nurses feel nervous, especially when underprepared.",
										},
										{
											heading: "Limited Preparation",
											description:
												"Many nurses struggle to find time and effective ways to prepare.",
										},
										{
											heading: "Critical Thinking Under Pressure",
											description:
												"On-the-spot thinking during behavioural questions is difficult for both groups.",
										},
									]}
									backgroundColors={[
										"var(--taupe)",
										"var(--taupe)",
										"var(--taupe)",
									]}
								/>
								<FeatureBox
									title="Unique IEN Challenges"
									variant="columnLayout"
									features={[
										{
											heading: "Recognition of Experience & Credentials",
											description:
												"IENs feel their international qualifications are undervalued during interviews.",
										},
										{
											heading: "Language & Terminology Barriers",
											description:
												"IENs often struggle with unfamiliar phrases and terminology, adding stress.",
										},
										{
											heading: "Cultural & Style Differences",
											description:
												"IENs find it difficult to match Canadian expectations for self-promotion and structured responses.",
										},
										{
											heading: "Confidence & Self-Presentation",
											description:
												"Cultural norms around modesty make it harder for IENs to confidently promote themselves.",
										},
									]}
									backgroundColors={[
										"var(--jasmine)",
										"var(--jasmine)",
										"var(--jasmine)",
										"var(--jasmine)",
									]}
								/>
							</div>
						</SectionContainer>
					</div>
				</FullWidth>
				<main className="gridContainer">
					{/* Solution Section */}
					<div
						className="sectionSpacing--medium"
						style={{ gridColumn: "4 / span 10" }}
						id="solution"
					>
						<SectionContainer padding="small">
							<SectionTextBox
								title="Personalized Interview Coaching"
								subtitle="Solution"
							>
								<p>
									Onward tailors practice sessions and feedback to each user’s
									background, helping IENs build the skills, confidence, and
									cultural awareness needed to succeed in Canadian healthcare
									interviews.
								</p>
							</SectionTextBox>
							<video
								src="/images/onward/onward-practice-demo.webm"
								autoPlay
								loop
								muted
								playsInline
								className={styles.fullWidthMedia}
							/>
						</SectionContainer>
					</div>

					{/* Persona Section */}
					<div
						className="sectionSpacing--medium"
						style={{ gridColumn: "4 / span 10" }}
						id="persona"
					>
						<SectionContainer padding="large">
							<SectionTextBox title="User Persona" />
							<div style={{ gridColumn: "span 16", marginTop: "0" }}>
								<Image
									src="/images/onward/persona-primary.png"
									width={785}
									height={636}
									alt="Primary persona, an internationally educated nurse in Canada."
									style={{ width: "95%", height: "auto" }}
								/>
								<Image
									src="/images/onward/persona-secondary.png"
									width={785}
									height={636}
									alt="Secondary persona, a registered nurse and mentor in Canada."
									style={{ width: "95%", height: "auto" }}
								/>
							</div>
							<SectionTextBox title="Competitive Analysis" />
							<div className={styles.tableWrapper}>
								<table className={styles.competitorTable}>
									<thead>
										<tr>
											<th>Competitor</th>
											<th>Focus Area</th>
											<th>Key Gaps for IENs</th>
										</tr>
									</thead>
									<tbody>
										{competitors.map((comp, index) => (
											<tr key={index}>
												<td className={styles.logoCell}>
													<img src={comp.image} alt={comp.name} />
												</td>
												<td>{comp.focus}</td>
												<td>{comp.gaps}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</SectionContainer>
					</div>

					{/* Competitor Analysis Section */}
					<div
						className="sectionSpacing--small"
						style={{ gridColumn: "4 / span 10" }}
						id="competitor-analysis"
					></div>

					{/* Design & Branding */}
					<div
						id="design"
						className="sectionSpacing--medium"
						style={{ gridColumn: "4 / span 10" }}
					>
						<SectionContainer padding="large">
							<SectionTextBox title="Sitemap" subtitle="Design" />
							<iframe
								className={styles.embeddedFigma}
								src="https://embed.figma.com/design/Y7EEsmdBvghuWUbECvEeVN/Onward---FOR-CASE-STUDY?node-id=242-2&embed-host=share"
								allowFullScreen
							/>
							<SectionTextBox title="Lo-fi & Hi-fi Wireframes" />
							<iframe
								className={styles.embeddedFigma}
								src="https://embed.figma.com/design/Y7EEsmdBvghuWUbECvEeVN/Onward---FOR-CASE-STUDY?node-id=164-473&embed-host=share"
								allowFullScreen
							/>
							<SectionTextBox title="Styleguide" />
							<iframe
								className={styles.embeddedFigma}
								src="https://embed.figma.com/design/Y7EEsmdBvghuWUbECvEeVN/Onward---FOR-CASE-STUDY?node-id=435-4&embed-host=share"
								allowFullScreen
							/>
						</SectionContainer>
					</div>

					{/* Development Section */}
					<div
						className="sectionSpacing--medium"
						style={{ gridColumn: "4 / span 10" }}
						id="development"
					>
						<SectionContainer padding="medium">
							<SectionTextBox
								title="Technology & Features"
								subtitle="Development"
							>
								<p>
									Onward uses AI-powered transcription, resume parsing, and
									real-time feedback to provide personalized interview coaching,
									helping IENs navigate language, culture, and confidence
									barriers.
								</p>
							</SectionTextBox>
						</SectionContainer>
					</div>
				</main>

				<footer className={styles.footer}>Jasmine Putri</footer>
			</div>
		</>
	);
}
