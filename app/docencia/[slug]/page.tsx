import { notFound } from "next/navigation";
import { getTeachingEntryBySlug, getAllTeachingEntries } from "@/lib/teaching";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import Link from "next/link";
import remarkGfm from "remark-gfm";

interface TeachingEntryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const entries = getAllTeachingEntries();
  return entries.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: TeachingEntryPageProps): Promise<import("next").Metadata> {
  const { slug } = await params;
  const entry = getTeachingEntryBySlug(slug);

  if (!entry) {
    return {
      title: "Entrada no encontrada",
    };
  }

  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.description,
  };
}

export default async function TeachingEntryPage({
  params,
}: TeachingEntryPageProps) {
  const { slug } = await params;
  const entry = getTeachingEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/docencia"
        className="mb-6 inline-block text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        ← Volver a Docencia
      </Link>

      <article className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold">
            {entry.frontmatter.title}
          </h1>
          <div className="mb-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <time dateTime={entry.frontmatter.date}>
              {format(new Date(entry.frontmatter.date), "d MMMM yyyy")}
            </time>
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {entry.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
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
                  className="rounded-lg bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Curso
                </a>
              )}
              {entry.frontmatter.links.materials && (
                <a
                  href={entry.frontmatter.links.materials}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Materiales
                </a>
              )}
              {entry.frontmatter.links.github && (
                <a
                  href={entry.frontmatter.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote
            source={entry.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>
      </article>
    </div>
  );
}
