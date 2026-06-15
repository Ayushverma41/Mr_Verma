import Image from 'next/image';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import type { Experience } from '@/types/project';

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-cyan-950/30 sm:p-6">
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-300 via-cyan-500 to-blue-600 opacity-70" />

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-slate-700 bg-white p-2 shadow-lg shadow-black/20 sm:h-24 sm:w-24">
          <Image
            src={experience.image}
            alt={`${experience.institution} logo`}
            fill
            className="object-contain p-2"
            sizes="96px"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-cyan-100">
                {experience.position}
              </h3>
              <p className="mt-1 text-sm font-medium text-cyan-300 sm:text-base">
                {experience.institution}
              </p>
            </div>

            <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-sm text-slate-300">
              <CalendarDays className="h-4 w-4 text-cyan-400" />
              <span>{experience.duration}</span>
            </div>
          </div>

          <div className="mt-5 border-t border-slate-800 pt-4">
            <a
              href={experience.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
            >
              Visit institution
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
