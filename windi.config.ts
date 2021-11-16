import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  plugins: [
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
  ],
})
