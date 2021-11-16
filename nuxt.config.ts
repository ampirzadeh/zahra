import { NuxtConfig } from '@nuxt/types'

export default {
  router: {
    base: process.env.NODE_ENV == 'development' ? '' : '/zahra/',
  },
  ssr: false,
  target: 'static',
  head: {
    title: 'zahra',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', 'nuxt-windicss'],
  modules: ['@nuxt/content'],
  content: {},
  build: {},
} as NuxtConfig
