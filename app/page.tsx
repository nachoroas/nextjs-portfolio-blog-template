import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { getLatestPosts } from "@/lib/posts";
import ProjectCard from "@/components/ProjectCard";
import PostCard from "@/components/PostCard";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const latestPosts = getLatestPosts(3);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
          [Your Name]
        </h1>
        <p className="mb-2 text-xl text-gray-600 dark:text-gray-400">
          [Your Role/Title]
        </p>
        <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Proyectos Destacados</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/proyectos"
            className="inline-block rounded-lg bg-gray-900 px-6 py-3 text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Ver Todos los Proyectos
          </Link>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Últimas Entradas del Blog</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-block rounded-lg bg-gray-900 px-6 py-3 text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Ver Todas las Entradas
          </Link>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="rounded-lg bg-gray-100 p-8 text-center dark:bg-gray-800">
        <h2 className="mb-4 text-2xl font-bold">¿Trabajamos juntos?</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:your.email@example.com"
            className="rounded-lg bg-gray-900 px-6 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gray-900 px-6 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
