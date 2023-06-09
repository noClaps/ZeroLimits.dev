import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://zerolimits.dev",
    integrations: [sitemap()],
    compressHTML: true,
    build: {
        inlineStylesheets: "auto"
    },
    scopedStyleStrategy: "class"
});
