import { defineConfig } from "vite"
import AutoImport from "unplugin-auto-import/vite"

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "Counter",
      fileName: "counter",
    },
  },
  plugins: [
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        // VueRouterAutoImports,
        {
          "@vueuse/core": [
            "computedAsync",
            "watchImmediate",
            "useStorage",
            "useEventListener",
          ],
        },
      ],
      dirs: ["src/logic", "src/composables", "src"],
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
    }),
  ],
})
