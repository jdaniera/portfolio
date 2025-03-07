import Menu from "../Menu";
import Image from "next/image";
import styles from "./Intro.module.css";

export default function Intro() {
	return (
		<div className={styles.introOuterContainer}>
			<div className={styles.introInnerContainer}>
				<h1>
					Hello,
					<br />
					nice to meet you.
				</h1>
				<p>
					Jasmine Putri is a Vancouver-based multidisciplinary digital designer
					with a love for story-telling and human-centered design.
				</p>
			</div>
			<div className={styles.logoContainer}> 
				<Image
					src="/images/logo/logo-light.svg"
					alt="Jasmine Putri logo"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
			<Menu layout="column" />
		</div>
	);
}
