import { defineConfig } from 'vite';
import { glob } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
      '/src': path.resolve(__dirname, 'src'),
    },
  },
});
