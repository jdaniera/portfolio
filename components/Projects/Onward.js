import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import useMediaQuery from "@/hooks/useMediaQuery";
import styles from "./styles/Projects.module.css";
import Box from "@/components/Box";


export default function Project() {
  const isMobile = useMediaQuery("(max-width: 840px)");
  const [compactHeader, setCompactHeader] = useState(false);

  return (
    <>
      <Head>
        <title>Jasmine Putri | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        {/* Sticky Header */}
        <Header compactHeader={compactHeader} className={styles.header}/>

        <main className={styles.mainWrapper}>
          <div className={styles.sideNav}>
            <div className={styles.sideNavMenu}>
              <p>Overview</p>
              <p>Research</p>
              <p>Design</p>
              <p>Development</p>
            </div>
          </div>
          <div className={styles.contentWrapper}>
            {/* Intro Section */}
            <section className={styles.projectSummary}>
              <h2 className={`${styles.projectTitle} name-font-med`}>Onward <span>case study</span></h2>
              {/* <p>Helping internationally educated nurses (IENs) practice and prepare for interviews using AI-powered feedback.</p> */}
              <ul>
                <li>Role: Developer, User Research</li>
                <li>Timeline: September 2024 -- December 2024</li>
                <li>Type: web-app, mobile app</li>
                <li>Tech & Tools: Next.js, Azure Speech, </li>
                <li>Link: onward-prep.com</li>
              </ul>
            </section>

            {/* Overview Section */}
            <Box 
              title="Overview"
              customStyles={{
                outer: { maxWidth: "40vw", margin: 0, marginTop: "10rem" },
                inner: { textAlign: "left", padding: "0" },
              }}
            >
              <p style={{ marginBottom: "1.5rem" }}>ONWARD is a web application designed to help Internationally Educated Nurses (IENs) successfully enter the Canadian workforce by improving their interview confidence and communication skills.</p>
              <p style={{ marginBottom: "10vw" }}>Onward was created for the BCIT D3 and FSWD showcase, themed around leveraging AI-driven pattern recognition to develop solutions for under-represented and disadvantaged communities.</p>
            </Box>

            <Image
              src='/images/onward/transcription.png'
              width={785}
              height={636}
              alt="Onward Practice Interview Interface"
              style={{ width: "95%", height: "auto"}} 
            />

            {/* Research Section */}
            <Box
              subtitle="Research"
              title="The Problem"
              customStyles={{
                outer: { maxWidth: "40vw", margin: 0, marginTop: "12rem" },
                inner: { textAlign: "left", padding: "0" },
              }}
            >
              <p>Canada’s healthcare system faces a severe nursing shortage, but IENs struggle to secure roles that match their skills (1, 2).</p>
              <p>Only 26.2% of internationally educated immigrants in Ontario were employed in jobs matching their skill level, meaning approximately 73.8% were underemployed. </p>
            </Box>

          </div>

          {/* Footer Section */}
        </main>
          <footer className={styles.footer}>Jasmine Putri</footer>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const projects = ["onward", "fairshare", "bcitma"]; // Add all project slugs

  return {
    paths: projects.map((slug) => ({ params: { onward: slug } })),
    fallback: false, // If user visits an unknown project, show a 404 page
  };
}

export async function getStaticProps({ params }) {
  const projectData = {
    onward: {
      title: "Onward Case Study",
      role: "Developer, User Research",
      timeline: "Sept 2024 - Dec 2024",
      tech: ["Next.js", "Azure Speech"],
      link: "onward-prep.com",
    },
  };

  if (!projectData[params.onward]) {
    return { notFound: true }; // Show 404 if the project doesn't exist
  }

  return { props: { project: projectData[params.onward] } };
}

