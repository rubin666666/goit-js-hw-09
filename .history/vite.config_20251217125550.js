import { defineConfig } from 'vite';
import { glob } from 'glob';
import path from 'node:path';

export default defineConfig({
  root: 'src',
  build: {
    sourcemap: true,
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
});
