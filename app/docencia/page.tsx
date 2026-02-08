import { getAllTeachingEntries } from "@/lib/teaching";
import Link from "next/link";
import { format } from "date-fns";

export const metadata = {
  title: "Docencia",
  description: "Experiencia docente y materiales de enseñanza.",
};

export default function TeachingPage() {
  const entries = getAllTeachingEntries();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Docencia</h1>
      <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="space-y-8">
        {entries.map((entry) => (
          <article
            key={entry.slug}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800"
          >
            <div className="mb-4 flex items-center justify-between">
              <Link
                href={`/docencia/${entry.slug}`}
                className="text-2xl font-bold text-gray-900 transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
              >
                {entry.frontmatter.title}
              </Link>
              <time
                dateTime={entry.frontmatter.date}
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                {format(new Date(entry.frontmatter.date), "yyyy")}
              </time>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              {entry.frontmatter.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {entry.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            {entry.frontmatter.links && (
              <div className="flex flex-wrap gap-4">
                {entry.frontmatter.links.course && (
                  <a
                    href={entry.frontmatter.links.course}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 underline transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Curso
                  </a>
                )}
                {entry.frontmatter.links.materials && (
                  <a
                    href={entry.frontmatter.links.materials}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 underline transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Materiales
                  </a>
                )}
                {entry.frontmatter.links.github && (
                  <a
                    href={entry.frontmatter.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 underline transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>

      {entries.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No hay entradas disponibles aún.
        </p>
      )}
    </div>
  );
}
