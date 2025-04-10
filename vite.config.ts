import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Убрал base для локальной разработки (можно раскомментировать для продакшена)
  // base: "/tech-bridge-solutions/",
  
  server: {
    host: "::",
    port: 8080,
    // Добавил критически важные настройки для SPA
    historyApiFallback: true,
    open: true, // Автоматически открывать браузер
  },
  
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Оптимизации сборки
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['lodash', 'axios'], // Добавьте свои часто используемые библиотеки
        },
      },
    },
  },

  // Для лучшего отслеживания ошибок
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
}));