import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import useMediaQuery from "@/hooks/useMediaQuery";
import { projectsData } from "@/data/projectsData";
import ProjectSummary from "@/components/ProjectSummary";
import SectionTextBox from "../SectionText";
import SectionContainer from "../SectionContainer";
import FlipCard from "../FlipCard";
import FeatureBox from "../FeatureBox";
import FullWidth from "../FullWidth";
import SideNav from "../SideNav";
import styles from "@/styles/Projects.module.css";
import TwoColBox from "../TwoColBox";
import ResponsiveSection from "../ResponsiveSection";

export default function OnwardProject() {
	const isMobile = useMediaQuery("(max-width: 840px)");

	const projectSlug = "onward";
	const project = projectsData.find((p) => p.slug === projectSlug);

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
						{ name: "Research", id: "research" },
						{ name: "Solution", id: "solution" },
						{ name: "Design & Branding", id: "design" },
						{ name: "Development", id: "development" },
					]}
				/>

				<main className="gridContainer">
					{/* Overview Section */}
					<div
						className="sectionSpacing--medium"
						style={{ gridColumn: "3 / 15" }}
						id="overview"
					>
						<SectionContainer>
							<ProjectSummary
								title={project.title}
								details={project.overview.map((item) => ({
									label: item.label,
									value:
										item.label === "Link" && typeof item.value === "object" ? (
											<a
												href={item.value.url}
												target="_blank"
												rel="noopener noreferrer"
											>
												{item.value.text}
											</a>
										) : (
											item.value
										),
								}))}
							/>
						</SectionContainer>
						<SectionContainer>
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
						style={{ gridColumn: "span 16" }}
					>
						<Image
							src="/images/onward/desktop-answer.webp"
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
						style={{ gridColumn: "3 / 15" }}
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
						style={{ gridColumn: "3 / 15" }}
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
								gridColumn: "3 / 15",
								marginTop: "2rem",
								marginBottom: "2rem",
							}}
						>
							<h2
								style={{
									color: "var(--violet)",
									fontSize: "1.5rem",
									marginBottom: "1rem",
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
								gridColumn: "3 / 15",
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

						{/* Survey Insights Section */}
						<div id="survey-insights" className="sectionSpacing--small">
							<SectionContainer>
								<SectionTextBox title="Survey Insights" subtitle="">
									<p>
										To better understand the unique challenges in job
										interviews, surveys of internationally educated and local
										nurses explored how communication, credentials, and
										preparation affect performance.
									</p>
								</SectionTextBox>
								<TwoColBox
									leftContent={
										<>
											<FeatureBox
												titleVariant="small"
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
										</>
									}
									rightContent={
										<>
											<FeatureBox
												title="Unique IEN Challenges"
												titleVariant="small"
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
										</>
									}
								/>
							</SectionContainer>
						</div>
					</div>
				</FullWidth>
				<main className="gridContainer">
					{/* Solution Section */}
					<div
						className="sectionSpacing--medium"
						style={{ gridColumn: "3 / 15" }}
						id="solution"
					>
						<Image
							src="/images/onward/analysis-desktop.webp"
							alt="Mockup of Onward analysis page on a laptop."
							width={1920}
							height={1080}
							style={{ width: "100%", height: "auto" }}
						/>
						<SectionContainer>
							<SectionTextBox
								title="Personalized Interview Coaching"
								subtitle="Solution"
							>
								<p>
									ONWARD is a job interview preparation platform designed
									specifically to support internationally educated nurses (IENs)
									as they navigate the unique challenges of pursuing nursing
									careers in Canada.
								</p>
								<p>
									Built with the insights gathered from internationally educated
									nurses and mentors, ONWARD focuses on helping IENs:
									<ul>
										<li>Present their international experience confidently.</li>
										<li>
											Adapt to Canadian interview styles, including behavioural
											and situational questions.
										</li>
										<li>
											Understand unfamiliar terminology and cultural
											expectations.
										</li>
										<li>
											Receive personalized feedback that highlights strengths
											and areas for improvement.
										</li>
									</ul>
								</p>
								<p>
									By tailoring practice sessions and feedback to each user’s
									background, ONWARD helps IENs build the skills, confidence,
									and cultural awareness needed to succeed in interviews —
									ultimately bridging the gap between their experience and what
									Canadian employers expect.
								</p>
							</SectionTextBox>
							<div style={{ width: "80%", margin: "0 auto" }}>
								<video
									src="/images/onward/onward-practice-demo.webm"
									autoPlay
									loop
									muted
									playsInline
									className={styles.fullWidthMedia}
								/>
							</div>
						</SectionContainer>
						<SectionContainer>
							<SectionTextBox title="User Persona" />
							<Image
								src="/images/onward/persona-primary.jpg"
								width={785}
								height={636}
								alt="Primary persona, an internationally educated nurse in Canada."
								style={{ width: "100%", height: "auto" }}
							/>
							<Image
								src="/images/onward/persona-secondary.jpg"
								width={785}
								height={636}
								alt="Secondary persona, a registered nurse and mentor in Canada."
								style={{ width: "100%", height: "auto" }}
							/>
						</SectionContainer>
						<SectionContainer>
							<SectionTextBox
								title="Competitive Analysis"
								variant="fullTitle"
							/>
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
													<div>{comp.name}</div>
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
					{/* Design & Branding */}
					<div
						id="design"
						className="sectionSpacing--medium"
						style={{ gridColumn: "3 / 15" }}
					>
						<ResponsiveSection>
							<SectionTextBox subtitle="Design Process" title="Built for Focus">
								<p>
									Onward was designed through an iterative, user-focused process
									to directly address the challenges internationally educated
									nurses (IENs) face when preparing for Canadian healthcare
									interviews. Combining research insights, user feedback, and
									usability testing, Onward balances structured practice with
									personalized, culturally aware feedback.
								</p>
								<p>This process was shaped by three core values:</p>
								<FeatureBox
									variant="smallGrid"
									features={[
										{
											heading: "1.",
											description: "Growth through Feedback",
										},
										{
											heading: "2.",
											description: "Confidence through Understanding",
										},
										{
											heading: "3.",
											description: "Effective Storytelling",
										},
									]}
								/>
							</SectionTextBox>
						</ResponsiveSection>
						<ResponsiveSection>
							<TwoColBox
								variant="5050"
								align="center"
								justify="center"
								leftContent={
									<>
										<SectionTextBox title="Sitemap" variant="fullTitle" />
										<iframe
											className={styles.embeddedFigma}
											src="https://embed.figma.com/design/Y7EEsmdBvghuWUbECvEeVN/Onward---FOR-CASE-STUDY?node-id=242-2&embed-host=share"
											allowFullScreen
										/>
									</>
								}
								rightContent={
									<>
										<SectionTextBox title="Styleguide" variant="fullTitle" />
										<iframe
											className={styles.embeddedFigma}
											src="https://embed.figma.com/design/Y7EEsmdBvghuWUbECvEeVN/Onward---FOR-CASE-STUDY?node-id=435-4&embed-host=share"
											allowFullScreen
										/>
									</>
								}
							/>
						</ResponsiveSection>
						<SectionContainer>
							<SectionTextBox
								title="Lo-fi & Hi-fi Wireframes"
								variant="fullTitle"
							/>
							<iframe
								className={styles.embeddedFigma}
								src="https://embed.figma.com/design/Y7EEsmdBvghuWUbECvEeVN/Onward---FOR-CASE-STUDY?node-id=164-473&embed-host=share"
								allowFullScreen
							/>
						</SectionContainer>
					</div>
				</main>

				{/* Development Section */}
				<FullWidth backgroundColor="var(--grey)">
					<div
						className="sectionSpacing--medium"
						style={{ gridColumn: "3 / 15" }}
						id="development"
					>
						<SectionTextBox
							title="Technology & Features"
							subtitle="Development"
						>
							<p>
								The ONWARD app was developed using Next.js and React for a
								scalable, component-based front-end, with Supabase managing file
								storage, video uploads, and user authentication. Chakra UI
								provided a responsive design system, while Phosphor Icons
								ensured a clean, modern icon set.
							</p>
							<p>
								The development process followed a modular approach, allowing
								90% of the MVP feature list to be fully coded and functional,
								including file uploads, AI-powered question generation,
								real-time transcription, and tailored feedback.
							</p>
						</SectionTextBox>
					</div>
					<div
						className="sectionSpacing--small"
						style={{ gridColumn: "3 / 15" }}
					>
						<SectionContainer>
							<TwoColBox
								variant="5050"
								gap="0"
								leftContent={
									<>
										<FeatureBox
											customStyles={{ padding: "2rem 0 0 0" }}
											variant="smallLayout"
											features={[
												{
													heading: "Resume & Job Posting Uploads:",
													description:
														"Users upload resumes and job postings via a drag-and-drop interface powered by Uppy, with files stored securely in Supabase Storage. Public URLs are saved for later use in the AI processing pipeline.",
												},
											]}
										/>
									</>
								}
							/>
							<Image
								src="/images/onward/file-upload.webp"
								alt="File upload page and code block for uploading and saving files to Supabase."
								width={1920}
								height={1080}
								style={{ width: "100%", height: "auto" }}
							/>
							<TwoColBox
								variant="5050"
								gap="0"
								leftContent={
									<>
										<FeatureBox
											customStyles={{ padding: "5rem 0 0 0" }}
											variant="smallLayout"
											features={[
												{
													heading: "Real-Time Transcription & Text-to-Speech:",
													description:
														"During practice interviews, Azure Cognitive Services Speech SDK provides live transcription of user responses, capturing both spoken content and filler words for analysis.",
												},
											]}
										/>
									</>
								}
							/>
							<Image
								src="/images/onward/transcriber-code.webp"
								alt="Answer component and a code block for Azure Speech transcriber SDK."
								width={1920}
								height={1080}
								style={{ width: "100%", height: "auto" }}
							/>
							<TwoColBox
								variant="5050"
								gap="0"
								leftContent={
									<>
										<FeatureBox
											customStyles={{ padding: "5rem 0 0 0" }}
											variant="smallLayout"
											features={[
												{
													heading: "Video Recording & Playback:",
													description:
														"The platform also records the user’s video responses using the device camera and stores the recording in Supabase Storage. Users can replay their interview session to review their non-verbal communication and overall performance.",
												},
											]}
										/>
									</>
								}
							/>
							<Image
								src="/images/onward/video-recorder.webp"
								alt="Video playback & recorder component and code block for video recording."
								width={1920}
								height={1080}
								style={{ width: "100%", height: "auto" }}
							/>
							<TwoColBox
								variant="5050"
								gap="0"
								leftContent={
									<>
										<FeatureBox
											customStyles={{ padding: "5rem 0 0 0" }}
											variant="smallLayout"
											features={[
												{
													heading: "AI-Powered Questions & Feedback:",
													description:
														"Uploaded files are sent to RoughlyAI by passing their public URLs, where the service analyzes resume content and job posting requirements. It returns parsed JSON containing tailored interview questions.",
												},
											]}
										/>
									</>
								}
							/>

							<Image
								src="/images/onward/question-prompt.webp"
								alt="Question preview and code block for question prompt sent to RoughlyAI"
								width={1920}
								height={1080}
								style={{ width: "100%", height: "auto" }}
							/>
							<TwoColBox
								variant="5050"
								gap="0"
								leftContent={
									<>
										<FeatureBox
											customStyles={{ padding: "5rem 0 0 0" }}
											variant="smallLayout"
											features={[
												{
													description:
														"After the practice session, the user’s transcribed responses are also sent to RoughlyAI, which compares them to the resume and job posting, returning structured feedback on content relevance, communication clarity, and alignment with job expectations.",
												},
											]}
										/>
									</>
								}
							/>
							<Image
								src="/images/onward/answer-prompt.webp"
								alt="Answer container and code block for answer analysis prompt sent to RoughlyAI"
								width={1920}
								height={1080}
								style={{ width: "100%", height: "auto" }}
							/>
						</SectionContainer>
					</div>
				</FullWidth>

				<footer className={styles.footer}>Jasmine Putri</footer>
			</div>
		</>
	);
}
