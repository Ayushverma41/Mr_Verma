import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/types/project';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
      {project.image && (
        <div className="relative aspect-video overflow-hidden border-b border-slate-800 bg-slate-950">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      )}

      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((stack) => (
            <span key={stack} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">
              {stack}
            </span>
          ))}
        </div>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-sm text-cyan-300 hover:text-cyan-200"
          >
            Open Project <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}
