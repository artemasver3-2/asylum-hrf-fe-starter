/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Staatliches: ['Staatliches', 'serif'],
        ShareTech: ['Share Tech', 'serif'],
        SmoochSans: ['Smooch Sans', 'serif'],
        Sarabun: ['Sarabun', 'serif'],
      },
      visibility: ['hover', 'focus'],
    },
  },
  plugins: [],
}