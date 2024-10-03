/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        colors: {
          "black": "#1F1D2B",
          "pink": "#EA7C69",
          "gray": "#252836",
          "light": "#ABBBC2",
          "red-pink": "#FF7CA3",
          "gray-light": "#393C49",
          "dark": "#2D303E",
          "lighter": "#E0E6E9",
          "green": "#50D1AA",
          "red": "#FF7CA3",
          "purple": "#9290FE",
          "orange": "#FFB572",

      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif']
      },
    },
    plugins: [
    ],
  }
}