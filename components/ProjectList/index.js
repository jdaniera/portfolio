import Link from 'next/link';
import styles from './ProjectList.module.css';

export default function ProjectList({ projects }) {
  return (
    <div className={styles.projectList} id="projectList">
      {projects.map((project) => (
       <div className={styles.projectItem} key={project.slug}>
        <div className={styles.projectCardWrapper}>
          <Link href={`/projects/${project.slug}`} passHref>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectDetails}>
                <h3 className={styles.projectTitle}>{project.title}<sup className={styles.studyTag}>{project.tag}</sup></h3>
                <p className={styles.projectRole}>{project.role}</p>
                <p className={styles.projectSummary}>{project.summary}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>     
      ))}
    </div>
  );
}
