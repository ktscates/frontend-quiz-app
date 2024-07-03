/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        purple: "#A729F5",
        darkNavy: "#313E51",
        navy: "#3B4D66",
        greyNavy: "#626C7F",
        lightGrey: "#F4F6FA",
        lightBlue: "#ABC1E1",
        green: "#26D782",
        red: "#EE5454",
        orange: "#FF7E35",
        green: "#2FD887",
        blue: "#306AFF",
      },
      fontFamily: {
        primary: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "desktop-light":
          "url('./assets/images/pattern-background-desktop-light.svg')",
        "desktop-dark":
          "url('./assets/images/pattern-background-desktop-dark.svg')",
        "tablet-light":
          "url('./assets/images/pattern-background-tablet-light.svg')",
        "tablet-dark":
          "url('./assets/images/pattern-background-tablet-dark.svg')",
        "mobile-light":
          "url('./assets/images/pattern-background-mobile-light.svg')",
        "mobile-dark":
          "url('./assets/images/pattern-background-mobile-dark.svg')",
      },
    },
  },
  plugins: [],
};
