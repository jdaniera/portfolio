import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import useMediaQuery from "@/hooks/useMediaQuery";
import ProjectSummary from "@/components/ProjectSummary";
import SectionTextBox from "@/components/SectionText";
import SectionContainer from "@/components/SectionContainer";
import FlipCard from "@/components/FlipCard";
import FeatureBox from "@/components/FeatureBox";
import FullWidth from "@/components/FullWidth";
import SideNav from "@/components/SideNav";
import TwoColBox from "@/components/TwoColBox";
import ResponsiveSection from "@/components/ResponsiveSection";
import styles from "@/styles/Projects.module.css";

export default function ComponentPlayground() {
	const isMobile = useMediaQuery("(max-width: 840px)");

	const handleLearnMore = (title) => {
		console.log(`Learn more clicked for: ${title}`);
	};

	return (
		<>
			<Head>
				<title>Component Playground</title>
			</Head>

			{process.env.NODE_ENV === "development" && (
				<a href="/component-playground">Component Playground</a>
			)}

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
					<div
						className="sectionSpacing--medium"
						style={{ gridColumn: "3 / 15" }}
					>
						<SectionContainer>
							<h1>Component Playground</h1>
						</SectionContainer>

						{/* SectionTextBox Variants */}
						<SectionContainer>
							<SectionTextBox
								title="Regular SectionTextBox"
								subtitle="Default Layout"
							>
								<p>
									This is a standard SectionTextBox with a 3-1-8 column split.
								</p>
							</SectionTextBox>
						</SectionContainer>

						<SectionContainer>
							<SectionTextBox
								title="Full Title SectionTextBox"
								variant="fullTitle"
							>
								<p>
									This SectionTextBox allows the title to span the full width.
								</p>
							</SectionTextBox>
						</SectionContainer>

						{/* FeatureBox Variants */}
						<SectionContainer>
							<h2>FeatureBox Variants</h2>
						</SectionContainer>

						<SectionContainer>
							<FeatureBox
								title="Small Stacked (Column)"
								variant="small"
								features={[
									{
										heading: "Feature 1",
										description: "Description for feature 1.",
									},
									{
										heading: "Feature 2",
										description: "Description for feature 2.",
									},
									{
										heading: "Feature 3",
										description: "Description for feature 3.",
									},
								]}
							/>
						</SectionContainer>

						<SectionContainer>
							<FeatureBox
								title="Small Grid (Responsive)"
								variant="smallGrid"
								features={[
									{
										heading: "Feature 1",
										description: "Description for feature 1.",
									},
									{
										heading: "Feature 2",
										description: "Description for feature 2.",
									},
									{
										heading: "Feature 3",
										description: "Description for feature 3.",
									},
								]}
							/>
						</SectionContainer>

						<SectionContainer>
							<FeatureBox
								title="Medium Feature"
								variant="medium"
								features={[
									{
										heading: "Medium Feature",
										description: "This is a medium-sized feature card.",
									},
								]}
							/>
						</SectionContainer>

						<SectionContainer>
							<FeatureBox
								title="Large Feature"
								variant="large"
								features={[
									{
										heading: "Large Feature",
										description: "This is a large-sized feature card.",
									},
								]}
							/>
						</SectionContainer>

					</div>
				</main>

				<footer className={styles.footer}>Jasmine Putri</footer>
			</div>
		</>
	);
}
