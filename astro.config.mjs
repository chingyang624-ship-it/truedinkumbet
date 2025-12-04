import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yap-allen.github.io',
  base: '/',
  output: 'static',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    ssr: {
      external: ['sonner'],
    },
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
        '@components': new URL('./_NEXTJS_MIGRATION/components', import.meta.url).pathname,
        '@hooks': new URL('./_NEXTJS_MIGRATION/hooks', import.meta.url).pathname,
      },
    },
  },
});
