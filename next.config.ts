import type { NextConfig } from "next";

const isGitHubPagesExport = process.env.GITHUB_PAGES_EXPORT === "true";
const githubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isGitHubPagesExport
    ? {
        output: "export" as const,
        basePath: githubPagesBasePath,
      }
    : {}),
};

export default nextConfig;
