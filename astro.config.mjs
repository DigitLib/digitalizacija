import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis],
  },
  site: "https://digitlib.github.io",
  base: "/digitalizacija",
  integrations: [tailwind(), react(), robotsTxt(), sitemap()],
});
