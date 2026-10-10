export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problemStatement: string;
  solution: string;
  keyContributions: string[];
  keyCapabilities?: string[];
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  isExperienceLinked?: boolean;
  experienceLabel?: string;
  visualType: 'hmi-dashboard' | 'review-nlp' | 'edge-ai';
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    description?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  employmentType: string;
  period: string; // Configurable field
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  description: string;
  type: 'award' | 'certification' | 'competition';
  badge: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  scoreType: string;
  scoreValue: string;
  location: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  description?: string;
}
