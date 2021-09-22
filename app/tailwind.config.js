module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['"Lato"', "sans-serif"],
      script: ['"Dancing Script"', "cursive"],
    },
    colors: {
      textGreen: {
        DEFAULT: "#6EBC82",
      },
      textBlack: {
        DEFAULT: "#3C413D",
      },
      cardBg: {
        DEFAULT: "#EBEBEB",
      },
      btnBlue: {
        DEFAULT: "#6D87EE",
      },
      btnBlueHover: {
        DEFAULT: "#33479b",
      },
      titleDark: {
        DEFAULT: "#3C413D",
      },
      iconBg: {
        DEFAULT: "#CAE8D7",
      },
      footerText: {
        DEFAULT: "#EBEBEB",
      },
      bodyBg: {
        DEFAULT: "#b4b4b4",
      },
      white: {
        DEFAULT: "#ffffff",
      },
      shopDark: {
        DEFAULT: "#B7B4B4",
      },
      shopLight: {
        DEFAULT: "#D5D5D5",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
