import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://diyorstroy.uz',
  output: 'static',
  vite: { plugins: [tailwind()] },
});
