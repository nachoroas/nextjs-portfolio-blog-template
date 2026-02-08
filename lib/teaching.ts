import fs from "fs";
import path from "path";
import matter from "gray-matter";

const teachingDirectory = path.join(process.cwd(), "content/teaching");

export interface TeachingFrontmatter {
  title: string;
  date: string;
  tags: string[];
  description: string;
  links?: {
    course?: string | null;
    materials?: string | null;
    github?: string | null;
  };
}

export interface TeachingEntry {
  slug: string;
  frontmatter: TeachingFrontmatter;
  content: string;
}

export function getAllTeachingEntries(): TeachingEntry[] {
  if (!fs.existsSync(teachingDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(teachingDirectory);
  const allEntriesData = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(teachingDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: data as TeachingFrontmatter,
        content,
      };
    });

  return allEntriesData.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getTeachingEntryBySlug(slug: string): TeachingEntry | undefined {
  const filePath = path.join(teachingDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as TeachingFrontmatter,
    content,
  };
}

export function getTeachingEntriesByTag(tag: string): TeachingEntry[] {
  return getAllTeachingEntries().filter((entry) =>
    entry.frontmatter.tags.includes(tag)
  );
}

export function getAllTeachingTags(): string[] {
  const entries = getAllTeachingEntries();
  const tagsSet = new Set<string>();
  entries.forEach((entry) => {
    entry.frontmatter.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}
