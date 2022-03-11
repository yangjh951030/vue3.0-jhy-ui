import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgLoader from 'vite-svg-loader'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),viteSvgLoader()],
  'resolve.alias': {
    '/@/': path.resolve(__dirname,'./src')
  },
  build: {
    lib: {
        entry: path.resolve(__dirname, "./src/UI/index.js"),
        name: "jhy-ui",
        fileName: (format) => `jhy-ui.${format}.js`
    },
    sourcemap: true,
    rollupOptions: {
        external: [
            "vue",
        ],
        output: {
            globals: {
                vue: "Vue",
            },
        },
    },
},
})
