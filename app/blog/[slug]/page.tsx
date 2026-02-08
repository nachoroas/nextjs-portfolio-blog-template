import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import TableOfContents from "@/components/mdx/TableOfContents";
import Link from "next/link";
import remarkGfm from "remark-gfm";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<import("next").Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post no encontrado",
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      tags: post.frontmatter.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="mb-6 inline-block text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        ← Volver al Blog
      </Link>

      <article className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold">{post.frontmatter.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <time dateTime={post.frontmatter.date}>
              {format(new Date(post.frontmatter.date), "d MMMM yyyy")}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_250px]">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
          <aside>
            <TableOfContents content={post.content} />
          </aside>
        </div>
      </article>
    </div>
  );
}
