// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://ajclarkson.co.uk",
  integrations: [preact()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },

});
