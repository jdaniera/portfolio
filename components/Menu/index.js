import Link from "next/link";
import styles from "./Menu.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Menu({ layout = "row", animate = "false" }) {
	const menuRef = useRef(null);

	useEffect(() => {
		if (animate && menuRef.current) {
			gsap.fromTo(
				menuRef.current.children, 
				{ opacity: 0, x: 20 }, 
				{
					opacity: 1,
					x: 0,
					stagger: 0.3,
					duration: 1.2,
					ease: "power2.out",
					delay: 1.2, 
				}
			);
		}
	}, [animate]);

	return (
		<nav
			ref={menuRef}
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
