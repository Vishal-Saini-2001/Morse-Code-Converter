import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      }
    },
    // Optimize for SEO
    minify: true,
    sourcemap: false,
    // Ensure assets are properly named for caching
    assetsDir: 'assets'
  },
  // SEO-friendly server configuration
  server: {
    port: 5173,
    open: true,
    // Ensure ads.txt is served with correct MIME type
    middlewareMode: false,
  },
  // Ensure public files are correctly copied to dist
  publicDir: 'public',
  // Configure static file serving
  define: {
    // Ensure ads.txt is served at root level
  }
});
