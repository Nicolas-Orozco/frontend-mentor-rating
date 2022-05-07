module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(25, 97%, 53%)",
        grey1: "hsl(217, 12%, 63%)",
        grey2: "hsl(216, 12%, 54%)",
        blue1: "hsl(213, 19%, 18%)",
        blue2: "hsl(216, 19%, 14%)",
        blue3: "hsl(216, 19%, 11%)",
        blue4: "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        Overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
