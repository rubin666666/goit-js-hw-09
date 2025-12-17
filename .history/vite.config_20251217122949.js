import { defineConfig } from 'vite';
import { glob } from 'glob';
import path from 'node:path';

export default defineConfig({
  root: 'public',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: glob.sync('./public/*.html').reduce((acc, file) => {
        const entryName = path.basename(file, '.html');
        acc[entryName] = path.resolve(__dirname, file);
        return acc;
      }, {}),
    },
  },
});
