import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-headlessui', 'nuxt-lucide-icons', '@nuxt/ui', '@nuxt/image', '@ant-design-vue/nuxt'],
  css: [
    '@/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})