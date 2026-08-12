import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const basePath = (process.env.GITHUB_PAGES_BASE_PATH ?? "").replace(/\/$/, "");
if (basePath && !basePath.startsWith("/")) {
  throw new Error("GITHUB_PAGES_BASE_PATH must start with '/'.");
}

const clientDir = resolve("dist/client");
const outputDir = resolve("dist/github-pages");

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const { default: worker } = await import("../dist/server/index.js");
const response = await worker.fetch(
  new Request("http://localhost/", { headers: { accept: "text/html" } }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Could not render the homepage for GitHub Pages: ${response.status}`);
}

let html = await response.text();
html = html.replaceAll("/_next/", `${basePath}/_next/`);

await writeFile(resolve(outputDir, "index.html"), html, "utf8");
await writeFile(resolve(outputDir, ".nojekyll"), "", "utf8");

console.log(`GitHub Pages artifact ready: ${outputDir}`);
