export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}
