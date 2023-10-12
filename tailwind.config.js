module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./api/**/*.{js}",
    "./styles/**/*.{css}",
    "./images/**/*.{*}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      disabled: "#F1F3F4",
      primary: "#00203D",
      white: "#FFFFFF",
      whiteGray: "#DEE2E6",
      blueL: "#4183D8",
      blueD: "#0E65F0",
      grayb1: "#E0E0E0",
      grayb2: "#E0D0BC",
      red: "#EE0000",
      premB1: "#F7FCFE",
      premB2: "#D6EFFB",
      premB3: "#F7FCFE",
      buttonP1: "rgb(13, 31, 161)",
      buttonPHover: "#2600FE",
      green: "#2A9843",
      black: "#000000",

      calc_gray_l: "#323232",
      calc_gray_m: "#464646",
      calc_gray_s: "#656565",
      calc_orange: "#FF9C3A",
      calc_white: "#FFFFFF",
      calc_green: "#398470",

      whats_blue: "#0278AE",
      whats_green: "#36C457",
      whats_gray_b: "#EEEEF0", //background
      whats_gray_t: "#838287", //text
      whats_gray_i: "#9B9CA2", //icons

      belief_blue: "#0278AE",
      belief_green: "#36C457",
      belief_gray_b: "#EEEEF0", //background
      belief_gray_t: "#838287", //text
      belief_gray_i: "#9B9CA2", //icons
      belief_pink: "#f257b6", //icons
    },
    extend: {
      textColor: ["group-hover"],
      backgroundImage: {
        background: "url('/images/background.png')",
        logo: "url('/images/logo.png')",
        flag1: "url('/images/is.png')",
        flag2: "url('/images/us.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}