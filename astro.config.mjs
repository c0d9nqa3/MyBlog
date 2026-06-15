// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  site: process.env.SITE_URL || 'https://yann-blog.pages.dev',
  base: process.env.BASE_PATH || '/',
});
