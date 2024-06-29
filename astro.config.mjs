import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
// import swup from "@swup/astro";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/mareday': {
      status: 302,
      destination: 'https://www.zeffy.com/en-US/ticketing/792a5cb0-0063-4119-9da1-579c129a9871'
    }
  },
  integrations: [
    tailwind(),
    sitemap(),
    icon(),
    // swup({ theme: "slide", globalInstance: true }),
  ],
});
