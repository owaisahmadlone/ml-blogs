import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-muted">No posts yet — check back soon.</p>
    );
  }

  return (
    <ul className="divide-y divide-border">
      {posts.map((post) => (
        <li key={post.slug} className="group">
          <Link href={`/blog/${post.slug}`} className="block py-7">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted">
              <span className="text-accent">{post.category}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
              {post.title}
            </h3>
            {post.description && (
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                {post.description}
              </p>
            )}
            <span className="mt-3 inline-block text-sm text-muted">
              {post.readingTime}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
