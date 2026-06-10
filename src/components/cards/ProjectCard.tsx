import type { Project } from '@/types/project';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((stack) => (
          <span key={stack} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">{stack}</span>
        ))}
      </div>
    </article>
  );
}

