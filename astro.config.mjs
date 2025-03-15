import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
// import swup from "@swup/astro";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      'import.meta.env.PONY': JSON.stringify(process.env.PONY || 'false')
    },
  },
  redirects: {
    '/mareday': {
      status: 302,
      destination: 'https://www.zeffy.com/ticketing/mare-day--2025'
    }
  },
  integrations: [
    tailwind(),
    sitemap(),
    icon(),
    // swup({ theme: "slide", globalInstance: true }),
  ],
});
