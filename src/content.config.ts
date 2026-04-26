import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      date: z.string(),
      year: z.number(),
      image: image(),
      pony: z.boolean().default(false),
      normalContent: z.string().optional(),
      summary: z.string(),
    }),
});

export const collections = { news };
