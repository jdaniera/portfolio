import styles from "./Header.module.css";
import Link from "next/link";

export default function Header({ currentSection }) {
  const isIntro = currentSection === "intro";

  return (
    <header
      className={`${styles.header} ${!isIntro ? styles.compact : ""}`}
    >
      <nav className={styles.nav}>
        <Link href="/about" passHref>
          <button className={styles.navButton}>( about )</button>
        </Link>
        <Link href="/projects" passHref>
          <button className={styles.navButton}>( projects )</button>
        </Link>
      </nav>
    </header>
  );
}
