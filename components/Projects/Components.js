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
import styles from "@/styles/Projects.module.css";

export default function NeighbourlyProject() {
	const isMobile = useMediaQuery("(max-width: 840px)");
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
