import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface PostFrontmatter {
  title: string;
  date: string;
  tags: string[];
  description: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  readingTime: string;
  content: string;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const readingTimeResult = readingTime(content);

      return {
        slug,
        frontmatter: data as PostFrontmatter,
        readingTime: readingTimeResult.text,
        content,
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): Post | undefined {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const readingTimeResult = readingTime(content);

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    readingTime: readingTimeResult.text,
    content,
  };
}

export function getLatestPosts(count: number): Post[] {
  return getAllPosts().slice(0, count);
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) =>
    post.frontmatter.tags.includes(tag)
  );
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();
  posts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}
