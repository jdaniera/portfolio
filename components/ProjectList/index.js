import Link from "next/link";
import styles from "./ProjectList.module.css";

export default function ProjectList({ projects }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h2 className={styles.titleTop}>selected</h2>
        <h2 className={styles.titleBottom}>projects</h2>
      </div>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div
            className={styles.projectItem}
            key={project.slug}
            data-section={project.slug}
          >

            <div className={styles.projectImage}>
              <img src={project.image} alt={`${project.title}`} />
            </div>
            <div className={styles.projectDetails}>
              <h3>{project.title}</h3>
              <p>{project.role}</p>
              <p>{project.summary}</p>
              <Link href={`/projects/${project.slug}`} className={styles.viewMore}>
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
