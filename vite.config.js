import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

export default defineConfig({
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.vue'],
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      },
      { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' }
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 4000
  },
  plugins: [vue(), eslintPlugin()]
})
