import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
import svelte from '@astrojs/svelte'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
      cacheDir: './.cache/image',
      logLevel: 'debug',
    }),
    svelte(),
  ],
  output: 'server',
  adapter: vercel(),
})
