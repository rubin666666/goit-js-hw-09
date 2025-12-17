import { defineConfig } from 'vite';
import { glob } from 'glob';
import path from 'node:path';

export default defineConfig({
  root: 'public',
  build: {
    sourcemap: true,
    rollupOptions: {
      input: glob.sync('./public/*.html'),
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '/src': path.resolve(__dirname, './src'),
    },
  },
});
