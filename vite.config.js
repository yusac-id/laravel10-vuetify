import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.js",
                "resources/js/fe.js",
                "resources/css/fe.scss",
            ],
            refresh: true,
        }),
        vuetify({ autoImport: true }),
    ],
    test: {
        globals: true,
        environment: "jsdom",
        deps: {
            inline: ["vuetify"]
        }        
    },
});
