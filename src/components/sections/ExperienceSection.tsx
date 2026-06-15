import ExperienceCard from '@/components/cards/ExperienceCard';
import Header, { Section } from '@/components/layout/Header';
import type { Experience } from '@/types/project';

const experiences: Experience[] = [
  {
    position: 'App Developer',
    institution: 'Gyan Ganga Institute of Technology & Sciences',
    duration: 'Feb 2026 - Aug 2026',
    image: '/images/experience/gg removebg-preview.png',
    institutionUrl: 'https://ggits.org/',
  },
  {
    position: 'Your Second Position',
    institution: 'Second Institution Name',
    duration: 'Start Date - End Date',
    image: '/images/experience/institution-placeholder.svg',
    institutionUrl: 'https://example.com',
  },
];

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <Header
        title="Experience"
        subtitle="Professional roles, internships, and institutional experience"
      />
      <div className="space-y-5">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.position}-${experience.institution}`}
            experience={experience}
          />
        ))}
      </div>
    </Section>
  );
}
