import { ExternalLink } from 'lucide-react';
import Header, { Section } from '@/components/layout/Header';

const projects = [
  {
    title: 'CommandPal - NLP2CMD',
    description: 'Converts natural language into shell commands for faster command-line workflows.',
    tags: ['NLP', 'Python', 'CLI', 'Machine Learning'],
    link: 'https://github.com/Ayushverma41/CommandPal.git',
  },
  {
    title: 'Mental State Prediction',
    description: 'NLP models for detecting mental-state signals from social-media-style text data.',
    tags: ['Sentiment Analysis', 'NLP', 'Social Media', 'Python'],
    link: 'https://github.com/Ayushverma41/Mental-State-Prediction-using-NLP.git',
  },
  {
    title: 'ProductPulse',
    description: 'Recommendation engine for e-commerce using collaborative and content-based filtering.',
    tags: ['Recommendation Systems', 'ML', 'E-commerce', 'Analytics'],
    link: 'https://product-pulse-self.vercel.app/',
  },
  {
    title: 'PURE E-Commerce',
    description: 'Minimal and responsive e-commerce frontend focused on UX and clean product flows.',
    tags: ['Frontend', 'UX/UI', 'Responsive'],
    link: 'https://ayushverma41.github.io/Pure/',
  },
];

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <Header title="Featured Projects" subtitle="Production and research-oriented work" />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center text-sm text-cyan-300 hover:text-cyan-200">
              Open Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
