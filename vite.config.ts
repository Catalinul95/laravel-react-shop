import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";



export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/ts/app.tsx'],
            refresh: true,
        }),
        svgr(),
    ],
    server: {
        host: '0.0.0.0',
        hmr: {
            host: 'localhost'
        }
    },
});
