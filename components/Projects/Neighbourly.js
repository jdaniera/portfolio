import Head from "next/head";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import Header from "@/components/Header";
import FeatureBox from "@/components/FeatureBox";
import ProjectSummary from "@/components/ProjectSummary";
import FullWidth from "../FullWidth";
import SectionTextBox from "../SectionText";
import FramedBox from "../FramedBox";
import TwoColBox from "../TwoColBox";
import SideNav from "../SideNav";
import SectionContainer from "@/components/SectionContainer";
import styles from "@/styles/Projects.module.css";

export default function NeighbourlyProject() {
	return (
		<>
			<Head>
				<title>Jasmine Putri | Portfolio - Neighbourly</title>
				<meta name="description" content="Neighbourly Project Case Study" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.page}>
				<Header />

				<main className="gridContainer">
					<div
						className="sectionSpacing--large"
						style={{ gridColumn: "3 / 15" }}
					>
						<SectionContainer padding="large">
							<ProjectSummary
								title="Neighbourly"
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
											<a href="https://be-neighbourly.com" target="_blank">
												be-neighbourly.com
											</a>
										),
									},
								]}
							/>
						</SectionContainer>

						<SideNav
							className={styles.floatingSideNav}
							sections={[
								{ name: "Overview", id: "overview" },
								{ name: "Commercial", id: "commercial" },
								{ name: "Features", id: "features" },
								{ name: "Design & Branding", id: "design" },
							]}
						/>
					</div>

					<div
						className="sectionSpacing--large"
						style={{ gridColumn: "3 / 15" }}
					>
						<SectionContainer padding="large">
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
									In today’s fast-paced world, people often feel disconnected
									from their neighbours, making it difficult to find trusted
									local help or contribute their own expertise. Neighbourly
									bridges this gap by creating a space where people can connect
									meaningfully, exchange skills, and build a stronger, more
									connected and supportive community.
								</p>
							</SectionTextBox>
						</SectionContainer>
					</div>

					<div
						className="sectionSpacing--large"
						style={{ gridColumn: "2 / 16" }}
					>
						<Image
							src="/images/neighbourly/homepage.webp"
							alt="Neighbourly Hero"
							width={1920}
							height={1080}
							style={{ width: "100%", height: "auto" }}
						/>
					</div>
				</main>

				<FullWidth backgroundColor="var(--vanilla)">
					<div className="sectionSpacing--large">
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
									description:
										"Join or host local classes to share or gain new skills.",
								},
								{
									heading: "Mentorship Opportunities",
									description:
										"Connect with mentors for career guidance and skill development.",
								},
							]}
							backgroundColors={["var(--grey)", "var(--grey)", "var(--grey)"]}
						/>
					</div>
				</FullWidth>

				<main className="gridContainer">
					<div
						className="sectionSpacing--large"
						style={{ gridColumn: "2 / span 14" }}
					>
						<FramedBox
							outerBg="var(--beige)"
							innerBg="var(--taupe)"
							innerRounded
							innerWidth="80%"
							innerHeight="48%"
						>
							<TwoColBox
								variant="leftWide"
								align="center"
								justify="center"
								customStyles={{
									outer: {
										maxWidth: "60vw",
										padding: "0 2rem",
										marginLeft: "1rem",
									},
								}}
								leftContent={
									<img
										src="/images/neighbourly/james-plunk-service.webp"
										style={{ width: "80%", maxWidth: "500px" }}
									/>
								}
								rightContent={
									<FeatureBox
										features={[
											{
												heading: "In-app Booking",
												description: "Book local classes directly in the app.",
											},
										]}
									/>
								}
							/>
							<TwoColBox
								variant="rightWide"
								align="center"
								justify="center"
								customStyles={{
									outer: {
										maxWidth: "60vw",
										padding: "0 2rem",
										marginLeft: "8rem",
										marginTop: "-8rem",
									},
								}}
								leftContent={
									<FeatureBox
										features={[
											{
												heading: "User Reviews",
												description: "See trusted reviews from your community.",
											},
										]}
									/>
								}
								rightContent={
									<img
										src="/images/neighbourly/mentor-pottery.webp"
										style={{ width: "80%", maxWidth: "500px" }}
									/>
								}
							/>
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(2, 1fr)",
									gap: "2rem",
								}}
							>
								<FeatureBox features={[{ heading: "Interactive Map" }]} />
								<FeatureBox
									features={[{ heading: "Multi-language Support" }]}
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
						<FramedBox
							outerBg="var(--beige)"
							innerBg="var(--taupe)"
							innerWidth="65%"
							innerHeight="72%"
							innerRounded
						>
							<FeatureBox
								features={[{ heading: "Personalized Recommendations" }]}
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

					<div
						className="sectionSpacing--large"
						id="design-branding"
						style={{ gridColumn: "2 / span 14" }}
					>
						<FramedBox
							outerBg="var(--grey)"
							innerBg="transparent"
							innerRounded
							innerWidth="80%"
						>
							<FeatureBox
								title="Design & Branding"
								features={[{ heading: "Colour System" }]}
							/>
							<Image
								src="/images/neighbourly/colours.webp"
								alt="Neighbourly colour palette"
								width={1920}
								height={1080}
								style={{ width: "80%", height: "auto" }}
							/>
						</FramedBox>
						<FramedBox
							outerBg="var(--grey)"
							innerBg="transparent"
							innerRounded
							innerWidth="80%"
						>
							<FeatureBox
								title="Design & Branding"
								features={[{ heading: "Typefaces" }]}
							/>
							<Image
								src="/images/neighbourly/typefaces.webp"
								alt="Neighbourly typefaces"
								width={1920}
								height={1080}
								style={{ width: "80%", height: "auto" }}
							/>
						</FramedBox>
						<FramedBox
							outerBg="var(--grey)"
							innerBg="transparent"
							innerRounded
							innerWidth="80%"
						>
							<FeatureBox
								title="Design & Branding"
								features={[{ heading: "Status Feedback" }]}
							/>
							<Image
								src="/images/neighbourly/feedback-gnome.webp"
								alt="Neighbourly typefaces"
								width={1920}
								height={1080}
								style={{ width: "80%", height: "auto" }}
							/>
						</FramedBox>
						<FramedBox
							outerBg="var(--grey)"
							innerBg="transparent"
							innerRounded
							innerWidth="80%"
						>
							<FeatureBox
								title="Design & Branding"
								features={[{ heading: "Brand Characters" }]}
							/>
							<Image
								src="/images/neighbourly/gnomes.webp"
								alt="Neighbourly typefaces"
								width={1920}
								height={1080}
								style={{ width: "80%", height: "auto" }}
							/>
						</FramedBox>
					</div>
				</main>

				<footer
					style={{ marginTop: "5rem", textAlign: "center", fontSize: "0.9rem" }}
				>
					Jasmine Putri
				</footer>
			</div>
		</>
	);
}
