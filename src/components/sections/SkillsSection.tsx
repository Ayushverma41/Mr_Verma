import Header, { Section } from '@/components/layout/Header';

const skills = [
  { name: 'Python', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'C', category: 'Languages' },
  { name: 'SQL Programming', category: 'Databases' },
  { name: 'Relational Database', category: 'Databases' },
  { name: 'Database Design', category: 'Databases' },
  { name: 'Natural Language Processing', category: 'AI/ML' },
  { name: 'Machine Learning Foundations', category: 'AI/ML' },
  { name: 'AI with ML in Java', category: 'AI/ML' },
  { name: 'App Development: Flutter', category: 'Mobile Dev' },
];

export default function SkillsSection() {
  return (
    <Section id="skills">
      <Header title="Technical Skills" subtitle="Core skill set and focus areas" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <article key={skill.name} className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-sm font-semibold">{skill.name}</p>
            <p className="text-xs text-slate-400">{skill.category}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
