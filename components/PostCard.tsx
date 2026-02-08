import Link from "next/link";
import { format } from "date-fns";
import type { Post } from "@/lib/posts";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
    >
      <div className="mb-2 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <time dateTime={post.frontmatter.date}>
          {format(new Date(post.frontmatter.date), "d MMM yyyy")}
        </time>
        <span>•</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300">
        {post.frontmatter.title}
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        {post.frontmatter.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {post.frontmatter.tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
