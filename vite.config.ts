import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isVercel = process.env.DISABLE_ROLLUP_NATIVE === 'true';
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        // Fix for Vercel deployment
        external: [],
        ...(isVercel && {
          // Force pure JavaScript implementation
          plugins: [],
        }),
      },
      // Ensure we don't use native dependencies
      target: 'esnext',
      minify: 'esbuild',
    },
    optimizeDeps: {
      // Force Vite to use pure JavaScript implementations
      include: [],
      exclude: [
        '@rollup/rollup-linux-x64-gnu', 
        '@rollup/rollup-darwin-arm64', 
        '@rollup/rollup-darwin-x64',
        '@rollup/rollup-win32-x64-msvc'
      ],
    },
    // Force Vite to use pure JavaScript implementations
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.DISABLE_ROLLUP_NATIVE': JSON.stringify(process.env.DISABLE_ROLLUP_NATIVE || 'false'),
    },
    esbuild: {
      // Use esbuild instead of native modules
      target: 'esnext',
    },
  };
});
