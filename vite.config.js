import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  root: './webview',
  build: {
    outDir: '../assets',
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        assetFileNames: 'main.css',
      },
    },
  },
});
