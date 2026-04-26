import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://fallenoak.org",
  redirects: {
    '/mareday': {
      status: 302,
      destination: 'https://www.zeffy.com/ticketing/mare-day--2025'
    }
  },
  integrations: [
    mdx(),
    sitemap(),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
