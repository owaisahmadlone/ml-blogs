import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

function Anchor({ href = "", ...props }: ComponentPropsWithoutRef<"a">) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (isInternal) {
    return <Link href={href} {...props} />;
  }
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
}

export function Callout({
  children,
  type = "note",
}: {
  children: ReactNode;
  type?: "note" | "tip" | "warning";
}) {
  const label = { note: "Note", tip: "Tip", warning: "Heads up" }[type];
  return (
    <div className="not-prose my-6 rounded-xl border border-border bg-card px-5 py-4">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
        {label}
      </p>
      <div className="text-[0.98rem] leading-relaxed text-foreground [&>p]:m-0">
        {children}
      </div>
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  a: Anchor,
  Callout,
};
