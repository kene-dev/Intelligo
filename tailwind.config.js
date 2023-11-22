/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#800080",
        secondary: "#CEA5CE",
      },
    },
  },

  fontFamily: {
    PT: ["PT Sans", "sans-serif"],
  },
  plugins: [],
};
