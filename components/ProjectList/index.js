import Link from "next/link";
import styles from "./ProjectList.module.css";

export default function ProjectList({ projects }) {
  return (
    <>
      <div className={styles.projectList} id="projectList">
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
              <Link href={project.link} className={styles.viewMore}>
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
