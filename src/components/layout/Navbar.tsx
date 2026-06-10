'use client';

import React, { useEffect, useState } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skill', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setAboutOpen(false);
        setOpen(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  function onNavClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (href !== '#about') {
      setOpen(false);
      return;
    }

    event.preventDefault();

    setAboutOpen(true);
    setOpen(false);
  }

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-xl">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-40 w-40 bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-40 w-40 bg-violet-500/10 blur-3xl" />
        </div>

        <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          {/* Logo */}
          <button
            onClick={() => (window.location.href = '/')}
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-sm font-bold text-cyan-300 shadow-lg shadow-cyan-500/10 backdrop-blur">
              V.
            </div>

            <div>
              <p className="text-sm font-semibold tracking-wide text-white">
                Mr. Verma
              </p>

              <p className="text-xs text-slate-500">
                AI Engineer
              </p>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-2 md:flex">
            <div className="flex items-center rounded-full border border-slate-800 bg-slate-900/70 p-1 backdrop-blur">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) =>
                    onNavClick(event, link.href)
                  }
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="group ml-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.03]"
            >
              Contact Me

              <ArrowUpRight
                size={16}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition hover:text-white md:hidden"
          >
            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 sm:px-8">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) =>
                      onNavClick(event, link.href)
                    }
                    className="rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950"
                >
                  Contact Me

                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ================= ABOUT MODAL ================= */}

      <AnimatePresence>
        {aboutOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={() => setAboutOpen(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-10 backdrop-blur-xl"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

              <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl" />
            </div>

            {/* Modal */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: -120,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: -40,
              }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 14,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative w-full max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:p-8"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-[32px] border border-cyan-400/10" />

              {/* Top Glow */}
              <div className="absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

              {/* Header */}
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  {/* Badge */}
                  {/* <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 backdrop-blur-xl">
                    <Sparkles className="h-4 w-4 text-cyan-300" />

                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                      Summary
                    </span>
                  </div> */}

                  {/* Title */}
                  <h3 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                    About Me
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                    Software Engineer and NLP-focused
                    builder crafting AI-powered products
                    with scalable architecture, elegant
                    user experiences, and modern
                    interactive systems designed for
                    real-world impact.
                  </p>
                </div>

                {/* Close Button */}
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    rotate: 90,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  onClick={() => setAboutOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/70 text-slate-300 backdrop-blur transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Stats */}
              <div className="relative mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    label: 'Experience',
                    value: '1+ Years',
                  },
                  {
                    label: 'AI Projects',
                    value: '5+',
                  },
                  {
                    label: 'Specialization',
                    value: 'NLP & Systems',
                  },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl"
                  >
                    <p className="text-sm text-slate-500">
                      {item.label}
                    </p>

                    <h4 className="mt-2 text-xl font-bold text-white">
                      {item.value}
                    </h4>
                  </motion.div>
                ))}
              </div>

              {/* Bottom */}
              <div className="relative mt-10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

                  Available for collaborations & AI
                  projects
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  onClick={() => setAboutOpen(false)}
                  className="group inline-flex items-center rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-300"
                >
                  Back to Home Page

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}