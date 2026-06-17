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
      'Engineered a scalable, full-stack ERP system from scratch to automate complex institutional workflows. Developed robust cross-platform mobile apps using Flutter and optimized data-heavy backends via PHP, SQL, and RESTful APIs, significantly improving application performance and system integration.',
  },
  {
    position: 'Web Development Trainee',
    institution: 'Ordnance Factory Khamaria',
    duration: 'May 2025',
    image: '/images/experience/Ordnance_factory_board.webp',
    institutionUrl: 'https://ddpdoo.gov.in/en/main/home',
    details:
      'Completed an intensive industrial training program covering networking, cybersecurity, and full-stack development. Acquired hands-on experience in enterprise software workflows, secure coding practices, and cross-functional team collaboration in a professional environment.',
  },
];

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <Header
        title="Experience"
        subtitle="Professional roles, internships, Trainings, and institutional experience"
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
