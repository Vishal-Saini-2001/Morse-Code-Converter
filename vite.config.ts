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
    open: true
  }
});
