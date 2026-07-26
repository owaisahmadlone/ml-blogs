import type { NextConfig } from "next";

// When building for GitHub Pages (in CI), export a fully static site served
// from the /ml-blogs sub-path. On Vercel this branch is skipped, so the site
// keeps building/serving from the root as before.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "ml-blogs";
const basePath = isGithubPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  // Exposed so plain <a href="..."> links to files in /public (which don't
  // get basePath rewriting like next/link and next/image do) can prefix it
  // themselves. See src/lib/site.ts.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isGithubPages
    ? {
        output: "export",
        basePath,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
