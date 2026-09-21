// Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
const questions = defineCollection({
  loader: async () => {
    const files = import.meta.glob(
      `/public/questionsimg/*.{jpeg,jpg,png,gif,webp,avif}`,
      {
        import: "default",
        eager: true,
      },
    );
    const items = Object.keys(files);

    // Must return an array of entries with an id property
    // or an object with IDs as keys and entries as values
    return items.map((item: any) => ({
      id: item.split("/").at(-1).split(".")[0],
      data: item.replace("/public", ""),
      path: item,
    }));
  },
});
// Export a single `collections` object to register your collection(s)
export const collections = { questions };
