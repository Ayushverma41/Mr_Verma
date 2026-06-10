export default function SkillCard({ category, items }: { category: string; items: string[] }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <h3 className="text-base font-semibold text-cyan-300">{category}</h3>
      <ul className="mt-3 space-y-1 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </article>
  );
}

