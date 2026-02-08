import projectsData from "@/data/projects.json";

export type ProjectType = "Professional" | "Academic" | "Personal";

export interface ProjectLinks {
  github?: string | null;
  demo?: string | null;
  writeup?: string | null;
}

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  summary: string;
  stack: string[];
  highlights: string[];
  links: ProjectLinks;
  featured: boolean;
  tldr: string;
  context: string;
  myRole: string;
  architecture: string;
  keyDecisions: string[];
  results: string;
}

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getProjectsByType(type: ProjectType): Project[] {
  return getAllProjects().filter((project) => project.type === type);
}
