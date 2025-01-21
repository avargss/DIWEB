/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        azulado: "#1f64e5",
        morado: "#712c76",
      },
      backgroundImage: {
        fondo: "url('./assets/fondo.jpg')",
      },
      screens: {
        'sm': '480px',
        'pm': '500px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
};
