import { Award, FileText } from 'lucide-react';
import Header, { Section } from '@/components/layout/Header';
import MediaPreviewDialog from '@/components/ui/media-preview-dialog';

type Credential = {
  label: string;
  src: string;
  type?: 'badge' | 'certificate';
};

type Skill = {
  name: string;
  category: string;
  credentials: Credential[];
};

const skills: Skill[] = [
  {
    name: 'Cybersecurity',
    category: 'Security',
    credentials: [
      {
        label: 'Cybersecurity Essentials',
        src: '/certificates/AICTE/AyushVerma-Aicte  Cybersecurity Essential.pdf',
      },
      {
        label: 'Introduction to Cybersecurity',
        src: '/certificates/AICTE/AyushVerma-Aicte Introduction to Cybersecurity.pdf',
      },
      {
        label: 'Cisco Skillathon',
        src: '/certificates/Cisco/AyushVerma-SKL2022_GyanGang-certificate.pdf',
      },
    ],
  },
  {
    name: 'Packet Tracer',
    category: 'Networking',
    credentials: [
      {
        label: 'Introduction to Packet Tracer',
        src: '/certificates/AICTE/AyushVerma-Aicte Packet Tracer.pdf',
      },
    ],
  },
  {
    name: 'Alibaba Cloud Development',
    category: 'Cloud',
    credentials: [
      {
        label: 'Certified Developer',
        src: '/certificates/Alibaba/Certificate.jpg',
      },
      {
        label: 'Developer Badge',
        src: '/certificates/Alibaba/Badge.jpg',
        type: 'badge',
      },
    ],
  },
  {
    name: 'AWS Cloud Foundations',
    category: 'Cloud',
    credentials: [
      {
        label: 'Cloud Foundations',
        src: '/certificates/AWS/AWS Academy  Cloud Foundations.pdf',
      },
      {
        label: 'Cloud Foundations Badge',
        src: '/certificates/AWS/Cloud Foundations Badge.jpeg',
        type: 'badge',
      },
    ],
  },
  {
    name: 'Machine Learning Foundations',
    category: 'AI/ML',
    credentials: [
      {
        label: 'ML Foundations',
        src: '/certificates/AWS/AWS Academy Graduate AWS Academy Machine Learning Foundations.pdf',
      },
      {
        label: 'ML Foundations Badge',
        src: '/certificates/AWS/Machine Learning Foundations Badge.jpeg',
        type: 'badge',
      },
    ],
  },
  {
    name: 'Natural Language Processing',
    category: 'AI/ML',
    credentials: [
      {
        label: 'ML for NLP',
        src: '/certificates/AWS/AWS Academy Graduate Machine Learning for Natural Language Processing.pdf',
      },
      {
        label: 'NLP Badge',
        src: '/certificates/AWS/machine learning for natural language processing Badge.png',
        type: 'badge',
      },
    ],
  },
  {
    name: 'CCNA Network Engineering',
    category: 'Networking',
    credentials: [
      {
        label: 'Introduction to Networks',
        src: '/certificates/Cisco/CCNA/CCNA Introduction to Networks.pdf',
      },
      {
        label: 'Switching, Routing & Wireless',
        src: '/certificates/Cisco/CCNA/CCNA Switching, Routing, and Wireless Essentials.pdf',
      },
      {
        label: 'Enterprise Networking & Security',
        src: '/certificates/Cisco/CCNA/CCNA Enterprise Networking, Security, and Automation.pdf',
      },
    ],
  },
  {
    name: 'Python',
    category: 'Programming',
    credentials: [
      {
        label: 'Programming Essentials in Python',
        src: '/certificates/Cisco/AyushVerma-Programming Esse-certificate python.pdf',
      },
    ],
  },
  {
    name: 'C++',
    category: 'Programming',
    credentials: [
      {
        label: 'Programming Essentials in C++',
        src: '/certificates/Cisco/programming-essentials-cpp.pdf',
      },
    ],
  },
  {
    name: 'C',
    category: 'Programming',
    credentials: [
      {
        label: 'Programming Essentials in C',
        src: '/certificates/Cisco/AyushVerma-Programming Esse-certificate.pdf',
      },
    ],
  },
  {
    name: 'Google Cloud',
    category: 'Cloud',
    credentials: [
      {
        label: 'Google Cloud Level 1',
        src: '/certificates/Google/google level 1.pdf',
      },
      {
        label: 'Google Cloud Level 2',
        src: '/certificates/Google/google level 2.pdf',
      },
    ],
  },
  {
    name: 'Agile Project Management',
    category: 'Project Management',
    credentials: [
      {
        label: 'Agile Project Management',
        src: '/certificates/HP/Agile Project Management.pdf',
      },
    ],
  },
  {
    name: 'AI Fundamentals',
    category: 'AI/ML',
    credentials: [
      {
        label: 'AI for Beginners',
        src: '/certificates/HP/AI for Beginners HP.pdf',
      },
    ],
  },
  {
    name: 'Database Design',
    category: 'Databases',
    credentials: [
      {
        label: 'Oracle Database Design',
        src: '/certificates/Oracle/Database Design.pdf',
      },
    ],
  },
  {
    name: 'SQL Programming',
    category: 'Databases',
    credentials: [
      {
        label: 'Oracle Programming with SQL',
        src: '/certificates/Oracle/Database Programming with SQL.pdf',
      },
      {
        label: 'SQL Certificate',
        src: '/certificates/SQL-Certificate.pdf',
      },
    ],
  },
  {
    name: 'Java Programming',
    category: 'Programming',
    credentials: [
      {
        label: 'Java Fundamentals',
        src: '/certificates/Oracle/Java Fundamentals.pdf',
      },
      {
        label: 'Java Programming',
        src: '/certificates/Oracle/Java Programming.pdf',
      },
    ],
  },
  {
    name: 'AI & Machine Learning in Java',
    category: 'AI/ML',
    credentials: [
      {
        label: 'Oracle AI/ML Certificate',
        src: '/certificates/Oracle/Oracle AIML Certificate.pdf',
      },
    ],
  },
  {
    name: 'Salesforce AI Agent Development',
    category: 'CRM & AI',
    credentials: [
      {
        label: 'Salesforce Skill Wallet',
        src: '/certificates/Salesforce/Salesforce Skill wallet.pdf',
      },
    ],
  },
];

export default function SkillsSection() {
  return (
    <Section id="skills">
      <Header
        title="Technical Skills"
        subtitle="Verified skills, certificates, and achievement badges"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <article
            key={skill.name}
            className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-100">{skill.name}</h3>
                <p className="mt-1 text-xs text-slate-400">{skill.category}</p>
              </div>
              <span className="shrink-0 rounded-full bg-slate-800 px-2.5 py-1 text-[10px] font-medium text-slate-300">
                {skill.credentials.length}{' '}
                {skill.credentials.length === 1 ? 'credential' : 'credentials'}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {skill.credentials.map((credential) => {
                const isBadge = credential.type === 'badge';
                const Icon = isBadge ? Award : FileText;

                return (
                  <MediaPreviewDialog
                    key={credential.src}
                    title={`${skill.name}: ${credential.label}`}
                    src={credential.src}
                  >
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-md border border-cyan-400/30 px-3 py-2 text-left text-xs font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {credential.label}
                    </button>
                  </MediaPreviewDialog>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
