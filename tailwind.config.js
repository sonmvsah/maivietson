/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "plc-primary": "#124f9a",
        "primary-600": "#4187BF",
        "primary-800": "#3A79AB",
        "primary-text": "#8EBA43",
        "second-600": "#257985",
        "second-800": "#2B616D",
        "second-gray": "#b9c4c9",
        sblack: "#000",
        swhite: "#FFF",
      },
    },
  },
  plugins: [],
};
