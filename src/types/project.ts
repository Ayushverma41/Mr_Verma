export type Social = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  href?: string;
  github?: string;
  highlight?: boolean;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type Experience = {
  position: string;
  institution: string;
  duration: string;
  image: string;
  institutionUrl: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
};

