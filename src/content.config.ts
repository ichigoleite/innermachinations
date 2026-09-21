// Import the glob loader
import { file } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod

// Define a `loader` and `schema` for each collection
const questions = defineCollection({
  loader: async () => {
    const files = import.meta.glob<{ default: ImageMetadata }>(
      `/src/content/questions/*.{jpeg,jpg,png,gif}`,
      {
        eager: true,
      },
    );
    const items = Object.keys(files);
    console.log(files);
    // Must return an array of entries with an id property
    // or an object with IDs as keys and entries as values
    return items.map((item: any) => ({
      id: item.split("/").at(-1).split(".")[0],
      data: files[item],
    }));
  },
});
// Export a single `collections` object to register your collection(s)
export const collections = { questions };
