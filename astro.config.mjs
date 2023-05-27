import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp',
    cacheDir: './.cache/image',
    logLevel: 'debug'
  }), sitemap(), svelte()]
});