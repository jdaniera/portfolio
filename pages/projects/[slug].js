import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// Dynamically import project layouts
const Neighbourly = dynamic(() => import('../../components/Projects/Neighbourly'));
const Onward = dynamic(() => import('../../components/Projects/Onward'));

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p>Loading...</p>;

  // Map slugs to layouts
  const layouts = {
    neighbourly: <Neighbourly />,
    onward: <Onward />,
  };

  return layouts[slug] || <p>Project Not Found</p>;
};

export default ProjectPage;
