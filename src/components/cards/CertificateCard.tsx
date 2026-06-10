export default function CertificateCard({ title, issuer, year }: { title: string; issuer: string; year: string }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-slate-400">{issuer} • {year}</p>
    </article>
  );
}

