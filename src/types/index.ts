export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'ai/ml' | 'tools';
}

export interface Social {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface About {
  name: string;
  title: string;
  description: string;
  education: {
    degree: string;
    field: string;
    university: string;
    year: string;
  };
  resumeLink: string;
  profileImage: string;
  location: string;
  languages: string[];
  interests: string[];
}