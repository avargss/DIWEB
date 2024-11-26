/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./13.TailwindCSS/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'tablet': '900px',
      },
    },
  },
  plugins: [],

  darkMode: 'class',

}