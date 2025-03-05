import Head from "next/head";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import Header from "@/components/Header";
import FeatureBox from "@/components/FeatureBox";
import ProjectSummary from "@/components/ProjectSummary";
import SectionTextBox from "../SectionText";
import FramedBox from "../FramedBox";
import TwoColBox from "../TwoColBox";
import SideNav from "../SideNav";
import ResponsiveSection from "@/components/ResponsiveSection";
import styles from "@/styles/Projects.module.css";

export default function NeighbourlyProject() {
	const isMobile = useMediaQuery("(max-width: 840px)");

	return (
		<>
			<Head>
				<title>Jasmine Putri | Portfolio | Ode To... Beverage</title>
				<meta name="description" content="Neighbourly Project Case Study" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.page}>
				<Header />

				<main className="gridContainer">
					<ResponsiveSection
						desktopStyle={{
							gridColumn: "4 / span 10",
							marginTop: "3rem",
							marginBottom: "8rem",
						}}
						mobileVariant="stacked"
						id="overview"
					>
						<ProjectSummary
							title="Ode To..."
							details={[
								{ label: "role", value: "Graphic Designer" },
								{ label: "timeline", value: "2 Weeks | November 2024" },
								{ label: "type", value: "Graphic Design, Branding" },
								{
									label: "toolstack",
									value: "Adobe Photoshop, Adobe Illustrator",
								},
							]}
						/>

						{/* SideNav Component */}
						<SideNav
							className={styles.floatingSideNav}
							sections={[
								{ name: "Overview", id: "overview" },
								{ name: "Commercial", id: "commercial" },
								{ name: "Features", id: "features" },
								{ name: "Design & Branding", id: "design" },
							]}
						/>
					</ResponsiveSection>

					{/* OVERVIEW SECTION */}
					<ResponsiveSection
						desktopStyle={{ gridColumn: "4 / span 10" }}
						mobileVariant="stacked"
						id="overview"
					>
						<SectionTextBox
							title="What is Ode To...?"
							subtitle="Overview"
							variant="compact"
							customStyles={{ outer: { maxWidth: "1200px", marginTop: "0" } }}
						>
							<p>
								Ode to... is more than a drink — it’s a canvas, a poem, a
								tribute to the craft of cocktail culture. Born from a love
								affair with classic drinks, each Ode to... flavour reimagines a
								timeless recipe, capturing its spirit (without the spirits) and
								infusing it with creative ingredients that stir the senses.
							</p>
							<p>
								With labels textured like oil paintings and recipes that blend
								botanical artistry with bold, natural flavours, Ode to...
								invites you to sip slowly and savour the romance of mixology —
								wherever and whenever you choose. Each sip is an invitation to
								celebrate the beauty of the present, to write your own love
								letter to flavour, craft, and creativity.
							</p>
						</SectionTextBox>
					</ResponsiveSection>

					<div style={{ gridColumn: "2 / span 14", marginTop: "4rem" }}>
						<Image
							src="/images/ode-to/3-cans.webp"
							alt="Ode To... can mockups"
							width={1920}
							height={1080}
							style={{ width: "100%", height: "auto" }}
						/>
					</div>

					<ResponsiveSection
						desktopStyle={{ gridColumn: "4 / span 10" }}
						mobileVariant="stacked"
						id="overview"
					>
						<SectionTextBox
							title="Visual Identity"
							subtitle="Branding"
							variant="compact"
							customStyles={{
								outer: { maxWidth: "1200px", marginTop: "10rem" },
							}}
						>
							<p>
								The Ode to… label designs use rich, saturated colours that
								balance warmth and sophistication, giving each flavour its own
								distinct personality while maintaining a cohesive visual system.
								The hand-painted textures add a sense of craft and romance,
								evoking the feeling of vintage love letters and classic
								still-life paintings — fitting for a brand that’s all about
								reimagining cocktails as artful, alcohol-free experiences.
							</p>
							<p>
								Each label’s colour palette reflects the flavour within — soft
								blush for the Pear-tini, vibrant golden yellow for the Fig
								Gimlet, and a refined burnt orange for the Earl Grey 75 —
								creating visual cues that feel intuitive and inviting. The
								combination of illustrated ingredients, painterly backdrops, and
								elegant typography strikes a balance between modern branding and
								timeless storytelling.
							</p>
						</SectionTextBox>
					</ResponsiveSection>

					<ResponsiveSection
						desktopStyle={{ gridColumn: "4 / span 10" }}
						mobileVariant="stacked"
						id="overview"
					>
						<SectionTextBox
							title="Illustrations & Dielines"
							subtitle="Branding"
							variant="compact"
							customStyles={{
								outer: { maxWidth: "1200px", marginTop: "8rem" },
							}}
						></SectionTextBox>
						<div style={{ gridColumn: "2 / span 14", marginTop: "2rem" }}>
							<Image
								src="/images/ode-to/peartini.webp"
								alt="Ode To... can mockups"
								width={1920}
								height={1080}
								style={{ width: "100%", height: "auto" }}
							/>
						</div>
						<div style={{ gridColumn: "2 / span 14", marginTop: "4rem" }}>
							<Image
								src="/images/ode-to/figlet.webp"
								alt="Ode To... can mockups"
								width={1920}
								height={1080}
								style={{ width: "100%", height: "auto" }}
							/>
						</div>
						<div style={{ gridColumn: "2 / span 14", marginTop: "4rem" }}>
							<Image
								src="/images/ode-to/earl-grey.webp"
								alt="Ode To... can mockups"
								width={1920}
								height={1080}
								style={{ width: "100%", height: "auto" }}
							/>
						</div>
					</ResponsiveSection>
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
