"use client";

import { useState } from "react";
import type { Project, ProjectType } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const handleFilterChange = (type: ProjectType | "All") => {
    if (type === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.type === type));
    }
  };

  return (
    <>
      <ProjectFilter projects={projects} onFilterChange={handleFilterChange} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No hay proyectos disponibles para este filtro.
        </p>
      )}
    </>
  );
}
