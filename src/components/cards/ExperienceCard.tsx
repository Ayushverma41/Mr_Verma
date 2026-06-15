'use client';

import Image from 'next/image';
import { useId, useState } from 'react';
import { ArrowUpRight, CalendarDays, ChevronDown } from 'lucide-react';
import type { Experience } from '@/types/project';

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();

  const toggleExpanded = () => setIsExpanded((expanded) => !expanded);

  return (
    <article className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-cyan-950/30 sm:p-6">
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={detailsId}
        onClick={toggleExpanded}
        className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400"
      >
        <span className="sr-only">
          {isExpanded ? 'Hide' : 'Show'} work completed at {experience.institution}
        </span>
      </button>

      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-300 via-cyan-500 to-blue-600 opacity-70" />

      <div className="pointer-events-none relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center">
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

            <div className="flex shrink-0 items-center gap-3 self-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-sm text-slate-300">
                <CalendarDays className="h-4 w-4 text-cyan-400" />
                <span>{experience.duration}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-cyan-400 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="mt-5 border-t border-slate-800 pt-4">
            <a
              href={experience.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto relative z-20 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
            >
              Visit institution
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div
        id={detailsId}
        className={`pointer-events-none relative z-10 grid transition-all duration-300 ease-in-out ${
          isExpanded
            ? 'mt-5 grid-rows-[1fr] opacity-100'
            : 'mt-0 grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-800 pt-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Work completed
            </h4>
            <p className="mt-2 leading-7 text-slate-300">{experience.details}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
