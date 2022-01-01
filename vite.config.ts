import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
const viteConfig = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      vue: "vue/dist/vue.esm-bundler.js"
    }
  }
});

export default viteConfig;