import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
    },
    // Ensure we don't use native dependencies
    target: 'esnext',
  },
  optimizeDeps: {
    // Force Vite to use pure JavaScript implementations
    include: [],
    exclude: ['@rollup/rollup-linux-x64-gnu', '@rollup/rollup-darwin-arm64', '@rollup/rollup-darwin-x64'],
  },
  // Force Vite to use pure JavaScript implementations
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
}));
