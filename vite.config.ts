
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  server: {
    allowedHosts: ['automagica.tech', 'www.automagica.tech', 'ffc0de45-189c-404f-be92-715d05a4e11b.lovableproject.com'],
    port: 8080,
    open: true,
    host: true,
    watch: {
      usePolling: true,
      interval: 1000
    },
    hmr: {
      overlay: false // Optional: disable HMR overlay if you prefer
    },
    fs: {
      strict: true,
      deny: ['.env', '.git', 'node_modules']
    }
  },
  optimizeDeps: {
    exclude: ['.git/*'] // Explicitly exclude .git directory
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
