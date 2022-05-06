module.exports = {

  content: ["./src/**/*.tsx"],

  theme: {
    extend: {
      colors: {
        brand: {
          200: '#996DFF',
          500: '#8257e5'
        },
        dark: {
          800: '#18181b',
        }
      },
      dropShadow: {
        'widget': '0px 8px 24px rgba(130, 87, 229, 0.25)'
      }
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],


}
