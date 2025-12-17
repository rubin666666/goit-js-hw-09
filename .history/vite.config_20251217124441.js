import { defineConfig } from 'vite';
import { glob } from 'glob';
import path from 'node:path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: glob.sync('./src/*.html').reduce((acc, file) => {
        const entryName = path.basename(file, '.html');
        acc[entryName] = path.resolve(__dirname, file);
        return acc;
      }, {}),
    },
  },
});
