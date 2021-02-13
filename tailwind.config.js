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
      keyframes: {
        swing: {
          "0%": { transform: "rotate(2deg)" },
          "50%": { transform: "rotate(-1.5deg)" },
          "100%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        swing: "swing 3.5s ease-in-out forwards infinite",
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
