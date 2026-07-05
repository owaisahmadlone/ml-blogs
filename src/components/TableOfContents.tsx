"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/posts";

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeSlug, setActiveSlug] = useState<string>("");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.slug))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSlug(visible[0].target.id);
        }
      },
      { rootMargin: "-90px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
        Contents
      </p>
      <ul className="space-y-1.5 border-l border-border">
        {items.map((item) => {
          const active = activeSlug === item.slug;
          return (
            <li key={item.slug}>
              <a
                href={`#${item.slug}`}
                className={`block border-l-2 py-0.5 leading-snug transition-colors ${
                  item.level === 3 ? "pl-6" : "pl-4"
                } ${
                  active
                    ? "border-accent text-accent font-medium"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
