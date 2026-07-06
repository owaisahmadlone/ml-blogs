import type { NextConfig } from "next";

// When building for GitHub Pages (in CI), export a fully static site served
// from the /ml-blogs sub-path. On Vercel this branch is skipped, so the site
// keeps building/serving from the root as before.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "ml-blogs";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  ...(isGithubPages
    ? {
        output: "export",
        basePath: `/${repo}`,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
