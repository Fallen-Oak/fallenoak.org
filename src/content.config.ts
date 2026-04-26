import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/news" }),
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

const videos = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/videos" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      year: z.number(),
      image: image(),
      pony: z.boolean().default(true),
      summary: z.string(),
      embed: z.string(),
    }),
});

export const collections = { news, videos };
