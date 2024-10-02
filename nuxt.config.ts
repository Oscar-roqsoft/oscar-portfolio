// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  pages: true,
  experimental: {
    payloadExtraction: false
  },
  modules: ['nuxt-icon', '@vueuse/nuxt'],

  plugins: [
    {src:'~/plugins/scrollAnimation.js'}
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app:{
    head: {
      title: 'Nnoje Udochukwu',
      htmlAttrs: {
        lang: 'en',
        class: 'light'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            hid: 'description',
            name: 'description',
            content: 'my website description'
        }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
        integrity: 'sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM4I8O0sD2J1s8lF4rO7c96Z8pVhK3b3/7cq0',
        crossorigin: 'anonymous',
      },
    ],
    }
  }
  
})
