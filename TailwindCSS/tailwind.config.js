/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Ejercicio1/**/*.{html,js}"],
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