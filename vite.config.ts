import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
// @ts-ignore: Explicitly ignoring type declaration issue
import { terser } from "rollup-plugin-terser";
import tailwindcss from "@tailwindcss/vite";

import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [tailwindcss(), preact(), visualizer()],
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
