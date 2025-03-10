import Link from "next/link";
import styles from "./Menu.module.css";

export default function Menu({ layout = "row" }) {
	return (
		<nav
			className={`${styles.navLinks} ${
				layout === "column" ? styles.column : styles.row
			}`}
		>
			<Link href="/#projectList" passHref>
				<button>/ view projects</button>
			</Link>
			<Link href="/about" passHref>
				<button>/ about me</button>
			</Link>
			<Link href="/about#contact" passHref>
				<button className={styles.hideOnMobile}>/ contact</button>
			</Link>
		</nav>
	);
}
