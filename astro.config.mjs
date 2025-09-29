// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://kazirafidnur.github.io/",
  vite: {
    plugins: [tailwindcss()],
  },
});
