/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  colors: {
      'body': '#420fe7',
      'intro': '#EEA1BE',
      'white': '#fff',
      'hero': '#bdafb0',

    },
    fontFamily: {
      'mont': ['Montserrat'],
      'robo': ['Roboto Mono'],
      'joan': ['Joan'],


    },
    extend: {},
  },
  plugins: [],
}