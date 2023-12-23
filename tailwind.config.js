module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_7f": "#0000007f", "900_3f": "#0000003f" },
        gray: {
          50: "#f8f8f8",
          400: "#b7b7b7",
          900: "#1a1d1a",
          "400_01": "#c0cbad",
        },
        white: { A700_7e: "#ffffff7e", A700_01: "#fefffe", A700: "#ffffff" },
        blue_gray: {
          50: "#f1f1f1",
          300: "#8ab0ab",
          700: "#3e505c",
          900: "#26413c",
          "300_01": "#8db3af",
          "100_9e": "#d9d9d99e",
        },
        red: { A700: "#ff0000" },
      },
      fontFamily: { poppins: "Poppins", montserrat: "Montserrat" },
      boxShadow: {
        bs: "0px 4px  4px 0px #0000003f",
        bs2: "inset 0px 4px  4px 0px #0000003f",
        bs1: "0px 4px  10px 0px #0000007f",
      },
      backgroundImage: { gradient: "linear-gradient(180deg ,#c0cbad,#fefffe)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
