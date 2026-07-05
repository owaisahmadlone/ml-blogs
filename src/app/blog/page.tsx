import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { PostList } from "@/components/PostList";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays and notes on machine learning and AI engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-6">
        <h1 className="font-serif text-4xl font-medium tracking-tight">Blog</h1>
        <p className="mt-3 text-lg text-muted">
          Essays and notes on machine learning, AI engineering, and building
          things.
        </p>
      </header>
      <PostList posts={posts} />
    </div>
  );
}
