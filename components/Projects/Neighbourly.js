import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import FeatureBox from "@/components/FeatureBox";
import ProjectSummary from "@/components/ProjectSummary";
import SectionTextBox from "../SectionText";
import FramedBox from "../FramedBox";
import TwoColBox from "../TwoColBox";
import SideNav from "../SideNav";
import styles from "@/styles/Projects.module.css";

export default function NeighbourlyProject() {
	return (
		<>
			<Head>
				<title>Jasmine Putri | Portfolio - Neighbourly</title>
				<meta name="description" content="Neighbourly Project Case Study" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.page}>

				<Header />

				{/* Floating Side Nav */}
				<SideNav
					className={styles.floatingSideNav}
					sections={[
						{ name: "Overview", id: "overview" },
						{ name: "Commercial", id: "commercial" },
						{ name: "Features", id: "features" },
						{ name: "Design & Branding", id: "design" },
					]}
				/>

				{/* Main Content (16-column grid) */}
				<main className="gridContainer">
					{/* Project Summary */}
					<div
						style={{
							gridColumn: "4 / span 10",
							marginTop: "3rem",
							marginBottom: "8rem",
						}}
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
					</div>

					{/* Overview Section */}
					<div style={{ gridColumn: "4 / span 10" }} id="overview">
						<SectionTextBox
							title="What is Neighbourly?"
							subtitle="Overview"
							variant="compact"
							customStyles={{ outer: { maxWidth: "1200px" } }}
						>
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
						</SectionTextBox>
					</div>

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
					<div id="features" style={{ gridColumn: "4 / span 10" }}>
						<FeatureBox
							title="Key Features"
							features={[
								{
									heading: "Local Service Listings",
									description:
										"Easily browse and offer services within your community, from home repairs and pet sitting to tutoring and wellness sessions.",
								},
								{
									heading: "Learning & Workshops",
									description:
										"Join or host local classes in pottery, yoga, coding, cooking, and more to learn new skills or share your expertise.",
								},
								{
									heading: "Mentorship Opportunities",
									description:
										"Connect with experienced mentors for career guidance, personal development, and skill-building in various fields.",
								},
							]}
							customStyles={{
								marginTop: "8rem",
								marginBottom: "8rem",
							}}
						/>
					</div>

					<div style={{ gridColumn: "2 / span 14" }}>
						<FramedBox
							outerBg="var(--beige)"
							innerBg="var(--taupe)"
							innerRounded={true}
							innerWidth="70%"
							innerHeight="75%"
							innerMarginTop="4rem"
						>
							<TwoColBox
								variant="leftWide"
								leftContent={
									<img src="/images/neighbourly/james-plunk-service.webp" />
								}
								rightContent={
									<FeatureBox
										features={[
											{
												heading: "In-app Booking",
												description:
													"Join or host local classes in pottery, yoga, coding, cooking, and more to learn new skills or share your expertise.",
											},
										]}
										backgroundColors={["transparent"]}
									/>
								}
								align="center"
								customStyles={{ outer: { marginTop: "2rem", maxWidth: "80%" } }}
							/>
							<TwoColBox
								variant="rightWide"
								leftContent={
									<FeatureBox
										features={[
											{
												heading: "User Reviews",
												description:
													"Easily browse and offer services within your community, from home repairs and pet sitting to tutoring and wellness sessions.",
											},
										]}
										backgroundColors={["transparent"]}
									/>
								}
								rightContent={
									<img src="/images/neighbourly/mentor-pottery.webp" />
								}
								align="center"
								customStyles={{
									outer: {
										marginTop: "-8rem",
										marginLeft: "15rem",
										maxWidth: "70%",
									},
								}}
							/>
						</FramedBox>

						{/* Interactive Map and Language Videos */}
						<FramedBox
							outerBg="var(--beige)"
							innerBg="transparent"
							innerRounded={true}
						>
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(2, 1fr)",
									columnGap: "2rem",
								}}
							>
								<FeatureBox
									features={[{ heading: "Interactive Map" }]}
									backgroundColors={["transparent"]}
									customStyles={{ marginBottom: "0", padding: "0" }}
								/>
								<FeatureBox
									features={[{ heading: "Multi-language Support" }]}
									backgroundColors={["transparent"]}
									customStyles={{ marginBottom: "0", padding: "0" }}
								/>
								<video
									src="/images/neighbourly/interactive-map.webm"
									autoPlay
									loop
									muted
									playsInline
									style={{ width: "100%", borderRadius: "12px" }}
								/>
								<video
									src="/images/neighbourly/language-settings.webm"
									autoPlay
									loop
									muted
									playsInline
									style={{ width: "100%", borderRadius: "12px" }}
								/>
							</div>
						</FramedBox>

						{/* Personalized Recommendation */}
						<FramedBox
							outerBg="var(--beige)"
							innerBg="var(--taupe)"
							innerRounded={true}
							innerWidth="80%"
							innerHeight="75%"
						>
							<FeatureBox
								features={[{ heading: "Personalized Recommendation" }]}
								backgroundColors={["transparent"]}
								customStyles={{ margin: "0", paddingBottom: "0" }}
							/>
							<Image
								src="/images/neighbourly/quiz-2.webp"
								alt="Personalized Quiz"
								width={1920}
								height={1080}
								style={{ width: "100%", height: "auto" }}
							/>
						</FramedBox>
					</div>

					{/* Design & Branding Section - Separate with its own ID */}
					<div
						id="design"
						style={{
							gridColumn: "2 / span 14",
							paddingTop: "8rem",
						}}
					>
						<FramedBox
							outerBg="var(--grey)"
							innerBg="transparent"
							innerRounded={true}
							innerWidth="80%"
						>
							{/* App Architecture */}
							<FeatureBox
								title="Design & Branding"
								features={[{ heading: "App Architecture" }]}
								customStyles={{ margin: "0", marginTop: "0", padding: "0" }}
							/>
							<Image
								src="/images/neighbourly/architecture.webp"
								alt="Neighbourly App Architecture"
								width={1920}
								height={1080}
								style={{ width: "80%", height: "auto" }}
							/>

							{/* Colour System */}
							<FeatureBox
								features={[{ heading: "Colour System" }]}
								backgroundColors={["transparent"]}
								customStyles={{ margin: "0", marginTop: "10rem", padding: "0" }}
							/>
							<Image
								src="/images/neighbourly/colours.webp"
								alt="Neighbourly Colour System"
								width={1920}
								height={1080}
								style={{ width: "80%", height: "auto" }}
							/>

							{/* Typefaces */}
							<FeatureBox
								features={[{ heading: "Typefaces" }]}
								backgroundColors={["transparent"]}
								customStyles={{ margin: "0", marginTop: "10rem", padding: "0" }}
							/>
							<Image
								src="/images/neighbourly/typefaces.webp"
								alt="Neighbourly Typefaces"
								width={1920}
								height={1080}
								style={{ width: "100%", height: "auto" }}
							/>

							{/* Logo & Wordmark */}
							<FeatureBox
								features={[{ heading: "Logo & Wordmark" }]}
								backgroundColors={["transparent"]}
								customStyles={{ margin: "0", marginTop: "10rem", padding: "0" }}
							/>
							<Image
								src="/images/neighbourly/logo.webp"
								alt="Neighbourly Logo & Wordmark"
								width={1920}
								height={1080}
								style={{ width: "60%", height: "auto" }}
							/>

							{/* Feedback Graphics */}
							<FeatureBox
								features={[{ heading: "Feedback Graphics" }]}
								backgroundColors={["transparent"]}
								customStyles={{ margin: "0", marginTop: "10rem", padding: "0" }}
							/>
							<Image
								src="/images/neighbourly/feedback-gnomes.webp"
								alt="Neighbourly Feedback Graphics"
								width={1920}
								height={1080}
								style={{ width: "100%", height: "auto" }}
							/>

							{/* Brand Characters */}
							<FeatureBox
								features={[{ heading: "Brand Characters" }]}
								backgroundColors={["transparent"]}
								customStyles={{ margin: "0", marginTop: "10rem", padding: "0" }}
							/>
							<Image
								src="/images/neighbourly/gnomes.webp"
								alt="Neighbourly Brand Characters"
								width={1920}
								height={1080}
								style={{ width: "100%", height: "auto" }}
							/>
						</FramedBox>
					</div>

					{/* Side-by-side Videos */}
				</main>

				{/* Footer */}
				<footer
					style={{ marginTop: "5rem", textAlign: "center", fontSize: "0.9rem" }}
				>
					Jasmine Putri
				</footer>
			</div>
		</>
	);
}
