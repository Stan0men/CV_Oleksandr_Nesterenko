import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base keeps GitHub Pages (project site) and local preview working.
  base: './',
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
