import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<import("next").Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/proyectos"
        className="mb-6 inline-block text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        ← Volver a Proyectos
      </Link>

      <article className="mx-auto max-w-4xl">
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-4">
            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {project.type}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {project.summary}
          </p>
        </header>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">TL;DR</h2>
            <p className="text-gray-700 dark:text-gray-300">{project.tldr}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Contexto</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {project.context}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Mi Rol</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {project.myRole}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Arquitectura</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {project.architecture}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Decisiones Clave</h2>
            <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
              {project.keyDecisions.map((decision, index) => (
                <li key={index}>{decision}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Resultados</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {project.results}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Enlaces</h2>
            <div className="flex flex-wrap gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  GitHub
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Demo
                </a>
              )}
              {project.links.writeup && (
                <a
                  href={project.links.writeup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Writeup
                </a>
              )}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
