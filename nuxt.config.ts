// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  modules: ['@nuxt/test-utils/module'],

  css: ['@mantine-vue/core/styles.css', '~/assets/styles.css'],

  postcss: {
    plugins: {
      'postcss-preset-mantine': {},
      'postcss-simple-vars': {
        variables: {
          'mantine-breakpoint-xs': '36em',
          'mantine-breakpoint-sm': '48em',
          'mantine-breakpoint-md': '62em',
          'mantine-breakpoint-lg': '75em',
          'mantine-breakpoint-xl': '88em',
        },
      },
    },
  },

  app: {
    head: {
      title: 'Mantine Vue Nuxt template',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no',
        },
        { name: 'description', content: 'I am using Mantine Vue with Nuxt!' },
      ],
      link: [{ rel: 'shortcut icon', href: '/favicon.svg' }],
    },
  },
})
