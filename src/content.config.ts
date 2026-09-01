// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";

// Define a `loader` and `schema` for each collection
const questions = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      question: z.string(),
      answer: z.string(),
      to: z.string().default("N/A"),
      date: z.date().default(new Date("2026-09-01")),
      image: image(),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { questions };
