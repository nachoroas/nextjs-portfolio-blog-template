import { getAllProjects } from "@/lib/projects";
import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Proyectos",
  description: "Portfolio de proyectos profesionales, académicos y personales.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Proyectos</h1>
      <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <ProjectsClient projects={projects} />
    </div>
  );
}
