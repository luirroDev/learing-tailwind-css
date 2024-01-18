/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "vietnam-pro": ['"Be Vietnam Pro"', "sans-serif"],
      },
      colors: {
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-blue": "hsl(228, 39%, 23%)",
        "dark-grayish-blue": "hsl(227, 12%, 61%)",
        "very-dark-blue": "hsl(233, 12%, 13%)",
        "very-pale-red": "hsl(13, 100%, 96%)",
        "vary-light-gray": "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "close-menu": "url('../../assets/icons/icon-close.svg')",
        "hamburger-menu": "url('../../assets/icons/icon-hamburger.svg')",
      },
    },
  },
  plugins: [],
};
