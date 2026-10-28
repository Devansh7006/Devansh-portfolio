import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 5174,
    host: '0.0.0.0',
    open: false
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
