import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Menu from "../Menu";
import { gsap } from 'gsap';

export default function Header({ compactHeader }) {
  const isMobile = useMediaQuery("(max-width: 840px)");

  return (
    <>
    <header
      className={`${styles.header} ${compactHeader ? styles.compact : ""}`}
      id="header"
    >
      {isMobile ? (
        // Mobile Header: Render compact menu
        <>
          <nav className={`${styles.nav} ${compactHeader ? styles.navLogo : ""}`}>
            <Link href="/about" passHref>
              <button className={styles.navButton}>( about )</button>
            </Link>
            <Link href="/" passHref>
              <Image 
                src="/images/logo/logo-yellow.svg"
                width= {34}
                height={41}
                className={styles.navLogo}
              />
            </Link>
            <Link href="/projects" passHref>
              <button className={styles.navButton}>( projects )</button>
            </Link>
          </nav>
        </>
      ) : (
        // Desktop Header: Render full navigation links
        <>
          <Link href="/" passHref>
            <Image 
                src="/images/logo/logo-yellow.svg"
              width= {231}
              height={67}
              className={styles.navLogo}
            />
          </Link>
          <Menu/>
        </>
      )}
    </header>
    </>
    
  );
}
