#!/usr/bin/env node

// Simple fallback build that just creates a basic static site
import { existsSync, rmSync, mkdirSync, writeFileSync, copyFileSync } from "fs";
import { join } from "path";

console.log("🚀 Starting fallback build process...");

try {
  // Clean up any existing build artifacts
  if (existsSync("dist")) {
    console.log("🧹 Cleaning existing dist directory...");
    rmSync("dist", { recursive: true, force: true });
  }

  // Create dist directory
  mkdirSync("dist", { recursive: true });
  mkdirSync("dist/assets", { recursive: true });

  console.log("📝 Creating basic index.html...");

  // Create a simple index.html
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AgriFlow Document Hub</title>
    <style>
      body { 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: 0; 
        padding: 20px; 
        background: #f5f5f5;
      }
      .container {
        max-width: 800px;
        margin: 0 auto;
        background: white;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }
      h1 { color: #2563eb; margin-bottom: 20px; }
      p { line-height: 1.6; color: #374151; }
      .status { 
        background: #dcfce7; 
        color: #166534; 
        padding: 12px; 
        border-radius: 6px; 
        margin: 20px 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>🌾 AgriFlow Document Hub</h1>
      <div class="status">
        ✅ Application is being deployed. Please check back in a few minutes.
      </div>
      <p>
        This is a modern document management system for agricultural logistics companies. 
        Built with React, TypeScript, and Tailwind CSS.
      </p>
      <p>
        <strong>Features:</strong> AI-powered document processing, multi-language support, 
        dark/light mode, and responsive design.
      </p>
    </div>
  </body>
</html>`;

  writeFileSync(join("dist", "index.html"), htmlContent);

  console.log("✅ Fallback build completed successfully!");
  console.log(
    "📋 This creates a simple placeholder page while the full build is being fixed."
  );
} catch (error) {
  console.error("❌ Build failed:", error.message);
  process.exit(1);
}
