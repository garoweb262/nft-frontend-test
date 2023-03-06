/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E4AA3D",
        gray: "#E8E8E8",
        black: "#000000",
        secondary: "#FFF8EE",
        lightGray: "#FFFCF8",
        white: "#FFFFFF",
        line: "#979797",
        sec: "#FFFBF3",
      },
      fontFamily: {
        mont: ["'Montserrat'", "sans - serif"],
      },
    },

    screens: {
      xs: "576",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
