export type Social = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  github?: string;
  highlight?: boolean;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
};

