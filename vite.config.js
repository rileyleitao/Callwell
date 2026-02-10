import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    // Enable CSS code splitting so each route only loads the CSS it needs
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Split vendor code from app code for better caching
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router'],
          'heroicons': ['@heroicons/vue/24/outline', '@heroicons/vue/24/solid'],
        },
      },
    },
  },
})
