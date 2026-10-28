import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/data/portfolio.js';

const escapeAttr = (value) => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Replaces %site.<key>% tokens in the HTML entry files with values from src/data/portfolio.js,
// so titles, descriptions and Open Graph tags are edited in one place.
const injectSiteData = () => ({
  name: 'inject-site-data',
  transformIndexHtml: {
    order: 'pre',
    handler: (html) =>
      html.replace(/%site\.(\w+)%/g, (token, key) => (key in site ? escapeAttr(site[key]) : token)),
  },
});

export default defineConfig({
  plugins: [tailwindcss(), injectSiteData()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        certificates: resolve(import.meta.dirname, 'certificates.html'),
      },
    },
  },
});
