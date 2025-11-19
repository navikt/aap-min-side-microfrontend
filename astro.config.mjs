import node from "@astrojs/node";
import react from "@astrojs/react";
import { defineConfig, envField } from "astro/config";
import prefixer from "postcss-prefix-selector";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import importmap from "./importmap.json";

// https://astro.build/config
export default defineConfig({
  build: {
    assetsPrefix: "https://cdn.nav.no/aap/aap-min-side-microfrontend",
    inlineStylesheets: "always",
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          prefixer({
            prefix: ".aap-min-side-microfrontend",
            ignoreFiles: [/module.css/],
          }),
        ],
      },
    },
  },
  integrations: [
    react(),
    {
      name: "importmap",
      hooks: {
        "astro:build:setup": ({ vite, target }) => {
          if (target === "client") {
            vite.plugins.push({
              ...rollupImportMapPlugin(importmap),
              enforce: "pre",
              apply: "build",
            });
          }
        },
      },
    },
  ],
  i18n: {
    defaultLocale: "nb",
    locales: ["nb", "nn", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  env: {
    schema: {
      INNSENDING_API_URL: envField.string({
        context: "server",
        access: "secret",
        default: "http://localhost:3000/api/innsending",
      }),
      MINE_AAP_URL: envField.string({
        context: "client",
        access: "public",
        default: "http://localhost:3000/aap/mine-aap/",
      }),
    },
  },
});
