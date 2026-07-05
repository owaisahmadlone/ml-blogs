import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type TocItem = {
  level: number;
  text: string;
  slug: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  draft: boolean;
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
  toc: TocItem[];
};

function ensureDir(): boolean {
  return fs.existsSync(POSTS_DIR);
}

export function getPostSlugs(): string[] {
  if (!ensureDir()) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

function stripMarkdown(text: string): string {
  return text
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .trim();
}

function extractToc(content: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  const lines = content.split("\n");
  let inFence = false;

  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.*)$/.exec(line);
    if (match) {
      const level = match[1].length;
      const text = stripMarkdown(match[2]);
      items.push({ level, text, slug: slugger.slug(text) });
    }
  }
  return items;
}

export function getPostBySlug(slug: string): Post | null {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = path.join(POSTS_DIR, `${realSlug}.mdx`);
  const altPath = path.join(POSTS_DIR, `${realSlug}.md`);
  const filePath = fs.existsSync(fullPath)
    ? fullPath
    : fs.existsSync(altPath)
      ? altPath
      : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug: realSlug,
    title: data.title ?? realSlug,
    description: data.description ?? "",
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    category: data.category ?? "Writing",
    tags: data.tags ?? [],
    draft: Boolean(data.draft),
    readingTime: readingTime(content).text,
    content,
    toc: extractToc(content),
  };
}

export function getAllPosts({ includeDrafts = false } = {}): Post[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== null)
    .filter((p) => includeDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
