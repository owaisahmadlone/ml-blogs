import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import { mdxComponents } from "@/components/mdx";
import { TableOfContents } from "@/components/TableOfContents";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts({ includeDrafts: true }).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [site.name],
    },
  };
}

const prettyCodeOptions = {
  theme: { light: "github-light", dark: "github-dark" },
  keepBackground: false,
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-14 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14">
      <aside className="hidden lg:block">
        <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pb-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            ← All posts
          </Link>
          <TableOfContents items={post.toc} />
        </div>
      </aside>

      <article className="min-w-0">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent lg:hidden"
        >
          ← All posts
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted">
            <span className="text-accent">{post.category}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-[2.75rem]">
            {post.title}
          </h1>
          {post.description && (
            <p className="mt-4 text-xl leading-relaxed text-muted">
              {post.description}
            </p>
          )}
        </header>

        {post.toc.length > 0 && (
          <details className="mb-10 rounded-xl border border-border bg-card px-5 py-3 lg:hidden">
            <summary className="cursor-pointer text-sm font-medium">
              Contents
            </summary>
            <div className="mt-3">
              <TableOfContents items={post.toc} />
            </div>
          </details>
        )}

        <div className="prose-blog max-w-none">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [
                    rehypeAutolinkHeadings,
                    {
                      behavior: "append",
                      properties: {
                        className: ["heading-anchor"],
                        ariaLabel: "Link to section",
                      },
                      content: { type: "text", value: "#" },
                    },
                  ],
                  [rehypePrettyCode, prettyCodeOptions],
                ],
              },
            }}
          />
        </div>

        <footer className="mt-16 border-t border-border pt-8">
          <p className="text-muted">
            Thanks for reading. Questions or thoughts?{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent underline decoration-border underline-offset-4 hover:decoration-accent"
            >
              Send me a note
            </a>
            .
          </p>
        </footer>
      </article>
    </div>
  );
}
