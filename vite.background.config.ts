import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import inject from '@rollup/plugin-inject'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    emptyOutDir: false,
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: resolve(__dirname, 'src/background.ts'),
      name: 'Metalet',
    },
    rollupOptions: {
      plugins: [
         inject({
           Buffer: ['buffer', 'Buffer'],
         }),
        nodePolyfills(),
      ],
      output: {
        entryFileNames: 'background.global.js',
        extend: true,
      },
    },
  },
})
