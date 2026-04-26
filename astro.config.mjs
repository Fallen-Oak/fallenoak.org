import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";

const { PONY } = loadEnv(process.env.PONY, process.cwd(), "");

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
    sitemap(),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
