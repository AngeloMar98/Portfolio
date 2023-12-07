/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js,ts}"],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        default: ['"Ubuntu Mono"', '"Segoe UI"'],
      },
      boxShadow: {},
      colors: {
        darkM: {
          white: "#ebebeb",
          gray: "#2B2B2B",
          lighterGray: "#646464",
        },
        lightM: {
          white: "#ffefeb",
          blue: "#173557",
          orange: "#ff7e17",
          darkOrange: "#FF5E3A",
          nero: "#1E1818",
        },
        purple: "#210347",
      },
      extend: {
        backgroundImage: (theme) => ({
          lightheader: "url('./src/assets/img/lightMobile.png')",

          darkheader: "url('src/assets/img/darkMobile.png')",
        }),
      },
    },
    screens: {
      mobile: "280px",
      tablet: "580px",
      bigTablet: "740px",
      laptop: "880px",
      desktop: "1080px",
      tall: { raw: "(min-height: 550px)" },
    },
  },
  safelist: ["translate-x-full", "translate-x-[200%]", "header-shadow"],
};
