import { projectsData } from "@/data/projectsData";

export default function ProjectPage({ project }) {
  return (
    <div className={styles.projectPage}>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <h2>Role: {project.role}</h2>
      <p>{project.description}</p>
    </div>
  );
}

// Generate paths for each project dynamically
export async function getStaticPaths() {
  const paths = projectsData.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

// Fetch project data based on the slug
export async function getStaticProps({ params }) {
  const project = projectsData.find((project) => project.slug === params.slug);

  return { props: { project } };
}
