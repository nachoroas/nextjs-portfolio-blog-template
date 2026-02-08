import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
          {project.type}
        </span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300">
        {project.title}
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        {project.summary}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 3 && (
          <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300">
            +{project.stack.length - 3}
          </span>
        )}
      </div>
    </Link>
  );
}
