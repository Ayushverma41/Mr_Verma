'use client';

import React from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
} from 'lucide-react';

import { motion } from 'framer-motion';

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: React.ElementType;
};

/* -------------------------------------------------------------------------- */
/*                                   Data                                     */
/* -------------------------------------------------------------------------- */

const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Ayushverma41',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ayushverma41/',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:ayush21032016@gmail.com',
    icon: Mail,
  },
  {
    label: 'Linktree',
    href: 'https://linktr.ee/ayush21032016',
    icon: Terminal,
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Section                                   */
/* -------------------------------------------------------------------------- */

function Section({
  id,
  children,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:px-12 ${className}`}
    >
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Hero Section                                */
/* -------------------------------------------------------------------------- */

export default function HeroSection() {
  return (
    <Section
      id="about"
      //className="flex min-h-screen items-center overflow-hidden"
      className="flex min-h-[calc(100svh-5rem)] items-start overflow-hidden"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background */}
      {/* ------------------------------------------------------------------ */}

      <div className="absolute inset-0 -z-10 overflow-hidden bg-[#020617]">
        {/* Animated Glow */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -40, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -50, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl"
        />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Content */}
      {/* ------------------------------------------------------------------ */}

      <div className="grid w-full items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ---------------------------------------------------------------- */}
        {/* Left */}
        {/* ---------------------------------------------------------------- */}

        <div>
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-cyan-300" />

            <span className="text-sm font-medium tracking-wide text-cyan-100">
              AI Engineer & Product Builder
            </span>
          </motion.div> */}

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8"
          >
            <p className="text-lg font-medium tracking-wide text-slate-400">
              Hi, I&apos;m
            </p>

            <h1 className="mt-4 text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              <span className="block text-white">
                Ayush Kumar
              </span>

              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Verma
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl"
          >
            I craft futuristic AI-powered experiences with
            scalable engineering, intelligent NLP systems,
            and immersive user interfaces with elegant motion
            and modern design.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            {/* Primary */}
            <motion.a
              href="#projects"
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group relative inline-flex items-center overflow-hidden rounded-2xl bg-cyan-400 px-8 py-4 text-sm font-semibold text-slate-950 shadow-2xl shadow-cyan-500/30"
            >
              {/* Shine */}
              <span className="absolute inset-0 overflow-hidden rounded-2xl">
                <span className="absolute -left-20 top-0 h-full w-10 rotate-12 bg-white/40 blur-md transition-all duration-1000 group-hover:left-[120%]" />
              </span>

              <span className="relative z-10 flex items-center">
                Explore Projects

                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.a>

            {/* Secondary */}
            <motion.a
              href="#contact"
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="inline-flex items-center rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-4 text-sm font-medium text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300"
            >
              Let&apos;s Talk
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.7 + index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 px-5 py-4 backdrop-blur-2xl"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
                  </div>

                  <div className="relative flex items-center gap-3">
                    <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-2 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                      <Icon className="h-4 w-4 text-slate-300 group-hover:text-cyan-300" />
                    </div>

                    <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                      {item.label}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Right Card */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            rotate: -3,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative hidden lg:block"
        >
          {/* Outer Glow */}
          <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 blur-2xl" />

          {/* Card */}
          <motion.div
            whileHover={{
              y: -10,
              rotateX: 5,
              rotateY: -5,
            }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 18,
            }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            {/* Border */}
            <div className="absolute inset-0 rounded-[36px] border border-cyan-400/10" />

            {/* Top Dots */}
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            {/* Header */}
            <div className="mt-6 flex items-center gap-2 border-b border-white/5 pb-4">
              <Terminal className="h-4 w-4 text-cyan-300" />

              <span className="font-mono text-xs text-slate-400">
                ayush.dev/profile.ts
              </span>
            </div>

            {/* Code */}
            <div className="mt-8 space-y-4 font-mono text-sm leading-7">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-slate-500"
              >
                const developer = {'{'}
              </motion.div>

              <div className="space-y-3 pl-6">
                {[
                  ['name', '"Ayush Kumar Verma"'],
                  ['role', '"Software Engineer"'],
                  ['specialization', '"NLP & AI Systems"'],
                  ['passion', '"Building impactful products"'],
                ].map(([key, value], index) => (
                  <motion.p
                    key={String(key)}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 1.2 + index * 0.15,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                  >
                    <span className="text-cyan-400">
                      {key}
                    </span>

                    <span className="text-white">:</span>{' '}

                    <span className="text-emerald-400">
                      {value}
                    </span>
                    ,
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="text-slate-500"
              >
                {'}'}
              </motion.div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute -bottom-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
