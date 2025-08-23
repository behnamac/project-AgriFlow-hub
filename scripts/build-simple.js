#!/usr/bin/env node

// Simple build script that bypasses Vite/Rollup entirely
import { execSync } from "child_process";
import { existsSync, rmSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

console.log("🚀 Starting simple build process...");

try {
  // Clean up any existing build artifacts
  if (existsSync("dist")) {
    console.log("🧹 Cleaning existing dist directory...");
    rmSync("dist", { recursive: true, force: true });
  }

  // Create dist directory
  mkdirSync("dist", { recursive: true });

  console.log("📦 Installing esbuild...");

  // Install esbuild if not present
  try {
    execSync("npm install --save-dev esbuild", { stdio: "inherit" });
  } catch (e) {
    console.log("esbuild already installed or failed to install");
  }

  console.log("🔧 Building with esbuild...");

  // Build with esbuild directly
  execSync(
    "npx esbuild src/main.tsx --bundle --outfile=dist/assets/index.js --format=esm --target=es2020 --minify --loader:.css=css",
    {
      stdio: "inherit",
    }
  );

  console.log("📝 Creating index.html...");

  // Create a simple index.html
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AgriFlow Document Hub</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/index.js"></script>
  </body>
</html>`;

  writeFileSync(join("dist", "index.html"), htmlContent);

  console.log("✅ Simple build completed successfully!");
} catch (error) {
  console.error("❌ Build failed:", error.message);
  process.exit(1);
}
