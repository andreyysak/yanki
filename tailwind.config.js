/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/img/hero.png')",
        'modelOne': "url('../src/img/model1.png')",
      },
    }
  },
  plugins: [],
}