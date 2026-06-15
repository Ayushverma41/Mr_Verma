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
    details:
      'Developed and maintained application features, worked on responsive user interfaces, and collaborated with the team to test, debug, and improve the overall user experience.',
  },
  {
    position: 'Your Second Position',
    institution: 'Second Institution Name',
    duration: 'Start Date - End Date',
    image: '/images/experience/institution-placeholder.svg',
    institutionUrl: 'https://example.com',
    details:
      'Add a short summary of your responsibilities, the projects you contributed to, and the impact of your work at this company.',
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
