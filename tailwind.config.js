const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Public Sans"],
    },
    extend: {
      colors: {
        gray: colors.trueGray,
      },
      fontSize: {
        "6xl": "4rem",
      },
      screens: {
        "2xl": "1440px",
      },
      maxWidth: {
        lg: "16rem",
        xl: "23rem",
      },
    },
  },
  variants: {
    extend: {
      width: ["responsive", "group-hover"],
      transform: ["hover"],
    },
  },
  plugins: [],
};
