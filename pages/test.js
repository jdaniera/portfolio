import Head from "next/head";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import Header from "@/components/Header";
import FeatureBox from "@/components/FeatureBox";
import ProjectSummary from "@/components/ProjectSummary";
import SectionBox from "@/components/SectionBox"; // New central layout component
import SideNav from "../SideNav";
import styles from "@/styles/Projects.module.css";

export default function NeighbourlyProject() {
	const isMobile = useMediaQuery("(max-width: 840px)");

	return (
		<>
			<Head>
				<title>Jasmine Putri | Portfolio | Neighbourly</title>
				<meta name="description" content="Neighbourly Project Case Study" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.page}>
				<Header />

				<main className="gridContainer">
					{/* Project Summary Section */}
					<SectionBox
						variant="framed"
						columns={{ mobile: 1, tablet: 1, desktop: 1 }}
						background="transparent"
						padding="large"
						id="overview"
					>
						<ProjectSummary
							title="Neighbourly"
							details={[
								{ label: "role", value: "UI/UX Designer, Front-end Developer" },
								{ label: "timeline", value: "January 2024 — May 2024" },
								{ label: "type", value: "Website / Web App / Mobile App" },
								{ label: "toolstack", value: "Figma, Next.js" },
								{ label: "program used", value: "Next.js, Azure" },
								{
									label: "link",
									value: (
										<a href="https://be-neighbourly.com" target="_blank">
											be-neighbourly.com
										</a>
									),
								},
							]}
						/>

						<SideNav
							className={styles.floatingSideNav}
							sections={[
								{ name: "Overview", id: "overview" },
								{ name: "Commercial", id: "commercial" },
								{ name: "Features", id: "features" },
								{ name: "Design & Branding", id: "design" },
							]}
						/>
					</SectionBox>

					{/* Overview Section */}
					<SectionBox
						variant="twoColumn"
						columns={{ mobile: 1, tablet: 1, desktop: 1 }}
						background="transparent"
						padding="large"
						id="overview"
					>
						<div>
							<h2>What is Neighbourly?</h2>
							<p>
								Neighbourly is a mobile marketplace app designed to connect
								individuals within their local communities by enabling them to
								advertise services they offer.
							</p>
							<p>
								In today’s fast-paced world, people often feel disconnected from
								their neighbours, making it difficult to find trusted local help
								or contribute their own expertise. Neighbourly bridges this gap
								by creating a space where people can connect meaningfully,
								exchange skills, and build a stronger, more connected and
								supportive community.
							</p>
						</div>
					</SectionBox>

					<div style={{ gridColumn: "2 / span 14", marginTop: "4rem" }}>
						<Image
							src="/images/neighbourly/homepage.webp"
							alt="Neighbourly Hero"
							width={1920}
							height={1080}
							style={{ width: "100%", height: "auto" }}
						/>
					</div>

					{/* Key Features Section */}
					<SectionBox
						variant="framed"
						columns={{ mobile: 1, tablet: 1, desktop: 1 }}
						background="transparent"
						padding="large"
						id="features"
					>
						<FeatureBox
							title="Key Features"
							features={[
								{
									heading: "Local Service Listings",
									description:
										"Browse and offer services within your community, from home repairs to tutoring.",
								},
								{
									heading: "Learning & Workshops",
									description: "Join or host local classes to share or gain new skills.",
								},
								{
									heading: "Mentorship Opportunities",
									description: "Connect with mentors for career guidance and skill development.",
								},
							]}
						/>
					</SectionBox>

					{/* FramedBox Replacement with SectionBox */}
					<SectionBox
						variant="framed"
						columns={{ mobile: 1, tablet: 1, desktop: 2 }}
						background="var(--beige)"
						innerBackground="var(--taupe)"
						padding="large"
						rounded
					>
						<div>
							<img
								src="/images/neighbourly/james-plunk-service.webp"
								style={{ width: "80%", maxWidth: "500px" }}
							/>
						</div>
						<FeatureBox
							features={[{ heading: "In-app Booking", description: "Book local classes directly in the app." }]}
							backgroundColors={["transparent"]}
						/>
					</SectionBox>

					<SectionBox
						variant="framed"
						columns={{ mobile: 1, tablet: 1, desktop: 2 }}
						background="var(--beige)"
						innerBackground="var(--taupe)"
						padding="large"
						rounded
					>
						<FeatureBox
							features={[{ heading: "User Reviews", description: "See trusted reviews from your community." }]}
							backgroundColors={["transparent"]}
						/>
						<img
							src="/images/neighbourly/mentor-pottery.webp"
							style={{ width: "80%", maxWidth: "500px" }}
						/>
					</SectionBox>

					<SectionBox
						variant="framed"
						columns={{ mobile: 1, tablet: 2, desktop: 2 }}
						background="var(--beige)"
						innerBackground="transparent"
						padding="large"
						rounded
					>
						<FeatureBox features={[{ heading: "Interactive Map" }]} backgroundColors={["transparent"]} />
						<video
							src="/images/neighbourly/interactive-map.webm"
							autoPlay
							loop
							muted
							playsInline
							style={{ width: "100%", borderRadius: "12px" }}
						/>
					</SectionBox>

					{/* Personalized Recommendations */}
					<SectionBox
						variant="framed"
						columns={{ mobile: 1, tablet: 1, desktop: 1 }}
						background="var(--beige)"
						innerBackground="var(--taupe)"
						padding="large"
						rounded
					>
						<FeatureBox
							features={[{ heading: "Personalized Recommendations" }]}
							backgroundColors={["transparent"]}
						/>
						<Image
							src="/images/neighbourly/quiz-2.webp"
							alt="Personalized Quiz"
							width={1920}
							height={1080}
							style={{ width: "100%", height: "auto" }}
						/>
					</SectionBox>

					{/* Design & Branding */}
					<SectionBox
						variant="framed"
						columns={{ mobile: 1, tablet: 1, desktop: 1 }}
						background="var(--grey)"
						innerBackground="transparent"
						padding="large"
						rounded
						id="design"
					>
						<FeatureBox title="Design & Branding" features={[{ heading: "App Architecture" }]} />
						<Image src="/images/neighbourly/architecture.webp" alt="App Architecture" width={1920} height={1080} />
						{/* Add other design sections here */}
					</SectionBox>
				</main>

				<footer style={{ marginTop: "5rem", textAlign: "center", fontSize: "0.9rem" }}>
					Jasmine Putri
				</footer>
			</div>
		</>
	);
}
