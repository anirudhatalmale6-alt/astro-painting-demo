// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://demo-painting-co.pages.dev',
  output: 'server',
  integrations: [react(), sitemap()],
  adapter: cloudflare(),
});
