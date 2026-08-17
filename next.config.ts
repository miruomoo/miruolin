import type { NextConfig } from "next";

// Static export for GitHub Pages project deploy at miruomoo.github.io/miruolin
const repo = "miruolin";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
