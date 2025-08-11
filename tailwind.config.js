/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1020",
        ink2: "#0f152b",
        tealBrand: "#43c5b9",
      }
    },
  },
  darkMode: "class",
  plugins: [],
}
