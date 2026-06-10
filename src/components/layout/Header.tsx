import type { ReactNode } from 'react';
import { Sparkles } from 'lucide-react';

export function Section({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </section>
  );
}

export default function Header({
  title,
  subtitle,
  badge = 'SECTION',
  align = 'left',
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
}) {
  const centered = align === 'center';

  return (
    <div
      className={`relative mb-16 ${
        centered ? 'text-center' : 'text-left'
      }`}
    >
      {/* Accent Glow */}
      <div className="absolute -top-10 left-0 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Badge */}
      <div
        className={`mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-cyan-300 uppercase backdrop-blur-sm`}
      >
        <Sparkles size={14} />
        {badge}
      </div>

      {/* Title */}
      <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {/* Subtitle */}
      {subtitle ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      ) : null}

      {/* Decorative Line */}
      <div
        className={`mt-8 h-px bg-gradient-to-r from-cyan-400/60 via-slate-700 to-transparent ${
          centered ? 'mx-auto max-w-sm' : 'max-w-md'
        }`}
      />
    </div>
  );
}