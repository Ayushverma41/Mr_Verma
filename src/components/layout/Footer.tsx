import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

const socials = [
  {
    icon: Github,
    href: 'https://github.com/',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:hello@example.com',
    label: 'Email',
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-16 sm:px-8 lg:px-12">
        {/* Top */}
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          {/* Brand */}
          <div className="max-w-lg">
            <p className="mb-3 text-sm font-medium tracking-[0.25em] text-cyan-300 uppercase">
              Mr. Verma
            </p>

            <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Building modern digital experiences with clean design and
              powerful engineering.
            </h3>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            Let&apos;s Connect
            <ArrowUpRight
              size={16}
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 border-t border-slate-800/80 pt-6 md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Mr. Verma. Crafted with Next.js &
            Tailwind CSS.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="rounded-full border border-slate-800 bg-slate-900/80 p-3 text-slate-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}