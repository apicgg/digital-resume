/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      md: '600px',
    },
    extend: {
      colors: {
        mainTextColorDark: '#fff',
        secondaryTextColorDark: '#adb0b1',
        mainLinkColorDark: 'rgb(30, 190, 214)',
        mainBorderColorDark: '#2b3031',
        mainBgColorDark: '#131415',
      },
    },
  },
  plugins: [],
}
