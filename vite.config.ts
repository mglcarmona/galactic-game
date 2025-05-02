import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
// @ts-ignore: Explicitly ignoring type declaration issue
import { terser } from "rollup-plugin-terser";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

const DAY_IN_SECONDS = 60 * 60 * 24;

export default defineConfig({
  plugins: [
    tailwindcss(),
    preact(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) =>
              url.origin === "https://api-game.bloque.app",
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              networkTimeoutSeconds: 10,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: DAY_IN_SECONDS,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: ({ url }) =>
              url.origin.includes("bloque.app") &&
              url.pathname.endsWith(".svg"),
            handler: "CacheFirst",
            options: {
              cacheName: "svg-cache",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: DAY_IN_SECONDS * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  build: {
    target: "es2017",
    minify: "esbuild",
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      plugins: [
        terser({
          compress: {
            drop_console: true,
          },
          mangle: true,
        }),
      ],
    },
  },
});
