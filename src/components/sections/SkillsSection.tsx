import { FileText } from 'lucide-react';
import Header, { Section } from '@/components/layout/Header';
import MediaPreviewDialog from '@/components/ui/media-preview-dialog';

const skills = [
 
    category: 'AI/ML',
    certificate: '/certificates/Oracle/Oracle AIML Certificate.pdf',
  },
  { name: 'App Development: Flutter', category: 'Mobile Dev', certificate: null },
];

export default function SkillsSection() {
  return (
    <Section id="skills">
      <Header title="Technical Skills" subtitle="Core skill set and focus areas" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <article key={skill.name} className="flex flex-col rounded-lg border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-sm font-semibold">{skill.name}</p>
            <p className="text-xs text-slate-400">{skill.category}</p>
            {skill.certificate && (
              <MediaPreviewDialog title={`${skill.name} certificate`} src={skill.certificate}>
                <button
                  type="button"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-md border border-cyan-400/30 px-3 py-2 text-xs font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200"
                >
                  <FileText className="h-4 w-4" />
                  View certificate
                </button>
              </MediaPreviewDialog>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
