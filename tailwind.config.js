/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        darkNavy: "#1A2A33",
        semiDarkNavy: "#1F3641",
        lightYellow: "#F2B137",
        lightBlue: "#31C3BD",
        silverColor: "#A8BFC9",
      },
      fontFamily: {
        fontOutfit: "Outfit",
      },
      colors: {
        darkNavy: "#1A2A33",
        semiDarkNavy: "#1F3641",
        lightYellow: "#F2B137",
        lightBlue: "#31C3BD",
        silverColor: "#A8BFC9",
      },
      boxShadow: {
        shadowInner: "-1px -8px 10px -3px rgba(0,0,0,1) inset",
      },
    },
  },
  plugins: [],
};
