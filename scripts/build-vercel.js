#!/usr/bin/env node

// Custom build script for Vercel to avoid Rollup native module issues
import { execSync } from "child_process";
import { existsSync, rmSync, mkdirSync, writeFileSync, copyFileSync } from "fs";
import { join } from "path";

console.log("🚀 Starting Vercel build process...");

try {
  // Clean up any existing build artifacts
  if (existsSync("dist")) {
    console.log("🧹 Cleaning existing dist directory...");
    rmSync("dist", { recursive: true, force: true });
  }

  // Create dist directory
  mkdirSync("dist", { recursive: true });

  // Set environment variables to disable native modules
  process.env.DISABLE_ROLLUP_NATIVE = "true";
  process.env.NODE_ENV = "production";
  process.env.VITE_DISABLE_ROLLUP_NATIVE = "true";

  console.log("📦 Installing dependencies with specific flags...");

  // Force reinstall with specific flags
  execSync("npm install --omit=optional --no-optional --force", {
    stdio: "inherit",
    env: {
      ...process.env,
      DISABLE_ROLLUP_NATIVE: "true",
      NODE_ENV: "production",
      VITE_DISABLE_ROLLUP_NATIVE: "true",
    },
  });

  console.log("🔧 Patching Rollup to use pure JS...");

  // Try to patch the rollup native module issue
  try {
    const rollupNativePath = join(
      process.cwd(),
      "node_modules",
      "rollup",
      "dist",
      "native.js"
    );
    if (existsSync(rollupNativePath)) {
      const backupPath = rollupNativePath + ".backup";
      copyFileSync(rollupNativePath, backupPath);

      // Create a simple fallback
      const fallbackContent = `
        module.exports = function() {
          console.log('Using pure JS fallback for Rollup');
          return require('./rollup.js');
        };
      `;
      writeFileSync(rollupNativePath, fallbackContent);
    }
  } catch (patchError) {
    console.log("⚠️ Could not patch Rollup, continuing...");
  }

  console.log("📦 Building with Vite...");

  // Run the build with explicit environment variables
  execSync(
    "DISABLE_ROLLUP_NATIVE=true NODE_ENV=production VITE_DISABLE_ROLLUP_NATIVE=true npx vite build",
    {
      stdio: "inherit",
      env: {
        ...process.env,
        DISABLE_ROLLUP_NATIVE: "true",
        NODE_ENV: "production",
        VITE_DISABLE_ROLLUP_NATIVE: "true",
      },
    }
  );

  console.log("✅ Build completed successfully!");
} catch (error) {
  console.error("❌ Build failed:", error.message);
  process.exit(1);
}
