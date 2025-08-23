#!/usr/bin/env node

// Custom build script for Vercel to avoid Rollup native module issues
import { execSync } from 'child_process';
import { existsSync, rmSync } from 'fs';

console.log('🚀 Starting Vercel build process...');

try {
  // Clean up any existing build artifacts
  if (existsSync('dist')) {
    console.log('🧹 Cleaning existing dist directory...');
    rmSync('dist', { recursive: true, force: true });
  }

  // Set environment variables to disable native modules
  process.env.DISABLE_ROLLUP_NATIVE = 'true';
  process.env.NODE_ENV = 'production';

  console.log('📦 Building with Vite...');
  
  // Run the build with explicit environment variables
  execSync('DISABLE_ROLLUP_NATIVE=true NODE_ENV=production npx vite build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      DISABLE_ROLLUP_NATIVE: 'true',
      NODE_ENV: 'production'
    }
  });

  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
