// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';
import preact from "@astrojs/preact";

import netlify from "@astrojs/netlify";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://ajclarkson.co.uk",
  integrations: [preact(), mdx()],

  markdown: {
    remarkPlugins: [remarkReadingTime],
  },

  adapter: netlify(),
});