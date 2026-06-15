import ProjectCard from '@/components/cards/ProjectCard';
import Header, { Section } from '@/components/layout/Header';
import type { Project } from '@/types/project';

const projects: Project[] = [
  {
    title: 'CommandPal - NLP2CMD',
    description: 'Converts natural language into shell commands for faster command-line workflows.',
    tech: ['NLP', 'Python', 'CLI', 'Machine Learning'],
    image: '/images/projects/CommandPal.png',
    href: 'https://github.com/Ayushverma41/CommandPal.git',
  },
  {
    title: 'Mental State Prediction',
    description: 'NLP models for detecting mental-state signals from social-media-style text data.',
    tech: ['Sentiment Analysis', 'NLP', 'Social Media', 'Python'],
    image: '/images/projects/mental-state-prediction.svg',
    href: 'https://github.com/Ayushverma41/Mental-State-Prediction-using-NLP.git',
  },
  {
    title: 'ProductPulse',
    description: 'Recommendation engine for e-commerce using collaborative and content-based filtering.',
    tech: ['Recommendation Systems', 'ML', 'E-commerce', 'Analytics'],
    image: '/images/projects/Product pulse.png',
    href: 'https://product-pulse-self.vercel.app/',
  },
  {
    title: 'PURE E-Commerce',
    description: 'Minimal and responsive e-commerce frontend focused on UX and clean product flows.',
    tech: ['Frontend', 'UX/UI', 'Responsive'],
    image: '/images/projects/Pure.png',
    href: 'https://ayushverma41.github.io/Pure/',
  },
];

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <Header title="Featured Projects" subtitle="Production and research-oriented work" />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
