import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                albumns: resolve(__dirname, 'albumns/index.html'),
                posts: resolve(__dirname, 'posts/index.html'),
            },
        },
    },
})