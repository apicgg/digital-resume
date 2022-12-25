/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      md: "600px",
    },
    extend: {
      colors: {
        mainTextColorDark: "#fff",
        secondaryTextColorDark: "#adb0b1",
        mainLinkColorDark: "rgb(30, 190, 214)",
        mainBorderColorDark: "#2b3031",
        mainBgColorDark: "#131415",
        mainTextColorLight: "#000",
        secondaryTextColorLight: "rgb(51 51 51)",
        mainLinkColorLight: "#0da2b8",
        mainBorderColorLight: "rgb(218, 218, 218)",
        mainBgColorLight: "rgb(249, 250, 251)",
      },
    },
  },
  plugins: [],
};
