export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}