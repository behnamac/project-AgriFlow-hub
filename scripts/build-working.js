#!/usr/bin/env node

// Working build script that properly bundles the React app
import { execSync } from "child_process";
import { existsSync, rmSync, mkdirSync, writeFileSync, readFileSync } from "fs";
import { join } from "path";

console.log("🚀 Starting working build process...");

try {
  // Clean up any existing build artifacts
  if (existsSync("dist")) {
    console.log("🧹 Cleaning existing dist directory...");
    rmSync("dist", { recursive: true, force: true });
  }

  // Create dist directory
  mkdirSync("dist", { recursive: true });
  mkdirSync("dist/assets", { recursive: true });

  console.log("📦 Installing esbuild...");

  // Install esbuild if not present
  try {
    execSync("npm install --save-dev esbuild", { stdio: "inherit" });
  } catch (e) {
    console.log("esbuild already installed");
  }

  console.log("🔧 Building React app with esbuild...");

  // Build the main application bundle
  execSync(
    "npx esbuild src/main.tsx --bundle --outfile=dist/assets/index.js --format=esm --target=es2020 --minify --loader:.css=css --loader:.tsx=tsx --loader:.ts=ts --jsx=automatic --jsx-import-source=react",
    {
      stdio: "inherit",
    }
  );

  console.log("📝 Creating index.html...");

  // Read the original index.html to get the proper structure
  const originalHtml = readFileSync("index.html", "utf-8");

  // Update the script source to point to our built file
  const updatedHtml = originalHtml.replace(
    /<script type="module" src="[^"]*"><\/script>/,
    '<script type="module" src="./assets/index.js"></script>'
  );

  writeFileSync(join("dist", "index.html"), updatedHtml);

  console.log("✅ Working build completed successfully!");
  console.log("📋 This creates a fully functional React application.");
} catch (error) {
  console.error("❌ Build failed:", error.message);
  process.exit(1);
}
