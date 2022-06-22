import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: "localhost",
        https: false,
        open: true,
        port: "3000",
        strictPort: false,
        force: true,
        hmr: true,
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "@page": resolve(__dirname, "src/page"),
            "@components": resolve(__dirname, "src/components"),
            "@scss": resolve(__dirname, "src/assets/scss"),
        },
        extensions: [".vue", ".js"],
    },
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@scss/reset.scss";`,
            },
        },
    },
    plugins: [vue()],
});