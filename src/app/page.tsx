import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { PostList } from "@/components/PostList";
import { site } from "@/lib/site";

export default function Home() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pt-20 pb-14 sm:pt-28">
        <p className="mb-4 text-sm uppercase tracking-widest text-accent">
          Hi, I&apos;m Owais
        </p>
        <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
          Machine learning, AI engineering, and building things.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          I&apos;m {site.name}, {site.role} at{" "}
          <a
            href={site.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline decoration-border underline-offset-4 hover:decoration-accent"
          >
            {site.company}
          </a>
          . I studied Computer Science at IIT Kharagpur. This is where I write
          about the things I learn while shipping ML systems.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/blog"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Read the blog
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            About me
          </Link>
        </div>
      </section>

      <section className="border-t border-border py-14">
        <div className="mb-2 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-medium tracking-tight">
            Latest writing
          </h2>
          <Link
            href="/blog"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            View all →
          </Link>
        </div>
        <PostList posts={posts} />
      </section>
    </div>
  );
}
