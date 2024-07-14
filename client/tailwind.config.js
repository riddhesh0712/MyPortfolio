/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#fea004",
        secondaryColor: "#1A1A1D",
        thirtaryColor: "#e37407"
      },
    },
  },
  plugins: [
    // Tailwind Scrollbar
    require('tailwind-scrollbar'),
  ],
}

