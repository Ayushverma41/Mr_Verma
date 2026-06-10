export default function ExperienceCard({ role, company, period, points }: { role: string; company: string; period: string; points: string[] }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <h3 className="text-lg font-semibold">{role}</h3>
      <p className="text-sm text-cyan-300">{company} • {period}</p>
      <ul className="mt-3 space-y-1 text-sm text-slate-300">
        {points.map((point) => <li key={point}>• {point}</li>)}
      </ul>
    </article>
  );
}

