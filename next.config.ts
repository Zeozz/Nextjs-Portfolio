import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain HTML/CSS/JS in `out/` so the site can be hosted on GitHub Pages.
  output: "export",
  // GitHub Pages serves the site from /<repo-name>; the deploy workflow sets this.
  basePath: process.env.PAGES_BASE_PATH || "",
};

export default nextConfig;
